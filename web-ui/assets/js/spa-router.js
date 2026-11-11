(function () {
  'use strict';

  var ROUTES = {
    welcome: { view: 'welcome', page: 'welcome', title: 'SSC Flix — Learn. Practise. Succeed.', shell: false },
    login: { view: 'login', page: 'login', title: 'Sign In — SSC Flix', shell: false },
    signup: { view: 'signup', page: 'signup', title: 'Create Account — SSC Flix', shell: false },
    'forgot-password': { view: 'forgot-password', page: 'forgot', title: 'Forgot Password — SSC Flix', shell: false },
    onboarding: { view: 'onboarding', page: 'onboarding', title: 'SSC Flix — First-Time Onboarding', shell: false },
    dashboard: { view: 'dashboard', page: 'dashboard', title: 'SSC Flix — Student Dashboard', shell: true },
    'mock-tests': { view: 'mock-tests', page: 'mocks', title: 'SSC Flix — Mock Tests', shell: true },
    pyqs: { view: 'pyqs', page: 'pyqs', title: 'Previous Year Questions — SSC Flix', shell: true },
    'chapter-tests': { view: 'chapter-tests', page: 'chapters', title: 'Chapter Tests — SSC Flix', shell: true },
    'my-tests': { view: 'my-tests', page: 'mytests', title: 'My Tests — SSC Flix', shell: true },
    bookmarks: { view: 'bookmarks', page: 'bookmarks', title: 'Bookmarks — SSC Flix', shell: true },
    preferences: { view: 'preferences', page: 'preferences', title: 'Preferences & Account — SSC Flix', shell: true },
    leaderboard: { view: 'leaderboard', page: 'leaderboard', title: 'Leaderboard — SSC Flix', shell: true },
    results: { view: 'results', page: 'results', title: 'Test Results & Answer Review — SSC Flix', shell: true },
    cbt: { view: 'cbt', page: 'cbt', title: 'SSC Flix — CBT Exam Interface', shell: false },
    'site-info': { view: 'site-info', page: 'site-info', title: 'SSC Flix — Information', shell: false }
  };

  var LEGACY = {
    'welcome-page.html': 'welcome',
    'login.html': 'login',
    'create account.html': 'signup',
    'forgot password page.html': 'forgot-password',
    'first time onboarding page.html': 'onboarding',
    'dashboard page.html': 'dashboard',
    'mock test page.html': 'mock-tests',
    'pyqs page.html': 'pyqs',
    'chapter test page.html': 'chapter-tests',
    'my tests page.html': 'my-tests',
    'bookmarks page.html': 'bookmarks',
    'preferences and account page.html': 'preferences',
    'leaderboard.html': 'leaderboard',
    'test resut and ans review.html': 'results',
    'cbt interface page.html': 'cbt',
    'site-info.html': 'site-info'
  };

  var app = document.getElementById('app');
  var styleHost = document.getElementById('route-style-host');
  var activeController = null;
  var currentRoute = '';
  var shellSourcePromise = null;
  var loadingToken = 0;

  function decodePath(value) {
    try { return decodeURIComponent(value); } catch (error) { return value; }
  }

  function parseHash() {
    var raw = window.location.hash || '';
    if (raw.indexOf('#/') !== 0) return { route: 'welcome', anchor: '' };
    var value = raw.slice(2);
    var split = value.indexOf('#');
    var route = (split >= 0 ? value.slice(0, split) : value).split('?')[0].replace(/^\/+|\/+$/g, '');
    var anchor = split >= 0 ? value.slice(split + 1) : '';
    return { route: ROUTES[route] ? route : 'welcome', anchor: anchor };
  }

  function navigate(path) {
    var normalized = String(path || 'welcome').replace(/^#?\/?/, '').split('#')[0].replace(/^\/+|\/+$/g, '');
    if (!ROUTES[normalized]) normalized = 'welcome';
    var next = '#/' + normalized;
    if (window.location.hash === next) {
      loadRoute(normalized, '');
    } else {
      window.location.hash = next;
    }
  }

  window.SSCFlixRouter = { navigate: navigate, getCurrentRoute: function () { return currentRoute; } };

  function loadExternalShell() {
    if (!shellSourcePromise) {
      shellSourcePromise = fetch('./assets/js/app-shell.js', { cache: 'no-cache' }).then(function (response) {
        if (!response.ok) throw new Error('Shared app shell could not be loaded.');
        return response.text();
      });
    }
    return shellSourcePromise.then(function (source) {
      var script = document.createElement('script');
      script.textContent = source;
      document.body.appendChild(script);
      script.remove();
    });
  }

  function executePageScript(source) {
    var script = document.createElement('script');
    script.textContent = source;
    document.body.appendChild(script);
    script.remove();
  }

  function scopedPageListeners(controller, callback) {
    var originalDocumentAdd = document.addEventListener;
    var originalWindowAdd = window.addEventListener;

    function optionsWithSignal(options) {
      if (options && typeof options === 'object' && options.signal) return options;
      if (typeof options === 'boolean') return { capture: options, signal: controller.signal };
      return Object.assign({}, options || {}, { signal: controller.signal });
    }

    document.addEventListener = function (type, listener, options) {
      return originalDocumentAdd.call(document, type, listener, optionsWithSignal(options));
    };
    window.addEventListener = function (type, listener, options) {
      return originalWindowAdd.call(window, type, listener, optionsWithSignal(options));
    };

    try { callback(); }
    finally {
      document.addEventListener = originalDocumentAdd;
      window.addEventListener = originalWindowAdd;
    }
  }

  function convertLegacyHref(href) {
    if (!href || href.charAt(0) === '#' || /^(?:https?:|mailto:|tel:|javascript:)/i.test(href)) return null;
    var url;
    try { url = new URL(href, window.location.href); } catch (error) { return null; }
    if (url.origin !== window.location.origin) return null;
    var name = decodePath(url.pathname.split('/').pop() || '').toLowerCase();
    var route = LEGACY[name];
    if (!route) return null;
    return '#/' + route + (url.hash ? '#' + url.hash.slice(1) : '');
  }

  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link || event.defaultPrevented || link.hasAttribute('download') || link.target === '_blank') return;
    var next = convertLegacyHref(link.getAttribute('href'));
    if (!next) return;
    event.preventDefault();
    if (window.location.hash === next) loadRoute(next.slice(2).split('#')[0], next.split('#').slice(2).join('#'));
    else window.location.hash = next;
  });

  function scrollToAnchor(anchor) {
    if (!anchor) { window.scrollTo(0, 0); return; }
    var id = decodePath(anchor);
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }

  async function loadRoute(route, anchor) {
    var config = ROUTES[route] || ROUTES.welcome;
    var token = ++loadingToken;
    if (activeController) activeController.abort();
    activeController = new AbortController();
    currentRoute = route;

    try {
      var response = await fetch('./views/' + config.view + '.html', { cache: 'no-cache' });
      if (!response.ok) throw new Error('Could not load the ' + route + ' page (' + response.status + ').');
      var markup = await response.text();
      if (token !== loadingToken) return;
      var parsed = new DOMParser().parseFromString(markup, 'text/html');
      var view = parsed.querySelector('[data-spa-view]');
      if (!view) throw new Error('The ' + route + ' page template is incomplete.');

      document.title = config.title;
      document.documentElement.className = view.getAttribute('data-html-class') || '';
      document.body.className = view.getAttribute('data-body-class') || 'min-h-screen bg-[#F8FAFC]';
      document.body.setAttribute('data-page', config.page);
      styleHost.replaceChildren();
      var styles = parsed.querySelector('style[data-route-style]');
      if (styles) styleHost.appendChild(styles.cloneNode(true));
      app.innerHTML = view.innerHTML;

      if (config.shell) await loadExternalShell();
      if (token !== loadingToken) return;

      var pageResponse = await fetch('./assets/js/pages/' + config.view + '.js', { cache: 'no-cache' });
      if (!pageResponse.ok) throw new Error('Could not load page behaviour for ' + route + '.');
      var pageScript = await pageResponse.text();
      if (token !== loadingToken) return;
      scopedPageListeners(activeController, function () { executePageScript(pageScript); });

      // Existing pages initialize through DOMContentLoaded. Dispatch it after their markup and scripts are ready.
      document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
      window.dispatchEvent(new Event('load'));
      requestAnimationFrame(function () { if (token === loadingToken) scrollToAnchor(anchor); });
    } catch (error) {
      if (token !== loadingToken || error.name === 'AbortError') return;
      console.error('[SSC Flix router]', error);
      app.innerHTML = '<main class="min-h-screen flex items-center justify-center p-6"><section class="max-w-lg w-full bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm"><h1 class="text-xl font-bold text-slate-900">This page could not be opened</h1><p class="mt-2 text-sm text-slate-600"></p><button type="button" class="mt-5 rounded-lg bg-blue-700 text-white px-4 py-2 font-semibold" id="spa-retry">Try again</button><a class="block mt-4 text-sm text-blue-700 font-semibold" href="#/welcome">Return to SSC Flix</a></section></main>';
      var message = app.querySelector('p');
      if (message) message.textContent = error.message || 'Please check your connection and try again.';
      var retry = document.getElementById('spa-retry');
      if (retry) retry.addEventListener('click', function () { loadRoute(route, anchor); });
    }
  }

  window.addEventListener('hashchange', function () {
    var state = parseHash();
    loadRoute(state.route, state.anchor);
  });

  var initial = parseHash();
  if (window.location.hash.indexOf('#/') !== 0) window.history.replaceState(null, '', window.location.pathname + window.location.search + '#/welcome');
  loadRoute(initial.route, initial.anchor);
})();