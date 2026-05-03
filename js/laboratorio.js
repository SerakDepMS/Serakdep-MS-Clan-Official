document.addEventListener('DOMContentLoaded', () => {
  // ─── ELEMENTOS PRINCIPALES ───
  const codeEditor = document.getElementById('codeEditor');
  const lineNumbers = document.getElementById('lineNumbers');
  const previewFrame = document.getElementById('previewFrame');
  const consoleOutput = document.getElementById('consoleOutput');
  const consoleInput = document.getElementById('consoleInput');
  const fileTabs = document.getElementById('fileTabs');
  const fileItems = document.querySelectorAll('.file-item');
  const bottomTabs = document.querySelectorAll('.bottom-tab');
  const bottomPanels = document.querySelectorAll('.bottom-panel');
  const sidebarTabs = document.querySelectorAll('.sidebar-tab');
  const sidebarPanels = document.querySelectorAll('.sidebar-panel');
  const tutorialModal = document.getElementById('tutorialModal');
  const tutorialModalTitle = document.getElementById('tutorialModalTitle');
  const tutorialModalBody = document.getElementById('tutorialModalBody');
  const tutorialStepCounter = document.getElementById('tutorialStepCounter');
  const learnItems = document.querySelectorAll('.learn-item');

  // ─── ESTADO ───
  const fileContents = {
    'index.html': '<h1>¡Hola, Serakdep MS!</h1>\n<p>Bienvenido al Code Lab. ¡Empieza a programar!</p>',
    'style.css': 'body {\n  font-family: sans-serif;\n  text-align: center;\n  padding: 50px;\n  background: #f0f4f0;\n}\nh1 {\n  color: #2d6a4f;\n}\np {\n  color: #555;\n}',
    'script.js': 'console.log("¡Hola desde Serakdep MS Code Lab!");\ndocument.querySelector("h1").style.textShadow = "0 2px 5px rgba(0,0,0,0.1)";'
  };
  let currentFile = 'index.html';
  let autoRunTimer;

  // ─── CONTENIDO DE APRENDIZAJE ───
  const learningTopics = {
    'html-basics': {
      title: '📝 HTML: Conceptos básicos',
      content: `<h3>¿Qué es HTML?</h3><p>HTML (<em>HyperText Markup Language</em>) es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino un <strong>lenguaje de marcado</strong> que define la estructura del contenido.</p><h4>Conceptos clave</h4><ul><li><strong>Etiquetas:</strong> Se escriben entre &lt; &gt;. Ej: <code>&lt;h1&gt;</code></li><li><strong>Atributos:</strong> Proporcionan información adicional. Ej: <code>class="nombre"</code></li><li><strong>Anidamiento:</strong> Las etiquetas pueden contener otras etiquetas.</li></ul><h4>Estructura básica</h4><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;&lt;title&gt;Mi página&lt;/title&gt;&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Hola mundo&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>`,
      code: 'index.html'
    },
    'html-tags': {
      title: '🏷️ HTML: Etiquetas comunes',
      content: `<h3>Etiquetas esenciales</h3><ul><li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Encabezados</li><li><code>&lt;p&gt;</code>: Párrafos</li><li><code>&lt;a&gt;</code>: Enlaces</li><li><code>&lt;img&gt;</code>: Imágenes</li><li><code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> / <code>&lt;li&gt;</code>: Listas</li><li><code>&lt;div&gt;</code>: Contenedor genérico</li><li><code>&lt;span&gt;</code>: Contenedor en línea</li></ul>`,
      code: 'index.html'
    },
    'html-forms': {
      title: '📋 HTML: Formularios',
      content: `<h3>Formularios</h3><p>Los formularios permiten recopilar datos del usuario.</p><pre>&lt;form&gt;\n  &lt;input type="text" placeholder="Nombre"&gt;\n  &lt;input type="email" placeholder="Email"&gt;\n  &lt;button type="submit"&gt;Enviar&lt;/button&gt;\n&lt;/form&gt;</pre>`,
      code: 'index.html'
    },
    'css-basics': {
      title: '🎨 CSS: Fundamentos',
      content: `<h3>¿Qué es CSS?</h3><p>CSS (<em>Cascading Style Sheets</em>) define la apariencia visual de los elementos HTML.</p><h4>Selectores</h4><ul><li><code>elemento</code>: Selecciona por etiqueta</li><li><code>.clase</code>: Selecciona por clase</li><li><code>#id</code>: Selecciona por ID</li></ul><h4>Propiedades comunes</h4><ul><li><code>color</code>: Color del texto</li><li><code>background</code>: Fondo</li><li><code>font-size</code>: Tamaño de fuente</li><li><code>margin</code> / <code>padding</code>: Espaciado</li></ul>`,
      code: 'style.css'
    },
    'css-layout': {
      title: '📐 CSS: Layout y Flexbox',
      content: `<h3>Flexbox</h3><p>Flexbox es un sistema de diseño unidimensional para distribuir espacio entre elementos.</p><pre>.contenedor {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}</pre><h4>Propiedades clave</h4><ul><li><code>justify-content</code>: Alineación horizontal</li><li><code>align-items</code>: Alineación vertical</li><li><code>flex-wrap</code>: Permite que los elementos salten de línea</li></ul>`,
      code: 'style.css'
    },
    'css-animations': {
      title: '✨ CSS: Animaciones',
      content: `<h3>Animaciones con CSS</h3><p>Puedes crear animaciones sin JavaScript usando <code>@keyframes</code>.</p><pre>@keyframes girar {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.mi-elemento {\n  animation: girar 2s infinite linear;\n}</pre><p>También puedes usar <code>transition</code> para cambios suaves al hacer hover.</p>`,
      code: 'style.css'
    },
    'js-basics': {
      title: '⚡ JavaScript: Primeros pasos',
      content: `<h3>¿Qué es JavaScript?</h3><p>JavaScript es un lenguaje de programación que permite añadir interactividad a las páginas web.</p><h4>Conceptos básicos</h4><ul><li><strong>Variables:</strong> <code>let nombre = "Serakdep";</code></li><li><strong>Funciones:</strong> <code>function saludar() { alert("Hola"); }</code></li><li><strong>Condicionales:</strong> <code>if (edad >= 14) { ... }</code></li><li><strong>Consola:</strong> <code>console.log("Mensaje");</code></li></ul>`,
      code: 'script.js'
    },
    'js-dom': {
      title: '🖥️ JS: Manipulación del DOM',
      content: `<h3>DOM (Document Object Model)</h3><p>El DOM representa la estructura HTML como un árbol de objetos que JavaScript puede modificar.</p><pre>// Seleccionar elementos\ndocument.querySelector("h1")\ndocument.getElementById("mi-id")\n\n// Modificar contenido\ndocument.querySelector("h1").textContent = "Nuevo título";\n\n// Cambiar estilos\ndocument.querySelector("p").style.color = "red";</pre>`,
      code: 'script.js'
    },
    'js-events': {
      title: '🖱️ JS: Eventos',
      content: `<h3>Manejo de eventos</h3><p>Los eventos permiten responder a acciones del usuario como clics, teclas o movimientos del ratón.</p><pre>// Escuchar un clic\ndocument.querySelector("button").addEventListener("click", function() {\n  alert("¡Botón pulsado!");\n});\n\n// Evento de teclado\ndocument.addEventListener("keydown", function(evento) {\n  console.log("Tecla pulsada:", evento.key);\n});</pre>`,
      code: 'script.js'
    }
  };

  // ─── ACTUALIZAR NÚMEROS DE LÍNEA ───
  function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    let nums = '';
    for (let i = 1; i <= lines; i++) nums += i + '\n';
    lineNumbers.textContent = nums;
  }

  // ─── ACTUALIZAR VISTA PREVIA ───
  function updatePreview() {
    const html = (fileContents['index.html'] || '');
    const css = (fileContents['style.css'] || '');
    const js = (fileContents['script.js'] || '');
    const fullCode = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
    const blob = new Blob([fullCode], { type: 'text/html' });
    previewFrame.src = URL.createObjectURL(blob);
  }

  // ─── AUTO-EJECUTAR ───
  function schedulePreview() {
    clearTimeout(autoRunTimer);
    autoRunTimer = setTimeout(updatePreview, 400);
  }

  // ─── CAMBIAR DE ARCHIVO ───
  function switchFile(filename) {
    fileContents[currentFile] = codeEditor.value;
    currentFile = filename;
    codeEditor.value = fileContents[filename] || '';
    updateLineNumbers();
    schedulePreview();

    // Actualizar pestañas
    document.querySelectorAll('.file-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.file-item').forEach(i => i.classList.remove('active'));
    const tab = document.querySelector(`.file-tab[data-file="${filename}"]`);
    if (tab) tab.classList.add('active');
    const item = document.querySelector(`.file-item[data-file="${filename}"]`);
    if (item) item.classList.add('active');
  }

  // ─── EVENTOS DE ARCHIVOS ───
  fileItems.forEach(item => {
    item.addEventListener('click', () => switchFile(item.dataset.file));
  });

  // Delegación para pestañas
  fileTabs.addEventListener('click', e => {
    const tab = e.target.closest('.file-tab');
    const closeBtn = e.target.closest('.file-tab-close');
    if (closeBtn) {
      e.stopPropagation();
      // No permitir cerrar los 3 archivos principales
      return;
    }
    if (tab) switchFile(tab.dataset.file);
  });

  // ─── EDITOR ───
  codeEditor.addEventListener('input', () => {
    fileContents[currentFile] = codeEditor.value;
    updateLineNumbers();
    schedulePreview();
  });

  codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeEditor.scrollTop;
  });

  codeEditor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
      fileContents[currentFile] = codeEditor.value;
      updateLineNumbers();
    }
  });

  // ─── BOTTOM TABS ───
  bottomTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      bottomTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      bottomPanels.forEach(p => p.classList.remove('active'));
      document.getElementById('panel' + tab.dataset.bottom.charAt(0).toUpperCase() + tab.dataset.bottom.slice(1)).classList.add('active');
    });
  });

  // ─── SIDEBAR TABS ───
  sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sidebarTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      sidebarPanels.forEach(p => p.classList.remove('active'));
      document.getElementById('panel' + tab.dataset.sidebar.charAt(0).toUpperCase() + tab.dataset.sidebar.slice(1)).classList.add('active');
    });
  });

  // ─── CONSOLA JS ───
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;

  function addConsoleLine(msg, type = 'log') {
    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.textContent = `> ${msg}`;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }

  console.log = function(...args) { addConsoleLine(args.join(' '), 'log'); originalLog.apply(console, args); };
  console.error = function(...args) { addConsoleLine(args.join(' '), 'error'); originalError.apply(console, args); };
  console.warn = function(...args) { addConsoleLine(args.join(' '), 'warn'); originalWarn.apply(console, args); };

  consoleInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = this.value.trim();
      if (cmd) {
        addConsoleLine(cmd, 'log');
        try {
          const result = eval(cmd);
          if (result !== undefined) addConsoleLine(String(result), 'log');
        } catch (err) {
          addConsoleLine(err.message, 'error');
        }
      }
      this.value = '';
    }
  });

  // ─── MENÚ: DESCARGAR PROYECTO ───
  document.getElementById('menuDownload').addEventListener('click', () => {
    const zipContent = `<!-- index.html -->\n${fileContents['index.html']}\n\n/* style.css */\n${fileContents['style.css']}\n\n// script.js\n${fileContents['script.js']}`;
    const blob = new Blob([zipContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proyecto_serakdep.txt';
    a.click();
    addConsoleLine('Proyecto descargado (archivos concatenados).', 'log');
  });

  // ─── MENÚ: NUEVO PROYECTO ───
  document.getElementById('menuClear').addEventListener('click', () => {
    if (confirm('¿Crear un nuevo proyecto? Se borrará el código actual.')) {
      fileContents['index.html'] = '';
      fileContents['style.css'] = '';
      fileContents['script.js'] = '';
      codeEditor.value = '';
      updateLineNumbers();
      updatePreview();
    }
  });

  // ─── TUTORIALES (MODAL) ───
  let currentTutorial = null;
  let currentTutorialStep = 0;

  document.getElementById('menuTutorials').addEventListener('click', () => {
    // Mostrar lista de tutoriales
    tutorialModalTitle.textContent = '📚 Tutoriales disponibles';
    tutorialModalBody.innerHTML = Object.entries(learningTopics).map(([key, val]) => `
      <div class="tutorial-card" style="padding:15px; margin-bottom:10px; background:#f8f9fa; border-radius:8px; cursor:pointer;" data-topic="${key}">
        <strong>${val.title}</strong>
        <p style="margin:5px 0 0; color:#666; font-size:0.9em;">Haz clic para ver el contenido</p>
      </div>
    `).join('');
    tutorialModal.classList.add('active');
    document.getElementById('loadTutorialCode').style.display = 'none';
    document.getElementById('prevTutorialStep').style.display = 'none';
    document.getElementById('nextTutorialStep').style.display = 'none';
    tutorialStepCounter.textContent = '';
    currentTutorial = null;
  });

  document.getElementById('closeTutorialModal').addEventListener('click', () => {
    tutorialModal.classList.remove('active');
  });

  tutorialModal.addEventListener('click', e => {
    if (e.target === tutorialModal) tutorialModal.classList.remove('active');
  });

  // Clic en tarjeta de tutorial
  tutorialModalBody.addEventListener('click', e => {
    const card = e.target.closest('.tutorial-card');
    if (card && card.dataset.topic) {
      const topic = learningTopics[card.dataset.topic];
      if (topic) {
        currentTutorial = topic;
        currentTutorialStep = 0;
        tutorialModalTitle.textContent = topic.title;
        tutorialModalBody.innerHTML = topic.content;
        document.getElementById('loadTutorialCode').style.display = 'inline-block';
        document.getElementById('prevTutorialStep').style.display = 'none';
        document.getElementById('nextTutorialStep').style.display = 'none';
        tutorialStepCounter.textContent = '';
      }
    }
  });

  // Clic en "Aprender" sidebar
  learnItems.forEach(item => {
    item.addEventListener('click', () => {
      const topic = learningTopics[item.dataset.topic];
      if (topic) {
        currentTutorial = topic;
        tutorialModalTitle.textContent = topic.title;
        tutorialModalBody.innerHTML = topic.content;
        document.getElementById('loadTutorialCode').style.display = 'inline-block';
        document.getElementById('prevTutorialStep').style.display = 'none';
        document.getElementById('nextTutorialStep').style.display = 'none';
        tutorialStepCounter.textContent = '';
        tutorialModal.classList.add('active');
      }
    });
  });

  // Cargar código del tutorial
  document.getElementById('loadTutorialCode').addEventListener('click', () => {
    if (currentTutorial && currentTutorial.code) {
      switchFile(currentTutorial.code);
      tutorialModal.classList.remove('active');
    }
  });

  // ─── INICIALIZAR ───
  switchFile('index.html');
  updateLineNumbers();
  updatePreview();
});