// ── SCROLL REVEAL ──────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(r => io.observe(r));

// ── FORCE MAILTO & TEL LINKS ──────────────────
document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const url = this.getAttribute('href');
    // Try location assign first, then fallback
    try {
      window.location.href = url;
    } catch(err) {
      window.open(url);
    }
  });
});
