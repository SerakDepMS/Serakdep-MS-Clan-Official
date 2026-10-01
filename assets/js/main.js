document.addEventListener("DOMContentLoaded", function () {

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


  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("nav");

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        nav.classList.remove("active");
      }
    });
  }


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
  btn.style.background = 'linear-gradient(135deg,#00FF66,#00b34a)';
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


  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
  }

  if (!window._ga4Loaded) {
    window._ga4Loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-VBV6P0W6EL';
    document.head.appendChild(s);
    s.onload = function () {
      if (typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'G-VBV6P0W6EL', { anonymize_ip: true });
      }
    };
  }
}

function rechazarCookies() {
  localStorage.setItem('cookieConsent', 'rejected');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';


  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied'
    });
  }
}



document.documentElement.classList.add('dark-theme');
if (document.body) {
  document.body.classList.add('dark-theme');
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-theme');
  });
}
