(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile menu
  var btn = document.querySelector('.menu-button');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll reveals
  var items = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  // count-up stats in hero
  document.querySelectorAll('[data-n]').forEach(function (el) {
    var end = +el.dataset.n, plus = el.dataset.plus ? '+' : '';
    if (reduce) { el.textContent = end + plus; return; }
    var start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / 1200, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + (p === 1 ? plus : '');
      if (p < 1) requestAnimationFrame(step);
    }
    setTimeout(function () { requestAnimationFrame(step); }, 700);
  });
})();
