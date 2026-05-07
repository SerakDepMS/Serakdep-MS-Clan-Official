import { wikiData, wikiSection, loadWikiData, showWiki } from './modules/wiki.js';
import { challenges, renderChallenges } from './modules/challenges.js';
import { getAssistantReply, addAssistantMessage } from './modules/assistant.js';
import { themeList, changeTheme } from './modules/themes.js';

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
  const imagePreviewModal = document.getElementById('imagePreviewModal');
  const imagePreviewImg = document.getElementById('imagePreviewImg');
  const imagePreviewName = document.getElementById('imagePreviewName');
  const btnCloseImagePreview = document.getElementById('btnCloseImagePreview');
  const btnExportSingle = document.getElementById('btnExportSingle');

  let files = [
    { id: '1', name: 'index.html', language: 'html', content: '<h1>¡Hola, Serakdep MS!</h1>\n<p>Modifica este archivo y mira la magia.</p>' },
    { id: '2', name: 'styles.css', language: 'css', content: 'body {\n  font-family: sans-serif;\n  background: #f0f4f0;\n  color: #1b4332;\n  text-align: center;\n  padding: 50px;\n}' },
    { id: '3', name: 'script.js', language: 'js', content: 'console.log("¡Bienvenido al SMS Studios de Serakdep MS!");' }
  ];
  let activeFileId = '1';
  let editors = {};
  const currentThemeObj = { value: 'monokai' };
  let consoleFilter = 'all';
  let currentViewMode = 'split';
  let currentFontSize = 14;
  let consoleHistory = [];
  let historyIndex = -1;
  let preFullscreenState = {};


  function getActiveFile() { return files.find(f => f.id === activeFileId) || files[0]; }
  function getEditor(id) { return editors[id]; }

  function createEditor(file) {
    const modeMap = { html: 'htmlmixed', css: 'css', js: 'javascript' };
    const editor = CodeMirror(editorContainer, {
      value: file.content,
      mode: modeMap[file.language] || 'htmlmixed',
      theme: currentThemeObj.value,
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
    const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'];
    const ext = file.name.split('.').pop().toLowerCase();
    if (imageExtensions.includes(ext)) {

      imagePreviewImg.src = file.content;
      imagePreviewName.textContent = file.name;
      imagePreviewModal.style.display = 'flex';
      return;
    }
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
    const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'];
    fileTree.innerHTML = files.map(f => {
      const ext = f.name.split('.').pop().toLowerCase();
      const isImage = imageExtensions.includes(ext);
      let iconHtml = '';
      if (isImage) {

        iconHtml = `<img src="${f.content}" class="file-thumb" onerror="this.style.display='none'" />`;
      } else {
        const langIcon = f.language === 'html' ? 'html5' : f.language === 'css' ? 'css3-alt' : 'js';
        iconHtml = `<i class="fab fa-${langIcon}"></i>`;
      }
      return `
        <div class="file-item ${f.id === activeFileId && !isImage ? 'active' : ''}" data-fileid="${f.id}">
          ${iconHtml}
          <span>${f.name}</span>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.file-item').forEach(item => {
      const fid = item.dataset.fileid;
      const file = files.find(f => f.id === fid);
      if (!file) return;
      const ext = file.name.split('.').pop().toLowerCase();
      const isImage = imageExtensions.includes(ext);

      item.addEventListener('click', () => {
        if (isImage) {
          imagePreviewImg.src = file.content;
          imagePreviewName.textContent = file.name;
          imagePreviewModal.style.display = 'flex';
        } else {
          switchToFile(fid);
        }
      });
      item.addEventListener('dblclick', () => {
        if (!isImage) renameFile(fid);
      });
    });
  }

  function addNewFile(language) {
    const extMap = { html: 'html', css: 'css', js: 'js' };
    const ext = extMap[language] || 'html';
    const name = prompt('Nombre del archivo:', `nuevo.${ext}`);
    if (!name) return;
    const file = { id: Date.now().toString(), name, language, content: '' };
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

  function exportSingleHTML() {
    const htmlFiles = files.filter(f => f.language === 'html');
    const cssFiles = files.filter(f => f.language === 'css');
    const jsFiles = files.filter(f => f.language === 'js');

    let html = htmlFiles.length > 0
      ? htmlFiles.map(f => f.content).join('\n')
      : '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Proyecto SMS Studios</title>\n</head>\n<body>\n  <!-- Contenido aquí -->\n</body>\n</html>';

    const css = cssFiles.map(f => f.content).join('\n');
    const js = jsFiles.map(f => f.content).join('\n');

    if (css.trim()) {
      const styleTag = `  <style>\n${css}\n  </style>`;
      if (html.includes('</head>')) {
        html = html.replace('</head>', `${styleTag}\n</head>`);
      } else if (html.includes('<body>')) {
        html = html.replace('<body>', `<head>\n${styleTag}\n</head>\n<body>`);
      } else {
        html = html.replace('<html>', `<html>\n<head>\n${styleTag}\n</head>`);
      }
    }

    if (js.trim()) {
      const scriptTag = `  <script>\n${js}\n  </script>`;
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${scriptTag}\n</body>`);
      } else {
        html += `\n${scriptTag}`;
      }
    }

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proyecto-sms.html';
    a.click();
    URL.revokeObjectURL(url);
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
    if (mode !== 'preview') Object.values(editors).forEach(ed => ed.refresh());
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
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
      btnMaximizeEditor.classList.add('active');
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  }

  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  document.addEventListener('msfullscreenchange', onFullscreenChange);

  function onFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (preFullscreenState.explorer) explorer.classList.add('show'); else explorer.classList.remove('show');
      if (preFullscreenState.console) consolePanel.classList.add('show'); else consolePanel.classList.remove('show');
      if (preFullscreenState.wiki) wikiPanel.classList.add('show'); else wikiPanel.classList.remove('show');
      if (preFullscreenState.challenges) challengesPanel.classList.add('show'); else challengesPanel.classList.remove('show');
      if (preFullscreenState.assistant) assistantPanel.classList.add('show'); else assistantPanel.classList.remove('show');
      document.querySelector('.lab-activity-bar').style.display = preFullscreenState.activityBar || '';
      document.querySelector('.lab-statusbar').style.display = preFullscreenState.statusBar || '';
      setViewMode(preFullscreenState.viewMode || 'split');
      btnMaximizeEditor.classList.remove('active');
    }
  }

  function formatCode() {
    const editor = getEditor(activeFileId);
    if (!editor) return;
    editor.operation(() => {
      const totalLines = editor.lineCount();
      for (let i = 0; i < totalLines; i++) editor.indentLine(i, 'smart');
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
          editor.setLine(line, text.replace(commentStart, '').replace(commentEnd, '').trim());
        } else {
          editor.setLine(line, commentStart + ' ' + text + ' ' + commentEnd);
        }
      } else {
        if (trimmed.startsWith(commentStart)) editor.setLine(line, text.replace(commentStart, '').trim());
        else editor.setLine(line, commentStart + ' ' + text);
      }
    }
    if (selections.length === 1 && selections[0].empty()) {
      const line = editor.getCursor().line;
      if (mode === 'htmlmixed') toggleLineComment(line, '<!--', '-->');
      else if (mode === 'css') toggleLineComment(line, '/*', '*/');
      else toggleLineComment(line, '//');
    } else {
      editor.operation(() => {
        selections.forEach(sel => {
          const text = editor.getRange(sel.anchor, sel.head);
          if (mode === 'htmlmixed') editor.replaceRange('<!-- ' + text + ' -->', sel.anchor, sel.head);
          else if (mode === 'css') editor.replaceRange('/* ' + text + ' */', sel.anchor, sel.head);
          else editor.replaceRange('// ' + text, sel.anchor, sel.head);
        });
      });
    }
  }

  function setLineWrap(wrap) {
    Object.values(editors).forEach(ed => ed.setOption('lineWrapping', wrap));
    if (wrap) btnWrap.classList.add('active');
    else btnWrap.classList.remove('active');
  }

  function changeFontSize(delta) {
    currentFontSize = Math.max(10, Math.min(24, currentFontSize + delta));
    Object.values(editors).forEach(ed => {
      ed.getWrapperElement().style.fontSize = currentFontSize + 'px';
      ed.refresh();
    });
    statusFontSize.textContent = currentFontSize + 'px';
  }

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
      id: f.id, name: f.name, language: f.language,
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

  function filterWiki() {
    const term = wikiSearch.value.toLowerCase();
    if (!term) { showWiki(wikiSection, wikiContent, wikiData); return; }
    const sectionData = wikiData[wikiSection];
    const lines = sectionData.split('\n');
    const filtered = lines.filter(line => line.toLowerCase().includes(term));
    wikiContent.innerHTML = filtered.length > 0 ? filtered.join('<br>') : `<p>Sin resultados para "${term}"</p>`;
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

  function initSplitters() {
    let isDragging = false, startX, startWidth;
    explorerSplitter.addEventListener('mousedown', (e) => {
      isDragging = true; startX = e.clientX; startWidth = explorer.offsetWidth;
      document.body.style.cursor = 'col-resize'; e.preventDefault();
    });
    previewSplitter.addEventListener('mousedown', (e) => {
      isDragging = true; startX = e.clientX; startWidth = previewArea.offsetWidth;
      document.body.style.cursor = 'col-resize'; e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const delta = e.clientX - startX;
      if (explorerSplitter.contains(e.target) || e.target === explorerSplitter || startWidth === explorer.offsetWidth) {
        explorer.style.width = Math.max(100, Math.min(400, startWidth + delta)) + 'px';
      } else if (previewSplitter.contains(e.target) || e.target === previewSplitter || startWidth === previewArea.offsetWidth) {
        previewArea.style.width = Math.max(200, Math.min(800, startWidth - delta)) + 'px';
      }
    });
    document.addEventListener('mouseup', () => { isDragging = false; document.body.style.cursor = ''; });
  }

  function initPreviewSizes() {
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = btn.dataset.width, h = btn.dataset.height;
        previewFrame.style.width = w === '100%' ? w : w + 'px';
        previewFrame.style.height = h === '100%' ? h : h + 'px';
      });
    });
  }

  function saveProject(name) {
    const allProjects = JSON.parse(localStorage.getItem('sms_code_lab_projects') || '{}');
    allProjects[name] = {
      name,
      files: files.map(f => ({
        id: f.id, name: f.name, language: f.language,
        content: editors[f.id] ? editors[f.id].getValue() : f.content
      })),
      activeFileId
    };
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
        if (confirm(`¿Cargar el proyecto "${name}"?`)) {
          const project = allProjects[name];
          files = project.files;
          Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
          editors = {};
          files.forEach(f => createEditor(f));
          activeFileId = project.activeFileId || files[0].id;
          switchToFile(activeFileId);
          updateTabs(); updateFileTree(); updatePreview(); saveToLocal();
          projectsModal.style.display = 'none';
        }
      });
    });
    projectList.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.delete;
        if (confirm(`¿Eliminar el proyecto "${name}"?`)) {
          delete allProjects[name];
          localStorage.setItem('sms_code_lab_projects', JSON.stringify(allProjects));
          loadProjectList();
        }
      });
    });
  }


  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function initDragDrop() {
    const dropZone = explorer;

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('drag-over');

      const droppedFiles = Array.from(e.dataTransfer.files);
      if (droppedFiles.length === 0) return;

      let firstNewFileId = null;
      let loadedCount = 0;

      for (let index = 0; index < droppedFiles.length; index++) {
        const file = droppedFiles[index];
        const extension = file.name.split('.').pop().toLowerCase();
        const languageMap = {
          html: 'html', htm: 'html',
          css: 'css',
          js: 'js', mjs: 'js',
          json: 'js', xml: 'html', svg: 'html',
          md: 'html', txt: 'js'
        };
        const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'];

        try {
          let content;
          if (imageExtensions.includes(extension)) {
            content = await readFileAsDataURL(file);
          } else {
            content = await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (ev) => resolve(ev.target.result);
              reader.onerror = reject;
              reader.readAsText(file, 'UTF-8');
            });
          }

          const language = languageMap[extension] || 'js';
          const newFile = {
            id: (Date.now() + index).toString(),
            name: file.name,
            language: imageExtensions.includes(extension) ? 'html' : language,
            content: content
          };

          files.push(newFile);
          if (loadedCount === 0) firstNewFileId = newFile.id;
          loadedCount++;
        } catch (err) {
          console.error(`Error al procesar ${file.name}:`, err);
          alert(`Error al leer el archivo ${file.name}`);
        }
      }

      if (loadedCount > 0) {
        updateFileTree();
        updateTabs();
        if (firstNewFileId) switchToFile(firstNewFileId);
        saveToLocal();
        if (autoRefreshCheck.checked) updatePreview();
      }
    });
  }


  function initEnvironment() {
    if (!loadFromLocal()) {
      files.forEach(f => createEditor(f));
    } else {
      files.forEach(f => { if (!editors[f.id]) createEditor(f); });
    }
    switchToFile(activeFileId);
    updateTabs();
    updateFileTree();
    updatePreview();
    updateStatusbar();
    showWiki('html', wikiContent, wikiData);
    setViewMode('split');
    changeFontSize(0);
    initSplitters();
    initPreviewSizes();
    initDragDrop();
    loadWikiData(wikiContent, showWiki);
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
    renderChallenges(challengesContent, challenges, files, editors, createEditor, switchToFile, updateTabs, updateFileTree, updatePreview, saveToLocal, clearConsole);
  });
  btnProjects.addEventListener('click', () => {
    projectsModal.style.display = 'flex';
    loadProjectList();
  });
  btnAssistant.addEventListener('click', () => assistantPanel.classList.toggle('show'));
  btnCloseAssistant.addEventListener('click', () => assistantPanel.classList.remove('show'));
  btnSendAssistant.addEventListener('click', () => {
    const question = assistantInput.value.trim();
    if (!question) return;
    addAssistantMessage(question, 'user', assistantChat);
    assistantInput.value = '';
    getAssistantReply().then(reply => addAssistantMessage(reply, 'bot', assistantChat));
  });
  assistantInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') btnSendAssistant.click(); });

  btnEditor.addEventListener('click', () => setViewMode('editor'));
  btnSplit.addEventListener('click', () => setViewMode('split'));
  btnPreview.addEventListener('click', () => setViewMode('preview'));
  btnMaximizeEditor.addEventListener('click', toggleEditorMaximize);
  btnFocus.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
    explorer.classList.remove('show');
    consolePanel.classList.remove('show');
    wikiPanel.classList.remove('show');
    challengesPanel.classList.remove('show');
    assistantPanel.classList.remove('show');
  });

  btnDownload.addEventListener('click', downloadZip);
  btnExportSingle.addEventListener('click', exportSingleHTML);
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
    menu.innerHTML = themeList.map(t => `<button data-theme="${t.value}"><i class="fas ${t.icon}"></i> ${t.name}</button>`).join('');
    document.body.appendChild(menu);
    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        changeTheme(btn.dataset.theme, editors, currentThemeObj);
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
  projectsModal.addEventListener('click', (e) => { if (e.target === projectsModal) projectsModal.style.display = 'none'; });

  // Cerrar modal de imagen
  btnCloseImagePreview.addEventListener('click', () => {
    imagePreviewModal.style.display = 'none';
  });
  imagePreviewModal.addEventListener('click', (e) => {
    if (e.target === imagePreviewModal) imagePreviewModal.style.display = 'none';
  });

  btnLoadFile.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length === 0) return;
    let firstNewFileId = null;
    let loadedCount = 0;
    const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'];

    for (let index = 0; index < selectedFiles.length; index++) {
      const file = selectedFiles[index];
      const extension = file.name.split('.').pop().toLowerCase();
      const isImage = imageExtensions.includes(extension);
      try {
        let content;
        if (isImage) {
          content = await readFileAsDataURL(file);
        } else {
          content = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (ev) => resolve(ev.target.result);
            reader.onerror = reject;
            reader.readAsText(file, 'UTF-8');
          });
        }
        const languageMap = { html: 'html', htm: 'html', css: 'css', js: 'js', mjs: 'js', json: 'js', xml: 'html', svg: 'html', md: 'html', txt: 'js' };
        const language = languageMap[extension] || 'js';
        const newFile = { id: (Date.now() + index).toString(), name: file.name, language: isImage ? 'html' : language, content };
        files.push(newFile);
        if (loadedCount === 0) firstNewFileId = newFile.id;
        loadedCount++;
      } catch (err) {
        console.error(`Error al leer ${file.name}:`, err);
        alert(`Error al leer el archivo ${file.name}`);
      }
    }

    if (loadedCount > 0) {
      updateFileTree();
      updateTabs();
      if (firstNewFileId) switchToFile(firstNewFileId);
      saveToLocal();
      if (autoRefreshCheck.checked) updatePreview();
      fileInput.value = '';
    }
  });

  btnOpenPreview.addEventListener('click', () => {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'js');
    const fullCode = `<!DOCTYPE html><html><head><style>${cssFile?.content || ''}</style></head><body>${htmlFile?.content || ''}<script>${jsFile?.content || ''}<\/script></body></html>`;
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
        try { addConsoleEntry('log', String(eval(cmd))); }
        catch (err) { addConsoleEntry('error', err.message); }
      }
      consoleInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) { historyIndex--; consoleInput.value = consoleHistory[historyIndex]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < consoleHistory.length - 1) { historyIndex++; consoleInput.value = consoleHistory[historyIndex]; }
      else { historyIndex = consoleHistory.length; consoleInput.value = ''; }
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
    tab.addEventListener('click', () => showWiki(tab.dataset.wiki, wikiContent, wikiData));
  });

  btnUndo.addEventListener('click', () => { const editor = getEditor(activeFileId); if (editor) editor.undo(); });
  btnRedo.addEventListener('click', () => { const editor = getEditor(activeFileId); if (editor) editor.redo(); });
  btnSave.addEventListener('click', saveToLocal);
  btnFontUp.addEventListener('click', () => changeFontSize(1));
  btnFontDown.addEventListener('click', () => changeFontSize(-1));
  btnFormat.addEventListener('click', formatCode);
  btnWrap.addEventListener('click', () => {
    const editor = getEditor(activeFileId);
    if (!editor) return;
    setLineWrap(!editor.getOption('lineWrapping'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); saveToLocal(); }
    if (e.ctrlKey && e.key === 'e') { e.preventDefault(); explorer.classList.toggle('show'); }
    if (e.ctrlKey && e.key === '`') { e.preventDefault(); consolePanel.classList.toggle('show'); }
    if (e.ctrlKey && e.key === 'i') { e.preventDefault(); wikiPanel.classList.toggle('show'); }
    if (e.ctrlKey && e.shiftKey && e.key === 'F') { e.preventDefault(); formatCode(); }
    if (e.ctrlKey && e.key === '/') { e.preventDefault(); toggleComment(); }
    if (e.ctrlKey && e.key === 'r') { e.preventDefault(); btnChallenges.click(); }
    if (e.ctrlKey && e.shiftKey && e.key === 'M') { e.preventDefault(); toggleEditorMaximize(); }
  });

  setInterval(() => { saveToLocal(); updateStatusbar(); }, 10000);

  statusFontSize.textContent = currentFontSize + 'px';
  updateStatusbar();
});