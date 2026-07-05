// unicrew — shared behaviour: nav shadow, mobile menu, fade-up on scroll
(function () {
  var nav = document.getElementById('main-nav');
  if (nav) {
    addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', scrollY > 8);
    }, { passive: true });
  }

  var hbg = document.getElementById('nav-hbg');
  var overlay = document.getElementById('mob-overlay');
  if (hbg && overlay) {
    hbg.addEventListener('click', function () {
      var open = overlay.classList.toggle('open');
      hbg.setAttribute('aria-expanded', open);
    });
    overlay.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') overlay.classList.remove('open');
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('vis'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fu').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.fu').forEach(function (el) { el.classList.add('vis'); });
  }

  // horizontal carousel arrows (references)
  document.querySelectorAll('[data-scroll-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('data-scroll-target'));
      if (track) track.scrollBy({ left: btn.hasAttribute('data-prev') ? -388 : 388, behavior: 'smooth' });
    });
  });
})();
