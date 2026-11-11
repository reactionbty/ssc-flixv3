// pyqs page script 1
(function(){

    (function () {
      'use strict';

      // 1. Canonical pyqPapers Dataset
      // All demonstration records have questionIds: [] with strict question readiness = false
      const pyqPapers = [
        {
          id: 'PYQ-CGL-24-01',
          exam: 'SSC CGL',
          tier: 'Tier-I',
          year: '2024',
          date: '09 Sep 2024',
          shift: 'Shift 1',
          timeWindow: '09:00 - 10:00',
          title: 'SSC CGL 2024 Tier-I (09 Sep 2024 — Shift 1)',
          questionsCount: 100,
          durationMins: 60,
          maxMarks: 200,
          negativeMark: '0.50',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 25, marks: 50 },
            { id: 'general_intelligence_reasoning', name: 'General Intelligence & Reasoning', count: 25, marks: 50 },
            { id: 'english_comprehension', name: 'English Comprehension', count: 25, marks: 50 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 50 }
          ]
        },
        {
          id: 'PYQ-CGL-24-02',
          exam: 'SSC CGL',
          tier: 'Tier-I',
          year: '2024',
          date: '09 Sep 2024',
          shift: 'Shift 2',
          timeWindow: '12:30 - 13:30',
          title: 'SSC CGL 2024 Tier-I (09 Sep 2024 — Shift 2)',
          questionsCount: 100,
          durationMins: 60,
          maxMarks: 200,
          negativeMark: '0.50',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 25, marks: 50 },
            { id: 'general_intelligence_reasoning', name: 'General Intelligence & Reasoning', count: 25, marks: 50 },
            { id: 'english_comprehension', name: 'English Comprehension', count: 25, marks: 50 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 50 }
          ]
        },
        {
          id: 'PYQ-CGL-23-T2',
          exam: 'SSC CGL',
          tier: 'Tier-II',
          year: '2023',
          date: '26 Oct 2023',
          shift: 'Shift 1',
          timeWindow: '09:00 - 11:15',
          title: 'SSC CGL 2023 Tier-II (26 Oct 2023 — Shift 1 Mains)',
          questionsCount: 150,
          durationMins: 135,
          maxMarks: 390,
          negativeMark: '1.00',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Mathematical Abilities', count: 30, marks: 90 },
            { id: 'general_intelligence_reasoning', name: 'Reasoning & Intelligence', count: 30, marks: 90 },
            { id: 'english_comprehension', name: 'English Language', count: 45, marks: 135 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 75 },
            { id: 'computer_knowledge', name: 'Computer Knowledge', count: 20, marks: 60 }
          ]
        },
        {
          id: 'PYQ-CHSL-23-01',
          exam: 'SSC CHSL',
          tier: 'Tier-I',
          year: '2023',
          date: '02 Aug 2023',
          shift: 'Shift 1',
          timeWindow: '09:00 - 10:00',
          title: 'SSC CHSL 2023 Tier-I (02 Aug 2023 — Shift 1)',
          questionsCount: 100,
          durationMins: 60,
          maxMarks: 200,
          negativeMark: '0.50',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 25, marks: 50 },
            { id: 'general_intelligence_reasoning', name: 'General Intelligence', count: 25, marks: 50 },
            { id: 'english_comprehension', name: 'English Language', count: 25, marks: 50 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 50 }
          ]
        },
        {
          id: 'PYQ-CHSL-23-03',
          exam: 'SSC CHSL',
          tier: 'Tier-I',
          year: '2023',
          date: '04 Aug 2023',
          shift: 'Shift 3',
          timeWindow: '16:00 - 17:00',
          title: 'SSC CHSL 2023 Tier-I (04 Aug 2023 — Shift 3)',
          questionsCount: 100,
          durationMins: 60,
          maxMarks: 200,
          negativeMark: '0.50',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 25, marks: 50 },
            { id: 'general_intelligence_reasoning', name: 'General Intelligence', count: 25, marks: 50 },
            { id: 'english_comprehension', name: 'English Language', count: 25, marks: 50 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 50 }
          ]
        },
        {
          id: 'PYQ-CPO-23-01',
          exam: 'SSC CPO',
          tier: 'Paper-I',
          year: '2023',
          date: '03 Oct 2023',
          shift: 'Shift 1',
          timeWindow: '09:00 - 11:00',
          title: 'SSC CPO SI 2023 Paper-I (03 Oct 2023 — Shift 1)',
          questionsCount: 200,
          durationMins: 120,
          maxMarks: 200,
          negativeMark: '0.25',
          questionIds: [],
          sections: [
            { id: 'general_intelligence_reasoning', name: 'General Intelligence & Reasoning', count: 50, marks: 50 },
            { id: 'general_awareness', name: 'General Knowledge & GA', count: 50, marks: 50 },
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 50, marks: 50 },
            { id: 'english_comprehension', name: 'English Comprehension', count: 50, marks: 50 }
          ]
        },
        {
          id: 'PYQ-MTS-23-02',
          exam: 'SSC MTS',
          tier: 'Session-I & II',
          year: '2023',
          date: '05 May 2023',
          shift: 'Shift 2',
          timeWindow: '12:30 - 14:00',
          title: 'SSC MTS 2023 Multi-Tasking Staff (05 May 2023 — Shift 2)',
          questionsCount: 90,
          durationMins: 90,
          maxMarks: 270,
          negativeMark: '1.00 (Session 2)',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Numerical & Mathematical Ability', count: 20, marks: 60 },
            { id: 'general_intelligence_reasoning', name: 'Reasoning Ability & Problem Solving', count: 20, marks: 60 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 75 },
            { id: 'english_comprehension', name: 'English Language & Comprehension', count: 25, marks: 75 }
          ]
        },
        {
          id: 'PYQ-CGL-22-01',
          exam: 'SSC CGL',
          tier: 'Tier-I',
          year: '2022',
          date: '01 Dec 2022',
          shift: 'Shift 1',
          timeWindow: '09:00 - 10:00',
          title: 'SSC CGL 2022 Tier-I (01 Dec 2022 — Shift 1)',
          questionsCount: 100,
          durationMins: 60,
          maxMarks: 200,
          negativeMark: '0.50',
          questionIds: [],
          sections: [
            { id: 'quantitative_aptitude', name: 'Quantitative Aptitude', count: 25, marks: 50 },
            { id: 'general_intelligence_reasoning', name: 'General Intelligence & Reasoning', count: 25, marks: 50 },
            { id: 'english_comprehension', name: 'English Comprehension', count: 25, marks: 50 },
            { id: 'general_awareness', name: 'General Awareness', count: 25, marks: 50 }
          ]
        }
      ];

      // Standard canonical subject labels
      const canonicalSubjectLabels = {
        quantitative_aptitude: 'Quantitative Aptitude',
        general_intelligence_reasoning: 'General Intelligence & Reasoning',
        english_comprehension: 'English Comprehension',
        general_awareness: 'General Awareness',
        computer_knowledge: 'Computer Knowledge'
      };

      // PYQ page state. The target exam comes from the shared app header.
      const EXAM_LABELS = {
        cgl: 'SSC CGL',
        chsl: 'SSC CHSL',
        cpo: 'SSC CPO',
        mts: 'SSC MTS',
        gd: 'SSC GD',
        steno: 'SSC Steno'
      };

      function normalizeTargetExam(value) {
        const raw = String(value || 'cgl').trim();
        const lower = raw.toLowerCase();
        if (EXAM_LABELS[lower]) return EXAM_LABELS[lower];
        const exact = Object.values(EXAM_LABELS).find(label => label.toLowerCase() === lower);
        return exact || 'SSC CGL';
      }

      function getInitialTargetExam() {
        try {
          return normalizeTargetExam(localStorage.getItem('sscflix-target-exam') || window.SSCFlixState?.studentPreferences?.targetExam || 'cgl');
        } catch (error) {
          return normalizeTargetExam(window.SSCFlixState?.studentPreferences?.targetExam || 'cgl');
        }
      }

      let activeExam = getInitialTargetExam();
      let activeTier = 'all';
      let activeYear = 'all';
      let pyqViewType = 'full';
      let selectedSubject = 'all';
      let attemptedOnly = false;
      let assessmentMode = 'test';
      try {
        assessmentMode = localStorage.getItem('sscflix-mock-assessment-mode') === 'study' ? 'study' : 'test';
      } catch (error) {}

      // DOM Elements
      const papersContainer = document.getElementById('papers-list-container');
      const emptyStateView = document.getElementById('empty-state-view');
      const emptyStateResetBtn = document.getElementById('empty-state-reset-btn');
      const filterResultCount = document.getElementById('filter-result-count');
      const activeFilterBadge = document.getElementById('active-filter-badge');
      const filterYear = document.getElementById('filter-year');
      const filterTier = document.getElementById('pyq-tier-filter');
      const modeTestBtn = document.getElementById('pyq-mode-test');
      const modeStudyBtn = document.getElementById('pyq-mode-study');
      const typeFullBtn = document.getElementById('pyq-tab-full');
      const typeSectionalBtn = document.getElementById('pyq-tab-sectional');
      const subjectFilterWrapper = document.getElementById('pyq-subject-filter-wrapper');
      const subjectFilter = document.getElementById('pyq-subject-filter');
      const attemptedFilterBtn = document.getElementById('pyq-attempted-filter-btn');
      const attemptedFilterCount = document.getElementById('pyq-attempted-filter-count');

      // Modal Elements
      const paperModal = document.getElementById('paper-modal');
      const modalBackdrop = document.getElementById('modal-backdrop');
      const modalPanel = document.getElementById('modal-panel');
      const modalCloseBtn = document.getElementById('modal-close-btn');
      const modalDismissBtn = document.getElementById('modal-dismiss-btn');
      const modalPaperTitle = document.getElementById('modal-paper-title');
      const modalExamTierTag = document.getElementById('modal-exam-tier-tag');
      const modalShiftTag = document.getElementById('modal-shift-tag');
      const modalDateTag = document.getElementById('modal-date-tag');
      const modalMetricQuestions = document.getElementById('modal-metric-questions');
      const modalMetricTime = document.getElementById('modal-metric-time');
      const modalMetricMarks = document.getElementById('modal-metric-marks');
      const modalMetricNegative = document.getElementById('modal-metric-negative');
      const modalMetricNegativeContainer = document.getElementById('modal-metric-negative-container');
      const modalSectionsBreakdown = document.getElementById('modal-sections-breakdown');
      const modalQidIndicator = document.getElementById('modal-qid-indicator');
      const startExamModeBtn = document.getElementById('start-exam-mode-btn');
      const startPracticeModeBtn = document.getElementById('start-practice-mode-btn');

      // Mobile More Sheet Elements
      const moreSheet = document.getElementById('more-sheet');
      const moreSheetBackdrop = document.getElementById('more-sheet-backdrop');
      const moreSheetPanel = document.getElementById('more-sheet-panel');
      const openMoreSheetBtn = document.getElementById('open-more-sheet-btn');
      const closeMoreSheetBtn = document.getElementById('close-more-sheet-btn');

      // Toast Notification Elements
      const toast = document.getElementById('pyq-toast');
      const toastMessage = document.getElementById('toast-message');
      const toastIcon = document.getElementById('toast-icon');
      const toastCloseBtn = document.getElementById('toast-close-btn');
      let toastTimer = null;

      function showToast(msg, iconName) {
        if (toastTimer) clearTimeout(toastTimer);
        toastMessage.textContent = msg;
        toastIcon.textContent = iconName || 'info';
        toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
        toast.classList.add('translate-y-0', 'opacity-100');
        toastTimer = setTimeout(hideToast, 4000);
      }

      function hideToast() {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
      }
      toastCloseBtn.addEventListener('click', hideToast);

      /* ============================================================
         OverlayManager: Robust centralized overlay stack, scroll-lock,
         Escape listener, and focus trapping
         ============================================================ */
      const OverlayManager = {
        stack: [],
        previousBodyOverflow: '',

        push(entry) {
          if (this.stack.length === 0) {
            this.previousBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
          }
          this.stack.push(entry);
        },

        pop() {
          const removed = this.stack.pop();
          if (this.stack.length === 0) {
            document.body.style.overflow = this.previousBodyOverflow;
          }
          return removed;
        },

        top() {
          return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        }
      };

      function trapFocus(container, event) {
        if (event.key !== 'Tab') return;
        const focusable = container.querySelectorAll(
          'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first || !container.contains(document.activeElement)) {
            last.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === last || !container.contains(document.activeElement)) {
            first.focus();
            event.preventDefault();
          }
        }
      }

      window.addEventListener('keydown', (e) => {
        const topOverlay = OverlayManager.top();
        if (!topOverlay) return;

        if (e.key === 'Escape') {
          e.preventDefault();
          topOverlay.closeFn();
          return;
        }

        if (topOverlay.panel) {
          trapFocus(topOverlay.panel, e);
        }
      });

      /* ============================================================
         PROGRESSIVE CASCADING FILTER PIPELINE
         Pipeline Order: Exam -> Tier -> Year -> Date -> Shift -> Subject
         ============================================================ */

      // Year-only filter options.
      function getAllTierLabel() {
        if (activeExam === 'SSC CPO') return 'All Papers';
        if (activeExam === 'SSC MTS') return 'All Sessions';
        return 'All Tiers';
      }

      function updateTierOptions() {
        const tiers = Array.from(new Set(
          pyqPapers.filter(paper => paper.exam === activeExam).map(paper => paper.tier)
        )).filter(Boolean);

        filterTier.replaceChildren();
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = getAllTierLabel();
        filterTier.appendChild(allOption);

        tiers.forEach(tier => {
          const option = document.createElement('option');
          option.value = tier;
          option.textContent = tier;
          filterTier.appendChild(option);
        });

        if (tiers.includes(activeTier)) {
          filterTier.value = activeTier;
        } else {
          activeTier = 'all';
          filterTier.value = 'all';
        }
      }

      function updateYearOptions() {
        const years = Array.from(new Set(
          pyqPapers.filter(paper => paper.exam === activeExam && (activeTier === 'all' || paper.tier === activeTier)).map(paper => paper.year)
        )).filter(Boolean).sort((a,b) => Number(b) - Number(a));

        filterYear.replaceChildren();
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Years';
        filterYear.appendChild(allOption);

        years.forEach(year => {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          filterYear.appendChild(option);
        });

        if (years.includes(activeYear)) {
          filterYear.value = activeYear;
        } else {
          activeYear = 'all';
          filterYear.value = 'all';
        }
      }

      function getStoredAttemptedPyqIds() {
        try {
          const raw = JSON.parse(localStorage.getItem('sscflix-pyq-attempted') || '[]');
          return new Set(Array.isArray(raw) ? raw.map(value => String(value)) : []);
        } catch (error) {
          return new Set();
        }
      }

      function getYearFilteredPapers() {
        const attemptedIds = getStoredAttemptedPyqIds();
        return pyqPapers.filter(paper => {
          const matchesExam = paper.exam === activeExam;
          const matchesTier = activeTier === 'all' || paper.tier === activeTier;
          const matchesYear = activeYear === 'all' || paper.year === activeYear;
          const matchesAttempted = !attemptedOnly || attemptedIds.has(paper.id);
          return matchesExam && matchesTier && matchesYear && matchesAttempted;
        });
      }

      function getFilteredRecords() {
        const papers = getYearFilteredPapers();
        if (pyqViewType === 'full') return papers;

        return papers.flatMap(paper => paper.sections
          .filter(section => selectedSubject === 'all' || section.id === selectedSubject)
          .map(section => ({
            ...paper,
            id: paper.id + '--' + section.id,
            parentPaperId: paper.id,
            sectionId: section.id,
            title: paper.title + ' — ' + section.name,
            questionsCount: section.count,
            maxMarks: section.marks,
            sections: [section]
          })));
      }

      function updateAssessmentModeUI() {
        const activeClass = 'pyq-mode-option min-h-8 sm:min-h-9 rounded-md px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all bg-[#1D4ED8] text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
        const inactiveClass = 'pyq-mode-option min-h-8 sm:min-h-9 rounded-md px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all text-[#475569] hover:bg-white hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
        const isTestMode = assessmentMode === 'test';
        modeTestBtn.className = isTestMode ? activeClass : inactiveClass;
        modeStudyBtn.className = isTestMode ? inactiveClass : activeClass;
        modeTestBtn.setAttribute('aria-pressed', String(isTestMode));
        modeStudyBtn.setAttribute('aria-pressed', String(!isTestMode));
      }

      function setAssessmentMode(mode) {
        if (mode !== 'test' && mode !== 'study') return;
        assessmentMode = mode;
        try { localStorage.setItem('sscflix-mock-assessment-mode', mode); } catch (error) {}
        updateAssessmentModeUI();
      }

      function updatePyqTypeUI() {
        const fullIsActive = pyqViewType === 'full';
        const activeClass = 'pyq-type-tab min-h-8 sm:min-h-9 rounded-lg px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all bg-[#1D4ED8] text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
        const inactiveClass = 'pyq-type-tab min-h-8 sm:min-h-9 rounded-lg px-3 sm:px-4 text-[11px] sm:text-sm font-semibold transition-all text-[#475569] hover:bg-white hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
        typeFullBtn.className = fullIsActive ? activeClass : inactiveClass;
        typeSectionalBtn.className = fullIsActive ? inactiveClass : activeClass;
        typeFullBtn.setAttribute('aria-selected', String(fullIsActive));
        typeSectionalBtn.setAttribute('aria-selected', String(!fullIsActive));
      }

      function setPyqViewType(mode) {
        if (mode !== 'full' && mode !== 'sectional') return;
        pyqViewType = mode;
        if (mode === 'full') selectedSubject = 'all';
        updatePyqTypeUI();
        updateSubjectFilterUI();
        updateAttemptedFilterUI();
        renderPapersList();
      }

      function updateSubjectFilterUI() {
        if (!subjectFilter || !subjectFilterWrapper) return;

        const isSectional = pyqViewType === 'sectional';
        subjectFilterWrapper.classList.toggle('hidden', !isSectional);

        const subjectNames = new Map();
        pyqPapers
          .filter(paper => paper.exam === activeExam && (activeTier === 'all' || paper.tier === activeTier) && (activeYear === 'all' || paper.year === activeYear))
          .forEach(paper => paper.sections.forEach(section => {
            if (!subjectNames.has(section.id)) subjectNames.set(section.id, section.name);
          }));

        subjectFilter.replaceChildren();
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Subjects';
        subjectFilter.appendChild(allOption);

        Array.from(subjectNames.entries())
          .sort((a, b) => a[1].localeCompare(b[1]))
          .forEach(([id, name]) => {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = name;
            subjectFilter.appendChild(option);
          });

        if (subjectNames.has(selectedSubject)) {
          subjectFilter.value = selectedSubject;
        } else {
          selectedSubject = 'all';
          subjectFilter.value = 'all';
        }
      }

      function handleSubjectFilterChange(subjectId) {
        selectedSubject = subjectId || 'all';
        renderPapersList();
      }

      function updateAttemptedFilterUI() {
        const attemptedIds = getStoredAttemptedPyqIds();
        const attemptedPapers = pyqPapers.filter(paper =>
          paper.exam === activeExam &&
          (activeTier === 'all' || paper.tier === activeTier) &&
          (activeYear === 'all' || paper.year === activeYear) &&
          attemptedIds.has(paper.id)
        );
        const count = pyqViewType === 'full'
          ? attemptedPapers.length
          : attemptedPapers.reduce((total, paper) => total + paper.sections.filter(section =>
              selectedSubject === 'all' || section.id === selectedSubject
            ).length, 0);

        attemptedFilterCount.textContent = String(count);
        attemptedFilterBtn.setAttribute('aria-pressed', String(attemptedOnly));
        attemptedFilterBtn.className = attemptedOnly
          ? 'sm:order-3 sm:ml-auto inline-flex min-h-9 sm:min-h-10 shrink-0 items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#1D4ED8] bg-[#EFF6FF] px-2.5 sm:px-3.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1'
          : 'sm:order-3 sm:ml-auto inline-flex min-h-9 sm:min-h-10 shrink-0 items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#CBD5E1] bg-white px-2.5 sm:px-3.5 text-xs sm:text-sm font-semibold text-[#475569] hover:border-[#94A3B8] hover:bg-[#F8FAFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-1';
      }

      function toggleAttemptedFilter() {
        attemptedOnly = !attemptedOnly;
        updateAttemptedFilterUI();
        renderPapersList();
      }

// Render cards list with strict honest demonstration state
      function renderPapersList() {
        const filtered = getFilteredRecords();
        papersContainer.replaceChildren();

        const isFiltered = activeTier !== 'all' || activeYear !== 'all' || attemptedOnly;

        if (isFiltered) {
          activeFilterBadge.classList.remove('hidden');
        } else {
          activeFilterBadge.classList.add('hidden');
        }

        const resultUnit = pyqViewType === 'full' ? 'PYQ paper' : 'sectional PYQ';
        filterResultCount.textContent = `Showing ${filtered.length} ${resultUnit}${filtered.length === 1 ? '' : 's'}`;
        updateAttemptedFilterUI();

        if (filtered.length === 0) {
          papersContainer.classList.add('hidden');
          emptyStateView.classList.remove('hidden');
          const emptyTitle = emptyStateView.querySelector('h3');
          const emptyDescription = emptyStateView.querySelector('p');
          if (emptyTitle) emptyTitle.textContent = attemptedOnly ? 'No Attempted PYQs Yet' : 'No Previous Year Questions Found';
          if (emptyDescription) emptyDescription.textContent = attemptedOnly
            ? 'No PYQ records have been marked as attempted for this examination yet.'
            : 'No records match the selected year and examination.';
          return;
        }

        emptyStateView.classList.add('hidden');
        papersContainer.classList.remove('hidden');

        filtered.forEach(paper => {
          const card = document.createElement('div');
          card.className = 'bg-brand-surface border border-brand-border rounded-xl p-5 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between gap-4';

          const topWrap = document.createElement('div');
          topWrap.className = 'space-y-3';

          // Tags Row
          const tagsRow = document.createElement('div');
          tagsRow.className = 'flex items-center justify-between gap-2 flex-wrap';

          const leftBadges = document.createElement('div');
          leftBadges.className = 'flex items-center gap-1.5 flex-wrap';

          const examTag = document.createElement('span');
          examTag.className = 'px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 text-brand-blue border border-blue-200';
          examTag.textContent = `${paper.exam} • ${paper.tier} • ${paper.year}`;
          leftBadges.appendChild(examTag);

          // STRICT HONEST BADGE: Questions not available yet (Neutral gray/slate)
          const availTag = document.createElement('span');
          availTag.className = 'px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-brand-textSecondary border border-brand-border flex items-center gap-1';
          const icon = document.createElement('span');
          icon.className = 'material-symbols-outlined text-[14px] text-slate-500';
          icon.textContent = 'lock_clock';
          availTag.appendChild(icon);
          const text = document.createElement('span');
          text.textContent = 'Questions not available yet';
          availTag.appendChild(text);
          leftBadges.appendChild(availTag);

          tagsRow.appendChild(leftBadges);

          const shiftTag = document.createElement('span');
          shiftTag.className = 'text-brand-textSecondary font-mono text-xs';
          shiftTag.textContent = `${paper.shift} • ${paper.timeWindow}`;
          tagsRow.appendChild(shiftTag);

          topWrap.appendChild(tagsRow);

          // Title
          const title = document.createElement('h3');
          title.className = 'text-base font-bold text-brand-textPrimary leading-snug';
          title.textContent = paper.title;
          topWrap.appendChild(title);

          // Meta Grid
          const metaGrid = document.createElement('div');
          metaGrid.className = 'flex flex-wrap items-center gap-y-1 gap-x-3 text-brand-textSecondary text-xs bg-slate-50 border border-brand-border p-2.5 rounded-lg';

          // Questions
          const qDiv = document.createElement('div');
          qDiv.className = 'flex items-center gap-1';
          const qIcon = document.createElement('span');
          qIcon.className = 'material-symbols-outlined text-[16px] text-brand-blue';
          qIcon.textContent = 'help_outline';
          qDiv.appendChild(qIcon);
          const qSpan = document.createElement('span');
          qSpan.textContent = `${paper.questionsCount} Questions`;
          qDiv.appendChild(qSpan);
          metaGrid.appendChild(qDiv);

          const sep1 = document.createElement('span');
          sep1.textContent = '•';
          metaGrid.appendChild(sep1);

          // Duration
          const dDiv = document.createElement('div');
          dDiv.className = 'flex items-center gap-1';
          const dIcon = document.createElement('span');
          dIcon.className = 'material-symbols-outlined text-[16px] text-amber-600';
          dIcon.textContent = 'schedule';
          dDiv.appendChild(dIcon);
          const dSpan = document.createElement('span');
          dSpan.textContent = `${paper.durationMins} Mins`;
          dDiv.appendChild(dSpan);
          metaGrid.appendChild(dDiv);

          const sep2 = document.createElement('span');
          sep2.textContent = '•';
          metaGrid.appendChild(sep2);

          // Marks
          const mDiv = document.createElement('div');
          mDiv.className = 'flex items-center gap-1';
          const mIcon = document.createElement('span');
          mIcon.className = 'material-symbols-outlined text-[16px] text-blue-600';
          mIcon.textContent = 'star_rate';
          mDiv.appendChild(mIcon);
          const mSpan = document.createElement('span');
          mSpan.textContent = `${paper.maxMarks} Marks`;
          mDiv.appendChild(mSpan);
          metaGrid.appendChild(mDiv);

          if (paper.negativeMark) {
            const sep3 = document.createElement('span');
            sep3.textContent = '•';
            metaGrid.appendChild(sep3);

            const nDiv = document.createElement('div');
            nDiv.className = 'flex items-center gap-1';
            const nIcon = document.createElement('span');
            nIcon.className = 'material-symbols-outlined text-[16px] text-brand-destructive';
            nIcon.textContent = 'remove_circle_outline';
            nDiv.appendChild(nIcon);
            const nSpan = document.createElement('span');
            nSpan.textContent = `Neg: ${paper.negativeMark}`;
            nDiv.appendChild(nSpan);
            metaGrid.appendChild(nDiv);
          }

          topWrap.appendChild(metaGrid);

          // Structure Preview Honest Label
          const sectionsWrap = document.createElement('div');
          sectionsWrap.className = 'space-y-1.5 pt-1';
          const secLabel = document.createElement('span');
          secLabel.className = 'text-xs font-semibold uppercase tracking-wider text-brand-textSecondary block';
          secLabel.textContent = 'Sample Structure Preview';
          sectionsWrap.appendChild(secLabel);

          const secChips = document.createElement('div');
          secChips.className = 'flex flex-wrap gap-1.5';
          paper.sections.forEach(sec => {
            const chip = document.createElement('span');
            chip.className = 'px-2 py-0.5 rounded text-xs bg-slate-100 text-brand-textPrimary font-medium border border-brand-border';
            chip.textContent = `${sec.name}: ${sec.count}Q`;
            secChips.appendChild(chip);
          });
          sectionsWrap.appendChild(secChips);
          topWrap.appendChild(sectionsWrap);

          card.appendChild(topWrap);

          // Footer
          const footerWrap = document.createElement('div');
          footerWrap.className = 'pt-3 flex items-center justify-between gap-3 border-t border-brand-border';

          const dateMeta = document.createElement('span');
          dateMeta.className = 'text-xs text-brand-textSecondary flex items-center gap-1';
          const calIcon = document.createElement('span');
          calIcon.className = 'material-symbols-outlined text-[14px]';
          calIcon.textContent = 'calendar_today';
          dateMeta.appendChild(calIcon);
          const dateText = document.createElement('span');
          dateText.textContent = ` ${paper.date}`;
          dateMeta.appendChild(dateText);
          footerWrap.appendChild(dateMeta);

          const openBtn = document.createElement('button');
          openBtn.type = 'button';
          openBtn.className = 'min-h-[44px] px-4 py-2 rounded-lg bg-brand-blue hover:bg-brand-navy text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue';

          const btnText = document.createElement('span');
          btnText.textContent = 'View Paper';
          openBtn.appendChild(btnText);

          const arrowIcon = document.createElement('span');
          arrowIcon.className = 'material-symbols-outlined text-[16px]';
          arrowIcon.textContent = 'arrow_forward';
          openBtn.appendChild(arrowIcon);

          openBtn.addEventListener('click', () => openPaperModal(paper, openBtn));
          footerWrap.appendChild(openBtn);

          card.appendChild(footerWrap);
          papersContainer.appendChild(card);
        });
      }

      /* ============================================================
         Modal Logic & Honest Unavailability Details
         ============================================================ */
      let currentActivePaper = null;

      function openPaperModal(paper, triggerBtn) {
        currentActivePaper = paper;

        // Header info
        modalPaperTitle.textContent = paper.title;
        modalExamTierTag.textContent = `${paper.exam} • ${paper.tier} • ${paper.year}`;
        modalShiftTag.textContent = `${paper.shift} (${paper.timeWindow})`;
        modalDateTag.textContent = paper.date;

        // Metrics
        modalMetricQuestions.textContent = `${paper.questionsCount} MCQs`;
        modalMetricTime.textContent = `${paper.durationMins} Mins`;
        modalMetricMarks.textContent = `${paper.maxMarks} Marks`;

        if (paper.negativeMark) {
          modalMetricNegativeContainer.classList.remove('hidden');
          modalMetricNegative.textContent = `-${paper.negativeMark} per wrong`;
        } else {
          modalMetricNegativeContainer.classList.add('hidden');
        }

        modalQidIndicator.textContent = `Reference ID: ${paper.id}`;

        // Section Composition
        modalSectionsBreakdown.replaceChildren();
        paper.sections.forEach(sec => {
          const row = document.createElement('div');
          row.className = 'flex items-center justify-between p-2.5 rounded-lg bg-brand-surface border border-brand-border';

          const nameSpan = document.createElement('span');
          nameSpan.className = 'text-xs text-brand-textPrimary font-medium truncate pr-2';
          nameSpan.textContent = sec.name;
          row.appendChild(nameSpan);

          const badgeWrap = document.createElement('div');
          badgeWrap.className = 'flex items-center gap-2 flex-shrink-0 text-xs';

          const qBadge = document.createElement('span');
          qBadge.className = 'px-2 py-0.5 rounded bg-slate-100 text-brand-textSecondary border border-brand-border';
          qBadge.textContent = `${sec.count} Qs`;
          badgeWrap.appendChild(qBadge);

          const mBadge = document.createElement('span');
          mBadge.className = 'px-2 py-0.5 rounded bg-blue-50 text-brand-blue font-semibold border border-blue-200';
          mBadge.textContent = `${sec.marks} M`;
          badgeWrap.appendChild(mBadge);

          row.appendChild(badgeWrap);
          modalSectionsBreakdown.appendChild(row);
        });

        // Strict readiness logic: buttons are disabled with HTML disabled attribute and guarded
        startExamModeBtn.disabled = true;
        startExamModeBtn.setAttribute('aria-disabled', 'true');
        startPracticeModeBtn.disabled = true;
        startPracticeModeBtn.setAttribute('aria-disabled', 'true');

        OverlayManager.push({
          id: 'paper-modal',
          panel: modalPanel,
          returnElement: triggerBtn,
          closeFn: closePaperModal
        });

        paperModal.classList.remove('hidden');
        requestAnimationFrame(() => {
          modalBackdrop.classList.remove('opacity-0');
          modalPanel.classList.remove('scale-95', 'opacity-0');
          modalPanel.classList.add('scale-100', 'opacity-100');
          modalCloseBtn.focus();
        });
      }

      function closePaperModal() {
        modalBackdrop.classList.add('opacity-0');
        modalPanel.classList.remove('scale-100', 'opacity-100');
        modalPanel.classList.add('scale-95', 'opacity-0');

        const activeEntry = OverlayManager.pop();

        setTimeout(() => {
          paperModal.classList.add('hidden');
          currentActivePaper = null;
          if (activeEntry && activeEntry.returnElement && typeof activeEntry.returnElement.focus === 'function') {
            activeEntry.returnElement.focus();
          }
        }, 200);
      }

      modalCloseBtn.addEventListener('click', closePaperModal);
      modalDismissBtn.addEventListener('click', closePaperModal);
      modalBackdrop.addEventListener('click', closePaperModal);

      // Guarded handlers: strictly cannot start attempt since no canonical questions are connected
      startExamModeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Questions not available yet for this demonstration record.', 'info');
      });

      startPracticeModeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Questions not available yet for this demonstration record.', 'info');
      });

      /* ============================================================
         Mobile More Bottom Sheet Drawer
         ============================================================ */
      function openMoreSheet() {
        openMoreSheetBtn.setAttribute('aria-expanded', 'true');

        OverlayManager.push({
          id: 'more-sheet',
          panel: moreSheetPanel,
          returnElement: openMoreSheetBtn,
          closeFn: closeMoreSheet
        });

        moreSheet.classList.remove('hidden');
        requestAnimationFrame(() => {
          moreSheetBackdrop.classList.remove('opacity-0');
          moreSheetPanel.classList.remove('translate-y-full');
          moreSheetPanel.classList.add('translate-y-0');
          closeMoreSheetBtn.focus();
        });
      }

      function closeMoreSheet() {
        openMoreSheetBtn.setAttribute('aria-expanded', 'false');
        moreSheetBackdrop.classList.add('opacity-0');
        moreSheetPanel.classList.remove('translate-y-0');
        moreSheetPanel.classList.add('translate-y-full');

        const activeEntry = OverlayManager.pop();

        setTimeout(() => {
          moreSheet.classList.add('hidden');
          if (activeEntry && activeEntry.returnElement && typeof activeEntry.returnElement.focus === 'function') {
            activeEntry.returnElement.focus();
          }
        }, 220);
      }

      openMoreSheetBtn.addEventListener('click', openMoreSheet);
      closeMoreSheetBtn.addEventListener('click', closeMoreSheet);
      moreSheetBackdrop.addEventListener('click', closeMoreSheet);

      /* ============================================================
         PYQ Filter Events
         ============================================================ */
      filterTier.addEventListener('change', (event) => {
        activeTier = event.target.value;
        activeYear = 'all';
        selectedSubject = 'all';
        updateYearOptions();
        updateSubjectFilterUI();
        updateAttemptedFilterUI();
        renderPapersList();
      });

      filterYear.addEventListener('change', (event) => {
        activeYear = event.target.value;
        selectedSubject = 'all';
        updateSubjectFilterUI();
        updateAttemptedFilterUI();
        renderPapersList();
      });

      subjectFilter.addEventListener('change', (event) => handleSubjectFilterChange(event.target.value));

      modeTestBtn.addEventListener('click', () => setAssessmentMode('test'));
      modeStudyBtn.addEventListener('click', () => setAssessmentMode('study'));
      typeFullBtn.addEventListener('click', () => setPyqViewType('full'));
      typeSectionalBtn.addEventListener('click', () => setPyqViewType('sectional'));
      attemptedFilterBtn.addEventListener('click', toggleAttemptedFilter);

      function clearPyqFilters() {
        activeTier = 'all';
        activeYear = 'all';
        selectedSubject = 'all';
        attemptedOnly = false;
        updateTierOptions();
        updateYearOptions();
        updateSubjectFilterUI();
        filterYear.value = 'all';
        updateAttemptedFilterUI();
        renderPapersList();
        showToast('Year and attempted filters cleared.', 'restart_alt');
      }

      emptyStateResetBtn.addEventListener('click', clearPyqFilters);

      // Keep PYQs aligned with the global target-exam selector in the shared header.
      window.addEventListener('sscflix:statechange', (event) => {
        const nextExamId = event.detail && event.detail.examId;
        if (!nextExamId) return;
        activeExam = normalizeTargetExam(nextExamId);
        activeTier = 'all';
        activeYear = 'all';
        selectedSubject = 'all';
        attemptedOnly = false;
        updateTierOptions();
        updateYearOptions();
        updateSubjectFilterUI();
        updateAttemptedFilterUI();
        renderPapersList();
      });

      // Initialize filters and controls.
      updateTierOptions();
      updateYearOptions();
      updateAssessmentModeUI();
      updatePyqTypeUI();
      updateAttemptedFilterUI();
      renderPapersList();

      /* ============================================================
         Global Prototype Navigation Intercept
         ============================================================ */
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href="#"], button[data-nav-name]');
        if (!link) return;

        if (link.getAttribute('aria-current') === 'page') {
          e.preventDefault();
          return;
        }

        const navName = link.getAttribute('data-nav-name');
        if (navName) {
          e.preventDefault();
          showToast(`Prototype demonstration — ${navName} screen is not connected in this preview.`, 'info');
          return;
        }

        if (link.getAttribute('href') === '#') {
          e.preventDefault();
        }
      });

      // Initial Bootstrap
      updateTierOptions();
      updateYearOptions();
      updateAssessmentModeUI();
      updatePyqTypeUI();
      updateSubjectFilterUI();
      updateAttemptedFilterUI();
      renderPapersList();
    })();
  
if(typeof normalizeTargetExam==='function')window["normalizeTargetExam"]=normalizeTargetExam;
if(typeof getInitialTargetExam==='function')window["getInitialTargetExam"]=getInitialTargetExam;
if(typeof showToast==='function')window["showToast"]=showToast;
if(typeof hideToast==='function')window["hideToast"]=hideToast;
if(typeof trapFocus==='function')window["trapFocus"]=trapFocus;
if(typeof getAllTierLabel==='function')window["getAllTierLabel"]=getAllTierLabel;
if(typeof updateTierOptions==='function')window["updateTierOptions"]=updateTierOptions;
if(typeof updateYearOptions==='function')window["updateYearOptions"]=updateYearOptions;
if(typeof getStoredAttemptedPyqIds==='function')window["getStoredAttemptedPyqIds"]=getStoredAttemptedPyqIds;
if(typeof getYearFilteredPapers==='function')window["getYearFilteredPapers"]=getYearFilteredPapers;
if(typeof getFilteredRecords==='function')window["getFilteredRecords"]=getFilteredRecords;
if(typeof updateAssessmentModeUI==='function')window["updateAssessmentModeUI"]=updateAssessmentModeUI;
if(typeof setAssessmentMode==='function')window["setAssessmentMode"]=setAssessmentMode;
if(typeof updatePyqTypeUI==='function')window["updatePyqTypeUI"]=updatePyqTypeUI;
if(typeof setPyqViewType==='function')window["setPyqViewType"]=setPyqViewType;
if(typeof updateSubjectFilterUI==='function')window["updateSubjectFilterUI"]=updateSubjectFilterUI;
if(typeof handleSubjectFilterChange==='function')window["handleSubjectFilterChange"]=handleSubjectFilterChange;
if(typeof updateAttemptedFilterUI==='function')window["updateAttemptedFilterUI"]=updateAttemptedFilterUI;
if(typeof toggleAttemptedFilter==='function')window["toggleAttemptedFilter"]=toggleAttemptedFilter;
if(typeof renderPapersList==='function')window["renderPapersList"]=renderPapersList;
if(typeof openPaperModal==='function')window["openPaperModal"]=openPaperModal;
if(typeof closePaperModal==='function')window["closePaperModal"]=closePaperModal;
if(typeof openMoreSheet==='function')window["openMoreSheet"]=openMoreSheet;
if(typeof closeMoreSheet==='function')window["closeMoreSheet"]=closeMoreSheet;
if(typeof clearPyqFilters==='function')window["clearPyqFilters"]=clearPyqFilters;
})();

// pyqs page script 2
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


})();