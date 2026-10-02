document.addEventListener("DOMContentLoaded", function () {
  // 1. Enlace activo en navegación
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href ? href.split("/").pop().split("#")[0].split("?")[0] : "";
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html") ||
      (currentPage === "index.html" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // 2. Menú móvil
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("nav");

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      const icon = mobileMenuBtn.querySelector("i");
      if (icon) {
        if (isOpen) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        nav.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  // 3. Smooth scroll para anclas
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // 4. Año estático (mantenido fijamente en HTML)

  // 5. Tarjetas estáticas y estables para evitar CLS


  // 6. Observador de derechos
  const derechoCards = document.querySelectorAll(".derecho-card");
  if (derechoCards.length > 0) {
    const derechoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    derechoCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.transitionDelay = index * 0.1 + "s";
      derechoObserver.observe(card);
    });
  }

  // 7. Contadores animados de estadísticas
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length > 0) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stat = entry.target;
            const target = parseInt(stat.getAttribute("data-target"), 10);
            if (isNaN(target)) return;
            const increment = target / 50;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              stat.textContent = Math.floor(current) + (target >= 1000 ? "+" : "");
            }, 30);

            statObserver.unobserve(stat);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((stat) => statObserver.observe(stat));
  }

  // 8. Efectos táctiles optimizados
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    const touchElements = document.querySelectorAll(
      ".team-member, .tech-item, .card, .derecho-card, .stat-item, .timeline-item, .roadmap-item, .thank-item"
    );

    touchElements.forEach((element) => {
      element.addEventListener("touchstart", function () {
        this.classList.add("touch-active");
      }, { passive: true });

      element.addEventListener("touchend", function () {
        setTimeout(() => {
          this.classList.remove("touch-active");
        }, 150);
      }, { passive: true });

      element.addEventListener("touchcancel", function () {
        this.classList.remove("touch-active");
      }, { passive: true });
    });
  }
});

// Botón Volver Arriba
(function() {
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(btn);

  btn.style.position = 'fixed';
  btn.style.bottom = '30px';
  btn.style.right = '30px';
  btn.style.width = '50px';
  btn.style.height = '50px';
  btn.style.borderRadius = '50%';
  btn.style.background = '#00FF66';
  btn.style.border = '2px solid #00FF66';
  btn.style.color = '#0a0a0a';
  btn.style.fontSize = '1.2rem';
  btn.style.fontWeight = 'bold';
  btn.style.cursor = 'pointer';
  btn.style.boxShadow = '0 4px 20px rgba(0,255,102,0.45)';
  btn.style.zIndex = '100001';
  btn.style.transition = 'opacity 0.3s, transform 0.2s';
  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.8)';
  btn.style.pointerEvents = 'none';

  let ticking = false;
  function toggleBtn() {
    if (window.scrollY > 500) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.8)';
      btn.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        toggleBtn();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', toggleBtn, { passive: true });
  toggleBtn();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// Header scroll behavior removed - header is always visible (sticky)

(function() {
  if (localStorage.getItem('cookieConsent') === null) {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  }
})();

function aceptarCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';
  document.dispatchEvent(new CustomEvent('serakdep:consent-accepted'));
}

function rechazarCookies() {
  localStorage.setItem('cookieConsent', 'rejected');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';

  document.dispatchEvent(new CustomEvent('serakdep:consent-rejected'));
}


// Modo oscuro permanente y exclusivo en todo el proyecto
document.documentElement.classList.add('dark-theme');
if (document.body) {
  document.body.classList.add('dark-theme');
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-theme');
  });
}
