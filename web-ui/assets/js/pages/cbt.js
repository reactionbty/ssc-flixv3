// cbt page script 1
(function(){

    /**
     * CONFIGURABLE CBT TEST SPECIFICATION
     * Dynamic configuration strictly obeyed by initialization and UI bindings.
     */
    const testConfig = {
      testId: "SSC-CGL-FL-01",
      title: "SSC CGL Full Mock 01",
      category: "Tier-1 Simulation • 200 Marks",
      preferredLanguage: "en",
      supportedLanguages: ["en", "hi"],
      durationMinutes: 60,
      markingScheme: { positive: 2.0, negative: 0.5 },
      sections: [
        {
          id: "reasoning",
          name: "General Intelligence & Reasoning",
          shortName: "Reasoning",
          questionsCount: 25,
          questions: [
            {
              id: "q-reasoning-1",
              localNum: 1,
              en: {
                text: "Select the option that is related to the third term in the same way as the second term is related to the first term:\n\nASTRONOMY : STARS :: GEOLOGY : ?",
                options: [
                  "A. Oceans",
                  "B. Rocks and Earth",
                  "C. Atmosphere",
                  "D. Plants"
                ]
              },
              hi: {
                text: "उस विकल्प का चयन करें जो तीसरे पद से उसी प्रकार संबंधित है जैसे दूसरा पद पहले पद से संबंधित है:\n\nखगोल विज्ञान : तारे :: भूविज्ञान : ?",
                options: [
                  "A. महासागर",
                  "B. चट्टानें और पृथ्वी",
                  "C. वायुमंडल",
                  "D. पौधे"
                ]
              },
              correctAnswer: 1
            },
            {
              id: "q-reasoning-2",
              localNum: 2,
              en: {
                text: "In a certain code language, 'ROBUST' is written as 'QNATRS'. How will 'ZODIAC' be written in that code language?",
                options: [
                  "A. YNCHZB",
                  "B. YMCHZB",
                  "C. WNCHZB",
                  "D. YNCHZA"
                ]
              },
              hi: {
                text: "एक निश्चित कूट भाषा में, 'ROBUST' को 'QNATRS' लिखा जाता है। उसी भाषा में 'ZODIAC' को कैसे लिखा जाएगा?",
                options: [
                  "A. YNCHZB",
                  "B. YMCHZB",
                  "C. WNCHZB",
                  "D. YNCHZA"
                ]
              },
              correctAnswer: 0
            },
            {
              id: "q-reasoning-3",
              localNum: 3,
              en: {
                text: "Select the figure that will replace the question mark (?) in the following series based on 90° clockwise rotational symmetry:\n\nSeries: ▲ ▶ ▼ ◀ ?",
                options: [
                  "A. ▲",
                  "B. ▶",
                  "C. ▼",
                  "D. ◀"
                ]
              },
              hi: {
                text: "90° दक्षिणावर्त (क्लॉकवाइज़) घूर्णन समरूपता के आधार पर निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) के स्थान पर कौन सी आकृति आएगी?\n\nश्रृंखला: ▲ ▶ ▼ ◀ ?",
                options: [
                  "A. ▲",
                  "B. ▶",
                  "C. ▼",
                  "D. ◀"
                ]
              },
              correctAnswer: 0
            },
            {
              id: "q-reasoning-4",
              localNum: 4,
              en: {
                text: "Statements: \n1. All books are pens. \n2. Some pens are pencils. \nConclusions: \nI. Some books are pencils. \nII. No book is a pencil.",
                options: [
                  "A. Only conclusion I follows",
                  "B. Only conclusion II follows",
                  "C. Either conclusion I or II follows",
                  "D. Neither conclusion follows"
                ]
              },
              hi: {
                text: "कथन: \n1. सभी पुस्तकें कलम हैं। \n2. कुछ कलम पेंसिल हैं। \nनिष्कर्ष: \nI. कुछ पुस्तकें पेंसिल हैं। \nII. कोई पुस्तक पेंसिल नहीं है।",
                options: [
                  "A. केवल निष्कर्ष I अनुसरण करता है",
                  "B. केवल निष्कर्ष II अनुसरण करता है",
                  "C. या तो निष्कर्ष I या II अनुसरण करता है",
                  "D. कोई भी निष्कर्ष अनुसरण नहीं करता"
                ]
              },
              correctAnswer: 2
            },
            {
              id: "q-reasoning-5",
              localNum: 5,
              en: {
                text: "Pointing to a photograph, a woman says, 'He is the son of the only brother of my mother.' How is the person in the photograph related to the woman?",
                options: [
                  "A. Nephew",
                  "B. Brother",
                  "C. Maternal Cousin",
                  "D. Uncle"
                ]
              },
              hi: {
                text: "एक तस्वीर की ओर इशारा करते हुए एक महिला कहती है, 'वह मेरी माँ के एकमात्र भाई का बेटा है।' तस्वीर में दिख रहे व्यक्ति का महिला से क्या संबंध है?",
                options: [
                  "A. भतीजा / भांजा",
                  "B. भाई",
                  "C. ममेरा भाई",
                  "D. मामा"
                ]
              },
              correctAnswer: 2
            }
          ]
        },
        {
          id: "gk",
          name: "General Awareness",
          shortName: "General Awareness",
          questionsCount: 25,
          questions: [
            {
              id: "q-gk-1",
              localNum: 1,
              en: {
                text: "Which of the following celestial bodies in our solar system has the highest mean density?",
                options: [
                  "A. Earth (5.51 g/cm³)",
                  "B. Jupiter (1.33 g/cm³)",
                  "C. Mercury (5.43 g/cm³)",
                  "D. Saturn (0.69 g/cm³)"
                ]
              },
              hi: {
                text: "हमारे सौरमंडल में निम्नलिखित में से किस खगोलीय पिंड का औसत घनत्व सबसे अधिक है?",
                options: [
                  "A. पृथ्वी (5.51 ग्राम/सेमी³)",
                  "B. बृहस्पति (1.33 ग्राम/सेमी³)",
                  "C. बुध (5.43 ग्राम/सेमी³)",
                  "D. शनि (0.69 ग्राम/सेमी³)"
                ]
              },
              correctAnswer: 0
            },
            {
              id: "q-gk-2",
              localNum: 2,
              en: {
                text: "Which constitutional amendment introduced the Goods and Services Tax (GST) in India?",
                options: [
                  "A. 100th Amendment Act",
                  "B. 101st Amendment Act",
                  "C. 102nd Amendment Act",
                  "D. 103rd Amendment Act"
                ]
              },
              hi: {
                text: "किस संविधान संशोधन द्वारा भारत में वस्तु एवं सेवा कर (GST) लागू किया गया?",
                options: [
                  "A. 100वां संशोधन अधिनियम",
                  "B. 101वां संशोधन अधिनियम",
                  "C. 102वां संशोधन अधिनियम",
                  "D. 103वां संशोधन अधिनियम"
                ]
              },
              correctAnswer: 1
            },
            {
              id: "q-gk-3",
              localNum: 3,
              en: {
                text: "The famous battle of Tukaroi (1575) was fought between the Mughal Empire and which Sultanate?",
                options: [
                  "A. Bengal Sultanate",
                  "B. Bijapur Sultanate",
                  "C. Golconda Sultanate",
                  "D. Gujarat Sultanate"
                ]
              },
              hi: {
                text: "तुकारोई का प्रसिद्ध युद्ध (1575) मुग़ल साम्राज्य और किस सल्तनत के बीच लड़ा गया था?",
                options: [
                  "A. बंगाल सल्तनत",
                  "B. बीजापुर सल्तनत",
                  "C. गोलकुंडा सल्तनत",
                  "D. गुजरात सल्तनत"
                ]
              },
              correctAnswer: 0
            }
          ]
        },
        {
          id: "quant",
          name: "Quantitative Aptitude",
          shortName: "Quantitative",
          questionsCount: 25,
          questions: [
            {
              id: "q-quant-1",
              localNum: 1,
              en: {
                text: "If a sum of money compounded annually triples itself in 4 years, in how many years will it become 27 times itself at the same rate?",
                options: [
                  "A. 8 years",
                  "B. 12 years",
                  "C. 16 years",
                  "D. 15 years"
                ]
              },
              hi: {
                text: "यदि कोई धनराशि वार्षिक चक्रवृद्धि ब्याज पर 4 वर्षों में 3 गुनी हो जाती है, तो उसी दर से वह कितने वर्षों में 27 गुनी हो जाएगी?",
                options: [
                  "A. 8 वर्ष",
                  "B. 12 वर्ष",
                  "C. 16 वर्ष",
                  "D. 15 वर्ष"
                ]
              },
              correctAnswer: 1
            },
            {
              id: "q-quant-2",
              localNum: 2,
              en: {
                text: "A shopkeeper allows a 20% discount on the marked price and still earns a profit of 12%. If the marked price is ₹840, find the cost price of the article.",
                options: [
                  "A. ₹580",
                  "B. ₹600",
                  "C. ₹620",
                  "D. ₹640"
                ]
              },
              hi: {
                text: "एक दुकानदार अंकित मूल्य पर 20% की छूट देता है और फिर भी 12% का लाभ अर्जित करता है। यदि अंकित मूल्य ₹840 है, तो वस्तु का क्रय मूल्य ज्ञात कीजिए।",
                options: [
                  "A. ₹580",
                  "B. ₹600",
                  "C. ₹620",
                  "D. ₹640"
                ]
              },
              correctAnswer: 1
            }
          ]
        },
        {
          id: "english",
          name: "English Comprehension",
          shortName: "English",
          questionsCount: 25,
          questions: [
            {
              id: "q-english-1",
              localNum: 1,
              en: {
                text: "Select the most appropriate synonym of the given word:\n\nMETICULOUS",
                options: [
                  "A. Careless",
                  "B. Fastidious",
                  "C. Hasty",
                  "D. Indifferent"
                ]
              },
              hi: {
                text: "दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें:\n\nMETICULOUS (अतिसावधान / सूक्ष्मदर्शी)",
                options: [
                  "A. Careless (लापरवाह)",
                  "B. Fastidious (बारीकी पसंद)",
                  "C. Hasty (जल्दबाज़)",
                  "D. Indifferent (उदासीन)"
                ]
              },
              correctAnswer: 1
            },
            {
              id: "q-english-2",
              localNum: 2,
              en: {
                text: "Select the sentence with no spelling errors in the highlighted vocabulary:",
                options: [
                  "A. The committee reached a consensus on the privilege.",
                  "B. The commitee reached a concensus on the privelege.",
                  "C. The commite reached a concensus on the privilege.",
                  "D. The committee reached a concensus on the priveledge."
                ]
              },
              hi: {
                text: "शुद्ध वर्तनी वाले वाक्य का चयन करें:",
                options: [
                  "A. The committee reached a consensus on the privilege.",
                  "B. The commitee reached a concensus on the privelege.",
                  "C. The commite reached a concensus on the privilege.",
                  "D. The committee reached a concensus on the priveledge."
                ]
              },
              correctAnswer: 0
            }
          ]
        }
      ]
    };

    /**
     * GENERATE QUESTION DATA DYNAMICALLY ACCORDING TO CONFIGURATION
     * Strictly obeys questionsCount per section, guaranteed unique global IDs,
     * and maintains sample questions + procedural generation.
     */
    testConfig.sections.forEach((sec) => {
      const existingCount = sec.questions.length;
      const targetCount = sec.questionsCount;

      // Ensure local numbering on existing questions
      sec.questions.forEach((q, idx) => {
        q.localNum = idx + 1;
        if (!q.id) q.id = `q-${sec.id}-${idx + 1}`;
      });

      // Generate additional procedural questions if existing count < target count
      for (let i = existingCount; i < targetCount; i++) {
        const localNum = i + 1;
        const qId = `q-${sec.id}-${localNum}`;
        sec.questions.push({
          id: qId,
          localNum: localNum,
          en: {
            text: `Analytical reasoning evaluation item #${localNum} for ${sec.name}. Which condition accurately verifies topic unit ${(i % 5) + 1}?`,
            options: [
              `A. Standard procedural condition A applies under rule ${localNum}`,
              `B. Condition B is verified through parameter ${(localNum * 2) % 100}`,
              `C. Theorem C satisfies criteria under uniform distribution`,
              `D. None of the above configurations remain valid`
            ]
          },
          hi: {
            text: `${sec.name} के लिए विश्लेषण प्रश्न #${localNum}। कौन सा विकल्प विषय इकाई ${(i % 5) + 1} को सत्यापित करता है?`,
            options: [
              `A. नियम ${localNum} के तहत मानक प्रक्रिया शर्त A लागू होती है`,
              `B. पैरामीटर ${(localNum * 2) % 100} द्वारा स्थिति B सत्यापित होती है`,
              `C. प्रमेय C समान वितरण के तहत शर्तों को पूरा करता है`,
              `D. उपरोक्त में से कोई भी प्रारूप मान्य नहीं है`
            ]
          },
          correctAnswer: (localNum % 4)
        });
      }

      // If existing > target, trim to exactly targetCount
      if (sec.questions.length > targetCount) {
        sec.questions = sec.questions.slice(0, targetCount);
      }
    });

    /**
     * AUTHORITATIVE STATE MODEL DEFINITION
     */
    const STATE_NOT_VISITED = 'not_visited';
    const STATE_NOT_ANSWERED = 'not_answered';
    const STATE_ANSWERED = 'answered';
    const STATE_MARKED = 'marked_for_review';
    const STATE_ANS_MARKED = 'answered_marked_for_review';

    /**
     * RUNTIME STATE
     */
    // Use the selected catalogue test when this page is opened from Mock Tests or My Tests.
    let activePreviewContext = null;
    try {
      activePreviewContext = JSON.parse(localStorage.getItem('sscflix-active-test-preview') || 'null');
    } catch (error) {
      activePreviewContext = null;
    }

    if (activePreviewContext && typeof activePreviewContext === 'object') {
      if (activePreviewContext.testId) testConfig.testId = String(activePreviewContext.testId);
      if (activePreviewContext.title) testConfig.title = String(activePreviewContext.title);
      if (activePreviewContext.category) testConfig.category = String(activePreviewContext.category);
      if (Number.isFinite(Number(activePreviewContext.durationMinutes)) && Number(activePreviewContext.durationMinutes) > 0) {
        testConfig.durationMinutes = Number(activePreviewContext.durationMinutes);
      }
      try {
        const storedLanguage = localStorage.getItem('sscflix-language');
        if (storedLanguage && /hindi/i.test(storedLanguage) && testConfig.supportedLanguages.includes('hi')) {
          testConfig.preferredLanguage = 'hi';
        }
      } catch (error) {}
    }

    const initialLang = (testConfig.supportedLanguages && testConfig.supportedLanguages.includes(testConfig.preferredLanguage))
      ? testConfig.preferredLanguage 
      : 'en';

    const runtime = {
      activeSectionIndex: 0,
      activeQuestionId: testConfig.sections[0].questions[0].id,
      language: initialLang,
      remainingSeconds: (testConfig.durationMinutes || 60) * 60,
      timerInterval: null,
      isTestExpired: false,
      isExpiryTriggered: false,
      isSubmitted: false,
      lastFocusedElement: null,
      // Map of qId -> { visited: boolean, selectedOption: number|null, markedForReview: boolean }
      questions: new Map()
    };

    // Initialize map of questions
    testConfig.sections.forEach(sec => {
      sec.questions.forEach(q => {
        runtime.questions.set(q.id, {
          visited: false,
          selectedOption: null,
          markedForReview: false
        });
      });
    });

    // Mark initial question as visited
    runtime.questions.get(runtime.activeQuestionId).visited = true;

    /**
     * UNIFIED AUTHORITATIVE STATE FUNCTION
     */
    function getQuestionState(qId) {
      const q = runtime.questions.get(qId);
      if (!q || !q.visited) return STATE_NOT_VISITED;
      
      const hasAnswer = q.selectedOption !== null && q.selectedOption !== undefined;
      const isMarked = q.markedForReview === true;

      if (hasAnswer && isMarked) return STATE_ANS_MARKED;
      if (hasAnswer && !isMarked) return STATE_ANSWERED;
      if (!hasAnswer && isMarked) return STATE_MARKED;
      return STATE_NOT_ANSWERED;
    }

    // DOM Element References
    const elTestHeaderTitle = document.getElementById("test-header-title");
    const elTestHeaderCategory = document.getElementById("test-header-category");
    const elLangSelect = document.getElementById("lang-select");
    const elTimer = document.getElementById("exam-timer");
    const elTimerContainer = document.getElementById("timer-container");
    const elSectionsContainer = document.getElementById("sections-tab-container");
    const elSectionProgressBadge = document.getElementById("section-progress-badge");
    const elQNumberPill = document.getElementById("q-number-pill");
    const elQTotalPill = document.getElementById("q-total-pill");
    const elQMarksPill = document.getElementById("q-marks-pill");
    const elQNegPill = document.getElementById("q-neg-pill");
    const elQText = document.getElementById("question-text");
    const elOptionsContainer = document.getElementById("options-container");
    const elOptionsFieldset = document.getElementById("options-fieldset");
    const elPaletteGrid = document.getElementById("palette-grid");
    const elMobilePaletteGrid = document.getElementById("mobile-palette-grid");
    const elPaletteSectionTitle = document.getElementById("palette-section-title");
    const elSrAnnouncer = document.getElementById("sr-announcer");

    // Action buttons
    const btnPrev = document.getElementById("btn-prev");
    const btnClear = document.getElementById("btn-clear");
    const btnMarkReview = document.getElementById("btn-mark-review");
    const btnSaveNext = document.getElementById("btn-save-next");
    const btnHeaderSubmit = document.getElementById("header-submit-btn");

    // Modals
    const modalConfirm = document.getElementById("submit-confirm-modal");
    const submitModalDialog = document.getElementById("submit-modal-dialog");
    const modalConfirmTitle = document.getElementById("modal-confirm-title");
    const modalDescriptionText = document.getElementById("modal-description-text");
    const modalHeaderIcon = document.getElementById("modal-header-icon");
    const btnCloseConfirmX = document.getElementById("close-confirm-modal-x");
    const btnCancelSubmit = document.getElementById("btn-cancel-submit");
    const btnFinalConfirmSubmit = document.getElementById("btn-final-confirm-submit");
    const modalTimeNotice = document.getElementById("modal-time-notice");
    const modalTimeLeft = document.getElementById("modal-time-left");

    // Submitted preview modal & locked screen
    const modalSubmitted = document.getElementById("submitted-view-modal");
    const submittedDialogBox = document.getElementById("submitted-dialog-box");
    const btnRestartDemo = document.getElementById("btn-restart-demo");
    const btnBackCatalog = document.getElementById("btn-back-to-catalog");
    const previewExitLockedScreen = document.getElementById("preview-exit-locked-screen");
    const btnRestartDemoFromLocked = document.getElementById("btn-restart-demo-from-locked");

    // Mobile Sheet
    const mobilePaletteModal = document.getElementById("mobile-palette-modal");
    const btnMobilePaletteToggle = document.getElementById("mobile-palette-toggle");
    const btnCloseMobilePalette = document.getElementById("close-mobile-palette-btn");
    const btnDismissMobileSheet = document.getElementById("dismiss-mobile-sheet-btn");
    const elMobileSheetSubtitle = document.getElementById("mobile-sheet-subtitle");

    // Summary Elements (Desktop)
    const sumAnswered = document.getElementById("summary-answered");
    const sumNotAnswered = document.getElementById("summary-not-answered");
    const sumMarked = document.getElementById("summary-marked");
    const sumAnsMarked = document.getElementById("summary-ans-marked");
    const sumNotVisited = document.getElementById("summary-not-visited");

    // Summary Elements (Mobile 5 states)
    const mSumAns = document.getElementById("m-summary-ans");
    const mSumNotAns = document.getElementById("m-summary-not-ans");
    const mSumReview = document.getElementById("m-summary-review");
    const mSumAnsReview = document.getElementById("m-summary-ans-review");
    const mSumNotVisited = document.getElementById("m-summary-not-visited");

    // Modal Confirmation Summary Elements
    const modalSumTotal = document.getElementById("modal-sum-total");
    const modalSumAns = document.getElementById("modal-sum-ans");
    const modalSumNotAns = document.getElementById("modal-sum-not-ans");
    const modalSumReview = document.getElementById("modal-sum-review");
    const modalSumAnsReview = document.getElementById("modal-sum-ans-review");
    const modalSumNotVisited = document.getElementById("modal-sum-not-visited");

    /**
     * ANNOUNCE TO SCREEN READERS
     */
    function announce(message) {
      if (!elSrAnnouncer) return;
      elSrAnnouncer.textContent = "";
      setTimeout(() => {
        elSrAnnouncer.textContent = message;
      }, 50);
    }

    /**
     * INITIALIZATION: DYNAMICALLY CONNECTED TO testConfig
     */
    function init() {
      // Connect title and category
      if (elTestHeaderTitle && testConfig.title) {
        elTestHeaderTitle.textContent = testConfig.title;
      }
      if (elTestHeaderCategory && testConfig.category) {
        elTestHeaderCategory.textContent = testConfig.category;
      }

      // Populate Language Selector from testConfig
      initLanguageSelector();

      renderSectionTabs();
      loadQuestion(runtime.activeQuestionId);
      updateAllSummaries();
      startTimer();
      bindEvents();
    }

    /**
     * POPULATE LANGUAGE SELECTOR
     */
    function initLanguageSelector() {
      elLangSelect.innerHTML = "";
      const langNames = {
        en: "English",
        hi: "हिन्दी (Hindi)"
      };
      const langs = testConfig.supportedLanguages || ["en", "hi"];
      langs.forEach(langCode => {
        const opt = document.createElement("option");
        opt.value = langCode;
        opt.textContent = langNames[langCode] || langCode.toUpperCase();
        if (langCode === runtime.language) {
          opt.selected = true;
        }
        elLangSelect.appendChild(opt);
      });
    }

    /**
     * RENDER SECTION TABS
     */
    function renderSectionTabs() {
      elSectionsContainer.innerHTML = "";
      const isControlsLocked = runtime.isTestExpired || runtime.isSubmitted;

      testConfig.sections.forEach((sec, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", idx === runtime.activeSectionIndex ? "true" : "false");
        btn.disabled = isControlsLocked;
        btn.className = `touch-target px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ${
          idx === runtime.activeSectionIndex
            ? "bg-blue-700 text-white shadow-sm"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`;
        btn.innerHTML = `
          <span>${sec.shortName || sec.name}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full ${
            idx === runtime.activeSectionIndex ? "bg-blue-800 text-blue-100" : "bg-slate-200 text-slate-600"
          }">${sec.questionsCount}</span>
        `;
        btn.addEventListener("click", () => {
          if (runtime.isTestExpired || runtime.isSubmitted) return;
          switchSection(idx);
        });
        elSectionsContainer.appendChild(btn);
      });
    }

    /**
     * SWITCH ACTIVE SECTION
     */
    function switchSection(secIdx) {
      if (secIdx === runtime.activeSectionIndex || runtime.isTestExpired || runtime.isSubmitted) return;
      runtime.activeSectionIndex = secIdx;
      renderSectionTabs();

      const targetSec = testConfig.sections[secIdx];
      const firstQ = targetSec.questions[0];
      jumpToQuestion(firstQ.id);
      announce(`Switched to section ${targetSec.name}`);
    }

    /**
     * JUMP DIRECTLY TO QUESTION
     */
    function jumpToQuestion(qId) {
      if (runtime.isSubmitted || runtime.isTestExpired) return;
      
      const qStateObj = runtime.questions.get(qId);
      if (qStateObj) {
        qStateObj.visited = true;
      }
      runtime.activeQuestionId = qId;

      // Locate corresponding section if not current
      const targetSecIdx = testConfig.sections.findIndex(s => s.questions.some(q => q.id === qId));
      if (targetSecIdx !== -1 && targetSecIdx !== runtime.activeSectionIndex) {
        runtime.activeSectionIndex = targetSecIdx;
        renderSectionTabs();
      }

      loadQuestion(qId);
      updateAllSummaries();
      renderPaletteGrids();

      announce(`Showing Question ${qId}`);
    }

    /**
     * LOAD QUESTION DATA INTO WORKSPACE
     */
    function loadQuestion(qId) {
      const currentSec = testConfig.sections[runtime.activeSectionIndex];
      const qObj = currentSec.questions.find(q => q.id === qId) || 
                   testConfig.sections.flatMap(s => s.questions).find(q => q.id === qId);

      if (!qObj) return;

      const qIndexInSection = qObj.localNum || (currentSec.questions.findIndex(q => q.id === qId) + 1);
      const totalInSection = currentSec.questions.length;
      const lang = runtime.language;
      const content = qObj[lang] || qObj.en;
      const qData = runtime.questions.get(qId);
      const isControlsLocked = runtime.isTestExpired || runtime.isSubmitted;

      // Header pills
      elQNumberPill.textContent = `Question ${qIndexInSection}`;
      elQTotalPill.textContent = `(${qIndexInSection} of ${totalInSection} in ${currentSec.shortName})`;
      elQMarksPill.textContent = `+${testConfig.markingScheme.positive.toFixed(1)} Marks`;
      elQNegPill.textContent = `-${testConfig.markingScheme.negative.toFixed(2)} Neg`;

      // Palette Section Header
      elPaletteSectionTitle.textContent = `${currentSec.shortName} (${totalInSection} Qs)`;
      if (elMobileSheetSubtitle) {
        elMobileSheetSubtitle.textContent = currentSec.name;
      }

      // Question body (select-text enabled)
      elQText.textContent = content.text;

      // Render options with state preservation
      elOptionsContainer.innerHTML = "";
      content.options.forEach((optText, optIdx) => {
        const isSelected = qData.selectedOption === optIdx;
        const optLabel = document.createElement("label");
        optLabel.className = `flex items-center gap-3.5 p-3.5 sm:p-4 rounded-lg border transition-all ${
          isControlsLocked ? "cursor-not-allowed opacity-70" : "cursor-pointer"
        } ${
          isSelected
            ? "border-blue-600 bg-blue-50/70 text-slate-900 shadow-sm ring-1 ring-blue-600 font-semibold"
            : "border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
        }`;

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `cbt-option-${qId}`;
        radio.value = optIdx;
        radio.checked = isSelected;
        radio.disabled = isControlsLocked;
        radio.className = "w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600 cursor-pointer disabled:cursor-not-allowed";
        
        radio.addEventListener("change", () => {
          if (runtime.isTestExpired || runtime.isSubmitted) return;
          selectOption(optIdx);
        });

        const spanText = document.createElement("span");
        spanText.className = "text-sm sm:text-base select-text";
        spanText.textContent = optText;

        optLabel.appendChild(radio);
        optLabel.appendChild(spanText);
        elOptionsContainer.appendChild(optLabel);
      });

      // Update Prev / Next buttons state
      const allQuestions = testConfig.sections.flatMap(s => s.questions);
      const overallIndex = allQuestions.findIndex(q => q.id === qId);
      btnPrev.disabled = isControlsLocked || overallIndex === 0;

      // Clear button disabled if no response or locked
      btnClear.disabled = isControlsLocked || qData.selectedOption === null;
      btnMarkReview.disabled = isControlsLocked;
      btnSaveNext.disabled = isControlsLocked;
      btnHeaderSubmit.disabled = isControlsLocked;
      elLangSelect.disabled = isControlsLocked;

      // Scroll top
      const scrollable = document.getElementById("question-scroll-container");
      if (scrollable) scrollable.scrollTop = 0;

      renderPaletteGrids();
    }

    /**
     * SELECT AN OPTION (Radio change)
     */
    function selectOption(optIdx) {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const qData = runtime.questions.get(runtime.activeQuestionId);
      qData.selectedOption = optIdx;
      qData.visited = true;

      btnClear.disabled = false;

      // Update visual options highlight
      const labels = elOptionsContainer.querySelectorAll("label");
      labels.forEach((lbl, idx) => {
        if (idx === optIdx) {
          lbl.className = "flex items-center gap-3.5 p-3.5 sm:p-4 rounded-lg border cursor-pointer transition-all border-blue-600 bg-blue-50/70 text-slate-900 shadow-sm ring-1 ring-blue-600 font-semibold";
        } else {
          lbl.className = "flex items-center gap-3.5 p-3.5 sm:p-4 rounded-lg border cursor-pointer transition-all border-slate-200 bg-white hover:bg-slate-50 text-slate-800";
        }
      });

      updateAllSummaries();
      renderPaletteGrids();
    }

    /**
     * CLEAR RESPONSE
     */
    function clearCurrentResponse() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const qData = runtime.questions.get(runtime.activeQuestionId);
      qData.selectedOption = null;
      qData.visited = true;

      loadQuestion(runtime.activeQuestionId);
      updateAllSummaries();
      renderPaletteGrids();
      announce("Response cleared for current question");
    }

    /**
     * SAVE & NEXT ACTION
     */
    function saveAndNext() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const qData = runtime.questions.get(runtime.activeQuestionId);
      qData.visited = true;
      qData.markedForReview = false;

      updateAllSummaries();
      renderPaletteGrids();
      navigateNextQuestion();
    }

    /**
     * MARK FOR REVIEW & NEXT
     */
    function markForReviewAndNext() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const qData = runtime.questions.get(runtime.activeQuestionId);
      qData.visited = true;
      qData.markedForReview = true;

      updateAllSummaries();
      renderPaletteGrids();
      navigateNextQuestion();
    }

    /**
     * NAVIGATE TO NEXT QUESTION IN SEQUENCE
     */
    function navigateNextQuestion() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const allQuestions = testConfig.sections.flatMap(s => s.questions);
      const currIndex = allQuestions.findIndex(q => q.id === runtime.activeQuestionId);
      if (currIndex < allQuestions.length - 1) {
        const nextQ = allQuestions[currIndex + 1];
        jumpToQuestion(nextQ.id);
      } else {
        // Last question reached, prompt submission confirmation
        openSubmitConfirmModal(false);
      }
    }

    /**
     * NAVIGATE TO PREVIOUS QUESTION
     */
    function navigatePrevQuestion() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      const allQuestions = testConfig.sections.flatMap(s => s.questions);
      const currIndex = allQuestions.findIndex(q => q.id === runtime.activeQuestionId);
      if (currIndex > 0) {
        const prevQ = allQuestions[currIndex - 1];
        jumpToQuestion(prevQ.id);
      }
    }

    /**
     * RENDER PALETTE BUTTONS IN GRID
     */
    function renderPaletteGrids() {
      const currentSec = testConfig.sections[runtime.activeSectionIndex];
      renderSingleGrid(elPaletteGrid, currentSec.questions, false);
      renderSingleGrid(elMobilePaletteGrid, currentSec.questions, true);
    }

    function renderSingleGrid(container, questions, isMobile) {
      container.innerHTML = "";
      const isControlsLocked = runtime.isTestExpired || runtime.isSubmitted;

      questions.forEach((q, idx) => {
        const state = getQuestionState(q.id);
        const isCurrent = q.id === runtime.activeQuestionId;
        const displayNum = q.localNum || (idx + 1);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.disabled = isControlsLocked;
        btn.setAttribute("aria-label", `Question ${displayNum}, State: ${getStateReadableText(state)}`);

        let stateClasses = "";
        let badgeContent = "";

        switch (state) {
          case STATE_ANSWERED:
            stateClasses = "bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700";
            badgeContent = `<span class="absolute top-0.5 right-1 text-[8px] leading-none" aria-hidden="true">✓</span>`;
            break;
          case STATE_NOT_ANSWERED:
            stateClasses = "bg-rose-500 text-white border-rose-600 hover:bg-rose-600";
            badgeContent = `<span class="absolute top-0.5 right-1 text-[8px] leading-none" aria-hidden="true">✕</span>`;
            break;
          case STATE_MARKED:
            stateClasses = "bg-amber-500 text-white border-amber-600 hover:bg-amber-600";
            badgeContent = `<span class="absolute top-0.5 right-1 text-[8px] leading-none" aria-hidden="true">★</span>`;
            break;
          case STATE_ANS_MARKED:
            stateClasses = "bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700";
            badgeContent = `<span class="absolute top-0.5 right-1 text-[7px] leading-none font-bold" aria-hidden="true">✓★</span>`;
            break;
          case STATE_NOT_VISITED:
          default:
            stateClasses = "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200";
            badgeContent = "";
            break;
        }

        const activeClasses = isCurrent 
          ? "ring-2 ring-blue-700 ring-offset-2 scale-105 z-10 font-bold shadow-sm" 
          : "font-semibold";

        btn.className = `touch-target relative h-10 w-full rounded border flex items-center justify-center text-xs transition-transform focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-60 ${stateClasses} ${activeClasses}`;
        btn.innerHTML = `
          <span>${displayNum}</span>
          ${badgeContent}
        `;

        btn.addEventListener("click", () => {
          if (runtime.isTestExpired || runtime.isSubmitted) return;
          jumpToQuestion(q.id);
          if (isMobile) {
            closeMobilePaletteModal();
          }
        });

        container.appendChild(btn);
      });
    }

    function getStateReadableText(state) {
      switch (state) {
        case STATE_ANSWERED: return "Answered";
        case STATE_NOT_ANSWERED: return "Not Answered";
        case STATE_MARKED: return "Marked for Review";
        case STATE_ANS_MARKED: return "Answered and Marked for Review";
        case STATE_NOT_VISITED: default: return "Not Visited";
      }
    }

    /**
     * UPDATE ALL SUMMARY COUNTS
     */
    function updateAllSummaries() {
      const currentSec = testConfig.sections[runtime.activeSectionIndex];
      let secAns = 0, secNotAns = 0, secMarked = 0, secAnsMarked = 0, secNotVisited = 0;

      currentSec.questions.forEach(q => {
        const s = getQuestionState(q.id);
        if (s === STATE_ANSWERED) secAns++;
        else if (s === STATE_NOT_ANSWERED) secNotAns++;
        else if (s === STATE_MARKED) secMarked++;
        else if (s === STATE_ANS_MARKED) secAnsMarked++;
        else secNotVisited++;
      });

      // Desktop Palette Counts (Current Section)
      sumAnswered.textContent = secAns;
      sumNotAnswered.textContent = secNotAns;
      sumMarked.textContent = secMarked;
      sumAnsMarked.textContent = secAnsMarked;
      sumNotVisited.textContent = secNotVisited;

      // Mobile Bottom Sheet Counts
      mSumAns.textContent = secAns;
      mSumNotAns.textContent = secNotAns;
      mSumReview.textContent = secMarked;
      mSumAnsReview.textContent = secAnsMarked;
      mSumNotVisited.textContent = secNotVisited;

      // Section Progress Badge
      const totalAnsweredInSection = secAns + secAnsMarked;
      elSectionProgressBadge.textContent = `${totalAnsweredInSection} / ${currentSec.questionsCount} Answered`;
    }

    /**
     * COUNTDOWN TIMER & EXPIRY HANDLER
     * Fixed immediate timer expiry: decrements and checks <= 0 immediately in the same tick.
     */
    function startTimer() {
      clearInterval(runtime.timerInterval);
      runtime.isExpiryTriggered = false;
      updateTimerDisplay();

      runtime.timerInterval = setInterval(() => {
        runtime.remainingSeconds--;
        if (runtime.remainingSeconds <= 0) {
          clearInterval(runtime.timerInterval);
          if (runtime.isExpiryTriggered) return;
          runtime.isExpiryTriggered = true;
          runtime.remainingSeconds = 0;
          updateTimerDisplay();
          handleTimerExpiry();
        } else {
          updateTimerDisplay();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const total = runtime.remainingSeconds;
      const mins = Math.floor(total / 60);
      const secs = total % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      elTimer.textContent = formatted;

      if (total <= 60) {
        elTimerContainer.className = "flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg border border-rose-300 bg-rose-50 font-mono text-xs sm:text-sm font-bold text-rose-700 animate-pulse shrink-0";
      } else if (total <= 300) {
        elTimerContainer.className = "flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg border border-amber-300 bg-amber-50 font-mono text-xs sm:text-sm font-bold text-amber-700 shrink-0";
      } else {
        elTimerContainer.className = "flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-mono text-xs sm:text-sm font-bold text-slate-700 shrink-0";
      }
    }

    /**
     * TIMER EXPIRY: STRICT LOCKDOWN ENFORCEMENT
     */
    function handleTimerExpiry() {
      runtime.isTestExpired = true;
      runtime.remainingSeconds = 0;
      updateTimerDisplay();

      // Disable all examination controls
      lockAllExamControls();

      // Close mobile palette if open
      if (!mobilePaletteModal.classList.contains("hidden")) {
        mobilePaletteModal.classList.add("hidden");
      }

      // Re-render tabs and options to disable interactive states
      renderSectionTabs();
      loadQuestion(runtime.activeQuestionId);

      // Trigger locked confirmation dialog
      openSubmitConfirmModal(true);
      announce("Exam time has expired. Please confirm your submission.");
    }

    /**
     * LOCK ALL EXAMINATION CONTROLS
     */
    function lockAllExamControls() {
      btnPrev.disabled = true;
      btnClear.disabled = true;
      btnMarkReview.disabled = true;
      btnSaveNext.disabled = true;
      btnHeaderSubmit.disabled = true;
      elLangSelect.disabled = true;
      btnMobilePaletteToggle.disabled = true;

      // Disable radios
      const radios = document.querySelectorAll('input[type="radio"]');
      radios.forEach(r => r.disabled = true);
    }

    /**
     * REFINED FOCUS TRAPPING UTILITY
     * Selects ONLY visible, enabled, interactive elements, filtering out hidden or zero-dimension nodes.
     */
    function setupFocusTrap(containerElement) {
      const focusableSelector = 'button:not([disabled]):not([aria-hidden="true"]), [href]:not([aria-hidden="true"]), input:not([disabled]):not([type="hidden"]):not([aria-hidden="true"]), select:not([disabled]):not([aria-hidden="true"]), textarea:not([disabled]):not([aria-hidden="true"]), [tabindex]:not([tabindex="-1"]):not([aria-hidden="true"])';
      
      const getVisibleFocusable = () => {
        const raw = Array.from(containerElement.querySelectorAll(focusableSelector));
        return raw.filter(el => {
          if (el.classList.contains('hidden') || el.hasAttribute('hidden')) return false;
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') return false;
          // check offset dimensions or bounding box
          return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        });
      };

      const trapHandler = function(e) {
        if (e.key !== 'Tab') return;
        const visibleFocusable = getVisibleFocusable();
        if (visibleFocusable.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = visibleFocusable[0];
        const lastElement = visibleFocusable[visibleFocusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || !containerElement.contains(document.activeElement)) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement || !containerElement.contains(document.activeElement)) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      containerElement.addEventListener('keydown', trapHandler);
      return () => containerElement.removeEventListener('keydown', trapHandler);
    }

    let activeModalTrapCleanup = null;

    /**
     * SUBMISSION CONFIRMATION MODAL
     */
    function openSubmitConfirmModal(isAutoExpired = false) {
      runtime.lastFocusedElement = document.activeElement;

      // Authoritative count across the entire examination
      let totalAns = 0, totalNotAns = 0, totalMarked = 0, totalAnsMarked = 0, totalNotVisited = 0;
      runtime.questions.forEach((_, qId) => {
        const s = getQuestionState(qId);
        if (s === STATE_ANSWERED) totalAns++;
        else if (s === STATE_NOT_ANSWERED) totalNotAns++;
        else if (s === STATE_MARKED) totalMarked++;
        else if (s === STATE_ANS_MARKED) totalAnsMarked++;
        else totalNotVisited++;
      });

      modalSumTotal.textContent = runtime.questions.size;
      modalSumAns.textContent = totalAns;
      modalSumNotAns.textContent = totalNotAns;
      modalSumReview.textContent = totalMarked;
      modalSumAnsReview.textContent = totalAnsMarked;
      modalSumNotVisited.textContent = totalNotVisited;
      modalTimeLeft.textContent = elTimer.textContent;

      if (isAutoExpired || runtime.isTestExpired) {
        // STRICT LOCKDOWN
        modalConfirmTitle.textContent = "Time Expired — Final Submission";
        modalDescriptionText.textContent = "Your allotted examination time has concluded. Test controls are locked. Please confirm your submission below.";
        modalHeaderIcon.className = "w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold";
        modalHeaderIcon.textContent = "⏱";
        modalTimeNotice.classList.add("hidden");
        btnCloseConfirmX.classList.add("hidden");
        btnCancelSubmit.classList.add("hidden");
        btnFinalConfirmSubmit.textContent = "Confirm & View Summary";
      } else {
        modalConfirmTitle.textContent = "Confirm Test Submission";
        modalDescriptionText.textContent = "Please review your attempt summary before final submission. Once confirmed, your responses will be submitted for this test session.";
        modalHeaderIcon.className = "w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold";
        modalHeaderIcon.textContent = "✓";
        modalTimeNotice.classList.remove("hidden");
        btnCloseConfirmX.classList.remove("hidden");
        btnCancelSubmit.classList.remove("hidden");
        btnFinalConfirmSubmit.textContent = "Confirm Submission";
      }

      modalConfirm.classList.remove("hidden");
      if (activeModalTrapCleanup) activeModalTrapCleanup();
      activeModalTrapCleanup = setupFocusTrap(submitModalDialog);

      btnFinalConfirmSubmit.focus();
    }

    function closeSubmitConfirmModal() {
      if (runtime.isTestExpired) {
        // STRICT LOCKDOWN: Reject closing when time expired
        return;
      }
      modalConfirm.classList.add("hidden");
      if (activeModalTrapCleanup) {
        activeModalTrapCleanup();
        activeModalTrapCleanup = null;
      }
      if (runtime.lastFocusedElement) {
        runtime.lastFocusedElement.focus();
      }
    }

    /**
     * FINAL SUBMISSION CONFIRMATION
     * Implements requirement 1: locks all examination controls and stops the timer immediately.
     */
    function finalSubmissionConfirmed() {
      // 1. Immediately stop the timer
      clearInterval(runtime.timerInterval);
      runtime.isSubmitted = true;
      runtime.isTestExpired = true;

      // 2. Disable all controls permanently
      lockAllExamControls();
      renderSectionTabs();
      renderPaletteGrids();

      // Close submit confirm modal
      modalConfirm.classList.add("hidden");
      if (activeModalTrapCleanup) {
        activeModalTrapCleanup();
        activeModalTrapCleanup = null;
      }

      let totalAttempted = 0;
      let totalReviewed = 0;
      runtime.questions.forEach((_, qId) => {
        const s = getQuestionState(qId);
        if (s === STATE_ANSWERED || s === STATE_ANS_MARKED) {
          totalAttempted++;
        }
        if (s === STATE_MARKED || s === STATE_ANS_MARKED) {
          totalReviewed++;
        }
      });

      document.getElementById("done-attempted").textContent = `${totalAttempted} of ${runtime.questions.size} Questions`;
      document.getElementById("done-reviewed").textContent = `${totalReviewed} Questions`;

      const completionSummary = {
        testId: testConfig.testId,
        title: testConfig.title,
        category: testConfig.category,
        examId: activePreviewContext?.examId || 'cgl',
        mode: activePreviewContext?.mode || 'test',
        durationMinutes: testConfig.durationMinutes || 60,
        questions: runtime.questions.size,
        attempted: totalAttempted,
        reviewed: totalReviewed,
        submittedAt: new Date().toISOString(),
        source: activePreviewContext?.source || 'cbt-demo',
        evaluationData: 'demo'
      };
      try {
        localStorage.setItem('sscflix-last-cbt-submission', JSON.stringify(completionSummary));
      } catch (error) {
        // The completion modal still works without local storage.
      }

      modalSubmitted.classList.remove("hidden");
      if (activeModalTrapCleanup) activeModalTrapCleanup();
      activeModalTrapCleanup = setupFocusTrap(submittedDialogBox);

      btnRestartDemo.focus();
    }

    /**
     * CLOSE PREVIEW: ENTERS PERSISTENT LOCKED SCREEN
     * Ensures the test environment NEVER becomes interactive again after manual submission.
     */
    function handleClosePreview() {
      modalSubmitted.classList.add("hidden");
      if (activeModalTrapCleanup) {
        activeModalTrapCleanup();
        activeModalTrapCleanup = null;
      }

      // Display locked overlay
      previewExitLockedScreen.classList.remove("hidden");
      if (activeModalTrapCleanup) activeModalTrapCleanup();
      activeModalTrapCleanup = setupFocusTrap(previewExitLockedScreen);
      btnRestartDemoFromLocked.focus();
    }

    /**
     * MOBILE PALETTE BOTTOM SHEET
     */
    function openMobilePaletteModal() {
      if (runtime.isTestExpired || runtime.isSubmitted) return;
      runtime.lastFocusedElement = document.activeElement;
      updateAllSummaries();
      renderPaletteGrids();

      mobilePaletteModal.classList.remove("hidden");
      const sheetContent = document.getElementById("mobile-palette-sheet-content");
      if (activeModalTrapCleanup) activeModalTrapCleanup();
      activeModalTrapCleanup = setupFocusTrap(sheetContent || mobilePaletteModal);

      btnCloseMobilePalette.focus();
      announce("Opened Question Navigation Palette Sheet");
    }

    function closeMobilePaletteModal() {
      mobilePaletteModal.classList.add("hidden");
      if (activeModalTrapCleanup) {
        activeModalTrapCleanup();
        activeModalTrapCleanup = null;
      }
      if (runtime.lastFocusedElement) {
        runtime.lastFocusedElement.focus();
      }
    }

    /**
     * FULL RESET: RESTARTS A FRESH CBT SESSION
     */
    function restartDemoSession() {
      modalSubmitted.classList.add("hidden");
      previewExitLockedScreen.classList.add("hidden");
      if (activeModalTrapCleanup) {
        activeModalTrapCleanup();
        activeModalTrapCleanup = null;
      }

      // Reset runtime state cleanly
      runtime.remainingSeconds = (testConfig.durationMinutes || 60) * 60;
      runtime.isTestExpired = false;
      runtime.isExpiryTriggered = false;
      runtime.isSubmitted = false;

      // Re-enable interactive controls
      btnPrev.disabled = false;
      btnClear.disabled = false;
      btnMarkReview.disabled = false;
      btnSaveNext.disabled = false;
      btnHeaderSubmit.disabled = false;
      elLangSelect.disabled = false;
      btnMobilePaletteToggle.disabled = false;

      // Reset questions state
      runtime.questions.forEach((v, k) => {
        v.visited = false;
        v.selectedOption = null;
        v.markedForReview = false;
      });

      runtime.activeSectionIndex = 0;
      runtime.activeQuestionId = testConfig.sections[0].questions[0].id;
      runtime.questions.get(runtime.activeQuestionId).visited = true;

      renderSectionTabs();
      loadQuestion(runtime.activeQuestionId);
      updateAllSummaries();
      startTimer();
      announce("Test session has been restarted.");
    }

    /**
     * BIND ALL UI INTERACTION EVENTS
     */
    function bindEvents() {
      // Language switch: instantaneous bilingual toggle preserving student response & state
      elLangSelect.addEventListener("change", (e) => {
        runtime.language = e.target.value;
        loadQuestion(runtime.activeQuestionId);
        announce(`Language switched to ${e.target.value === 'hi' ? 'Hindi' : 'English'}`);
      });

      // Bottom Action Bar triggers
      btnPrev.addEventListener("click", navigatePrevQuestion);
      btnClear.addEventListener("click", clearCurrentResponse);
      btnSaveNext.addEventListener("click", saveAndNext);
      btnMarkReview.addEventListener("click", markForReviewAndNext);

      // Submit test buttons
      btnHeaderSubmit.addEventListener("click", () => openSubmitConfirmModal(false));
      btnCloseConfirmX.addEventListener("click", closeSubmitConfirmModal);
      btnCancelSubmit.addEventListener("click", closeSubmitConfirmModal);
      btnFinalConfirmSubmit.addEventListener("click", finalSubmissionConfirmed);

      // Mobile sheet triggers
      btnMobilePaletteToggle.addEventListener("click", openMobilePaletteModal);
      btnCloseMobilePalette.addEventListener("click", closeMobilePaletteModal);
      btnDismissMobileSheet.addEventListener("click", closeMobilePaletteModal);

      // Final modal restart & close preview
      btnRestartDemo.addEventListener("click", restartDemoSession);
      btnRestartDemoFromLocked.addEventListener("click", restartDemoSession);
      btnBackCatalog.addEventListener("click", () => {
        window.SSCFlixRouter.navigate("/results");
      });

      // Escape key handler respecting STRICT lockdown
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          // If test is expired or submitted, ESC MUST NEVER close modals
          if (runtime.isTestExpired || runtime.isSubmitted) {
            e.preventDefault();
            return;
          }

          if (!modalConfirm.classList.contains("hidden")) {
            closeSubmitConfirmModal();
          } else if (!mobilePaletteModal.classList.contains("hidden")) {
            closeMobilePaletteModal();
          }
        }
      });
    }

    // Initialize on page load
    window.addEventListener("DOMContentLoaded", init);
  
if(typeof getQuestionState==='function')window["getQuestionState"]=getQuestionState;
if(typeof announce==='function')window["announce"]=announce;
if(typeof init==='function')window["init"]=init;
if(typeof initLanguageSelector==='function')window["initLanguageSelector"]=initLanguageSelector;
if(typeof renderSectionTabs==='function')window["renderSectionTabs"]=renderSectionTabs;
if(typeof switchSection==='function')window["switchSection"]=switchSection;
if(typeof jumpToQuestion==='function')window["jumpToQuestion"]=jumpToQuestion;
if(typeof loadQuestion==='function')window["loadQuestion"]=loadQuestion;
if(typeof selectOption==='function')window["selectOption"]=selectOption;
if(typeof clearCurrentResponse==='function')window["clearCurrentResponse"]=clearCurrentResponse;
if(typeof saveAndNext==='function')window["saveAndNext"]=saveAndNext;
if(typeof markForReviewAndNext==='function')window["markForReviewAndNext"]=markForReviewAndNext;
if(typeof navigateNextQuestion==='function')window["navigateNextQuestion"]=navigateNextQuestion;
if(typeof navigatePrevQuestion==='function')window["navigatePrevQuestion"]=navigatePrevQuestion;
if(typeof renderPaletteGrids==='function')window["renderPaletteGrids"]=renderPaletteGrids;
if(typeof renderSingleGrid==='function')window["renderSingleGrid"]=renderSingleGrid;
if(typeof getStateReadableText==='function')window["getStateReadableText"]=getStateReadableText;
if(typeof updateAllSummaries==='function')window["updateAllSummaries"]=updateAllSummaries;
if(typeof startTimer==='function')window["startTimer"]=startTimer;
if(typeof updateTimerDisplay==='function')window["updateTimerDisplay"]=updateTimerDisplay;
if(typeof handleTimerExpiry==='function')window["handleTimerExpiry"]=handleTimerExpiry;
if(typeof lockAllExamControls==='function')window["lockAllExamControls"]=lockAllExamControls;
if(typeof setupFocusTrap==='function')window["setupFocusTrap"]=setupFocusTrap;
if(typeof openSubmitConfirmModal==='function')window["openSubmitConfirmModal"]=openSubmitConfirmModal;
if(typeof closeSubmitConfirmModal==='function')window["closeSubmitConfirmModal"]=closeSubmitConfirmModal;
if(typeof finalSubmissionConfirmed==='function')window["finalSubmissionConfirmed"]=finalSubmissionConfirmed;
if(typeof handleClosePreview==='function')window["handleClosePreview"]=handleClosePreview;
if(typeof openMobilePaletteModal==='function')window["openMobilePaletteModal"]=openMobilePaletteModal;
if(typeof closeMobilePaletteModal==='function')window["closeMobilePaletteModal"]=closeMobilePaletteModal;
if(typeof restartDemoSession==='function')window["restartDemoSession"]=restartDemoSession;
if(typeof bindEvents==='function')window["bindEvents"]=bindEvents;
})();