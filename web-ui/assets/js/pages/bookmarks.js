// bookmarks page script 1
(function(){

    (function () {
      'use strict';

      // Canonical In-Memory Data
      let bookmarksData = [
        {
          questionId: "QID-CGL-2409",
          exam: "SSC CGL",
          subject: "Quantitative Aptitude",
          chapter: "Quantitative Aptitude - Arithmetic & Percentages",
          chapterShort: "Arithmetic & Percentages",
          sourceType: "Mock Test",
          sourceTitle: "Tier-1 Full Length Mock 04",
          questionText: "A trader sells two articles at ₹4,800 each. On one, he gains 20% and on the other, he loses 20%. What is his overall gain or loss percentage in the complete transaction?",
          options: [
            "No gain, no loss (0%)",
            "4% gain",
            "4% loss",
            "2.5% loss"
          ],
          correctOptionIndex: 2,
          explanation: "When two articles are sold at the same selling price (SP) such that one yields a gain of x% and the other a loss of x%, the net result is always a loss given by:\n\nNet Loss % = (x / 10)² %\n= (20 / 10)² %\n= (2)² % = 4% Loss.\n\nAlternative check:\nCost price 1 = ₹4,800 / 1.2 = ₹4,000\nCost price 2 = ₹4,800 / 0.8 = ₹6,000\nTotal CP = ₹10,000 | Total SP = ₹9,600\nLoss = ₹400 on ₹10,000 = exactly 4%."
        },
        {
          questionId: "QID-CHSL-3180",
          exam: "SSC CHSL",
          subject: "General Intelligence & Reasoning",
          chapter: "General Intelligence & Reasoning - Syllogism & Logic",
          chapterShort: "Syllogism & Logic",
          sourceType: "PYQ Paper",
          sourceTitle: "CHSL Tier-1 Shift 2 (2023)",
          questionText: "Statements:\n1. All cats are dogs.\n2. Some dogs are birds.\n3. No bird is a reptile.\n\nConclusions:\nI. Some dogs are not reptiles.\nII. Some cats being birds is a possibility.\nIII. No cat is a reptile.",
          options: [
            "Only Conclusion I follows",
            "Both Conclusions I and II follow",
            "Only Conclusion II follows",
            "Conclusions I, II, and III all follow"
          ],
          correctOptionIndex: 1,
          explanation: "Analysis of conclusions:\n- Conclusion I: Some dogs are birds, and no bird is a reptile. Thus, the specific portion of dogs that are birds can never be reptiles. Therefore, 'Some dogs are not reptiles' is definitely TRUE.\n- Conclusion II: There is no direct negative relation between 'cats' and 'birds'. Hence, the possibility statement 'Some cats being birds is a possibility' is completely VALID.\n- Conclusion III: 'No cat is a reptile' is not necessarily true as there is no negative constraint directly given between cats and reptiles.\nHence, Conclusions I and II follow."
        },
        {
          questionId: "QID-CPO-1092",
          exam: "SSC CPO",
          subject: "General Awareness",
          chapter: "General Awareness - Modern Indian History",
          chapterShort: "Modern Indian History",
          sourceType: "PYQ Paper",
          sourceTitle: "CPO Sub-Inspector Tier-1 2022",
          questionText: "Who among the following presided over the historic Karachi Session of the Indian National Congress in 1931, where the Resolution on Fundamental Rights and the National Economic Programme was formally endorsed?",
          options: [
            "Jawaharlal Nehru",
            "Sardar Vallabhbhai Patel",
            "Subhash Chandra Bose",
            "Dr. Rajendra Prasad"
          ],
          correctOptionIndex: 1,
          explanation: "The historic Karachi Session of the Indian National Congress (March 1931) was presided over by Sardar Vallabhbhai Patel. The session adopted resolutions on Fundamental Rights and the National Economic Programme, originally drafted by Pandit Jawaharlal Nehru."
        },
        {
          questionId: "QID-CGL-8422",
          exam: "SSC CGL",
          subject: "English Comprehension",
          chapter: "English Comprehension - Sentence Correction",
          chapterShort: "Sentence Correction",
          sourceType: "Mock Test",
          sourceTitle: "SSC CGL Tier-2 Advance Sectional Test 02",
          questionText: "Identify the grammatically correct replacement for the bracketed portion:\n\n'Hardly had the invigilator [distributed the examination booklets when] the fire alarm sounded loudly across the campus hall.'",
          options: [
            "distributed the examination booklets then",
            "distribute the examination booklets when",
            "distributed the examination booklets when (No substitution required)",
            "had distributed the examination booklets than"
          ],
          correctOptionIndex: 2,
          explanation: "Correlative Conjunction Rule:\n'Hardly... when' and 'Scarcely... when' are paired together with past perfect inverted syntax.\n'No sooner... than' is paired with 'than'.\nHere, 'Hardly had + Subject + V3 (distributed) + Object + when' is strictly correct as given. Hence, No substitution required."
        },
        {
          questionId: "QID-MTS-4419",
          exam: "SSC MTS",
          subject: "Computer Knowledge",
          chapter: "Computer Knowledge - Hardware & Networking",
          chapterShort: "Hardware & Networking",
          sourceType: "Chapter Test",
          sourceTitle: "Computer Fundamentals Diagnostic Drill",
          questionText: "Which of the following layers of the Open Systems Interconnection (OSI) reference model is directly responsible for logical node-to-node addressing (IP Addressing) and packet routing across heterogeneous networks?",
          options: [
            "Data Link Layer (Layer 2)",
            "Transport Layer (Layer 4)",
            "Network Layer (Layer 3)",
            "Session Layer (Layer 5)"
          ],
          correctOptionIndex: 2,
          explanation: "The Network Layer (Layer 3) handles end-to-end packet delivery, logical addressing (IPv4/IPv6), subnetting, and optimal path routing via routers. Layer 2 governs physical MAC addressing and framing, while Layer 4 oversees segment reliability and port numbering."
        },
        {
          questionId: "QID-CGL-5501",
          exam: "SSC CGL",
          subject: "Quantitative Aptitude",
          chapter: "Quantitative Aptitude - Geometry & Mensuration",
          chapterShort: "Geometry & Mensuration",
          sourceType: "Chapter Test",
          sourceTitle: "Circle Theorems Mastery Chapter Test",
          questionText: "In a circle with centre O and radius 13 cm, a chord AB of length 24 cm is drawn. Another chord CD is parallel to AB and lies on the opposite side of the centre with a distance of 17 cm between chords AB and CD. What is the length of chord CD?",
          options: [
            "10 cm",
            "12 cm",
            "14 cm",
            "16 cm"
          ],
          correctOptionIndex: 0,
          explanation: "1. Perpendicular distance from centre O to chord AB:\nd1 = √(R² - (AB/2)²) = √(13² - 12²) = √(169 - 144) = √25 = 5 cm.\n\n2. Since chords lie on opposite sides of centre O, the total distance between them is d1 + d2 = 17 cm.\nThus, d2 = 17 - 5 = 12 cm.\n\n3. Half-length of chord CD = √(R² - d2²) = √(13² - 12²) = √25 = 5 cm.\nTherefore, total length of chord CD = 2 × 5 = 10 cm."
        }
      ];

      // Filters State
      let filterExamVal = "all";
      let filterChapterVal = "all";
      let filterSourceVal = "all";

      // Track removal context
      let pendingRemovalId = null;
      let removalOrigin = null; // 'card' or 'modal'
      let activeDetailQuestion = null;

      // Elements
      const questionsContainer = document.getElementById("questions-list-container");
      const emptyStateCard = document.getElementById("empty-state-card");
      const emptyStateIcon = document.getElementById("empty-state-icon");
      const emptyStateTitle = document.getElementById("empty-state-title");
      const emptyStateDesc = document.getElementById("empty-state-desc");
      const emptyStateActionBtn = document.getElementById("empty-state-action-btn");
      const resultsCountText = document.getElementById("results-count-text");
      const filteredIndicator = document.getElementById("filtered-indicator");
      const headerCountBadge = document.getElementById("header-count-badge");
      const practiceActionBtn = document.getElementById("practice-action-btn");
      const practiceBtnLabel = document.getElementById("practice-btn-label");
      const sheetBookmarkCount = document.getElementById("sheet-bookmark-count");
      const savedQuestionsHeading = document.getElementById("saved-questions-heading");

      // Filter Inputs
      const filterExam = document.getElementById("filter-exam");
      const filterChapter = document.getElementById("filter-chapter");
      const filterSource = document.getElementById("filter-source");
      const resetFiltersBtn = document.getElementById("reset-filters-btn");

      // Question Modal
      const questionModal = document.getElementById("question-modal");
      const modalBackdrop = document.getElementById("modal-backdrop");
      const modalPanel = document.getElementById("modal-panel");
      const modalCloseBtn = document.getElementById("modal-close-btn");
      const modalDismissBtn = document.getElementById("modal-dismiss-btn");
      const modalRemoveBookmarkBtn = document.getElementById("modal-remove-bookmark-btn");
      const modalExamBadge = document.getElementById("modal-exam-badge");
      const modalChapterBadge = document.getElementById("modal-chapter-badge");
      const modalSourceBadge = document.getElementById("modal-source-badge");
      const modalSourceTitle = document.getElementById("modal-source-title");
      const modalQid = document.getElementById("modal-qid");
      const modalQuestionStatement = document.getElementById("modal-question-statement");
      const modalOptionsList = document.getElementById("modal-options-list");
      const modalExplanationBody = document.getElementById("modal-explanation-body");

      // Confirm Modal
      const confirmModal = document.getElementById("confirm-modal");
      const confirmBackdrop = document.getElementById("confirm-backdrop");
      const confirmPanel = document.getElementById("confirm-panel");
      const confirmCancelBtn = document.getElementById("confirm-cancel-btn");
      const confirmExecuteBtn = document.getElementById("confirm-execute-btn");
      const confirmQidTag = document.getElementById("confirm-qid-tag");

      // Mobile More Sheet
      const moreSheet = document.getElementById("more-sheet");
      const moreSheetBackdrop = document.getElementById("more-sheet-backdrop");
      const moreSheetPanel = document.getElementById("more-sheet-panel");
      const openMoreSheetBtn = document.getElementById("open-more-sheet-btn");
      const closeMoreSheetBtn = document.getElementById("close-more-sheet-btn");

      // Toast
      const toast = document.getElementById("toast");
      const toastMessage = document.getElementById("toast-message");
      const toastIcon = document.getElementById("toast-icon");
      let toastTimer = null;

      function showToast(msg, icon) {
        if (toastTimer) clearTimeout(toastTimer);
        toastMessage.textContent = msg;
        toastIcon.textContent = icon || "info";

        toast.classList.remove("translate-y-12", "opacity-0", "pointer-events-none");
        toast.classList.add("translate-y-0", "opacity-100");

        toastTimer = setTimeout(() => {
          toast.classList.remove("translate-y-0", "opacity-100");
          toast.classList.add("translate-y-12", "opacity-0", "pointer-events-none");
        }, 3600);
      }

      /* ============================================================
         1. OverlayManager: Centralized stack & nested scroll lock
         ============================================================ */
      const OverlayManager = {
        stack: [],
        originalBodyOverflow: '',
        isLocked: false,

        push(entry) {
          // entry: { id, element, returnTarget, closeHandler }
          if (this.stack.length === 0 && !this.isLocked) {
            this.originalBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            this.isLocked = true;
          }
          this.stack.push(entry);
        },

        pop() {
          const removed = this.stack.pop();
          if (this.stack.length === 0 && this.isLocked) {
            document.body.style.overflow = this.originalBodyOverflow;
            this.isLocked = false;
          }
          return removed;
        },

        top() {
          return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        },

        find(id) {
          return this.stack.find(item => item.id === id);
        },

        removeById(id) {
          const idx = this.stack.findIndex(item => item.id === id);
          if (idx !== -1) {
            const removed = this.stack.splice(idx, 1)[0];
            if (this.stack.length === 0 && this.isLocked) {
              document.body.style.overflow = this.originalBodyOverflow;
              this.isLocked = false;
            }
            return removed;
          }
          return null;
        }
      };

      // Focus Trapping Helper restricted to currently active overlay
      function trapFocus(container, event) {
        if (event.key !== "Tab") return;
        const focusable = container.querySelectorAll('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
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

      // Filter Logic
      function getFilteredQuestions() {
        return bookmarksData.filter(item => {
          const matchExam = (filterExamVal === "all" || item.exam === filterExamVal);
          const matchChapter = (filterChapterVal === "all" || item.chapter === filterChapterVal);
          const matchSource = (filterSourceVal === "all" || item.sourceType === filterSourceVal);
          return matchExam && matchChapter && matchSource;
        });
      }

      function updateHeaderAndCTA() {
        const total = bookmarksData.length;
        const filtered = getFilteredQuestions();
        const isFiltered = (filterExamVal !== "all" || filterChapterVal !== "all" || filterSourceVal !== "all");

        headerCountBadge.textContent = `${total} Total`;
        sheetBookmarkCount.textContent = total;

        if (isFiltered) {
          filteredIndicator.classList.remove("hidden");
        } else {
          filteredIndicator.classList.add("hidden");
        }

        if (total === 0) {
          practiceActionBtn.disabled = true;
          practiceActionBtn.classList.add("opacity-50", "cursor-not-allowed");
          practiceBtnLabel.textContent = "Practice Saved Questions (0)";
        } else if (isFiltered) {
          practiceActionBtn.disabled = (filtered.length === 0);
          if (filtered.length === 0) {
            practiceActionBtn.classList.add("opacity-50", "cursor-not-allowed");
            practiceBtnLabel.textContent = "Practice Saved Questions (0)";
          } else {
            practiceActionBtn.classList.remove("opacity-50", "cursor-not-allowed");
            practiceBtnLabel.textContent = `Practice Saved Questions (${filtered.length})`;
          }
        } else {
          practiceActionBtn.disabled = false;
          practiceActionBtn.classList.remove("opacity-50", "cursor-not-allowed");
          practiceBtnLabel.textContent = `Practice Saved Questions (${total})`;
        }
      }

      function renderQuestions() {
        const filtered = getFilteredQuestions();
        questionsContainer.replaceChildren();
        updateHeaderAndCTA();

        // 1. Overall Empty State
        if (bookmarksData.length === 0) {
          questionsContainer.classList.add("hidden");
          emptyStateCard.classList.remove("hidden");
          emptyStateIcon.textContent = "bookmark_border";
          emptyStateTitle.textContent = "No saved questions yet";
          emptyStateDesc.textContent = "Questions you bookmark while studying will appear here for quick revision.";
          emptyStateActionBtn.textContent = "Explore Questions";
          emptyStateActionBtn.onclick = function() {
            showToast("Prototype only — exploring question catalogs is not connected yet.", "explore");
          };
          resultsCountText.textContent = "0 questions available";
          return;
        }

        // 2. Filter-Specific Empty State
        if (filtered.length === 0) {
          questionsContainer.classList.add("hidden");
          emptyStateCard.classList.remove("hidden");
          emptyStateIcon.textContent = "filter_alt_off";
          emptyStateTitle.textContent = "No matching questions";
          emptyStateDesc.textContent = "Try changing your filters or reset them to see your saved questions.";
          emptyStateActionBtn.textContent = "Reset Filters";
          emptyStateActionBtn.onclick = resetFilters;
          resultsCountText.textContent = "Showing 0 questions";
          return;
        }

        // 3. Render Card List
        emptyStateCard.classList.add("hidden");
        questionsContainer.classList.remove("hidden");
        resultsCountText.textContent = `Showing ${filtered.length} question${filtered.length === 1 ? '' : 's'}`;

        filtered.forEach((q, index) => {
          const card = document.createElement("div");
          card.setAttribute("data-qid", q.questionId);
          card.className = "bg-brand-surface border border-brand-border rounded-lg p-4 sm:p-5 shadow-sm hover:border-slate-300 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-4";

          // Left Details
          const leftCol = document.createElement("div");
          leftCol.className = "flex items-start gap-3.5 min-w-0 flex-1";

          // Index sequence badge
          const indexBadge = document.createElement("div");
          indexBadge.className = "w-8 h-8 rounded-lg bg-slate-100 text-brand-textSecondary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200";
          indexBadge.textContent = `Q.${index + 1}`;
          leftCol.appendChild(indexBadge);

          // Content Box
          const content = document.createElement("div");
          content.className = "space-y-2 min-w-0 flex-1";

          // Chips row
          const chipRow = document.createElement("div");
          chipRow.className = "flex flex-wrap items-center gap-1.5";

          const examChip = document.createElement("span");
          examChip.className = "px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-brand-blue border border-blue-200";
          examChip.textContent = q.exam;
          chipRow.appendChild(examChip);

          const chapterChip = document.createElement("span");
          chapterChip.className = "px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-brand-textSecondary border border-slate-200";
          chapterChip.textContent = q.chapterShort;
          chipRow.appendChild(chapterChip);

          const sourceChip = document.createElement("span");
          sourceChip.className = "px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200";
          sourceChip.textContent = q.sourceType;
          chipRow.appendChild(sourceChip);

          content.appendChild(chipRow);

          // Question Statement
          const questionP = document.createElement("p");
          questionP.className = "text-sm text-brand-textPrimary font-medium line-clamp-3 leading-relaxed";
          questionP.textContent = q.questionText;
          content.appendChild(questionP);

          // Meta footer (QID & source test name)
          const metaFooter = document.createElement("div");
          metaFooter.className = "text-xs text-brand-textSecondary font-mono pt-0.5";
          metaFooter.textContent = `${q.questionId} • ${q.sourceTitle}`;
          content.appendChild(metaFooter);

          leftCol.appendChild(content);
          card.appendChild(leftCol);

          // Actions Column
          const actionsCol = document.createElement("div");
          actionsCol.className = "flex items-center md:flex-col justify-end gap-2 flex-shrink-0 pt-2 md:pt-0";

          // Open Question
          const openBtn = document.createElement("button");
          openBtn.type = "button";
          openBtn.className = "min-h-[44px] px-3.5 py-2 rounded-lg bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white border border-blue-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue card-open-btn";
          
          const openIcon = document.createElement("span");
          openIcon.className = "material-symbols-outlined text-[18px]";
          openIcon.textContent = "visibility";
          openBtn.appendChild(openIcon);

          const openTxt = document.createElement("span");
          openTxt.textContent = "Open Question";
          openBtn.appendChild(openTxt);

          openBtn.addEventListener("click", () => {
            openDetailModal(q, openBtn);
          });
          actionsCol.appendChild(openBtn);

          // Remove Bookmark
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "min-h-[44px] px-3 py-2 rounded-lg text-brand-textSecondary hover:text-brand-destructive hover:bg-red-50 text-xs font-medium flex items-center justify-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-destructive card-remove-btn";
          removeBtn.setAttribute("aria-label", `Remove bookmark ${q.questionId}`);

          const removeIcon = document.createElement("span");
          removeIcon.className = "material-symbols-outlined text-[18px]";
          removeIcon.textContent = "bookmark_remove";
          removeBtn.appendChild(removeIcon);

          const removeTxt = document.createElement("span");
          removeTxt.textContent = "Remove";
          removeBtn.appendChild(removeTxt);

          removeBtn.addEventListener("click", () => {
            openConfirmDialog(q.questionId, removeBtn, 'card');
          });
          actionsCol.appendChild(removeBtn);

          card.appendChild(actionsCol);
          questionsContainer.appendChild(card);
        });
      }

      /* ============================================================
         3. Dynamic Options Rendering & Alphabet Generation
         ============================================================ */
      function getAlphabeticalLabel(index) {
        let label = '';
        let num = index;
        while (num >= 0) {
          label = String.fromCharCode((num % 26) + 65) + label;
          num = Math.floor(num / 26) - 1;
        }
        return label;
      }

      function renderModalOptions(q) {
        modalOptionsList.replaceChildren();

        if (!q || !Array.isArray(q.options)) {
          const emptyNotice = document.createElement("div");
          emptyNotice.className = "p-3 rounded-lg border border-brand-border bg-slate-50 text-xs text-brand-textSecondary italic";
          emptyNotice.textContent = "Options not available for this question.";
          modalOptionsList.appendChild(emptyNotice);
          return;
        }

        const validOptions = [];
        q.options.forEach((opt, idx) => {
          if (typeof opt === 'string' && opt.trim() !== '') {
            validOptions.push({
              originalIndex: idx,
              text: opt.trim()
            });
          }
        });

        if (validOptions.length === 0) {
          const emptyNotice = document.createElement("div");
          emptyNotice.className = "p-3 rounded-lg border border-brand-border bg-slate-50 text-xs text-brand-textSecondary italic";
          emptyNotice.textContent = "Options not available for this question.";
          modalOptionsList.appendChild(emptyNotice);
          return;
        }

        const isCorrectKeyProvided = (
          typeof q.correctOptionIndex === 'number' &&
          Number.isInteger(q.correctOptionIndex) &&
          q.correctOptionIndex >= 0 &&
          q.correctOptionIndex < q.options.length
        );

        const hasValidCorrectOption = isCorrectKeyProvided && validOptions.some(opt => opt.originalIndex === q.correctOptionIndex);

        validOptions.forEach((optObj, displayIdx) => {
          const isCorrect = hasValidCorrectOption && (optObj.originalIndex === q.correctOptionIndex);
          const letterLabel = getAlphabeticalLabel(displayIdx);

          const row = document.createElement("div");
          row.className = `p-3 rounded-lg border text-sm flex items-center justify-between gap-3 ${
            isCorrect 
              ? "bg-blue-50 border-brand-blue text-brand-textPrimary font-medium" 
              : "bg-white border-brand-border text-brand-textSecondary"
          }`;

          const left = document.createElement("div");
          left.className = "flex items-center gap-3 min-w-0";

          const badge = document.createElement("span");
          badge.className = `w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 ${
            isCorrect ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-textSecondary"
          }`;
          badge.textContent = letterLabel;
          left.appendChild(badge);

          const optSpan = document.createElement("span");
          optSpan.className = "leading-relaxed";
          optSpan.textContent = optObj.text;
          left.appendChild(optSpan);

          row.appendChild(left);

          if (isCorrect) {
            const keyTag = document.createElement("div");
            keyTag.className = "flex items-center gap-1 text-brand-blue text-xs font-semibold flex-shrink-0";
            
            const chk = document.createElement("span");
            chk.className = "material-symbols-outlined text-[16px]";
            chk.textContent = "check_circle";
            keyTag.appendChild(chk);

            const txt = document.createElement("span");
            txt.textContent = "Correct Key";
            keyTag.appendChild(txt);

            row.appendChild(keyTag);
          }

          modalOptionsList.appendChild(row);
        });

        if (!hasValidCorrectOption) {
          const notice = document.createElement("div");
          notice.className = "pt-1 text-xs text-brand-textSecondary italic";
          notice.textContent = "Answer key not available for this question.";
          modalOptionsList.appendChild(notice);
        }
      }

      /* ============================================================
         Details Modal
         ============================================================ */
      function openDetailModal(q, returnTargetBtn) {
        activeDetailQuestion = q;
        modalExamBadge.textContent = q.exam || "SSC";
        modalChapterBadge.textContent = q.chapterShort || q.subject || "General";
        modalSourceBadge.textContent = q.sourceType || "Practice";
        modalSourceTitle.textContent = q.sourceTitle || "Question Test";
        modalQid.textContent = q.questionId;
        modalQuestionStatement.textContent = q.questionText || "";
        modalExplanationBody.textContent = q.explanation || "Explanation not available.";

        renderModalOptions(q);

        OverlayManager.push({
          id: 'question-modal',
          element: modalPanel,
          returnTarget: returnTargetBtn || null,
          closeHandler: closeDetailModal
        });

        questionModal.classList.remove("hidden");
        requestAnimationFrame(() => {
          modalBackdrop.classList.remove("opacity-0");
          modalPanel.classList.remove("scale-95", "opacity-0");
          modalPanel.classList.add("scale-100", "opacity-100");
          modalCloseBtn.focus();
        });
      }

      function closeDetailModal(targetFocusOverride) {
        modalBackdrop.classList.add("opacity-0");
        modalPanel.classList.remove("scale-100", "opacity-100");
        modalPanel.classList.add("scale-95", "opacity-0");
        
        const overlayData = OverlayManager.removeById('question-modal');

        setTimeout(() => {
          questionModal.classList.add("hidden");
          activeDetailQuestion = null;

          if (targetFocusOverride && document.body.contains(targetFocusOverride)) {
            targetFocusOverride.focus();
          } else if (overlayData && overlayData.returnTarget && document.body.contains(overlayData.returnTarget)) {
            overlayData.returnTarget.focus();
          }
        }, 180);
      }

      /* ============================================================
         Removal Confirmation Dialog (Handles nested and card origin)
         ============================================================ */
      function openConfirmDialog(qId, returnTargetBtn, origin) {
        pendingRemovalId = qId;
        removalOrigin = origin; // 'modal' or 'card'
        confirmQidTag.textContent = `Target: ${qId}`;

        OverlayManager.push({
          id: 'confirm-modal',
          element: confirmPanel,
          returnTarget: returnTargetBtn || null,
          closeHandler: closeConfirmDialog
        });

        confirmModal.classList.remove("hidden");
        requestAnimationFrame(() => {
          confirmBackdrop.classList.remove("opacity-0");
          confirmPanel.classList.remove("scale-95", "opacity-0");
          confirmPanel.classList.add("scale-100", "opacity-100");
          confirmCancelBtn.focus();
        });
      }

      function closeConfirmDialog() {
        confirmBackdrop.classList.add("opacity-0");
        confirmPanel.classList.remove("scale-100", "opacity-100");
        confirmPanel.classList.add("scale-95", "opacity-0");

        const overlayData = OverlayManager.removeById('confirm-modal');

        setTimeout(() => {
          confirmModal.classList.add("hidden");
          pendingRemovalId = null;
          removalOrigin = null;

          // Return focus to its designated return target (e.g. modal's Remove button or card's Remove button)
          if (overlayData && overlayData.returnTarget && document.body.contains(overlayData.returnTarget)) {
            overlayData.returnTarget.focus();
          }
        }, 180);
      }

      function executeRemoval() {
        if (!pendingRemovalId) return;
        const targetQid = pendingRemovalId;
        const wasFromModal = (removalOrigin === 'modal');

        // Locate card and index before deletion to determine focus handoff
        const remainingBefore = getFilteredQuestions();
        const removedIndex = remainingBefore.findIndex(q => q.questionId === targetQid);

        // Update dataset
        bookmarksData = bookmarksData.filter(item => item.questionId !== targetQid);

        // Close confirmation overlay
        confirmBackdrop.classList.add("opacity-0");
        confirmPanel.classList.remove("scale-100", "opacity-100");
        confirmPanel.classList.add("scale-95", "opacity-0");
        OverlayManager.removeById('confirm-modal');
        confirmModal.classList.add("hidden");
        pendingRemovalId = null;
        removalOrigin = null;

        // If removed from details modal, close question modal as well
        if (wasFromModal || (activeDetailQuestion && activeDetailQuestion.questionId === targetQid)) {
          modalBackdrop.classList.add("opacity-0");
          modalPanel.classList.remove("scale-100", "opacity-100");
          modalPanel.classList.add("scale-95", "opacity-0");
          OverlayManager.removeById('question-modal');
          questionModal.classList.add("hidden");
          activeDetailQuestion = null;
        }

        // Re-render
        renderQuestions();

        // Safe focus destination resolution
        setTimeout(() => {
          const remainingAfter = getFilteredQuestions();
          if (remainingAfter.length > 0) {
            const nextIdx = Math.min(removedIndex >= 0 ? removedIndex : 0, remainingAfter.length - 1);
            const targetQ = remainingAfter[nextIdx];
            const targetCard = questionsContainer.querySelector(`[data-qid="${targetQ.questionId}"]`);
            if (targetCard) {
              const openBtn = targetCard.querySelector('.card-open-btn');
              if (openBtn) {
                openBtn.focus();
              } else {
                targetCard.focus();
              }
            } else {
              savedQuestionsHeading.focus();
            }
          } else {
            // No cards left
            savedQuestionsHeading.focus();
          }
        }, 50);

        showToast(`Question ${targetQid} removed from bookmarks`, "bookmark_remove");
      }

      /* ============================================================
         Mobile "More" Sheet
         ============================================================ */
      function openMoreSheet() {
        openMoreSheetBtn.setAttribute("aria-expanded", "true");

        OverlayManager.push({
          id: 'more-sheet',
          element: moreSheetPanel,
          returnTarget: openMoreSheetBtn,
          closeHandler: closeMoreSheet
        });

        moreSheet.classList.remove("hidden");
        requestAnimationFrame(() => {
          moreSheetBackdrop.classList.remove("opacity-0");
          moreSheetPanel.classList.remove("translate-y-full");
          moreSheetPanel.classList.add("translate-y-0");
          closeMoreSheetBtn.focus();
        });
      }

      function closeMoreSheet() {
        openMoreSheetBtn.setAttribute("aria-expanded", "false");
        moreSheetBackdrop.classList.add("opacity-0");
        moreSheetPanel.classList.remove("translate-y-0");
        moreSheetPanel.classList.add("translate-y-full");

        const overlayData = OverlayManager.removeById('more-sheet');

        setTimeout(() => {
          moreSheet.classList.add("hidden");
          if (overlayData && overlayData.returnTarget && document.body.contains(overlayData.returnTarget)) {
            overlayData.returnTarget.focus();
          }
        }, 220);
      }

      /* ============================================================
         Filters
         ============================================================ */
      function resetFilters() {
        filterExamVal = "all";
        filterChapterVal = "all";
        filterSourceVal = "all";

        filterExam.value = "all";
        filterChapter.value = "all";
        filterSource.value = "all";

        renderQuestions();
        showToast("Filters reset to default view", "refresh");
      }

      filterExam.addEventListener("change", (e) => {
        filterExamVal = e.target.value;
        renderQuestions();
      });

      filterChapter.addEventListener("change", (e) => {
        filterChapterVal = e.target.value;
        renderQuestions();
      });

      filterSource.addEventListener("change", (e) => {
        filterSourceVal = e.target.value;
        renderQuestions();
      });

      resetFiltersBtn.addEventListener("click", resetFilters);

      // Practice Action Click
      practiceActionBtn.addEventListener("click", () => {
        const count = getFilteredQuestions().length;
        if (count === 0) return;
        showToast("Prototype only — Practice Mode is not connected yet.", "info");
      });

      // Details Modal events
      modalCloseBtn.addEventListener("click", () => closeDetailModal());
      modalDismissBtn.addEventListener("click", () => closeDetailModal());
      modalBackdrop.addEventListener("click", () => closeDetailModal());
      modalRemoveBookmarkBtn.addEventListener("click", () => {
        if (activeDetailQuestion) {
          openConfirmDialog(activeDetailQuestion.questionId, modalRemoveBookmarkBtn, 'modal');
        }
      });

      // Confirm events
      confirmCancelBtn.addEventListener("click", closeConfirmDialog);
      confirmBackdrop.addEventListener("click", closeConfirmDialog);
      confirmExecuteBtn.addEventListener("click", executeRemoval);

      // Mobile More Sheet events
      openMoreSheetBtn.addEventListener("click", openMoreSheet);
      closeMoreSheetBtn.addEventListener("click", closeMoreSheet);
      moreSheetBackdrop.addEventListener("click", closeMoreSheet);

      /* ============================================================
         Global Keydown: Topmost overlay escape & focus trap
         ============================================================ */
      window.addEventListener("keydown", (e) => {
        const topOverlay = OverlayManager.top();
        if (!topOverlay) return;

        if (e.key === "Escape") {
          e.preventDefault();
          if (typeof topOverlay.closeHandler === "function") {
            topOverlay.closeHandler();
          }
          return;
        }

        // Trap focus inside topmost overlay element
        if (topOverlay.element) {
          trapFocus(topOverlay.element, e);
        }
      });

      /* ============================================================
         5. Placeholder navigation links & profile button intercept
         ============================================================ */
      document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href="#"], button[data-nav-name]');
        if (!link) return;

        // If it's an active bookmark link, allow default (or prevent page jump if #)
        if (link.getAttribute("aria-current") === "page") {
          e.preventDefault();
          return;
        }

        const navName = link.getAttribute("data-nav-name");
        if (navName) {
          e.preventDefault();
          showToast(`Prototype only — ${navName} is not connected yet.`, "info");
          return;
        }

        // Default # prevent jump
        if (link.getAttribute("href") === "#") {
          e.preventDefault();
        }
      });

      // Initialize
      renderQuestions();
    })();
  
if(typeof showToast==='function')window["showToast"]=showToast;
if(typeof trapFocus==='function')window["trapFocus"]=trapFocus;
if(typeof getFilteredQuestions==='function')window["getFilteredQuestions"]=getFilteredQuestions;
if(typeof updateHeaderAndCTA==='function')window["updateHeaderAndCTA"]=updateHeaderAndCTA;
if(typeof renderQuestions==='function')window["renderQuestions"]=renderQuestions;
if(typeof getAlphabeticalLabel==='function')window["getAlphabeticalLabel"]=getAlphabeticalLabel;
if(typeof renderModalOptions==='function')window["renderModalOptions"]=renderModalOptions;
if(typeof openDetailModal==='function')window["openDetailModal"]=openDetailModal;
if(typeof closeDetailModal==='function')window["closeDetailModal"]=closeDetailModal;
if(typeof openConfirmDialog==='function')window["openConfirmDialog"]=openConfirmDialog;
if(typeof closeConfirmDialog==='function')window["closeConfirmDialog"]=closeConfirmDialog;
if(typeof executeRemoval==='function')window["executeRemoval"]=executeRemoval;
if(typeof openMoreSheet==='function')window["openMoreSheet"]=openMoreSheet;
if(typeof closeMoreSheet==='function')window["closeMoreSheet"]=closeMoreSheet;
if(typeof resetFilters==='function')window["resetFilters"]=resetFilters;
})();

// bookmarks page script 2
(function(){
(function(){if(window.__sscFlixUnavailableNavigationBound)return;window.__sscFlixUnavailableNavigationBound=true;document.addEventListener('click',function(event){const link=event.target.closest('a[data-unavailable-route="leaderboard"]');if(!link)return;event.preventDefault();let notice=document.getElementById('sscflix-route-notice');if(!notice){notice=document.createElement('div');notice.id='sscflix-route-notice';notice.setAttribute('role','status');notice.className='fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-2rem)] rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-xl';document.body.appendChild(notice);}notice.textContent='Leaderboard is not available in this page set yet.';notice.classList.remove('hidden');window.clearTimeout(notice._hideTimer);notice._hideTimer=window.setTimeout(function(){notice.classList.add('hidden');},2600);});})();

})();