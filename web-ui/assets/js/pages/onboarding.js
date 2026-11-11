// onboarding page script 1
(function(){

    (function initOnboarding() {
      const examInputs = document.querySelectorAll('input[name="examination"]');
      const langInputs = document.querySelectorAll('input[name="language"]');
      const validationError = document.getElementById('validation-error');
      const saveBtn = document.getElementById('save-btn');
      const btnText = document.getElementById('btn-text');
      const btnIcon = document.getElementById('btn-icon');
      const btnSpinner = document.getElementById('btn-spinner');
      const formContainer = document.getElementById('form-container');
      const successView = document.getElementById('success-view');
      const modifyBtn = document.getElementById('modify-btn');
      const dashboardBtn = document.getElementById('dashboard-btn');
      const dashboardNotice = document.getElementById('dashboard-notice');

      const summaryExam = document.getElementById('summary-exam');
      const summaryExamSub = document.getElementById('summary-exam-sub');
      const summaryLang = document.getElementById('summary-lang');

      function syncCheckVisuals() {
        examInputs.forEach(input => {
          const card = input.closest('label');
          const checkIcon = card.querySelector('.check-icon');
          if (checkIcon) {
            if (input.checked) {
              checkIcon.classList.remove('hidden');
            } else {
              checkIcon.classList.add('hidden');
            }
          }
        });

        langInputs.forEach(input => {
          const card = input.closest('label');
          const checkIcon = card.querySelector('.check-icon');
          if (checkIcon) {
            if (input.checked) {
              checkIcon.classList.remove('hidden');
            } else {
              checkIcon.classList.add('hidden');
            }
          }
        });

        const selectedExam = document.querySelector('input[name="examination"]:checked');
        const selectedLang = document.querySelector('input[name="language"]:checked');
        if (selectedExam && selectedLang) {
          validationError.classList.add('hidden');
        }
      }

      examInputs.forEach(input => {
        input.addEventListener('change', syncCheckVisuals);
      });

      langInputs.forEach(input => {
        input.addEventListener('change', syncCheckVisuals);
      });

      saveBtn.addEventListener('click', () => {
        const selectedExam = document.querySelector('input[name="examination"]:checked');
        const selectedLang = document.querySelector('input[name="language"]:checked');

        if (!selectedExam || !selectedLang) {
          validationError.classList.remove('hidden');
          validationError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          return;
        }

        validationError.classList.add('hidden');
        saveBtn.disabled = true;
        btnText.textContent = 'Saving Preferences...';
        btnIcon.classList.add('hidden');
        btnSpinner.classList.remove('hidden');

        setTimeout(() => {
          saveBtn.disabled = false;
          btnText.textContent = 'Save & Continue';
          btnIcon.classList.remove('hidden');
          btnSpinner.classList.add('hidden');

          summaryExam.textContent = selectedExam.value;
          summaryExamSub.textContent = selectedExam.getAttribute('data-fullname') || '';
          summaryLang.textContent = selectedLang.value;

          // Persist the onboarding choices for the separate dashboard HTML page.
          const examCode = selectedExam.value.toLowerCase().replace(/^ssc\s*/, '').replace('stenographer', 'steno');
          try {
            localStorage.setItem('sscflix-target-exam', examCode);
            localStorage.setItem('sscflix-language', selectedLang.value);
            localStorage.setItem('sscflix-onboarding-complete', 'true');
          } catch (error) {
            // Navigation still works when storage is unavailable.
          }

          formContainer.classList.add('hidden');
          successView.classList.remove('hidden');
          dashboardNotice.classList.add('hidden');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
      });

      modifyBtn.addEventListener('click', () => {
        successView.classList.add('hidden');
        formContainer.classList.remove('hidden');
        dashboardNotice.classList.add('hidden');
        syncCheckVisuals();
      });

      dashboardBtn.addEventListener('click', () => {
        const selectedExam = document.querySelector('input[name="examination"]:checked');
        const selectedLang = document.querySelector('input[name="language"]:checked');
        if (selectedExam && selectedLang) {
          const examCode = selectedExam.value.toLowerCase().replace(/^ssc\s*/, '').replace('stenographer', 'steno');
          try {
            localStorage.setItem('sscflix-target-exam', examCode);
            localStorage.setItem('sscflix-language', selectedLang.value);
            localStorage.setItem('sscflix-onboarding-complete', 'true');
          } catch (error) {}
        }
        window.SSCFlixRouter.navigate("/dashboard");
      });

      // Initially ensure all visual checkmarks are hidden
      syncCheckVisuals();
    })();
  
if(typeof initOnboarding==='function')window["initOnboarding"]=initOnboarding;
if(typeof syncCheckVisuals==='function')window["syncCheckVisuals"]=syncCheckVisuals;
})();