(function () {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const SELECTORS = [
    '.card',
    '.gallery-card',
    '.clan-logo-section',
    '.contact-cards .contact-card',
    '.team-member',
    '.timeline-item',
    '.alianza-card',
    '.tutorial-card',
    '.stat-card',
    '.chart-card',
    '.tool-card',
    '.alert',
    '.requirements-container',
    '.values-grid .value-card',
    '.scenarios-container .scenario-card',
    '.commitments .commitment-item',
    '.special-thanks .thank-item',
    '.team-testimonials .testimonial',
    '.team-gallery-improved .gallery-card',
    '.games-filter-system',
    '.testimonials-container .testimonial',
    '.feature-item',
    '.game-card',
    '.news-card',
    '.rank-item',
    '.tech-item',
    '.gallery-stats .stat',
  ];


  const style = document.createElement('style');
  style.textContent = '.sr-hidden{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}';
  document.head.appendChild(style);

  function initReveal() {
    const elements = document.querySelectorAll(SELECTORS.join(', '));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove('sr-hidden');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -25px 0px' }
    );

    elements.forEach(function(el) {

      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.05) {
        el.classList.add('sr-hidden');
      }
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
