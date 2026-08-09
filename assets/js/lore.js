document.addEventListener("DOMContentLoaded", function () {

  const scenesData = [
  {
    chapter: "I",
    label: "La Chispa Inicial",
    text: "Antes de que existiera el servidor oficial de Discord, a principios de 2023, una idea comenzó a formarse entre experimentados jugadores de Roblox: la visión de una comunidad Multi-Gamer donde la diversión, el juego limpio y el respeto fueran los únicos estandartes. La semilla de Serakdep MS había germinado."
  },
  {
    chapter: "II",
    label: "El Emblema Panda",
    text: "El Panda estilizado emergió como símbolo oficial de Serakdep MS, portando los colores verde y dorado. Representa la sabiduría en la toma de decisiones, la paz comunitaria y el equilibrio entre diversión y disciplina. Un emblema que unifica a nuestras 12 divisiones bajo una misma bandera."
  },
  {
    chapter: "III",
    label: "El Pacto Fundador",
    text: "En una noche de enero de 2023, los primeros miembros fundadores, liderados por Db_artworkFOUNDERSMS, sellaron el juramento de construir un clan inclusivo y libre de toxicidad. El pacto fundador sentó las bases de lo que hoy es una hermandad Multi-Gamer con presencia en PC, móviles y consolas."
  },
  {
    chapter: "IV",
    label: "Primeras Normas",
    text: "En noviembre de 2023 se redactó el primer reglamento interno, que incluía las normas de convivencia para Discord, WhatsApp y los juegos. Se definieron los primeros rangos oficiales y se estableció el proceso de admisión con formulario de inscripción, entrevista y periodo de prueba. La comunidad comenzaba a estructurarse."
  },
  {
    chapter: "V",
    label: "Valores del Clan",
    text: "El Código de Conducta se erigió como pilar ético de Serakdep MS: respeto mutuo, inclusión, honestidad en los juegos (prohibición total de hacks y trampas), lealtad y comunicación constructiva. Un estandarte que guía a todos los miembros, sin importar su división o rango."
  },
  {
    chapter: "VI",
    label: "Los Forjadores del Código",
    text: "Para dar presencia al clan ante el mundo, el director y programador principal Db_artworkFOUNDERSMS, junto con maikol-dev-code-cyber, unieron fuerzas para escribir el código base del portal web oficial. Un sitio estático, pero con la visión de convertirse en el centro neurálgico de la comunidad."
  },
  {
    chapter: "VII",
    label: "La Fortaleza Digital",
    text: "En diciembre de 2023, la comunidad dio su gran salto al crear el servidor oficial de Discord. Con canales dedicados como #bienvenida, #reglas, #verificación, #anuncios, #eventos, #torneos y #canales-por-division, se convirtió en el punto de encuentro por excelencia para organizar partidas, scrims y torneos interclanes."
  },
  {
    chapter: "VIII",
    label: "Los Lazos Móviles",
    text: "Para facilitar la comunicación diaria se estructuraron los grupos oficiales de WhatsApp: Principal (avisos generales), Actividades (dinámicas comunitarias), Nuevos Ingresos (orientación), Inscripción (eventos) y grupos específicos por cada una de las 12 divisiones. La inmediatez móvil fortaleció los lazos entre los miembros."
  },
  {
    chapter: "IX",
    label: "Los Emisarios del Estandarte",
    text: "Con el fin de entablar lazos externos, se designó el Departamento de Alianzas y Relaciones. Miembros clave como year171 asumieron la tarea de representar con orgullo y honor a Serakdep MS ante otras comunidades. Nuestra red de aliados se expandió con clanes de gran renombre como CHIHUAHUENSE DINASTY, Zion Dynasty, Bloody Legacy y WIND BREAKER, entre otros."
  },
  {
    chapter: "X",
    label: "Campos de Batalla Multi-Gamer",
    text: "Las 12 divisiones oficiales del clan abarcan los títulos más competitivos del momento: Roblox (con juegos como Blox Fruits, Arsenal y King Legacy), Minecraft (servidor 24/7 con Bedwars y PvP), Call of Duty (Warzone y CODM Mobile), Fortnite (Battle Royale y Zero Build), Free Fire (Guild y DE clasificatorio), Valorant (5v5 táctico y Premier), Among Us (partidas de deducción y estrategia), Counter-Strike 2 (Premier y utilería), FC Mobile (Ultimate Team y ligas), Clash Royale (guerras de clan y 1v1), Guardian Tales (Arena y gremios) y Blood Strike (Battle Royale táctico móvil). Cada división cuenta con su propio reglamento, sistema de sanciones y grupo de comunicación."
  },
  {
    chapter: "XI",
    label: "Torneos Interclanes",
    text: "En abril de 2026 se diseñó el sistema de guerras de clanes y torneos internos. Los eventos se anuncian en el canal #torneos de Discord y en el calendario de la página web, con inscripciones abiertas a todos los miembros que cumplan los requisitos de cada torneo. La organización fomenta la sana competencia y el trabajo en equipo."
  },
  {
    chapter: "XII",
    label: "El Memorial de los Viajeros",
    text: "Aquellos miembros que deciden partir hacia nuevos rumbos dejan su huella grabada. A través del canal de Discord #despedida, el clan agradece y honra sus contribuciones. En Serakdep MS ningún amigo se olvida, y siempre pueden regresar si así lo desean, pasando nuevamente por el proceso de admisión."
  },
  {
    chapter: "XIII",
    label: "La Alta Dirección",
    text: "La toma de decisiones estratégicas recae sobre la Alta Dirección, compuesta por los líderes fundadores y los administradores de mayor antigüedad. Encargados de dirigir la política y visión del clan, sus miembros aseguran que el desarrollo del portal, las alianzas y la comunidad sigan una senda ascendente, siempre con transparencia y diálogo abierto."
  },
  {
    chapter: "XIV",
    label: "Custodios del Estandarte",
    text: "Los Administradores gestionan las áreas críticas: eventos (organización de torneos y actividades), admisiones (revisión de solicitudes y entrevistas), relaciones (alianzas y representación), contenido (guías, gráficos y material multimedia) y soporte técnico (mantenimiento de Discord, web y herramientas). Su labor incansable mantiene la maquinaria del clan funcionando de manera fluida y organizada."
  },
  {
    chapter: "XV",
    label: "Escalafón de Honor",
    text: "Desde los Miembros Nuevos en período de prueba, pasando por Miembros Activos, Miembros Destacados, Moderadores, Colaboradores (en áreas de eventos, edición o alianzas), hasta la Alta Dirección. Los ascensos se ganan con méritos, actividad mensual, cumplimiento del reglamento y contribución a la comunidad. Cada rango tiene sus privilegios y responsabilidades detalladas en el reglamento."
  },
  {
    chapter: "XVI",
    label: "El Santuario del Respeto",
    text: "El equipo de Moderación, con miembros comprometidos como 7huhuj08 y otros colaboradores, vela por el cumplimiento de las normas en Discord y WhatsApp. Gestionan los reportes de conducta a través del formulario de Reportar Problema, aplican sanciones escalonadas (desde advertencias hasta expulsiones) y garantizan un ambiente seguro, sano y totalmente libre de toxicidad para todos los miembros, especialmente los menores de edad."
  },
  {
    chapter: "XVII",
    label: "El Marco Legal",
    text: "En febrero de 2026, la página web se adaptó a la legalidad vigente (LOPD, Política de Cookies, Aviso Legal y DMCA). El clan protege rigurosamente la privacidad y los datos de menores de 16 años con consentimiento paterno. Solo se recopila el nombre de usuario y, con autorización explícita, el número de teléfono para casos de extrema gravedad. Los datos se eliminan al abandonar el clan."
  },
  {
    chapter: "XVIII",
    label: "La Inteligencia Virtual",
    text: "A inicios de abril de 2026 se integró el Chatbot IA en todas las secciones de la página. Un asistente virtual entrenado con la base de conocimiento del sitio (reglamento, eventos, divisiones, etc.) que responde con rapidez preguntas sobre inscripciones, Discord, WhatsApp, torneos y cualquier otra duda. Disponible 24/7, es el primer punto de contacto para los aspirantes."
  },
  {
    chapter: "XIX",
    label: "El Núcleo de Código",
    text: "Creado como entorno interactivo de programación, CodeTurbo permite aprender HTML, CSS y JavaScript desde la web. Cuenta con 6 temas personalizables, 500 retos de programación con instrucciones paso a paso, una enciclopedia integrada de los tres lenguajes, y herramientas de exportación (ZIP o HTML único). Es el laboratorio oficial de Serakdep MS para desarrollar habilidades técnicas."
  },
  {
    chapter: "XX",
    label: "El Rumbo Futuro",
    text: "El futuro de Serakdep MS incluye la integración de rankings de miembros y estadísticas de juegos mediante APIs de Roblox y otras plataformas, el desarrollo de una aplicación móvil RSP para Android, y la traducción completa de toda la plataforma web oficial al inglés y portugués para acoger a una comunidad global. También se planean mejoras en el sistema de eventos y la expansión de CodeTurbo."
  },
  {
    chapter: "XXI",
    label: "La Gran Hermandad",
    text: "Con más de 266 miembros verificados de múltiples países (España, México, Colombia, Argentina, Chile, Perú, entre otros) y edades que van desde los 16 años en adelante, el clan se consolida como una verdadera familia unida por la pasión al gaming y la camaradería inquebrantable en todas las plataformas. La diversidad cultural enriquece cada partida y cada conversación."
  },
  {
    chapter: "XXII",
    label: "Alianzas Sagradas",
    text: "Nuestra red de aliados se expandió con clanes de gran renombre: CHIHUAHUENSE DINASTY, Zion Dynasty, Bloody Legacy, WIND BREAKER, LUWANCE, Kira's Order y The Black Bulls, en un pacto de respeto mutuo y colaboración en torneos. La sección de Alianzas en la web muestra sus logos, descripciones y fechas de alianza, con un sistema de auras animadas que reflejan su actividad."
  },
  {
    chapter: "XXIII",
    label: "Evolución Digital",
    text: "Desde la beta 0.5 estática, el portal evolucionó a la v1.0 con el reglamento y formulario, la v2.0 con bases de datos npoint.io para noticias, y la v5.0 ultra-optimizada con actualización automática de noticias cada 12 segundos, reproductor de video mejorado y filtros de juegos (más de 350 títulos). La web actual es el resultado de un desarrollo continuo y colaborativo."
  },
  {
    chapter: "XXIV",
    label: "La Forja Creativa",
    text: "El equipo creativo, integrado por editores y diseñadores como Diegosanval2012 (diseño gráfico), putifino111 (edición de video y contenido) y Teo_174bj (control de calidad), da vida a los logos, banners, guías visuales y material promocional que realzan la imagen del clan. Su trabajo es visible en la página de Créditos y en cada rincón del portal."
  },
  {
    chapter: "XXV",
    label: "El Amanecer de 2026",
    text: "Con eventos semanales programados de forma dinámica (torneos de todas las divisiones, noches de DJ en Discord, sesiones de Zone Wars, etc.), chat activo en Discord, grupos de WhatsApp vibrantes, y el noticiero digital oficial (canal de WhatsApp y sección de Noticias en la web), el año 2026 se establece como la época dorada de Serakdep MS. La comunidad nunca ha estado tan unida."
  },
  {
    chapter: "XXVI",
    label: "Un Clan, Una Leyenda",
    text: "El mañana nos pertenece. La historia de Serakdep MS no tiene final; cada nuevo miembro añade su propia página al archivo. El Panda Ancestral observa con orgullo cómo la leyenda continúa su curso hacia la inmortalidad. Las 12 divisiones, los torneos, las alianzas y los valores forjados en estos años son solo el prólogo de lo que está por venir."
  }
];


  const output = document.getElementById('terminal-output');
  const chapterIndicator = document.getElementById('chapter-indicator');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const exitBtn = document.getElementById('exit-btn');
  const shutdownOverlay = document.getElementById('shutdown-overlay');
  const bootOverlay = document.getElementById('boot-overlay');
  const bootFill = document.getElementById('boot-fill');
  const bootPercent = document.getElementById('boot-percent');
  const bootMessages = document.getElementById('boot-messages');
  const termContainer = document.getElementById('terminal-container');
  const termTime = document.getElementById('term-time');
  const termSession = document.getElementById('term-session');
  const chapterProgressFill = document.getElementById('chapter-progress-fill');

  let currentIndex = 0;
  let isTyping = false;
  let sessionStart = Date.now();
  let userScrolled = false;
  let bootSkipped = false;


  let skipTyping = false; 
  let activeInterval = null;  
  let activeLineData = null;


  function getTimestamp() {
    const d = new Date();
    return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  function getSessionTime() {
    const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
    const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const secs = String(elapsed % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  }
  function updateClock() {
    termTime.textContent = getTimestamp();
    termSession.textContent = `${getSessionTime()}`;
  }
  setInterval(updateClock, 1000);
  updateClock();


  output.addEventListener('scroll', function() {
    const scrollPos = output.scrollTop + output.clientHeight;
    const maxScroll = output.scrollHeight;
    if (scrollPos < maxScroll - 10) {
      userScrolled = true;
    } else {
      userScrolled = false;
    }
  });

  function scrollToBottomIfNeeded() {
    if (!userScrolled) {
      output.scrollTop = output.scrollHeight;
    }
  }


  function addLine(text, className = '', speed = 35) {
    return new Promise((resolve) => {
      const line = document.createElement('div');
      line.className = `term-line ${className}`;
      output.appendChild(line);


      if (skipTyping || text.length === 0) {
        line.textContent = text;
        scrollToBottomIfNeeded();
        resolve();
        return;
      }

      line.textContent = '';
      let idx = 0;
      activeLineData = { line, text, resolve };
      activeInterval = setInterval(() => {
        idx++;
        line.textContent = text.slice(0, idx);
        scrollToBottomIfNeeded();
        if (idx >= text.length) {
          clearInterval(activeInterval);
          activeInterval = null;
          activeLineData = null;
          scrollToBottomIfNeeded();
          setTimeout(resolve, 180);
        }
      }, speed);
    });
  }


  function skipCurrentTyping() {
    if (!isTyping) return;
    skipTyping = true;
    if (activeInterval) {
      clearInterval(activeInterval);
      activeInterval = null;
    }
    if (activeLineData) {
      activeLineData.line.textContent = activeLineData.text;
      const resolve = activeLineData.resolve;
      activeLineData = null;
      scrollToBottomIfNeeded();
      resolve();
    }
  }

  function addInstantLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.textContent = text;
    output.appendChild(line);
    scrollToBottomIfNeeded();
  }


  async function displayScene(index) {
    if (isTyping) return;
    if (index < 0 || index >= scenesData.length) return;

    isTyping = true;
    skipTyping = false;
    currentIndex = index;
    const data = scenesData[index];


    chapterIndicator.textContent = `${String(index + 1).padStart(2, '0')} / ${scenesData.length}`;
    chapterProgressFill.style.width = `${((index + 1) / scenesData.length) * 100}%`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === scenesData.length - 1;


    output.innerHTML = '';

    const now = new Date();
    const dateStr = now.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    addInstantLine(`> SISTEMA::LORE_TERMINAL`, 'dim');
    addInstantLine(`> FECHA: ${dateStr}  HORA: ${getTimestamp()}`, 'dim');
    addInstantLine(`> ACCEDIENDO AL ARCHIVO HISTÓRICO...`, 'dim');
    await addLine(``, '', 10);


    await displayChapterContent(index, true);

    isTyping = false;
    scrollToBottomIfNeeded();
  }

  async function displayChapterContent(index) {
    const data = scenesData[index];
    await addLine(`[CAPÍTULO ${data.chapter}]  ${data.label.toUpperCase()}`, 'chapter-head glitch', 30);
    await addLine(``);

    const words = data.text.split(' ');
    let lineBuffer = '';
    for (let i = 0; i < words.length; i++) {
      lineBuffer += words[i] + ' ';
      if (lineBuffer.length > 60 || i === words.length - 1) {
        await addLine(`  ${lineBuffer.trim()}`, 'para', 40);
        lineBuffer = '';
      }
    }
    await addLine(``);
  }

  function goToScene(index) {
    if (isTyping) return;
    if (index < 0 || index >= scenesData.length) return;
    userScrolled = false;
    displayScene(index);
  }


  async function bootSystem() {
    const bootMessages = [
      'Iniciando núcleo del sistema...',
      'Cargando módulos de memoria...',
      'Verificando integridad del archivo...',
      'Estableciendo conexión segura...',
      'Sistema listo.'
    ];

    const messageContainer = document.getElementById('boot-messages');
    messageContainer.innerHTML = '';

    let progress = 0;


    function updateBoot(index) {
      if (index < bootMessages.length) {
        const line = document.createElement('div');
        line.className = 'boot-line';
        if (index === bootMessages.length - 1) line.classList.add('success');
        line.innerHTML = bootMessages[index];
        messageContainer.appendChild(line);

        const lines = messageContainer.querySelectorAll('.boot-line');
        if (lines.length > 3) {
          lines[0].style.opacity = '0.3';
        }
      }

      progress = Math.min(((index + 1) / bootMessages.length) * 100, 100);
      bootFill.style.width = progress + '%';
      bootPercent.textContent = Math.round(progress) + '%';
    }


    updateBoot(0);


    for (let i = 1; i < bootMessages.length; i++) {

      await new Promise(r => setTimeout(r, 400 + Math.random() * 400));
      if (bootSkipped) break;
      updateBoot(i);
    }


    if (!bootSkipped) {
      await new Promise(r => setTimeout(r, 500));
    }


    bootOverlay.classList.add('hidden');
    termContainer.classList.add('visible');


    addInstantLine('', '');
    addInstantLine('   SERAKDEP MS · ARCHIVO HISTÓRICO', 'highlight glitch');
    addInstantLine('   TERMINAL INTERACTIVA', 'highlight');
    addInstantLine('   Usa ← → o Enter para navegar', 'dim');
    addInstantLine('   Ctrl+Home / Ctrl+End para extremos', 'dim');
    addInstantLine('');

    setTimeout(() => {
      displayScene(0);
    }, 400);
  }


  function skipBoot() {
    if (!bootOverlay.classList.contains('hidden')) {
      bootSkipped = true;

      bootOverlay.classList.add('hidden');
      termContainer.classList.add('visible');

      addInstantLine('', '');
      addInstantLine('   SERAKDEP MS · ARCHIVO HISTÓRICO', 'highlight glitch');
      addInstantLine('   TERMINAL INTERACTIVA', 'highlight');
      addInstantLine('   Usa ← → o Enter para navegar', 'dim');
      addInstantLine('   Ctrl+Home / Ctrl+End para extremos', 'dim');
      addInstantLine('');
      setTimeout(() => {
        displayScene(0);
      }, 400);
    }
  }


  document.addEventListener('keydown', function(e) {
    if (!bootOverlay.classList.contains('hidden')) {
      skipBoot();
    }
  });
  document.addEventListener('click', function() {
    if (!bootOverlay.classList.contains('hidden')) {
      skipBoot();
    }
  });


  prevBtn.addEventListener('click', () => {
    if (isTyping) { skipCurrentTyping(); return; }
    goToScene(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (isTyping) { skipCurrentTyping(); return; }
    goToScene(currentIndex + 1);
  });

  document.addEventListener('keydown', (e) => {

    if (!bootOverlay.classList.contains('hidden')) return;

    const navKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Enter'];
    const isHomeEnd = (e.key === 'Home' || e.key === 'End') && (e.ctrlKey || e.metaKey);

    if (isTyping) {

      if (navKeys.includes(e.key) || isHomeEnd) {
        e.preventDefault();
        skipCurrentTyping();
      }
      return;
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToScene(currentIndex - 1);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Enter') {
      e.preventDefault();
      goToScene(currentIndex + 1);
    } else if (e.key === 'Home' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      goToScene(0);
    } else if (e.key === 'End' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      goToScene(scenesData.length - 1);
    }
  });


  exitBtn.addEventListener('click', function() {

    isTyping = false;
    shutdownOverlay.classList.add('active');
    termContainer.style.opacity = '0';

    bootOverlay.classList.add('hidden');
    setTimeout(() => {
      window.location.href = '../../index.html';
    }, 2200);
  });


  bootSystem();
});