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


  let preFullscreenState = {};


  let wikiData = { html: '', css: '', js: '' };

  async function loadWikiData() {
    const WIKI_URL = 'https://api.npoint.io/47b284f068e1c936d147';
    try {
      const response = await fetch(WIKI_URL);
      if (!response.ok) throw new Error('Error al cargar la enciclopedia');
      wikiData = await response.json();
      showWiki(wikiSection);
    } catch (error) {
      console.error(error);
      wikiContent.innerHTML = '<p>Error al cargar la enciclopedia. Intenta recargar la página.</p>';
    }
  }

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
      lint: (file.language === 'html' || file.language === 'css' || file.language === 'js') ? true : false,
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


  function toggleEditorMaximize() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {

      preFullscreenState = {
        explorer: explorer.classList.contains('show'),
        console: consolePanel.classList.contains('show'),
        wiki: wikiPanel.classList.contains('show'),
        challenges: challengesPanel.classList.contains('show'),
        assistant: assistantPanel.classList.contains('show'),
        viewMode: currentViewMode,
        activityBar: document.querySelector('.lab-activity-bar').style.display,
        statusBar: document.querySelector('.lab-statusbar').style.display
      };


      const el = environment;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }

      btnMaximizeEditor.classList.add('active');
    } else {

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }


  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  document.addEventListener('msfullscreenchange', onFullscreenChange);

  function onFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (preFullscreenState.explorer) explorer.classList.add('show');
      else explorer.classList.remove('show');
      if (preFullscreenState.console) consolePanel.classList.add('show');
      else consolePanel.classList.remove('show');
      if (preFullscreenState.wiki) wikiPanel.classList.add('show');
      else wikiPanel.classList.remove('show');
      if (preFullscreenState.challenges) challengesPanel.classList.add('show');
      else challengesPanel.classList.remove('show');
      if (preFullscreenState.assistant) assistantPanel.classList.add('show');
      else assistantPanel.classList.remove('show');


      document.querySelector('.lab-activity-bar').style.display = preFullscreenState.activityBar || '';
      document.querySelector('.lab-statusbar').style.display = preFullscreenState.statusBar || '';

      setViewMode(preFullscreenState.viewMode || 'split');

      btnMaximizeEditor.classList.remove('active');
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
  },


  {
    id: 'ch4',
    title: 'Contador de clics',
    level: 'Básico',
    description: 'Crea un contador que aumente cada vez que se presiona un botón. Aprenderás a manipular el DOM y manejar eventos en JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;span&gt;</code> con id "contador" que muestre "0".',
      'Añade un <code>&lt;button&gt;</code> con el texto "Incrementar".',
      'En <strong>script.js</strong>, declara una variable <code>let cuenta = 0</code>.',
      'Agrega un event listener al botón que incremente la variable y actualice el texto del span.',
      'Prueba haciendo varios clics.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="contador">0</span>\n<button id="btnContar">Incrementar</button>' },
      { name: 'script.js', lang: 'js', content: 'let cuenta = 0;\ndocument.getElementById("btnContar").addEventListener("click", () => {\n  cuenta++;\n  document.getElementById("contador").textContent = cuenta;\n});' }
    ]
  },
  {
    id: 'ch5',
    title: 'Cambiar color de fondo aleatorio',
    level: 'Básico',
    description: 'Crea un botón que cambie el color de fondo de la página por un color aleatorio cada vez que se pulse.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;button&gt;</code> con el texto "Cambiar color".',
      'En <strong>script.js</strong>, crea una función que genere un color hexadecimal aleatorio.',
      'Asigna ese color a <code>document.body.style.backgroundColor</code> cuando se haga clic.',
      'Comprueba que cada clic muestra un color diferente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="btnColor">Cambiar color</button>' },
      { name: 'script.js', lang: 'js', content: 'function colorAleatorio() {\n  const letras = "0123456789ABCDEF";\n  let color = "#";\n  for (let i = 0; i < 6; i++) {\n    color += letras[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\ndocument.getElementById("btnColor").addEventListener("click", () => {\n  document.body.style.backgroundColor = colorAleatorio();\n});' }
    ]
  },
  {
    id: 'ch6',
    title: 'Formulario de contacto',
    level: 'Intermedio',
    description: 'Crea un formulario con campos de nombre, correo y mensaje, y muestra los datos ingresados al enviar.',
    instructions: [
      'En <strong>index.html</strong>, crea un <code>&lt;form&gt;</code> con inputs para nombre, email (type="email") y un <code>&lt;textarea&gt;</code>.',
      'Añade un <code>&lt;button&gt;</code> de tipo submit y un <code>&lt;div&gt;</code> vacío con id "resultado" para mostrar la respuesta.',
      'En <strong>script.js</strong>, captura el evento <code>submit</code> del formulario y usa <code>event.preventDefault()</code>.',
      'Extrae los valores y muéstralos dentro del div "resultado".',
      'Estiliza el formulario en <strong>styles.css</strong> para que tenga una apariencia agradable.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formContacto">\n  <input type="text" id="nombre" placeholder="Nombre" required>\n  <input type="email" id="email" placeholder="Email" required>\n  <textarea id="mensaje" placeholder="Mensaje" required></textarea>\n  <button type="submit">Enviar</button>\n</form>\n<div id="resultado"></div>' },
      { name: 'styles.css', lang: 'css', content: 'form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; }\ninput, textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }\nbutton { background: #2d6a4f; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("formContacto").addEventListener("submit", function(e) {\n  e.preventDefault();\n  const nombre = document.getElementById("nombre").value;\n  const email = document.getElementById("email").value;\n  const mensaje = document.getElementById("mensaje").value;\n  document.getElementById("resultado").innerHTML = `<p>Gracias, ${nombre}. Te contactaremos al correo ${email}.</p>`;\n  this.reset();\n});' }
    ]
  },
  {
    id: 'ch7',
    title: 'Galería de imágenes con CSS Grid',
    level: 'Intermedio',
    description: 'Construye una galería de imágenes responsiva utilizando CSS Grid.',
    instructions: [
      'En <strong>index.html</strong>, crea un contenedor con varias imágenes (pueden ser de placeholder).',
      'En <strong>styles.css</strong>, aplica <code>display: grid</code> al contenedor.',
      'Usa <code>grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))</code> para que se adapte al ancho.',
      'Añade <code>gap</code>, bordes redondeados y un efecto hover a las imágenes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="galeria">\n  <img src="https://via.placeholder.com/300" alt="Imagen 1">\n  <img src="https://via.placeholder.com/300" alt="Imagen 2">\n  <img src="https://via.placeholder.com/300" alt="Imagen 3">\n  <img src="https://via.placeholder.com/300" alt="Imagen 4">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 15px;\n  padding: 20px;\n}\n.galeria img {\n  width: 100%;\n  border-radius: 8px;\n  transition: transform 0.3s;\n  cursor: pointer;\n}\n.galeria img:hover {\n  transform: scale(1.05);\n}' }
    ]
  },
  {
    id: 'ch8',
    title: 'Barra de navegación responsive',
    level: 'Intermedio',
    description: 'Diseña una barra de navegación que se adapte a dispositivos móviles usando Flexbox y media queries.',
    instructions: [
      'En <strong>index.html</strong>, crea un <code>&lt;nav&gt;</code> con una lista de enlaces.',
      'En <strong>styles.css</strong>, aplica <code>display: flex</code> y estiliza los elementos.',
      'Usa un <code>@media (max-width: 600px)</code> para cambiar la dirección a columna en pantallas pequeñas.',
      'Añade colores, espaciado y efectos hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <ul class="menu">\n    <li><a href="#">Inicio</a></li>\n    <li><a href="#">Servicios</a></li>\n    <li><a href="#">Portfolio</a></li>\n    <li><a href="#">Contacto</a></li>\n  </ul>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '.menu {\n  display: flex;\n  list-style: none;\n  background: #2d6a4f;\n  padding: 10px;\n  justify-content: center;\n  gap: 20px;\n}\n.menu a {\n  color: white;\n  text-decoration: none;\n  padding: 5px 10px;\n}\n.menu a:hover {\n  background: #d4af37;\n  border-radius: 4px;\n}\n@media (max-width: 600px) {\n  .menu {\n    flex-direction: column;\n    align-items: center;\n  }\n}' }
    ]
  },
  {
    id: 'ch9',
    title: 'Reloj digital en tiempo real',
    level: 'Avanzado',
    description: 'Crea un reloj digital que muestre la hora actual y se actualice cada segundo usando JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;div&gt;</code> con id "reloj" para mostrar la hora.',
      'En <strong>script.js</strong>, crea una función que obtenga la hora con <code>new Date()</code> y la muestre formateada.',
      'Usa <code>setInterval</code> para actualizar el reloj cada 1000 ms.',
      'Añade estilos en <strong>styles.css</strong> para darle apariencia de reloj digital (fuente grande, fondo oscuro, etc.).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="reloj">00:00:00</div>' },
      { name: 'styles.css', lang: 'css', content: '#reloj {\n  font-family: "Courier New", monospace;\n  font-size: 3rem;\n  background: #111;\n  color: #0f0;\n  padding: 20px 40px;\n  border-radius: 10px;\n  text-align: center;\n  display: inline-block;\n}' },
      { name: 'script.js', lang: 'js', content: 'function actualizarReloj() {\n  const ahora = new Date();\n  const horas = String(ahora.getHours()).padStart(2, "0");\n  const minutos = String(ahora.getMinutes()).padStart(2, "0");\n  const segundos = String(ahora.getSeconds()).padStart(2, "0");\n  document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;\n}\nsetInterval(actualizarReloj, 1000);\nactualizarReloj();' }
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


  function getAssistantReply() {
    return new Promise((resolve) => {
      resolve(`El asistente IA estará disponible próximamente.

Estamos trabajando para ofrecerte una experiencia increíble con inteligencia artificial real que te ayudará a resolver tus dudas de HTML, CSS y JavaScript al instante.

Mientras tanto, puedes consultar nuestra <strong>enciclopedia</strong> o probar los <strong>retos</strong> para seguir aprendiendo.

¡Gracias por tu paciencia! `);
    });
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

    loadWikiData();
  }


  enterBtn.addEventListener('click', () => {
    lobby.style.display = 'none';
    environment.style.display = 'flex';
    environment.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    getAssistantReply().then(reply => {
      addAssistantMessage(reply, 'bot');
    });
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
  const oldMenu = document.querySelector('.theme-menu');
  if (oldMenu) { oldMenu.remove(); return; }

  const menu = document.createElement('div');
  menu.className = 'theme-menu';


  const btnRect = btnThemes.getBoundingClientRect();
  menu.style.position = 'fixed';
  menu.style.top = `${btnRect.bottom + 5}px`;
  menu.style.left = `${btnRect.left}px`;

  menu.innerHTML = themeList.map(t => 
    `<button data-theme="${t.value}"><i class="fas ${t.icon}"></i> ${t.name}</button>`
  ).join('');


  document.body.appendChild(menu);


  menu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      changeTheme(btn.dataset.theme);
      menu.remove();
    });
  });


  function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== btnThemes) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  }
  setTimeout(() => document.addEventListener('click', closeMenu), 10);
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