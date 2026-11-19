/* Subtle reveal-on-scroll (replaces the wow.js fade-ins).
   Load in <head> without defer so .js-reveal is set before first paint.
   Does nothing for visitors who prefer reduced motion, or on browsers without
   IntersectionObserver, so content is never hidden in those cases. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  root.classList.add('js-reveal');

  function init() {
    // Header/footer are injected by shared-component.js, so query after DOM is ready
    var items = document.querySelectorAll('.wow:not(.fixed-top):not(.hero-header):not(.page-header):not(.tada)');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) {
      var d = parseFloat(el.getAttribute('data-wow-delay')) || 0;
      el.style.setProperty('--reveal-delay', Math.min(d, 0.3) + 's');
      io.observe(el);
    });

    // Safety net: never leave content hidden if something goes wrong
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add('is-visible'); });
    }, 4000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
