/* Island Pest Control: mobile menu toggle + footer year. No dependencies. */
(function () {
  var btn = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (btn && list) {
    var close = function () { list.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('open')) { close(); btn.focus(); }
    });
  }
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
