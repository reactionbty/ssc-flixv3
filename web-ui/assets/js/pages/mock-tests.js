// mock-tests page script 1
(function(){

    /* ==========================================================================
       1. DATA CONFIGURATION & SOURCE OF TRUTH
       ========================================================================== */
    const EXAM_CONFIGS = {
      cgl: {
        id: 'cgl',
        label: 'SSC CGL',
        fullName: 'Combined Graduate Level Examination',
        tiers: [
          { id: 'all', name: 'All Tiers' },
          { id: 'tier-1', name: 'Tier-I (Computer Based Examination)' },
          { id: 'tier-2', name: 'Tier-II (Mains Examination)' }
        ]
      },
      chsl: {
        id: 'chsl',
        label: 'SSC CHSL',
        fullName: 'Combined Higher Secondary Level (10+2)',
        tiers: [
          { id: 'all', name: 'All Tiers' },
          { id: 'tier-1', name: 'Tier-I (CBE)' },
          { id: 'tier-2', name: 'Tier-II' }
        ]
      },
      cpo: {
        id: 'cpo',
        label: 'SSC CPO',
        fullName: 'Central Police Organisation (SI)',
        tiers: [
          { id: 'all', name: 'All Papers' },
          { id: 'paper-1', name: 'Paper-I (CBE)' },
          { id: 'paper-2', name: 'Paper-II (English Language)' }
        ]
      },
      mts: {
        id: 'mts',
        label: 'SSC MTS',
        fullName: 'Multi-Tasking Staff & Havaldar',
        tiers: [
          { id: 'all', name: 'All Sessions' },
          { id: 'session-cbe', name: 'Session-I & II (CBE)' }
        ]
      },
      gd: {
        id: 'gd',
        label: 'SSC GD',
        fullName: 'General Duty Constables (CAPFs/SSF/Rifleman)',
        tiers: [
          { id: 'cbe', name: 'Computer Based Examination (CBE)' }
        ]
      },
      steno: {
        id: 'steno',
        label: 'SSC Steno',
        fullName: 'Stenographer Grade C & D Examination',
        tiers: [
          { id: 'cbe', name: 'Grade C & D (CBE)' }
        ]
      }
    };

    // Realistic curated test dataset strictly assigned to SSC CGL Tier-1 without unused attemptsCount
    const mockTestsData = [
      {
        id: 'cgl-full-01',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-01',
        title: 'SSC CGL Full Mock 01',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-02',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-02',
        title: 'SSC CGL Full Mock 02',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'attempted',
        userScore: '138.50',
        userAccuracy: '82%',
        availabilityDesc: 'Attempted on 12 Mar 2026',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-03',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-03',
        title: 'SSC CGL Full Mock 03',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-04',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-04',
        title: 'SSC CGL Full Mock 04',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'upcoming',
        availabilityDesc: 'Coming Soon',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-05',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-05',
        title: 'SSC CGL Full Mock 05',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-06',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-06',
        title: 'SSC CGL Full Mock 06',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-07',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-07',
        title: 'SSC CGL Full Mock 07',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'attempted',
        userScore: '142.00',
        userAccuracy: '86%',
        availabilityDesc: 'Attempted on 04 Mar 2026',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        id: 'cgl-full-08',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'full',
        code: 'SSC-CGL-FL-08',
        title: 'SSC CGL Full Mock 08',
        targetExam: 'SSC CGL',
        duration: '60 mins',
        questions: 100,
        maxMarks: 200,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample full-length practice test.',
        sections: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      // Sectional Tests (12 items)
      {
        id: 'sec-gi-01',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-REAS-01',
        title: 'General Intelligence — Syllogism & Blood Relations',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'General Intelligence & Reasoning', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-gi-02',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-REAS-02',
        title: 'General Intelligence — Non-Verbal & Pattern Folding',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'attempted',
        userScore: '46.00',
        userAccuracy: '92%',
        availabilityDesc: 'Attempted on 10 Mar 2026',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'General Intelligence & Reasoning', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-qa-01',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-QUANT-01',
        title: 'Quantitative Aptitude — Geometry & Mensuration',
        targetExam: 'SSC CGL',
        duration: '20 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'Quantitative Aptitude', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-qa-02',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-QUANT-02',
        title: 'Quantitative Aptitude — Arithmetic Word Problems & DI',
        targetExam: 'SSC CGL',
        duration: '20 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'Quantitative Aptitude', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-ga-01',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-GK-01',
        title: 'General Awareness — Modern Indian History',
        targetExam: 'SSC CGL',
        duration: '10 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'attempted',
        userScore: '34.50',
        userAccuracy: '76%',
        availabilityDesc: 'Attempted on 08 Mar 2026',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'General Awareness & History', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-ga-02',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-GK-02',
        title: 'General Awareness — Indian Polity & Constitution',
        targetExam: 'SSC CGL',
        duration: '10 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'Indian Polity & Constitution', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-eng-01',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-ENG-01',
        title: 'English Comprehension — Cloze Test & Reading Passages',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'English Comprehension', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-eng-02',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-ENG-02',
        title: 'English Comprehension — Spotting Errors & Voice',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'English Grammar & Vocabulary', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-qa-03',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-QUANT-03',
        title: 'Quantitative Aptitude — Trigonometry & Heights',
        targetExam: 'SSC CGL',
        duration: '20 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'upcoming',
        availabilityDesc: 'Coming Soon',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'Quantitative Aptitude', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-ga-03',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-GK-03',
        title: 'General Awareness — Current Affairs Capsule',
        targetExam: 'SSC CGL',
        duration: '10 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'Current Affairs', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-gi-03',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-REAS-03',
        title: 'General Intelligence — Coding-Decoding & Analogy',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'General Intelligence & Reasoning', questions: 25, marks: 50 }]
      },
      {
        id: 'sec-eng-03',
        examId: 'cgl',
        tierId: 'tier-1',
        category: 'sectional',
        code: 'SEC-ENG-03',
        title: 'English Comprehension — Idioms & One-Word Substitutes',
        targetExam: 'SSC CGL',
        duration: '15 mins',
        questions: 25,
        maxMarks: 50,
        markingScheme: '+2.0, -0.50',
        status: 'available',
        availabilityDesc: 'Available Now',
        instructions: 'Sample sectional practice test.',
        sections: [{ name: 'English Vocabulary', questions: 25, marks: 50 }]
      }
    ];

    /* ==========================================================================
       2. INITIAL STATE & SHARED PREFERENCE INTEGRATION
       ========================================================================== */
    function getInitialExamKey() {
      try {
        const storedExam = localStorage.getItem('sscflix-target-exam');
        const pref = storedExam || window.SSCFlixState?.studentPreferences?.targetExam;
        if (pref) {
          const lower = String(pref).toLowerCase();
          for (const key of Object.keys(EXAM_CONFIGS)) {
            if (key === lower || EXAM_CONFIGS[key].label.toLowerCase() === lower) {
              return key;
            }
          }
        }
      } catch (e) {
        const pref = window.SSCFlixState?.studentPreferences?.targetExam;
        if (pref) {
          const lower = String(pref).toLowerCase();
          for (const key of Object.keys(EXAM_CONFIGS)) {
            if (key === lower || EXAM_CONFIGS[key].label.toLowerCase() === lower) return key;
          }
        }
      }
      return 'cgl';
    }

    const state = {
      selectedExam: getInitialExamKey(),
      selectedTier: 'all',
      category: 'full',
      selectedSubject: 'all',
      assessmentMode: (function () {
        try { return localStorage.getItem('sscflix-mock-assessment-mode') === 'study' ? 'study' : 'test'; }
        catch (error) { return 'test'; }
      })(),
      get activeCategory() { return this.category; },
      set activeCategory(val) { this.category = val; },
      status: 'all',
      get activeStatus() { return this.status; },
      set activeStatus(val) { this.status = val; },
      searchQuery: '',
      modalTest: null
    };

    let lastFocusedElement = null;
    let lastActiveCardTrigger = null;

    function syncSharedStudentPreference(examKey) {
      try {
        const examLabel = EXAM_CONFIGS[examKey] ? EXAM_CONFIGS[examKey].label : 'SSC CGL';
        window.SSCFlixState = window.SSCFlixState || {};
        window.SSCFlixState.studentPreferences = window.SSCFlixState.studentPreferences || {};
        window.SSCFlixState.studentPreferences.targetExam = examLabel;
      } catch (e) {
        // Shared state update
      }
    }

    /* ==========================================================================
       3. CORE CONTROLLERS & DATA FLOW
       ========================================================================== */
    function renderExamPills() {
      const container = document.getElementById('exam-pills-container');
      if (!container) return;

      container.replaceChildren();
      const examKeys = Object.keys(EXAM_CONFIGS);

      examKeys.forEach(key => {
        const exam = EXAM_CONFIGS[key];
        const isSelected = exam.id === state.selectedExam;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        btn.setAttribute('data-exam', exam.id);

        btn.className = `touch-target exam-pill px-4 py-2 rounded-lg text-xs sm:text-sm transition-all flex items-center gap-1.5 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
          isSelected
            ? 'bg-[#1D4ED8] text-white shadow-sm font-semibold'
            : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC] font-medium'
        }`;

        const span = document.createElement('span');
        span.textContent = exam.label;
        btn.appendChild(span);

        btn.addEventListener('click', () => {
          handleExamSelect(exam.id);
        });

        container.appendChild(btn);
      });
    }

    function renderTierOptions() {
      const tierSelect = document.getElementById('filter-tier-select');
      const hintEl = document.getElementById('exam-full-name-hint');
      const currentConfig = EXAM_CONFIGS[state.selectedExam] || EXAM_CONFIGS.cgl;

      if (hintEl) hintEl.textContent = currentConfig.fullName;
      if (!tierSelect) return;

      tierSelect.replaceChildren();
      currentConfig.tiers.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        if (t.id === state.selectedTier) {
          opt.selected = true;
        }
        tierSelect.appendChild(opt);
      });
    }

    function updateHeaderIndicator() {
      const examName = EXAM_CONFIGS[state.selectedExam] ? EXAM_CONFIGS[state.selectedExam].label : 'SSC CGL';
      document.querySelectorAll('.target-exam-text').forEach(el => {
        el.textContent = examName;
      });
    }

    function updateAssessmentModeUI() {
      const testButton = document.getElementById('mode-test');
      const studyButton = document.getElementById('mode-study');
      if (!testButton || !studyButton) return;

      const activeClass = 'assessment-mode-option min-h-8 sm:min-h-9 rounded-md px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all bg-[#1D4ED8] text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
      const inactiveClass = 'assessment-mode-option min-h-8 sm:min-h-9 rounded-md px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all text-[#475569] hover:bg-white hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
      const isTestMode = state.assessmentMode === 'test';

      testButton.className = isTestMode ? activeClass : inactiveClass;
      studyButton.className = isTestMode ? inactiveClass : activeClass;
      testButton.setAttribute('aria-pressed', String(isTestMode));
      studyButton.setAttribute('aria-pressed', String(!isTestMode));
    }

    function handleAssessmentModeChange(mode) {
      if (mode !== 'test' && mode !== 'study') return;
      state.assessmentMode = mode;
      try { localStorage.setItem('sscflix-mock-assessment-mode', mode); } catch (error) {}
      updateAssessmentModeUI();
    }

    function updateAttemptedFilterUI() {
      const button = document.getElementById('attempted-filter-btn');
      if (!button) return;

      const isActive = state.activeStatus === 'attempted';
      button.setAttribute('aria-pressed', String(isActive));
      button.className = isActive
        ? 'inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#1D4ED8] bg-[#EFF6FF] px-3 sm:px-3.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1'
        : 'inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#CBD5E1] bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-semibold text-[#475569] hover:border-[#94A3B8] hover:bg-[#F8FAFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
    }

    function toggleAttemptedFilter() {
      state.activeStatus = state.activeStatus === 'attempted' ? 'all' : 'attempted';
      updateAttemptedFilterUI();
      renderTestList();
    }

    function updateCategoryUI() {
      const tabFull = document.getElementById('tab-full');
      const tabSectional = document.getElementById('tab-sectional');
      if (!tabFull || !tabSectional) return;

      const activeClass = 'test-type-tab min-h-9 flex-1 sm:flex-none rounded-lg px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all bg-[#1D4ED8] text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
      const inactiveClass = 'test-type-tab min-h-9 flex-1 sm:flex-none rounded-lg px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all text-[#475569] hover:bg-white hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';

      const fullIsActive = state.category === 'full';
      tabFull.className = fullIsActive ? activeClass : inactiveClass;
      tabSectional.className = fullIsActive ? inactiveClass : activeClass;
      tabFull.setAttribute('aria-selected', String(fullIsActive));
      tabSectional.setAttribute('aria-selected', String(!fullIsActive));
    }

    function updateSubjectFilterUI() {
      const subjectSelect = document.getElementById('filter-subject-select');
      if (!subjectSelect) return;

      const isAvailable = state.category === 'sectional';
      const subjectWrapper = document.getElementById('subject-filter-wrapper');
      if (subjectWrapper) subjectWrapper.classList.toggle('hidden', !isAvailable);
      subjectSelect.disabled = !isAvailable;
      subjectSelect.value = state.selectedSubject;
      subjectSelect.title = 'Filter sectional tests by subject';
    }

    function handleSubjectChange(subjectId) {
      state.selectedSubject = subjectId || 'all';
      renderTestList();
    }

    function testMatchesSelectedSubject(test) {
      if (state.selectedSubject === 'all') return true;
      const sectionNames = Array.isArray(test.sections)
        ? test.sections.map(section => String(section.name || '').toLowerCase())
        : [];

      const aliases = {
        reasoning: ['general intelligence', 'reasoning'],
        awareness: ['general awareness', 'history', 'polity', 'current affairs'],
        quantitative: ['quantitative aptitude'],
        english: ['english']
      };

      const searchTerms = aliases[state.selectedSubject] || [];
      return searchTerms.some(term => sectionNames.some(name => name.includes(term)));
    }

    function updateStatusChipsUI() {
      document.querySelectorAll('.status-filter-chip').forEach(chip => {
        const s = chip.getAttribute('data-status');
        if (s === state.status) {
          chip.className = 'status-filter-chip touch-target px-3 py-1.5 rounded-lg text-xs bg-[#1D4ED8] text-white transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        } else {
          chip.className = 'status-filter-chip touch-target px-3 py-1.5 rounded-lg text-xs bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        }
      });
    }

    function updateComputedCounts() {
      const baseExamTierTests = mockTestsData.filter(t => {
        const matchesExam = t.examId === state.selectedExam;
        const matchesTier = (state.selectedTier === 'all' || t.tierId === state.selectedTier);
        return matchesExam && matchesTier;
      });

      const fullCount = baseExamTierTests.filter(t => t.category === 'full').length;
      const sectionalCount = baseExamTierTests.filter(t => t.category === 'sectional').length;

      const badgeFull = document.getElementById('badge-full-count');
      const badgeSec = document.getElementById('badge-sectional-count');
      if (badgeFull) badgeFull.textContent = fullCount;
      if (badgeSec) badgeSec.textContent = sectionalCount;

      const catTests = baseExamTierTests.filter(t => t.category === state.category);
      const allCount = catTests.length;
      const availCount = catTests.filter(t => t.status === 'available').length;
      const attemptCount = catTests.filter(t => t.status === 'attempted').length;
      const upcomingCount = catTests.filter(t => t.status === 'upcoming').length;

      const countAll = document.getElementById('count-status-all');
      const countAvail = document.getElementById('count-status-available');
      const countAttempt = document.getElementById('count-status-attempted');
      const countUpcoming = document.getElementById('count-status-upcoming');

      if (countAll) countAll.textContent = allCount;
      if (countAvail) countAvail.textContent = availCount;
      if (countAttempt) countAttempt.textContent = attemptCount;
      if (countUpcoming) countUpcoming.textContent = upcomingCount;
      const attemptedFilterCount = document.getElementById('attempted-filter-count');
      if (attemptedFilterCount) attemptedFilterCount.textContent = attemptCount;
      updateAttemptedFilterUI();
    }

    /* SAFE DOM CREATION FOR TEST CARD STATUS BADGE */
    function createSafeStatusBadge(test) {
      const badge = document.createElement('span');

      if (test.status === 'available') {
        badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]';
        const dot = document.createElement('span');
        dot.className = 'w-1.5 h-1.5 rounded-full bg-[#1D4ED8]';
        badge.appendChild(dot);
        badge.appendChild(document.createTextNode('Available'));
      } else if (test.status === 'attempted') {
        badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0]';
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined text-xs text-[#1D4ED8]';
        icon.textContent = 'check_circle';
        badge.appendChild(icon);
        const textSpan = document.createElement('span');
        textSpan.textContent = `Score: ${test.userScore} (Demo Data)`;
        badge.appendChild(textSpan);
      } else {
        badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8FAFC] text-[#F59E0B] border border-[#E2E8F0]';
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined text-xs';
        icon.textContent = 'schedule';
        badge.appendChild(icon);
        badge.appendChild(document.createTextNode('Upcoming'));
      }
      return badge;
    }

    /* SAFE DOM CREATION FOR TEST ACTION BUTTONS */
    function createSafeCardActionButtons(test) {
      const actionsWrapper = document.createElement('div');
      actionsWrapper.className = 'flex items-center gap-2 w-full md:w-auto justify-end';

      if (test.status === 'available') {
        const viewBtn = document.createElement('button');
        viewBtn.type = 'button';
        viewBtn.className = 'touch-target px-3.5 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        viewBtn.textContent = 'View Details';
        viewBtn.addEventListener('click', (e) => openDetailsModal(test.id, e.currentTarget));

        const startBtn = document.createElement('button');
        startBtn.type = 'button';
        startBtn.className = 'touch-target px-4 py-2 bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] rounded-lg text-xs font-semibold transition-colors shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        const startText = document.createElement('span');
        startText.textContent = 'Start Test';
        const arrow = document.createElement('span');
        arrow.className = 'material-symbols-outlined text-sm';
        arrow.textContent = 'arrow_forward';
        startBtn.appendChild(startText);
        startBtn.appendChild(arrow);
        startBtn.addEventListener('click', (e) => openDetailsModal(test.id, e.currentTarget));

        actionsWrapper.appendChild(viewBtn);
        actionsWrapper.appendChild(startBtn);
      } else if (test.status === 'attempted') {
        const resultBtn = document.createElement('button');
        resultBtn.type = 'button';
        resultBtn.className = 'touch-target px-3.5 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        resultBtn.textContent = 'View Result';
        resultBtn.addEventListener('click', (e) => openResultModal(test.id, e.currentTarget));

        const reattemptBtn = document.createElement('button');
        reattemptBtn.type = 'button';
        reattemptBtn.className = 'touch-target px-4 py-2 bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] hover:bg-[#DBEAFE] rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        const refreshIcon = document.createElement('span');
        refreshIcon.className = 'material-symbols-outlined text-sm';
        refreshIcon.textContent = 'refresh';
        const reattemptText = document.createElement('span');
        reattemptText.textContent = 'Reattempt';
        reattemptBtn.appendChild(refreshIcon);
        reattemptBtn.appendChild(reattemptText);
        reattemptBtn.addEventListener('click', (e) => openDetailsModal(test.id, e.currentTarget));

        actionsWrapper.appendChild(resultBtn);
        actionsWrapper.appendChild(reattemptBtn);
      } else {
        const viewBtn = document.createElement('button');
        viewBtn.type = 'button';
        viewBtn.className = 'touch-target px-3.5 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        viewBtn.textContent = 'View Details';
        viewBtn.addEventListener('click', (e) => openDetailsModal(test.id, e.currentTarget));

        const schedBtn = document.createElement('button');
        schedBtn.type = 'button';
        schedBtn.disabled = true;
        schedBtn.className = 'touch-target px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] rounded-lg text-xs font-semibold opacity-75 cursor-not-allowed flex items-center gap-1.5';
        const lockIcon = document.createElement('span');
        lockIcon.className = 'material-symbols-outlined text-sm';
        lockIcon.textContent = 'lock';
        const schedText = document.createElement('span');
        schedText.textContent = 'Scheduled';
        schedBtn.appendChild(lockIcon);
        schedBtn.appendChild(schedText);

        actionsWrapper.appendChild(viewBtn);
        actionsWrapper.appendChild(schedBtn);
      }

      return actionsWrapper;
    }

    /* SAFE DOM CARD CREATION (NO INNERHTML INTERPOLATION) */
    function createSafeTestCard(test) {
      const card = document.createElement('article');
      card.className = 'bg-white border border-[#E2E8F0] rounded-lg p-4 sm:p-5 shadow-sm hover:shadow transition-all flex flex-col md:flex-row md:items-center justify-between gap-4';

      const mainContent = document.createElement('div');
      mainContent.className = 'space-y-2 flex-1 min-w-0';

      // Meta row: badge, code, bullet, availability description
      const metaRow = document.createElement('div');
      metaRow.className = 'flex flex-wrap items-center gap-2';
      metaRow.appendChild(createSafeStatusBadge(test));

      const codeSpan = document.createElement('span');
      codeSpan.className = 'text-xs font-mono text-[#64748B]';
      codeSpan.textContent = test.code;
      metaRow.appendChild(codeSpan);

      const bulletSpan = document.createElement('span');
      bulletSpan.className = 'text-[#E2E8F0] text-xs';
      bulletSpan.textContent = '•';
      metaRow.appendChild(bulletSpan);

      const descSpan = document.createElement('span');
      descSpan.className = 'text-xs text-[#475569]';
      descSpan.textContent = test.availabilityDesc;
      metaRow.appendChild(descSpan);

      mainContent.appendChild(metaRow);

      // Title row
      const titleWrapper = document.createElement('div');
      const titleBtn = document.createElement('button');
      titleBtn.type = 'button';
      titleBtn.className = 'text-left font-semibold text-slate-900 text-base hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 rounded';
      titleBtn.textContent = test.title;
      titleBtn.addEventListener('click', (e) => openDetailsModal(test.id, e.currentTarget));
      titleWrapper.appendChild(titleBtn);
      mainContent.appendChild(titleWrapper);

      // Specs row
      const specsRow = document.createElement('div');
      specsRow.className = 'flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#475569]';

      // Duration spec
      const durItem = document.createElement('span');
      durItem.className = 'flex items-center gap-1';
      const durIcon = document.createElement('span');
      durIcon.className = 'material-symbols-outlined text-sm text-[#64748B]';
      durIcon.textContent = 'timer';
      const durText = document.createElement('span');
      durText.className = 'font-semibold text-[#0F172A]';
      durText.textContent = test.duration;
      durItem.appendChild(durIcon);
      durItem.appendChild(durText);
      specsRow.appendChild(durItem);

      // Questions spec
      const qsItem = document.createElement('span');
      qsItem.className = 'flex items-center gap-1';
      const qsIcon = document.createElement('span');
      qsIcon.className = 'material-symbols-outlined text-sm text-[#64748B]';
      qsIcon.textContent = 'help_outline';
      const qsText = document.createElement('span');
      qsText.className = 'font-semibold text-[#0F172A]';
      qsText.textContent = `${test.questions} Questions`;
      qsItem.appendChild(qsIcon);
      qsItem.appendChild(qsText);
      specsRow.appendChild(qsItem);

      // Marks spec
      const marksItem = document.createElement('span');
      marksItem.className = 'flex items-center gap-1';
      const marksIcon = document.createElement('span');
      marksIcon.className = 'material-symbols-outlined text-sm text-[#64748B]';
      marksIcon.textContent = 'award_star';
      const marksText = document.createElement('span');
      marksText.className = 'font-semibold text-[#0F172A]';
      marksText.textContent = `${test.maxMarks} Marks`;
      marksItem.appendChild(marksIcon);
      marksItem.appendChild(marksText);
      specsRow.appendChild(marksItem);

      // Scheme spec
      const schemeItem = document.createElement('span');
      schemeItem.className = 'flex items-center gap-1 text-red-600 font-medium';
      const schemeText = document.createElement('span');
      schemeText.textContent = `Scheme: ${test.markingScheme}`;
      schemeItem.appendChild(schemeText);
      specsRow.appendChild(schemeItem);

      mainContent.appendChild(specsRow);
      card.appendChild(mainContent);

      // Actions right block
      const actionsBlock = document.createElement('div');
      actionsBlock.className = 'shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E2E8F0]';
      actionsBlock.appendChild(createSafeCardActionButtons(test));
      card.appendChild(actionsBlock);

      return card;
    }

    function renderTestList() {
      const container = document.getElementById('tests-container');
      const emptyState = document.getElementById('empty-state');
      if (!container || !emptyState) return;

      // Filter pipeline: Exam -> Tier -> Category -> Status -> Search
      let filtered = mockTestsData.filter(t => {
        const matchesExam = t.examId === state.selectedExam;
        const matchesTier = (state.selectedTier === 'all' || t.tierId === state.selectedTier);
        const matchesCat = t.category === state.activeCategory;
        const matchesSubject = state.activeCategory !== 'sectional' || testMatchesSelectedSubject(t);
        return matchesExam && matchesTier && matchesCat && matchesSubject;
      });

      if (state.activeStatus !== 'all') {
        filtered = filtered.filter(t => t.status === state.activeStatus);
      }

      if (state.searchQuery) {
        filtered = filtered.filter(t =>
          t.title.toLowerCase().includes(state.searchQuery) ||
          t.code.toLowerCase().includes(state.searchQuery)
        );
      }

      if (filtered.length === 0) {
        container.replaceChildren();
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');

        const titleEl = document.getElementById('empty-state-title');
        const descEl = document.getElementById('empty-state-desc');
        const btnText = document.getElementById('empty-state-btn-text');
        const primaryBtn = document.getElementById('empty-state-primary-btn');
        const secondaryBtn = document.getElementById('empty-state-secondary-btn');

        // 4-tier empty-state detection hierarchy
        const examTests = mockTestsData.filter(t => t.examId === state.selectedExam);
        const examTierTests = mockTestsData.filter(t => t.examId === state.selectedExam && (state.selectedTier === 'all' || t.tierId === state.selectedTier));
        const examTierCatTests = mockTestsData.filter(t => t.examId === state.selectedExam && (state.selectedTier === 'all' || t.tierId === state.selectedTier) && t.category === state.activeCategory);
        const examTierCatSubjectTests = examTierCatTests.filter(t => state.activeCategory !== 'sectional' || testMatchesSelectedSubject(t));

        if (examTests.length === 0) {
          // Priority 1 (Exam level)
          titleEl.textContent = 'No Tests Available';
          descEl.textContent = 'No mock tests are currently available for this examination.';
          btnText.textContent = 'Switch to SSC CGL';
          primaryBtn.classList.remove('hidden');
          primaryBtn.onclick = () => {
            state.selectedExam = 'cgl';
            syncSharedStudentPreference('cgl');
            const tiers = EXAM_CONFIGS.cgl.tiers;
            const hasAll = tiers.some(t => t.id === 'all');
            state.selectedTier = hasAll ? 'all' : (tiers[0] ? tiers[0].id : 'all');
            state.searchQuery = '';
            state.activeStatus = 'all';
            const searchInput = document.getElementById('test-search-input');
            if (searchInput) searchInput.value = '';
            renderExamPills();
            renderTierOptions();
            updateHeaderIndicator();
            updateCategoryUI();
            updateStatusChipsUI();
            updateComputedCounts();
            renderTestList();
          };
          if (secondaryBtn) secondaryBtn.classList.add('hidden');
        } else if (examTierTests.length === 0) {
          // Priority 2 (Tier / Paper level)
          titleEl.textContent = 'No Tests for Selected Tier / Paper';
          descEl.textContent = 'No mock tests are currently available for this Tier / Paper.';
          btnText.textContent = 'View All Tiers & Papers';
          primaryBtn.classList.remove('hidden');
          primaryBtn.onclick = () => {
            const currentConfig = EXAM_CONFIGS[state.selectedExam] || EXAM_CONFIGS.cgl;
            const hasAll = currentConfig.tiers.some(t => t.id === 'all');
            state.selectedTier = hasAll ? 'all' : (currentConfig.tiers[0] ? currentConfig.tiers[0].id : 'all');
            state.searchQuery = '';
            state.activeStatus = 'all';
            const searchInput = document.getElementById('test-search-input');
            if (searchInput) searchInput.value = '';
            const tierSelect = document.getElementById('filter-tier-select');
            if (tierSelect) tierSelect.value = state.selectedTier;
            updateStatusChipsUI();
            updateComputedCounts();
            renderTestList();
          };
          if (secondaryBtn) secondaryBtn.classList.add('hidden');
        } else if (examTierCatTests.length > 0 && examTierCatSubjectTests.length === 0) {
          titleEl.textContent = 'No Tests for This Subject';
          descEl.textContent = 'There are no sectional tests for the selected subject and Tier / Paper.';
          btnText.textContent = 'Show All Subjects';
          primaryBtn.classList.remove('hidden');
          primaryBtn.onclick = () => {
            state.selectedSubject = 'all';
            const subjectSelect = document.getElementById('filter-subject-select');
            if (subjectSelect) subjectSelect.value = 'all';
            renderTestList();
          };
          if (secondaryBtn) secondaryBtn.classList.add('hidden');
        } else if (examTierCatTests.length === 0) {
          // Priority 3 (Category level)
          const otherCat = state.activeCategory === 'full' ? 'sectional' : 'full';
          const otherCatCount = mockTestsData.filter(t => t.examId === state.selectedExam && (state.selectedTier === 'all' || t.tierId === state.selectedTier) && t.category === otherCat).length;

          titleEl.textContent = state.activeCategory === 'full' ? 'No Full-Length Tests' : 'No Sectional Tests';
          descEl.textContent = state.activeCategory === 'full' ? 'No Full-Length tests are currently available for this selection.' : 'No Sectional tests are currently available for this selection.';

          if (otherCatCount > 0) {
            primaryBtn.classList.remove('hidden');
            btnText.textContent = otherCat === 'full' ? 'Switch to Full-Length Tests' : 'Switch to Sectional Tests';
            primaryBtn.onclick = () => {
              state.activeCategory = otherCat;
              state.searchQuery = '';
              state.activeStatus = 'all';
              const searchInput = document.getElementById('test-search-input');
              if (searchInput) searchInput.value = '';
              updateCategoryUI();
              updateStatusChipsUI();
              updateComputedCounts();
              renderTestList();
            };
          } else {
            const currentConfig = EXAM_CONFIGS[state.selectedExam] || EXAM_CONFIGS.cgl;
            const hasAllTierOption = currentConfig.tiers.some(t => t.id === 'all');
            const sameCatAllTiersCount = mockTestsData.filter(t => t.examId === state.selectedExam && t.category === state.activeCategory).length;
            const canExpandToAllTiers = hasAllTierOption && state.selectedTier !== 'all' && sameCatAllTiersCount > 0;

            if (canExpandToAllTiers) {
              primaryBtn.classList.remove('hidden');
              btnText.textContent = 'View All Tiers & Papers';
              primaryBtn.onclick = () => {
                state.selectedTier = 'all';
                state.searchQuery = '';
                state.activeStatus = 'all';
                const searchInput = document.getElementById('test-search-input');
                if (searchInput) searchInput.value = '';
                const tierSelect = document.getElementById('filter-tier-select');
                if (tierSelect) tierSelect.value = state.selectedTier;
                updateStatusChipsUI();
                updateComputedCounts();
                renderTestList();
              };
            } else {
              primaryBtn.classList.add('hidden');
            }
          }
          if (secondaryBtn) secondaryBtn.classList.add('hidden');
        } else {
          // Priority 4 (Filter / Search level)
          titleEl.textContent = 'No Matching Tests';
          descEl.textContent = 'No tests match your current filters.';
          btnText.textContent = 'Clear Filters';
          primaryBtn.classList.remove('hidden');
          primaryBtn.onclick = () => {
            const searchInput = document.getElementById('test-search-input');
            if (searchInput) searchInput.value = '';
            clearSharedSearchInputs();
            state.searchQuery = '';
            state.activeStatus = 'all';
            state.selectedSubject = 'all';
            const subjectSelect = document.getElementById('filter-subject-select');
            if (subjectSelect) subjectSelect.value = 'all';
            updateSubjectFilterUI();
            updateStatusChipsUI();
            renderTestList();
          };
          if (secondaryBtn) secondaryBtn.classList.add('hidden');
        }
        return;
      }

      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');
      container.replaceChildren();

      filtered.forEach(test => {
        container.appendChild(createSafeTestCard(test));
      });
    }

    /* ==========================================================================
       4. USER EVENT HANDLERS & STATE MUTATORS
       ========================================================================== */
    function handleExamSelect(examId) {
      if (!EXAM_CONFIGS[examId]) return;

      // Fix same-examination click: ignore identical selection completely
      if (state.selectedExam === examId) {
        return;
      }

      state.selectedExam = examId;
      syncSharedStudentPreference(examId);

      // Reset tier to default for new exam
      const tiers = EXAM_CONFIGS[examId].tiers;
      const hasAll = tiers.some(t => t.id === 'all');
      state.selectedTier = hasAll ? 'all' : (tiers[0] ? tiers[0].id : 'all');
      
      // Reset search query and status filter to 'All'
      state.activeStatus = 'all';
      state.searchQuery = '';
      const searchInput = document.getElementById('test-search-input');
      if (searchInput) searchInput.value = '';

      renderExamPills();
      renderTierOptions();
      updateHeaderIndicator();
      updateStatusChipsUI();
      updateComputedCounts();
      renderTestList();
    }

    function handleTierSelect(tierId) {
      state.selectedTier = tierId;
      const tierSelect = document.getElementById('filter-tier-select');
      if (tierSelect && tierSelect.value !== tierId) {
        tierSelect.value = tierId;
      }
      updateComputedCounts();
      renderTestList();
    }

    function handleCategoryChange(cat) {
      state.activeCategory = cat;
      state.activeStatus = 'all';
      state.selectedSubject = 'all';
      updateCategoryUI();
      updateSubjectFilterUI();
      updateStatusChipsUI();
      updateAttemptedFilterUI();
      updateComputedCounts();
      renderTestList();
    }

    function handleStatusChange(status) {
      state.activeStatus = status;
      updateStatusChipsUI();
      renderTestList();
    }

    function handleSearch(val) {
      state.searchQuery = (val || '').trim().toLowerCase();
      renderTestList();
    }

    function clearSharedSearchInputs() {
      document.querySelectorAll('#shared-shell-search-desktop-input, #shared-shell-search-mobile-input').forEach(input => {
        input.value = '';
      });
    }

    function resetToDefaultExam() {
      state.selectedExam = 'cgl';
      syncSharedStudentPreference('cgl');
      state.selectedTier = 'all';
      state.activeStatus = 'all';
      state.searchQuery = '';
      state.activeCategory = 'full';
      state.selectedSubject = 'all';

      const subjectSelect = document.getElementById('filter-subject-select');
      if (subjectSelect) subjectSelect.value = 'all';
      updateSubjectFilterUI();

      const searchInput = document.getElementById('test-search-input');
      if (searchInput) searchInput.value = '';

      renderExamPills();
      renderTierOptions();
      updateHeaderIndicator();
      updateCategoryUI();
      updateStatusChipsUI();
      updateComputedCounts();
      renderTestList();
    }

    function clearSearchAndStatusFilters() {
      state.activeStatus = 'all';
      state.searchQuery = '';
      state.selectedSubject = 'all';
      const subjectSelect = document.getElementById('filter-subject-select');
      if (subjectSelect) subjectSelect.value = 'all';
      const searchInput = document.getElementById('test-search-input');
      if (searchInput) searchInput.value = '';
      updateSubjectFilterUI();
      updateStatusChipsUI();
      renderTestList();
    }

    /* ==========================================================================
       5. ACCESSIBLE MODALS & DIALOGS
       ========================================================================== */
    function getFocusableElements(container) {
      return Array.from(container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
    }

    function isAnyOverlayOpen() {
      const openDialogs = document.querySelectorAll('.fixed:not(.hidden)[role="dialog"], .fixed:not(.hidden)[role="alertdialog"]');
      const mobileOverlayOpen = !document.getElementById('mobile-more-overlay')?.classList.contains('hidden');
      return openDialogs.length > 0 || mobileOverlayOpen;
    }

    function openModalElement(modalId, triggerEl = null) {
      if (triggerEl) {
        lastFocusedElement = triggerEl;
      } else if (document.activeElement && document.body.contains(document.activeElement)) {
        lastFocusedElement = document.activeElement;
      }
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');

      const focusables = getFocusableElements(modal);
      if (focusables.length > 0) {
        setTimeout(() => focusables[0].focus(), 50);
      }
    }

    function closeModalElement(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
      }

      // Safe scroll lock restoration: only remove overflow-hidden if no other overlay/dialog is visible
      if (!isAnyOverlayOpen()) {
        document.body.classList.remove('overflow-hidden');
      }

      const restoreEl = lastActiveCardTrigger || lastFocusedElement;
      if (restoreEl && typeof restoreEl.focus === 'function' && document.body.contains(restoreEl)) {
        restoreEl.focus();
      }
    }

    function openDetailsModal(testId, triggerEl = null) {
      const test = mockTestsData.find(t => t.id === testId);
      if (!test) return;

      if (triggerEl) lastActiveCardTrigger = triggerEl;
      state.modalTest = test;

      document.getElementById('modal-test-title').textContent = test.title;
      document.getElementById('modal-exam-code').textContent = test.code;
      document.getElementById('modal-exam-category').textContent = test.category === 'full' ? 'Full-Length Test' : 'Sectional Drill';
      document.getElementById('modal-test-duration').textContent = test.duration;
      document.getElementById('modal-test-questions').textContent = `${test.questions} Qs`;
      document.getElementById('modal-test-marks').textContent = `${test.maxMarks} Marks`;
      document.getElementById('modal-test-marking').textContent = test.markingScheme;
      document.getElementById('modal-test-instructions').textContent = test.instructions;

      // Safe DOM construction for section rows
      const sectionsContainer = document.getElementById('modal-sections-container');
      sectionsContainer.replaceChildren();

      (test.sections || []).forEach(sec => {
        const secRow = document.createElement('div');
        secRow.className = 'flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-xs font-medium text-[#0F172A]';
        nameSpan.textContent = sec.name;

        const countSpan = document.createElement('span');
        countSpan.className = 'text-xs font-bold text-[#1D4ED8]';
        countSpan.textContent = `${sec.questions} Qs • ${sec.marks} M`;

        secRow.appendChild(nameSpan);
        secRow.appendChild(countSpan);
        sectionsContainer.appendChild(secRow);
      });

      const confirmBtn = document.getElementById('modal-confirm-btn');
      const confirmLabel = document.getElementById('modal-confirm-label');

      if (test.status === 'upcoming') {
        confirmBtn.disabled = true;
        confirmBtn.className = 'touch-target px-5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] rounded-lg text-xs font-semibold opacity-60 cursor-not-allowed flex items-center gap-1.5';
        confirmLabel.textContent = 'Scheduled Test';
      } else {
        confirmBtn.disabled = false;
        confirmBtn.className = 'touch-target px-5 py-2.5 bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]';
        confirmLabel.textContent = test.status === 'attempted' ? 'Confirm & Reattempt' : 'Confirm & Start Test';
      }

      openModalElement('test-modal', triggerEl);
    }

    function closeTestModal() {
      closeModalElement('test-modal');
    }

    function openResultModal(testId, triggerEl = null) {
      const test = mockTestsData.find(t => t.id === testId);
      if (!test) return;

      if (triggerEl) lastActiveCardTrigger = triggerEl;
      state.modalTest = test;
      document.getElementById('result-modal-title').textContent = test.title;
      document.getElementById('result-modal-score').textContent = `${test.userScore} / ${test.maxMarks}`;
      document.getElementById('result-modal-accuracy').textContent = test.userAccuracy || '82%';

      openModalElement('result-modal', triggerEl);
    }

    function closeResultModal() {
      closeModalElement('result-modal');
    }

    function openFullResultReview() {
      const test = state.modalTest;
      if (test) {
        try {
          localStorage.setItem('sscflix-selected-attempt', JSON.stringify({
            id: String(test.id),
            title: String(test.title),
            action: 'result',
            source: 'mock-tests',
            selectedAt: new Date().toISOString()
          }));
        } catch (error) {}
      }
      window.SSCFlixRouter.navigate("/results");
    }

    function confirmAndLaunchTest() {
      const test = state.modalTest;
      if (!test) return;

      const previewContext = {
        testId: test.id,
        code: test.code,
        title: test.title,
        category: test.category === 'sectional' ? 'Sectional Practice' : 'Full Mock',
        examId: state.selectedExam,
        tierId: state.selectedTier,
        mode: state.assessmentMode,
        durationMinutes: Number.parseInt(String(test.duration || '60'), 10) || 60,
        questions: Number(test.questions) || 100,
        maxMarks: Number(test.maxMarks) || 200,
        markingScheme: test.markingScheme || '+2.0, -0.50',
        source: 'mock-tests'
      };

      try {
        localStorage.setItem('sscflix-active-test-preview', JSON.stringify(previewContext));
      } catch (error) {
        showPrototypeNotice('Browser storage is unavailable. The default CBT demo will open.', null);
      }

      closeTestModal();
      window.SSCFlixRouter.navigate("/cbt");
    }

    function closeCbtDialog() {
      closeModalElement('cbt-notice-dialog');
    }

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

    function toggleMobileMoreSheet() {
      const sheet = document.getElementById('mobile-more-sheet');
      const overlay = document.getElementById('mobile-more-overlay');
      const btn = document.getElementById('more-nav-btn');
      if (!sheet || !overlay) return;

      const isHidden = sheet.classList.contains('hidden');
      if (isHidden) {
        lastFocusedElement = document.activeElement;
        sheet.classList.remove('hidden');
        overlay.classList.remove('hidden');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');
        const focusables = getFocusableElements(sheet);
        if (focusables.length > 0) setTimeout(() => focusables[0].focus(), 50);
      } else {
        sheet.classList.add('hidden');
        overlay.classList.add('hidden');
        if (btn) btn.setAttribute('aria-expanded', 'false');

        if (!isAnyOverlayOpen()) {
          document.body.classList.remove('overflow-hidden');
        }

        const restoreTarget = btn || lastFocusedElement;
        if (restoreTarget && typeof restoreTarget.focus === 'function' && document.body.contains(restoreTarget)) {
          restoreTarget.focus();
        }
      }
    }

    function showPrototypeNotice(destination, event) {
      if (event) event.preventDefault();
      const banner = document.getElementById('prototype-banner');
      const bannerText = document.getElementById('prototype-banner-text');
      if (bannerText) bannerText.textContent = `The destination "${destination}" is not connected in the current Mock Tests preview.`;
      if (banner) {
        banner.classList.remove('hidden');
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    function dismissPrototypeNotice() {
      const banner = document.getElementById('prototype-banner');
      if (banner) banner.classList.add('hidden');
    }

    /* ==========================================================================
       6. GLOBAL KEYBOARD & CLICK LISTENERS
       ========================================================================== */
    document.addEventListener('keydown', (e) => {
      const openModals = Array.from(document.querySelectorAll('#test-modal:not(.hidden), #result-modal:not(.hidden), #cbt-notice-dialog:not(.hidden), #mobile-more-sheet:not(.hidden)'));
      if (openModals.length === 0) return;

      const currentModal = openModals[openModals.length - 1];

      if (e.key === 'Escape') {
        if (currentModal.id === 'test-modal') closeTestModal();
        else if (currentModal.id === 'result-modal') closeResultModal();
        else if (currentModal.id === 'cbt-notice-dialog') closeCbtDialog();
        else if (currentModal.id === 'mobile-more-sheet') toggleMobileMoreSheet();
        return;
      }

      if (e.key === 'Tab') {
        const focusables = getFocusableElements(currentModal);
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const firstFocusable = focusables[0];
        const lastFocusable = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });

    document.addEventListener('click', function(event) {
      const dropdown = document.getElementById('profile-dropdown');
      const btn = document.getElementById('profile-btn');
      if (dropdown && btn && !btn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    /* ==========================================================================
       7. INITIALIZATION
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
      syncSharedStudentPreference(state.selectedExam);
      renderTierOptions();
      updateHeaderIndicator();
      updateAssessmentModeUI();
      updateCategoryUI();
      updateSubjectFilterUI();
      updateStatusChipsUI();
      updateAttemptedFilterUI();
      updateComputedCounts();
      renderTestList();

      const tierSelect = document.getElementById('filter-tier-select');
      if (tierSelect) {
        tierSelect.addEventListener('change', (e) => {
          handleTierSelect(e.target.value);
        });
      }

      const subjectSelect = document.getElementById('filter-subject-select');
      if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => handleSubjectChange(e.target.value));
      }

      // The shared header search replaces the former page-level search box.
      document.querySelectorAll('#shared-shell-search-desktop-input, #shared-shell-search-mobile-input').forEach(input => {
        input.addEventListener('input', (e) => handleSearch(e.target.value));
      });
    });

    // Keep this page in sync with the target exam selected in the shared header.
    window.addEventListener('sscflix:statechange', (event) => {
      const nextExam = event.detail && event.detail.examId;
      if (!nextExam || !EXAM_CONFIGS[nextExam] || nextExam === state.selectedExam) return;

      state.selectedExam = nextExam;
      const tiers = EXAM_CONFIGS[nextExam].tiers;
      state.selectedTier = tiers.some(tier => tier.id === 'all') ? 'all' : (tiers[0] ? tiers[0].id : 'all');
      state.activeStatus = 'all';
      state.searchQuery = '';
      state.selectedSubject = 'all';
      clearSharedSearchInputs();
      updateAttemptedFilterUI();

      renderTierOptions();
      updateHeaderIndicator();
      updateSubjectFilterUI();
      updateComputedCounts();
      renderTestList();
    });
  
if(typeof getInitialExamKey==='function')window["getInitialExamKey"]=getInitialExamKey;
if(typeof syncSharedStudentPreference==='function')window["syncSharedStudentPreference"]=syncSharedStudentPreference;
if(typeof renderExamPills==='function')window["renderExamPills"]=renderExamPills;
if(typeof renderTierOptions==='function')window["renderTierOptions"]=renderTierOptions;
if(typeof updateHeaderIndicator==='function')window["updateHeaderIndicator"]=updateHeaderIndicator;
if(typeof updateAssessmentModeUI==='function')window["updateAssessmentModeUI"]=updateAssessmentModeUI;
if(typeof handleAssessmentModeChange==='function')window["handleAssessmentModeChange"]=handleAssessmentModeChange;
if(typeof updateAttemptedFilterUI==='function')window["updateAttemptedFilterUI"]=updateAttemptedFilterUI;
if(typeof toggleAttemptedFilter==='function')window["toggleAttemptedFilter"]=toggleAttemptedFilter;
if(typeof updateCategoryUI==='function')window["updateCategoryUI"]=updateCategoryUI;
if(typeof updateSubjectFilterUI==='function')window["updateSubjectFilterUI"]=updateSubjectFilterUI;
if(typeof handleSubjectChange==='function')window["handleSubjectChange"]=handleSubjectChange;
if(typeof testMatchesSelectedSubject==='function')window["testMatchesSelectedSubject"]=testMatchesSelectedSubject;
if(typeof updateStatusChipsUI==='function')window["updateStatusChipsUI"]=updateStatusChipsUI;
if(typeof updateComputedCounts==='function')window["updateComputedCounts"]=updateComputedCounts;
if(typeof createSafeStatusBadge==='function')window["createSafeStatusBadge"]=createSafeStatusBadge;
if(typeof createSafeCardActionButtons==='function')window["createSafeCardActionButtons"]=createSafeCardActionButtons;
if(typeof createSafeTestCard==='function')window["createSafeTestCard"]=createSafeTestCard;
if(typeof renderTestList==='function')window["renderTestList"]=renderTestList;
if(typeof handleExamSelect==='function')window["handleExamSelect"]=handleExamSelect;
if(typeof handleTierSelect==='function')window["handleTierSelect"]=handleTierSelect;
if(typeof handleCategoryChange==='function')window["handleCategoryChange"]=handleCategoryChange;
if(typeof handleStatusChange==='function')window["handleStatusChange"]=handleStatusChange;
if(typeof handleSearch==='function')window["handleSearch"]=handleSearch;
if(typeof clearSharedSearchInputs==='function')window["clearSharedSearchInputs"]=clearSharedSearchInputs;
if(typeof resetToDefaultExam==='function')window["resetToDefaultExam"]=resetToDefaultExam;
if(typeof clearSearchAndStatusFilters==='function')window["clearSearchAndStatusFilters"]=clearSearchAndStatusFilters;
if(typeof getFocusableElements==='function')window["getFocusableElements"]=getFocusableElements;
if(typeof isAnyOverlayOpen==='function')window["isAnyOverlayOpen"]=isAnyOverlayOpen;
if(typeof openModalElement==='function')window["openModalElement"]=openModalElement;
if(typeof closeModalElement==='function')window["closeModalElement"]=closeModalElement;
if(typeof openDetailsModal==='function')window["openDetailsModal"]=openDetailsModal;
if(typeof closeTestModal==='function')window["closeTestModal"]=closeTestModal;
if(typeof openResultModal==='function')window["openResultModal"]=openResultModal;
if(typeof closeResultModal==='function')window["closeResultModal"]=closeResultModal;
if(typeof openFullResultReview==='function')window["openFullResultReview"]=openFullResultReview;
if(typeof confirmAndLaunchTest==='function')window["confirmAndLaunchTest"]=confirmAndLaunchTest;
if(typeof closeCbtDialog==='function')window["closeCbtDialog"]=closeCbtDialog;
if(typeof toggleProfileMenu==='function')window["toggleProfileMenu"]=toggleProfileMenu;
if(typeof toggleMobileMoreSheet==='function')window["toggleMobileMoreSheet"]=toggleMobileMoreSheet;
if(typeof showPrototypeNotice==='function')window["showPrototypeNotice"]=showPrototypeNotice;
if(typeof dismissPrototypeNotice==='function')window["dismissPrototypeNotice"]=dismissPrototypeNotice;
})();

// mock-tests page script 2
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

if(typeof dismissPrototypeNotice==='function')window["dismissPrototypeNotice"]=dismissPrototypeNotice;
if(typeof handleAssessmentModeChange==='function')window["handleAssessmentModeChange"]=handleAssessmentModeChange;
if(typeof handleCategoryChange==='function')window["handleCategoryChange"]=handleCategoryChange;
if(typeof toggleAttemptedFilter==='function')window["toggleAttemptedFilter"]=toggleAttemptedFilter;
if(typeof clearSearchAndStatusFilters==='function')window["clearSearchAndStatusFilters"]=clearSearchAndStatusFilters;
if(typeof toggleMobileMoreSheet==='function')window["toggleMobileMoreSheet"]=toggleMobileMoreSheet;
if(typeof closeTestModal==='function')window["closeTestModal"]=closeTestModal;
if(typeof confirmAndLaunchTest==='function')window["confirmAndLaunchTest"]=confirmAndLaunchTest;
if(typeof closeResultModal==='function')window["closeResultModal"]=closeResultModal;
if(typeof openFullResultReview==='function')window["openFullResultReview"]=openFullResultReview;
if(typeof closeCbtDialog==='function')window["closeCbtDialog"]=closeCbtDialog;
})();