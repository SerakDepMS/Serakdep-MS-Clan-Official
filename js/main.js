document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
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
      if (
        !nav.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
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

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, index * 100);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const derechoCards = document.querySelectorAll(".derecho-card");

  if (derechoCards.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    derechoCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.transitionDelay = index * 0.1 + "s";
      observer.observe(card);
    });
  }

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints;

  if (isTouchDevice) {
    document.querySelectorAll(".derecho-card").forEach((card) => {
      card.addEventListener("touchstart", function () {
        this.classList.add("touch-active");
      });

      card.addEventListener("touchend", function () {
        setTimeout(() => {
          this.classList.remove("touch-active");
        }, 150);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stat = entry.target;
          const target = parseInt(stat.getAttribute("data-target"));
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
          
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach((stat) => observer.observe(stat));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    const touchElements = document.querySelectorAll(
      ".team-member, .gallery-card, .tech-item, .card, .derecho-card, .stat-item, .timeline-item, .roadmap-item, .thank-item"
    );
    
    touchElements.forEach((element) => {
      element.addEventListener("touchstart", function () {
        this.classList.add("touch-active");
      });
      
      element.addEventListener("touchend", function () {
        setTimeout(() => {
          this.classList.remove("touch-active");
        }, 150);
      });
      
      element.addEventListener("touchcancel", function () {
        this.classList.remove("touch-active");
      });
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
  btn.style.backgroundColor = '#2d6a4f';
  btn.style.border = 'none';
  btn.style.color = 'white';
  btn.style.fontSize = '24px';
  btn.style.fontWeight = 'bold';
  btn.style.cursor = 'pointer';
  btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  btn.style.zIndex = '100001';
  btn.style.transition = 'opacity 0.3s, transform 0.2s';
  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.8)';
  btn.style.pointerEvents = 'none';

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

  window.addEventListener('scroll', toggleBtn);
  window.addEventListener('resize', toggleBtn);
  toggleBtn();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


(function() {
  const header = document.querySelector('header');
  if (!header) return;


  header.style.transform = 'translateY(0)';
  header.style.transition = 'transform 0.3s ease-out';
  header.style.willChange = 'transform';

  function updateHeader() {
    if (window.scrollY <= 10) {
      header.style.transform = 'translateY(0)';
    } else {
      header.style.transform = 'translateY(-100%)';
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateHeader();
})();

(function() {
  if (localStorage.getItem('cookieConsent') === null) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
})();

function aceptarCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
}

function rechazarCookies() {
  localStorage.setItem('cookieConsent', 'rejected');
  document.getElementById('cookie-banner').style.display = 'none';

}


(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  if (!themeToggle || !themeIcon) return;
  
  const savedTheme = getCookie('sms_theme') || localStorage.getItem('sms_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    setCookie('sms_theme', isDark ? 'dark' : 'light', 180);
    localStorage.setItem('sms_theme', isDark ? 'dark' : 'light');
    
    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
  });
})();


function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}


(function() {

  const COLORS = [
    '#d4af37', 
    '#f1c40f', 
    '#f39c12', 
    '#95d5b2', 
    '#52b788', 
    '#40916c', 
    '#2d6a4f'  
  ];

  const PARTICLE_COUNT = 50;
  let activeParticles = 0;

  function createParticle(container) {
    if (activeParticles >= PARTICLE_COUNT) return;

    const particle = document.createElement('div');
    particle.classList.add('rain-particle');


    const size = Math.random() < 0.6 
      ? Math.random() * 4 + 3
      : Math.random() * 6 + 5;

    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 3;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    

    const blur = size > 6 ? size * 3 : size * 1.5;
    const isGold = color === '#d4af37' || color === '#f1c40f' || color === '#f39c12';
    const extraGlow = isGold ? `0 0 ${blur * 2}px ${color}` : '';

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      background: ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${blur}px ${color}${extraGlow ? ', ' + extraGlow : ''};
    `;

    container.appendChild(particle);
    activeParticles++;


    const totalDuration = (duration + delay) * 1000;
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
        activeParticles--;
      }
    }, totalDuration + 500);
  }

  function spawnParticle(container) {
    createParticle(container);

    const nextSpawn = Math.random() * 250 + 100;
    setTimeout(() => spawnParticle(container), nextSpawn);
  }

  function initParticleRain() {
    const container = document.createElement('div');
    container.classList.add('particle-rain-container');
    document.body.prepend(container);


    const initialBurst = Math.floor(PARTICLE_COUNT * 0.8);
    for (let i = 0; i < initialBurst; i++) {
      setTimeout(() => createParticle(container), Math.random() * 1500);
    }


    setTimeout(() => spawnParticle(container), 1500);
  }


  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticleRain);
  } else {
    initParticleRain();
  }
})();