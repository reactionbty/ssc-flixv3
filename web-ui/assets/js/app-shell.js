(function () {
  'use strict';
  var page = document.body.getAttribute('data-page') || '';
  var sidebarSlot = document.getElementById('app-sidebar-slot');
  var headerSlot = document.getElementById('app-header-slot');
  var SIDEBAR_HTML = "<aside class=\"shared-app-sidebar hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-[240px] h-screen shrink-0 bg-white border-r border-[#E2E8F0] z-30 select-none overflow-hidden\">\n<!-- Brand Logo Section -->\n<div class=\"h-14 flex items-center px-5 border-b border-[#E2E8F0]\">\n<a class=\"flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] rounded-md\" href=\"./dashboard%20page.html\">\n<img alt=\"SSC Flix Logo\" class=\"h-7 w-auto object-contain\" src=\"https://lh3.googleusercontent.com/aida/ALJJyrC-p96gFi19-FF5pihFPJFrQHfs2-t-b-pWnxk6KKAGsVId0f23_kCBNCs2BLAKFt01RAa0hdwJ5P_ZixgaKgYLhnh-dQpS9hJDvzac7aurza1pbN_8PqoiiqKabe774zgaWYynBdqJKdL6B2297u2kLncZScqtvZWg4ViYmEs9n3B6tuGdtNeIsLLk7u1hyc2o0fzuAJV46iQELX8Z4zGLeti8PkERFgVnuEYdde1s\"/>\n</a>\n</div>\n<!-- Navigation List -->\n<nav aria-label=\"Main Navigation\" class=\"flex-1 py-4 px-3 flex flex-col gap-1\">\n<!-- Group 1: Primary Flow -->\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./dashboard%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<rect height=\"9\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"></rect>\n<rect height=\"5\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"></rect>\n<rect height=\"9\" rx=\"1\" width=\"7\" x=\"14\" y=\"12\"></rect>\n<rect height=\"5\" rx=\"1\" width=\"3\" x=\"3\" y=\"16\"></rect>\n</svg>\n<span class=\"\">Dashboard</span>\n</a>\n<a aria-current=\"page\" class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold bg-[#EFF6FF] text-[#1D4ED8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./mock%20test%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<rect height=\"4\" rx=\"1\" ry=\"1\" width=\"8\" x=\"8\" y=\"2\"></rect>\n<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path>\n<path d=\"m9 14 2 2 4-4\"></path>\n</svg>\n<span class=\"\">Mock Tests</span>\n</a>\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./pyqs%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<path d=\"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\"></path>\n<polyline points=\"14 2 14 8 20 8\"></polyline>\n<line x1=\"16\" x2=\"8\" y1=\"13\" y2=\"13\"></line>\n<line x1=\"16\" x2=\"8\" y1=\"17\" y2=\"17\"></line>\n<line x1=\"10\" x2=\"8\" y1=\"9\" y2=\"9\"></line>\n</svg>\n<span class=\"\">PYQs</span>\n</a>\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./chapter%20test%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path>\n<path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>\n</svg>\n<span class=\"\">Chapter Tests</span>\n</a>\n<!-- Subtle Divider 1 -->\n<hr class=\"my-2.5 border-[#E2E8F0]\"/>\n<!-- Group 2: Student Test Archive -->\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./my%20tests%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n<path d=\"M3 3v5h5\"></path>\n<path d=\"M12 7v5l4 2\"></path>\n</svg>\n<span class=\"\">My Tests</span>\n</a>\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./bookmarks%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"></path>\n</svg>\n<span class=\"\">Bookmarks</span>\n</a>\n<!-- Subtle Divider 2 -->\n<hr class=\"my-2.5 border-[#E2E8F0]\"/>\n<!-- Group 3: Settings & Identity -->\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./leaderboard.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<path d=\"M8 21h8m-4-4v4m-5-17h10v5a5 5 0 0 1-10 0V4Z\"></path>\n<path d=\"M7 7H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4\"></path>\n</svg>\n<span class=\"\">Leaderboard</span>\n</a>\n<a class=\"nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" href=\"./preferences%20and%20account%20page.html\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\">\n<line x1=\"4\" x2=\"20\" y1=\"21\" y2=\"21\"></line>\n<line x1=\"4\" x2=\"20\" y1=\"14\" y2=\"14\"></line>\n<line x1=\"4\" x2=\"20\" y1=\"7\" y2=\"7\"></line>\n<circle cx=\"14\" cy=\"21\" r=\"2\"></circle>\n<circle cx=\"8\" cy=\"14\" r=\"2\"></circle>\n<circle cx=\"16\" cy=\"7\" r=\"2\"></circle>\n</svg>\n<span class=\"\">Preferences</span>\n</a>\n\n</nav>\n<!-- Sidebar Bottom: PRO Pass & Student Account -->\n<div class=\"shrink-0 bg-white px-3 pt-1 pb-3 space-y-3\">\n  <div class=\"rounded-xl border border-[#C4B5FD] bg-[#F5F3FF] p-3.5\" id=\"sidebar-pro-card\">\n    <div class=\"mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg border border-[#A78BFA] bg-[#EDE9FE] text-[#6D4AE8]\">\n      <svg aria-hidden=\"true\" class=\"h-5 w-5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.7\" viewbox=\"0 0 24 24\">\n        <path d=\"m3 7 4.5 4L12 4l4.5 7L21 7l-2 13H5L3 7Z\"></path>\n        <path d=\"M5 20h14\"></path>\n      </svg>\n    </div>\n    <h3 class=\"text-sm font-bold text-[#252044]\">Go PRO Pass</h3>\n    <p class=\"mt-1 text-xs leading-relaxed text-[#6B6685]\">Unlock every mock, PYQ vault and AIR insight in one plan.</p>\n    <button class=\"mt-2 inline-flex min-h-[32px] items-center gap-1.5 text-xs font-semibold text-[#5B45D6] hover:text-[#4332B8] focus:outline-none focus:ring-2 focus:ring-[#8B7AE8] rounded\" onclick=\"showSharedShellNotice('PRO Pass plans are a UI preview and are not connected yet.', event)\" type=\"button\">\n      See plans\n      <svg aria-hidden=\"true\" class=\"h-3.5 w-3.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M5 12h14m-7-7 7 7-7 7\"></path></svg>\n    </button>\n  </div>\n\n  <div class=\"flex items-center gap-2.5 border-t border-[#E2E8F0] pt-3\" id=\"sidebar-account-row\">\n    <div class=\"flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C4B5FD] bg-[#EDE9FE] text-sm font-medium text-[#51449A] sidebar-avatar-initials\">ST</div>\n    <div class=\"min-w-0 flex-1\">\n      <p class=\"truncate text-xs font-semibold text-[#252B40]\" id=\"sidebar-user-name\">Student</p>\n      <p class=\"mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600\">Student Plan</p>\n    </div>\n    <button class=\"shrink-0 rounded-lg border border-[#E9C46A] bg-[#FFF9E8] px-2.5 py-2 text-[11px] font-semibold text-[#98700B] hover:bg-[#FFF2C9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6A72D]\" onclick=\"showSharedShellNotice('Upgrade options are a UI preview and are not connected yet.', event)\" type=\"button\">Upgrade</button>\n  </div>\n</div>\n</aside>";
  var COMMON_HEADER_HTML = "<header class=\"shared-app-header h-14 bg-white border-b border-[#E2E8F0] sticky top-0 z-20 flex items-center justify-between gap-2 px-3 sm:px-6 md:px-8\">\n<!-- Left side of header -->\n<div class=\"flex items-center gap-2 md:gap-3 shrink-0\">\n<!-- Mobile Wordmark -->\n<div class=\"md:hidden flex items-center\">\n<span class=\"dashboard-mobile-brand whitespace-nowrap text-sm font-extrabold tracking-tight text-[#1E3A8A]\">SSC Flix</span>\n</div>\n<!-- Mobile Target Selector -->\n<div class=\"md:hidden\">\n<button aria-label=\"Change target examination\" class=\"inline-flex items-center gap-1.5 min-h-[40px] px-2.5 rounded-lg bg-white border border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-[#F8FAFC] text-xs font-semibold text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] cursor-pointer shrink-0\" onclick=\"openSharedShellTargetExamModal()\" title=\"Change target examination\" type=\"button\">\n<span class=\"sr-only\">Target exam:</span>\n<span class=\"target-exam-text whitespace-nowrap\">SSC CGL</span>\n<svg aria-hidden=\"true\" class=\"w-3.5 h-3.5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\"></path></svg>\n</button>\n</div>\n<!-- Desktop Title & Target Exam chip -->\n<div class=\"hidden md:flex items-center\">\n<button aria-label=\"Change target examination\" class=\"inline-flex items-center gap-2.5 min-h-[40px] px-3.5 rounded-lg bg-white border border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-[#F8FAFC] text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-1 cursor-pointer\" onclick=\"openSharedShellTargetExamModal()\" title=\"Change target examination\" type=\"button\">\n<span class=\"text-[11px] font-medium text-[#64748B]\">Target exam</span>\n<span class=\"target-exam-text text-sm font-semibold text-[#0F172A]\">SSC CGL</span>\n<svg aria-hidden=\"true\" class=\"w-4 h-4 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\"></path></svg>\n</button>\n</div>\n</div>\n<!-- Right side of header -->\n<div class=\"flex items-center gap-1.5 md:gap-2.5 shrink-0\">\n\n<!-- Desktop Search -->\n<div class=\"hidden lg:flex relative w-[220px] xl:w-[280px]\" id=\"shared-shell-search-desktop\" role=\"search\">\n  <svg aria-hidden=\"true\" class=\"absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#475569]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n    <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n    <path d=\"m20 20-4-4\"></path>\n  </svg>\n  <input aria-label=\"Search mocks, PYQs and topics\" autocomplete=\"off\" class=\"h-11 w-full rounded-xl border border-[#DDD8EC] bg-[#F4F2FA] pl-10 pr-3 text-sm text-[#37334D] placeholder:text-[#77728F] outline-none transition-colors focus:border-[#A5A0C8] focus:ring-2 focus:ring-[#E9E6F4]\" id=\"shared-shell-search-desktop-input\" placeholder=\"Search mocks, PYQs, reasoning...\" type=\"search\"/>\n</div>\n<!-- Appearance Toggle -->\n<button aria-label=\"Switch to dark mode\" aria-pressed=\"false\" class=\"touch-target flex items-center justify-center w-12 h-11 shrink-0 rounded-xl border border-[#E2E8F0] bg-white text-[#37334D] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-1\" id=\"shared-shell-theme-toggle-btn\" onclick=\"toggleSharedShellTheme()\" title=\"Switch to dark mode\" type=\"button\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" id=\"shared-shell-theme-moon-icon\"><path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path></svg>\n<svg aria-hidden=\"true\" class=\"hidden w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" id=\"shared-shell-theme-sun-icon\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42\"></path></svg>\n</button>\n<!-- Profile Menu Trigger -->\n<div class=\"relative\">\n<button aria-expanded=\"false\" aria-label=\"Open student profile menu\" class=\"touch-target flex items-center justify-center p-1 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" id=\"shared-shell-profile-btn\" onclick=\"toggleSharedShellProfileMenu()\" type=\"button\">\n<div class=\"user-avatar-initials w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-semibold ring-2 ring-blue-100\">ST</div>\n</button>\n<!-- Profile Dropdown -->\n<div class=\"hidden absolute right-0 mt-2 w-72 max-w-[calc(100vw-1.5rem)] bg-white rounded-lg shadow-lg border border-[#E2E8F0] py-2 z-50\" id=\"shared-shell-profile-dropdown\" role=\"menu\">\n<div class=\"px-4 py-2 border-b border-[#E2E8F0]\">\n<p class=\"text-xs text-[#64748B]\">Signed in as</p>\n<p class=\"text-sm font-semibold text-[#0F172A]\" id=\"shared-shell-user-display-name\">Student</p>\n<p class=\"text-xs text-[#64748B] truncate hidden\" id=\"shared-shell-user-display-email\"></p>\n<div class=\"lg:hidden border-b border-[#E2E8F0] p-3\">\n  <div class=\"relative\" id=\"shared-shell-search-mobile\" role=\"search\">\n    <svg aria-hidden=\"true\" class=\"absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n      <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n      <path d=\"m20 20-4-4\"></path>\n    </svg>\n    <input aria-label=\"Search mocks, PYQs and topics\" autocomplete=\"off\" class=\"h-11 w-full rounded-xl border border-[#DDD8EC] bg-[#F4F2FA] pl-10 pr-3 text-sm text-[#37334D] placeholder:text-[#77728F] outline-none transition-colors focus:border-[#A5A0C8] focus:ring-2 focus:ring-[#E9E6F4]\" id=\"shared-shell-search-mobile-input\" placeholder=\"Search mocks, PYQs, reasoning...\" type=\"search\"/>\n  </div>\n</div>\n</div>\n<a class=\"block px-4 py-2 text-sm text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]\" href=\"./preferences%20and%20account%20page.html\" role=\"menuitem\">Preferences</a>\n<a class=\"block px-4 py-2 text-sm text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]\" href=\"./preferences%20and%20account%20page.html\" role=\"menuitem\">Account Settings</a>\n</div>\n</div>\n</div>\n</header>";
  var DASHBOARD_HEADER_HTML = "<header class=\"h-14 bg-white border-b border-[#E2E8F0] sticky top-0 z-20 flex items-center justify-between gap-2 px-3 sm:px-6 md:px-8\">\n<!-- Left side of header -->\n<div class=\"flex items-center gap-2 md:gap-3 shrink-0\">\n<!-- Mobile Wordmark -->\n<div class=\"md:hidden flex items-center\">\n<span class=\"dashboard-mobile-brand whitespace-nowrap text-sm font-extrabold tracking-tight text-[#1E3A8A]\">SSC Flix</span>\n</div>\n<!-- Mobile Target Selector -->\n<div class=\"md:hidden\">\n<button aria-label=\"Change target examination\" class=\"inline-flex items-center gap-1.5 min-h-[40px] px-2 rounded-lg bg-transparent border-0 hover:bg-[#F1F5F9] text-xs font-semibold text-[#334155] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer shrink-0\" onclick=\"openTargetExamModal()\" title=\"Change target examination\" type=\"button\">\n<span class=\"sr-only\">Target exam:</span>\n<span class=\"target-exam-text whitespace-nowrap\">SSC CGL</span>\n<svg aria-hidden=\"true\" class=\"w-3.5 h-3.5 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\"></path></svg>\n</button>\n</div>\n<!-- Desktop Title & Target Exam chip -->\n<div class=\"hidden md:flex items-center\">\n<button aria-label=\"Change target examination\" class=\"inline-flex items-center gap-2.5 min-h-[40px] px-2.5 rounded-lg bg-transparent border-0 hover:bg-[#F1F5F9] text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer\" onclick=\"openTargetExamModal()\" title=\"Change target examination\" type=\"button\">\n<span class=\"text-[11px] font-medium text-[#64748B]\">Target exam</span>\n<span class=\"target-exam-text text-sm font-semibold text-[#0F172A]\">SSC CGL</span>\n<svg aria-hidden=\"true\" class=\"w-4 h-4 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\"></path></svg>\n</button>\n</div>\n</div>\n<!-- Right side of header -->\n<div class=\"flex items-center gap-1.5 md:gap-2.5 shrink-0\">\n\n<!-- Desktop Search -->\n<div class=\"hidden lg:flex relative w-[220px] xl:w-[280px]\" id=\"dashboard-search-desktop\" role=\"search\">\n  <svg aria-hidden=\"true\" class=\"absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#475569]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n    <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n    <path d=\"m20 20-4-4\"></path>\n  </svg>\n  <input aria-label=\"Search mocks, PYQs and topics\" autocomplete=\"off\" class=\"h-11 w-full rounded-xl border border-[#DDD8EC] bg-[#F4F2FA] pl-10 pr-3 text-sm text-[#37334D] placeholder:text-[#77728F] outline-none transition-colors focus:border-[#A5A0C8] focus:ring-2 focus:ring-[#E9E6F4]\" id=\"dashboard-search-desktop-input\" placeholder=\"Search mocks, PYQs, reasoning...\" type=\"search\"/>\n</div>\n<!-- Appearance Toggle -->\n<button aria-label=\"Switch to dark mode\" aria-pressed=\"false\" class=\"touch-target flex items-center justify-center w-12 h-11 shrink-0 rounded-xl border border-[#E2E8F0] bg-white text-[#37334D] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-1\" id=\"theme-toggle-btn\" onclick=\"toggleDashboardTheme()\" title=\"Switch to dark mode\" type=\"button\">\n<svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" id=\"theme-moon-icon\"><path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path></svg>\n<svg aria-hidden=\"true\" class=\"hidden w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" id=\"theme-sun-icon\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42\"></path></svg>\n</button>\n<!-- Profile Menu Trigger -->\n<div class=\"relative\">\n<button aria-expanded=\"false\" aria-label=\"Open student profile menu\" class=\"touch-target flex items-center justify-center p-1 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]\" id=\"profile-btn\" onclick=\"toggleProfileMenu()\" type=\"button\">\n<div class=\"user-avatar-initials w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-semibold ring-2 ring-blue-100\">ST</div>\n</button>\n<!-- Profile Dropdown -->\n<div class=\"hidden absolute right-0 mt-2 w-[292px] max-w-[calc(100vw-1.5rem)] bg-white rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.14)] border border-[#E2E8F0] py-2 z-50\" id=\"profile-dropdown\" role=\"menu\" aria-label=\"Student profile menu\">\n  <div class=\"flex items-center gap-3 px-4 py-3\">\n    <div class=\"user-avatar-initials flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C4B5FD] bg-[#EDE9FE] text-base font-medium text-[#51449A]\">ST</div>\n    <div class=\"min-w-0 flex-1\">\n      <p class=\"truncate text-sm font-bold text-[#252B40]\" id=\"user-display-name\">Student</p>\n      <p class=\"truncate text-xs text-[#64748B]\" id=\"user-display-email\"></p>\n      <span class=\"mt-1.5 inline-flex rounded-lg border border-[#E9C46A] bg-[#FFF8E8] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#98700B]\">Student Plan</span>\n    </div>\n  </div>\n\n  <div class=\"lg:hidden border-t border-[#E2E8F0] px-3 py-3\">\n    <div class=\"relative\" id=\"dashboard-search-mobile\" role=\"search\">\n      <svg aria-hidden=\"true\" class=\"absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n        <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n        <path d=\"m20 20-4-4\"></path>\n      </svg>\n      <input aria-label=\"Search mocks, PYQs and topics\" autocomplete=\"off\" class=\"h-10 w-full rounded-xl border border-[#DDD8EC] bg-[#F4F2FA] pl-10 pr-3 text-sm text-[#37334D] placeholder:text-[#77728F] outline-none transition-colors focus:border-[#A5A0C8] focus:ring-2 focus:ring-[#E9E6F4]\" id=\"dashboard-search-mobile-input\" placeholder=\"Search mocks, PYQs, reasoning...\" type=\"search\"/>\n    </div>\n  </div>\n\n  <div class=\"mx-3 border-t border-[#E2E8F0]\"></div>\n  <nav aria-label=\"Profile actions\" class=\"px-2 py-2\">\n    <button class=\"flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[#475569] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]\" onclick=\"showPrototypeNotice('Subscription plan details are not connected in this preview.', event); toggleProfileMenu()\" role=\"menuitem\" type=\"button\">\n      <svg aria-hidden=\"true\" class=\"h-4 w-4 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n        <path d=\"M3 7h18l-2 13H5L3 7Z\"></path><path d=\"M8 7a4 4 0 0 1 8 0M3 11h18\"></path>\n      </svg>\n      <span>Subscription Plan</span>\n    </button>\n    <a class=\"flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]\" href=\"./preferences%20and%20account%20page.html\" onclick=\"toggleProfileMenu()\" role=\"menuitem\">\n      <svg aria-hidden=\"true\" class=\"h-4 w-4 shrink-0 text-[#64748B]\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n        <circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.9.3l-.1.1h-3.4l-.1-.2a1.7 1.7 0 0 0-1.6-1.1 1.7 1.7 0 0 0-.8.2l-.2.1-1.7-2.9.1-.1a1.7 1.7 0 0 0 .3-1.9l-.1-.2-2.9-1.7.1-.2v-3.4l.2-.1a1.7 1.7 0 0 0 1.1-1.6 1.7 1.7 0 0 0-.2-.8l-.1-.2 2.9-1.7.1.1a1.7 1.7 0 0 0 1.9.3l.2-.1h3.4l.1.2a1.7 1.7 0 0 0 1.6 1.1 1.7 1.7 0 0 0 .8-.2l.2-.1 1.7 2.9-.1.1a1.7 1.7 0 0 0-.3 1.9l.1.2 2.9 1.7-.1.2v3.4l-.2.1a1.7 1.7 0 0 0-1.1 1.6\"></path>\n      </svg>\n      <span>Preferences</span>\n    </a>\n    <a href=\"./welcome-page.html\" class=\"flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#E11D48] transition-colors hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400\" role=\"menuitem\">\n      <svg aria-hidden=\"true\" class=\"h-4 w-4 shrink-0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n        <path d=\"M10 17l5-5-5-5M15 12H3\"></path><path d=\"M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6\"></path>\n      </svg>\n      <span>Sign Out</span>\n    </a>\n  </nav>\n</div>\n</div>\n</div>\n</header>";
  var TARGET_MODAL_HTML = "<div class=\"hidden fixed inset-0 bg-slate-900/50 z-[60] flex items-center justify-center p-4\" id=\"shared-shell-target-modal-overlay\">\n  <div aria-modal=\"true\" class=\"shared-target-modal-panel bg-white rounded-xl max-w-md w-full border border-[#E2E8F0] shadow-xl p-5\" onclick=\"event.stopPropagation()\" role=\"dialog\" aria-labelledby=\"shared-shell-target-modal-title\">\n    <div class=\"flex items-center justify-between pb-3 border-b border-[#E2E8F0]\">\n      <div>\n        <h3 class=\"text-base font-bold text-[#0F172A]\" id=\"shared-shell-target-modal-title\">Choose Target Examination</h3>\n        <p class=\"text-xs text-[#64748B]\">Personalizes your mock papers, PYQs and syllabus drills.</p>\n      </div>\n      <button aria-label=\"Close dialog\" class=\"text-[#64748B] hover:text-[#0F172A] p-1 cursor-pointer\" onclick=\"closeSharedShellTargetExamModal()\" type=\"button\">\n        <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M18 6 6 18M6 6l12 12\"></path></svg>\n      </button>\n    </div>\n    <div class=\"py-4 space-y-2\" id=\"shared-shell-exam-options\"></div>\n    <div class=\"pt-3 border-t border-[#E2E8F0] flex justify-end gap-2\">\n      <button class=\"px-3.5 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-100 rounded-lg cursor-pointer\" onclick=\"closeSharedShellTargetExamModal()\" type=\"button\">Cancel</button>\n      <button class=\"px-4 py-2 text-xs font-semibold bg-[#1D4ED8] text-white rounded-lg hover:bg-[#1E3A8A] cursor-pointer\" onclick=\"applySharedShellTargetExamSelection()\" type=\"button\">Save Target</button>\n    </div>\n  </div>\n</div>";
  if (sidebarSlot) sidebarSlot.outerHTML = SIDEBAR_HTML;
  if (headerSlot) headerSlot.outerHTML = page === 'dashboard' ? DASHBOARD_HEADER_HTML : COMMON_HEADER_HTML;
  if (page !== 'dashboard') document.body.insertAdjacentHTML('beforeend', TARGET_MODAL_HTML);
  var activeHrefByPage = {
    dashboard: 'dashboard%20page.html', mocks: 'mock%20test%20page.html',
    pyqs: 'pyqs%20page.html', chapters: 'chapter%20test%20page.html',
    mytests: 'my%20tests%20page.html', bookmarks: 'bookmarks%20page.html',
    leaderboard: 'leaderboard.html', preferences: 'preferences%20and%20account%20page.html',
    results: 'my%20tests%20page.html'
  };
  var activeHref = activeHrefByPage[page];
  document.querySelectorAll('.shared-app-sidebar .nav-item').forEach(function (link) {
    var active = Boolean(activeHref && link.getAttribute('href') === './' + activeHref);
    link.removeAttribute('aria-current');
    link.classList.remove('font-semibold', 'bg-[#EFF6FF]', 'text-[#1D4ED8]');
    if (active) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('font-semibold', 'bg-[#EFF6FF]', 'text-[#1D4ED8]');
    } else {
      link.classList.add('font-medium', 'text-[#475569]');
    }
  });
  window.showSharedShellNotice = function (message) {
    var notice = document.getElementById('shared-shell-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'shared-shell-notice';
      notice.className = 'fixed bottom-5 right-5 z-[70] max-w-sm rounded-lg bg-[#0F172A] px-4 py-3 text-sm font-medium text-white shadow-xl';
      notice.setAttribute('role', 'status');
      notice.setAttribute('aria-live', 'polite');
      document.body.appendChild(notice);
    }
    notice.textContent = message || 'This option is not available yet.';
    notice.classList.remove('hidden');
    window.clearTimeout(notice._hideTimer);
    notice._hideTimer = window.setTimeout(function () { notice.classList.add('hidden'); }, 2600);
  };
})();

(function () {
  'use strict';
  if (window.__sscFlixSharedShellBehaviorBound) return;
  window.__sscFlixSharedShellBehaviorBound = true;

  const EXAMS = [
    { id: 'cgl', code: 'SSC CGL', name: 'Combined Graduate Level Examination (Tier I & II)' },
    { id: 'chsl', code: 'SSC CHSL', name: 'Combined Higher Secondary Level (10+2)' },
    { id: 'cpo', code: 'SSC CPO', name: 'Central Police Organisation SI & ASI' },
    { id: 'mts', code: 'SSC MTS', name: 'Multi-Tasking Staff & Havaldar' },
    { id: 'gd', code: 'SSC GD', name: 'General Duty Constable (CAPFs, SSF, Rifleman)' },
    { id: 'steno', code: 'SSC Stenographer', name: 'Grade C & D Examination' }
  ];

  function normalizeExam(value) {
    const raw = String(value || '').trim().toLowerCase();
    if (raw.includes('steno')) return 'steno';
    if (raw.includes('chsl')) return 'chsl';
    if (raw.includes('cpo')) return 'cpo';
    if (raw.includes('mts')) return 'mts';
    if (raw === 'gd' || raw.includes('ssc gd')) return 'gd';
    return 'cgl';
  }

  let selectedExam = 'cgl';
  try {
    const stored = localStorage.getItem('sscflix-target-exam');
    if (stored) selectedExam = normalizeExam(stored);
    else if (window.SSCFlixState?.studentPreferences?.targetExam) {
      selectedExam = normalizeExam(window.SSCFlixState.studentPreferences.targetExam);
    }
  } catch (error) {
    if (window.SSCFlixState?.studentPreferences?.targetExam) {
      selectedExam = normalizeExam(window.SSCFlixState.studentPreferences.targetExam);
    }
  }

  function syncExamText() {
    const exam = EXAMS.find(item => item.id === selectedExam) || EXAMS[0];
    document.querySelectorAll('.target-exam-text').forEach(node => { node.textContent = exam.code; });
  }

  window.openSharedShellTargetExamModal = function () {
    const overlay = document.getElementById('shared-shell-target-modal-overlay');
    const container = document.getElementById('shared-shell-exam-options');
    if (!overlay || !container) return;
    container.replaceChildren();

    EXAMS.forEach(exam => {
      const label = document.createElement('label');
      label.className = 'flex items-center justify-between gap-3 p-3 rounded-lg border cursor-pointer transition-colors ' +
        (exam.id === selectedExam ? 'border-[#1D4ED8] bg-blue-50/60' : 'border-[#E2E8F0] hover:bg-slate-50');

      const left = document.createElement('span');
      left.className = 'flex min-w-0 items-center gap-3';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'shared-shell-target-exam';
      radio.value = exam.id;
      radio.checked = exam.id === selectedExam;
      radio.className = 'shrink-0 text-[#1D4ED8] focus:ring-[#1D4ED8]';

      const text = document.createElement('span');
      text.className = 'min-w-0';
      const title = document.createElement('span');
      title.className = 'block text-sm font-semibold text-[#0F172A]';
      title.textContent = exam.code;
      const description = document.createElement('span');
      description.className = 'block text-xs text-[#64748B]';
      description.textContent = exam.name;
      text.append(title, description);
      left.append(radio, text);
      label.append(left);

      if (exam.id === selectedExam) {
        const active = document.createElement('span');
        active.className = 'shrink-0 rounded bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-[#1D4ED8]';
        active.textContent = 'Active';
        label.append(active);
      }

      container.append(label);
    });

    overlay.classList.remove('hidden');
  };

  window.closeSharedShellTargetExamModal = function () {
    document.getElementById('shared-shell-target-modal-overlay')?.classList.add('hidden');
  };

  window.applySharedShellTargetExamSelection = function () {
    const selected = document.querySelector('input[name="shared-shell-target-exam"]:checked');
    if (!selected) return;
    selectedExam = normalizeExam(selected.value);

    try { localStorage.setItem('sscflix-target-exam', selectedExam); } catch (error) {}
    window.SSCFlixState = window.SSCFlixState || {};
    window.SSCFlixState.studentPreferences = window.SSCFlixState.studentPreferences || {};
    window.SSCFlixState.studentPreferences.targetExam = selectedExam;

    syncExamText();
    window.dispatchEvent(new CustomEvent('sscflix:statechange', {
      detail: { type: 'targetExam', examId: selectedExam }
    }));
    window.closeSharedShellTargetExamModal();
  };

  window.toggleSharedShellProfileMenu = function () {
    const dropdown = document.getElementById('shared-shell-profile-dropdown');
    const button = document.getElementById('shared-shell-profile-btn');
    if (!dropdown || !button) return;
    const opening = dropdown.classList.contains('hidden');
    dropdown.classList.toggle('hidden', !opening);
    button.setAttribute('aria-expanded', String(opening));
  };

  window.showSharedShellNotice = function (message) {
    let notice = document.getElementById('shared-shell-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'shared-shell-notice';
      notice.className = 'fixed bottom-5 right-5 z-[70] max-w-sm rounded-lg bg-[#0F172A] px-4 py-3 text-sm font-medium text-white shadow-xl';
      notice.setAttribute('role', 'status');
      notice.setAttribute('aria-live', 'polite');
      document.body.appendChild(notice);
    }
    notice.textContent = message;
    notice.classList.remove('hidden');
    window.clearTimeout(notice._hideTimer);
    notice._hideTimer = window.setTimeout(() => notice.classList.add('hidden'), 2600);
  };

  function applyTheme(theme, persist) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('shared-dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('dashboard-dark', isDark);

    const button = document.getElementById('shared-shell-theme-toggle-btn');
    const moon = document.getElementById('shared-shell-theme-moon-icon');
    const sun = document.getElementById('shared-shell-theme-sun-icon');
    if (button) {
      const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(isDark));
    }
    moon?.classList.toggle('hidden', isDark);
    sun?.classList.toggle('hidden', !isDark);

    if (persist) {
      try { localStorage.setItem('sscflix-dashboard-theme', isDark ? 'dark' : 'light'); } catch (error) {}
    }

    document.querySelectorAll('#theme-segmented .theme-tab').forEach(tab => {
      tab.setAttribute('aria-checked', String(tab.getAttribute('data-theme') === (isDark ? 'dark' : 'light')));
    });
  }

  window.toggleSharedShellTheme = function () {
    const current = document.body.classList.contains('shared-dark-mode') ||
      document.documentElement.classList.contains('dark');
    const next = current ? 'light' : 'dark';
    applyTheme(next, true);

    const matchingSettingsTab = document.querySelector('#theme-segmented .theme-tab[data-theme="' + next + '"]');
    if (matchingSettingsTab) matchingSettingsTab.click();
  };

  document.addEventListener('click', function (event) {
    const profileDropdown = document.getElementById('shared-shell-profile-dropdown');
    const profileButton = document.getElementById('shared-shell-profile-btn');
    if (profileDropdown && profileButton &&
        !profileDropdown.contains(event.target) && !profileButton.contains(event.target)) {
      profileDropdown.classList.add('hidden');
      profileButton.setAttribute('aria-expanded', 'false');
    }

    const settingsThemeTab = event.target.closest('#theme-segmented .theme-tab');
    if (settingsThemeTab) {
      applyTheme(settingsThemeTab.getAttribute('data-theme'), true);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      window.closeSharedShellTargetExamModal();
      const dropdown = document.getElementById('shared-shell-profile-dropdown');
      const button = document.getElementById('shared-shell-profile-btn');
      if (dropdown) dropdown.classList.add('hidden');
      if (button) button.setAttribute('aria-expanded', 'false');
    }
  });

  function syncProfile() {
    const profile = window.SSCFlixState && window.SSCFlixState.studentProfile;
    const name = profile && typeof profile.name === 'string' && profile.name.trim() ? profile.name.trim() : 'Student';
    const email = profile && typeof profile.email === 'string' ? profile.email.trim() : '';
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'ST';

    const displayName = document.getElementById('shared-shell-user-display-name');
    const displayEmail = document.getElementById('shared-shell-user-display-email');
    const sidebarName = document.getElementById('sidebar-user-name');
    if (displayName) displayName.textContent = name;
    if (displayEmail) {
      displayEmail.textContent = email;
      displayEmail.classList.toggle('hidden', !email);
    }
    if (sidebarName) sidebarName.textContent = name;
    document.querySelectorAll('.user-avatar-initials, .sidebar-avatar-initials').forEach(node => {
      node.textContent = initials;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    let savedTheme = 'light';
    try {
      const stored = localStorage.getItem('sscflix-dashboard-theme');
      if (stored === 'dark' || stored === 'light') savedTheme = stored;
    } catch (error) {}
    applyTheme(savedTheme, false);
    syncExamText();
    syncProfile();
  });

  window.addEventListener('sscflix:statechange', function (event) {
    if (event.detail?.examId) {
      selectedExam = normalizeExam(event.detail.examId);
      syncExamText();
    }
    syncProfile();
  });
})();

