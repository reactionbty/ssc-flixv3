// forgot-password page script 1
(function(){

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }

    function handleEmailInput() {
      const emailInput = document.getElementById('recovery-email');
      const errorEl = document.getElementById('email-error');
      if (emailInput.getAttribute('aria-invalid') === 'true' && validateEmail(emailInput.value.trim())) {
        emailInput.setAttribute('aria-invalid', 'false');
        emailInput.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        emailInput.classList.add('border-slate-300', 'focus:ring-blue-600', 'focus:border-blue-600');
        errorEl.classList.add('hidden');
      }
    }

    function handlePasswordResetSubmit(e) {
      e.preventDefault();
      const emailInput = document.getElementById('recovery-email');
      const emailVal = emailInput.value.trim();

      if (!emailVal) {
        showEmailError('Please enter your email address.');
        return;
      }
      if (!validateEmail(emailVal)) {
        showEmailError('Please enter a valid email address (e.g. student@example.com).');
        return;
      }

      emailInput.setAttribute('aria-invalid', 'false');
      emailInput.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
      emailInput.classList.add('border-slate-300', 'focus:ring-blue-600', 'focus:border-blue-600');
      document.getElementById('email-error').classList.add('hidden');

      const submitBtn = document.getElementById('submit-button');
      const spinner = document.getElementById('button-spinner');
      const arrow = document.getElementById('button-arrow');
      const label = document.getElementById('button-label');

      submitBtn.disabled = true;
      spinner.classList.remove('hidden');
      arrow.classList.add('hidden');
      label.textContent = 'Preparing OTP...';

      setTimeout(() => {
        submitBtn.disabled = false;
        spinner.classList.add('hidden');
        arrow.classList.remove('hidden');
        label.textContent = 'Send OTP';

        document.getElementById('forgot-password-form').classList.add('hidden');
        document.getElementById('otp-email-display').textContent = emailVal;
        document.getElementById('otp-state').classList.remove('hidden');
        setRecoveryHeading('Verify Your Email', 'Enter the 6-digit code associated with your registered email address.');
        document.getElementById('recovery-otp').focus();
      }, 500);
    }

    function showEmailError(message) {
      const input = document.getElementById('recovery-email');
      const error = document.getElementById('email-error');
      document.getElementById('email-error-text').textContent = message;
      input.setAttribute('aria-invalid', 'true');
      input.classList.remove('border-slate-300', 'focus:ring-blue-600', 'focus:border-blue-600');
      input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
      error.classList.remove('hidden');
      input.focus();
    }

    function handleOtpInput() {
      const input = document.getElementById('recovery-otp');
      const error = document.getElementById('otp-error');
      input.value = input.value.replace(/\D/g, '').slice(0, 6);
      error.classList.add('hidden');
      input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
      input.classList.add('border-slate-300', 'focus:ring-blue-600', 'focus:border-blue-600');
    }

    function verifyRecoveryOtp() {
      const input = document.getElementById('recovery-otp');
      const error = document.getElementById('otp-error');
      if (!/^\d{6}$/.test(input.value.trim())) {
        error.textContent = 'Please enter a valid 6-digit code.';
        error.classList.remove('hidden');
        input.classList.remove('border-slate-300', 'focus:ring-blue-600', 'focus:border-blue-600');
        input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        input.focus();
        return;
      }

      document.getElementById('otp-state').classList.add('hidden');
      document.getElementById('new-password-state').classList.remove('hidden');
      setRecoveryHeading('Create New Password', 'Choose a new password for your SSC Flix account.');
      document.getElementById('new-password').focus();
    }

    function resendRecoveryOtp() {
      const status = document.getElementById('otp-status');
      status.textContent = 'Prototype preview only — resend is not connected and no email has been sent.';
    }

    function changeRecoveryEmail() {
      document.getElementById('otp-state').classList.add('hidden');
      document.getElementById('forgot-password-form').classList.remove('hidden');
      document.getElementById('recovery-otp').value = '';
      setRecoveryHeading('Forgot Password?', "Enter your registered email address. We'll send a one-time password to verify your identity.");
      document.getElementById('recovery-email').focus();
    }

    function returnToOtpStep() {
      document.getElementById('new-password-state').classList.add('hidden');
      document.getElementById('otp-state').classList.remove('hidden');
      setRecoveryHeading('Verify Your Email', 'Enter the 6-digit code associated with your registered email address.');
      document.getElementById('recovery-otp').focus();
    }

    function handleNewPasswordSubmit(e) {
      e.preventDefault();
      const password = document.getElementById('new-password');
      const confirm = document.getElementById('confirm-new-password');
      const error = document.getElementById('new-password-error');
      const value = password.value;
      const confirmValue = confirm.value;

      if (value.length < 8) {
        error.textContent = 'Your password must be at least 8 characters.';
        error.classList.remove('hidden');
        password.focus();
        return;
      }
      if (value !== confirmValue) {
        error.textContent = 'The passwords do not match. Please try again.';
        error.classList.remove('hidden');
        confirm.focus();
        return;
      }

      error.classList.add('hidden');
      document.getElementById('new-password-state').classList.add('hidden');
      document.getElementById('recovery-success-state').classList.remove('hidden');
      setRecoveryHeading('Password Reset Preview', 'Your recovery journey has reached its final step.');
    }

    function setRecoveryHeading(title, description) {
      document.getElementById('recovery-title').textContent = title;
      document.getElementById('recovery-description').textContent = description;
    }

    function restartRecoveryFlow() {
      document.getElementById('recovery-email').value = '';
      document.getElementById('recovery-otp').value = '';
      document.getElementById('new-password').value = '';
      document.getElementById('confirm-new-password').value = '';
      document.getElementById('recovery-success-state').classList.add('hidden');
      document.getElementById('forgot-password-form').classList.remove('hidden');
      setRecoveryHeading('Forgot Password?', "Enter your registered email address. We'll send a one-time password to verify your identity.");
      document.getElementById('recovery-email').focus();
    }
  
if(typeof validateEmail==='function')window["validateEmail"]=validateEmail;
if(typeof handleEmailInput==='function')window["handleEmailInput"]=handleEmailInput;
if(typeof handlePasswordResetSubmit==='function')window["handlePasswordResetSubmit"]=handlePasswordResetSubmit;
if(typeof showEmailError==='function')window["showEmailError"]=showEmailError;
if(typeof handleOtpInput==='function')window["handleOtpInput"]=handleOtpInput;
if(typeof verifyRecoveryOtp==='function')window["verifyRecoveryOtp"]=verifyRecoveryOtp;
if(typeof resendRecoveryOtp==='function')window["resendRecoveryOtp"]=resendRecoveryOtp;
if(typeof changeRecoveryEmail==='function')window["changeRecoveryEmail"]=changeRecoveryEmail;
if(typeof returnToOtpStep==='function')window["returnToOtpStep"]=returnToOtpStep;
if(typeof handleNewPasswordSubmit==='function')window["handleNewPasswordSubmit"]=handleNewPasswordSubmit;
if(typeof setRecoveryHeading==='function')window["setRecoveryHeading"]=setRecoveryHeading;
if(typeof restartRecoveryFlow==='function')window["restartRecoveryFlow"]=restartRecoveryFlow;
})();