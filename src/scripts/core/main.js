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