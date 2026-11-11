// results page script 1
(function(){

  (function() {
    'use strict';

    // 1. Detailed Curated Real Questions
    const curatedQuestionsMap = {
      1: {
        statement: 'Select the option that is related to the third term in the same way as the second term is related to the first term:\nASTRONOMY : STARS :: GEOLOGY : ?',
        options: [
          { key: 'A', text: 'Atmosphere & Weather' },
          { key: 'B', text: 'Earth & Rocks' },
          { key: 'C', text: 'Oceanic Currents' },
          { key: 'D', text: 'Living Organisms' }
        ],
        correctOption: 1, // 'B'
        selectedOption: 1, // Correct
        explanation: "Astronomy is the scientific discipline that systematically examines celestial stars and bodies. Similarly, Geology is the field of science dedicated to the study of the Earth's solid crust, rock formations, and terrestrial structural composition. Hence, Option B is correct."
      },
      2: {
        statement: 'Three of the following four number-pairs are alike in a certain way and one is different. Pick the odd one out:\n(A) 14 - 197\n(B) 16 - 257\n(C) 18 - 323\n(D) 12 - 145',
        options: [
          { key: 'A', text: '14 : 197' },
          { key: 'B', text: '16 : 257' },
          { key: 'C', text: '18 : 323' },
          { key: 'D', text: '12 : 145' }
        ],
        correctOption: 2, // 'C'
        selectedOption: 2, // Correct
        explanation: 'The pattern follows n : (n² + 1).\n14² + 1 = 196 + 1 = 197.\n16² + 1 = 256 + 1 = 257.\n12² + 1 = 144 + 1 = 145.\nFor 18: 18² + 1 = 324 + 1 = 325, whereas 323 is given (18² - 1). Therefore, 18 : 323 is the odd pair.'
      },
      3: {
        statement: 'Statements:\n1. All books are pencils.\n2. Some pencils are sharpeners.\n\nConclusions:\nI. Some sharpeners are books.\nII. No sharpener is a book.',
        options: [
          { key: 'A', text: 'Only conclusion I follows' },
          { key: 'B', text: 'Only conclusion II follows' },
          { key: 'C', text: 'Both I and II follow' },
          { key: 'D', text: 'Either conclusion I or II follows' }
        ],
        correctOption: 3, // 'D'
        selectedOption: 0, // 'A' (INCORRECT)
        explanation: "Conclusions I and II form an exact complementary pair (Particular Affirmative 'Some' + Universal Negative 'No') sharing the identical subject and predicate. Neither conclusion follows independently with certainty from the premises, but both cannot be false simultaneously. Therefore, an 'Either I or II follows' condition holds."
      },
      4: {
        statement: "In a coded language, 'FROST' is written as 'UILHG'. Following the exact same reverse-alphabet substitution scheme, how will 'STAMP' be written in that language?",
        options: [
          { key: 'A', text: 'HGZNK' },
          { key: 'B', text: 'HGYMK' },
          { key: 'C', text: 'GHYML' },
          { key: 'D', text: 'TGZNQ' }
        ],
        correctOption: 0, // 'A'
        selectedOption: null, // UNATTEMPTED
        explanation: "The cipher substitutes every letter with its opposite corresponding letter in the English alphabet (A↔Z, B↔Y, ..., F↔U, R↔I, O↔L, S↔H, T↔G). 'FROST' maps directly to 'UILHG'.\nApplying this to STAMP:\nS ↔ H\nT ↔ G\nA ↔ Z\nM ↔ N\nP ↔ K\nThus, STAMP produces 'HGZNK'."
      },
      26: {
        statement: 'Under which Article of the Constitution of India can the President declare a Financial Emergency?',
        options: [
          { key: 'A', text: 'Article 352' },
          { key: 'B', text: 'Article 360' },
          { key: 'C', text: 'Article 356' },
          { key: 'D', text: 'Article 368' }
        ],
        correctOption: 1, // 'B'
        selectedOption: 1, // Correct
        explanation: 'Article 360 of the Indian Constitution empowers the President to proclaim a Financial Emergency if satisfied that a situation has arisen whereby the financial stability or credit of India or any part of its territory is threatened.'
      },
      27: {
        statement: 'Who among the following historical rulers was the founder of the Kanva dynasty in ancient Magadha?',
        options: [
          { key: 'A', text: 'Vasudeva' },
          { key: 'B', text: 'Susarman' },
          { key: 'C', text: 'Pushyamitra' },
          { key: 'D', text: 'Kanishka' }
        ],
        correctOption: 0, // 'A'
        selectedOption: 2, // 'C' (INCORRECT)
        explanation: 'The Kanva dynasty was founded by Vasudeva in approximately 73 BCE after the overthrow of Devabhuti, the last ruler of the Shunga dynasty. Susarman was the last ruler of the Kanva dynasty.'
      },
      51: {
        statement: 'If x + (1/x) = 5, what is the value of x³ + (1/x³)?',
        options: [
          { key: 'A', text: '110' },
          { key: 'B', text: '125' },
          { key: 'C', text: '140' },
          { key: 'D', text: '115' }
        ],
        correctOption: 0, // 'A'
        selectedOption: 0, // Correct
        explanation: 'Using the standard algebraic identity: x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x).\nSubstituting x + 1/x = 5:\n= (5)³ - 3(5) = 125 - 15 = 110.'
      },
      52: {
        statement: 'A merchant marks an article 40% above its cost price and subsequently allows a trade discount of 25% on the marked price. What is his net profit or loss percentage?',
        options: [
          { key: 'A', text: '8% Profit' },
          { key: 'B', text: '10% Profit' },
          { key: 'C', text: '5% Profit' },
          { key: 'D', text: '4% Loss' }
        ],
        correctOption: 2, // 'C'
        selectedOption: 1, // 'B' (INCORRECT)
        explanation: 'Let CP = 100.\nMarked Price (MP) = 100 + 40 = 140.\nDiscount = 25% of 140 = 35.\nSelling Price (SP) = 140 - 35 = 105.\nProfit = SP - CP = 105 - 100 = 5.\nNet Profit Percentage = 5%.'
      },
      76: {
        statement: 'Select the most appropriate synonym of the given word:\nTACITURN',
        options: [
          { key: 'A', text: 'Loquacious' },
          { key: 'B', text: 'Reticent' },
          { key: 'C', text: 'Gregarious' },
          { key: 'D', text: 'Voluble' }
        ],
        correctOption: 1, // 'B'
        selectedOption: 1, // Correct
        explanation: "'Taciturn' refers to a person who is habitually reserved, silent, or uncommunicative in speech. 'Reticent' is the exact synonymous term. 'Loquacious' and 'Voluble' are antonyms meaning excessively talkative."
      },
      77: {
        statement: "Identify the segment that contains a grammatical error:\nNeither the senior doctor nor the nurses (A) / was present in the trauma ICU (B) / when the acute emergency arrived. (C)",
        options: [
          { key: 'A', text: 'was present in the trauma ICU' },
          { key: 'B', text: 'Neither the senior doctor nor the nurses' },
          { key: 'C', text: 'when the acute emergency arrived' },
          { key: 'D', text: 'No error' }
        ],
        correctOption: 0, // 'A'
        selectedOption: 2, // 'C' (INCORRECT)
        explanation: "In correlative conjunctions 'Neither... nor...', the verb must agree with the nearer subject. Here, the nearer subject is 'the nurses' (plural noun), hence the singular verb 'was present' is grammatically erroneous and must be replaced by 'were present'."
      }
    };

    // 2. Direct Question Definition - No separate ID arrays.
    // Exact requested breakdowns per section:
    // - reasoning: 25 Qs (1..25), 23 correct, 1 incorrect (#3), 1 unattempted (#4)
    // - gk: 25 Qs (26..50), 16 correct, 7 incorrect (#27, 29, 32, 35, 41, 44, 48), 2 unattempted (#30, 50)
    // - quant: 25 Qs (51..75), 17 correct, 5 incorrect (#52, 56, 61, 67, 72), 3 unattempted (#54, 65, 75)
    // - english: 25 Qs (76..100), 18 correct, 4 incorrect (#77, 82, 88, 94), 3 unattempted (#79, 90, 100)
    // Totals: 100 Qs, 74 correct, 17 incorrect, 9 unattempted. Attempted: 91. Accuracy: 81.3%. Score: 139.50/200.00
    const allQuestions = [];
    const defaultOptions = [
      { key: 'A', text: 'Primary analysis proposition' },
      { key: 'B', text: 'Evaluated alternative specification' },
      { key: 'C', text: 'Comparative benchmark variable' },
      { key: 'D', text: 'Calculated outcome factor' }
    ];

    for (let num = 1; num <= 100; num++) {
      let secId = 'reasoning';
      let correctOpt = 1; // default index 1 ('B')
      let selectedOpt = 1; // default index 1 ('B' - correct)

      if (num <= 25) {
        secId = 'reasoning';
        if (num === 3) {
          correctOpt = 3; // 'D'
          selectedOpt = 0; // 'A' (incorrect)
        } else if (num === 4) {
          correctOpt = 0; // 'A'
          selectedOpt = null; // unattempted
        } else {
          correctOpt = 1;
          selectedOpt = 1; // correct
        }
      } else if (num <= 50) {
        secId = 'gk';
        if (num === 27 || num === 29 || num === 32 || num === 35 || num === 41 || num === 44 || num === 48) {
          correctOpt = 1;
          selectedOpt = 2; // incorrect
        } else if (num === 30 || num === 50) {
          correctOpt = 1;
          selectedOpt = null; // unattempted
        } else {
          correctOpt = 1;
          selectedOpt = 1; // correct
        }
      } else if (num <= 75) {
        secId = 'quant';
        if (num === 52 || num === 56 || num === 61 || num === 67 || num === 72) {
          correctOpt = 2;
          selectedOpt = 1; // incorrect
        } else if (num === 54 || num === 65 || num === 75) {
          correctOpt = 0;
          selectedOpt = null; // unattempted
        } else {
          correctOpt = 0;
          selectedOpt = 0; // correct
        }
      } else {
        secId = 'english';
        if (num === 77 || num === 82 || num === 88 || num === 94) {
          correctOpt = 0;
          selectedOpt = 2; // incorrect
        } else if (num === 79 || num === 90 || num === 100) {
          correctOpt = 1;
          selectedOpt = null; // unattempted
        } else {
          correctOpt = 1;
          selectedOpt = 1; // correct
        }
      }

      const curated = curatedQuestionsMap[num];
      if (curated) {
        allQuestions.push({
          id: 'q' + num,
          number: num,
          sectionId: secId,
          statement: curated.statement,
          options: curated.options,
          correctOption: curated.correctOption,
          selectedOption: curated.selectedOption,
          explanation: curated.explanation,
          isPlaceholder: false
        });
      } else {
        allQuestions.push({
          id: 'q' + num,
          number: num,
          sectionId: secId,
          statement: `Question ${num} demonstration simulation problem statement examining syllabus competencies under Tier-1 examination criteria.`,
          options: defaultOptions,
          correctOption: correctOpt,
          selectedOption: selectedOpt,
          explanation: null, // Clean fallback: "Explanation not available."
          isPlaceholder: true
        });
      }
    }

    // 3. Central Result Data Store
    const resultData = {
      metadata: {
        testTitle: 'SSC CGL Full Mock 01',
        subTitle: 'Tier-1 Simulation',
        attemptLabel: 'Demonstration Attempt',
        timeSpentSeconds: 3252,
        totalDurationSeconds: 3600
      },
      markingScheme: {
        correct: 2.0,
        incorrect: -0.5,
        unattempted: 0
      },
      sections: [
        { id: 'reasoning', name: 'General Intelligence & Reasoning', shortName: 'Reasoning' },
        { id: 'gk', name: 'General Awareness', shortName: 'GK' },
        { id: 'quant', name: 'Quantitative Aptitude', shortName: 'Quant' },
        { id: 'english', name: 'English Comprehension', shortName: 'English' }
      ],
      questions: allQuestions
    };

    // Read the latest CBT completion / My Tests selection when navigating between pages.
    let linkedCbtSubmission = null;
    let linkedSelectedAttempt = null;
    try {
      linkedCbtSubmission = JSON.parse(localStorage.getItem('sscflix-last-cbt-submission') || 'null');
      linkedSelectedAttempt = JSON.parse(localStorage.getItem('sscflix-selected-attempt') || 'null');
    } catch (error) {
      linkedCbtSubmission = null;
      linkedSelectedAttempt = null;
    }

    const selectedAttemptTime = linkedSelectedAttempt ? (Date.parse(linkedSelectedAttempt.selectedAt || '') || 0) : 0;
    const submittedAttemptTime = linkedCbtSubmission ? (Date.parse(linkedCbtSubmission.submittedAt || '') || 0) : 0;
    const selectedAttemptIsNewer = Boolean(linkedSelectedAttempt && selectedAttemptTime >= submittedAttemptTime);

    if (selectedAttemptIsNewer && linkedSelectedAttempt && typeof linkedSelectedAttempt === 'object') {
      if (linkedSelectedAttempt.title) resultData.metadata.testTitle = String(linkedSelectedAttempt.title);
      resultData.metadata.attemptLabel = 'Selected from My Tests • Demo data';
    } else if (linkedCbtSubmission && typeof linkedCbtSubmission === 'object') {
      if (linkedCbtSubmission.title) resultData.metadata.testTitle = String(linkedCbtSubmission.title);
      if (linkedCbtSubmission.category) resultData.metadata.subTitle = String(linkedCbtSubmission.category);
      if (Number(linkedCbtSubmission.durationMinutes) > 0) {
        resultData.metadata.totalDurationSeconds = Number(linkedCbtSubmission.durationMinutes) * 60;
      }
      resultData.metadata.attemptLabel = 'Latest CBT Preview';
    }

    // Helper: evaluate question status directly from object
    function getQuestionStatus(q) {
      if (q.selectedOption === null || q.selectedOption === undefined) return 'unattempted';
      if (q.selectedOption === q.correctOption) return 'correct';
      return 'incorrect';
    }

    function formatTime(totalSeconds) {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    }

    // 4. Compute Metrics strictly derived from iterating questions
    function computeMetrics(data) {
      const qList = data.questions;
      let totalCorrect = 0;
      let totalIncorrect = 0;
      let totalUnattempted = 0;

      const secMetricsMap = {};
      data.sections.forEach(s => {
        secMetricsMap[s.id] = {
          section: s,
          total: 0,
          correct: 0,
          incorrect: 0,
          unattempted: 0,
          attempted: 0,
          score: 0,
          maxScore: 0,
          accuracy: 0
        };
      });

      qList.forEach(q => {
        const st = getQuestionStatus(q);
        const sm = secMetricsMap[q.sectionId];
        if (sm) {
          sm.total += 1;
          if (st === 'correct') {
            sm.correct += 1;
            totalCorrect += 1;
          } else if (st === 'incorrect') {
            sm.incorrect += 1;
            totalIncorrect += 1;
          } else {
            sm.unattempted += 1;
            totalUnattempted += 1;
          }
        }
      });

      const secResults = data.sections.map(s => {
        const sm = secMetricsMap[s.id];
        sm.attempted = sm.correct + sm.incorrect;
        sm.maxScore = sm.total * data.markingScheme.correct;
        sm.score = (sm.correct * data.markingScheme.correct) + (sm.incorrect * data.markingScheme.incorrect);
        sm.accuracy = sm.attempted > 0 ? ((sm.correct / sm.attempted) * 100) : 0;
        return sm;
      });

      const totalQuestions = qList.length;
      const totalAttempted = totalCorrect + totalIncorrect;
      const maxPossibleScore = totalQuestions * data.markingScheme.correct;
      const positiveMarks = totalCorrect * data.markingScheme.correct;
      const negativeMarks = Math.abs(totalIncorrect * data.markingScheme.incorrect);
      const netScore = positiveMarks - negativeMarks;
      const overallAccuracy = totalAttempted > 0 ? ((totalCorrect / totalAttempted) * 100) : 0;
      const attemptRate = totalQuestions > 0 ? ((totalAttempted / totalQuestions) * 100) : 0;

      return {
        totalQuestions,
        totalAttempted,
        totalCorrect,
        totalIncorrect,
        totalUnattempted,
        maxPossibleScore,
        positiveMarks,
        negativeMarks,
        netScore,
        overallAccuracy,
        attemptRate,
        secResults
      };
    }

    const calculated = computeMetrics(resultData);

    // 5. Populate Header and KPI Cards
    function renderOverview() {
      document.getElementById('header-breadcrumb-title').textContent = 'Test Result';
      document.getElementById('header-main-title').textContent = 'Test Result';
      document.getElementById('header-test-title').textContent = resultData.metadata.testTitle;
      document.getElementById('header-sub-meta').textContent = `${resultData.metadata.subTitle} (${calculated.totalQuestions} Questions • ${calculated.maxPossibleScore.toFixed(0)} Marks • ${Math.round(resultData.metadata.totalDurationSeconds / 60)} Mins)`;

      const attemptLabel = document.getElementById('header-attempt-label');
      if (attemptLabel) {
        attemptLabel.replaceChildren();
        const flagIcon = document.createElement('span');
        flagIcon.className = 'material-symbols-outlined text-[14px]';
        flagIcon.textContent = 'flag';
        attemptLabel.appendChild(flagIcon);
        attemptLabel.appendChild(document.createTextNode(' ' + resultData.metadata.attemptLabel));
      }

      const linkedNotice = document.getElementById('linked-cbt-summary-notice');
      const linkedTitle = document.getElementById('linked-cbt-summary-title');
      const linkedDetails = document.getElementById('linked-cbt-summary-details');
      if (linkedNotice && selectedAttemptIsNewer && linkedSelectedAttempt) {
        if (linkedTitle) linkedTitle.textContent = linkedSelectedAttempt.title || 'Selected attempt';
        if (linkedDetails) linkedDetails.textContent = 'Opened from My Tests. Attempt-specific answers and evaluation are not connected in this preview.';
        linkedNotice.classList.remove('hidden');
      } else if (linkedNotice && linkedCbtSubmission) {
        if (linkedTitle) linkedTitle.textContent = linkedCbtSubmission.title || 'Latest CBT preview';
        if (linkedDetails) {
          linkedDetails.textContent = `${Number(linkedCbtSubmission.attempted) || 0} of ${Number(linkedCbtSubmission.questions) || 0} questions attempted • ${Number(linkedCbtSubmission.reviewed) || 0} marked for review • ${linkedCbtSubmission.mode === 'study' ? 'Study Mode' : 'Test Mode'}`;
        }
        linkedNotice.classList.remove('hidden');
      }
      
      const signNeg = resultData.markingScheme.incorrect < 0 ? '-' : '+';
      const absNeg = Math.abs(resultData.markingScheme.incorrect).toFixed(2);
      document.getElementById('marking-scheme-text').innerHTML = `
        <strong class="text-blue-700">+${resultData.markingScheme.correct.toFixed(2)}</strong> correct, 
        <strong class="text-rose-600">${signNeg}${absNeg}</strong> incorrect
      `;

      document.getElementById('hero-score-val').textContent = calculated.netScore.toFixed(2);
      document.getElementById('hero-max-score-val').textContent = `/ ${calculated.maxPossibleScore.toFixed(2)}`;
      document.getElementById('hero-pos-val').textContent = `+${calculated.positiveMarks.toFixed(2)}`;
      document.getElementById('hero-neg-val').textContent = `-${calculated.negativeMarks.toFixed(2)}`;
      document.getElementById('hero-time-val').textContent = formatTime(resultData.metadata.timeSpentSeconds);
      document.getElementById('hero-total-time-val').textContent = formatTime(resultData.metadata.totalDurationSeconds);
      document.getElementById('hero-attempt-rate').textContent = `${calculated.attemptRate.toFixed(1)}%`;

      document.getElementById('kpi-accuracy').textContent = `${calculated.overallAccuracy.toFixed(1)}%`;
      document.getElementById('kpi-acc-sub').textContent = `${calculated.totalCorrect} / ${calculated.totalAttempted} Attempted`;
      document.getElementById('kpi-attempted').innerHTML = `${calculated.totalAttempted}<span class="text-sm font-normal text-slate-500">/${calculated.totalQuestions}</span>`;
      document.getElementById('kpi-attempted-sub').textContent = `${calculated.totalAttempted} Questions`;
      document.getElementById('kpi-correct').textContent = calculated.totalCorrect;
      document.getElementById('kpi-correct-sub').textContent = `+${calculated.positiveMarks.toFixed(2)} Marks`;
      document.getElementById('kpi-incorrect').textContent = calculated.totalIncorrect;
      document.getElementById('kpi-incorrect-sub').textContent = `-${calculated.negativeMarks.toFixed(2)} Marks`;
      document.getElementById('kpi-unattempted').textContent = `${calculated.totalUnattempted} Questions`;

      document.getElementById('sec-breakdown-meta').textContent = `${resultData.sections.length} Sections • ${calculated.totalQuestions} Total Questions`;

      document.getElementById('count-pill-all').textContent = calculated.totalQuestions;
      document.getElementById('count-pill-correct').textContent = calculated.totalCorrect;
      document.getElementById('count-pill-incorrect').textContent = calculated.totalIncorrect;
      document.getElementById('count-pill-unattempted').textContent = calculated.totalUnattempted;
    }

    // 6. Section Breakdown Table & Cards
    function renderSectionBreakdown() {
      const tbody = document.getElementById('section-table-body');
      const tfoot = document.getElementById('section-table-foot');
      const cardsContainer = document.getElementById('section-mobile-cards');
      tbody.innerHTML = '';
      cardsContainer.innerHTML = '';

      calculated.secResults.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition-colors';
        tr.innerHTML = `
          <td class="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-700 flex-shrink-0"></span>
            <span>${item.section.name}</span>
          </td>
          <td class="py-3 px-4 text-center font-mono text-slate-700">${item.attempted} / ${item.total}</td>
          <td class="py-3 px-4 text-center font-mono text-emerald-700 font-semibold">${item.correct}</td>
          <td class="py-3 px-4 text-center font-mono text-rose-700 font-semibold">${item.incorrect}</td>
          <td class="py-3 px-4 text-center font-mono text-slate-500">${item.unattempted}</td>
          <td class="py-3 px-4 text-right font-mono font-bold text-blue-700">${item.score.toFixed(2)} <span class="text-slate-400 font-normal">/ ${item.maxScore.toFixed(0)}</span></td>
          <td class="py-3 px-4 text-right font-mono font-semibold ${item.accuracy >= 75 ? 'text-emerald-700' : 'text-amber-700'}">${item.accuracy.toFixed(1)}%</td>
          <td class="py-3 px-4 text-center">
            <button type="button" onclick="window.filterBySection('${item.section.id}')" class="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline min-h-[44px] px-2 py-1 inline-flex items-center">
              Review (${item.total})
            </button>
          </td>
        `;
        tbody.appendChild(tr);

        const card = document.createElement('div');
        card.className = 'p-3.5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-between gap-2.5';
        card.innerHTML = `
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-xs text-slate-900 truncate">${item.section.name}</span>
            <span class="font-mono font-bold text-blue-700 text-xs flex-shrink-0">${item.score.toFixed(2)} / ${item.maxScore.toFixed(0)}</span>
          </div>
          <div class="grid grid-cols-4 gap-1 text-center font-mono text-xs py-2 bg-slate-50 rounded border border-slate-100">
            <div><span class="block text-[10px] text-slate-400 uppercase font-sans">Att</span>${item.attempted}</div>
            <div><span class="block text-[10px] text-emerald-700 uppercase font-sans font-semibold">Cor</span>${item.correct}</div>
            <div><span class="block text-[10px] text-rose-700 uppercase font-sans font-semibold">Inc</span>${item.incorrect}</div>
            <div><span class="block text-[10px] text-amber-700 uppercase font-sans font-semibold">Left</span>${item.unattempted}</div>
          </div>
          <div class="flex items-center justify-between text-xs text-slate-600 px-0.5">
            <span>Accuracy: <strong class="${item.accuracy >= 75 ? 'text-emerald-700' : 'text-amber-700'}">${item.accuracy.toFixed(1)}%</strong></span>
            <span>Total Qs: <strong>${item.total}</strong></span>
          </div>
          <button type="button" onclick="window.filterBySection('${item.section.id}')" class="w-full py-2 px-3 text-center text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors min-h-[44px] flex items-center justify-center gap-1">
            <span>Review ${item.section.shortName} Questions</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        `;
        cardsContainer.appendChild(card);
      });

      tfoot.innerHTML = `
        <tr>
          <td class="py-3 px-4 font-bold text-slate-900">Aggregated Total</td>
          <td class="py-3 px-4 text-center font-mono font-bold text-slate-900">${calculated.totalAttempted} / ${calculated.totalQuestions}</td>
          <td class="py-3 px-4 text-center font-mono text-emerald-700 font-bold">${calculated.totalCorrect}</td>
          <td class="py-3 px-4 text-center font-mono text-rose-700 font-bold">${calculated.totalIncorrect}</td>
          <td class="py-3 px-4 text-center font-mono text-slate-500 font-bold">${calculated.totalUnattempted}</td>
          <td class="py-3 px-4 text-right font-mono font-bold text-blue-700 text-sm">${calculated.netScore.toFixed(2)} <span class="text-slate-500 text-xs font-normal">/ ${calculated.maxPossibleScore.toFixed(0)}</span></td>
          <td class="py-3 px-4 text-right font-mono font-bold text-emerald-700">${calculated.overallAccuracy.toFixed(1)}%</td>
          <td class="py-3 px-4 text-center text-xs text-slate-400 font-normal">Complete</td>
        </tr>
      `;
    }

    // 7. Section Filter Tabs with min-h-[44px] comfortable touch target
    function renderSectionTabs() {
      const container = document.getElementById('section-tabs-container');
      container.innerHTML = `
        <button aria-selected="true" class="sec-tab px-3.5 py-2 rounded-md text-xs font-semibold bg-white text-blue-700 shadow-sm min-h-[44px] inline-flex items-center justify-center transition-all" data-sec="all" onclick="window.filterBySection('all')" role="tab" type="button">
          All Sections
        </button>
      `;

      resultData.sections.forEach(sec => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.role = 'tab';
        btn.setAttribute('aria-selected', 'false');
        btn.className = 'sec-tab px-3.5 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center justify-center transition-all';
        btn.setAttribute('data-sec', sec.id);
        btn.textContent = sec.shortName;
        btn.onclick = () => window.filterBySection(sec.id);
        container.appendChild(btn);
      });
    }

    // 8. Review Workbench Interactive Controller
    let currentStatusFilter = 'all';
    let currentSectionFilter = 'all';
    let filteredQuestions = [...resultData.questions];
    let selectedQuestionId = 'q1';

    const desktopPalette = document.getElementById('desktop-palette-list');
    const mobileRibbon = document.getElementById('mobile-question-ribbon');
    const paletteCountSummary = document.getElementById('palette-count-summary');
    const inspectorContent = document.getElementById('inspector-content');
    const inspectorEmptyState = document.getElementById('inspector-empty-state');
    const inspectorSectionBadge = document.getElementById('inspector-section-badge');
    const inspectorQnumTitle = document.getElementById('inspector-qnum-title');
    const inspectorPlaceholderBadge = document.getElementById('inspector-placeholder-badge');
    const inspectorScoreBadge = document.getElementById('inspector-score-badge');
    const inspectorStatement = document.getElementById('inspector-statement');
    const inspectorOptions = document.getElementById('inspector-options');
    const inspectorSolutionTitle = document.getElementById('inspector-solution-title');
    const inspectorExplanation = document.getElementById('inspector-explanation');
    const inspectorFooterCounter = document.getElementById('inspector-footer-counter');
    const btnPrev = document.getElementById('btn-prev-q');
    const btnNext = document.getElementById('btn-next-q');
    const btnJump = document.getElementById('btn-scroll-review');

    if (btnJump) {
      btnJump.addEventListener('click', () => {
        const target = document.getElementById('answer-review');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    function applyFilters() {
      filteredQuestions = resultData.questions.filter(q => {
        const st = getQuestionStatus(q);
        const matchStatus = (currentStatusFilter === 'all') || (st === currentStatusFilter);
        const matchSec = (currentSectionFilter === 'all') || (q.sectionId === currentSectionFilter);
        return matchStatus && matchSec;
      });

      paletteCountSummary.textContent = `Showing ${filteredQuestions.length} Qs`;

      if (filteredQuestions.length === 0) {
        // Clear selected question in empty filter state
        selectedQuestionId = null;
      } else {
        const exists = filteredQuestions.some(q => q.id === selectedQuestionId);
        if (!exists) {
          selectedQuestionId = filteredQuestions[0].id;
        }
      }

      renderPalette();
      renderInspector();
    }

    function renderPalette() {
      const prevScroll = desktopPalette.scrollTop;
      desktopPalette.innerHTML = '';
      mobileRibbon.innerHTML = '';

      if (filteredQuestions.length === 0) {
        desktopPalette.innerHTML = '<div class="p-4 text-center text-xs text-slate-500 font-medium">No matching questions</div>';
        mobileRibbon.innerHTML = '<div class="p-3 text-center text-xs text-slate-500 font-medium w-full">No matching questions</div>';
        return;
      }

      filteredQuestions.forEach(q => {
        const status = getQuestionStatus(q);
        const isSelected = (q.id === selectedQuestionId);
        const secMeta = resultData.sections.find(s => s.id === q.sectionId);
        const secShort = secMeta ? secMeta.shortName : q.sectionId;

        let badgeClasses = 'text-emerald-700 bg-emerald-50 border-emerald-200';
        let badgeIcon = 'check';
        let badgeText = 'Correct';
        let mobileColor = 'bg-emerald-600 text-white';

        if (status === 'incorrect') {
          badgeClasses = 'text-rose-700 bg-rose-50 border-rose-200';
          badgeIcon = 'close';
          badgeText = 'Incorrect';
          mobileColor = 'bg-rose-600 text-white';
        } else if (status === 'unattempted') {
          badgeClasses = 'text-amber-800 bg-amber-50 border-amber-200';
          badgeIcon = 'remove';
          badgeText = 'Left';
          mobileColor = 'bg-amber-500 text-white';
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('data-question-id', q.id);
        btn.className = `w-full text-left p-2 rounded-lg flex items-center justify-between text-xs transition-colors min-h-[44px] ${
          isSelected ? 'bg-blue-50 border border-blue-400 font-semibold' : 'hover:bg-slate-200/60 border border-transparent'
        }`;
        btn.innerHTML = `
          <div class="flex items-center gap-1.5 truncate">
            <span class="font-mono font-bold w-8 text-right text-slate-800">Q${q.number}</span>
            <span class="text-[11px] text-slate-500 truncate">[${secShort}]</span>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[11px] font-medium border flex items-center gap-0.5 ${badgeClasses}">
            <span class="material-symbols-outlined text-[13px]">${badgeIcon}</span>
            <span>${badgeText}</span>
          </span>
        `;
        btn.onclick = () => {
          selectedQuestionId = q.id;
          renderPalette();
          renderInspector();
        };
        desktopPalette.appendChild(btn);

        const mobBtn = document.createElement('button');
        mobBtn.type = 'button';
        mobBtn.setAttribute('data-question-id', q.id);
        const ringClass = isSelected ? 'ring-2 ring-blue-700 ring-offset-2 scale-105 font-bold shadow-md' : 'opacity-85';
        mobBtn.className = `flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center font-mono text-xs transition-transform min-h-[44px] min-w-[44px] ${mobileColor} ${ringClass}`;
        mobBtn.textContent = q.number;
        mobBtn.onclick = () => {
          selectedQuestionId = q.id;
          renderPalette();
          renderInspector();
        };
        mobileRibbon.appendChild(mobBtn);
      });

      desktopPalette.scrollTop = prevScroll;
      scrollActiveRibbonItemIntoView();
    }

    function scrollActiveRibbonItemIntoView() {
      if (!selectedQuestionId) return;
      setTimeout(() => {
        const activeMobBtn = mobileRibbon.querySelector(`[data-question-id="${selectedQuestionId}"]`);
        if (activeMobBtn) {
          activeMobBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 50);
    }

    function renderInspector() {
      const q = filteredQuestions.find(item => item.id === selectedQuestionId);

      // Empty State Handling
      if (!q || filteredQuestions.length === 0) {
        inspectorContent.classList.add('hidden');
        inspectorEmptyState.classList.remove('hidden');
        inspectorEmptyState.classList.add('flex');
        inspectorFooterCounter.textContent = '0 of 0';
        btnPrev.disabled = true;
        btnNext.disabled = true;
        btnPrev.style.opacity = '0.4';
        btnNext.style.opacity = '0.4';
        return;
      }

      inspectorContent.classList.remove('hidden');
      inspectorEmptyState.classList.add('hidden');
      inspectorEmptyState.classList.remove('flex');

      const secMeta = resultData.sections.find(s => s.id === q.sectionId);
      const currentIndex = filteredQuestions.findIndex(item => item.id === selectedQuestionId);
      const qStatus = getQuestionStatus(q);

      inspectorSectionBadge.textContent = secMeta ? secMeta.name : q.sectionId;
      inspectorQnumTitle.textContent = `Question ${q.number} of ${resultData.questions.length}`;

      // Placeholder badge wording: exactly "Demonstration Placeholder • Sample Content Only"
      if (q.isPlaceholder) {
        inspectorPlaceholderBadge.textContent = 'Demonstration Placeholder • Sample Content Only';
        inspectorPlaceholderBadge.classList.remove('hidden');
      } else {
        inspectorPlaceholderBadge.classList.add('hidden');
      }

      // Score status badge
      if (qStatus === 'correct') {
        inspectorScoreBadge.innerHTML = `
          <span class="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-emerald-700">check_circle</span>
            Correct (+${resultData.markingScheme.correct.toFixed(2)} Marks)
          </span>
        `;
      } else if (qStatus === 'incorrect') {
        const neg = Math.abs(resultData.markingScheme.incorrect).toFixed(2);
        inspectorScoreBadge.innerHTML = `
          <span class="px-2.5 py-1 rounded text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-300 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-rose-700">cancel</span>
            Incorrect (-${neg} Marks)
          </span>
        `;
      } else {
        inspectorScoreBadge.innerHTML = `
          <span class="px-2.5 py-1 rounded text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-amber-700">remove_circle</span>
            Unattempted (0.00 Marks)
          </span>
        `;
      }

      inspectorStatement.textContent = q.statement;

      // Options Stack
      inspectorOptions.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const isStudentChoice = (q.selectedOption === idx || q.selectedOption === opt.key);
        const isCorrectChoice = (q.correctOption === idx || q.correctOption === opt.key);

        let boxStyle = 'p-3 rounded-lg border border-slate-200 bg-white transition-colors';
        let badgeHtml = '';
        let keyBadgeClass = 'bg-slate-100 text-slate-700';

        if (isCorrectChoice) {
          boxStyle = 'p-3 rounded-lg border-2 border-emerald-600 bg-emerald-50/50 text-slate-900';
          keyBadgeClass = 'bg-emerald-600 text-white font-bold';
          badgeHtml = '<span class="text-xs font-bold text-emerald-800 flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">check</span> Correct Option</span>';
        }

        if (isStudentChoice && !isCorrectChoice) {
          boxStyle = 'p-3 rounded-lg border-2 border-rose-600 bg-rose-50/50 text-slate-900';
          keyBadgeClass = 'bg-rose-600 text-white font-bold';
          badgeHtml = '<span class="text-xs font-bold text-rose-700 flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">close</span> Your Answer</span>';
        } else if (isStudentChoice && isCorrectChoice) {
          badgeHtml += '<span class="ml-2 text-xs font-bold text-emerald-800">(Your Answer)</span>';
        }

        const div = document.createElement('div');
        div.className = boxStyle;
        div.innerHTML = `
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-7 h-7 rounded flex items-center justify-center text-xs font-mono ${keyBadgeClass} flex-shrink-0 font-bold">${opt.key}</div>
              <span class="text-xs font-medium text-slate-800 leading-snug">${opt.text}</span>
            </div>
            <div class="flex items-center flex-shrink-0">${badgeHtml}</div>
          </div>
        `;
        inspectorOptions.appendChild(div);
      });

      if (qStatus === 'unattempted') {
        const unattemptedNotice = document.createElement('div');
        unattemptedNotice.className = 'p-2.5 rounded-lg bg-amber-50 text-amber-800 text-xs font-medium flex items-center gap-1.5 border border-amber-200';
        unattemptedNotice.innerHTML = '<span class="material-symbols-outlined text-[16px] text-amber-600">info</span> You did not attempt this question during the examination.';
        inspectorOptions.appendChild(unattemptedNotice);
      }

      // Academic Solution Fallback
      if (q.explanation && q.explanation.trim().length > 0) {
        inspectorSolutionTitle.innerHTML = '<span class="material-symbols-outlined text-[18px]">lightbulb</span><h4>Detailed Academic Solution</h4>';
        inspectorExplanation.textContent = q.explanation;
        inspectorExplanation.className = 'text-xs text-slate-600 leading-relaxed whitespace-pre-line';
      } else {
        inspectorSolutionTitle.innerHTML = '<span class="material-symbols-outlined text-[18px] text-slate-400">info</span><h4 class="text-slate-500">Solution Notes</h4>';
        inspectorExplanation.innerHTML = '<span class="text-slate-400 italic">Explanation not available.</span>';
      }

      // Footer Navigation buttons
      inspectorFooterCounter.textContent = `${currentIndex + 1} of ${filteredQuestions.length}`;
      btnPrev.disabled = currentIndex <= 0;
      btnNext.disabled = currentIndex >= filteredQuestions.length - 1;
      btnPrev.style.opacity = currentIndex <= 0 ? '0.4' : '1';
      btnNext.style.opacity = currentIndex >= filteredQuestions.length - 1 ? '0.4' : '1';
    }

    // Previous / Next button listeners
    btnPrev.addEventListener('click', () => {
      const idx = filteredQuestions.findIndex(item => item.id === selectedQuestionId);
      if (idx > 0) {
        selectedQuestionId = filteredQuestions[idx - 1].id;
        renderPalette();
        renderInspector();
      }
    });

    btnNext.addEventListener('click', () => {
      const idx = filteredQuestions.findIndex(item => item.id === selectedQuestionId);
      if (idx < filteredQuestions.length - 1) {
        selectedQuestionId = filteredQuestions[idx + 1].id;
        renderPalette();
        renderInspector();
      }
    });

    // Public Filter Handlers with 44px touch targets
    window.filterByStatus = function(status) {
      currentStatusFilter = status;
      document.querySelectorAll('.status-pill').forEach(el => {
        const isActive = (el.getAttribute('data-status') === status);
        el.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (isActive) {
          el.className = 'status-pill px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-700 text-white min-h-[44px] inline-flex items-center justify-center transition-colors';
        } else {
          el.className = 'status-pill px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 min-h-[44px] inline-flex items-center justify-center transition-colors flex items-center gap-1.5';
        }
      });
      applyFilters();
    };

    window.filterBySection = function(secId) {
      currentSectionFilter = secId;
      document.querySelectorAll('.sec-tab').forEach(el => {
        const isActive = (el.getAttribute('data-sec') === secId);
        el.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive) {
          el.className = 'sec-tab px-3.5 py-2 rounded-md text-xs font-semibold bg-white text-blue-700 shadow-sm min-h-[44px] inline-flex items-center justify-center transition-all';
        } else {
          el.className = 'sec-tab px-3.5 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 min-h-[44px] inline-flex items-center justify-center transition-all';
        }
      });
      applyFilters();
      const reviewEl = document.getElementById('answer-review');
      if (reviewEl) reviewEl.scrollIntoView({ behavior: 'smooth' });
    };

    // 9. Mobile Bottom Navigation "More" Sheet Controller
    const mobileMoreBtn = document.getElementById('mobileMoreBtn');
    const mobileMoreModal = document.getElementById('mobileMoreModal');
    const mobileMoreBackdrop = document.getElementById('mobileMoreBackdrop');
    const closeMobileMoreBtn = document.getElementById('closeMobileMoreBtn');

    function openMobileMore() {
      if (!mobileMoreModal) return;
      mobileMoreModal.classList.remove('hidden');
      mobileMoreModal.setAttribute('aria-hidden', 'false');
      mobileMoreBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
      if (closeMobileMoreBtn) closeMobileMoreBtn.focus();
    }

    function closeMobileMore() {
      if (!mobileMoreModal) return;
      mobileMoreModal.classList.add('hidden');
      mobileMoreModal.setAttribute('aria-hidden', 'true');
      mobileMoreBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
      if (mobileMoreBtn) mobileMoreBtn.focus();
    }

    if (mobileMoreBtn) mobileMoreBtn.addEventListener('click', openMobileMore);
    if (closeMobileMoreBtn) closeMobileMoreBtn.addEventListener('click', closeMobileMore);
    if (mobileMoreBackdrop) mobileMoreBackdrop.addEventListener('click', closeMobileMore);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMoreModal && !mobileMoreModal.classList.contains('hidden')) {
        closeMobileMore();
      }
    });

    // Initial render
    renderOverview();
    renderSectionBreakdown();
    renderSectionTabs();
    applyFilters();

  })();
  
if(typeof getQuestionStatus==='function')window["getQuestionStatus"]=getQuestionStatus;
if(typeof formatTime==='function')window["formatTime"]=formatTime;
if(typeof computeMetrics==='function')window["computeMetrics"]=computeMetrics;
if(typeof renderOverview==='function')window["renderOverview"]=renderOverview;
if(typeof renderSectionBreakdown==='function')window["renderSectionBreakdown"]=renderSectionBreakdown;
if(typeof renderSectionTabs==='function')window["renderSectionTabs"]=renderSectionTabs;
if(typeof applyFilters==='function')window["applyFilters"]=applyFilters;
if(typeof renderPalette==='function')window["renderPalette"]=renderPalette;
if(typeof scrollActiveRibbonItemIntoView==='function')window["scrollActiveRibbonItemIntoView"]=scrollActiveRibbonItemIntoView;
if(typeof renderInspector==='function')window["renderInspector"]=renderInspector;
if(typeof openMobileMore==='function')window["openMobileMore"]=openMobileMore;
if(typeof closeMobileMore==='function')window["closeMobileMore"]=closeMobileMore;
})();

// results page script 2
(function(){
(function(){if(window.__sscFlixUnavailableNavigationBound)return;window.__sscFlixUnavailableNavigationBound=true;document.addEventListener('click',function(event){const link=event.target.closest('a[data-unavailable-route="leaderboard"]');if(!link)return;event.preventDefault();let notice=document.getElementById('sscflix-route-notice');if(!notice){notice=document.createElement('div');notice.id='sscflix-route-notice';notice.setAttribute('role','status');notice.className='fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-2rem)] rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-xl';document.body.appendChild(notice);}notice.textContent='Leaderboard is not available in this page set yet.';notice.classList.remove('hidden');window.clearTimeout(notice._hideTimer);notice._hideTimer=window.setTimeout(function(){notice.classList.add('hidden');},2600);});})();

})();