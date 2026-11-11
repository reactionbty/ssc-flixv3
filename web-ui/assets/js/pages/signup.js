// signup page script 1
(function(){

    function toggleRegPasswordVisibility() {
      const pwd = document.getElementById('password');
      const icon = document.getElementById('reg-eye-icon');
      const btn = document.getElementById('toggle-pwd-btn');
      if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.textContent = 'visibility_off';
        btn.setAttribute('aria-label', 'Hide password');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        pwd.type = 'password';
        icon.textContent = 'visibility';
        btn.setAttribute('aria-label', 'Show password');
        btn.setAttribute('aria-pressed', 'false');
      }
    }

    function checkRegisterPassword(input) {
      clearRegisterValidation(input, 'password-error');
      const val = input.value;
      const hasLen = val.length >= 8;

      const lenRow = document.getElementById('rule-len');
      const lenIcon = document.getElementById('rule-len-icon');
      if (hasLen) {
        lenRow.className = 'flex items-center gap-2 text-emerald-600 font-medium transition-colors';
        lenIcon.textContent = 'check_circle';
      } else {
        lenRow.className = 'flex items-center gap-2 text-slate-500 transition-colors';
        lenIcon.textContent = 'radio_button_unchecked';
      }
    }

    function clearRegisterValidation(input, errorId) {
      input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
      if (input.type !== 'checkbox') {
        input.classList.add('border-[#E2E8F0]');
      }
      input.setAttribute('aria-invalid', 'false');
      const err = document.getElementById(errorId);
      if (err) err.classList.add('hidden');
    }

    function setRegisterError(input, errorId, message) {
      if (input.type !== 'checkbox') {
        input.classList.remove('border-[#E2E8F0]');
        input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
      }
      input.setAttribute('aria-invalid', 'true');
      const err = document.getElementById(errorId);
      if (err) {
        const textSpan = err.querySelector('span:nth-child(2)') || err;
        textSpan.textContent = message;
        err.classList.remove('hidden');
      }
    }

    function resetOtpPreview() {
      const otpSection = document.getElementById('otp-section');
      const otpInput = document.getElementById('email-otp');
      const otpStatus = document.getElementById('otp-preview-status');
      if (otpSection) otpSection.classList.add('hidden');
      if (otpInput) otpInput.value = '';
      if (otpStatus) {
        otpStatus.className = 'text-xs text-[#64748B] leading-relaxed';
        otpStatus.textContent = 'UI preview only — email delivery and code verification are not connected yet.';
      }
    }

    function showOtpPreview() {
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = emailInput.value.trim();

      if (!email || !emailRegex.test(email)) {
        setRegisterError(emailInput, 'email-error', email ? 'Please enter a valid email address' : 'Email address is required');
        emailInput.focus();
        return;
      }

      clearRegisterValidation(emailInput, 'email-error');
      document.getElementById('otp-section').classList.remove('hidden');
      document.getElementById('otp-preview-status').textContent = 'UI preview only — no email is sent and the code cannot be verified yet.';
      document.getElementById('email-otp').focus();
    }

    function verifyOtpPreview() {
      const otpInput = document.getElementById('email-otp');
      const status = document.getElementById('otp-preview-status');
      if (!/^\d{6}$/.test(otpInput.value.trim())) {
        status.className = 'text-xs text-red-600 leading-relaxed';
        status.textContent = 'Enter a valid 6-digit code.';
        otpInput.focus();
        return;
      }

      status.className = 'text-xs text-[#64748B] leading-relaxed';
      status.textContent = 'OTP verification is not connected in this UI preview. No code has been verified.';
    }

    function handleRegisterSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('fullname');
      const emailInput = document.getElementById('email');
      const pwdInput = document.getElementById('password');
      const terms = document.getElementById('terms-agree');
      const banner = document.getElementById('signup-banner');
      const bannerContent = document.getElementById('signup-banner-content');
      const btn = document.getElementById('reg-submit-btn');
      const btnText = document.getElementById('reg-btn-text');
      const spinner = document.getElementById('reg-spinner');
      const arrow = document.getElementById('reg-arrow');

      let hasError = false;

      // 1. Full name check
      if (!nameInput.value.trim()) {
        setRegisterError(nameInput, 'fullname-error', 'Full name is required');
        hasError = true;
      } else if (nameInput.value.trim().length < 2) {
        setRegisterError(nameInput, 'fullname-error', 'Please enter a valid candidate name');
        hasError = true;
      }

      // 2. Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        setRegisterError(emailInput, 'email-error', 'Email address is required');
        hasError = true;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        setRegisterError(emailInput, 'email-error', 'Please enter a valid email address');
        hasError = true;
      }

      // 3. Password criteria: Single rule only (length >= 8)
      const val = pwdInput.value;
      const hasLength = val.length >= 8;
      if (!val) {
        setRegisterError(pwdInput, 'password-error', 'Password is required');
        hasError = true;
      } else if (!hasLength) {
        setRegisterError(pwdInput, 'password-error', 'Password must be at least 8 characters');
        hasError = true;
      }

      // 4. Terms agreement
      if (!terms.checked) {
        setRegisterError(terms, 'terms-error', 'You must agree to the Terms & Conditions and Privacy Policy');
        hasError = true;
      }

      if (hasError) {
        banner.className = 'mb-5 p-3.5 rounded-lg text-sm font-medium border border-red-200 bg-red-50 text-slate-800 transition-all';
        bannerContent.innerHTML = `
          <span class="material-symbols-outlined text-red-600 text-[18px] shrink-0 mt-0.5">error</span>
          <div>
            <p class="font-semibold text-red-700">Unable to create account</p>
            <p class="text-xs mt-0.5 text-slate-600">Please complete the highlighted fields correctly and accept the policies.</p>
          </div>
        `;
        banner.classList.remove('hidden');
        return;
      }

      // Submission Loading State
      btn.disabled = true;
      spinner.classList.remove('hidden');
      arrow.classList.add('hidden');
      btnText.textContent = 'Validating Registration...';
      banner.classList.add('hidden');

      setTimeout(() => {
        btn.disabled = false;
        spinner.classList.add('hidden');
        arrow.classList.remove('hidden');
        btnText.textContent = 'Create Account';

        // Explicit Prototype Simulation Banner (No claims of real DB entry or email delivery)
        banner.className = 'mb-5 p-3.5 rounded-lg text-sm font-medium border border-blue-200 bg-blue-50 text-slate-800 transition-all';
        bannerContent.innerHTML = `
          <span class="material-symbols-outlined text-[#1D4ED8] text-[20px] shrink-0 mt-0.5">check_circle</span>
          <div>
            <p class="font-semibold text-[#1D4ED8]">Prototype Simulation Complete</p>
            <p class="text-xs mt-0.5 text-slate-600 leading-relaxed">
              Form validation succeeded for UI preview. No real account was created and no OTP or confirmation email was verified.
            </p>
            <a class="mt-3 inline-flex min-h-9 items-center justify-center rounded-lg bg-[#1D4ED8] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#1E3A8A] transition-colors" href="./first%20time%20onboarding%20page.html">Continue to Onboarding Preview</a>
          </div>
        `;
        banner.classList.remove('hidden');
      }, 700);
    }
  
if(typeof toggleRegPasswordVisibility==='function')window["toggleRegPasswordVisibility"]=toggleRegPasswordVisibility;
if(typeof checkRegisterPassword==='function')window["checkRegisterPassword"]=checkRegisterPassword;
if(typeof clearRegisterValidation==='function')window["clearRegisterValidation"]=clearRegisterValidation;
if(typeof setRegisterError==='function')window["setRegisterError"]=setRegisterError;
if(typeof resetOtpPreview==='function')window["resetOtpPreview"]=resetOtpPreview;
if(typeof showOtpPreview==='function')window["showOtpPreview"]=showOtpPreview;
if(typeof verifyOtpPreview==='function')window["verifyOtpPreview"]=verifyOtpPreview;
if(typeof handleRegisterSubmit==='function')window["handleRegisterSubmit"]=handleRegisterSubmit;
})();