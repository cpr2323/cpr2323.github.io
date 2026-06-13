document.querySelectorAll('.shot, .hero-shot').forEach(function (el) {
  el.addEventListener('click', function (e) {
    var img = el.querySelector('img');
    if (!img) return;
    e.preventDefault();
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.querySelector('img').src = img.src;
    lb.classList.add('open');
  });
});

document.addEventListener('click', function (e) {
  var lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.target === lb || e.target.classList.contains('lightbox-close')) {
    lb.classList.remove('open');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
  }
});
