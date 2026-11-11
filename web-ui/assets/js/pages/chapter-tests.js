// chapter-tests page script 1
(function(){

    (function() {
      'use strict';

      // 1. Data Store for Subjects & Chapters (Purged of examNotice and exam coverage claims)
      var subjectsData = [
        {
          id: 'quant',
          title: 'Quantitative Aptitude',
          icon: 'calculate',
          chapters: [
            { id: 'quant-01', name: 'Number System', desc: 'Divisibility rules, unit digit calculation, remainder theorems, fractions, surds & indices, recurring decimals.', topics: ['All Topics', 'Divisibility Rules', 'Unit Digit & Factors', 'Remainder Theorem', 'Surds & Indices'] },
            { id: 'quant-02', name: 'Simplification', desc: 'BODMAS evaluation, algebraic identities, fraction approximations, and nested square roots.', topics: ['All Topics', 'BODMAS & Fractions', 'Algebraic Formulae', 'Nested Radicals'] },
            { id: 'quant-03', name: 'Percentage', desc: 'Fraction to percentage conversions, successive percent changes, population models, and election comparison problems.', topics: ['All Topics', 'Basic Percentage', 'Percentage Increase & Decrease', 'Successive Changes', 'Election & Examination Cases'] },
            { id: 'quant-04', name: 'Ratio & Proportion', desc: 'Duplicate and triplicate ratios, mean proportion, coin division cases, income-expenditure ratios.', topics: ['All Topics', 'Basic Ratio & Continued Ratio', 'Mean & Third Proportional', 'Coin Problems', 'Income & Expenditure'] },
            { id: 'quant-05', name: 'Average', desc: 'Weighted average, replacement cases, batsman and bowling averages, temperature variation problems.', topics: ['All Topics', 'Basic Average', 'Inclusion & Exclusion', 'Cricket & Speed Average', 'Weighted Average'] },
            { id: 'quant-06', name: 'Profit & Loss', desc: 'Cost Price, Selling Price, Mark-up formulas, dishonest dealer tricks, split goods trading.', topics: ['All Topics', 'Cost & Selling Price', 'Dishonest Shopkeeper', 'Free Articles & Markup', 'Combined Goods Selling'] },
            { id: 'quant-07', name: 'Discount', desc: 'Single equivalent discount from successive series, cash discount vs trade discount, marked price ratio.', topics: ['All Topics', 'Successive Discount', 'Buy X Get Y Free', 'Marked Price to CP Ratio'] },
            { id: 'quant-08', name: 'Simple & Compound Interest', desc: 'Annual and semi-annual compounding, difference between CI and SI for 2 & 3 years, installment schemes.', topics: ['All Topics', 'Simple Interest Formulas', 'Compound Interest (Half-yearly/Quarterly)', 'CI - SI Difference', 'Equal Installments'] },
            { id: 'quant-09', name: 'Mixture & Alligation', desc: 'Rule of alligation, repeated dilution of liquids, combining liquids of diverse costs and ratios.', topics: ['All Topics', 'Alligation Method', 'Replacement & Dilution', 'Multi-Vessel Combinations'] },
            { id: 'quant-10', name: 'Time & Work', desc: 'Man-day-hours formula, efficiency comparison, alternate day work, work & wages distributions.', topics: ['All Topics', 'Basic Unit Work', 'Efficiency Equations', 'Alternate Days Schedule', 'Wages & Compensation'] },
            { id: 'quant-11', name: 'Pipe & Cistern', desc: 'Inlet and outlet leak problems, time to fill or empty vessels, alternate hour operations.', topics: ['All Topics', 'Inlet & Drain Rates', 'Leakage Problems', 'Pipes Opening Simultaneously'] },
            { id: 'quant-12', name: 'Time, Speed & Distance', desc: 'Relative speed, train crossing poles and platforms, stoppage times, average trip velocities.', topics: ['All Topics', 'Basic Conversions', 'Relative Velocity & Trains', 'Early & Late Cases', 'Races & Tracks'] },
            { id: 'quant-13', name: 'Boat & Stream', desc: 'Upstream and downstream speeds, river current velocity calculations, round trip duration cases.', topics: ['All Topics', 'Downstream & Upstream', 'Still Water vs Current', 'Round Trip Ratios'] },
            { id: 'quant-14', name: 'Algebra', desc: 'Quadratic roots, symmetrical polynomials, value substitution techniques, degree 3 identities.', topics: ['All Topics', 'Algebraic Identities', 'x + 1/x Standard Forms', 'Quadratic Equations', 'Maximum & Minimum Values'] },
            { id: 'quant-15', name: 'Geometry', desc: 'Triangle congruency, centroid, incenter, orthocenter, chord theorems, tangent properties.', topics: ['All Topics', 'Lines & Angles', 'Triangle Centres & Similarity', 'Circles & Tangents', 'Quadrilaterals & Cyclic Types'] },
            { id: 'quant-16', name: 'Mensuration (2D & 3D)', desc: 'Area and perimeter of polygons, surface area & volume of cylinders, cones, spheres, prisms and pyramids.', topics: ['All Topics', '2D Plane Figures', 'Cylinder, Cone & Sphere', 'Frustum & Prisms', 'Cutting & Melting Solids'] },
            { id: 'quant-17', name: 'Trigonometry', desc: 'Radian measures, complementary angle identities, trigonometric identities, height & distance angles.', topics: ['All Topics', 'Standard Ratios & Values', 'Trigonometric Identities', 'Complementary Angles', 'Heights & Distances'] },
            { id: 'quant-18', name: 'Data Interpretation', desc: 'Pie charts, bar graphs, tabulated datasets, line graphs, combined radar and mixed charts.', topics: ['All Topics', 'Tabular DI', 'Bar Chart', 'Pie Chart', 'Line Chart & Histograms'] }
          ]
        },
        {
          id: 'reasoning',
          title: 'General Intelligence & Reasoning',
          icon: 'psychology',
          chapters: [
            { id: 'reas-01', name: 'Analogy', desc: 'Semantic, numeric, symbolic word & letter pairings.', topics: ['All Topics', 'Word Analogy', 'Number Analogy', 'Letter Analogy'] },
            { id: 'reas-02', name: 'Classification (Odd One Out)', desc: 'Group categorisation by properties, prime traits, dictionary order.', topics: ['All Topics', 'Semantic Classification', 'Number Sets', 'Alphabet Groups'] },
            { id: 'reas-03', name: 'Series (Number & Alphabet)', desc: 'Geometric gaps, alternating pattern chains, alphanumeric sequences.', topics: ['All Topics', 'Number Series', 'Letter Sequences', 'Continuous Pattern Series'] },
            { id: 'reas-04', name: 'Coding-Decoding', desc: 'Shift ciphers, symbol matrix assignment, sentence word coding.', topics: ['All Topics', 'Letter Coding', 'Direct Number Coding', 'Fictitious Language Coding'] },
            { id: 'reas-05', name: 'Blood Relations', desc: 'Family pedigree charts, coded pointer statements, direct introductions.', topics: ['All Topics', 'Direct Deciphering', 'Coded Blood Relations', 'Pointing Statements'] },
            { id: 'reas-06', name: 'Direction & Distance', desc: 'Shadow angles, Pythagoras turn paths, relative compass orientation.', topics: ['All Topics', 'Cardinal Turns', 'Pythagoras Paths', 'Shadows at Sunset/Sunrise'] },
            { id: 'reas-07', name: 'Order & Ranking', desc: 'Left/right position swaps, minimum overlap count in row queues.', topics: ['All Topics', 'Row Positional Swapping', 'Overlapping queues', 'Height/Weight Comparisons'] },
            { id: 'reas-08', name: 'Syllogism', desc: 'Venn-diagram method for statements like Some, All, No, Only A Few.', topics: ['All Topics', 'Standard Deductions', 'Possibility Cases', 'Only A Few Scenarios'] },
            { id: 'reas-09', name: 'Venn Diagrams', desc: 'Intersection of classifications, region deduction with count markers.', topics: ['All Topics', 'Geometric Intersections', 'Entity Classification'] },
            { id: 'reas-10', name: 'Dice & Cube', desc: 'Opposite face identification from open cube nets and multiple rotations.', topics: ['All Topics', 'Closed Dice Rotations', 'Open Net Folding', 'Painted Cubes'] },
            { id: 'reas-11', name: 'Clock & Calendar', desc: 'Angle between needles, leap year day deduction, century repeat dates.', topics: ['All Topics', 'Clock Angles & Overlaps', 'Odd Day Calendar Calculations'] },
            { id: 'reas-12', name: 'Non-Verbal Reasoning', desc: 'Mirror images, paper folding, embedded shapes, figure pattern series.', topics: ['All Topics', 'Mirror & Water Images', 'Paper Folding & Cutting', 'Embedded Figures', 'Figure Series'] },
            { id: 'reas-13', name: 'Critical Reasoning', desc: 'Statement & assumptions, course of action, cause & effect arguments.', topics: ['All Topics', 'Statement & Assumptions', 'Statement & Arguments', 'Cause & Effect'] }
          ]
        },
        {
          id: 'english',
          title: 'English Comprehension',
          icon: 'spellcheck',
          chapters: [
            { id: 'eng-01', name: 'Spotting the Error', desc: 'Subject-verb agreement, pronoun references, tenses and prepositions.', topics: ['All Topics', 'Subject Verb Agreement', 'Tense Consistency', 'Prepositional Usage'] },
            { id: 'eng-02', name: 'Sentence Improvement', desc: 'Phrase replacement, parallel structure, conditional clauses.', topics: ['All Topics', 'Grammar Correction', 'Idiomatic Replacements', 'Inversion Rules'] },
            { id: 'eng-03', name: 'Fill in the Blanks', desc: 'Single and double contextual word placement, phrasal verbs.', topics: ['All Topics', 'Vocabulary Based', 'Grammar Determiners', 'Phrasal Verbs'] },
            { id: 'eng-04', name: 'Synonyms & Antonyms', desc: 'Standard high-frequency vocabulary, nuanced context opposites.', topics: ['All Topics', 'Contextual Synonyms', 'High-Yield Antonyms', 'Root Words'] },
            { id: 'eng-05', name: 'One Word Substitution', desc: 'Phobias, manias, government forms, professional designations.', topics: ['All Topics', 'Persons & Professions', 'Beliefs & Systems', 'Literary Terms'] },
            { id: 'eng-06', name: 'Idioms & Phrases', desc: 'Popular figurative idioms, origin-based idioms, matching expressions.', topics: ['All Topics', 'Common Expressions', 'Animal & Color Idioms', 'Action Phrasals'] },
            { id: 'eng-07', name: 'Spelling Check', desc: 'Commonly misspelled academic words, silent letters, double consonants.', topics: ['All Topics', 'Double Letters Rules', 'Suffix Adjustments', 'Foreign Borrowings'] },
            { id: 'eng-08', name: 'Cloze Test', desc: 'Cohesive reading passages with missing blanks assessing context.', topics: ['All Topics', 'Narrative Passages', 'Factual Passages', 'Philosophical Tone'] },
            { id: 'eng-09', name: 'Reading Comprehension', desc: 'Direct questions, tone deduction, inference, main theme extraction.', topics: ['All Topics', 'Factual Inference', 'Theme & Tone', 'Vocabulary In Context'] },
            { id: 'eng-10', name: 'Para Jumbles (Sentence Rearrangement)', desc: 'Finding mandatory pairs, identifying opening anchors and chronological flow.', topics: ['All Topics', '4-Sentence Chains (PQRS)', 'Transition Word Clues', 'Opening Stems'] },
            { id: 'eng-11', name: 'Active & Passive Voice', desc: 'Transformation rules across past, present, modals, and imperatives.', topics: ['All Topics', 'Tense Conversions', 'Imperative Sentences', 'Interrogative Conversions'] },
            { id: 'eng-12', name: 'Direct & Indirect Speech', desc: 'Narration changes, reporting verb changes, pronoun shifts.', topics: ['All Topics', 'Assertive Sentences', 'Questions & Inversions', 'Exclamations'] },
            { id: 'eng-13', name: 'Noun & Pronoun Mastery', desc: 'Uncountable nouns, singular plurals, relative pronoun clauses.', topics: ['All Topics', 'Uncountable Noun Rules', 'Reflexive & Relative Pronouns'] },
            { id: 'eng-14', name: 'Adjective & Adverb Modifiers', desc: 'Degrees of comparison, squinting modifiers, position of adverbs.', topics: ['All Topics', 'Comparative Traps', 'Order of Adjectives', 'Inversion with Adverbs'] }
          ]
        },
        {
          id: 'ga',
          title: 'General Awareness',
          icon: 'public',
          chapters: [
            { id: 'ga-01', name: 'Ancient History', desc: 'Indus Valley Civilisation, Vedic Era, Buddhism & Jainism, Maurya & Gupta dynasties.', topics: ['All Topics', 'Indus Valley Civilisation', 'Buddhism & Jainism', 'Maurya & Gupta Rule'] },
            { id: 'ga-02', name: 'Medieval History', desc: 'Delhi Sultanate, Mughal Empire, Vijayanagara kingdom, religious bhakti movements.', topics: ['All Topics', 'Delhi Sultanate Dynasties', 'Mughal Architecture & Battles', 'Bhakti & Sufi Movement'] },
            { id: 'ga-03', name: 'Modern Indian History', desc: '1857 Revolt, Governor-Generals, Indian National Congress sessions, Freedom struggle.', topics: ['All Topics', '1857 Revolt & British Acts', 'INC Sessions & Resolutions', 'Gandhian Era & Movements'] },
            { id: 'ga-04', name: 'Indian Polity & Constitution', desc: 'Fundamental Rights, DPSP, Parliament structure, Amendments, Supreme Court.', topics: ['All Topics', 'Articles & Schedules', 'Parliament & President', 'Fundamental Rights', 'Key Amendments'] },
            { id: 'ga-05', name: 'Physical & Indian Geography', desc: 'River drainage basins, mountain passes, solar system, monsoon, soil types.', topics: ['All Topics', 'Rivers & Tributaries', 'Monsoon & Soil', 'National Parks & Wildlife', 'Solar System & Earth'] },
            { id: 'ga-06', name: 'Indian Economy', desc: 'Five-Year Plans, GDP/GNP metrics, Inflation, RBI Monetary policy, National Income.', topics: ['All Topics', 'Five Year Plans & NITI', 'RBI & Monetary Policy', 'Budget & Taxation Terms'] },
            { id: 'ga-07', name: 'Physics', desc: 'Newton laws, optics, sound frequencies, thermodynamics, SI units, friction.', topics: ['All Topics', 'Units & Measurements', 'Optics & Lenses', 'Work, Energy & Gravitation'] },
            { id: 'ga-08', name: 'Chemistry', desc: 'Periodic table periodic trends, acids-bases, common chemical formulas, ores and alloys.', topics: ['All Topics', 'Acids, Bases & Salts', 'Periodic Table Trends', 'Chemical Names & Alloys'] },
            { id: 'ga-09', name: 'Biology', desc: 'Cell structure, human anatomy, vitamins & deficiency diseases, plant physiology.', topics: ['All Topics', 'Human Organ Systems', 'Vitamins & Diseases', 'Cell Biology & Genetics'] },
            { id: 'ga-10', name: 'Static GK & Art / Culture', desc: 'Classical & folk dances, musical instruments, festivals, world heritage monuments.', topics: ['All Topics', 'Folk & Classical Dances', 'Musical Instruments & Exponents', 'Tribal Festivals', 'Temples & Heritage'] },
            { id: 'ga-11', name: 'Books & Authors', desc: 'Autobiographies of sports personalities, historical manuscripts, award-winning novels.', topics: ['All Topics', 'Historical Chronicles', 'Sportspersons Autobiographies', 'Recent Literary Awards'] },
            { id: 'ga-12', name: 'Current Affairs & Schemes', desc: 'Government welfare schemes, military drills, sports medals, international summits.', topics: ['All Topics', 'Central Government Schemes', 'Sports & Championships', 'Summits & Military Exercises'] }
          ]
        },
        {
          id: 'computer',
          title: 'Computer Knowledge',
          icon: 'terminal',
          chapters: [
            { id: 'comp-01', name: 'Basics of Computer & CPU Architecture', desc: 'Generations of computers, CPU registers, ALU, RAM vs ROM, motherboard buses.', topics: ['All Topics', 'Generations & Types', 'CPU Cache & Registers', 'Primary & Secondary Memory'] },
            { id: 'comp-02', name: 'Input, Output & Storage Devices', desc: 'Optical media, SSD interfaces, printer categories (laser, inkjet, dot-matrix).', topics: ['All Topics', 'Input Peripherals', 'Printers & Plotters', 'Magnetic & Optical Storage'] },
            { id: 'comp-03', name: 'Operating Systems & File Systems', desc: 'Process scheduling, Windows GUI, Linux shell commands, FAT32 vs NTFS.', topics: ['All Topics', 'OS Functions & Kernels', 'Windows Shortcuts & System Tools', 'File Systems (NTFS/FAT)'] },
            { id: 'comp-04', name: 'Microsoft Word Essentials', desc: 'Format ribbons, tables, macro triggers, mail merge, orientation shortcuts.', topics: ['All Topics', 'Document Formatting', 'Keyboard Shortcuts', 'Mail Merge & Macros'] },
            { id: 'comp-05', name: 'Microsoft Excel & Formulas', desc: 'Spreadsheet cell coordinates, VLOOKUP, SUMIFS, Pivot Tables, chart types.', topics: ['All Topics', 'Formula Syntax (VLOOKUP/IF)', 'Cell References ($A$1)', 'Pivot Tables & Charts'] },
            { id: 'comp-06', name: 'Computer Networks & Topologies', desc: 'LAN/WAN, star and mesh topologies, OSI 7 layers, MAC addressing.', topics: ['All Topics', 'Network Topologies', 'OSI Model Layers', 'Network Devices (Routers/Switches)'] },
            { id: 'comp-07', name: 'Internet, Email & Protocols', desc: 'HTTP, HTTPS, FTP, DNS, SMTP, POP3, IMAP, search indexing, URL components.', topics: ['All Topics', 'Internet Protocols', 'Email Client Protocols', 'Browsers & Domain Names'] },
            { id: 'comp-08', name: 'Cyber Security & Malware', desc: 'Trojans, worms, ransomware, phishing, firewall setups, symmetric encryption.', topics: ['All Topics', 'Malware Types & Ransomware', 'Phishing & Social Engineering', 'Firewalls & Antivirus'] },
            { id: 'comp-09', name: 'Keyboard Shortcuts & Extensions', desc: 'Essential Windows keys, common file extension associations (.exe, .pdf, .docx, .tar).', topics: ['All Topics', 'Universal Windows Shortcuts', 'File Extension Formats'] }
          ]
        }
      ];

      // State
      var currentSubjectId = 'quant';
      var currentChapterId = 'quant-03';
      var currentTopicFilter = 'All Topics';
      var searchQuery = '';

      // DOM Elements
      var subjectNavList = document.getElementById('subject-nav-list');
      var activeSubjectBadge = document.getElementById('active-subject-badge');
      var chaptersListContainer = document.getElementById('chapters-list-container');
      var chapterSearchInput = document.getElementById('chapter-search-input');
      var clearSearchBtn = document.getElementById('clear-search-btn');
      var resetFilterBtn = document.getElementById('reset-filter-btn');
      var filteredCountLabel = document.getElementById('filtered-count-label');
      var noChaptersState = document.getElementById('no-chapters-state');
      var emptyClearBtn = document.getElementById('empty-clear-btn');

      var detailSubjectPill = document.getElementById('detail-subject-pill');
      var detailChapterTitle = document.getElementById('detail-chapter-title');
      var detailChapterDesc = document.getElementById('detail-chapter-desc');
      var topicsChipsContainer = document.getElementById('topics-chips-container');
      var selectedScopeCounter = document.getElementById('selected-scope-counter');
      var startBtnLabel = document.getElementById('start-btn-label');
      var startPracticeAction = document.getElementById('start-practice-action');

      var statusToast = document.getElementById('status-toast');
      var toastMessage = document.getElementById('toast-message');
      var toastIcon = document.getElementById('toast-icon');
      var toastClose = document.getElementById('toast-close');
      var toastTimer = null;

      function showToast(message, icon) {
        if (!statusToast) return;
        if (toastTimer) clearTimeout(toastTimer);
        toastMessage.textContent = message;
        toastIcon.textContent = icon || 'info';
        statusToast.classList.remove('translate-y-16', 'opacity-0', 'pointer-events-none');
        statusToast.classList.add('translate-y-0', 'opacity-100');
        toastTimer = setTimeout(hideToast, 4000);
      }

      function hideToast() {
        if (!statusToast) return;
        statusToast.classList.remove('translate-y-0', 'opacity-100');
        statusToast.classList.add('translate-y-16', 'opacity-0', 'pointer-events-none');
      }

      if (toastClose) {
        toastClose.addEventListener('click', hideToast);
      }

      // 2. Safe Subject Renderer
      function renderSubjects() {
        if (!subjectNavList) return;
        subjectNavList.innerHTML = '';

        subjectsData.forEach(function(sub) {
          var isActive = sub.id === currentSubjectId;
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.role = 'tab';
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
          btn.setAttribute('data-subject-id', sub.id);

          var baseClasses = 'shrink-0 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2.5 transition-all text-left border min-h-[44px]';
          var activeClasses = 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-sm font-semibold';
          var inactiveClasses = 'bg-white text-[#0F172A] border-[#E2E8F0] hover:bg-slate-50 font-medium';
          btn.className = baseClasses + ' ' + (isActive ? activeClasses : inactiveClasses);

          var iconSpan = document.createElement('span');
          iconSpan.className = 'material-symbols-outlined text-[18px] shrink-0';
          iconSpan.textContent = sub.icon;
          btn.appendChild(iconSpan);

          var textWrap = document.createElement('div');
          textWrap.className = 'flex flex-col min-w-0';

          var titleSpan = document.createElement('span');
          titleSpan.className = 'truncate font-medium';
          titleSpan.textContent = sub.title;
          textWrap.appendChild(titleSpan);

          var countBadge = document.createElement('span');
          countBadge.className = 'text-xs ' + (isActive ? 'text-blue-100' : 'text-[#475569]');
          countBadge.textContent = sub.chapters.length + ' chapters';
          textWrap.appendChild(countBadge);

          btn.appendChild(textWrap);

          btn.addEventListener('click', function() {
            if (currentSubjectId === sub.id) return;
            currentSubjectId = sub.id;
            currentTopicFilter = 'All Topics';
            searchQuery = '';
            if (chapterSearchInput) chapterSearchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            if (resetFilterBtn) resetFilterBtn.classList.add('hidden');

            var currentSubObj = subjectsData.find(function(s) { return s.id === currentSubjectId; });
            if (currentSubObj && currentSubObj.chapters.length > 0) {
              currentChapterId = currentSubObj.chapters[0].id;
            }

            renderSubjects();
            renderChapters();
            renderDetailPanel();
          });

          subjectNavList.appendChild(btn);
        });

        var activeSub = subjectsData.find(function(s) { return s.id === currentSubjectId; });
        if (activeSub && activeSubjectBadge) {
          activeSubjectBadge.textContent = activeSub.title + ' (' + activeSub.chapters.length + ' chapters)';
        }
      }

      function getFilteredChapters() {
        var currentSub = subjectsData.find(function(s) { return s.id === currentSubjectId; });
        if (!currentSub) return [];

        var list = currentSub.chapters;
        if (searchQuery.trim() !== '') {
          var q = searchQuery.toLowerCase().trim();
          list = list.filter(function(ch) {
            return ch.name.toLowerCase().includes(q) ||
                   ch.desc.toLowerCase().includes(q) ||
                   ch.topics.some(function(t) { return t.toLowerCase().includes(q); });
          });
        }
        return list;
      }

      // 3. Safe Chapter Renderer (Purged 'Not Started' badge & Safe arrow DOM)
      function renderChapters() {
        if (!chaptersListContainer) return;
        chaptersListContainer.innerHTML = '';
        var currentSub = subjectsData.find(function(s) { return s.id === currentSubjectId; });
        var filtered = getFilteredChapters();

        if (filteredCountLabel) {
          filteredCountLabel.textContent = filtered.length + ' of ' + (currentSub ? currentSub.chapters.length : 0) + ' Chapters';
        }

        if (filtered.length === 0) {
          chaptersListContainer.classList.add('hidden');
          if (noChaptersState) {
            noChaptersState.classList.remove('hidden');
            noChaptersState.classList.add('flex');
          }
          return;
        }

        chaptersListContainer.classList.remove('hidden');
        if (noChaptersState) {
          noChaptersState.classList.add('hidden');
          noChaptersState.classList.remove('flex');
        }

        if (!filtered.some(function(c) { return c.id === currentChapterId; }) && filtered.length > 0) {
          currentChapterId = filtered[0].id;
          currentTopicFilter = 'All Topics';
          renderDetailPanel();
        }

        filtered.forEach(function(ch, idx) {
          var isSelected = ch.id === currentChapterId;
          var card = document.createElement('div');
          card.role = 'button';
          card.tabIndex = 0;
          card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
          card.setAttribute('data-chapter-id', ch.id);

          var baseClasses = 'p-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 text-left border min-h-[44px]';
          var selectedClasses = 'bg-blue-50/70 border-[#1D4ED8] ring-1 ring-[#1D4ED8] text-[#0F172A] shadow-sm';
          var unselectedClasses = 'bg-white border-[#E2E8F0] text-[#0F172A] hover:border-slate-300 shadow-sm';
          card.className = baseClasses + ' ' + (isSelected ? selectedClasses : unselectedClasses);

          var leftWrap = document.createElement('div');
          leftWrap.className = 'flex items-start gap-3 min-w-0 flex-1';

          var indexPill = document.createElement('div');
          indexPill.className = 'w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-semibold ' +
            (isSelected ? 'bg-[#1D4ED8] text-white' : 'bg-slate-100 text-[#475569] border border-[#E2E8F0]');
          indexPill.textContent = String(idx + 1).padStart(2, '0');
          leftWrap.appendChild(indexPill);

          var textCol = document.createElement('div');
          textCol.className = 'flex flex-col min-w-0 space-y-0.5';

          var titleEl = document.createElement('h3');
          titleEl.className = 'text-sm text-[#0F172A] font-semibold truncate';
          titleEl.textContent = ch.name;
          textCol.appendChild(titleEl);

          var descEl = document.createElement('p');
          descEl.className = 'text-xs text-[#475569] line-clamp-1 leading-snug';
          descEl.textContent = ch.desc;
          textCol.appendChild(descEl);

          leftWrap.appendChild(textCol);
          card.appendChild(leftWrap);

          // Right arrow constructed safely via createElement
          var arrowWrap = document.createElement('div');
          arrowWrap.className = 'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ' + (isSelected ? 'text-[#1D4ED8]' : 'text-slate-400');
          var arrowIcon = document.createElement('span');
          arrowIcon.className = 'material-symbols-outlined text-[20px]';
          arrowIcon.textContent = isSelected ? 'arrow_forward' : 'chevron_right';
          arrowWrap.appendChild(arrowIcon);
          card.appendChild(arrowWrap);

          var handleSelect = function() {
            if (currentChapterId === ch.id) return;
            currentChapterId = ch.id;
            currentTopicFilter = 'All Topics';
            renderChapters();
            renderDetailPanel();
          };

          card.addEventListener('click', handleSelect);
          card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSelect();
            }
          });

          chaptersListContainer.appendChild(card);
        });
      }

      // 4. Safe Topic Chips Renderer with 44px min touch target
      function renderTopics(topics) {
        if (!topicsChipsContainer) return;
        topicsChipsContainer.innerHTML = '';

        topics.forEach(function(topic) {
          var isTopicActive = topic === currentTopicFilter;
          var chip = document.createElement('button');
          chip.type = 'button';
          chip.setAttribute('aria-pressed', isTopicActive ? 'true' : 'false');

          var chipBase = 'min-h-[44px] h-[44px] px-3.5 py-2 inline-flex items-center justify-center text-sm font-medium rounded-lg transition-all border shrink-0';
          var chipActive = 'bg-[#1D4ED8] text-white border-[#1D4ED8] font-semibold shadow-sm';
          var chipInactive = 'bg-slate-100 text-[#0F172A] border-[#E2E8F0] hover:bg-slate-200';
          chip.className = chipBase + ' ' + (isTopicActive ? chipActive : chipInactive);
          chip.textContent = topic;

          chip.addEventListener('click', function() {
            currentTopicFilter = topic;
            if (selectedScopeCounter) selectedScopeCounter.textContent = topic;
            renderTopics(topics);
            showToast('Practice scope focused: ' + topic, 'filter_alt');
          });

          topicsChipsContainer.appendChild(chip);
        });
      }

      // 5. Detail Panel Renderer
      function renderDetailPanel() {
        var currentSub = subjectsData.find(function(s) { return s.id === currentSubjectId; });
        if (!currentSub) return;
        var currentChapter = currentSub.chapters.find(function(c) {
          return c.id === currentChapterId;
        });
        if (!currentChapter) return;

        if (detailSubjectPill) detailSubjectPill.textContent = currentSub.title;
        if (detailChapterTitle) detailChapterTitle.textContent = currentChapter.name;
        if (detailChapterDesc) detailChapterDesc.textContent = currentChapter.desc;

        renderTopics(currentChapter.topics);

        if (selectedScopeCounter) selectedScopeCounter.textContent = currentTopicFilter;

        if (startBtnLabel) {
          startBtnLabel.textContent = 'Start Practice: ' + currentChapter.name + ' (Demo)';
        }
      }

      // Search and Filter Listeners
      if (chapterSearchInput) {
        chapterSearchInput.addEventListener('input', function(e) {
          searchQuery = e.target.value;
          if (searchQuery.length > 0) {
            if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
            if (resetFilterBtn) resetFilterBtn.classList.remove('hidden');
          } else {
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            if (resetFilterBtn) resetFilterBtn.classList.add('hidden');
          }
          renderChapters();
        });
      }

      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
          searchQuery = '';
          if (chapterSearchInput) {
            chapterSearchInput.value = '';
            chapterSearchInput.focus();
          }
          clearSearchBtn.classList.add('hidden');
          if (resetFilterBtn) resetFilterBtn.classList.add('hidden');
          renderChapters();
        });
      }

      if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', function() {
          searchQuery = '';
          if (chapterSearchInput) chapterSearchInput.value = '';
          if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
          resetFilterBtn.classList.add('hidden');
          renderChapters();
        });
      }

      if (emptyClearBtn) {
        emptyClearBtn.addEventListener('click', function() {
          searchQuery = '';
          if (chapterSearchInput) chapterSearchInput.value = '';
          if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
          if (resetFilterBtn) resetFilterBtn.classList.add('hidden');
          renderChapters();
        });
      }

      // 6. Mobile More Bottom Sheet Drawer
      var moreSheet = document.getElementById('more-sheet');
      var moreSheetBackdrop = document.getElementById('more-sheet-backdrop');
      var moreSheetPanel = document.getElementById('more-sheet-panel');
      var openMoreSheetBtn = document.getElementById('open-more-sheet-btn');
      var closeMoreSheetBtn = document.getElementById('close-more-sheet-btn');
      var prevBodyOverflow = '';

      function openDrawer() {
        if (!moreSheet) return;
        openMoreSheetBtn.setAttribute('aria-expanded', 'true');
        prevBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        moreSheet.classList.remove('hidden');
        requestAnimationFrame(function() {
          if (moreSheetBackdrop) moreSheetBackdrop.classList.remove('opacity-0');
          if (moreSheetPanel) {
            moreSheetPanel.classList.remove('translate-y-full');
            moreSheetPanel.classList.add('translate-y-0');
          }
          if (closeMoreSheetBtn) closeMoreSheetBtn.focus();
        });
      }

      function closeDrawer() {
        if (!moreSheet) return;
        openMoreSheetBtn.setAttribute('aria-expanded', 'false');
        if (moreSheetBackdrop) moreSheetBackdrop.classList.add('opacity-0');
        if (moreSheetPanel) {
          moreSheetPanel.classList.remove('translate-y-0');
          moreSheetPanel.classList.add('translate-y-full');
        }
        setTimeout(function() {
          moreSheet.classList.add('hidden');
          document.body.style.overflow = prevBodyOverflow;
          if (openMoreSheetBtn) openMoreSheetBtn.focus();
        }, 220);
      }

      if (openMoreSheetBtn) openMoreSheetBtn.addEventListener('click', openDrawer);
      if (closeMoreSheetBtn) closeMoreSheetBtn.addEventListener('click', closeDrawer);
      if (moreSheetBackdrop) moreSheetBackdrop.addEventListener('click', closeDrawer);

      window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && moreSheet && !moreSheet.classList.contains('hidden')) {
          closeDrawer();
        }
      });

      // 7. Global Prototype Navigation Intercept
      document.addEventListener('click', function(e) {
        var link = e.target.closest('a[href="#"], button[data-nav-name]');
        if (!link) return;

        if (link.getAttribute('aria-current') === 'page') {
          e.preventDefault();
          return;
        }

        var navName = link.getAttribute('data-nav-name');
        if (navName) {
          e.preventDefault();
          showToast('Prototype preview — ' + navName + ' screen not loaded in this view.', 'info');
          return;
        }

        if (link.getAttribute('href') === '#') {
          e.preventDefault();
        }
      });

      // Open a clearly labelled generic CBT demo for the selected chapter.
      if (startPracticeAction) {
        startPracticeAction.addEventListener('click', function () {
          var selectedSubject = subjectsData.find(function (subject) { return subject.id === currentSubjectId; });
          var selectedChapter = selectedSubject && selectedSubject.chapters.find(function (chapter) { return chapter.id === currentChapterId; });
          if (!selectedSubject || !selectedChapter) {
            showToast('Select a chapter before opening the practice preview.', 'info');
            return;
          }

          var previewContext = {
            testId: 'chapter-' + currentChapterId,
            title: selectedChapter.name + ' — ' + selectedSubject.title,
            category: 'Chapter Practice Preview',
            examId: 'cgl',
            mode: 'study',
            durationMinutes: 20,
            source: 'chapter-tests'
          };
          try { localStorage.setItem('sscflix-active-test-preview', JSON.stringify(previewContext)); } catch (error) {}
          window.SSCFlixRouter.navigate("/cbt");
        });
      }

      // Initial Render
      renderSubjects();
      renderChapters();
      renderDetailPanel();
    })();
  
if(typeof showToast==='function')window["showToast"]=showToast;
if(typeof hideToast==='function')window["hideToast"]=hideToast;
if(typeof renderSubjects==='function')window["renderSubjects"]=renderSubjects;
if(typeof getFilteredChapters==='function')window["getFilteredChapters"]=getFilteredChapters;
if(typeof renderChapters==='function')window["renderChapters"]=renderChapters;
if(typeof renderTopics==='function')window["renderTopics"]=renderTopics;
if(typeof renderDetailPanel==='function')window["renderDetailPanel"]=renderDetailPanel;
if(typeof openDrawer==='function')window["openDrawer"]=openDrawer;
if(typeof closeDrawer==='function')window["closeDrawer"]=closeDrawer;
})();

// chapter-tests page script 2
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