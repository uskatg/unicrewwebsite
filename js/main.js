// unicrew — shared behaviour (ported from uniworks): nav shadow, mobile menu,
// active-link highlight, fade-up on scroll, carousel arrows.
(function () {
  // ── Nav scroll shadow ──────────────────────────────────────────────────
  var nav = document.getElementById('main-nav');
  if (nav) {
    addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', scrollY > 8);
    }, { passive: true });
  }

  // ── Mobile hamburger ───────────────────────────────────────────────────
  var hbg = document.getElementById('nav-hbg');
  var overlay = document.getElementById('mob-overlay');
  var menuOpen = false;
  if (hbg && overlay) {
    hbg.addEventListener('click', function () {
      menuOpen = !menuOpen;
      overlay.classList.toggle('open', menuOpen);
      hbg.setAttribute('aria-expanded', String(menuOpen));
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuOpen = false;
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Nav category dropdowns open on hover (CSS :hover / :focus-within) — no JS toggle.

  // ── Active link highlight (nav dropdown items + textlinks) ─────────────
  var path = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-dd-menu a, .nav-textlink').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].replace(/\.html$/, '');
    if (href && href === path) a.classList.add('active');
  });

  // ── Scroll-triggered fade-up ───────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('vis'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.fu').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.fu').forEach(function (el) { el.classList.add('vis'); });
  }

  // ── Horizontal carousel arrows (references) ────────────────────────────
  document.querySelectorAll('[data-scroll-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('data-scroll-target'));
      if (track) track.scrollBy({ left: btn.hasAttribute('data-prev') ? -388 : 388, behavior: 'smooth' });
    });
  });
})();
