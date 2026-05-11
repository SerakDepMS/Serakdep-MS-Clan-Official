document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".clan-logo-container");
  const clanLogo = document.getElementById("clan-logo");

  if (!clanLogo) return;


  logoContainer.addEventListener("mouseenter", () => {
    clanLogo.style.transform = "scale(1.08)";
    clanLogo.style.filter =
      "drop-shadow(0 10px 25px rgba(231, 76, 60, 0.45)) brightness(1.05)";
    createParticles();
  });

  logoContainer.addEventListener("mouseleave", () => {
    clanLogo.style.transform = "";
    clanLogo.style.filter = "";
  });

  logoContainer.addEventListener("click", (e) => {

    clanLogo.style.transform = "scale(0.94)";
    clanLogo.style.transition = "transform 0.15s ease";

    createRippleEffect(e.clientX, e.clientY);

    setTimeout(() => {
      clanLogo.style.transform = "scale(1.08)";
      clanLogo.style.transition = "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
    }, 150);
  });


  setInterval(() => {
    if (!clanLogo.matches(":hover")) {
      clanLogo.style.transform = "scale(1.04) rotate(1deg)";
      setTimeout(() => {
        if (!clanLogo.matches(":hover")) {
          clanLogo.style.transform = "";
        }
      }, 1200);
    }
  }, 10000);


  animateBadges();


  animateSlogan();


  function createParticles() {
    // Limpiar partículas previas
    const oldContainer = document.querySelector(".logo-particles");
    if (oldContainer) oldContainer.remove();

    const particlesContainer = document.createElement("div");
    particlesContainer.className = "logo-particles";
    logoContainer.appendChild(particlesContainer);

    const fragment = document.createDocumentFragment();
    const colors = [
      "rgba(231, 76, 60, 0.8)",
      "rgba(52, 152, 219, 0.8)",
      "rgba(46, 204, 113, 0.8)",
      "rgba(155, 89, 182, 0.8)",
    ];

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 60;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const size = 2 + Math.random() * 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = 2 + Math.random() * 2;
      const delay = Math.random() * 0.8;


      particle.style.cssText = `
        left: 50%;
        top: 50%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: 0;
        transform: translate(-50%, -50%) translate(${tx}px, ${ty}px) scale(0);
        transition: opacity ${duration}s ease-out ${delay}s,
                    transform ${duration}s ease-out ${delay}s;
      `;

      fragment.appendChild(particle);


      requestAnimationFrame(() => {
        particle.style.opacity = "1";
        particle.style.transform = `translate(-50%, -50%) translate(${tx}px, ${ty}px) scale(1)`;
      });


      const removeDelay = (duration + delay) * 1000 + 200;
      setTimeout(() => {
        if (particle.parentNode) particle.remove();
      }, removeDelay);
    }

    particlesContainer.appendChild(fragment);


    setTimeout(() => {
      if (particlesContainer.childElementCount === 0) {
        particlesContainer.remove();
      }
    }, 5000);
  }


  function createRippleEffect(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x - 10}px`;
    ripple.style.top = `${y - 10}px`;

    document.body.appendChild(ripple);

    ripple.animate(
      [
        { transform: "scale(0)", opacity: 1 },
        { transform: "scale(20)", opacity: 0 },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      }
    ).onfinish = () => ripple.remove();
  }


  function animateBadges() {
    const badges = document.querySelectorAll(".clan-logo-section .badge");

    badges.forEach((badge, index) => {
      badge.style.opacity = "0";
      badge.style.transform = "translateY(20px)";
      badge.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      badge.style.transitionDelay = `${index * 0.15}s`;

      requestAnimationFrame(() => {
        badge.style.opacity = "1";
        badge.style.transform = "translateY(0)";
      });


      setInterval(() => {
        if (Math.random() > 0.65) {
          badge.style.transform = "scale(1.05)";
          setTimeout(() => {
            badge.style.transform = "";
          }, 350);
        }
      }, 5000 + Math.random() * 5000);
    });
  }


  function animateSlogan() {
    const slogan = document.querySelector(".clan-slogan");
    if (!slogan) return;

    const text = slogan.textContent.trim();
    slogan.textContent = "";

    const fragment = document.createDocumentFragment();

    [...text].forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${0.04 * i}s`;
      fragment.appendChild(span);
    });

    slogan.appendChild(fragment);

    setInterval(() => {
      slogan.style.textShadow = "0 0 10px rgba(231, 76, 60, 0.5)";
      setTimeout(() => {
        slogan.style.textShadow = "";
      }, 1200);
    }, 15000);
  }
});