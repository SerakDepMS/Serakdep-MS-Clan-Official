
(function() {
  'use strict';

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const SELECTORS = [
    '.card',
    '.gallery-card',
    '.clan-logo-section',
    '.contact-cards .contact-card',
    '.team-member',
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
    '.direct-card',
    '.div-section',
    '.rule-card',
    '.sanction-card',
    '.game-info-block'
  ];

  if (!document.getElementById('scroll-reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'scroll-reveal-styles';
    style.textContent = `
      .sr-hidden { opacity:0; transform:translateY(22px); transition:opacity .55s ease,transform .55s ease; }
      .sr-visible { opacity:1 !important; transform:translateY(0) !important; }
    `;
    document.head.appendChild(style);
  }

  function initReveal() {
    const elements = document.querySelectorAll(SELECTORS.join(', '));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove('sr-hidden');
            el.classList.add('sr-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -25px 0px' }
    );

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 50 && rect.bottom > 0) {
        el.classList.add('sr-visible');
        el.classList.remove('sr-hidden');
        return;
      }
      el.classList.add('sr-hidden');
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();