// preferences page script 1
(function(){

    (function initPreferencesApp() {
      function removeToast(toast) {
        if (!toast) return;
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
      }

      // Safe DOM toast notification helper
      window.showToast = function(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest dark:bg-slate-900 shadow-lg text-on-surface dark:text-white text-body-sm font-body-sm border border-surface-container-highest dark:border-slate-700 transition-all duration-300 transform translate-y-2 opacity-0';

        var icon = document.createElement("span");
        icon.className = "material-symbols-outlined text-[18px] text-primary-container dark:text-blue-400";
        icon.textContent = "check_circle";

        var msg = document.createElement("span");
        msg.textContent = message;

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("aria-label", "Dismiss notification");
        btn.className = "ml-2 text-outline dark:text-slate-400 hover:text-on-surface dark:hover:text-white text-xs font-semibold px-1";
        btn.textContent = "✕";
        btn.addEventListener("click", function() {
          removeToast(toast);
        });

        toast.appendChild(icon);
        toast.appendChild(msg);
        toast.appendChild(btn);

        container.appendChild(toast);
        
        requestAnimationFrame(() => {
          toast.classList.remove('translate-y-2', 'opacity-0');
        });

        setTimeout(() => {
          removeToast(toast);
        }, 3500);
      };

      // Active dialog reference & focus restoration
      let activeTriggerElement = null;
      let activeDialog = null;

      window.openModal = function(modalId, triggerElement) {
        if (activeDialog) {
          window.closeModal(activeDialog.id);
        }
        activeTriggerElement = triggerElement || document.activeElement;
        const modal = document.getElementById(modalId);
        if (modal) {
          activeDialog = modal;
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';

          // Trap focus & focus initial element
          const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable.length) {
            focusable[0].focus();
          }
        }
      };

      window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('hidden');
          if (activeDialog === modal) {
            activeDialog = null;
          }
          document.body.style.overflow = '';
          if (activeTriggerElement && typeof activeTriggerElement.focus === 'function') {
            activeTriggerElement.focus();
            activeTriggerElement = null;
          }
        }
      };

      // Modal keyboard focus trap & Escape handler
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeDialog) {
          window.closeModal(activeDialog.id);
          return;
        }

        if (e.key === 'Tab' && activeDialog) {
          const focusables = activeDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      });

      // Close modal triggers
      document.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', () => {
          const modalId = el.getAttribute('data-close-modal');
          window.closeModal(modalId);
        });
      });

      // Mobile Drawer setup
      const mobileMoreBtn = document.getElementById('btn-open-mobile-more');
      const drawerMobile = document.getElementById('drawer-mobile-more');
      if (mobileMoreBtn && drawerMobile) {
        mobileMoreBtn.addEventListener('click', (e) => window.openModal('drawer-mobile-more', e.currentTarget));
        drawerMobile.querySelectorAll('[data-close-drawer]').forEach(el => {
          el.addEventListener('click', () => window.closeModal('drawer-mobile-more'));
        });
      }

      // Dialog Triggers
      const btnEditProfile = document.getElementById('btn-open-edit-profile');
      if (btnEditProfile) {
        btnEditProfile.addEventListener('click', (e) => window.openModal('modal-edit-profile', e.currentTarget));
      }

      const btnPasswordInfo = document.getElementById('btn-open-password-info');
      if (btnPasswordInfo) {
        btnPasswordInfo.addEventListener('click', (e) => window.openModal('modal-password-info', e.currentTarget));
      }

      const btnSignoutInfo = document.getElementById('btn-open-signout-info');
      if (btnSignoutInfo) {
        btnSignoutInfo.addEventListener('click', (e) => window.openModal('modal-signout-info', e.currentTarget));
      }

      // Profile editing (Preview update locally only)
      let savedName = "Student Name";
      let savedEmail = "student@example.com";

      const btnCancelEdit = document.getElementById('btn-cancel-edit-profile');
      if (btnCancelEdit) {
        btnCancelEdit.addEventListener('click', () => {
          const inputName = document.getElementById('input-profile-name');
          const inputEmail = document.getElementById('input-profile-email');
          if (inputName) inputName.value = savedName;
          if (inputEmail) inputEmail.value = savedEmail;
          window.closeModal('modal-edit-profile');
        });
      }

      window.saveProfileChanges = function() {
        const inputName = document.getElementById('input-profile-name');
        const inputEmail = document.getElementById('input-profile-email');
        if (inputName && inputEmail) {
          savedName = inputName.value.trim() || "Student Name";
          savedEmail = inputEmail.value.trim() || "student@example.com";
          
          const profileHeading = document.getElementById('profile-heading');
          const profileEmail = document.getElementById('profile-email');
          const avatarEl = document.getElementById('display-profile-avatar');
          const headerAvatar = document.getElementById('header-avatar');

          if (profileHeading) profileHeading.textContent = savedName;
          if (profileEmail) profileEmail.textContent = savedEmail;

          // Generate initials
          const initials = savedName.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'SN';
          if (avatarEl) avatarEl.textContent = initials;
          if (headerAvatar) headerAvatar.textContent = initials;

          window.closeModal('modal-edit-profile');
          window.showToast("Profile updated in local preview");
        }
      };

      // Target Exam Radio Selection
      const examButtons = document.querySelectorAll('#target-exam-grid .exam-pill');
      examButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          examButtons.forEach(b => {
            b.setAttribute('aria-checked', 'false');
            b.classList.remove('border-2', 'border-primary-container', 'bg-surface-container-low', 'dark:bg-slate-800/80');
            b.classList.add('border', 'border-surface-container-highest', 'dark:border-slate-700', 'bg-surface-container-lowest', 'dark:bg-slate-900');
            const title = b.querySelector('.font-bold');
            if (title) {
              title.classList.remove('text-primary-container', 'dark:text-blue-400');
              title.classList.add('text-on-surface', 'dark:text-slate-200');
            }
            const icon = b.querySelector('.radio-indicator');
            if (icon) {
              icon.textContent = 'radio_button_unchecked';
              icon.classList.remove('text-primary-container', 'dark:text-blue-400');
              icon.classList.add('text-outline', 'dark:text-slate-500');
              icon.style.fontVariationSettings = '';
            }
          });

          btn.setAttribute('aria-checked', 'true');
          btn.classList.remove('border', 'border-surface-container-highest', 'dark:border-slate-700', 'bg-surface-container-lowest', 'dark:bg-slate-900');
          btn.classList.add('border-2', 'border-primary-container', 'bg-surface-container-low', 'dark:bg-slate-800/80');
          
          const activeTitle = btn.querySelector('.font-bold');
          if (activeTitle) {
            activeTitle.classList.add('text-primary-container', 'dark:text-blue-400');
            activeTitle.classList.remove('text-on-surface', 'dark:text-slate-200');
          }

          const activeIcon = btn.querySelector('.radio-indicator');
          if (activeIcon) {
            activeIcon.textContent = 'check_circle';
            activeIcon.classList.add('text-primary-container', 'dark:text-blue-400');
            activeIcon.classList.remove('text-outline', 'dark:text-slate-500');
            activeIcon.style.fontVariationSettings = "'FILL' 1";
          }

          window.showToast(`Target examination set to ${btn.getAttribute('data-exam')}`);
        });
      });

      // Language Switcher
      const langTabs = document.querySelectorAll('#language-segmented .lang-tab');
      langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          langTabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.className = 'lang-tab px-space-lg py-2 rounded-lg font-label-lg text-label-lg transition-all min-h-[44px] flex items-center gap-space-xs text-on-surface-variant dark:text-slate-400 hover:text-on-surface dark:hover:text-white focus:outline-none';
            const icon = t.querySelector('.material-symbols-outlined');
            if (icon) icon.remove();
          });

          tab.setAttribute('aria-selected', 'true');
          tab.className = 'lang-tab px-space-lg py-2 rounded-lg font-label-lg text-label-lg transition-all min-h-[44px] flex items-center gap-space-xs bg-surface-container-lowest dark:bg-slate-900 text-primary-container dark:text-blue-400 shadow-sm font-bold focus:outline-none';
          
          const checkIcon = document.createElement('span');
          checkIcon.className = 'material-symbols-outlined text-[18px]';
          checkIcon.textContent = 'check';
          tab.prepend(checkIcon);

          const langName = tab.getAttribute('data-lang') === 'hi' ? 'Hindi' : 'English';
          window.showToast(`Default language: ${langName}`);
        });
      });

      // Genuine Light/Dark Theme Mode Toggle
      const themeButtons = document.querySelectorAll('#theme-segmented .theme-tab');
      themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          themeButtons.forEach(b => {
            b.setAttribute('aria-checked', 'false');
            b.className = 'theme-tab px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all min-h-[44px] flex items-center gap-2 text-on-surface-variant dark:text-slate-400 hover:text-on-surface dark:hover:text-white focus:outline-none';
            const icon = b.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = '';
          });

          btn.setAttribute('aria-checked', 'true');
          btn.className = 'theme-tab px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all min-h-[44px] flex items-center gap-2 bg-surface-container-lowest dark:bg-slate-900 text-primary-container dark:text-blue-400 shadow-sm font-bold focus:outline-none';
          const activeIcon = btn.querySelector('.material-symbols-outlined');
          if (activeIcon) activeIcon.style.fontVariationSettings = "'FILL' 1";

          const chosen = btn.getAttribute('data-theme');
          if (chosen === 'dark') {
            document.documentElement.classList.add('dark');
            window.showToast('Dark mode enabled');
          } else {
            document.documentElement.classList.remove('dark');
            window.showToast('Light mode enabled');
          }
        });
      });
    })();
  
if(typeof initPreferencesApp==='function')window["initPreferencesApp"]=initPreferencesApp;
if(typeof removeToast==='function')window["removeToast"]=removeToast;
})();

// preferences page script 2
(function(){
(function(){if(window.__sscFlixUnavailableNavigationBound)return;window.__sscFlixUnavailableNavigationBound=true;document.addEventListener('click',function(event){const link=event.target.closest('a[data-unavailable-route="leaderboard"]');if(!link)return;event.preventDefault();let notice=document.getElementById('sscflix-route-notice');if(!notice){notice=document.createElement('div');notice.id='sscflix-route-notice';notice.setAttribute('role','status');notice.className='fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-2rem)] rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-xl';document.body.appendChild(notice);}notice.textContent='Leaderboard is not available in this page set yet.';notice.classList.remove('hidden');window.clearTimeout(notice._hideTimer);notice._hideTimer=window.setTimeout(function(){notice.classList.add('hidden');},2600);});})();

})();