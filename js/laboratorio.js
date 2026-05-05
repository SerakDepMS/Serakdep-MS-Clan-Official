document.addEventListener('DOMContentLoaded', () => {

  const lobby = document.getElementById('labLobby');
  const environment = document.getElementById('labEnvironment');
  const enterBtn = document.getElementById('enterLabBtn');
  const exitBtn = document.getElementById('btnExitLab');

  const explorer = document.getElementById('labExplorer');
  const consolePanel = document.getElementById('labConsole');
  const wikiPanel = document.getElementById('labWiki');
  const previewArea = document.getElementById('labPreviewArea');
  const editorArea = document.getElementById('labEditorArea');

  const btnExplorer = document.getElementById('btnExplorer');
  const btnEditor = document.getElementById('btnEditor');
  const btnSplit = document.getElementById('btnSplit');
  const btnPreview = document.getElementById('btnPreview');
  const btnConsole = document.getElementById('btnConsole');
  const btnWiki = document.getElementById('btnWiki');
  const btnFocus = document.getElementById('btnFocus');
  const btnDownload = document.getElementById('btnDownload');
  const btnReset = document.getElementById('btnReset');
  const btnThemes = document.getElementById('btnThemes');
  const btnNewFile = document.getElementById('btnNewFile');
  const btnDuplicateFile = document.getElementById('btnDuplicateFile');
  const btnLoadFile = document.getElementById('btnLoadFile');
  const fileInput = document.getElementById('fileInput');
  const btnRefreshPreview = document.getElementById('btnRefreshPreview');
  const btnOpenPreview = document.getElementById('btnOpenPreview');
  const btnClearConsole = document.getElementById('btnClearConsole');
  const btnCloseConsole = document.getElementById('btnCloseConsole');
  const btnCloseWiki = document.getElementById('btnCloseWiki');
  const consoleInput = document.getElementById('consoleInput');
  const consoleOutput = document.getElementById('consoleOutput');
  const previewFrame = document.getElementById('previewFrame');
  const previewWrapper = document.getElementById('previewWrapper');
  const autoRefreshCheck = document.getElementById('autoRefreshCheck');
  const wikiContent = document.getElementById('wikiContent');
  const wikiSearch = document.getElementById('wikiSearch');
  const fileTree = document.getElementById('fileTree');
  const editorTabs = document.getElementById('editorTabs');
  const editorContainer = document.getElementById('editorContainer');
  const statusLines = document.getElementById('statusLines');
  const statusLang = document.getElementById('statusLang');
  const statusSave = document.getElementById('statusSave');
  const statusTime = document.getElementById('statusTime');
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  const btnSave = document.getElementById('btnSave');
  const btnFontUp = document.getElementById('btnFontUp');
  const btnFontDown = document.getElementById('btnFontDown');
  const statusFontSize = document.getElementById('statusFontSize');
  const btnFormat = document.getElementById('btnFormat');
  const btnWrap = document.getElementById('btnWrap');

  const btnChallenges = document.getElementById('btnChallenges');
  const challengesPanel = document.getElementById('labChallenges');
  const challengesContent = document.getElementById('challengesContent');
  const btnCloseChallenges = document.getElementById('btnCloseChallenges');
  const btnProjects = document.getElementById('btnProjects');
  const projectsModal = document.getElementById('projectsModal');
  const btnCloseProjectsModal = document.getElementById('btnCloseProjectsModal');
  const btnSaveProject = document.getElementById('btnSaveProject');
  const newProjectName = document.getElementById('newProjectName');
  const projectList = document.getElementById('projectList');

  const btnAssistant = document.getElementById('btnAssistant');
  const assistantPanel = document.getElementById('labAssistant');
  const assistantChat = document.getElementById('assistantChat');
  const assistantInput = document.getElementById('assistantInput');
  const btnSendAssistant = document.getElementById('btnSendAssistant');
  const btnCloseAssistant = document.getElementById('btnCloseAssistant');
  const explorerSplitter = document.getElementById('explorerSplitter');
  const previewSplitter = document.getElementById('previewSplitter');

  const btnMaximizeEditor = document.getElementById('btnMaximizeEditor');

  let files = [
    { id: '1', name: 'index.html', language: 'html', content: '<h1>¡Hola, Serakdep MS!</h1>\n<p>Modifica este archivo y mira la magia.</p>' },
    { id: '2', name: 'styles.css', language: 'css', content: 'body {\n  font-family: sans-serif;\n  background: #f0f4f0;\n  color: #1b4332;\n  text-align: center;\n  padding: 50px;\n}' },
    { id: '3', name: 'script.js', language: 'js', content: 'console.log("¡Bienvenido al SMS Studios de Serakdep MS!");' }
  ];
  let activeFileId = '1';
  let editors = {};
  let currentTheme = 'monokai';
  let consoleFilter = 'all';
  let wikiSection = 'html';
  let currentViewMode = 'split';
  let currentFontSize = 14;
  let consoleHistory = [];
  let historyIndex = -1;

  // Estado para restaurar al salir de pantalla completa (por si acaso)
  let preFullscreenState = {};

  function getActiveFile() { return files.find(f => f.id === activeFileId) || files[0]; }
  function getEditor(id) { return editors[id]; }

  function createEditor(file) {
    const modeMap = { html: 'htmlmixed', css: 'css', js: 'javascript' };
    const editor = CodeMirror(editorContainer, {
      value: file.content,
      mode: modeMap[file.language] || 'htmlmixed',
      theme: currentTheme,
      lineNumbers: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      tabSize: 2,
      indentWithTabs: false,
      lineWrapping: false,
      lint: (file.language === 'html' || file.language === 'css') ? true : false,
    });
    editor.setSize('100%', '100%');
    editor.on('change', () => {
      file.content = editor.getValue();
      updateStatusbar();
      if (autoRefreshCheck.checked) debouncePreview();
    });

    editor.on('inputRead', (cm, change) => {
      if (change.text[0] && /[a-zA-Z<.#]/.test(change.text[0])) {
        cm.showHint({
          hint: function(editor) {
            const inner = CodeMirror.hint.html(editor) || CodeMirror.hint.css(editor) || CodeMirror.hint.javascript(editor);
            if (inner && inner.list) {
              inner.list = inner.list.map(item => ({
                text: typeof item === 'string' ? item : item.text,
                displayText: typeof item === 'string' ? item : item.text,
                render: (el, self, data) => {
                  el.innerHTML = `<strong>${data.text}</strong><br><small>${getCompletionDescription(data.text)}</small>`;
                }
              }));
            }
            return inner;
          }
        });
      }
    });

    editor.getWrapperElement().style.fontSize = currentFontSize + 'px';
    editors[file.id] = editor;
    return editor;
  }

  function getCompletionDescription(word) {
    const desc = {
      'html': 'Elemento raíz de un documento HTML',
      'head': 'Contenedor de metadatos, estilos y scripts',
      'body': 'Contenido visible de la página',
      'div': 'Contenedor genérico en bloque',
      'span': 'Contenedor genérico en línea',
      'p': 'Párrafo de texto',
      'a': 'Enlace o hipervínculo',
      'img': 'Imagen',
      'ul': 'Lista no ordenada',
      'ol': 'Lista ordenada',
      'li': 'Elemento de lista',
      'table': 'Tabla',
      'form': 'Formulario',
      'input': 'Campo de entrada',
      'button': 'Botón',
      'color': 'Color del texto',
      'background': 'Fondo (color, imagen, etc.)',
      'font-size': 'Tamaño de fuente',
      'margin': 'Margen exterior',
      'padding': 'Relleno interior',
      'border': 'Borde del elemento',
      'display': 'Tipo de visualización (block, flex, grid...)',
      'flex': 'Abreviatura flex-grow, flex-shrink, flex-basis',
      'grid': 'Activa el sistema de cuadrícula',
      'position': 'Posicionamiento (relative, absolute, fixed, sticky)',
      'width': 'Ancho del elemento',
      'height': 'Alto del elemento',
      'function': 'Declara una función',
      'var': 'Variable con ámbito de función (evitar)',
      'let': 'Variable con ámbito de bloque',
      'const': 'Constante',
      'console.log': 'Muestra un mensaje en la consola',
      'document.querySelector': 'Selecciona el primer elemento que coincide con el selector CSS',
      'addEventListener': 'Asocia un evento a un elemento',
    };
    return desc[word] || '';
  }

  function switchToFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) return;
    activeFileId = fileId;
    Object.values(editors).forEach(ed => ed.getWrapperElement().style.display = 'none');
    let editor = getEditor(fileId);
    if (!editor) editor = createEditor(file);
    editor.getWrapperElement().style.display = '';
    editor.refresh();
    updateTabs();
    updateFileTree();
    updateStatusbar();
  }

  function updateTabs() {
    editorTabs.innerHTML = files.map(f => `
      <div class="editor-tab ${f.id === activeFileId ? 'active' : ''}" data-fileid="${f.id}">
        <span class="tab-name">${f.name}</span>
        ${files.length > 1 ? '<span class="close-tab" data-fileid="' + f.id + '">&times;</span>' : ''}
      </div>
    `).join('');
    document.querySelectorAll('.editor-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-tab')) {
          deleteFile(e.target.dataset.fileid);
          return;
        }
        switchToFile(tab.dataset.fileid);
      });
      tab.addEventListener('dblclick', (e) => {
        if (!e.target.classList.contains('close-tab')) {
          renameFile(tab.dataset.fileid);
        }
      });
    });
  }

  function updateFileTree() {
    fileTree.innerHTML = files.map(f => `
      <div class="file-item ${f.id === activeFileId ? 'active' : ''}" data-fileid="${f.id}">
        <i class="fab fa-${f.language === 'html' ? 'html5' : f.language === 'css' ? 'css3-alt' : 'js'}"></i>
        ${f.name}
      </div>
    `).join('');
    document.querySelectorAll('.file-item').forEach(item => {
      item.addEventListener('click', () => switchToFile(item.dataset.fileid));
      item.addEventListener('dblclick', () => renameFile(item.dataset.fileid));
    });
  }

  function addNewFile(language) {
    const extMap = { html: 'html', css: 'css', js: 'js' };
    const ext = extMap[language] || 'html';
    const name = prompt('Nombre del archivo:', `nuevo.${ext}`);
    if (!name) return;
    const file = {
      id: Date.now().toString(),
      name,
      language,
      content: ''
    };
    files.push(file);
    switchToFile(file.id);
    updateFileTree();
    updateTabs();
    saveToLocal();
  }

  function duplicateFile() {
    const active = getActiveFile();
    if (!active) return;
    const dupId = Date.now().toString();
    const baseName = active.name.replace(/\.(\w+)$/, '') || active.name;
    const extMatch = active.name.match(/\.(\w+)$/);
    const ext = extMatch ? extMatch[0] : '';
    const dupName = `${baseName}_copia${ext}`;
    const dupFile = {
      id: dupId,
      name: dupName,
      language: active.language,
      content: editors[active.id] ? editors[active.id].getValue() : active.content
    };
    files.push(dupFile);
    switchToFile(dupFile.id);
    updateFileTree();
    updateTabs();
    saveToLocal();
  }

  function renameFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) return;
    const newName = prompt('Nuevo nombre para ' + file.name, file.name);
    if (newName && newName.trim() && newName !== file.name) {
      file.name = newName.trim();
      updateFileTree();
      updateTabs();
      saveToLocal();
    }
  }

  function deleteFile(fileId) {
    if (files.length <= 1) return alert('Debe haber al menos un archivo.');
    files = files.filter(f => f.id !== fileId);
    if (editors[fileId]) {
      editors[fileId].getWrapperElement().remove();
      delete editors[fileId];
    }
    if (activeFileId === fileId) switchToFile(files[0].id);
    updateFileTree();
    updateTabs();
    saveToLocal();
  }

  function updatePreview() {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'js');
    const html = htmlFile ? htmlFile.content : '';
    const css = cssFile ? cssFile.content : '';
    const js = jsFile ? jsFile.content : '';

    const fullCode = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>${css}</style>
</head>
<body>${html}
<script>
  (function() {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    console.log = function(...args) {
      parent.addConsoleEntry('log', args.join(' '));
      originalLog.apply(console, args);
    };
    console.error = function(...args) {
      parent.addConsoleEntry('error', args.join(' '));
      originalError.apply(console, args);
    };
    console.warn = function(...args) {
      parent.addConsoleEntry('warn', args.join(' '));
      originalWarn.apply(console, args);
    };
  })();

  window.onerror = function(message, source, lineno, colno, error) {
    parent.addConsoleEntry('error', message + ' (línea ' + lineno + ')');
    return true;
  };

  window.addEventListener('unhandledrejection', function(event) {
    parent.addConsoleEntry('error', 'Promesa rechazada: ' + event.reason);
  });

  try {
    new Function(\`${js.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)();
  } catch (error) {
    parent.addConsoleEntry('error', error.name + ': ' + error.message);
  }
<\/script>
</body>
</html>`;

    const blob = new Blob([fullCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    previewFrame.src = url;

    previewFrame.onload = () => {
      try {
        const iframeWin = previewFrame.contentWindow;
        iframeWin.console.log = (...args) => addConsoleEntry('log', args.join(' '));
        iframeWin.console.error = (...args) => addConsoleEntry('error', args.join(' '));
        iframeWin.console.warn = (...args) => addConsoleEntry('warn', args.join(' '));
      } catch (e) {}
    };
  }

  window.addConsoleEntry = addConsoleEntry;

  let debounceTimer;
  function debouncePreview() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updatePreview, 500);
  }

  function addConsoleEntry(type, text) {
    const entry = document.createElement('div');
    entry.className = `${type}-entry`;
    entry.textContent = `[${type.toUpperCase()}] ${text}`;
    entry.dataset.type = type;
    consoleOutput.appendChild(entry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
    applyConsoleFilter();
  }

  function applyConsoleFilter() {
    const entries = consoleOutput.querySelectorAll('div');
    entries.forEach(e => {
      if (consoleFilter === 'all') e.style.display = '';
      else e.style.display = e.dataset.type === consoleFilter ? '' : 'none';
    });
  }

  function clearConsole() { consoleOutput.innerHTML = ''; }

  function downloadZip() {
    const zip = new JSZip();
    files.forEach(f => zip.file(f.name, f.content));
    zip.file('README.md', `# Proyecto Serakdep MS SMS Studios\n\n## Archivos\n${files.map(f => '- ' + f.name).join('\n')}\n\nCreado con el SMS Studios de Serakdep MS.`);
    zip.generateAsync({ type: 'blob' }).then(content => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(content);
      a.download = 'proyecto-sms.zip';
      a.click();
    });
  }

  function resetToDefault() {
    if (!confirm('¿Restaurar los archivos de ejemplo originales? Se perderán los cambios no guardados.')) return;
    files = [
      { id: '1', name: 'index.html', language: 'html', content: '<h1>¡Hola, Serakdep MS!</h1>\n<p>Modifica este archivo y mira la magia.</p>' },
      { id: '2', name: 'styles.css', language: 'css', content: 'body {\n  font-family: sans-serif;\n  background: #f0f4f0;\n  color: #1b4332;\n  text-align: center;\n  padding: 50px;\n}' },
      { id: '3', name: 'script.js', language: 'js', content: 'console.log("¡Bienvenido al SMS Studios de Serakdep MS!");' }
    ];
    Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
    editors = {};
    files.forEach(f => createEditor(f));
    activeFileId = '1';
    switchToFile(activeFileId);
    updateTabs();
    updateFileTree();
    updatePreview();
    saveToLocal();
    clearConsole();
  }

  function setViewMode(mode) {
    currentViewMode = mode;
    btnEditor.classList.remove('active');
    btnSplit.classList.remove('active');
    btnPreview.classList.remove('active');

    if (mode === 'editor') {
      editorArea.style.display = '';
      previewArea.style.display = 'none';
      btnEditor.classList.add('active');
    } else if (mode === 'preview') {
      editorArea.style.display = 'none';
      previewArea.style.display = '';
      btnPreview.classList.add('active');
    } else {
      editorArea.style.display = '';
      previewArea.style.display = '';
      btnSplit.classList.add('active');
    }
    if (mode !== 'preview') {
      Object.values(editors).forEach(ed => ed.refresh());
    }
  }

  // ==================== PANTALLA COMPLETA DEL LABORATORIO ====================
  function toggleEditorMaximize() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Guardar estado actual (por si se necesita al salir)
      preFullscreenState = {
        viewMode: currentViewMode
      };

      // Activar pantalla completa en el contenedor del laboratorio
      const el = environment;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) { /* Safari */
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) { /* IE/Edge */
        el.msRequestFullscreen();
      }

      btnMaximizeEditor.classList.add('active');
    } else {
      // Salir de pantalla completa
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
      // La restauración del botón se hace en el evento 'fullscreenchange'
    }
  }

  // Escuchar cambios de pantalla completa para restaurar el botón
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  document.addEventListener('msfullscreenchange', onFullscreenChange);

  function onFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Restaurar el botón y la vista si es necesario
      btnMaximizeEditor.classList.remove('active');
      // No cambiamos el modo de vista, se queda como estaba
    }
  }

  function formatCode() {
    const editor = getEditor(activeFileId);
    if (!editor) return;
    editor.operation(function() {
        const totalLines = editor.lineCount();
        for (let i = 0; i < totalLines; i++) {
            editor.indentLine(i, 'smart');
        }
    });
    editor.refresh();
  }

  function toggleComment() {
    const editor = getEditor(activeFileId);
    if (!editor) return;
    const mode = editor.getMode().name;
    const selections = editor.listSelections();

    function toggleLineComment(line, commentStart, commentEnd = '') {
      const text = editor.getLine(line);
      const trimmed = text.trim();
      if (commentEnd) {
        if (trimmed.startsWith(commentStart) && trimmed.endsWith(commentEnd)) {
          const newText = text.replace(commentStart, '').replace(commentEnd, '');
          editor.setLine(line, newText.trim());
        } else {
          editor.setLine(line, commentStart + ' ' + text + ' ' + commentEnd);
        }
      } else {
        if (trimmed.startsWith(commentStart)) {
          const newText = text.replace(commentStart, '');
          editor.setLine(line, newText.trim());
        } else {
          editor.setLine(line, commentStart + ' ' + text);
        }
      }
    }

    if (selections.length === 1 && selections[0].empty()) {
      const cursor = editor.getCursor();
      const line = cursor.line;
      if (mode === 'htmlmixed') {
        toggleLineComment(line, '<!--', '-->');
      } else if (mode === 'css') {
        toggleLineComment(line, '/*', '*/');
      } else {
        toggleLineComment(line, '//');
      }
    } else {
      editor.operation(() => {
        selections.forEach(sel => {
          const text = editor.getRange(sel.anchor, sel.head);
          if (mode === 'htmlmixed') {
            editor.replaceRange('<!-- ' + text + ' -->', sel.anchor, sel.head);
          } else if (mode === 'css') {
            editor.replaceRange('/* ' + text + ' */', sel.anchor, sel.head);
          } else {
            editor.replaceRange('// ' + text, sel.anchor, sel.head);
          }
        });
      });
    }
  }

  function setLineWrap(wrap) {
    Object.values(editors).forEach(ed => ed.setOption('lineWrapping', wrap));
    if (wrap) {
      btnWrap.classList.add('active');
    } else {
      btnWrap.classList.remove('active');
    }
  }

  function changeFontSize(delta) {
    currentFontSize = Math.max(10, Math.min(24, currentFontSize + delta));
    Object.values(editors).forEach(ed => {
      ed.getWrapperElement().style.fontSize = currentFontSize + 'px';
      ed.refresh();
    });
    statusFontSize.textContent = currentFontSize + 'px';
  }

  function changeTheme(theme) {
    currentTheme = theme;
    Object.values(editors).forEach(ed => ed.setOption('theme', theme));
  }

  const themeList = [
    { name: 'Monokai', value: 'monokai', icon: 'fa-moon' },
    { name: 'Dracula', value: 'dracula', icon: 'fa-skull' },
    { name: 'Solarized', value: 'solarized', icon: 'fa-sun' },
    { name: 'Nord', value: 'nord', icon: 'fa-snowflake' },
    { name: 'Material', value: 'material', icon: 'fa-palette' },
    { name: 'Default', value: 'default', icon: 'fa-circle' }
  ];

  function updateStatusbar() {
    const f = getActiveFile();
    if (f && editors[f.id]) {
      const doc = editors[f.id].getDoc();
      statusLines.textContent = `Líneas: ${doc.lineCount()}`;
      statusLang.textContent = f.language.toUpperCase();
    }
    statusTime.textContent = new Date().toLocaleTimeString();
  }

  function saveToLocal() {
    const data = files.map(f => ({
      id: f.id,
      name: f.name,
      language: f.language,
      content: editors[f.id] ? editors[f.id].getValue() : f.content
    }));
    localStorage.setItem('sms_code_lab_files', JSON.stringify(data));
    localStorage.setItem('sms_code_lab_active', activeFileId);
    statusSave.textContent = 'Guardado';
    statusSave.style.color = '#a6e3a1';
    setTimeout(() => { statusSave.style.color = ''; }, 2000);
  }

  function loadFromLocal() {
    const saved = localStorage.getItem('sms_code_lab_files');
    if (saved) {
      try {
        files = JSON.parse(saved);
        const savedActive = localStorage.getItem('sms_code_lab_active');
        activeFileId = (files.some(f => f.id === savedActive) ? savedActive : files[0].id);
        return true;
      } catch (e) { return false; }
    }
    return false;
  }

  function showWiki(section) {
    wikiSection = section;
    wikiContent.innerHTML = wikiData[section] || '<p>Sección no encontrada.</p>';
    document.querySelectorAll('.wiki-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.wiki-tab[data-wiki="${section}"]`).classList.add('active');
    addCopyButtonsToWiki();
  }

  function filterWiki() {
    const term = wikiSearch.value.toLowerCase();
    if (!term) { showWiki(wikiSection); return; }
    const sectionData = wikiData[wikiSection];
    const lines = sectionData.split('\n');
    const filtered = lines.filter(line => line.toLowerCase().includes(term));
    wikiContent.innerHTML = filtered.length > 0 ? filtered.join('<br>') : `<p>Sin resultados para "${term}"</p>`;
    addCopyButtonsToWiki();
  }

  function addCopyButtonsToWiki() {
    wikiContent.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.copy-example-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-example-btn';
      btn.textContent = 'Copiar';
      btn.addEventListener('click', () => {
        const clone = pre.cloneNode(true);
        const copyBtn = clone.querySelector('.copy-example-btn');
        if (copyBtn) copyBtn.remove();
        navigator.clipboard.writeText(clone.textContent.trim()).then(() => {
          btn.textContent = '¡Copiado!';
          setTimeout(() => { btn.textContent = 'Copiar'; }, 1500);
        }).catch(() => alert('No se pudo copiar'));
      });
      pre.appendChild(btn);
    });
  }

    const wikiData = {
  html: `
<h3>HTML (HyperText Markup Language)</h3>
<p><strong>HTML</strong> es el lenguaje de marcado estándar para crear páginas web. Define la estructura del contenido mediante <em>etiquetas</em>.</p>

<h4>🔹 Estructura básica</h4>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Título&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hola mundo&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h4>🔹 Etiquetas de texto</h4>
<ul>
  <li><code>&lt;h1&gt;...&lt;h6&gt;</code>: Encabezados.</li>
  <li><code>&lt;p&gt;</code>: Párrafo.</li>
  <li><code>&lt;strong&gt;</code>: Negrita semántica.</li>
  <li><code>&lt;em&gt;</code>: Cursiva semántica.</li>
  <li><code>&lt;br&gt;</code>: Salto de línea.</li>
  <li><code>&lt;hr&gt;</code>: Línea horizontal.</li>
  <li><code>&lt;span&gt;</code>: Contenedor en línea.</li>
  <li><code>&lt;div&gt;</code>: Contenedor en bloque.</li>
  <li><code>&lt;blockquote&gt;</code>: Cita.</li>
  <li><code>&lt;pre&gt;</code>: Texto preformateado.</li>
  <li><code>&lt;code&gt;</code>: Código en línea.</li>
</ul>

<h4>🔹 Enlaces e imágenes</h4>
<pre>&lt;a href="url" target="_blank" rel="noopener"&gt;Texto&lt;/a&gt;
&lt;a href="#ancla"&gt;Ir a sección&lt;/a&gt;
&lt;img src="imagen.jpg" alt="Descripción" width="300" height="200" loading="lazy"&gt;
&lt;figure&gt;
  &lt;img src="foto.jpg" alt="Foto"&gt;
  &lt;figcaption&gt;Pie de foto&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<h4>🔹 Listas</h4>
<pre>&lt;ul&gt; &lt;li&gt;Elemento&lt;/li&gt; &lt;/ul&gt;  <!-- no ordenada -->
&lt;ol&gt; &lt;li&gt;Paso&lt;/li&gt; &lt;/ol&gt;      <!-- ordenada -->
&lt;dl&gt;                         <!-- de definición -->
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Lenguaje de marcado&lt;/dd&gt;
&lt;/dl&gt;</pre>

<h4>🔹 Tablas</h4>
<pre>&lt;table&gt;
  &lt;caption&gt;Lista de usuarios&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Nombre&lt;/th&gt;&lt;th&gt;Edad&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Ana&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;td colspan="2"&gt;Total: 1&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</pre>

<h4>🔹 Formularios avanzados</h4>
<pre>&lt;form action="/enviar" method="post" novalidate&gt;
  &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  &lt;input type="password" placeholder="Contraseña"&gt;
  &lt;input type="checkbox" id="acepto"&gt;
  &lt;label for="acepto"&gt;Acepto términos&lt;/label&gt;
  &lt;input type="radio" name="opcion" value="1"&gt; Opción 1
  &lt;select name="pais"&gt;&lt;option value=""&gt;Elige&lt;/option&gt;&lt;option value="co"&gt;Colombia&lt;/option&gt;&lt;/select&gt;
  &lt;textarea rows="4" cols="50"&gt;&lt;/textarea&gt;
  &lt;input type="range" min="0" max="100"&gt;
  &lt;input type="date"&gt;
  &lt;input type="color"&gt;
  &lt;datalist id="sugerencias"&gt;
    &lt;option value="Opción 1"&gt;
    &lt;option value="Opción 2"&gt;
  &lt;/datalist&gt;
  &lt;input list="sugerencias"&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
  &lt;button type="reset"&gt;Limpiar&lt;/button&gt;
&lt;/form&gt;</pre>

<h4>🔹 Multimedia y gráficos</h4>
<pre>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Tu navegador no soporta audio.
&lt;/audio&gt;
&lt;video width="320" height="240" controls poster="preview.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;
&lt;iframe src="https://www.youtube.com/embed/video_id" allowfullscreen&gt;&lt;/iframe&gt;
&lt;canvas id="miCanvas" width="300" height="150"&gt;&lt;/canvas&gt;
&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="green" /&gt;
&lt;/svg&gt;</pre>

<h4>🔹 Elementos semánticos HTML5</h4>
<pre>&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;section&gt;...&lt;/section&gt;
&lt;article&gt;...&lt;/article&gt;
&lt;aside&gt;...&lt;/aside&gt;
&lt;footer&gt;...&lt;/footer&gt;
&lt;details&gt;
  &lt;summary&gt;Más información&lt;/summary&gt;
  &lt;p&gt;Contenido oculto&lt;/p&gt;
&lt;/details&gt;
&lt;dialog id="modal"&gt;Contenido modal&lt;/dialog&gt;
&lt;mark&gt;Texto resaltado&lt;/mark&gt;
&lt;time datetime="2025-07-20"&gt;20 de julio&lt;/time&gt;
&lt;progress value="70" max="100"&gt;70%&lt;/progress&gt;
&lt;meter value="0.6"&gt;60%&lt;/meter&gt;</pre>

<h4>🔹 Atributos globales importantes</h4>
<ul>
  <li><code>class</code>, <code>id</code></li>
  <li><code>style</code></li>
  <li><code>title</code> (tooltip)</li>
  <li><code>data-*</code> (datos personalizados)</li>
  <li><code>hidden</code></li>
  <li><code>tabindex</code></li>
  <li><code>contenteditable</code></li>
  <li><code>draggable</code></li>
  <li><code>spellcheck</code></li>
  <li><code>autofocus</code></li>
</ul>

<h4>🔹 Accesibilidad (ARIA)</h4>
<pre>&lt;button aria-label="Cerrar"&gt;X&lt;/button&gt;
&lt;nav aria-label="Menú principal"&gt;...&lt;/nav&gt;
&lt;div role="alert" aria-live="assertive"&gt;...&lt;/div&gt;
&lt;input type="text" aria-describedby="ayuda"&gt;
&lt;span id="ayuda"&gt;Máximo 10 caracteres&lt;/span&gt;</pre>

<h4>🔹 Meta etiquetas y SEO</h4>
<pre>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="Descripción de la página"&gt;
&lt;meta property="og:title" content="Título Open Graph"&gt;
&lt;meta property="og:image" content="imagen.jpg"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"&gt;
&lt;link rel="canonical" href="url-canonica"&gt;</pre>

<h4>🔹 Scripts y estilos</h4>
<pre>&lt;script src="archivo.js" defer&gt;&lt;/script&gt;
&lt;script&gt;console.log("inline");&lt;/script&gt;
&lt;noscript&gt;JavaScript deshabilitado&lt;/noscript&gt;
&lt;style&gt;body { background: #fff; }&lt;/style&gt;
&lt;link rel="stylesheet" href="estilos.css"&gt;</pre>

<h4>🔹 Caracteres especiales (entidades)</h4>
<pre>&amp;lt; → &lt;
&amp;gt; → &gt;
&amp;amp; → &amp;
&amp;nbsp; → espacio no separable
&amp;copy; → ©
&amp;reg; → ®</pre>`,

  css: `
<h3>CSS (Cascading Style Sheets)</h3>
<p>Lenguaje que define la presentación visual de un documento HTML.</p>

<h4>🔹 Formas de aplicar CSS</h4>
<pre>&lt;div style="color:red;"&gt;         /* en línea */
&lt;style&gt; p { font-size:14px; }&lt;/style&gt; /* interno */
&lt;link rel="stylesheet" href="estilos.css"&gt; /* externo */</pre>

<h4>🔹 Selectores</h4>
<pre>h1 { }                     /* elemento */
.clase { }                 /* clase */
#id { }                    /* id */
* { }                      /* universal */
div p { }                  /* descendiente */
div &gt; p { }                /* hijo directo */
h1 + p { }                 /* hermano adyacente */
h1 ~ p { }                 /* hermanos generales */
input[type="text"] { }     /* atributo exacto */
a[href^="https"] { }       /* atributo empieza con */
img[src$=".png"] { }       /* atributo termina con */
a[href*="ejemplo"] { }     /* atributo contiene */
a:hover { }                /* pseudo‑clase */
p::first-line { }          /* pseudo‑elemento */
p:nth-child(2n) { }        /* pseudo‑clase estructural */
:not(.excluir) { }         /* negación */</pre>

<h4>🔹 Box Model</h4>
<pre>div {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px auto;
  box-sizing: border-box; /* ancho incluye padding y borde */
}</pre>

<h4>🔹 Posicionamiento</h4>
<pre>.relativo { position: relative; top: 10px; left: 20px; }
.absoluto { position: absolute; top: 0; right: 0; }
.fijo     { position: fixed; bottom: 0; width: 100%; }
.pegajoso { position: sticky; top: 0; }</pre>

<h4>🔹 Display</h4>
<pre>display: block | inline | inline-block | none;
display: flex;
display: grid;
display: contents; /* el contenedor desaparece visualmente */</pre>

<h4>🔹 Colores y fondos</h4>
<pre>color: #2d6a4f;
background-color: #f0f0f0;
background-image: url('fondo.jpg');
background-size: cover;
background-position: center;
background: linear-gradient(to right, red, blue);
opacity: 0.8;
mix-blend-mode: multiply;</pre>

<h4>🔹 Tipografía</h4>
<pre>font-family: 'Segoe UI', Tahoma, sans-serif;
font-size: 1.1rem;
font-weight: 600;
font-style: italic;
text-align: center;
line-height: 1.6;
text-decoration: underline wavy red;
text-transform: uppercase;
letter-spacing: 1px;
word-spacing: 2px;
white-space: nowrap; /* pre, pre-wrap, pre-line */
text-overflow: ellipsis;
overflow: hidden;</pre>

<h4>🔹 Unidades</h4>
<pre>px, em, rem, %, vw (viewport width), vh (viewport height), vmin, vmax, ch, ex
Ejemplo: width: calc(50% - 20px);
font-size: clamp(1rem, 2.5vw, 2rem);</pre>

<h4>🔹 Flexbox</h4>
<pre>.contenedor {
  display: flex;
  flex-direction: row; /* column */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}
.item {
  flex: 1 1 200px; /* grow shrink basis */
  order: 2;
  align-self: stretch;
}</pre>

<h4>🔹 CSS Grid</h4>
<pre>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 20px;
  justify-items: center;
  align-items: start;
}
.celda {
  grid-column: span 2;
  grid-row: 1 / 3;
  place-self: center;
}</pre>

<h4>🔹 Transiciones y Animaciones</h4>
<pre>.boton {
  transition: background 0.3s ease, transform 0.2s;
  cursor: pointer;
}
.boton:hover {
  background: gold;
  transform: scale(1.1);
}

@keyframes deslizar {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.elemento { animation: deslizar 0.5s forwards; }

/* Animación múltiple */
.circulo {
  animation: mover 2s infinite alternate, cambiarColor 1s infinite;
}
@keyframes mover { 0% { left: 0 } 100% { left: 200px } }
@keyframes cambiarColor { 0% { background: red } 50% { background: blue } 100% { background: red } }</pre>

<h4>🔹 Responsive (Media Queries)</h4>
<pre>/* Mobile first */
.elemento { font-size: 16px; }
@media (min-width: 768px) {
  .elemento { font-size: 18px; }
}
@media (max-width: 480px) {
  .ocultar-movil { display: none; }
}
/* Preferencias del sistema */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}
@media (prefers-reduced-motion: reduce) {
  .animado { animation: none; }
}</pre>

<h4>🔹 Variables CSS</h4>
<pre>:root {
  --primario: #2d6a4f;
  --espaciado: 1rem;
}
.tema-oscuro {
  --primario: #a5d6a5;
}
.header {
  background: var(--primario);
  padding: var(--espaciado);
}
/* Fallback */
color: var(--secundario, #333);</pre>

<h4>🔹 Sombras y bordes</h4>
<pre>box-shadow: 5px 5px 15px rgba(0,0,0,0.2), inset 0 0 5px rgba(255,255,0,0.3);
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
border: 2px dashed #aaa;
border-radius: 8px;
outline: 2px solid blue;
outline-offset: 2px;</pre>

<h4>🔹 Filtros y efectos visuales</h4>
<pre>filter: blur(5px) brightness(1.2) contrast(1.5);
backdrop-filter: blur(10px);
transform: rotate(5deg) skew(2deg);
clip-path: circle(50%);
mask-image: linear-gradient(black, transparent);</pre>

<h4>🔹 Imprimir estilos</h4>
<pre>@media print {
  nav, footer { display: none; }
  body { font-size: 12pt; }
}</pre>

<h4>🔹 Scroll suave y comportamiento</h4>
<pre>html { scroll-behavior: smooth; }

/* Scroll personalizado */
.contenedor {
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
.seccion {
  scroll-snap-align: start;
  height: 100vh;
}

/* Ocultar scrollbar pero mantener scroll */
.ocultar-barra::-webkit-scrollbar { display: none; }
.ocultar-barra { -ms-overflow-style: none; scrollbar-width: none; }</pre>

<h4>🔹 Tricks de centrado</h4>
<pre>/* Centrar con Flexbox */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Centrar con Grid */
.grid-center {
  display: grid;
  place-items: center;
}

/* Centrar absolutamente */
.abs-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Centrar verticalmente sin flex */
.verti {
  display: table-cell;
  vertical-align: middle;
}</pre>

<h4>🔹 Personalizar inputs y select</h4>
<pre>input[type="text"] {
  border: none;
  border-bottom: 2px solid #2d6a4f;
  outline: none;
  padding: 8px 0;
  background: transparent;
  font-size: 1rem;
}
input[type="text"]:focus { border-color: #d4af37; }

/* Checkbox personalizado */
input[type="checkbox"] { accent-color: #2d6a4f; }

/* Quitar estilos nativos de select */
select {
  appearance: none;
  -webkit-appearance: none;
  background: url("data:image/svg+xml,...") no-repeat right;
}</pre>

<h4>🔹 Efectos de texto avanzados</h4>
<pre>/* Degradado en texto */
.texto-grad {
  background: linear-gradient(135deg, #2d6a4f, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Texto recortado en 1 línea */
.truncar {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Texto recortado en N líneas */
.multi-truncar {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}</pre>

<h4>🔹 Clases de utilidad comunes</h4>
<pre>.hidden   { display: none !important; }
.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
.no-select { user-select: none; }
.pointer   { cursor: pointer; }
.full-w    { width: 100%; }
.rounded   { border-radius: 8px; }
.shadow    { box-shadow: 0 4px 15px rgba(0,0,0,0.15); }
.sr-only   { /* accesibilidad: visible sólo para lectores */ }</pre>`,
  js: `
<h3>JavaScript</h3>
<p><strong>JavaScript</strong> es un lenguaje de programación interpretado que permite crear interactividad en páginas web. Es dinámico, basado en prototipos y multiparadigma.</p>

<h4>🔹 Variables y ámbito</h4>
<pre>let nombre = "Serakdep";   // ámbito de bloque
const PI = 3.1416;        // constante
var global = true;        // ámbito de función (evitar)

// Modo estricto
"use strict";
x = 5; // ❌ error</pre>

<h4>🔹 Tipos de datos</h4>
<pre>let texto = "hola";           // string
let numero = 42;              // number
let activo = true;            // boolean
let vacio = null;             // nulo
let indefinido;               // undefined
let persona = { nombre: "Ana" };
let lista = [1, 2, 3];
let simbolo = Symbol('id');
let bigInt = 123n;</pre>

<h4>🔹 Operadores</h4>
<pre>+, -, *, /, % (módulo), ** (exponente)
== (igualdad débil), === (estricta), !=, !==
>, <, >=, <=
&& (AND), || (OR), ! (NOT), ?? (nullish coalescing)
?. (optional chaining)
let usuario = obj?.perfil?.nombre ?? 'Invitado';</pre>

<h4>🔹 Condicionales</h4>
<pre>if (edad >= 18) {
  console.log("Mayor");
} else if (edad > 12) {
  console.log("Adolescente");
} else {
  console.log("Niño");
}
// Ternario
let mensaje = age >= 18 ? "Adulto" : "Menor";
// Switch
switch (color) {
  case 'rojo': console.log('peligro'); break;
  default: console.log('neutro');
}</pre>

<h4>🔹 Bucles</h4>
<pre>for (let i = 0; i < 5; i++) { ... }
while (cond) { ... }
do { ... } while (cond);
for (let elemento of array) { ... }   // valores
for (let indice in array) { ... }     // índices
for (let clave in objeto) { ... }     // propiedades
array.forEach((item, index) => { ... });</pre>

<h4>🔹 Funciones</h4>
<pre>// Declaración
function sumar(a, b = 5) { return a + b; }
// Expresión
const restar = function(a, b) { return a - b; };
// Flecha (arrow)
const multiplicar = (a, b) => a * b;
const saludar = nombre => \`Hola \${nombre}\`;

// IIFE (expresión de función ejecutada inmediatamente)
(function() { console.log("auto"); })();
(() => console.log("arrow IIFE"))();</pre>

<h4>🔹 Arrays</h4>
<pre>let frutas = ["manzana", "pera"];
frutas.push("uva");            // añade al final
frutas.pop();                  // elimina último
frutas.unshift("fresa");       // añade al inicio
frutas.shift();                // elimina primero
frutas.splice(1, 1, "kiwi");   // reemplaza
let idx = frutas.indexOf("pera");
frutas.includes("pera");
let copia = [...frutas];
frutas.forEach(f => console.log(f));
let mayus = frutas.map(f => f.toUpperCase());
let filtro = frutas.filter(f => f.length > 3);
let total = [10,20,30].reduce((acc, n) => acc + n, 0);
let encontrado = frutas.find(f => f.startsWith("p"));
frutas.sort();
frutas.reverse();
</pre>

<h4>🔹 Objetos</h4>
<pre>let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2023,
  arrancar() { console.log("run run"); }
};
coche.color = "rojo";          // añadir propiedad
delete coche.anio;             // eliminar
console.log(coche.marca);
console.log(coche["modelo"]);
Object.keys(coche);            // ["marca","modelo","color","arrancar"]
Object.values(coche);
Object.entries(coche);
// Copia superficial
let copia = { ...coche, puertas: 4 };
let asignado = Object.assign({}, coche);</pre>

<h4>🔹 Desestructuración</h4>
<pre>let [a, b] = [1, 2];
let { marca, modelo } = coche;
let { marca: m, ...resto } = coche;  // renombrar y rest</pre>

<h4>🔹 Template literals</h4>
<pre>let nombre = "Juan";
console.log(\`Hola \${nombre}, bienvenido\`);
let multilinea = \`Línea 1
Línea 2\`;</pre>

<h4>🔹 Spread y Rest</h4>
<pre>let arr = [1, 2];
let nuevoArr = [...arr, 3, 4]; // spread
function suma(...nums) { return nums.reduce((a,b) => a+b,0); } // rest</pre>

<h4>🔹 DOM (Document Object Model)</h4>
<pre>// Seleccionar
let elem = document.getElementById("id");
let elems = document.querySelectorAll(".clase");
let first = document.querySelector("div p");

// Modificar contenido
elem.textContent = "Nuevo texto";
elem.innerHTML = "&lt;strong&gt;Hola&lt;/strong&gt;";
elem.style.color = "red";
elem.classList.add("activo");
elem.classList.toggle("oscuro");
elem.setAttribute("data-id", "123");
elem.dataset.id = "123"; // acceso directo

// Crear / insertar
let nuevo = document.createElement("p");
nuevo.textContent = "Parrafo";
document.body.appendChild(nuevo);
document.body.prepend(nuevo);
elem.insertAdjacentHTML("beforeend", "&lt;span&gt;Extra&lt;/span&gt;");
nuevo.remove();

// Eventos
boton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(event.target);
});
// Delegación de eventos
document.getElementById("lista").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") { console.log(e.target.textContent); }
});

// Eventos comunes: click, submit, keydown, mouseover, change, input, load, DOMContentLoaded</pre>

<h4>🔹 Temporizadores</h4>
<pre>let id = setTimeout(() => alert("Tiempo!"), 2000);
clearTimeout(id);
let intervalo = setInterval(() => console.log("Cada 1s"), 1000);
clearInterval(intervalo);</pre>

<h4>🔹 Asincronía (Promesas, async/await)</h4>
<pre>fetch("https://api.ejemplo.com/datos")
  .then(response => {
    if (!response.ok) throw new Error("Error de red");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Petición finalizada"));

async function obtenerDatos() {
  try {
    const res = await fetch("https://api.ejemplo.com");
    const datos = await res.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}

// Promise.all / race
Promise.all([fetch1, fetch2]).then(([r1, r2]) => { ... });
Promise.race([fetch1, fetch2]).then(r => ...);</pre>

<h4>🔹 JSON y almacenamiento local</h4>
<pre>let json = JSON.stringify(objeto);
let objeto = JSON.parse(json);
localStorage.setItem("clave", "valor");
let valor = localStorage.getItem("clave");
localStorage.removeItem("clave");
sessionStorage.setItem("temp", "sesion");</pre>

<h4>🔹 Clases (sintaxis ES6)</h4>
<pre>class Animal {
  constructor(nombre) { this.nombre = nombre; }
  hablar() { console.log(\`\${this.nombre} hace sonido\`); }
  static info() { return "Seres vivos"; }
}
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
  hablar() { console.log(\`\${this.nombre} ladra\`); }
}
let fido = new Perro("Fido", "Labrador");
console.log(Animal.info());</pre>

<h4>🔹 Módulos ES6</h4>
<pre>// archivo matematica.js
export const PI = 3.14;
export function sumar(a, b) { return a + b; }
export default class Calculadora { ... }

// archivo principal.js
import Calculadora, { PI, sumar } from './matematica.js';
import * as Math from './matematica.js';</pre>

<h4>🔹 Manejo de errores</h4>
<pre>try {
  // código que puede fallar
} catch (error) {
  console.error(error.message);
} finally {
  // se ejecuta siempre
}

throw new Error("Algo salió mal");</pre>

<h4>🔹 Expresiones regulares</h4>
<pre>let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test("test@correo.com"); // true
let resultado = "hola123".match(/\d+/);
let partes = "rojo,verde,azul".split(/,\s*/);
let limpio = " hola ".trim();</pre>

<h4>🔹 APIs web comunes</h4>
<pre>// Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { console.log("Visible"); }
  });
});
observer.observe(document.querySelector(".objetivo"));

// requestAnimationFrame
function animar() {
  // actualizar animación
  requestAnimationFrame(animar);
}
requestAnimationFrame(animar);

// Geolocalización
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});

// Notificaciones (necesita permiso)
if (Notification.permission === "granted") {
  new Notification("Título", { body: "Mensaje" });
}</pre>

<h4>🔹 Buenas prácticas</h4>
<ul>
  <li>Usa <code>'use strict'</code> al inicio de scripts.</li>
  <li>Prefiere <code>const</code> y <code>let</code> sobre <code>var</code>.</li>
  <li>Declara funciones antes de usarlas (hoisting).</li>
  <li>Evita modificar directamente el DOM en bucles; usa fragmentos o <code>insertAdjacentHTML</code>.</li>
  <li>Utiliza <code>===</code> en lugar de <code>==</code>.</li>
  <li>Emplea nombres descriptivos.</li>
</ul>

<h4>🔹 Eventos del DOM (referencia rápida)</h4>
<pre>// Ratón
elem.addEventListener('click', fn);
elem.addEventListener('dblclick', fn);
elem.addEventListener('mouseover', fn);
elem.addEventListener('mouseout', fn);
elem.addEventListener('mousedown', fn);
elem.addEventListener('mouseup', fn);
elem.addEventListener('mousemove', fn);
elem.addEventListener('contextmenu', fn); // clic derecho

// Teclado
document.addEventListener('keydown', e => {
  console.log(e.key, e.code, e.ctrlKey, e.shiftKey, e.altKey);
});
document.addEventListener('keyup', fn);

// Formulario
form.addEventListener('submit', e => { e.preventDefault(); });
input.addEventListener('input', e => console.log(e.target.value));
input.addEventListener('change', fn); // al perder foco con cambio
input.addEventListener('focus', fn);
input.addEventListener('blur', fn);

// Ventana / documento
window.addEventListener('load', fn);
window.addEventListener('resize', fn);
window.addEventListener('scroll', fn);
document.addEventListener('DOMContentLoaded', fn);

// Touch (móvil)
elem.addEventListener('touchstart', fn);
elem.addEventListener('touchend', fn);
elem.addEventListener('touchmove', fn);</pre>

<h4>🔹 Depuración (Debug)</h4>
<pre>// Consola
console.log('valor:', variable);
console.error('Error:', err);
console.warn('Advertencia');
console.table([{ nombre: 'Ana', edad: 25 }]);
console.group('Mi Grupo');
  console.log('dentro del grupo');
console.groupEnd();
console.time('operacion');
// ...código...
console.timeEnd('operacion');
console.assert(condicion, 'Falla si es falso');

// Puntos de interrupción
debugger; // pausa la ejecución en DevTools

// Inspeccionar tipos
typeof variable;      // 'string', 'number', 'object', etc.
Array.isArray(valor); // true/false
variable instanceof Date;</pre>

<h4>🔹 LocalStorage y SessionStorage</h4>
<pre>// LocalStorage: persiste aunque se cierre el navegador
localStorage.setItem('usuario', JSON.stringify({ nombre: 'Ana' }));
const usuario = JSON.parse(localStorage.getItem('usuario'));
localStorage.removeItem('usuario');
localStorage.clear(); // borra todo

// SessionStorage: solo dura la sesión del navegador
sessionStorage.setItem('temp', 'valor');

// Guardar arrays u objetos SIEMPRE con JSON
const lista = ['a', 'b', 'c'];
localStorage.setItem('lista', JSON.stringify(lista));
const recuperada = JSON.parse(localStorage.getItem('lista') || '[]');</pre>

<h4>🔹 Manipulación avanzada del DOM</h4>
<pre>// DocumentFragment (inserciones eficientes)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);
}
lista.appendChild(fragment); // un solo reflow

// Clonar nodos
const clon = elem.cloneNode(true); // true = copia hijos

// Posición e inserción
padre.insertBefore(nuevo, referencia);
padre.replaceChild(nuevo, viejo);
elem.insertAdjacentElement('afterend', nuevo);
// beforebegin | afterbegin | beforeend | afterend

// Atributos de datos
elem.dataset.userId = '42';
console.log(elem.dataset.userId);

// Dimensiones y posición
elem.getBoundingClientRect(); // { top, left, width, height }
window.scrollY; // scroll vertical actual
elem.scrollIntoView({ behavior: 'smooth' });</pre>

<h4>🔹 Patrones útiles</h4>
<pre>// Debounce: retrasar ejecución hasta que el usuario pare
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
window.addEventListener('resize', debounce(() => console.log('resize'), 300));

// Throttle: ejecutar máx una vez cada N ms
function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}

// Copiar al portapapeles
navigator.clipboard.writeText('texto').then(() => console.log('Copiado'));

// Generar ID único
const uid = () => Math.random().toString(36).slice(2, 9);

// Espera N milisegundos
const sleep = ms => new Promise(res => setTimeout(res, ms));</pre>`
};

  // ==================== RETOS ====================
  const challenges = [
    {
      id: 'ch1',
      title: 'Página de bienvenida',
      level: 'Básico',
      description: 'Crea una página web sencilla que muestre un título de bienvenida y un párrafo descriptivo. Aprenderás la estructura básica de HTML.',
      instructions: [
        'Abre el archivo <strong>index.html</strong>.',
        'Dentro del <code>&lt;body&gt;</code>, agrega un encabezado <code>&lt;h1&gt;</code> con el texto "Bienvenido a mi sitio".',
        'Añade un párrafo <code>&lt;p&gt;</code> que describa de qué trata la página.',
        'Guarda los cambios y mira la vista previa.'
      ],
      template: [
        { name: 'index.html', lang: 'html', content: '<h1>Bienvenido a mi sitio</h1>\n<p>Escribe aquí una descripción...</p>' }
      ]
    },
    {
      id: 'ch2',
      title: 'Estilizando un botón',
      level: 'Intermedio',
      description: 'Practica CSS creando un botón con forma redondeada, color de fondo y un efecto hover. Vincularás un archivo CSS a HTML.',
      instructions: [
        'En <strong>index.html</strong>, coloca un <code>&lt;button&gt;</code> con la clase "btn".',
        'En <strong>styles.css</strong>, define la clase <code>.btn</code> con fondo verde, texto blanco, bordes redondeados y padding.',
        'Agrega una pseudo-clase <code>.btn:hover</code> que cambie el color de fondo a dorado y escale ligeramente.',
        'Observa el resultado en la vista previa.'
      ],
      template: [
        { name: 'index.html', lang: 'html', content: '<button class="btn">Haz clic</button>' },
        { name: 'styles.css', lang: 'css', content: '.btn {\n  background: #2d6a4f;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.btn:hover {\n  background: #d4af37;\n  transform: scale(1.05);\n}' }
      ]
    },
    {
      id: 'ch3',
      title: 'Lista de tareas interactiva',
      level: 'Avanzado',
      description: 'Usa JavaScript para crear una lista de tareas (to‑do list) donde puedas agregar elementos escribiendo en un campo de texto.',
      instructions: [
        'En <strong>index.html</strong>, añade un <code>&lt;input&gt;</code> con id "task" y un <code>&lt;button&gt;</code> con id "add". Debajo, un <code>&lt;ul&gt;</code> con id "lista".',
        'En <strong>script.js</strong>, obtén los elementos por su id y agrega un <code>addEventListener</code> al botón.',
        'Dentro del evento, crea un <code>&lt;li&gt;</code> con el valor del input y agrégalo al <code>&lt;ul&gt;</code>. Luego limpia el input.',
        'Prueba la funcionalidad en la vista previa.'
      ],
      template: [
        { name: 'index.html', lang: 'html', content: '<input type="text" id="task" placeholder="Nueva tarea">\n<button id="add">Agregar</button>\n<ul id="lista"></ul>' },
        { name: 'script.js', lang: 'js', content: 'document.getElementById("add").addEventListener("click", function() {\n  var tarea = document.getElementById("task").value;\n  if (tarea.trim() !== "") {\n    var li = document.createElement("li");\n    li.textContent = tarea;\n    document.getElementById("lista").appendChild(li);\n    document.getElementById("task").value = "";\n  }\n});' }
      ]
    }
  ];

  function renderChallenges() {
    challengesContent.innerHTML = challenges.map(ch => `
      <div class="challenge-card" style="border:1px solid var(--lab-border); border-radius:10px; padding:16px; margin-bottom:16px;">
        <h4 style="color:var(--lab-gold); margin:0 0 6px;">${ch.title} <span style="font-size:0.7rem; background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:12px;">${ch.level}</span></h4>
        <p>${ch.description}</p>
        <details>
          <summary style="cursor:pointer; color:var(--lab-gold-light); font-weight:600;">Instrucciones paso a paso</summary>
          <ol style="font-size:0.9rem; margin-top:8px; padding-left:20px;">
            ${ch.instructions.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </details>
        <button class="challenge-start-btn" data-challenge-id="${ch.id}" style="margin-top:10px; width:100%;">
          <i class="fas fa-play"></i> Empezar reto
        </button>
      </div>
    `).join('');
    challengesContent.querySelectorAll('.challenge-start-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const challengeId = btn.dataset.challengeId;
        const challenge = challenges.find(c => c.id === challengeId);
        if (challenge) {
          if (confirm(`¿Cargar la plantilla del reto "${challenge.title}"? Esto reemplazará los archivos actuales.`)) {
            files = challenge.template.map((f, i) => ({
              id: (Date.now() + i).toString(),
              name: f.name,
              language: f.lang,
              content: f.content
            }));
            Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
            editors = {};
            files.forEach(f => createEditor(f));
            activeFileId = files[0].id;
            switchToFile(activeFileId);
            updateTabs();
            updateFileTree();
            updatePreview();
            saveToLocal();
            clearConsole();
          }
        }
      });
    });
  }

  function saveProject(name) {
    const allProjects = JSON.parse(localStorage.getItem('sms_code_lab_projects') || '{}');
    const projectData = {
      name: name,
      files: files.map(f => ({
        id: f.id,
        name: f.name,
        language: f.language,
        content: editors[f.id] ? editors[f.id].getValue() : f.content
      })),
      activeFileId: activeFileId
    };
    allProjects[name] = projectData;
    localStorage.setItem('sms_code_lab_projects', JSON.stringify(allProjects));
    loadProjectList();
  }

  function loadProjectList() {
    const allProjects = JSON.parse(localStorage.getItem('sms_code_lab_projects') || '{}');
    const names = Object.keys(allProjects);
    projectList.innerHTML = names.map(name => `
      <div class="project-item">
        <span class="project-name">${name}</span>
        <div class="project-actions">
          <button title="Cargar" data-load="${name}"><i class="fas fa-folder-open"></i></button>
          <button title="Eliminar" data-delete="${name}"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join('');
    projectList.querySelectorAll('[data-load]').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.load;
        if (confirm(`¿Cargar el proyecto "${name}"? Se reemplazarán los archivos actuales.`)) {
          const allProjects = JSON.parse(localStorage.getItem('sms_code_lab_projects') || '{}');
          const project = allProjects[name];
          if (project) {
            files = project.files;
            Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
            editors = {};
            files.forEach(f => createEditor(f));
            activeFileId = project.activeFileId || files[0].id;
            switchToFile(activeFileId);
            updateTabs();
            updateFileTree();
            updatePreview();
            saveToLocal();
            projectsModal.style.display = 'none';
          }
        }
      });
    });
    projectList.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.delete;
        if (confirm(`¿Eliminar el proyecto "${name}"?`)) {
          const allProjects = JSON.parse(localStorage.getItem('sms_code_lab_projects') || '{}');
          delete allProjects[name];
          localStorage.setItem('sms_code_lab_projects', JSON.stringify(allProjects));
          loadProjectList();
        }
      });
    });
  }

  function initSplitters() {
    let isDragging = false;
    let startX, startWidth;

    explorerSplitter.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startWidth = explorer.offsetWidth;
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    });

    previewSplitter.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startWidth = previewArea.offsetWidth;
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const delta = e.clientX - startX;
      if (explorerSplitter.contains(e.target) || e.target === explorerSplitter || startWidth === explorer.offsetWidth) {
        const newWidth = Math.max(100, Math.min(400, startWidth + delta));
        explorer.style.width = newWidth + 'px';
      } else if (previewSplitter.contains(e.target) || e.target === previewSplitter || startWidth === previewArea.offsetWidth) {
        const newWidth = Math.max(200, Math.min(800, startWidth - delta));
        previewArea.style.width = newWidth + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.cursor = '';
    });
  }

  function initPreviewSizes() {
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = btn.dataset.width;
        const h = btn.dataset.height;
        if (w === '100%') {
          previewFrame.style.width = w;
          previewFrame.style.height = h;
        } else {
          previewFrame.style.width = w + 'px';
          previewFrame.style.height = h + 'px';
        }
      });
    });
  }

  const assistantResponses = [
    { pattern: /html/i, response: 'HTML (HyperText Markup Language) es el esqueleto de cualquier página web. Usas etiquetas como &lt;h1&gt; para títulos y &lt;p&gt; para párrafos.' },
    { pattern: /css/i, response: 'CSS (Cascading Style Sheets) define la apariencia visual: colores, fuentes, márgenes y animaciones. Se aplica con selectores como .clase o #id.' },
    { pattern: /javascript/i, response: 'JavaScript es el lenguaje que da interactividad a las páginas. Puedes manipular el DOM, responder a eventos y comunicarte con servidores.' },
    { pattern: /flexbox/i, response: 'Flexbox es un modelo de diseño en CSS para distribuir espacio entre elementos. Usa display: flex; y propiedades como justify-content y align-items.' },
    { pattern: /grid/i, response: 'CSS Grid es otro sistema de diseño bidimensional. Se define con display: grid; y grid-template-columns. Ideal para layouts complejos.' },
    { pattern: /localstorage/i, response: 'localStorage guarda datos en el navegador de forma persistente. Usa setItem("clave", valor) y getItem("clave"). Los datos se mantienen al cerrar el navegador.' },
    { pattern: /evento/i, response: 'Los eventos permiten reaccionar a acciones del usuario: click, submit, keydown, etc. Se asignan con addEventListener.' },
    { pattern: /promesa/i, response: 'Una promesa es un objeto que representa la eventual resolución de una operación asíncrona. Puede estar pendiente, resuelta o rechazada.' },
    { pattern: /error/i, response: 'Para capturar errores en JavaScript usa try...catch. En el laboratorio los errores de sintaxis aparecerán en la consola automáticamente.' },
    { pattern: /.*/, response: 'No tengo una respuesta específica, pero puedo ayudarte con HTML, CSS o JavaScript. ¿Puedes reformular tu pregunta?' }
  ];

  function getAssistantReply(question) {
    for (let entry of assistantResponses) {
      if (entry.pattern.test(question)) return entry.response;
    }
    return 'Lo siento, no he entendido. Prueba a preguntar sobre HTML, CSS o JavaScript.';
  }

  function addAssistantMessage(text, sender = 'user') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `assistant-message ${sender}`;
    msgDiv.innerHTML = text;
    assistantChat.appendChild(msgDiv);
    assistantChat.scrollTop = assistantChat.scrollHeight;
  }

  function initEnvironment() {
    if (!loadFromLocal()) {
      files.forEach(f => createEditor(f));
    } else {
      files.forEach(f => {
        if (!editors[f.id]) createEditor(f);
      });
    }
    switchToFile(activeFileId);
    updateTabs();
    updateFileTree();
    updatePreview();
    updateStatusbar();
    showWiki('html');
    setViewMode('split');
    changeFontSize(0);
    initSplitters();
    initPreviewSizes();
  }

  // ==================== EVENTOS ====================
  enterBtn.addEventListener('click', () => {
    lobby.style.display = 'none';
    environment.style.display = 'flex';
    initEnvironment();
  });

  exitBtn.addEventListener('click', () => {
    environment.style.display = 'none';
    lobby.style.display = 'flex';
    saveToLocal();
  });

  btnExplorer.addEventListener('click', () => explorer.classList.toggle('show'));
  btnConsole.addEventListener('click', () => consolePanel.classList.toggle('show'));
  btnWiki.addEventListener('click', () => wikiPanel.classList.toggle('show'));
  btnChallenges.addEventListener('click', () => {
    challengesPanel.classList.toggle('show');
    renderChallenges();
  });
  btnProjects.addEventListener('click', () => {
    projectsModal.style.display = 'flex';
    loadProjectList();
  });

  btnAssistant.addEventListener('click', () => {
    assistantPanel.classList.toggle('show');
  });
  btnCloseAssistant.addEventListener('click', () => {
    assistantPanel.classList.remove('show');
  });
  btnSendAssistant.addEventListener('click', () => {
    const question = assistantInput.value.trim();
    if (!question) return;
    addAssistantMessage(question, 'user');
    assistantInput.value = '';
    const reply = getAssistantReply(question);
    setTimeout(() => addAssistantMessage(reply, 'bot'), 300);
  });
  assistantInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnSendAssistant.click();
  });

  btnEditor.addEventListener('click', () => setViewMode('editor'));
  btnSplit.addEventListener('click', () => setViewMode('split'));
  btnPreview.addEventListener('click', () => setViewMode('preview'));

  btnMaximizeEditor.addEventListener('click', toggleEditorMaximize);

  btnFocus.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
    explorer.classList.remove('show');
    consolePanel.classList.remove('show');
    wikiPanel.classList.remove('show');
    challengesPanel.classList.remove('show');
    assistantPanel.classList.remove('show');
  });

  btnDownload.addEventListener('click', downloadZip);
  btnReset.addEventListener('click', resetToDefault);

  btnThemes.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = document.createElement('div');
    menu.className = 'theme-menu';
    menu.style.position = 'fixed';
    menu.style.top = `${btnThemes.getBoundingClientRect().bottom + 5}px`;
    menu.style.left = `${btnThemes.getBoundingClientRect().left}px`;
    menu.innerHTML = themeList.map(t => `<button data-theme="${t.value}"><i class="fas ${t.icon}"></i> ${t.name}</button>`).join('');
    document.body.appendChild(menu);
    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        changeTheme(btn.dataset.theme);
        menu.remove();
      });
    });
    document.addEventListener('click', () => menu.remove(), { once: true });
  });

  btnNewFile.addEventListener('click', () => {
    const lang = prompt('Lenguaje (html/css/js):', 'html');
    if (['html', 'css', 'js'].includes(lang)) addNewFile(lang);
  });
  btnDuplicateFile.addEventListener('click', duplicateFile);
  btnRefreshPreview.addEventListener('click', updatePreview);
  btnClearConsole.addEventListener('click', clearConsole);
  btnCloseConsole.addEventListener('click', () => consolePanel.classList.remove('show'));
  btnCloseWiki.addEventListener('click', () => wikiPanel.classList.remove('show'));
  btnCloseChallenges.addEventListener('click', () => challengesPanel.classList.remove('show'));
  btnCloseProjectsModal.addEventListener('click', () => projectsModal.style.display = 'none');
  btnSaveProject.addEventListener('click', () => {
    const name = newProjectName.value.trim();
    if (!name) return alert('Escribe un nombre para el proyecto.');
    saveProject(name);
    newProjectName.value = '';
  });

  projectsModal.addEventListener('click', (e) => {
    if (e.target === projectsModal) projectsModal.style.display = 'none';
  });

  btnLoadFile.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length === 0) return;

    let firstNewFileId = null;
    let loadedCount = 0;

    selectedFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = ev.target.result;
        const extension = file.name.split('.').pop().toLowerCase();
        const languageMap = {
          html: 'html',
          htm: 'html',
          css: 'css',
          js: 'js',
          mjs: 'js',
          json: 'js',
          xml: 'html',
          svg: 'html',
          md: 'html',
          txt: 'js'
        };
        const language = languageMap[extension] || 'js';

        const newFile = {
          id: (Date.now() + index).toString(),
          name: file.name,
          language: language,
          content: content
        };

        files.push(newFile);
        if (loadedCount === 0) firstNewFileId = newFile.id;
        loadedCount++;

        if (loadedCount === selectedFiles.length) {
          updateFileTree();
          updateTabs();
          if (firstNewFileId) switchToFile(firstNewFileId);
          saveToLocal();
          if (autoRefreshCheck.checked) updatePreview();
          fileInput.value = '';
        }
      };
      reader.onerror = () => {
        alert(`Error al leer el archivo ${file.name}`);
      };
      reader.readAsText(file, 'UTF-8');
    });
  });

  btnOpenPreview.addEventListener('click', () => {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'js');
    const html = htmlFile ? htmlFile.content : '';
    const css = cssFile ? cssFile.content : '';
    const js = jsFile ? jsFile.content : '';
    const fullCode = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
    const newWin = window.open('', '_blank');
    newWin.document.write(fullCode);
    newWin.document.close();
  });

  consoleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = consoleInput.value.trim();
      if (cmd) {
        consoleHistory.push(cmd);
        historyIndex = consoleHistory.length;
        try {
          const result = eval(cmd);
          addConsoleEntry('log', String(result));
        } catch (err) {
          addConsoleEntry('error', err.message);
        }
      }
      consoleInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        consoleInput.value = consoleHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < consoleHistory.length - 1) {
        historyIndex++;
        consoleInput.value = consoleHistory[historyIndex];
      } else {
        historyIndex = consoleHistory.length;
        consoleInput.value = '';
      }
    }
  });

  document.querySelectorAll('.console-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.console-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      consoleFilter = tab.dataset.tab;
      applyConsoleFilter();
    });
  });

  wikiSearch.addEventListener('input', filterWiki);
  document.querySelectorAll('.wiki-tab').forEach(tab => {
    tab.addEventListener('click', () => showWiki(tab.dataset.wiki));
  });

  btnUndo.addEventListener('click', () => {
    const editor = getEditor(activeFileId);
    if (editor) editor.undo();
  });
  btnRedo.addEventListener('click', () => {
    const editor = getEditor(activeFileId);
    if (editor) editor.redo();
  });
  btnSave.addEventListener('click', saveToLocal);
  btnFontUp.addEventListener('click', () => changeFontSize(1));
  btnFontDown.addEventListener('click', () => changeFontSize(-1));
  btnFormat.addEventListener('click', formatCode);
  btnWrap.addEventListener('click', () => {
    const editor = getEditor(activeFileId);
    if (!editor) return;
    const current = editor.getOption('lineWrapping');
    setLineWrap(!current);
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); saveToLocal(); }
    if (e.ctrlKey && e.key === 'e') { e.preventDefault(); explorer.classList.toggle('show'); }
    if (e.ctrlKey && e.key === '`') { e.preventDefault(); consolePanel.classList.toggle('show'); }
    if (e.ctrlKey && e.key === 'i') { e.preventDefault(); wikiPanel.classList.toggle('show'); }
    if (e.ctrlKey && e.shiftKey && e.key === 'F') { e.preventDefault(); formatCode(); }
    if (e.ctrlKey && e.key === '/') {
      e.preventDefault();
      toggleComment();
    }
    if (e.ctrlKey && e.key === 'r') { e.preventDefault(); btnChallenges.click(); }
    if (e.ctrlKey && e.shiftKey && e.key === 'M') {
      e.preventDefault();
      toggleEditorMaximize();
    }
  });

  setInterval(() => {
    saveToLocal();
    updateStatusbar();
  }, 10000);

  statusFontSize.textContent = currentFontSize + 'px';
  updateStatusbar();
});