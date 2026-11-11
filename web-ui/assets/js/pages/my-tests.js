// my-tests page script 1
(function(){

    // Canonical Attempt Data Model with permissions and synchronized timestamps
    const nowTime = Date.now();
    const att2CompletedMs = nowTime - 3 * 60 * 60 * 1000;
    const att2DurationSeconds = 3252; // 54m 12s
    const att2StartedMs = att2CompletedMs - att2DurationSeconds * 1000;

    const att3CompletedMs = nowTime - 25 * 60 * 60 * 1000;
    const att3DurationSeconds = 1125; // 18m 45s
    const att3StartedMs = att3CompletedMs - att3DurationSeconds * 1000;

    const attemptsData = [
      {
        id: "ATT-001",
        title: "SSC CGL Full Mock 03",
        tier: "Tier-1 Simulation",
        source: "Mock Test",
        status: "in_progress",
        // Dynamically generated: started 22 minutes ago
        startedAt: new Date(Date.now() - 22 * 60 * 1000).toISOString(),
        answered: 42,
        totalQs: 100,
        timeRemaining: "38 mins remaining",
        score: null,
        maxScore: 200,
        accuracy: null,
        correct: null,
        incorrect: null,
        unattempted: null,
        resultAvailable: false,
        reviewAvailable: false,
        resumeAllowed: true,
        reattemptAllowed: false
      },
      {
        id: "ATT-002",
        title: "SSC CGL Full Mock 01",
        tier: "Tier-1 Simulation",
        source: "Mock Test",
        status: "completed",
        startedAt: new Date(att2StartedMs).toISOString(),
        completedAt: new Date(att2CompletedMs).toISOString(),
        duration: "54m 12s",
        score: 139.50,
        maxScore: 200,
        accuracy: 81.3,
        correct: 74,
        incorrect: 17,
        unattempted: 9,
        resultAvailable: true,
        reviewAvailable: true,
        resumeAllowed: false,
        reattemptAllowed: true
      },
      {
        id: "ATT-003",
        title: "Quantitative Aptitude: Arithmetic Speed Sprint",
        tier: "Sectional Speed Drill",
        source: "Sectional Test",
        status: "completed",
        startedAt: new Date(att3StartedMs).toISOString(),
        completedAt: new Date(att3CompletedMs).toISOString(),
        duration: "18m 45s / 20m",
        score: 42.00,
        maxScore: 50,
        accuracy: 91.3,
        correct: 21,
        incorrect: 2,
        unattempted: 2,
        resultAvailable: true,
        reviewAvailable: true,
        resumeAllowed: false,
        reattemptAllowed: true
      },
      {
        id: "ATT-004",
        title: "SSC CGL 2024 Tier-1 Shift 1 Paper",
        tier: "Previous Year Paper",
        source: "PYQ Paper",
        status: "completed",
        startedAt: "2024-10-05T10:48:40+05:30",
        completedAt: "2024-10-05T11:45:00+05:30", // Differs by exactly 56m 20s (3380 seconds)
        duration: "56m 20s",
        score: 146.00,
        maxScore: 200,
        accuracy: 84.6,
        correct: 77,
        incorrect: 14,
        unattempted: 9,
        resultAvailable: true,
        reviewAvailable: true,
        resumeAllowed: false,
        reattemptAllowed: true
      },
      {
        id: "ATT-005",
        title: "Reasoning: Coding & Logical Venn Diagrams",
        tier: "Topic Precision Drill",
        source: "Chapter Test",
        status: "expired",
        startedAt: "2024-10-02T14:00:00+05:30",
        completedAt: "2024-10-02T14:45:00+05:30",
        interruptionReason: "Session locked. Standard timer reached 00:00 without explicit submission.",
        duration: "Session Interrupted",
        score: null,
        maxScore: 50,
        accuracy: null,
        correct: null,
        incorrect: null,
        unattempted: null,
        resultAvailable: false,
        reviewAvailable: false,
        resumeAllowed: false,
        reattemptAllowed: true
      },
      {
        id: "ATT-006",
        title: "SSC CGL Full Mock 02",
        tier: "Tier-1 Simulation",
        source: "Mock Test",
        status: "completed",
        startedAt: "2024-03-12T09:02:00+05:30",
        completedAt: "2024-03-12T10:00:00+05:30", // Differs by exactly 58m 00s (3480 seconds)
        duration: "58m 00s",
        score: 138.50,
        maxScore: 200,
        accuracy: 79.5,
        correct: 72,
        incorrect: 19,
        unattempted: 9,
        resultAvailable: true,
        reviewAvailable: true,
        resumeAllowed: false,
        reattemptAllowed: true
      }
    ];

    let currentStatusFilter = 'all';
    let currentSourceFilter = 'all';
    let currentSearchQuery = '';
    let currentSort = 'recent';

    // Dynamic relative date handling with Asia/Kolkata timezone awareness
    function formatAttemptDate(dateStr) {
      if (!dateStr) return '';
      const targetDate = new Date(dateStr);
      if (isNaN(targetDate.getTime())) return dateStr;

      const timeZone = 'Asia/Kolkata';

      // Format parts in Asia/Kolkata
      const optionsDate = { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' };
      const optionsTime = { timeZone, hour: '2-digit', minute: '2-digit', hour12: true };

      const now = new Date();
      const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);

      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const yesterdayStr = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(yesterday);

      const targetDateStr = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(targetDate);
      const targetTimeStr = new Intl.DateTimeFormat('en-US', optionsTime).format(targetDate);

      if (targetDateStr === todayStr) {
        return `Today, ${targetTimeStr}`;
      } else if (targetDateStr === yesterdayStr) {
        return `Yesterday, ${targetTimeStr}`;
      } else {
        const dFmt = new Intl.DateTimeFormat('en-GB', { timeZone, day: '2-digit', month: 'short', year: 'numeric' });
        return dFmt.format(targetDate);
      }
    }

    // Safely update badge counts for filter tabs
    function updateCounts() {
      const total = attemptsData.length;
      const inProgress = attemptsData.filter(a => a.status === 'in_progress').length;
      const completed = attemptsData.filter(a => a.status === 'completed').length;
      const expired = attemptsData.filter(a => a.status === 'expired').length;

      const badgeAll = document.getElementById('count-all');
      if (badgeAll) badgeAll.textContent = total;

      const badgeInProgress = document.getElementById('count-inprogress');
      if (badgeInProgress) badgeInProgress.textContent = inProgress;

      const badgeCompleted = document.getElementById('count-completed');
      if (badgeCompleted) badgeCompleted.textContent = completed;

      const badgeExpired = document.getElementById('count-expired');
      if (badgeExpired) badgeExpired.textContent = expired;
    }

    // Filter and sort attempt records
    function getFilteredAttempts() {
      return attemptsData.filter(item => {
        if (currentStatusFilter !== 'all' && item.status !== currentStatusFilter) {
          return false;
        }
        if (currentSourceFilter !== 'all' && item.source !== currentSourceFilter) {
          return false;
        }
        if (currentSearchQuery.trim() !== '') {
          const query = currentSearchQuery.toLowerCase();
          const titleMatch = (item.title || '').toLowerCase().includes(query);
          const tierMatch = (item.tier || '').toLowerCase().includes(query);
          const sourceMatch = (item.source || '').toLowerCase().includes(query);
          if (!titleMatch && !tierMatch && !sourceMatch) return false;
        }
        return true;
      }).sort((a, b) => {
        if (currentSort === 'recent') {
          const dateB = new Date(b.completedAt || b.startedAt).getTime();
          const dateA = new Date(a.completedAt || a.startedAt).getTime();
          return dateB - dateA;
        } else if (currentSort === 'oldest') {
          const dateA = new Date(a.completedAt || a.startedAt).getTime();
          const dateB = new Date(b.completedAt || b.startedAt).getTime();
          return dateA - dateB;
        } else if (currentSort === 'score_desc') {
          // Records without evaluated scores sink to the bottom
          const scoreA = (a.score !== null && a.score !== undefined) ? a.score : -9999;
          const scoreB = (b.score !== null && b.score !== undefined) ? b.score : -9999;
          return scoreB - scoreA;
        }
        return 0;
      });
    }

    // Safe DOM rendering for attempt cards without unsafe innerHTML interpolation
    function renderAttempts() {
      const container = document.getElementById('attemptsContainer');
      const emptyState = document.getElementById('emptyState');
      const resultCountLabel = document.getElementById('result-count-label');

      if (!container || !emptyState) return;

      const list = getFilteredAttempts();

      if (resultCountLabel) {
        resultCountLabel.textContent = `Showing ${list.length} ${list.length === 1 ? 'attempt' : 'attempts'}`;
      }

      // Empty State Handling
      if (list.length === 0) {
        container.replaceChildren();
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');

        const titleElem = document.getElementById('emptyStateTitle');
        const descElem = document.getElementById('emptyStateDesc');
        const iconElem = document.getElementById('emptyStateIcon');
        const actionBtn = document.getElementById('emptyStateActionBtn');

        if (attemptsData.length === 0) {
          if (iconElem) iconElem.textContent = 'quiz';
          if (titleElem) titleElem.textContent = 'No attempts yet';
          if (descElem) descElem.textContent = 'Tests you start or complete will appear here.';
          if (actionBtn) {
            actionBtn.textContent = 'Explore Mock Tests';
            actionBtn.onclick = () => showPrototypeToast('Mock Tests', 'Prototype only — this action is not connected yet.');
          }
        } else if (currentStatusFilter === 'in_progress') {
          if (iconElem) iconElem.textContent = 'pending_actions';
          if (titleElem) titleElem.textContent = 'No tests in progress';
          if (descElem) descElem.textContent = "You don't have any active test sessions at the moment.";
          if (actionBtn) {
            actionBtn.textContent = 'Clear Filters';
            actionBtn.onclick = resetFilters;
          }
        } else {
          if (iconElem) iconElem.textContent = 'search_off';
          if (titleElem) titleElem.textContent = 'No matching attempts';
          if (descElem) descElem.textContent = 'No test attempts match your selected search and filters.';
          if (actionBtn) {
            actionBtn.textContent = 'Clear Filters';
            actionBtn.onclick = resetFilters;
          }
        }
        return;
      }

      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');
      container.classList.remove('hidden');
      container.replaceChildren();

      // Build each card via document.createElement & textContent
      list.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 lg:p-5 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all";

        // LEFT INFO BLOCK
        const leftCol = document.createElement('div');
        leftCol.className = "flex-1 min-w-0";

        const tagRow = document.createElement('div');
        tagRow.className = "flex flex-wrap items-center gap-2 mb-1.5";

        // Status badge
        const statusBadge = document.createElement('span');
        if (item.status === 'in_progress') {
          statusBadge.className = "px-2.5 py-1 rounded-full text-xs bg-amber-50 text-[#F59E0B] border border-amber-200 font-semibold flex items-center gap-1.5";
          const dot = document.createElement('span');
          dot.className = "w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse";
          statusBadge.appendChild(dot);
          const txt = document.createTextNode("In Progress");
          statusBadge.appendChild(txt);
        } else if (item.status === 'completed') {
          statusBadge.className = "px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex items-center gap-1";
          const icon = document.createElement('span');
          icon.className = "material-symbols-outlined text-[16px]";
          icon.textContent = "check_circle";
          statusBadge.appendChild(icon);
          const txt = document.createTextNode("Completed");
          statusBadge.appendChild(txt);
        } else {
          statusBadge.className = "px-2.5 py-1 rounded-full text-xs bg-rose-50 text-rose-700 border border-rose-200 font-semibold flex items-center gap-1";
          const icon = document.createElement('span');
          icon.className = "material-symbols-outlined text-[16px]";
          icon.textContent = "timer_off";
          statusBadge.appendChild(icon);
          const txt = document.createTextNode("Expired / Interrupted");
          statusBadge.appendChild(txt);
        }
        tagRow.appendChild(statusBadge);

        // Source badge
        const sourceBadge = document.createElement('span');
        sourceBadge.className = "px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 font-medium";
        sourceBadge.textContent = item.source;
        tagRow.appendChild(sourceBadge);

        // Tier text
        const tierText = document.createElement('span');
        tierText.className = "text-xs text-slate-500";
        tierText.textContent = `• ${item.tier}`;
        tagRow.appendChild(tierText);

        leftCol.appendChild(tagRow);

        // Card Title (Safe textContent)
        const titleH3 = document.createElement('h3');
        titleH3.className = "text-base font-bold text-on-surface tracking-tight truncate";
        titleH3.textContent = item.title;
        leftCol.appendChild(titleH3);

        // Meta timestamps row
        const metaRow = document.createElement('div');
        metaRow.className = "flex flex-wrap items-center gap-4 mt-1.5 text-slate-500 text-xs";

        if (item.status === 'in_progress') {
          const startedWrap = document.createElement('span');
          startedWrap.className = "flex items-center gap-1";
          const startIcon = document.createElement('span');
          startIcon.className = "material-symbols-outlined text-[16px]";
          startIcon.textContent = "play_circle";
          const startLabel = document.createElement('span');
          startLabel.textContent = `Started: ${formatAttemptDate(item.startedAt)}`;
          startedWrap.append(startIcon, startLabel);

          const timeWrap = document.createElement('span');
          timeWrap.className = "flex items-center gap-1 text-[#F59E0B] font-semibold";
          const timeIcon = document.createElement('span');
          timeIcon.className = "material-symbols-outlined text-[16px]";
          timeIcon.textContent = "alarm";
          const timeLabel = document.createElement('span');
          timeLabel.textContent = item.timeRemaining;
          timeWrap.append(timeIcon, timeLabel);

          metaRow.append(startedWrap, timeWrap);
        } else if (item.status === 'completed') {
          const submittedWrap = document.createElement('span');
          submittedWrap.className = "flex items-center gap-1";
          const submitIcon = document.createElement('span');
          submitIcon.className = "material-symbols-outlined text-[16px]";
          submitIcon.textContent = "calendar_today";
          const submitLabel = document.createElement('span');
          submitLabel.textContent = `Submitted: ${formatAttemptDate(item.completedAt)}`;
          submittedWrap.append(submitIcon, submitLabel);

          const durationWrap = document.createElement('span');
          durationWrap.className = "flex items-center gap-1";
          const durationIcon = document.createElement('span');
          durationIcon.className = "material-symbols-outlined text-[16px]";
          durationIcon.textContent = "timelapse";
          const durationLabel = document.createElement('span');
          durationLabel.textContent = `Duration: ${item.duration}`;
          durationWrap.append(durationIcon, durationLabel);

          metaRow.append(submittedWrap, durationWrap);
        } else {
          // Expired
          const loggedWrap = document.createElement('span');
          loggedWrap.className = "flex items-center gap-1";
          const loggedIcon = document.createElement('span');
          loggedIcon.className = "material-symbols-outlined text-[16px]";
          loggedIcon.textContent = "history";
          const loggedLabel = document.createElement('span');
          loggedLabel.textContent = `Session Logged: ${formatAttemptDate(item.completedAt || item.startedAt)}`;
          loggedWrap.append(loggedIcon, loggedLabel);

          const reasonWrap = document.createElement('span');
          reasonWrap.className = "text-rose-600 font-medium flex items-center gap-1";
          const reasonIcon = document.createElement('span');
          reasonIcon.className = "material-symbols-outlined text-[16px]";
          reasonIcon.textContent = "info";
          const reasonLabel = document.createElement('span');
          reasonLabel.textContent = item.interruptionReason || "Attempt ended before normal completion.";
          reasonWrap.append(reasonIcon, reasonLabel);

          metaRow.append(loggedWrap, reasonWrap);
        }

        leftCol.appendChild(metaRow);
        card.appendChild(leftCol);

        // MIDDLE METRICS OR NOTICE BLOCK
        if (item.status === 'in_progress') {
          const middleWrap = document.createElement('div');
          middleWrap.className = "w-full lg:w-64 flex flex-col justify-center bg-slate-50 border border-[#E2E8F0] p-3 rounded-lg";

          // Clamped calculation for answered and totalQs
          const rawTotal = item.totalQs && item.totalQs > 0 ? item.totalQs : 0;
          const clampedAnswered = Math.max(0, item.answered || 0);
          const clampedPercentage = rawTotal > 0 ? Math.max(0, Math.min(100, Math.round((clampedAnswered / rawTotal) * 100))) : 0;
          const clampedUnanswered = rawTotal > 0 ? Math.max(0, rawTotal - clampedAnswered) : 0;

          const gaugeHeader = document.createElement('div');
          gaugeHeader.className = "flex items-center justify-between text-xs mb-1.5";
          const gTitle = document.createElement('span');
          gTitle.className = "text-slate-600 font-medium";
          gTitle.textContent = "Question Progress";
          const gCount = document.createElement('span');
          gCount.className = "font-mono font-bold text-slate-800";
          gCount.textContent = `${clampedAnswered} / ${rawTotal} answered`;
          gaugeHeader.append(gTitle, gCount);

          const barBg = document.createElement('div');
          barBg.className = "w-full h-2 rounded-full bg-slate-200 overflow-hidden";
          const barFill = document.createElement('div');
          barFill.className = "h-full bg-[#1D4ED8] rounded-full transition-all duration-500";
          barFill.style.width = `${clampedPercentage}%`;
          barBg.appendChild(barFill);

          const gaugeFooter = document.createElement('div');
          gaugeFooter.className = "mt-1.5 flex justify-between items-center text-slate-500 text-xs";
          const gCompleted = document.createElement('span');
          gCompleted.textContent = `Completed: ${clampedPercentage}%`;
          const gRemaining = document.createElement('span');
          gRemaining.textContent = `${clampedUnanswered} unanswered`;
          gaugeFooter.append(gCompleted, gRemaining);

          middleWrap.append(gaugeHeader, barBg, gaugeFooter);
          card.appendChild(middleWrap);
        } else if (item.status === 'completed') {
          const middleWrap = document.createElement('div');
          middleWrap.className = "flex items-center gap-4 bg-slate-50 border border-[#E2E8F0] px-4 py-3 rounded-lg";

          // Score
          const scoreBox = document.createElement('div');
          const scoreTitle = document.createElement('div');
          scoreTitle.className = "text-xs uppercase tracking-wider text-slate-500 font-medium";
          scoreTitle.textContent = "Score";
          const scoreValWrap = document.createElement('div');
          scoreValWrap.className = "flex items-baseline gap-1 mt-0.5";
          const scoreVal = document.createElement('span');
          scoreVal.className = "font-mono text-lg text-[#1D4ED8] font-bold";
          scoreVal.textContent = item.score !== null ? item.score.toFixed(2) : '--';
          const maxVal = document.createElement('span');
          maxVal.className = "text-xs text-slate-400";
          maxVal.textContent = `/ ${item.maxScore !== null ? item.maxScore.toFixed(0) : '--'}`;
          scoreValWrap.append(scoreVal, maxVal);
          scoreBox.append(scoreTitle, scoreValWrap);

          const divider1 = document.createElement('div');
          divider1.className = "w-px h-8 bg-[#E2E8F0]";

          // Accuracy
          const accBox = document.createElement('div');
          const accTitle = document.createElement('div');
          accTitle.className = "text-xs uppercase tracking-wider text-slate-500 font-medium";
          accTitle.textContent = "Accuracy";
          const accValWrap = document.createElement('div');
          accValWrap.className = "mt-0.5 flex items-center gap-1";
          const accVal = document.createElement('span');
          accVal.className = "font-mono text-sm font-bold text-slate-800";
          accVal.textContent = item.accuracy !== null ? `${item.accuracy}%` : '--';
          const accIcon = document.createElement('span');
          accIcon.className = "material-symbols-outlined text-[16px] text-[#1D4ED8]";
          accIcon.textContent = "trending_up";
          accValWrap.append(accVal, accIcon);
          accBox.append(accTitle, accValWrap);

          // Breakdown
          const divider2 = document.createElement('div');
          divider2.className = "hidden sm:block w-px h-8 bg-[#E2E8F0]";
          const breakBox = document.createElement('div');
          breakBox.className = "hidden sm:block";
          const breakTitle = document.createElement('div');
          breakTitle.className = "text-xs uppercase tracking-wider text-slate-500 font-medium";
          breakTitle.textContent = "Breakdown";
          const breakValWrap = document.createElement('div');
          breakValWrap.className = "mt-0.5 text-xs text-slate-600 flex gap-2 font-mono";
          const correctSpan = document.createElement('span');
          correctSpan.className = "text-[#1D4ED8] font-semibold";
          correctSpan.textContent = `${item.correct}C`;
          const incSpan = document.createElement('span');
          incSpan.className = "text-rose-600 font-semibold";
          incSpan.textContent = `${item.incorrect}I`;
          const unSpan = document.createElement('span');
          unSpan.className = "text-slate-400 font-semibold";
          unSpan.textContent = `${item.unattempted}U`;
          breakValWrap.append(correctSpan, incSpan, unSpan);
          breakBox.append(breakTitle, breakValWrap);

          middleWrap.append(scoreBox, divider1, accBox, divider2, breakBox);
          card.appendChild(middleWrap);
        } else {
          // Expired notice
          const noticeWrap = document.createElement('div');
          noticeWrap.className = "w-full lg:w-64 bg-slate-50 border border-[#E2E8F0] p-3 rounded-lg text-slate-600 text-xs flex items-center gap-2";
          const lockIcon = document.createElement('span');
          lockIcon.className = "material-symbols-outlined text-slate-400 text-[20px] shrink-0";
          lockIcon.textContent = "lock_clock";
          const noticeText = document.createElement('span');
          noticeText.className = "text-xs leading-tight";
          noticeText.textContent = item.interruptionReason || "Attempt ended before normal completion.";
          noticeWrap.append(lockIcon, noticeText);
          card.appendChild(noticeWrap);
        }

        // RIGHT ACTION BUTTONS CONTAINER (min 44px height)
        const actionsWrap = document.createElement('div');
        actionsWrap.className = "flex flex-wrap sm:flex-nowrap items-center gap-2 self-stretch lg:self-auto justify-end";

        if (item.status === 'in_progress') {
          if (item.resumeAllowed) {
            const resumeBtn = document.createElement('button');
            resumeBtn.type = "button";
            resumeBtn.className = "min-h-[44px] px-5 rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] font-medium text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm min-w-[130px]";
            const rIcon = document.createElement('span');
            rIcon.className = "material-symbols-outlined text-[18px]";
            rIcon.textContent = "play_arrow";
            const rLabel = document.createElement('span');
            rLabel.textContent = "Resume Test";
            resumeBtn.append(rIcon, rLabel);
            resumeBtn.addEventListener('click', () => resumeTest(item.id, item.title));
            actionsWrap.appendChild(resumeBtn);
          }
        } else if (item.status === 'completed') {
          if (item.resultAvailable) {
            const viewResultBtn = document.createElement('button');
            viewResultBtn.type = "button";
            viewResultBtn.className = "flex-1 sm:flex-none min-h-[44px] px-4 rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] font-medium text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm";
            const vrIcon = document.createElement('span');
            vrIcon.className = "material-symbols-outlined text-[18px]";
            vrIcon.textContent = "insights";
            const vrLabel = document.createElement('span');
            vrLabel.textContent = "View Result";
            viewResultBtn.append(vrIcon, vrLabel);
            viewResultBtn.addEventListener('click', () => viewResult(item.id, item.title));
            actionsWrap.appendChild(viewResultBtn);
          }

          if (item.reviewAvailable) {
            const reviewBtn = document.createElement('button');
            reviewBtn.type = "button";
            reviewBtn.className = "flex-1 sm:flex-none min-h-[44px] px-4 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 font-medium text-sm transition-colors flex items-center justify-center gap-1.5";
            const revIcon = document.createElement('span');
            revIcon.className = "material-symbols-outlined text-[18px]";
            revIcon.textContent = "visibility";
            const revLabel = document.createElement('span');
            revLabel.textContent = "Review Answers";
            reviewBtn.append(revIcon, revLabel);
            reviewBtn.addEventListener('click', () => reviewAnswers(item.id, item.title));
            actionsWrap.appendChild(reviewBtn);
          }

          if (item.reattemptAllowed) {
            const reattemptBtn = document.createElement('button');
            reattemptBtn.type = "button";
            reattemptBtn.title = "Reattempt test";
            reattemptBtn.className = "min-w-[44px] min-h-[44px] px-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors flex items-center justify-center";
            const reIcon = document.createElement('span');
            reIcon.className = "material-symbols-outlined text-[18px]";
            reIcon.textContent = "restart_alt";
            reattemptBtn.appendChild(reIcon);
            reattemptBtn.addEventListener('click', () => reattemptTest(item.id, item.title));
            actionsWrap.appendChild(reattemptBtn);
          }
        } else {
          // Expired
          const detailsBtn = document.createElement('button');
          detailsBtn.type = "button";
          detailsBtn.className = "min-h-[44px] px-4 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 font-medium text-sm transition-colors flex items-center justify-center gap-1.5";
          const dIcon = document.createElement('span');
          dIcon.className = "material-symbols-outlined text-[18px]";
          dIcon.textContent = "info";
          const dLabel = document.createElement('span');
          dLabel.textContent = "View Details";
          detailsBtn.append(dIcon, dLabel);
          detailsBtn.addEventListener('click', () => viewExpiredDetails(item.id, item.title));
          actionsWrap.appendChild(detailsBtn);

          if (item.reattemptAllowed) {
            const retakeBtn = document.createElement('button');
            retakeBtn.type = "button";
            retakeBtn.className = "min-h-[44px] px-4 rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] font-medium text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm";
            const retIcon = document.createElement('span');
            retIcon.className = "material-symbols-outlined text-[18px]";
            retIcon.textContent = "refresh";
            const retLabel = document.createElement('span');
            retLabel.textContent = "Retake";
            retakeBtn.append(retIcon, retLabel);
            retakeBtn.addEventListener('click', () => reattemptTest(item.id, item.title));
            actionsWrap.appendChild(retakeBtn);
          }
        }

        card.appendChild(actionsWrap);
        container.appendChild(card);
      });
    }

    // Set up filter buttons, search input, and sort toggles
    function setupEventListeners() {
      const tabs = document.querySelectorAll('.status-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('bg-[#1D4ED8]', 'text-white', 'shadow-sm');
            t.classList.add('bg-white', 'text-slate-600', 'border', 'border-[#E2E8F0]');
            const badge = t.querySelector('span:last-child');
            if (badge) {
              badge.classList.remove('bg-white/20', 'text-white');
              badge.classList.add('bg-slate-100', 'text-slate-700');
            }
          });

          tab.setAttribute('aria-selected', 'true');
          tab.classList.remove('bg-white', 'text-slate-600', 'border', 'border-[#E2E8F0]');
          tab.classList.add('bg-[#1D4ED8]', 'text-white', 'shadow-sm');
          const activeBadge = tab.querySelector('span:last-child');
          if (activeBadge) {
            activeBadge.classList.remove('bg-slate-100', 'text-slate-700');
            activeBadge.classList.add('bg-white/20', 'text-white');
          }

          currentStatusFilter = tab.getAttribute('data-filter') || 'all';
          renderAttempts();
        });
      });

      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentSearchQuery = e.target.value;
          renderAttempts();
        });
      }

      const sourceFilter = document.getElementById('sourceFilter');
      if (sourceFilter) {
        sourceFilter.addEventListener('change', (e) => {
          currentSourceFilter = e.target.value;
          renderAttempts();
        });
      }

      const sortFilter = document.getElementById('sortFilter');
      if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
          currentSort = e.target.value;
          renderAttempts();
        });
      }

      const resetBtn = document.getElementById('resetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
      }

      const mobileMoreTrigger = document.getElementById('mobileMoreTrigger');
      const closeMoreSheetBtn = document.getElementById('closeMoreSheetBtn');
      const moreSheet = document.getElementById('more-menu-sheet');

      if (mobileMoreTrigger) {
        mobileMoreTrigger.addEventListener('click', openMoreSheet);
      }
      if (closeMoreSheetBtn) {
        closeMoreSheetBtn.addEventListener('click', closeMoreSheet);
      }
      if (moreSheet) {
        moreSheet.addEventListener('click', (e) => {
          if (e.target === moreSheet) {
            closeMoreSheet();
          }
        });
      }

      // Sheet keyboard navigation: Escape and Focus Trap
      document.addEventListener('keydown', handleKeydownAccessibility);
    }

    // Reset all applied filters to default state
    function resetFilters() {
      currentStatusFilter = 'all';
      currentSourceFilter = 'all';
      currentSearchQuery = '';
      currentSort = 'recent';

      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.value = '';

      const sourceFilter = document.getElementById('sourceFilter');
      if (sourceFilter) sourceFilter.value = 'all';

      const sortFilter = document.getElementById('sortFilter');
      if (sortFilter) sortFilter.value = 'recent';

      const tabs = document.querySelectorAll('.status-tab');
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('bg-[#1D4ED8]', 'text-white', 'shadow-sm');
        t.classList.add('bg-white', 'text-slate-600', 'border', 'border-[#E2E8F0]');
        const badge = t.querySelector('span:last-child');
        if (badge) {
          badge.classList.remove('bg-white/20', 'text-white');
          badge.classList.add('bg-slate-100', 'text-slate-700');
        }
      });

      const allTab = document.getElementById('tab-all');
      if (allTab) {
        allTab.setAttribute('aria-selected', 'true');
        allTab.classList.remove('bg-white', 'text-slate-600', 'border', 'border-[#E2E8F0]');
        allTab.classList.add('bg-[#1D4ED8]', 'text-white', 'shadow-sm');
        const badge = allTab.querySelector('span:last-child');
        if (badge) {
          badge.classList.remove('bg-slate-100', 'text-slate-700');
          badge.classList.add('bg-white/20', 'text-white');
        }
      }

      renderAttempts();
      showPrototypeToast('Filters Reset', 'Displaying all test attempts.');
    }

    // Mobile "More" Sheet accessibility with focus trapping & preserved body scroll restoration
    let previousActiveElement = null;
    let originalBodyOverflow = null;

    function openMoreSheet() {
      const sheet = document.getElementById('more-menu-sheet');
      const trigger = document.getElementById('mobileMoreTrigger');
      if (!sheet) return;

      // Only capture original overflow when opening from closed state
      if (sheet.classList.contains('hidden')) {
        originalBodyOverflow = document.body.style.overflow;
      }

      previousActiveElement = document.activeElement;
      sheet.classList.remove('hidden');
      sheet.setAttribute('aria-hidden', 'false');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      const closeBtn = document.getElementById('closeMoreSheetBtn');
      if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 50);
      }
    }

    function closeMoreSheet() {
      const sheet = document.getElementById('more-menu-sheet');
      const trigger = document.getElementById('mobileMoreTrigger');
      if (!sheet) return;

      sheet.classList.add('hidden');
      sheet.setAttribute('aria-hidden', 'true');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      
      // Restore original body overflow
      if (originalBodyOverflow !== null) {
        document.body.style.overflow = originalBodyOverflow;
        originalBodyOverflow = null;
      } else {
        document.body.style.overflow = '';
      }

      if (trigger) {
        trigger.focus();
      } else if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    }

    function handleKeydownAccessibility(e) {
      const sheet = document.getElementById('more-menu-sheet');
      if (!sheet || sheet.classList.contains('hidden')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeMoreSheet();
        return;
      }

      if (e.key === 'Tab') {
        // Focus trap inside bottom sheet
        const focusableElements = sheet.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    // Route archive actions to the matching preview screens.
    function saveSelectedAttemptContext(id, title, action) {
      try {
        localStorage.setItem('sscflix-selected-attempt', JSON.stringify({
          id: String(id || ''),
          title: String(title || 'Mock Test'),
          action,
          source: 'my-tests',
          selectedAt: new Date().toISOString()
        }));
      } catch (error) {
        // Destination screens remain accessible even when storage is unavailable.
      }
    }

    function resumeTest(id, title) {
      saveSelectedAttemptContext(id, title, 'resume');
      try {
        localStorage.setItem('sscflix-active-test-preview', JSON.stringify({
          testId: String(id || 'saved-attempt-preview'),
          title: String(title || 'Saved Test') + ' — Resume Preview',
          category: 'Saved Attempt Preview',
          examId: localStorage.getItem('sscflix-target-exam') || 'cgl',
          mode: 'test',
          durationMinutes: 60,
          source: 'my-tests-resume'
        }));
      } catch (error) {}
      showPrototypeToast("Resume Test", "Opening the CBT preview. Restoring saved answers and the previous timer is not connected yet.");
      window.setTimeout(() => { window.SSCFlixRouter.navigate("/cbt"); }, 450);
    }

    function viewResult(id, title) {
      saveSelectedAttemptContext(id, title, 'result');
      window.SSCFlixRouter.navigate("/results");
    }

    function reviewAnswers(id, title) {
      saveSelectedAttemptContext(id, title, 'review');
      window.SSCFlixRouter.navigate("/results");
    }

    function reattemptTest(id, title) {
      saveSelectedAttemptContext(id, title, 'reattempt');
      try {
        localStorage.setItem('sscflix-active-test-preview', JSON.stringify({
          testId: String(id || 'reattempt-preview'),
          title: String(title || 'Mock Test') + ' — Reattempt Preview',
          category: 'Full Mock',
          mode: 'test',
          durationMinutes: 60,
          source: 'my-tests'
        }));
      } catch (error) {}
      window.SSCFlixRouter.navigate("/cbt");
    }

    function viewExpiredDetails(id, title) {
      saveSelectedAttemptContext(id, title, 'details');
      window.SSCFlixRouter.navigate("/results");
    }

    // Toast notification handler
    let toastTimeout = null;
    function showPrototypeToast(title, message) {
      const toast = document.getElementById('toastNotification');
      const titleElem = document.getElementById('toastTitle');
      const msgElem = document.getElementById('toastMessage');

      if (!toast) return;

      if (titleElem) titleElem.textContent = title;
      if (msgElem) msgElem.textContent = message;

      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        hideToast();
      }, 4000);
    }

    function hideToast() {
      const toast = document.getElementById('toastNotification');
      if (!toast) return;
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0');
    }

    // Initialize Page
    function initPage() {
      updateCounts();
      renderAttempts();
      setupEventListeners();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPage);
    } else {
      initPage();
    }
  
if(typeof formatAttemptDate==='function')window["formatAttemptDate"]=formatAttemptDate;
if(typeof updateCounts==='function')window["updateCounts"]=updateCounts;
if(typeof getFilteredAttempts==='function')window["getFilteredAttempts"]=getFilteredAttempts;
if(typeof renderAttempts==='function')window["renderAttempts"]=renderAttempts;
if(typeof setupEventListeners==='function')window["setupEventListeners"]=setupEventListeners;
if(typeof resetFilters==='function')window["resetFilters"]=resetFilters;
if(typeof openMoreSheet==='function')window["openMoreSheet"]=openMoreSheet;
if(typeof closeMoreSheet==='function')window["closeMoreSheet"]=closeMoreSheet;
if(typeof handleKeydownAccessibility==='function')window["handleKeydownAccessibility"]=handleKeydownAccessibility;
if(typeof saveSelectedAttemptContext==='function')window["saveSelectedAttemptContext"]=saveSelectedAttemptContext;
if(typeof resumeTest==='function')window["resumeTest"]=resumeTest;
if(typeof viewResult==='function')window["viewResult"]=viewResult;
if(typeof reviewAnswers==='function')window["reviewAnswers"]=reviewAnswers;
if(typeof reattemptTest==='function')window["reattemptTest"]=reattemptTest;
if(typeof viewExpiredDetails==='function')window["viewExpiredDetails"]=viewExpiredDetails;
if(typeof showPrototypeToast==='function')window["showPrototypeToast"]=showPrototypeToast;
if(typeof hideToast==='function')window["hideToast"]=hideToast;
if(typeof initPage==='function')window["initPage"]=initPage;
})();

// my-tests page script 2
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

if(typeof resetFilters==='function')window["resetFilters"]=resetFilters;
if(typeof hideToast==='function')window["hideToast"]=hideToast;
})();