// dashboard page script 1
(function(){

  // 1. Official Exam Configuration (Canonical IDs: cgl, chsl, cpo, mts, gd, steno)
  const OFFICIAL_EXAMS = [
    { id: 'cgl', code: 'SSC CGL', name: 'Combined Graduate Level Examination (Tier I & II)' },
    { id: 'chsl', code: 'SSC CHSL', name: 'Combined Higher Secondary Level (10+2)' },
    { id: 'cpo', code: 'SSC CPO', name: 'Central Police Organisation SI & ASI' },
    { id: 'mts', code: 'SSC MTS', name: 'Multi-Tasking Staff & Havaldar' },
    { id: 'gd', code: 'SSC GD', name: 'General Duty Constable (CAPFs, SSF, Rifleman)' },
    { id: 'steno', code: 'SSC Stenographer', name: 'Grade C & D Examination' }
  ];

  // Helper: Normalize target exam identifier
  function normalizeExamId(val) {
    if (!val || typeof val !== 'string') return 'cgl';
    const low = val.trim().toLowerCase();
    if (low === 'stenographer' || low === 'steno') return 'steno';
    if (low === 'cgl' || low.includes('cgl')) return 'cgl';
    if (low === 'chsl' || low.includes('chsl')) return 'chsl';
    if (low === 'cpo' || low.includes('cpo')) return 'cpo';
    if (low === 'mts' || low.includes('mts')) return 'mts';
    if (low === 'gd' || low.includes('gd')) return 'gd';
    return OFFICIAL_EXAMS.some(e => e.id === low) ? low : 'cgl';
  }

  function getInitialTargetExam() {
    const pref = window.SSCFlixState && window.SSCFlixState.studentPreferences && window.SSCFlixState.studentPreferences.targetExam;
    if (pref) return normalizeExamId(pref);
    try {
      const storedExam = localStorage.getItem('sscflix-target-exam');
      if (storedExam) return normalizeExamId(storedExam);
    } catch (error) {
      // Keep the default exam when browser storage is unavailable.
    }
    return 'cgl';
  }

  let currentTargetExamId = getInitialTargetExam();
  let currentActiveAttemptId = null;

  function getExamObject(examId) {
    const id = normalizeExamId(examId);
    return OFFICIAL_EXAMS.find(e => e.id === id) || OFFICIAL_EXAMS[0];
  }

  // Known subject keys mapping for SSC
  const SUBJECT_METADATA = {
    quantitative_aptitude: { label: 'Quantitative Aptitude' },
    general_intelligence_reasoning: { label: 'General Intelligence & Reasoning' },
    english_comprehension: { label: 'English Comprehension' },
    general_awareness: { label: 'General Awareness' }
  };

  function normalizeSubjectKey(raw) {
    if (!raw || typeof raw !== 'string') return null;
    const s = raw.toLowerCase().replace(/[\s\-_&/]+/g, '_');
    if (s.includes('quant') || s.includes('math') || s.includes('aptitude') || s.includes('numerical')) return 'quantitative_aptitude';
    if (s.includes('reasoning') || s.includes('intelligence') || s.includes('gi') || s.includes('gir')) return 'general_intelligence_reasoning';
    if (s.includes('english') || s.includes('comprehension') || s.includes('verbal')) return 'english_comprehension';
    if (s.includes('awareness') || s.includes('general_knowledge') || s.includes('gk') || s.includes('ga') || s.includes('science')) return 'general_awareness';
    return raw.trim();
  }

  function getSubjectDisplayLabel(key) {
    if (SUBJECT_METADATA[key]) return SUBJECT_METADATA[key].label;
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  // Supported canonical attempt statuses
  const RECOGNIZED_STATUSES = ['in_progress', 'completed', 'submitted', 'expired', 'abandoned', 'interrupted'];

  // Central Resumability Validator
  function isAttemptResumable(attempt) {
    if (!attempt || typeof attempt !== 'object') return false;
    const rawId = attempt.id !== undefined && attempt.id !== null ? String(attempt.id).trim() : '';
    if (!rawId) return false;

    const status = String(attempt.status || '').toLowerCase().trim();
    if (status !== 'in_progress') return false;

    const expiryField = attempt.expiresAt !== undefined ? attempt.expiresAt : attempt.expiry;
    if (expiryField !== undefined && expiryField !== null && expiryField !== '') {
      const expTime = new Date(expiryField).getTime();
      if (isNaN(expTime)) return false; // parsing failed: treated as unknown validity -> not resumable
      if (expTime <= Date.now()) return false; // expired
    }

    return true;
  }

  // 3. Robust Data-Driven Dashboard Data Adapter
  function getStudentDashboardData() {
    const state = window.SSCFlixState || {};
    const profile = (state.studentProfile && typeof state.studentProfile === 'object') ? state.studentProfile : null;
    const rawAttempts = Array.isArray(state.attempts) ? state.attempts : [];
    const rawResponses = Array.isArray(state.responses) ? state.responses : [];
    const rawRecent = Array.isArray(state.recentActivity) ? state.recentActivity : [];

    // 3.1 Validate and deduplicate attempts by stable ID
    const attemptsById = new Map();
    rawAttempts.forEach(a => {
      if (!a || typeof a !== 'object') return;
      const rawId = a.id !== undefined && a.id !== null ? String(a.id).trim() : '';
      if (!rawId) return; // require stable non-empty attempt ID

      const status = String(a.status || '').toLowerCase().trim();
      if (!RECOGNIZED_STATUSES.includes(status)) return; // must be recognized status

      if (!attemptsById.has(rawId)) {
        attemptsById.set(rawId, a);
      }
    });

    const validAttempts = Array.from(attemptsById.values());

    // Genuine started attempts count strictly deduplicated unique attempts
    const startedAttemptsCount = validAttempts.length;

    // Resumable active attempt check
    const activeAttemptRaw = validAttempts.find(a => isAttemptResumable(a));
    let activeAttempt = null;
    if (activeAttemptRaw) {
      const attempted = Number(activeAttemptRaw.questionsAttempted || (Array.isArray(activeAttemptRaw.responses) ? activeAttemptRaw.responses.length : 0)) || 0;
      const total = Number(activeAttemptRaw.totalQuestions) || 0;
      let pct = 0;
      if (total > 0) {
        pct = Math.max(0, Math.min(100, Math.round((attempted / total) * 100)));
      }
      activeAttempt = {
        id: String(activeAttemptRaw.id).trim(),
        title: activeAttemptRaw.title || 'Practice Test',
        category: activeAttemptRaw.category || activeAttemptRaw.testType || '',
        subTitle: activeAttemptRaw.subTitle || activeAttemptRaw.description || '',
        questionsAttempted: attempted,
        totalQuestions: total,
        progressPct: pct
      };
    }

    // 3.2 Canonical Response Deduplication
    // Identity Hierarchy:
    // 1. Prefer unique response record ID (`response.id` or `response.responseId`)
    // 2. Otherwise combination of attempt ID and question ID (`attemptId + '::' + questionId`)
    // Never use a generic 'global' identifier.
    // Records without reliable identity are excluded from deduplication-sensitive calculations.
    const responseMap = new Map();
    let unidentifiableCount = 0;

    function processResponseRecord(r, fallbackAttemptId) {
      if (!r || typeof r !== 'object') return;
      let uniqueKey = null;

      const recordId = (r.id !== undefined && r.id !== null && String(r.id).trim() !== '') ? String(r.id).trim()
        : (r.responseId !== undefined && r.responseId !== null && String(r.responseId).trim() !== '') ? String(r.responseId).trim()
        : null;

      if (recordId) {
        uniqueKey = `id::${recordId}`;
      } else {
        const attId = (r.attemptId !== undefined && r.attemptId !== null && String(r.attemptId).trim() !== '')
          ? String(r.attemptId).trim()
          : (fallbackAttemptId ? String(fallbackAttemptId).trim() : null);

        const qId = (r.questionId !== undefined && r.questionId !== null && String(r.questionId).trim() !== '')
          ? String(r.questionId).trim()
          : null;

        if (attId && qId) {
          uniqueKey = `${attId}::${qId}`;
        }
      }

      if (uniqueKey) {
        if (!responseMap.has(uniqueKey)) {
          responseMap.set(uniqueKey, r);
        }
      } else {
        unidentifiableCount++;
      }
    }

    if (rawResponses.length > 0) {
      rawResponses.forEach(r => processResponseRecord(r, null));
    } else {
      validAttempts.forEach(a => {
        const aId = String(a.id).trim();
        if (Array.isArray(a.evaluatedResponses)) {
          a.evaluatedResponses.forEach(r => processResponseRecord(r, aId));
        }
      });
    }

    const deduplicatedResponses = Array.from(responseMap.values());

    // 3.3 Questions Attempted
    let uniqueQuestionsAttemptedCount = 0;
    if (deduplicatedResponses.length > 0) {
      const attemptedOnly = deduplicatedResponses.filter(r => {
        if (r.status === 'attempted' || r.status === 'answered') return true;
        if (r.selectedOption !== undefined && r.selectedOption !== null && r.selectedOption !== '') return true;
        if (r.isEvaluated === true || typeof r.isCorrect === 'boolean') return true;
        return false;
      });
      uniqueQuestionsAttemptedCount = attemptedOnly.length;
    } else {
      let sumAttemptedQs = 0;
      validAttempts.forEach(a => {
        if (typeof a.questionsAttempted === 'number' && !isNaN(a.questionsAttempted)) {
          sumAttemptedQs += a.questionsAttempted;
        } else if (Array.isArray(a.responses)) {
          sumAttemptedQs += a.responses.length;
        }
      });
      uniqueQuestionsAttemptedCount = sumAttemptedQs;
    }

    // 3.4 Average Accuracy: Strictly explicitly evaluated responses
    const evaluatedResponses = deduplicatedResponses.filter(r => {
      if (r.isEvaluated === true && typeof r.isCorrect === 'boolean') return true;
      if (typeof r.isCorrect === 'boolean') return true;
      return false;
    });

    let avgAccuracy = null;
    if (evaluatedResponses.length > 0) {
      const correctEvaluatedCount = evaluatedResponses.filter(r => r.isCorrect === true).length;
      avgAccuracy = Math.round((correctEvaluatedCount / evaluatedResponses.length) * 100);
    }

    // 3.5 Average Score: Strictly validated criteria
    // - Every included attempt is completed or submitted
    // - Every included attempt has valid numeric score >= 0
    // - Every included attempt has valid positive maxScore > 0
    // - All included attempts share identical maxScore
    // - Every score <= maxScore
    let avgScore = null;
    const completedAttempts = validAttempts.filter(a => {
      const st = String(a.status || '').toLowerCase().trim();
      return st === 'completed' || st === 'submitted';
    });

    if (completedAttempts.length > 0) {
      let isScaleValid = true;
      let sharedMaxScore = null;
      let scoreSum = 0;

      for (const a of completedAttempts) {
        if (typeof a.score !== 'number' || isNaN(a.score) || a.score < 0) {
          isScaleValid = false;
          break;
        }
        if (typeof a.maxScore !== 'number' || isNaN(a.maxScore) || a.maxScore <= 0) {
          isScaleValid = false;
          break;
        }
        if (a.score > a.maxScore) {
          isScaleValid = false;
          break;
        }
        if (sharedMaxScore === null) {
          sharedMaxScore = a.maxScore;
        } else if (sharedMaxScore !== a.maxScore) {
          isScaleValid = false;
          break;
        }
        scoreSum += a.score;
      }

      if (isScaleValid && sharedMaxScore !== null) {
        const mean = (scoreSum / completedAttempts.length).toFixed(1);
        avgScore = `${mean} / ${sharedMaxScore}`;
      }
    }

    // 3.6 Subject-wise Accuracy
    const subjectMap = {};
    evaluatedResponses.forEach(r => {
      const rawSub = r.subject || r.subjectKey || r.section;
      const key = normalizeSubjectKey(rawSub);
      if (!key) return;
      if (!subjectMap[key]) {
        subjectMap[key] = { key: key, correct: 0, total: 0 };
      }
      subjectMap[key].total++;
      if (r.isCorrect === true) {
        subjectMap[key].correct++;
      }
    });

    const subjectAccuracyList = Object.values(subjectMap)
      .filter(s => s.total >= 3)
      .map(s => {
        const acc = Math.round((s.correct / s.total) * 100);
        let tag = "Moderate";
        let tagClass = "bg-amber-50 text-amber-800 border-amber-200";
        let barClass = "bg-amber-500";
        if (acc >= 75) {
          tag = "Strong";
          tagClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
          barClass = "bg-emerald-600";
        } else if (acc >= 60) {
          tag = "On Track";
          tagClass = "bg-blue-50 text-[#1D4ED8] border-blue-200";
          barClass = "bg-[#1D4ED8]";
        } else {
          tag = "Needs Focus";
          tagClass = "bg-red-50 text-red-700 border-red-200";
          barClass = "bg-red-500";
        }
        return {
          key: s.key,
          label: getSubjectDisplayLabel(s.key),
          accuracy: acc,
          correct: s.correct,
          total: s.total,
          tag: tag,
          tagClass: tagClass,
          barClass: barClass
        };
      });

    let recommendation = null;
    if (subjectAccuracyList.length > 0) {
      const sortedByAcc = [...subjectAccuracyList].sort((a, b) => a.accuracy - b.accuracy);
      if (sortedByAcc[0].accuracy < 60) {
        recommendation = {
          title: `Recommended Next Action: Drill ${sortedByAcc[0].label}`,
          desc: `Evaluated performance shows accuracy of ${sortedByAcc[0].accuracy}% (${sortedByAcc[0].correct} / ${sortedByAcc[0].total} correct). Practice chapter drills to strengthen this topic.`,
          ctaText: "Start Chapter Drill →",
          subjectKey: sortedByAcc[0].key
        };
      }
    }

    // 3.7 Recent Activity Processing
    const activityItems = [];
    const seenAttemptIds = new Set();

    // Map attempts first for canonical status and linking
    validAttempts.forEach(att => {
      const aId = String(att.id).trim();
      seenAttemptIds.add(aId);

      const rawStatus = String(att.status || '').toLowerCase().trim();
      let statusDisplay = "Unknown";
      if (rawStatus === 'in_progress') statusDisplay = "In Progress";
      else if (rawStatus === 'completed') statusDisplay = "Completed";
      else if (rawStatus === 'submitted') statusDisplay = "Submitted";
      else if (rawStatus === 'expired') statusDisplay = "Expired";
      else if (rawStatus === 'abandoned') statusDisplay = "Abandoned";
      else if (rawStatus === 'interrupted') statusDisplay = "Interrupted";

      let timeVal = null;
      let timeDisplay = null;
      const rawDate = att.completedAt || att.submittedAt || att.startedAt || att.timestamp;
      if (rawDate) {
        const parsed = new Date(rawDate);
        if (!isNaN(parsed.getTime())) {
          timeVal = parsed.getTime();
          timeDisplay = parsed.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        }
      }

      let detail = '';
      if (rawStatus === 'in_progress') {
        const qCount = att.questionsAttempted || 0;
        const tCount = att.totalQuestions || 0;
        detail = tCount ? `${qCount}/${tCount} Qs Attempted` : `${qCount} Qs Attempted`;
      } else if (typeof att.score === 'number' && !isNaN(att.score)) {
        detail = (typeof att.maxScore === 'number' && !isNaN(att.maxScore))
          ? `Score: ${att.score}/${att.maxScore}`
          : `Score: ${att.score}`;
      }

      // Action eligibility
      let eligibleAction = null;
      if (isAttemptResumable(att)) {
        eligibleAction = { type: 'resume', label: 'Resume', attemptId: aId };
      } else if (rawStatus === 'completed' || rawStatus === 'submitted') {
        const hasResult = att.result !== undefined || (Array.isArray(att.evaluatedResponses) && att.evaluatedResponses.length > 0) || (typeof att.score === 'number' && !isNaN(att.score));
        if (hasResult) {
          eligibleAction = { type: 'view_result', label: 'View Result', attemptId: aId };
        }
      }

      activityItems.push({
        id: aId,
        title: att.title || 'Practice Test',
        status: statusDisplay,
        rawStatus: rawStatus,
        detail: detail,
        timestamp: timeVal,
        timeDisplay: timeDisplay,
        action: eligibleAction
      });
    });

    // Add standalone recentActivity if not already covered by attempt
    if (rawRecent.length > 0) {
      rawRecent.forEach(item => {
        if (!item || typeof item !== 'object') return;
        const itemId = item.id ? String(item.id).trim() : null;
        if (itemId && seenAttemptIds.has(itemId)) return; // prevent duplicate

        const rawStatus = String(item.status || (item.isPending ? 'in_progress' : '')).toLowerCase().trim();
        let statusDisplay = "Unknown";
        if (rawStatus === 'in_progress') statusDisplay = "In Progress";
        else if (rawStatus === 'completed') statusDisplay = "Completed";
        else if (rawStatus === 'submitted') statusDisplay = "Submitted";
        else if (rawStatus === 'expired') statusDisplay = "Expired";
        else if (rawStatus === 'abandoned') statusDisplay = "Abandoned";
        else if (rawStatus === 'interrupted') statusDisplay = "Interrupted";

        let timeVal = null;
        let timeDisplay = null;
        const rawDate = item.timestamp || item.date || item.time;
        if (rawDate) {
          const parsed = new Date(rawDate);
          if (!isNaN(parsed.getTime())) {
            timeVal = parsed.getTime();
            timeDisplay = parsed.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          }
        }

        // Resumable check
        let eligibleAction = null;
        const linkedAttempt = itemId ? attemptsById.get(itemId) : null;
        if (linkedAttempt && isAttemptResumable(linkedAttempt)) {
          eligibleAction = { type: 'resume', label: 'Resume', attemptId: itemId };
        } else if (rawStatus === 'completed' || rawStatus === 'submitted') {
          if (item.hasEvaluatedData === true || item.result !== undefined || (linkedAttempt && typeof linkedAttempt.score === 'number')) {
            eligibleAction = { type: 'view_result', label: 'View Result', attemptId: itemId };
          }
        }

        activityItems.push({
          id: itemId || '',
          title: item.title || 'Practice Test',
          status: statusDisplay,
          rawStatus: rawStatus,
          detail: item.detail || '',
          timestamp: timeVal,
          timeDisplay: timeDisplay,
          action: eligibleAction
        });
      });
    }

    // Sort newest first with valid timestamps
    activityItems.sort((a, b) => {
      const ta = typeof a.timestamp === 'number' ? a.timestamp : 0;
      const tb = typeof b.timestamp === 'number' ? b.timestamp : 0;
      return tb - ta;
    });

    const isReturning = startedAttemptsCount > 0 || activityItems.length > 0;

    return {
      profile: profile,
      isReturning: isReturning,
      activeAttempt: activeAttempt,
      stats: {
        testsAttempted: startedAttemptsCount,
        questionsAttempted: uniqueQuestionsAttemptedCount,
        avgAccuracy: avgAccuracy,
        avgScore: avgScore
      },
      subjectAccuracy: subjectAccuracyList,
      recommendation: recommendation,
      recentActivity: activityItems.slice(0, 5)
    };
  }

  // Safe initial derivation
  function getInitials(name) {
    if (typeof name !== 'string' || name.trim().length === 0) return "ST";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "ST";
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function getFirstName(name) {
    if (typeof name !== 'string' || name.trim().length === 0) return "Student";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    return parts[0] || "Student";
  }

  // Master Render Coordinator
  function renderDashboard() {
    const data = getStudentDashboardData();
    renderStudentIdentity(data);
    renderTargetExamIndicators();
    renderDashboardView(data);
  }

  // Defensive profile rendering
  function renderStudentIdentity(data) {
    const profile = data.profile;
    const isProfileValid = profile && typeof profile === 'object';
    const hasName = isProfileValid && typeof profile.name === 'string' && profile.name.trim().length > 0;
    const name = hasName ? profile.name.trim() : "Student";
    const initials = hasName ? getInitials(name) : "ST";
    const firstName = hasName ? getFirstName(name) : "Student";

    const greetingTitle = document.getElementById('greeting-title');
    if (greetingTitle) {
      greetingTitle.textContent = data.isReturning
        ? `Welcome back, ${firstName}`
        : `Welcome, ${name}`;
    }

    const userNameEl = document.getElementById('user-display-name');
    if (userNameEl) {
      userNameEl.textContent = name;
    }

    const userEmailEl = document.getElementById('user-display-email');
    if (userEmailEl) {
      const hasEmail = isProfileValid && typeof profile.email === 'string' && profile.email.trim().length > 0;
      if (hasEmail) {
        userEmailEl.textContent = profile.email.trim();
        userEmailEl.classList.remove('hidden');
      } else {
        userEmailEl.textContent = "";
        userEmailEl.classList.add('hidden');
      }
    }

    const avatarEls = document.querySelectorAll('.user-avatar-initials');
    avatarEls.forEach(el => { el.textContent = initials; });
    const sidebarName = document.getElementById('sidebar-user-name');
    if (sidebarName) sidebarName.textContent = name;

    const sidebarAvatars = document.querySelectorAll('.sidebar-avatar-initials');
    sidebarAvatars.forEach(el => { el.textContent = initials; });
  }

  // Target exam indicators
  function renderTargetExamIndicators() {
    const examObj = getExamObject(currentTargetExamId);
    const badges = document.querySelectorAll('.target-exam-text');
    badges.forEach(b => {
      b.textContent = examObj.code;
    });

    const greetingSub = document.getElementById('greeting-sub');
    if (greetingSub) {
      greetingSub.replaceChildren();
      const txt1 = document.createTextNode("Here is your preparation overview for ");
      const span = document.createElement('span');
      span.className = "font-medium text-[#0F172A] target-exam-text";
      span.textContent = examObj.code;
      const txt2 = document.createTextNode(".");
      greetingSub.appendChild(txt1);
      greetingSub.appendChild(span);
      greetingSub.appendChild(txt2);
    }

    const examCardDesc = document.getElementById('target-exam-card-description');
    if (examCardDesc) {
      examCardDesc.textContent = `${examObj.name} preparation workspace. Track your mock test attempts, practice previous year questions, and chapter drills.`;
    }
  }

  // View presentation
  function renderDashboardView(data) {
    const heroReturningActive = document.getElementById('hero-card-returning');
    const heroReturningInactive = document.getElementById('hero-card-returning-inactive');
    const heroNew = document.getElementById('hero-card-new');

    const perfReturning = document.getElementById('performance-block-returning');
    const perfNew = document.getElementById('performance-block-new');
    const perfPlaceholderTitle = document.getElementById('performance-placeholder-title');
    const perfPlaceholderDesc = document.getElementById('performance-placeholder-desc');
    const perfPlaceholderBtn = document.getElementById('performance-placeholder-btn');

    const recentActivityContainer = document.getElementById('recent-activity-container');
    const recentActivityNew = document.getElementById('recent-activity-new');
    const studyStatus = document.getElementById('study-overview-status');

    if (data.isReturning) {
      if (studyStatus) {
        studyStatus.textContent = "Active Prep";
        studyStatus.className = "text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]";
      }

      if (data.activeAttempt) {
        currentActiveAttemptId = data.activeAttempt.id;
        if (heroReturningActive) heroReturningActive.classList.remove('hidden');
        if (heroReturningInactive) heroReturningInactive.classList.add('hidden');
        if (heroNew) heroNew.classList.add('hidden');

        const examObj = getExamObject(currentTargetExamId);
        const titleEl = document.getElementById('in-progress-title');
        if (titleEl) titleEl.textContent = data.activeAttempt.title.startsWith("SSC") ? data.activeAttempt.title : `${examObj.code} ${data.activeAttempt.title}`;

        const subEl = document.getElementById('in-progress-sub');
        if (subEl) subEl.textContent = data.activeAttempt.subTitle || "Sectional and topic drills";

        const catEl = document.getElementById('in-progress-category');
        if (catEl) {
          catEl.textContent = data.activeAttempt.category ? `• ${data.activeAttempt.category}` : '';
        }

        const countEl = document.getElementById('in-progress-count');
        if (countEl) {
          countEl.textContent = data.activeAttempt.totalQuestions > 0
            ? `${data.activeAttempt.questionsAttempted} of ${data.activeAttempt.totalQuestions} Questions Attempted`
            : `${data.activeAttempt.questionsAttempted} Questions Attempted`;
        }

        const pctEl = document.getElementById('in-progress-percent');
        if (pctEl) pctEl.textContent = `${data.activeAttempt.progressPct}%`;

        const barEl = document.getElementById('in-progress-bar');
        if (barEl) barEl.style.width = `${data.activeAttempt.progressPct}%`;
      } else {
        currentActiveAttemptId = null;
        if (heroReturningActive) heroReturningActive.classList.add('hidden');
        if (heroReturningInactive) heroReturningInactive.classList.remove('hidden');
        if (heroNew) heroNew.classList.add('hidden');
      }

      const mTests = document.getElementById('metric-tests-val');
      if (mTests) mTests.textContent = String(data.stats.testsAttempted);

      const mQuestions = document.getElementById('metric-questions-val');
      if (mQuestions) mQuestions.textContent = String(data.stats.questionsAttempted);

      const mAccuracy = document.getElementById('metric-accuracy-val');
      if (mAccuracy) mAccuracy.textContent = data.stats.avgAccuracy !== null ? `${data.stats.avgAccuracy}%` : '—';

      const mScore = document.getElementById('metric-score-val');
      if (mScore) mScore.textContent = data.stats.avgScore !== null ? String(data.stats.avgScore) : '—';

      if (data.subjectAccuracy && data.subjectAccuracy.length > 0) {
        if (perfReturning) perfReturning.classList.remove('hidden');
        if (perfNew) perfNew.classList.add('hidden');
        renderSubjectAccuracy(data.subjectAccuracy, data.recommendation);
      } else {
        if (perfReturning) perfReturning.classList.add('hidden');
        if (perfNew) perfNew.classList.remove('hidden');
        if (perfPlaceholderTitle) perfPlaceholderTitle.textContent = "More evaluated questions needed";
        if (perfPlaceholderDesc) perfPlaceholderDesc.textContent = "Subject-wise accuracy unlocks once at least 3 questions in a subject are evaluated.";
        if (perfPlaceholderBtn) perfPlaceholderBtn.textContent = "Practice More Questions";
      }

      if (data.recentActivity && data.recentActivity.length > 0) {
        if (recentActivityContainer) recentActivityContainer.classList.remove('hidden');
        if (recentActivityNew) recentActivityNew.classList.add('hidden');
        renderRecentActivityList(data.recentActivity);
      } else {
        if (recentActivityContainer) recentActivityContainer.classList.add('hidden');
        if (recentActivityNew) recentActivityNew.classList.remove('hidden');
      }

    } else {
      currentActiveAttemptId = null;
      if (heroReturningActive) heroReturningActive.classList.add('hidden');
      if (heroReturningInactive) heroReturningInactive.classList.add('hidden');
      if (heroNew) heroNew.classList.remove('hidden');

      if (perfReturning) perfReturning.classList.add('hidden');
      if (perfNew) perfNew.classList.remove('hidden');
      if (perfPlaceholderTitle) perfPlaceholderTitle.textContent = "Performance Analytics will unlock here";
      if (perfPlaceholderDesc) perfPlaceholderDesc.textContent = "Complete your first evaluated practice test or chapter drill to generate subject-wise accuracy insights.";
      if (perfPlaceholderBtn) perfPlaceholderBtn.textContent = "Attempt 1st Test Now";

      if (recentActivityContainer) recentActivityContainer.classList.add('hidden');
      if (recentActivityNew) recentActivityNew.classList.remove('hidden');

      if (studyStatus) {
        studyStatus.textContent = "New Account";
        studyStatus.className = "text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200";
      }

      const mTests = document.getElementById('metric-tests-val');
      if (mTests) mTests.textContent = "0";

      const mQuestions = document.getElementById('metric-questions-val');
      if (mQuestions) mQuestions.textContent = "0";

      const mAccuracy = document.getElementById('metric-accuracy-val');
      if (mAccuracy) mAccuracy.textContent = "—";

      const mScore = document.getElementById('metric-score-val');
      if (mScore) mScore.textContent = "—";
    }
  }

  // Safe DOM Rendering for Subject Accuracy
  function renderSubjectAccuracy(subjects, recommendation) {
    const container = document.getElementById('subject-accuracy-container');
    if (!container) return;
    container.replaceChildren();

    subjects.forEach(item => {
      const itemWrapper = document.createElement('div');

      const topRow = document.createElement('div');
      topRow.className = "flex justify-between items-center text-xs mb-1";

      const nameWrapper = document.createElement('span');
      nameWrapper.className = "font-medium text-[#0F172A] flex items-center gap-1.5";
      nameWrapper.textContent = item.label + " ";

      const tagSpan = document.createElement('span');
      tagSpan.className = `text-xs font-semibold px-1.5 py-0.5 rounded border ${item.tagClass}`;
      tagSpan.textContent = item.tag;
      nameWrapper.appendChild(tagSpan);

      const scoreWrapper = document.createElement('span');
      scoreWrapper.className = "font-semibold text-slate-800";
      scoreWrapper.textContent = `${item.accuracy}% `;

      const countSub = document.createElement('span');
      countSub.className = "text-xs text-[#64748B] font-normal";
      countSub.textContent = `(${item.correct} / ${item.total})`;
      scoreWrapper.appendChild(countSub);

      topRow.appendChild(nameWrapper);
      topRow.appendChild(scoreWrapper);

      const track = document.createElement('div');
      track.className = "w-full bg-slate-100 rounded-full h-2 overflow-hidden";

      const fill = document.createElement('div');
      fill.className = `${item.barClass} h-2 rounded-full`;
      fill.style.width = `${item.accuracy}%`;

      track.appendChild(fill);
      itemWrapper.appendChild(topRow);
      itemWrapper.appendChild(track);

      container.appendChild(itemWrapper);
    });

    const recWrapper = document.getElementById('recommendation-card-wrapper');
    if (recWrapper) {
      if (recommendation) {
        recWrapper.classList.remove('hidden');
        const recTitle = document.getElementById('recommendation-title');
        if (recTitle) recTitle.textContent = recommendation.title;

        const recDesc = document.getElementById('recommendation-desc');
        if (recDesc) recDesc.textContent = recommendation.desc;

        const recBtn = document.getElementById('recommendation-btn');
        if (recBtn) {
          recBtn.textContent = recommendation.ctaText;
          recBtn.onclick = function() {
            try {
              localStorage.setItem('sscflix-chapter-recommendation', JSON.stringify({
                subjectKey: recommendation.subjectKey || '',
                title: recommendation.title || '',
                examId: currentTargetExamId,
                source: 'dashboard-recommendation'
              }));
            } catch (error) {}
            window.SSCFlixRouter.navigate("/chapter-tests");
          };
        }
      } else {
        recWrapper.classList.add('hidden');
      }
    }
  }

  // Safe DOM Rendering for Recent Activity
  function renderRecentActivityList(activities) {
    const list = document.getElementById('recent-activity-list');
    if (!list) return;
    list.replaceChildren();

    const examObj = getExamObject(currentTargetExamId);

    activities.forEach(act => {
      const row = document.createElement('div');
      row.className = "py-2.5 flex items-start justify-between gap-2.5";

      const left = document.createElement('div');
      left.className = "min-w-0";

      const titleLine = document.createElement('div');
      titleLine.className = "flex items-center gap-1.5";

      const dot = document.createElement('span');
      let dotColor = 'bg-slate-400';
      if (act.rawStatus === 'in_progress') dotColor = 'bg-amber-500';
      else if (act.rawStatus === 'completed' || act.rawStatus === 'submitted') dotColor = 'bg-emerald-500';
      else if (act.rawStatus === 'expired' || act.rawStatus === 'abandoned') dotColor = 'bg-slate-400';
      dot.className = `w-2 h-2 rounded-full ${dotColor}`;

      const titleP = document.createElement('p');
      titleP.className = "text-xs font-bold text-[#0F172A] truncate";
      titleP.textContent = act.title.startsWith("SSC") ? act.title : `${examObj.code} ${act.title}`;

      titleLine.appendChild(dot);
      titleLine.appendChild(titleP);

      const subP = document.createElement('p');
      subP.className = "text-xs text-[#64748B] mt-0.5";

      const metaParts = [];
      if (act.status && act.status !== 'Unknown') {
        metaParts.push(act.status);
      }
      if (act.detail) {
        metaParts.push(act.detail);
      }
      if (act.timeDisplay) {
        metaParts.push(act.timeDisplay);
      }
      subP.textContent = metaParts.join(' • ');

      left.appendChild(titleLine);
      left.appendChild(subP);
      row.appendChild(left);

      // Clean Action Presentation: only show if eligible
      if (act.action && act.action.label) {
        const btn = document.createElement('button');
        if (act.action.type === 'resume') {
          btn.className = "shrink-0 text-xs font-semibold px-2.5 py-1 bg-[#EFF6FF] text-[#1D4ED8] hover:bg-blue-100 rounded transition-colors cursor-pointer";
        } else {
          btn.className = "shrink-0 text-xs font-medium px-2 py-1 text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 rounded transition-colors cursor-pointer";
        }
        btn.textContent = act.action.label;
        btn.addEventListener('click', function() {
          const attemptId = String(act.id || act.action.attemptId || 'dashboard-recent-preview');
          const attemptTitle = String(act.title || titleP.textContent || 'Practice Test');

          if (act.action.type === 'resume') {
            try {
              localStorage.setItem('sscflix-active-test-preview', JSON.stringify({
                testId: attemptId,
                title: attemptTitle + ' — Resume Preview',
                category: act.category || 'Saved Attempt Preview',
                examId: currentTargetExamId,
                mode: 'test',
                durationMinutes: 60,
                source: 'dashboard-recent-activity'
              }));
            } catch (error) {}
            window.SSCFlixRouter.navigate("/cbt");
          } else if (act.action.type === 'view_result') {
            try {
              localStorage.setItem('sscflix-selected-attempt', JSON.stringify({
                id: attemptId,
                title: attemptTitle,
                action: 'result',
                source: 'dashboard-recent-activity',
                selectedAt: new Date().toISOString()
              }));
            } catch (error) {}
            window.SSCFlixRouter.navigate("/results");
          }
        });
        row.appendChild(btn);
      }

      list.appendChild(row);
    });
  }

  // Keep legacy Resume bindings aligned with the connected CBT preview route.
  function resumeActiveTest(e) {
    if (e) e.preventDefault();
    const data = getStudentDashboardData();
    if (!data || !data.activeAttempt) {
      showPrototypeNotice('No active attempt found to resume.', null);
      return;
    }
    openDashboardActiveAttemptPreview();
  }

  // Target Exam Dialog Modal
  function openTargetExamModal() {
    const overlay = document.getElementById('target-modal-overlay');
    const container = document.getElementById('exam-options-container');
    if (!overlay || !container) return;

    container.replaceChildren();

    OFFICIAL_EXAMS.forEach(exam => {
      const isSelected = (exam.id === currentTargetExamId);

      const label = document.createElement('label');
      label.className = `exam-option-label flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
        isSelected ? 'border-[#1D4ED8] bg-blue-50/50' : 'border-[#E2E8F0] hover:bg-slate-50'
      }`;

      const leftDiv = document.createElement('div');
      leftDiv.className = "flex items-center gap-3";

      const radio = document.createElement('input');
      radio.type = "radio";
      radio.name = "target-exam-option";
      radio.value = exam.id;
      radio.checked = isSelected;
      radio.className = "text-[#1D4ED8] focus:ring-[#1D4ED8]";

      const textDiv = document.createElement('div');
      const titleDiv = document.createElement('div');
      titleDiv.className = "text-sm font-bold text-[#0F172A]";
      titleDiv.textContent = exam.code;

      const descDiv = document.createElement('div');
      descDiv.className = "text-xs text-[#64748B]";
      descDiv.textContent = exam.name;

      textDiv.appendChild(titleDiv);
      textDiv.appendChild(descDiv);

      leftDiv.appendChild(radio);
      leftDiv.appendChild(textDiv);
      label.appendChild(leftDiv);

      if (isSelected) {
        const badge = document.createElement('span');
        badge.className = "text-xs font-semibold text-[#1D4ED8] bg-blue-100 px-2 py-0.5 rounded";
        badge.textContent = "Active";
        label.appendChild(badge);
      }

      label.addEventListener('click', function() {
        radio.checked = true;
      });

      container.appendChild(label);
    });

    overlay.classList.remove('hidden');
  }

  function closeTargetExamModal() {
    const overlay = document.getElementById('target-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  // Canonical Target Exam Save Handler
  function applyTargetExamSelection() {
    const selected = document.querySelector('input[name="target-exam-option"]:checked');
    if (selected) {
      const newExamId = normalizeExamId(selected.value);

      // 1. Update window.SSCFlixState.studentPreferences.targetExam
      window.SSCFlixState = window.SSCFlixState || {};
      window.SSCFlixState.studentPreferences = window.SSCFlixState.studentPreferences || {};
      window.SSCFlixState.studentPreferences.targetExam = newExamId;
      try { localStorage.setItem('sscflix-target-exam', newExamId); } catch (error) {
        // In-memory selection still updates when browser storage is unavailable.
      }

      // 2. Dispatch single canonical event
      window.dispatchEvent(new CustomEvent('sscflix:statechange', {
        detail: { type: 'targetExam', examId: newExamId }
      }));

      // 3. Close modal
      closeTargetExamModal();
    }
  }

  // Dashboard Appearance Toggle
  function applyDashboardTheme(theme, persist) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dashboard-dark', isDark);

    const toggle = document.getElementById('theme-toggle-btn');
    const moonIcon = document.getElementById('theme-moon-icon');
    const sunIcon = document.getElementById('theme-sun-icon');

    if (toggle) {
      const nextLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', nextLabel);
      toggle.setAttribute('title', nextLabel);
      toggle.setAttribute('aria-pressed', String(isDark));
    }
    if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);

    if (persist) {
      try {
        localStorage.setItem('sscflix-dashboard-theme', isDark ? 'dark' : 'light');
      } catch (error) {
        // Keep the selected appearance for the current page if storage is unavailable.
      }
    }
  }

  function toggleDashboardTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    applyDashboardTheme(isDark ? 'light' : 'dark', true);
  }

  function initializeDashboardTheme() {
    let savedTheme = 'light';
    try {
      const storedTheme = localStorage.getItem('sscflix-dashboard-theme');
      if (storedTheme === 'dark' || storedTheme === 'light') savedTheme = storedTheme;
    } catch (error) {
      // Use the default light theme if browser storage is unavailable.
    }
    applyDashboardTheme(savedTheme, false);
  }

  // Profile Dropdown Toggle
  function toggleProfileMenu() {
    const dropdown = document.getElementById('profile-dropdown');
    const btn = document.getElementById('profile-btn');
    if (!dropdown || !btn) return;
    const isHidden = dropdown.classList.contains('hidden');
    if (isHidden) {
      dropdown.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      dropdown.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  // Close dropdown on outside click
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('profile-dropdown');
    const btn = document.getElementById('profile-btn');
    if (dropdown && btn && !btn.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Mobile More Bottom Sheet Toggle
  function toggleMobileMoreSheet() {
    const sheet = document.getElementById('mobile-more-sheet');
    const overlay = document.getElementById('mobile-more-overlay');
    const btn = document.getElementById('more-nav-btn');
    if (!sheet || !overlay || !btn) return;
    const isHidden = sheet.classList.contains('hidden');
    if (isHidden) {
      sheet.classList.remove('hidden');
      overlay.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      sheet.classList.add('hidden');
      overlay.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  // Carry Dashboard active-attempt metadata into the CBT preview.
  function openDashboardActiveAttemptPreview() {
    const data = getStudentDashboardData();
    const active = data && data.activeAttempt ? data.activeAttempt : null;
    const context = {
      testId: String(active && active.id ? active.id : currentActiveAttemptId || 'dashboard-active-preview'),
      title: String(active && active.title ? active.title : 'Active Test') + ' — Resume Preview',
      category: active && active.category ? String(active.category) : 'Saved Attempt Preview',
      examId: currentTargetExamId,
      mode: 'test',
      durationMinutes: 60,
      source: 'dashboard-resume-preview'
    };
    try { localStorage.setItem('sscflix-active-test-preview', JSON.stringify(context)); } catch (error) {}
    window.SSCFlixRouter.navigate("/cbt");
  }

  // Feedback Notification Banner
  function showPrototypeNotice(message, event) {
    if (event) event.preventDefault();
    const banner = document.getElementById('prototype-banner');
    const bannerText = document.getElementById('prototype-banner-text');
    if (!banner || !bannerText) return;

    bannerText.replaceChildren();
    bannerText.textContent = message;
    banner.classList.remove('hidden');
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function dismissPrototypeNotice() {
    const banner = document.getElementById('prototype-banner');
    if (banner) banner.classList.add('hidden');
  }

  // Canonical single state-change listener to avoid duplicate renders
  function handleCanonicalStateChange(e) {
    if (e && e.detail && e.detail.examId) {
      currentTargetExamId = normalizeExamId(e.detail.examId);
    } else if (window.SSCFlixState && window.SSCFlixState.studentPreferences && window.SSCFlixState.studentPreferences.targetExam) {
      currentTargetExamId = normalizeExamId(window.SSCFlixState.studentPreferences.targetExam);
    }
    renderDashboard();
  }

  window.addEventListener('sscflix:statechange', handleCanonicalStateChange);

  // Initial rendering on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    initializeDashboardTheme();
    renderDashboard();
  });

if(typeof normalizeExamId==='function')window["normalizeExamId"]=normalizeExamId;
if(typeof getInitialTargetExam==='function')window["getInitialTargetExam"]=getInitialTargetExam;
if(typeof getExamObject==='function')window["getExamObject"]=getExamObject;
if(typeof normalizeSubjectKey==='function')window["normalizeSubjectKey"]=normalizeSubjectKey;
if(typeof getSubjectDisplayLabel==='function')window["getSubjectDisplayLabel"]=getSubjectDisplayLabel;
if(typeof isAttemptResumable==='function')window["isAttemptResumable"]=isAttemptResumable;
if(typeof getStudentDashboardData==='function')window["getStudentDashboardData"]=getStudentDashboardData;
if(typeof processResponseRecord==='function')window["processResponseRecord"]=processResponseRecord;
if(typeof getInitials==='function')window["getInitials"]=getInitials;
if(typeof getFirstName==='function')window["getFirstName"]=getFirstName;
if(typeof renderDashboard==='function')window["renderDashboard"]=renderDashboard;
if(typeof renderStudentIdentity==='function')window["renderStudentIdentity"]=renderStudentIdentity;
if(typeof renderTargetExamIndicators==='function')window["renderTargetExamIndicators"]=renderTargetExamIndicators;
if(typeof renderDashboardView==='function')window["renderDashboardView"]=renderDashboardView;
if(typeof renderSubjectAccuracy==='function')window["renderSubjectAccuracy"]=renderSubjectAccuracy;
if(typeof renderRecentActivityList==='function')window["renderRecentActivityList"]=renderRecentActivityList;
if(typeof resumeActiveTest==='function')window["resumeActiveTest"]=resumeActiveTest;
if(typeof openTargetExamModal==='function')window["openTargetExamModal"]=openTargetExamModal;
if(typeof closeTargetExamModal==='function')window["closeTargetExamModal"]=closeTargetExamModal;
if(typeof applyTargetExamSelection==='function')window["applyTargetExamSelection"]=applyTargetExamSelection;
if(typeof applyDashboardTheme==='function')window["applyDashboardTheme"]=applyDashboardTheme;
if(typeof toggleDashboardTheme==='function')window["toggleDashboardTheme"]=toggleDashboardTheme;
if(typeof initializeDashboardTheme==='function')window["initializeDashboardTheme"]=initializeDashboardTheme;
if(typeof toggleProfileMenu==='function')window["toggleProfileMenu"]=toggleProfileMenu;
if(typeof toggleMobileMoreSheet==='function')window["toggleMobileMoreSheet"]=toggleMobileMoreSheet;
if(typeof openDashboardActiveAttemptPreview==='function')window["openDashboardActiveAttemptPreview"]=openDashboardActiveAttemptPreview;
if(typeof showPrototypeNotice==='function')window["showPrototypeNotice"]=showPrototypeNotice;
if(typeof dismissPrototypeNotice==='function')window["dismissPrototypeNotice"]=dismissPrototypeNotice;
if(typeof handleCanonicalStateChange==='function')window["handleCanonicalStateChange"]=handleCanonicalStateChange;
})();

// dashboard page script 2
(function(){

(function () {
  if (window.__sscFlixUnavailableNavigationBound) return;
  window.__sscFlixUnavailableNavigationBound = true;
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[data-unavailable-route="leaderboard"]');
    if (!link) return;
    event.preventDefault();
    let notice = document.getElementById('sscflix-route-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'sscflix-route-notice';
      notice.setAttribute('role', 'status');
      notice.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-2rem)] rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-xl';
      document.body.appendChild(notice);
    }
    notice.textContent = 'Leaderboard is not available in this page set yet.';
    notice.classList.remove('hidden');
    window.clearTimeout(notice._hideTimer);
    notice._hideTimer = window.setTimeout(function () { notice.classList.add('hidden'); }, 2600);
  });
})();

if(typeof openDashboardActiveAttemptPreview==='function')window["openDashboardActiveAttemptPreview"]=openDashboardActiveAttemptPreview;
if(typeof showPrototypeNotice==='function')window["showPrototypeNotice"]=showPrototypeNotice;
if(typeof toggleMobileMoreSheet==='function')window["toggleMobileMoreSheet"]=toggleMobileMoreSheet;
if(typeof closeTargetExamModal==='function')window["closeTargetExamModal"]=closeTargetExamModal;
if(typeof applyTargetExamSelection==='function')window["applyTargetExamSelection"]=applyTargetExamSelection;
})();