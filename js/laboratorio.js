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
  const btnTheme = document.getElementById('btnTheme');
  const btnNewFile = document.getElementById('btnNewFile');
  const btnDuplicateFile = document.getElementById('btnDuplicateFile');
  const btnRefreshPreview = document.getElementById('btnRefreshPreview');
  const btnOpenPreview = document.getElementById('btnOpenPreview');
  const btnClearConsole = document.getElementById('btnClearConsole');
  const btnCloseConsole = document.getElementById('btnCloseConsole');
  const btnCloseWiki = document.getElementById('btnCloseWiki');
  const consoleInput = document.getElementById('consoleInput');
  const consoleOutput = document.getElementById('consoleOutput');
  const previewFrame = document.getElementById('previewFrame');
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
  const btnExamples = document.getElementById('btnExamples');
  const examplesMenu = document.getElementById('examplesMenu');


  let files = [
    { id: '1', name: 'index.html', language: 'html', content: '<h1>¡Hola, Serakdep MS!</h1>\n<p>Modifica este archivo y mira la magia.</p>' },
    { id: '2', name: 'styles.css', language: 'css', content: 'body {\n  font-family: sans-serif;\n  background: #f0f4f0;\n  color: #1b4332;\n  text-align: center;\n  padding: 50px;\n}' },
    { id: '3', name: 'script.js', language: 'js', content: 'console.log("¡Bienvenido al Code Lab de Serakdep MS!");' }
  ];
  let activeFileId = '1';
  let editors = {};
  let darkTheme = true;
  let consoleFilter = 'all';
  let wikiSection = 'html';
  let currentViewMode = 'split';
  let currentFontSize = 14;
  let consoleHistory = [];
  let historyIndex = -1;


  function getActiveFile() { return files.find(f => f.id === activeFileId) || files[0]; }

  function getEditor(id) { return editors[id]; }

  function createEditor(file) {
    const modeMap = { html: 'htmlmixed', css: 'css', js: 'javascript' };
    const editor = CodeMirror(editorContainer, {
      value: file.content,
      mode: modeMap[file.language] || 'htmlmixed',
      theme: darkTheme ? 'monokai' : 'default',
      lineNumbers: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      tabSize: 2,
      indentWithTabs: false,
      lineWrapping: false,
    });
    editor.setSize('100%', '100%');
    editor.on('change', () => {
      file.content = editor.getValue();
      updateStatusbar();
      if (autoRefreshCheck.checked) debouncePreview();
    });
    editor.getWrapperElement().style.fontSize = currentFontSize + 'px';
    editors[file.id] = editor;
    return editor;
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

  // ----- NUEVA FUNCIÓN updatePreview MEJORADA -----
  function updatePreview() {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'js');
    const html = htmlFile ? htmlFile.content : '';
    const css = cssFile ? cssFile.content : '';
    const js = jsFile ? jsFile.content : '';

    // Construye un HTML completo con interceptación de consola y captura de errores
    const fullCode = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>${css}</style>
</head>
<body>${html}
<script>
  // Redirigir console.log/error/warn a la consola del laboratorio
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

  // Capturar errores globales no capturados
  window.onerror = function(message, source, lineno, colno, error) {
    parent.addConsoleEntry('error', message + ' (línea ' + lineno + ')');
    return true;
  };

  window.addEventListener('unhandledrejection', function(event) {
    parent.addConsoleEntry('error', 'Promesa rechazada: ' + event.reason);
  });

  // Ejecutar el código del usuario de forma segura, capturando errores de sintaxis y excepción
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

    // También sobrescribimos los métodos tradicionales del iframe (por si acaso)
    previewFrame.onload = () => {
      try {
        const iframeWin = previewFrame.contentWindow;
        iframeWin.console.log = (...args) => addConsoleEntry('log', args.join(' '));
        iframeWin.console.error = (...args) => addConsoleEntry('error', args.join(' '));
        iframeWin.console.warn = (...args) => addConsoleEntry('warn', args.join(' '));
      } catch (e) {}
    };
  }

  // Exponemos la función globalmente para que el iframe la llame
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
    zip.file('README.md', `# Proyecto Serakdep MS Code Lab\n\n## Archivos\n${files.map(f => '- ' + f.name).join('\n')}\n\nCreado con el Code Lab de Serakdep MS.`);
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
      { id: '3', name: 'script.js', language: 'js', content: 'console.log("¡Bienvenido al Code Lab de Serakdep MS!");' }
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

  function formatCode() {
  const editor = getEditor(activeFileId);
  if (!editor) return;
  CodeMirror.commands.indentAuto(editor);
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
        toggleLineComment(line, '', '*/');
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
<h3>📘 HTML (HyperText Markup Language)</h3>
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
<h3>🎨 CSS (Cascading Style Sheets)</h3>
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
<h3>⚡ JavaScript</h3>
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

    const examples = [
      { name: '🏠 Hola Mundo', files: [{ name: 'index.html', lang: 'html', content: '<h1>¡Hola Mundo!</h1>' }] },
      { name: '🎨 Botón Animado', files: [
        { name: 'index.html', lang: 'html', content: '<button class="btn">Click</button>' },
        { name: 'styles.css', lang: 'css', content: '.btn { padding: 15px 30px; background: #2d6a4f; color: white; border: none; border-radius: 8px; cursor: pointer; transition: transform 0.3s; } .btn:hover { transform: scale(1.1); background: #d4af37; }' },
        { name: 'script.js', lang: 'js', content: 'document.querySelector(".btn").addEventListener("click", () => alert("¡Hola!"));' }
      ]},
      { name: '📝 To-Do List', files: [
        { name: 'index.html', lang: 'html', content: '<input type="text" id="task"><button id="add">Agregar</button><ul id="list"></ul>' },
        { name: 'styles.css', lang: 'css', content: 'body { font-family: sans-serif; } li { margin: 5px 0; }' },
        { name: 'script.js', lang: 'js', content: 'document.getElementById("add").onclick = () => { let t = document.getElementById("task").value; if(t) { let li = document.createElement("li"); li.textContent = t; document.getElementById("list").appendChild(li); document.getElementById("task").value = ""; }};' }
      ]},
      { name: '🖼️ Galería Lightbox', files: [
        { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/300" alt="img" onclick="this.style.transform=\'scale(2)\'">' },
        { name: 'styles.css', lang: 'css', content: 'img { transition: transform 0.3s; cursor: pointer; }' },
        { name: 'script.js', lang: 'js', content: '' }
      ]},
      { name: '🧮 Calculadora', files: [
        { name: 'index.html', lang: 'html', content: '<input id="a">+<input id="b"><button id="calc">=</button><span id="res"></span>' },
        { name: 'script.js', lang: 'js', content: 'document.getElementById("calc").onclick = () => document.getElementById("res").textContent = +document.getElementById("a").value + +document.getElementById("b").value;' }
      ]}
    ];
    examplesMenu.innerHTML = examples.map(ex => `<button>${ex.name}</button>`).join('');
    examplesMenu.querySelectorAll('button').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const ex = examples[idx];
        files = ex.files.map((f, i) => ({ id: (Date.now() + i).toString(), name: f.name, language: f.lang, content: f.content }));
        Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
        editors = {};
        files.forEach(f => createEditor(f));
        activeFileId = files[0].id;
        switchToFile(activeFileId);
        updateTabs();
        updateFileTree();
        updatePreview();
        saveToLocal();
        examplesMenu.classList.remove('open');
        clearConsole();
      });
    });
  }


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

  btnEditor.addEventListener('click', () => setViewMode('editor'));
  btnSplit.addEventListener('click', () => setViewMode('split'));
  btnPreview.addEventListener('click', () => setViewMode('preview'));

  btnFocus.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
    explorer.classList.remove('show');
    consolePanel.classList.remove('show');
    wikiPanel.classList.remove('show');
  });

  btnDownload.addEventListener('click', downloadZip);
  btnReset.addEventListener('click', resetToDefault);
  btnTheme.addEventListener('click', () => {
    darkTheme = !darkTheme;
    Object.values(editors).forEach(ed => ed.setOption('theme', darkTheme ? 'monokai' : 'default'));
    document.querySelector('.lab-environment').style.background = darkTheme ? 'var(--lab-bg)' : '#f0f0f0';
    btnTheme.querySelector('i').className = darkTheme ? 'fas fa-sun' : 'fas fa-moon';
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


  btnExamples.addEventListener('click', (e) => {
    e.stopPropagation();
    examplesMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => examplesMenu.classList.remove('open'));


  btnOpenPreview.addEventListener('click', () => {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'js');
    const html = htmlFile ? htmlFile.content : '';
    const css = cssFile ? cssFile.content : '';
    const js = jsFile ? jsFile.content : '';
    const fullCode = `<!DOCTYPE html>
<html><head><style>${css}</style></head><body>${html}
<script>
  window.onerror = function(m,s,l) { alert('Error: '+m+' (línea '+l+')'); return true; };
  try { new Function(\`${js.replace(/`/g,'\\`')}\`)(); } catch(e) { alert(e.name+': '+e.message); }
<\/script>
</body></html>`;
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
  });


  setInterval(() => {
    saveToLocal();
    updateStatusbar();
  }, 10000);


  statusFontSize.textContent = currentFontSize + 'px';
  updateStatusbar();
});