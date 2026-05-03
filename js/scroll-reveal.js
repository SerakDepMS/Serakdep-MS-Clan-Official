(function () {
  if (typeof window === "undefined") return;


  const SELECTORS = [
    ".card",
    ".gallery-card",
    ".clan-logo-section",
    ".contact-cards .contact-card",
    ".team-member",
    ".timeline-item",
    ".alianza-card",
    ".tutorial-card",
    ".stat-card",
    ".chart-card",
    ".tool-card",
    ".alert",
    ".requirements-container",
    ".values-grid .value-card",
    ".scenarios-container .scenario-card",
    ".commitments .commitment-item",
    ".special-thanks .thank-item",
    ".team-testimonials .testimonial",
    ".team-gallery-improved .gallery-card",
    ".games-filter-system",
    ".testimonials-container .testimonial",
    ".feature-item",
    ".game-card",
    ".news-card",
    ".rank-item",
    ".tech-item",
    ".gallery-stats .stat",
  ];

  function revealOnScroll() {
    const elements = document.querySelectorAll(SELECTORS.join(", "));
    if (!elements.length) return;


    elements.forEach((el) => {

      if (!el.dataset.revealReady) {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.dataset.revealReady = "true";
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
  }


  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealOnScroll);
  } else {
    revealOnScroll();
  }
})();