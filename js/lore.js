document.addEventListener("DOMContentLoaded", function () {


  const lobby = document.getElementById("cinematic-lobby");
  const startBtn = document.getElementById("start-journey-btn");
  const container = document.getElementById("scenes-container");
  const sections = document.querySelectorAll(".scene-section");
  const exitBtn = document.getElementById("exit-journey");
  const audioBtn = document.getElementById("audio-toggle");
  const autoplayFill = document.getElementById("autoplay-fill");
  const sceneCurrentEl = document.getElementById("scene-current");
  const sceneTotalEl = document.getElementById("scene-total");
  const navigation = document.getElementById("cinematic-navigation");
  const navNodesContainer = document.getElementById("nav-nodes-container");
  const flashEl = document.getElementById("scene-flash");
  const progressRail = document.getElementById("progress-rail");
  const progressFill = document.getElementById("progress-fill");
  const progressChapters = document.getElementById("progress-chapters");
  const chapterBadge = document.getElementById("chapter-badge");
  const chapterBadgeNumeral = chapterBadge && chapterBadge.querySelector(".chapter-badge-numeral");
  const chapterBadgeLabel = chapterBadge && chapterBadge.querySelector(".chapter-badge-label");
  const autoplayToggle = document.getElementById("autoplay-toggle");


  let activeIndex = 0;
  let isTravelling = false;
  let isFlashing = false;
  let isMuted = true;
  let autoplayTimer = null;
  let autoplayPaused = false;

  let ttsEnabled = false;
  let ttsCurrentUtterance = null;
  const ttsBtn = document.getElementById("tts-toggle");
  const ttsIcon = document.getElementById("tts-icon");
  let ttsVoicesLoaded = false;
  let spanishVoice = null;

  function loadTTSVoices() {
    if (ttsVoicesLoaded) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      spanishVoice =
        voices.find(v => v.lang === "es-ES" && v.localService) ||
        voices.find(v => v.lang === "es-419" && v.localService) ||
        voices.find(v => v.lang.startsWith("es") && v.localService) ||
        voices.find(v => v.lang.startsWith("es")) ||
        null;
      ttsVoicesLoaded = true;
    }
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = loadTTSVoices;
    loadTTSVoices();
  }

  function speakText(text) {
    if (!ttsEnabled || !text || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    ttsCurrentUtterance = new SpeechSynthesisUtterance(text);
    ttsCurrentUtterance.lang = "es-ES";
    ttsCurrentUtterance.rate = 0.9;
    ttsCurrentUtterance.pitch = 1.0;
    ttsCurrentUtterance.volume = 1.0;
    if (spanishVoice) ttsCurrentUtterance.voice = spanishVoice;

    ttsCurrentUtterance.onstart = () => { if (ttsBtn) ttsBtn.classList.add("speaking"); };
    ttsCurrentUtterance.onend   = () => { if (ttsBtn) ttsBtn.classList.remove("speaking"); };
    ttsCurrentUtterance.onerror = () => { if (ttsBtn) ttsBtn.classList.remove("speaking"); };

    window.speechSynthesis.speak(ttsCurrentUtterance);
  }

  function stopTTS() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (ttsBtn) ttsBtn.classList.remove("speaking");
  }

  function updateTTSIcon() {
    if (!ttsBtn || !ttsIcon) return;
    if (ttsEnabled) {
      ttsBtn.classList.add("active");
      ttsIcon.className = "fas fa-microphone";
      ttsBtn.title = "Silenciar Narración";
    } else {
      ttsBtn.classList.remove("active", "speaking");
      ttsIcon.className = "fas fa-microphone-slash";
      ttsBtn.title = "Activar Narración de Voz";
    }
  }

  if (ttsBtn) {
    ttsBtn.addEventListener("click", function () {
      if (!("speechSynthesis" in window)) {
        ttsBtn.title = "TTS no disponible en este navegador";
        return;
      }
      ttsEnabled = !ttsEnabled;
      updateTTSIcon();
      if (!ttsEnabled) {
        stopTTS();
      } else {
        const currentSec = sections[activeIndex];
        const narEl = currentSec && currentSec.querySelector(".scene-narration");
        const text = narEl ? narEl.getAttribute("data-text") || "" : "";
        if (text) setTimeout(() => speakText(text), 300);
      }
    });
  }

  const SCENE_DURATION = 30000;
  const TOTAL_SCENES = sections.length;


  const FALLBACK_ACCENTS = [
    "#d4af37", "#c8a800", "#e8914a", "#e87b3a", "#d4601a",
    "#52b788", "#40916c", "#2d9e6b", "#e05c2c", "#c94a1a",
    "#b83a10", "#9c3015", "#9d7fc8", "#8c6db8", "#7a5aa8",
    "#6a4a98", "#22c55e", "#16a34a", "#15803d", "#14532d",
    "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#ffd700", "#ffd700"
  ];

  if (sceneTotalEl) sceneTotalEl.textContent = TOTAL_SCENES;
  if (lobby) container.style.overflowY = "hidden";


  if (navNodesContainer) {
    sections.forEach((sec, i) => {
      const node = document.createElement("div");
      node.className = "nav-node" + (i === 0 ? " active" : "");
      node.dataset.goto = i;
      const label = sec.dataset.chapterLabel || ("Escena " + (i + 1));
      node.title = label;

      const tooltip = document.createElement("span");
      tooltip.className = "node-tooltip";
      tooltip.textContent = label;
      node.appendChild(tooltip);

      node.addEventListener("click", function () {
        const targetIndex = parseInt(this.getAttribute("data-goto"));
        if (targetIndex === activeIndex) return;
        clearAutoplay();
        scrollToScene(targetIndex);
      });

      navNodesContainer.appendChild(node);
    });
  }


  if (progressChapters) {
    sections.forEach((_, i) => {
      const pip = document.createElement("div");
      pip.className = "progress-pip" + (i === 0 ? " active" : "");
      pip.dataset.goto = i;
      pip.addEventListener("click", () => {
        if (i === activeIndex) return;
        clearAutoplay();
        scrollToScene(i);
      });
      progressChapters.appendChild(pip);
    });
  }


  initStarField();

  function initStarField() {
    const canvas = document.getElementById("star-field");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 200; i++) stars.push(createStar());
    }

    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.55 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.012 + 0.004,
      };
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.phase += s.speed;
        const a = s.alpha * (0.7 + 0.3 * Math.sin(s.phase));
        ctx.save();
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(drawStars);
    }

    window.addEventListener("resize", resize);
    resize();
    drawStars();
  }

  initMeteorField();

  function initMeteorField() {
    const canvas = document.getElementById("meteor-field");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let meteors = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Meteor {
      constructor() { this.reset(true); }

      reset(initial) {
        this.x = Math.random() * canvas.width * 1.5;
        this.y = initial ? Math.random() * canvas.height : -20;
        this.len = Math.random() * 90 + 40;
        this.speed = Math.random() * 4 + 2.5;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.25;
        this.width = Math.random() * 1.5 + 0.5;

        const accHex = getComputedStyle(document.documentElement)
          .getPropertyValue("--scene-accent").trim() || "#d4af37";
        this.color = Math.random() > 0.65 ? accHex : "#ffffff";
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.y > canvas.height + 50 || this.x > canvas.width + 50) this.reset(false);
      }

      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, this.color);

        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < 7; i++) meteors.push(new Meteor());

    setInterval(() => {
      if (meteors.length < 12) meteors.push(new Meteor());
    }, 1800);

    function animateMeteors() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      meteors.forEach(m => { m.update(); m.draw(); });
      requestAnimationFrame(animateMeteors);
    }

    window.addEventListener("resize", resize);
    resize();
    animateMeteors();
  }

  function initLobbyParticles() {
    const cont = document.getElementById("lobby-bg-particles");
    if (!cont) return;
    const colors = ["#d4af37", "#52b788", "#95d5b2", "#e8914a", "#ffffff", "#9d7fc8"];

    for (let i = 0; i < 34; i++) {
      const p = document.createElement("div");
      p.className = "lobby-particle";
      const size = Math.random() * 5 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const dur = Math.random() * 12 + 8;
      const delay = Math.random() * 10;

      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${color};
        left: ${left}%;
        animation-duration: ${dur}s;
        animation-delay: ${delay}s;
        opacity: 0;
        filter: blur(${Math.random() > 0.6 ? 1 : 0}px);
      `;
      cont.appendChild(p);
    }
  }

  initLobbyParticles();


  let bgMusic = null;
  let fadeInterval = null;
  const BG_VOLUME = 0.2;

  function initAudioContext() {
    if (isMuted) return;

    if (bgMusic) {
      bgMusic.play().catch(() => {});
      return;
    }

    bgMusic = new Audio("audio/musica1.mp3");
    bgMusic.loop   = true;
    bgMusic.volume = 0;           
    bgMusic.preload = "auto";

    bgMusic.play().catch(() => {
      console.warn("No se pudo reproducir el audio.");
    });


    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (!bgMusic) return clearInterval(fadeInterval);
      const next = Math.min(bgMusic.volume + 0.012, BG_VOLUME);
      bgMusic.volume = next;
      if (next >= BG_VOLUME) clearInterval(fadeInterval);
    }, 80);
  }

  function stopAmbientSynth() {
    if (!bgMusic) return;

    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (!bgMusic) return clearInterval(fadeInterval);
      const next = Math.max(bgMusic.volume - 0.025, 0);
      bgMusic.volume = next;
      if (next <= 0) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        clearInterval(fadeInterval);
      }
    }, 40);
  }


  let arpeggioCtx = null;

  const arpeggioNotes = [
    [523.25, 659.25, 783.99, 1046.50],
    [587.33, 739.99, 880.00, 1174.66],
    [659.25, 783.99, 987.77, 1318.51],
    [698.46, 880.00, 1046.50, 1396.91],
    [783.99, 987.77, 1174.66, 1567.98],
    [880.00, 1108.73, 1318.51, 1760.00],
    [523.25, 622.25, 783.99, 987.77],
    [587.33, 698.46, 880.00, 1046.50],
  ];

  function playArpeggio(index) {
    if (isMuted) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!arpeggioCtx) arpeggioCtx = new AC();
      if (arpeggioCtx.state === "suspended") arpeggioCtx.resume();

      const notes = arpeggioNotes[index % arpeggioNotes.length];
      const now = arpeggioCtx.currentTime;

      notes.forEach((freq, i) => {
        const osc  = arpeggioCtx.createOscillator();
        const gain = arpeggioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.038, now + 0.04 + i * 0.13);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32 + i * 0.13);
        osc.connect(gain);
        gain.connect(arpeggioCtx.destination);
        osc.start(now + i * 0.13);
        osc.stop(now + 0.65 + i * 0.13);
      });
    } catch (e) { /* AudioContext no soportado */ }
  }

  function updateAudioIcon() {
    if (!audioBtn) return;
    if (isMuted) {
      audioBtn.classList.remove("playing");
      audioBtn.title = "Activar Sonido";
      if (bgMusic) {
        clearInterval(fadeInterval);
        bgMusic.pause();
      }
    } else {
      audioBtn.classList.add("playing");
      audioBtn.title = "Silenciar Sonido";
      initAudioContext();
    }
  }

  if (startBtn && lobby) {
    startBtn.addEventListener("click", function () {
      lobby.classList.add("fade-out");
      container.style.overflowY = "scroll";
      isMuted = false;
      initAudioContext();
      updateAudioIcon();

      setTimeout(() => {
        lobby.style.display = "none";
        if (navigation) navigation.classList.add("visible");
        if (progressRail) progressRail.classList.add("visible");
        if (autoplayToggle) autoplayToggle.classList.add("visible");
        activateScene(0);
        startAutoplay();
      }, 1600);
    });
  }


  if (exitBtn) {
    exitBtn.addEventListener("click", function () {
      stopTTS();
      stopAmbientSynth();
      clearAutoplay();
      window.location.href = "index.html";
    });
  }


  if (audioBtn) {
    audioBtn.addEventListener("click", function () {
      isMuted = !isMuted;
      updateAudioIcon();
      if (isMuted) stopAmbientSynth();
      else initAudioContext();
    });
  }


  if (autoplayToggle) {
    autoplayToggle.addEventListener("click", function () {
      autoplayPaused = !autoplayPaused;
      const icon = document.getElementById("autoplay-icon");
      if (autoplayPaused) {
        clearAutoplay();
        if (icon) icon.className = "fas fa-play";
        autoplayToggle.title = "Reanudar Autoplay";
      } else {
        if (icon) icon.className = "fas fa-pause";
        autoplayToggle.title = "Pausar Autoplay";
        if (activeIndex < sections.length - 1) startAutoplay();
      }
    });
  }


  function startAutoplay() {
    if (autoplayPaused) return;
    clearAutoplay();
    resetAutoplayBar();

    autoplayTimer = setTimeout(() => {
      if (activeIndex < sections.length - 1) {
        scrollToScene(activeIndex + 1);
      } else {
        clearAutoplayBar();
      }
    }, SCENE_DURATION);
  }

  function clearAutoplay() {
    if (autoplayTimer) { clearTimeout(autoplayTimer); autoplayTimer = null; }
    clearAutoplayBar();
  }

  function resetAutoplayBar() {
    if (!autoplayFill) return;
    autoplayFill.classList.remove("running");
    autoplayFill.style.width = "0%";
    void autoplayFill.offsetWidth;
    autoplayFill.style.setProperty("--autoplay-duration", SCENE_DURATION + "ms");
    autoplayFill.classList.add("running");
  }

  function clearAutoplayBar() {
    if (!autoplayFill) return;
    autoplayFill.classList.remove("running");
    autoplayFill.style.width = "0%";
  }


  function triggerFlash(callback) {
    if (!flashEl) { if (callback) callback(); return; }
    if (isFlashing) { if (callback) callback(); return; }

    isFlashing = true;
    flashEl.style.transition = "none";
    flashEl.style.opacity = "0.5";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (callback) callback();
        flashEl.style.transition = "opacity 0.6s ease";
        flashEl.style.opacity = "0";
        setTimeout(() => { isFlashing = false; }, 660);
      });
    });
  }


  function revealWords(element, text, delayMs = 65) {
    if (!element) return;
    element.innerHTML = "";
    if (!text) return;
    const words = text.split(" ");
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "word-reveal";
      span.textContent = word;
      span.style.animationDelay = (i * delayMs) + "ms";
      element.appendChild(span);
      element.appendChild(document.createTextNode(" "));
    });
  }


  let badgeHideTimer = null;

  function showChapterBadge(numeral, label) {
    if (!chapterBadge) return;
    if (badgeHideTimer) clearTimeout(badgeHideTimer);
    if (chapterBadgeNumeral) chapterBadgeNumeral.textContent = numeral;
    if (chapterBadgeLabel) chapterBadgeLabel.textContent = label;
    chapterBadge.classList.add("visible");
    badgeHideTimer = setTimeout(() => {
      chapterBadge.classList.remove("visible");
    }, 3800);
  }


  function activateScene(index) {
    if (index < 0 || index >= sections.length) return;

    activeIndex = index;
    isTravelling = true;


    sections.forEach((sec, idx) => sec.classList.toggle("active", idx === index));


    const navNodes = navNodesContainer ? navNodesContainer.querySelectorAll(".nav-node") : [];
    navNodes.forEach((node, idx) => {
      node.classList.toggle("active", idx === index);
      node.classList.toggle("visited", idx < index);
    });


    const pips = progressChapters ? progressChapters.querySelectorAll(".progress-pip") : [];
    pips.forEach((pip, idx) => {
      pip.classList.toggle("active", idx === index);
      pip.classList.toggle("visited", idx < index);
    });


    if (progressFill) {
      const pct = sections.length > 1 ? (index / (sections.length - 1)) * 100 : 0;
      progressFill.style.height = pct + "%";
    }


    const currentSec = sections[index];
    const accent = (currentSec && currentSec.dataset.accent) || FALLBACK_ACCENTS[index] || "#d4af37";
    document.documentElement.style.setProperty("--scene-accent", accent);

    const r = parseInt(accent.slice(1, 3), 16);
    const g = parseInt(accent.slice(3, 5), 16);
    const b = parseInt(accent.slice(5, 7), 16);
    document.documentElement.style.setProperty("--scene-accent-rgb", `${r},${g},${b}`);


    if (sceneCurrentEl) sceneCurrentEl.textContent = index + 1;


    const numeral = (currentSec && currentSec.dataset.chapter) || "";
    const label = (currentSec && currentSec.dataset.chapterLabel) || "";
    if (index > 0) showChapterBadge(numeral, label);


    const narrationEl = currentSec && currentSec.querySelector(".scene-narration");
    if (narrationEl) {
      const text = narrationEl.getAttribute("data-text") || "";
      revealWords(narrationEl, text, 62);
      if (ttsEnabled && text) {
        setTimeout(() => {
          if (activeIndex === index) speakText(text);
        }, 1100);
      }
    }


    playArpeggio(index);


    if (navNodesContainer && navNodesContainer.parentElement) {
      const activeNode = navNodes[index];
      if (activeNode) {
        const nav = navNodesContainer.parentElement;
        const nodeLeft = activeNode.offsetLeft;
        const nodeWidth = activeNode.offsetWidth;
        const navWidth = nav.offsetWidth;
        const targetScroll = nodeLeft - navWidth / 2 + nodeWidth / 2;
        nav.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    }


    if (!autoplayPaused) {
      if (index < sections.length - 1) startAutoplay();
      else clearAutoplayBar();
    }

    setTimeout(() => { isTravelling = false; }, 900);
  }


  function scrollToScene(index) {
    if (index < 0 || index >= sections.length) return;
    stopTTS();
    isTravelling = true;
    triggerFlash(() => {
      activateScene(index);
      container.scrollTop = sections[index].offsetTop;
    });
  }


  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isTravelling) {
        const targetIndex = parseInt(entry.target.getAttribute("data-index"));
        if (targetIndex !== activeIndex) activateScene(targetIndex);
      }
    });
  }, { root: container, threshold: 0.55 });

  sections.forEach(sec => sceneObserver.observe(sec));

  window.addEventListener("keydown", function (e) {
    if (lobby && lobby.style.display !== "none" && !lobby.classList.contains("fade-out")) return;

    if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      if (activeIndex < sections.length - 1) { clearAutoplay(); scrollToScene(activeIndex + 1); }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (activeIndex > 0) { clearAutoplay(); scrollToScene(activeIndex - 1); }
    } else if (e.key === "Home") {
      e.preventDefault();
      clearAutoplay(); scrollToScene(0);
    } else if (e.key === "End") {
      e.preventDefault();
      clearAutoplay(); scrollToScene(sections.length - 1);
    } else if (e.key === "m" || e.key === "M") {
      if (audioBtn) audioBtn.click();
    } else if (e.key === "v" || e.key === "V") {
      if (ttsBtn) ttsBtn.click();
    } else if (e.key === "p" || e.key === "P") {
      if (autoplayToggle) autoplayToggle.click();
    }
  });

  let touchStartY = 0;
  let touchStartX = 0;

  container.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener("touchend", e => {
    if (isTravelling) return;
    const dy = touchStartY - e.changedTouches[0].clientY;
    const dx = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 45) {
      clearAutoplay();
      if (dy > 0 && activeIndex < sections.length - 1) scrollToScene(activeIndex + 1);
      else if (dy < 0 && activeIndex > 0) scrollToScene(activeIndex - 1);
    }
  }, { passive: true });


  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const PARALLAX_STRENGTH = 14;
  const LERP_FACTOR = 0.036;

  window.addEventListener("mousemove", function (e) {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  (function parallaxLoop() {
    currentX += (targetX - currentX) * LERP_FACTOR;
    currentY += (targetY - currentY) * LERP_FACTOR;

    const activeSec = sections[activeIndex];
    if (activeSec) {
      const bg = activeSec.querySelector(".scene-bg");
      if (bg) {
        bg.style.transform = `scale(1.1) translate3d(${currentX * PARALLAX_STRENGTH}px, ${currentY * PARALLAX_STRENGTH}px, 0)`;
      }
    }
    requestAnimationFrame(parallaxLoop);
  })();


  const canvas = document.getElementById("lore-particles");
  if (canvas) {
    const ctx2d = canvas.getContext("2d");
    let particles = [];
    const maxParticles = 110;
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });
    window.addEventListener("touchmove", e => {
      if (e.touches.length > 0) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }
    });
    window.addEventListener("touchend", () => { mouse.x = null; mouse.y = null; });

    class Particle {
      constructor() { this.reset(); this.y = Math.random() * canvas.height; }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 2.8 + 0.5;
        this.speedY = Math.random() * 0.65 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.38;
        this.life = 1.0;
        this.decay = Math.random() * 0.002 + 0.0007;
        this.twinkle = Math.random() * Math.PI * 2;

        const accentHex = getComputedStyle(document.documentElement)
          .getPropertyValue("--scene-accent").trim() || "#d4af37";
        const r = parseInt(accentHex.slice(1, 3), 16);
        const g = parseInt(accentHex.slice(3, 5), 16);
        const b = parseInt(accentHex.slice(5, 7), 16);

        const palette = [
          `rgba(${r},${g},${b},0.62)`,
          `rgba(149,213,178,0.46)`,
          `rgba(255,255,255,0.52)`,
          `rgba(${Math.round(r * .6)},${Math.round(g * .6)},${Math.round(b * .6)},0.4)`,
          `rgba(${Math.round(r * .8)},${Math.round(g * .8)},${Math.round(b * 1.1)},0.5)`,
        ];
        this.color = palette[Math.floor(Math.random() * palette.length)];
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.life -= this.decay;
        this.twinkle += 0.046;

        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 2.4;
            this.y += (dy / dist) * force * 2.4;
          }
        }

        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10 || this.life <= 0) {
          this.reset();
        }
      }

      draw() {
        const shimmer = 0.82 + Math.sin(this.twinkle) * 0.18;
        ctx2d.save();
        ctx2d.globalAlpha = this.life * shimmer;
        ctx2d.beginPath();
        ctx2d.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2d.fillStyle = this.color;
        ctx2d.fill();
        ctx2d.restore();
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < maxParticles; i++) particles.push(new Particle());
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    (function animateParticles() {
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    })();
  }

});