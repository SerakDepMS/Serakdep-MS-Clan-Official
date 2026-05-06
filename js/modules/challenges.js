export const challenges = [
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

export function renderChallenges(challengesContent, challenges, files, editors, createEditor, switchToFile, updateTabs, updateFileTree, updatePreview, saveToLocal, clearConsole) {
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
          files.length = 0;
          challenge.template.map((f, i) => ({
            id: (Date.now() + i).toString(),
            name: f.name,
            language: f.lang,
            content: f.content
          })).forEach(file => files.push(file));
          Object.values(editors).forEach(ed => ed.getWrapperElement().remove());
          editors = {};
          files.forEach(f => createEditor(f));
          const activeFileId = files[0].id;
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