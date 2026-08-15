(function() {
  'use strict';

  const overlay = document.getElementById('splash');
  if (!overlay) return;

  if (sessionStorage.getItem('serakdep_access_granted')) {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    return;
  }


  const canvas = document.getElementById('cv');
  const isMobile = window.matchMedia ? !window.matchMedia('(min-width: 768px)').matches : false;

  if (canvas && !isMobile) {
    const ctx = canvas.getContext('2d');
    let W, H;
    const pts = [];
    let loadingAnimId;

    let px = -9999, py = -9999;
    const REPEL_R = 120;
    const REPEL_F = 2.2;

    function setPointer(cx, cy) { px = cx; py = cy; }
    function clearPointer() { px = -9999; py = -9999; }

    window.addEventListener('mousemove', function(e) { setPointer(e.clientX, e.clientY); }, { passive: true });
    window.addEventListener('mouseleave', clearPointer, { passive: true });
    window.addEventListener('touchmove', function(e) { if (e.touches.length) { setPointer(e.touches[0].clientX, e.touches[0].clientY); } }, { passive: true });
    window.addEventListener('touchend', clearPointer, { passive: true });
    window.addEventListener('touchcancel', clearPointer, { passive: true });

    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    for (let i = 0; i < 65; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.18,
        dvx: 0,
        dvy: 0,
        rad: Math.random() * 1.6 + 0.3,
        col: Math.random() < 0.6 ? 'rgba(212,175,55,' : 'rgba(82,183,136,',
        alpha: Math.random() * 0.35 + 0.08
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);


      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }


      pts.forEach(p => {
        const dx = p.x - px;
        const dy = p.y - py;
        const distSq = dx * dx + dy * dy;
        if (distSq < 14400 && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const str = (1 - dist / REPEL_R) * REPEL_F;
          p.dvx += (dx / dist) * str;
          p.dvy += (dy / dist) * str;
        }

        p.dvx *= 0.90;
        p.dvy *= 0.90;

        p.x += p.vx + p.dvx;
        p.y += p.vy + p.dvy;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx.fillStyle = p.col + p.alpha + ')';
        ctx.fill();
      });

      loadingAnimId = requestAnimationFrame(drawParticles);
    }
    drawParticles();

    function handleVisibilityChange() {
      if (document.hidden) {
        if (loadingAnimId) {
          cancelAnimationFrame(loadingAnimId);
          loadingAnimId = null;
        }
      } else if (!loadingAnimId) {
        drawParticles();
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }


  const ticksRing = document.getElementById('tkR');
  if (ticksRing) {
    const N = 36;
    for (let i = 0; i < N; i++) {
      const isBig = (i % 9 === 0);
      const isMid = (i % 3 === 0);
      const h = isBig ? 14 : isMid ? 8 : 5;
      const w = isBig ? 2.5 : 1.5;
      const tick = document.createElement('div');
      tick.className = 'tk';
      tick.style.cssText = `
        width: ${w}px;
        height: ${h}px;
        margin-left: ${-w / 2}px;
        background: ${isBig ? '#d4af37' : isMid ? '#a07c1a' : '#2d6a4f'};
        opacity: ${isBig ? 0.95 : isMid ? 0.45 : 0.2};
        transform: rotate(${i * (360 / N)}deg);
        transform-origin: 50% 110px;
      `;
      ticksRing.appendChild(tick);
    }
  }


  const segsContainer = document.getElementById('bSegs');
  if (segsContainer) {
    for (let i = 0; i < 18; i++) {
      const seg = document.createElement('div');
      seg.className = 'seg';
      segsContainer.appendChild(seg);
    }
  }


  const rg = document.getElementById('rg');
  const rv = document.getElementById('rv');
  const rd = document.getElementById('rd');
  const tkR = document.getElementById('tkR');
  const panda = document.getElementById('pandaSvg');
  const cName = document.getElementById('cName');
  const cSub = document.getElementById('cSub');
  const divRow = document.getElementById('divRow');
  const barWrap = document.getElementById('barWrap');
  const bFill = document.getElementById('bFill');
  const bMsg = document.getElementById('bMsg');
  const bPct = document.getElementById('bPct');
  const chips = document.getElementById('chips');
  const cLoad = document.getElementById('cLoad');
  const cReady = document.getElementById('cReady');


  const steps = [
    { p: 0, m: 'Cargando protocolo de arranque...' },
    { p: 3, m: 'Iniciando protocolo de arranque...' },
    { p: 8, m: 'Verificando integridad del núcleo...' },
    { p: 13, m: 'Estableciendo conexión con servidor primario...' },
    { p: 18, m: 'Validando certificados de seguridad...' },
    { p: 23, m: 'Consultando base de datos de usuarios...' },
    { p: 28, m: 'Sincronizando perfiles de jugador...' },
    { p: 33, m: 'Verificando actualizaciones pendientes...' },
    { p: 38, m: 'Descargando parches de equilibrio...' },
    { p: 43, m: 'Aplicando configuraciones regionales...' },
    { p: 48, m: 'Preparando motor de físicas...' },
    { p: 53, m: 'Cargando recursos gráficos...' },
    { p: 58, m: 'Inicializando sistema de audio...' },
    { p: 63, m: 'Conectando con servicios en vivo...' },
    { p: 68, m: 'Comprobando latencia de red...' },
    { p: 73, m: 'Optimizando caché local...' },
    { p: 78, m: 'Finalizando ajustes de rendimiento...' },
    { p: 88, m: '¡Todos los sistemas listos!' },
    { p: 100, m: 'Acceso concedido. Bienvenido.' }
  ];

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const show = el => el && el.classList.add('show');
  const on = el => el && el.classList.add('on');

  async function runAnimation() {
    document.body.style.overflow = 'hidden';


    await delay(180);
    on(rg);
    on(tkR);
    await delay(150);
    on(rv);
    await delay(140);
    on(rd);

    await delay(280);
    show(panda);

    await delay(350);
    show(cName);
    await delay(140);
    show(cSub);

    await delay(250);
    show(divRow);
    await delay(110);
    show(barWrap);
    await delay(150);
    show(chips);

    let i = 0;
    function step() {
      if (i >= steps.length) return;
      const { p, m } = steps[i];

      if (bFill) bFill.style.width = p + '%';
      if (bPct) bPct.textContent = p + '%';
      if (bMsg) bMsg.textContent = m;

      if (p >= 50 && cLoad) cLoad.className = 'chip done';
      if (p === 100) {
        if (cReady) cReady.className = 'chip done';
        setTimeout(dismiss, 700);
        return;
      }

      i++;

      setTimeout(step, 180 + Math.random() * 250);
    }
    setTimeout(step, 200);
  }

  function dismiss() {
    try {
      sessionStorage.setItem('serakdep_access_granted', 'true');
    } catch (e) {}

    overlay.classList.add('exit');

    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 850);
  }


  runAnimation();


  setTimeout(dismiss, 12000);
})();