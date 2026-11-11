// Page script 1 for login
(function () {

    function togglePasswordVisibility() {
      const pwdInput = document.getElementById('password');
      const eyeIcon = document.getElementById('eye-icon');
      const eyeOffIcon = document.getElementById('eye-off-icon');
      const toggleBtn = document.getElementById('toggle-password');

      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
        toggleBtn.setAttribute('aria-label', 'Hide password');
        toggleBtn.setAttribute('aria-pressed', 'true');
      } else {
        pwdInput.type = 'password';
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
        toggleBtn.setAttribute('aria-label', 'Show password');
        toggleBtn.setAttribute('aria-pressed', 'false');
      }
    }

    function clearFieldValidation(input, errorElementId) {
      input.setAttribute('aria-invalid', 'false');
      input.classList.remove('border-red-600', 'bg-red-50/20', 'focus:ring-red-500', 'focus:border-red-500');
      input.classList.add('border-brand-border', 'focus:ring-blue-600', 'focus:border-blue-600');
      const errorMsg = document.getElementById(errorElementId);
      if (errorMsg) {
        errorMsg.classList.add('hidden');
      }
    }

    function setFieldInvalid(input, errorElementId, message) {
      input.setAttribute('aria-invalid', 'true');
      input.classList.remove('border-brand-border', 'focus:ring-blue-600', 'focus:border-blue-600');
      input.classList.add('border-red-600', 'bg-red-50/20', 'focus:ring-red-500', 'focus:border-red-500');
      const errorMsg = document.getElementById(errorElementId);
      if (errorMsg) {
        const textSpan = errorMsg.querySelector('span') || errorMsg;
        textSpan.textContent = message;
        errorMsg.classList.remove('hidden');
      }
    }

    function handleSignInSubmit(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const pwdInput = document.getElementById('password');
      const emailVal = emailInput.value.trim();
      const pwdVal = pwdInput.value; // Keep exact entered string, don't wipe
      
      const submitBtn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      const btnSpinner = document.getElementById('btn-spinner');
      const btnArrow = document.getElementById('btn-arrow');
      const banner = document.getElementById('state-banner');
      const bannerContent = document.getElementById('state-banner-content');

      // 1. Validate Email format and Password presence
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let hasError = false;

      if (!emailVal) {
        setFieldInvalid(emailInput, 'email-error', 'Email address is required');
        hasError = true;
      } else if (!emailRegex.test(emailVal)) {
        setFieldInvalid(emailInput, 'email-error', 'Please enter a valid email address');
        hasError = true;
      } else {
        clearFieldValidation(emailInput, 'email-error');
      }

      // Password requirement: non-empty only (no minimum length rule on login)
      if (!pwdVal) {
        setFieldInvalid(pwdInput, 'password-error', 'Password is required');
        hasError = true;
      } else {
        clearFieldValidation(pwdInput, 'password-error');
      }

      if (hasError) {
        banner.className = 'mb-5 p-3.5 rounded-academic text-xs sm:text-sm font-medium border border-red-200 bg-red-50 text-red-700 transition-all';
        bannerContent.innerHTML = `
          <svg class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="font-semibold">Unable to sign in</p>
            <p class="text-xs mt-0.5 text-red-600">Please correct the highlighted errors above to continue.</p>
          </div>
        `;
        banner.classList.remove('hidden');
        return;
      }

      // 2. Realistic prototype signing in transition
      submitBtn.disabled = true;
      btnSpinner.classList.remove('hidden');
      btnArrow.classList.add('hidden');
      btnText.textContent = 'Signing in...';
      banner.classList.add('hidden');

      setTimeout(() => {
        submitBtn.disabled = false;
        btnSpinner.classList.add('hidden');
        btnArrow.classList.remove('hidden');
        btnText.textContent = 'Sign In';

        // Check for intentional test failure trigger (e.g. invalid@demo.com, fail, error)
        if (emailVal.includes('fail') || emailVal.includes('error')) {
          setFieldInvalid(emailInput, 'email-error', 'Email or password is incorrect. Please try again.');
          setFieldInvalid(pwdInput, 'password-error', 'Email or password is incorrect. Please try again.');
          banner.className = 'mb-5 p-3.5 rounded-academic text-xs sm:text-sm font-medium border border-red-200 bg-red-50 text-red-700 transition-all';
          bannerContent.innerHTML = `
            <svg class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-semibold">Unable to sign in</p>
              <p class="text-xs mt-0.5 text-red-600">Email or password is incorrect. Please try again.</p>
            </div>
          `;
          banner.classList.remove('hidden');
        } else {
          // Success State - clearly marked as prototype simulation
          banner.className = 'mb-5 p-3.5 rounded-academic text-xs sm:text-sm font-medium border border-blue-200 bg-blue-50 text-brand-navy transition-all';
          bannerContent.innerHTML = `
            <svg class="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p class="font-semibold text-brand-primary">Prototype Simulation</p>
              <p class="text-xs mt-0.5 text-brand-text-secondary">Form validation succeeded. Backend authentication is not connected in this preview.</p>
              <a class="mt-3 inline-flex min-h-9 items-center justify-center rounded-lg bg-[#1D4ED8] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#1E3A8A] transition-colors" href="./dashboard%20page.html">Continue to Dashboard Preview</a>
            </div>
          `;
          banner.classList.remove('hidden');
        }
      }, 750);
    }
  

if (typeof togglePasswordVisibility === 'function') window["togglePasswordVisibility"] = togglePasswordVisibility;
if (typeof clearFieldValidation === 'function') window["clearFieldValidation"] = clearFieldValidation;
if (typeof setFieldInvalid === 'function') window["setFieldInvalid"] = setFieldInvalid;
if (typeof handleSignInSubmit === 'function') window["handleSignInSubmit"] = handleSignInSubmit;
})();