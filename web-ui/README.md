# SSC Flix — Single Page Application

SSC Flix is deployed as a static, hash-routed Single Page Application (SPA) so it works on GitHub Pages without server-side routing or rewrite rules.

## Local preview

From the repository root, serve the `web-ui` directory with any static HTTP server. For example:

```bash
python -m http.server 8000 --directory web-ui
```

Open `http://localhost:8000/`.

Do not open `index.html` using a `file://` URL: the SPA loads its page views and scripts with `fetch()`, which requires an HTTP server.

## Structure

- `index.html` — the single application entry point.
- `assets/js/spa-router.js` — hash routing, page loading, browser back/forward and legacy URL handling.
- `assets/js/app-shell.js` — shared signed-in sidebar, header, exam selector, profile menu and theme behaviour.
- `assets/js/pages/` — page-specific behaviour.
- `views/` — HTML view fragments loaded by the SPA.
- Legacy `.html` files — redirect aliases that keep old links and bookmarks working.

## Routes

- `#/welcome`
- `#/login`
- `#/signup`
- `#/forgot-password`
- `#/onboarding`
- `#/dashboard`
- `#/mock-tests`
- `#/pyqs`
- `#/chapter-tests`
- `#/my-tests`
- `#/bookmarks`
- `#/preferences`
- `#/leaderboard`
- `#/results`
- `#/cbt`
- `#/site-info`

## GitHub Pages

The Pages workflow publishes the complete `web-ui` directory. It must not copy `welcome-page.html` over `index.html`; the latter is the SPA entry point. Keep `.nojekyll` in place so all static assets are published.