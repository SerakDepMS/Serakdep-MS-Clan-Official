(function () {
  'use strict';

  function initMatrixRain() {
    if (document.getElementById('matrix-rain-canvas')) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-rain-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;';
    
    if (document.body.firstChild) {
      document.body.insertBefore(canvas, document.body.firstChild);
    } else {
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const katakana = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789ABCDEF<>/*+-={}$#%@';
    const chars = katakana.split('');

    const fontSize = 16;
    const trailLength = 8;
    let columns = 0;
    let drops = [];
    let trailChars = [];
    let animationFrameId = null;
    let lastFrameTime = 0;
    const fps = 24;
    const fpsInterval = 1000 / fps;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = [];
      trailChars = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
        trailChars[i] = [];
        for (let t = 0; t <= trailLength; t++) {
          trailChars[i][t] = chars[Math.floor(Math.random() * chars.length)];
        }
      }
    }

    function render(currentTime) {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = currentTime - lastFrameTime;
      if (elapsed < fpsInterval) return;

      lastFrameTime = currentTime - (elapsed % fpsInterval);


      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const headY = drops[i];
        const x = i * fontSize;

        for (let t = 0; t <= trailLength; t++) {
          const charY = (headY - t) * fontSize;
          if (charY >= 0 && charY <= canvas.height + fontSize) {
            const char = trailChars[i][t] || chars[0];
            const alpha = Math.max(0.1, 0.75 - (t * 0.08));
            ctx.fillStyle = `rgba(0, 255, 102, ${alpha})`;
            ctx.fillText(char, x, charY);
          }
        }

        if (Math.random() > 0.4) {
          trailChars[i].unshift(chars[Math.floor(Math.random() * chars.length)]);
          if (trailChars[i].length > trailLength + 1) {
            trailChars[i].pop();
          }
        }

        if (headY * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    let isRunning = false;

    function start() {
      if (!isRunning) {
        isRunning = true;
        lastFrameTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    }

    function stop() {
      if (isRunning) {
        isRunning = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 150);
    });

    resize();
    start();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMatrixRain);
  } else {
    initMatrixRain();
  }
})();
