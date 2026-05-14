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
  const COLORS = [
    '#d4af37', '#f1c40f', '#f39c12',
    '#95d5b2', '#52b788', '#40916c', '#2d6a4f'
  ];
  const MAX_PARTICLES = 40; // Reducido de 60 a 40 para aligerar aún más
  let particles = [];
  let canvas, ctx, animationId;
  let resizeTimer;

  function createParticle() {
    const size = Math.random() * 3.5 + 1.5; // Ligeramente más pequeñas
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size, color,
      speedY: Math.random() * 1.3 + 0.4,
      speedX: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.55 + 0.25,
      blur: size > 3.5 ? size * 1.3 : 0
    };
  }

  function updateParticles() {
    while (particles.length < MAX_PARTICLES) {
      particles.push(createParticle());
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y > canvas.height + 10 || p.x < -10 || p.x > canvas.width + 10) {
        particles[i] = createParticle();
        particles[i].y = -10;
        continue;
      }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      if (p.blur > 0) {
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur;
        ctx.fill();
      }
      ctx.restore();
    }
    animationId = requestAnimationFrame(updateParticles);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0; // Reiniciamos las partículas
  }

  function debouncedResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeCanvas, 150); // Solo redimensiona 150ms después del último evento
  }

  function initParticleRain() {
    canvas = document.createElement('canvas');
    canvas.classList.add('particle-rain-container');
    document.body.prepend(canvas);
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', debouncedResize);
    for (let i = 0; i < MAX_PARTICLES; i++) particles.push(createParticle());
    updateParticles();
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
      animationId = null;
    } else if (!animationId) {
      updateParticles();
    }
  }
  document.addEventListener('visibilitychange', handleVisibilityChange);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticleRain);
  } else {
    initParticleRain();
  }
})();