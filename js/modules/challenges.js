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
  },
    {
    id: 'ch10',
    title: 'Reloj analógico con Canvas',
    level: 'Avanzado',
    description: 'Dibuja un reloj analógico funcional usando el elemento Canvas y la API de tiempo de JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, añade un elemento <code>&lt;canvas&gt;</code> con id "relojCanvas" de 200x200.',
      'En <strong>script.js</strong>, obtén el contexto 2D del canvas.',
      'Crea una función que dibuje la esfera, las manecillas y los números usando <code>setInterval</code> cada segundo.',
      'En <strong>styles.css</strong>, centra el canvas con Flexbox.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="relojCanvas" width="200" height="200"></canvas>' },
      { name: 'styles.css', lang: 'css', content: 'body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #222; }\ncanvas { background: #fff; border-radius: 50%; }' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("relojCanvas");\nconst ctx = canvas.getContext("2d");\nfunction dibujar() {\n  ctx.clearRect(0, 0, 200, 200);\n  const ahora = new Date();\n  const h = ahora.getHours() % 12, m = ahora.getMinutes(), s = ahora.getSeconds();\n  ctx.beginPath(); ctx.arc(100, 100, 90, 0, Math.PI * 2); ctx.stroke();\n  ctx.fillText("12", 95, 25); ctx.fillText("6", 95, 180);\n  ctx.fillText("3", 175, 105); ctx.fillText("9", 20, 105);\n  const angH = ((h + m / 60) * Math.PI / 6) - Math.PI / 2;\n  ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(100, 100); ctx.lineTo(100 + 40 * Math.cos(angH), 100 + 40 * Math.sin(angH)); ctx.stroke();\n  const angM = (m * Math.PI / 30) - Math.PI / 2;\n  ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(100, 100); ctx.lineTo(100 + 60 * Math.cos(angM), 100 + 60 * Math.sin(angM)); ctx.stroke();\n  const angS = (s * Math.PI / 30) - Math.PI / 2;\n  ctx.lineWidth = 2; ctx.strokeStyle = "red"; ctx.beginPath(); ctx.moveTo(100, 100); ctx.lineTo(100 + 70 * Math.cos(angS), 100 + 70 * Math.sin(angS)); ctx.stroke();\n  ctx.strokeStyle = "#000";\n}\nsetInterval(dibujar, 1000); dibujar();' }
    ]
  },
  {
    id: 'ch11',
    title: 'Calculadora simple',
    level: 'Intermedio',
    description: 'Crea una calculadora básica con operaciones de suma, resta, multiplicación y división.',
    instructions: [
      'En <strong>index.html</strong>, crea botones para los dígitos y operadores, y un <code>&lt;input&gt;</code> para el resultado.',
      'En <strong>script.js</strong>, almacena el primer número y la operación, luego muestra el resultado al presionar "=".',
      'En <strong>styles.css</strong>, organiza los botones con CSS Grid.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="pantalla" disabled>\n<div id="botones">\n  <button>7</button><button>8</button><button>9</button><button>/</button>\n  <button>4</button><button>5</button><button>6</button><button>*</button>\n  <button>1</button><button>2</button><button>3</button><button>-</button>\n  <button>C</button><button>0</button><button>=</button><button>+</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#botones { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; max-width: 200px; margin-top: 10px; }\nbutton { padding: 10px; font-size: 1.2rem; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'const pantalla = document.getElementById("pantalla");\nlet operando = "";\nlet operacion = null;\nlet primero = null;\ndocument.querySelectorAll("button").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const valor = btn.textContent;\n    if ("0123456789".includes(valor)) {\n      operando += valor; pantalla.value = operando;\n    } else if ("+-*/".includes(valor)) {\n      primero = parseFloat(operando); operacion = valor; operando = "";\n    } else if (valor === "=") {\n      const segundo = parseFloat(operando);\n      let res = 0;\n      switch (operacion) {\n        case "+": res = primero + segundo; break;\n        case "-": res = primero - segundo; break;\n        case "*": res = primero * segundo; break;\n        case "/": res = primero / segundo; break;\n      }\n      pantalla.value = res; operando = res;\n    } else if (valor === "C") {\n      pantalla.value = ""; operando = ""; primero = null; operacion = null;\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch12',
    title: 'Acordeón FAQ',
    level: 'Intermedio',
    description: 'Crea una sección de preguntas frecuentes que se expandan y colapsen al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, escribe varios <code>&lt;div&gt;</code> con clase "pregunta" y "respuesta".',
      'En <strong>script.js</strong>, selecciona todas las preguntas y añade un event listener que alterne la visibilidad de la respuesta.',
      'En <strong>styles.css</strong>, oculta las respuestas por defecto y añade transiciones suaves.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="faq">\n  <div class="pregunta">¿Qué es HTML?</div>\n  <div class="respuesta">Lenguaje de marcado para estructurar páginas web.</div>\n  <div class="pregunta">¿Qué es CSS?</div>\n  <div class="respuesta">Hojas de estilo para diseñar la apariencia.</div>\n  <div class="pregunta">¿Qué es JavaScript?</div>\n  <div class="respuesta">Lenguaje de programación para interactividad.</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.pregunta { background: #2d6a4f; color: white; padding: 10px; margin-top: 5px; cursor: pointer; }\n.respuesta { display: none; padding: 10px; background: #f0f0f0; border: 1px solid #ccc; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".pregunta").forEach(p => {\n  p.addEventListener("click", () => {\n    const r = p.nextElementSibling;\n    r.style.display = r.style.display === "block" ? "none" : "block";\n  });\n});' }
    ]
  },
  {
    id: 'ch13',
    title: 'Slider de imágenes automático',
    level: 'Intermedio',
    description: 'Construye un carrusel de imágenes que cambie automáticamente cada 3 segundos.',
    instructions: [
      'En <strong>index.html</strong>, crea un contenedor con varias <code>&lt;img&gt;</code> (pueden ser placeholders).',
      'En <strong>styles.css</strong>, oculta todas las imágenes menos la primera y aplica transiciones.',
      'En <strong>script.js</strong>, crea un índice que avance cíclicamente con <code>setInterval</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="slider">\n  <img src="https://via.placeholder.com/300x150/FF0000/FFFFFF" class="activa">\n  <img src="https://via.placeholder.com/300x150/00FF00/FFFFFF">\n  <img src="https://via.placeholder.com/300x150/0000FF/FFFFFF">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.slider img { width: 300px; display: none; border-radius: 8px; }\n.slider img.activa { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const imgs = document.querySelectorAll(".slider img");\nlet idx = 0;\nsetInterval(() => {\n  imgs[idx].classList.remove("activa");\n  idx = (idx + 1) % imgs.length;\n  imgs[idx].classList.add("activa");\n}, 3000);' }
    ]
  },
  {
    id: 'ch14',
    title: 'Modo oscuro / claro',
    level: 'Básico',
    description: 'Añade un interruptor que permita cambiar entre modo oscuro y modo claro en la página.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;button&gt;</code> con el texto "Cambiar tema".',
      'En <strong>script.js</strong>, define dos clases CSS (.oscuro y .claro) y alterna entre ellas en <code>document.body</code>.',
      'Guarda la preferencia en <code>localStorage</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="btnTema">Cambiar tema</button>' },
      { name: 'styles.css', lang: 'css', content: '.oscuro { background: #1e1e1e; color: #ddd; }\n.claro { background: #fff; color: #333; }' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("btnTema");\nconst temaGuardado = localStorage.getItem("tema") || "claro";\ndocument.body.className = temaGuardado;\nbtn.addEventListener("click", () => {\n  const nuevo = document.body.className === "claro" ? "oscuro" : "claro";\n  document.body.className = nuevo;\n  localStorage.setItem("tema", nuevo);\n});' }
    ]
  },
  {
    id: 'ch15',
    title: 'Cronómetro',
    level: 'Intermedio',
    description: 'Crea un cronómetro con botones de iniciar, pausar y reiniciar.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;span&gt;</code> con id "crono" y tres botones.',
      'En <strong>script.js</strong>, usa <code>setInterval</code> para actualizar los segundos.',
      'Al pausar, limpia el intervalo; al reiniciar, vuelve a 00:00.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="crono">00:00</span>\n<button id="iniciar">Iniciar</button>\n<button id="pausar">Pausar</button>\n<button id="reiniciar">Reiniciar</button>' },
      { name: 'styles.css', lang: 'css', content: '#crono { font-size: 2rem; font-family: monospace; }' },
      { name: 'script.js', lang: 'js', content: 'let segundos = 0, intervalo;\nconst crono = document.getElementById("crono");\nfunction actualizar() { crono.textContent = String(Math.floor(segundos/60)).padStart(2,"0") + ":" + String(segundos%60).padStart(2,"0"); }\ndocument.getElementById("iniciar").addEventListener("click", () => { if(intervalo) return; intervalo = setInterval(() => { segundos++; actualizar(); }, 1000); });\ndocument.getElementById("pausar").addEventListener("click", () => { clearInterval(intervalo); intervalo = null; });\ndocument.getElementById("reiniciar").addEventListener("click", () => { clearInterval(intervalo); intervalo = null; segundos = 0; actualizar(); });' }
    ]
  },
  {
    id: 'ch16',
    title: 'Validación de formulario en tiempo real',
    level: 'Intermedio',
    description: 'Valida un formulario mientras el usuario escribe, mostrando mensajes de error debajo de cada campo.',
    instructions: [
      'En <strong>index.html</strong>, crea un formulario con nombre, email y un campo de contraseña.',
      'En <strong>script.js</strong>, escucha el evento <code>input</code> y valida cada campo con expresiones regulares.',
      'En <strong>styles.css</strong>, usa colores para indicar errores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formulario">\n  <input type="text" id="nombre" placeholder="Nombre"><span id="errNombre"></span><br>\n  <input type="email" id="email" placeholder="Email"><span id="errEmail"></span><br>\n  <input type="password" id="pass" placeholder="Contraseña (6+ caracteres)"><span id="errPass"></span>\n</form>' },
      { name: 'styles.css', lang: 'css', content: 'span { color: red; font-size: 0.8rem; } input { display: block; margin: 5px 0; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("formulario").addEventListener("input", function() {\n  const nombre = document.getElementById("nombre").value;\n  const email = document.getElementById("email").value;\n  const pass = document.getElementById("pass").value;\n  document.getElementById("errNombre").textContent = nombre.trim() ? "" : "Nombre requerido";\n  document.getElementById("errEmail").textContent = /\\S+@\\S+\\.\\S+/.test(email) ? "" : "Email inválido";\n  document.getElementById("errPass").textContent = pass.length >= 6 ? "" : "Mínimo 6 caracteres";\n});' }
    ]
  },
  {
    id: 'ch17',
    title: 'Menú hamburguesa',
    level: 'Intermedio',
    description: 'Diseña un menú de navegación que se oculte detrás de un icono de hamburguesa en pantallas pequeñas.',
    instructions: [
      'En <strong>index.html</strong>, crea un <code>&lt;button&gt;</code> con clase "hamburguesa" y un <code>&lt;nav&gt;</code> con enlaces.',
      'En <strong>styles.css</strong>, muestra el botón solo en pantallas pequeñas y oculta el menú.',
      'En <strong>script.js</strong>, alterna una clase "abierto" al hacer clic en el botón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="hamburguesa">☰</button>\n<nav id="menu">\n  <a href="#">Inicio</a>\n  <a href="#">Servicios</a>\n  <a href="#">Contacto</a>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: 'nav { display: none; flex-direction: column; background: #2d6a4f; padding: 10px; }\nnav.abierto { display: flex; }\n.hamburguesa { display: none; }\n@media (max-width: 600px) {\n  .hamburguesa { display: block; }\n  nav { display: none; }\n}' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".hamburguesa").addEventListener("click", () => {\n  document.getElementById("menu").classList.toggle("abierto");\n});' }
    ]
  },
  {
    id: 'ch18',
    title: 'Tooltip personalizado',
    level: 'Básico',
    description: 'Crea tooltips que aparezcan al pasar el ratón sobre un texto, usando solo HTML y CSS.',
    instructions: [
      'En <strong>index.html</strong>, coloca varios <code>&lt;span&gt;</code> con un atributo <code>data-tooltip</code>.',
      'En <strong>styles.css</strong>, usa posicionamiento absoluto y pseudo-elementos para mostrar el tooltip al hacer hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Pasa el ratón sobre <span class="tooltip" data-tooltip="Esto es un tooltip">esta palabra</span> para ver un tooltip.</p>' },
      { name: 'styles.css', lang: 'css', content: '.tooltip { position: relative; cursor: pointer; color: #2d6a4f; }\n.tooltip::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: #333;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  white-space: nowrap;\n  display: none;\n}\n.tooltip:hover::after { display: block; }' }
    ]
  },
  {
    id: 'ch19',
    title: 'Modal emergente',
    level: 'Intermedio',
    description: 'Construye un modal que se muestre sobre la página con un fondo semitransparente.',
    instructions: [
      'En <strong>index.html</strong>, crea un botón "Abrir modal" y un <code>&lt;div&gt;</code> con id "modal" oculto.',
      'En <strong>script.js</strong>, muestra el modal al hacer clic en el botón y lo cierra al presionar fuera o en un botón cerrar.',
      'En <strong>styles.css</strong>, centra el modal y añade la capa de fondo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="abrirModal">Abrir modal</button>\n<div id="modal" class="oculto">\n  <div class="modal-contenido">\n    <span id="cerrarModal">&times;</span>\n    <p>¡Hola! Soy un modal.</p>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: none; justify-content: center; align-items: center; }\n#modal.oculto { display: none; }\n#modal:not(.oculto) { display: flex; }\n.modal-contenido { background: #fff; padding: 20px; border-radius: 10px; position: relative; }\n#cerrarModal { position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 1.5rem; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("abrirModal").addEventListener("click", () => document.getElementById("modal").classList.remove("oculto"));\ndocument.getElementById("cerrarModal").addEventListener("click", () => document.getElementById("modal").classList.add("oculto"));' }
    ]
  },
  {
    id: 'ch20',
    title: 'Carga de datos desde una API',
    level: 'Avanzado',
    description: 'Obtén datos de una API pública (JSONPlaceholder) y muéstralos en una lista.',
    instructions: [
      'En <strong>index.html</strong>, coloca una <code>&lt;ul&gt;</code> vacía con id "lista".',
      'En <strong>script.js</strong>, usa <code>fetch</code> para obtener usuarios desde jsonplaceholder.typicode.com.',
      'Itera sobre los datos y crea <code>&lt;li&gt;</code> con el nombre y email de cada usuario.',
      'Maneja errores con <code>.catch</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul id="listaUsuarios"></ul>' },
      { name: 'script.js', lang: 'js', content: 'fetch("https://jsonplaceholder.typicode.com/users")\n  .then(res => res.json())\n  .then(usuarios => {\n    const lista = document.getElementById("listaUsuarios");\n    usuarios.forEach(u => {\n      const li = document.createElement("li");\n      li.textContent = `${u.name} - ${u.email}`;\n      lista.appendChild(li);\n    });\n  })\n  .catch(err => console.error("Error al cargar:", err));' }
    ]
  },
  {
    id: 'ch21',
    title: 'Tabla dinámica con ordenación',
    level: 'Intermedio',
    description: 'Muestra datos en una tabla HTML y permite ordenar las columnas al hacer clic en el encabezado.',
    instructions: [
      'En <strong>index.html</strong>, crea una tabla con id "tabla" y un <code>&lt;thead&gt;</code> con tres columnas.',
      'En <strong>script.js</strong>, define un array de objetos y rellena la tabla.',
      'Añade event listeners a los encabezados para ordenar ascendente/descendente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<table id="tabla" border="1">\n  <thead><tr><th>Nombre</th><th>Edad</th><th>Ciudad</th></tr></thead>\n  <tbody></tbody>\n</table>' },
      { name: 'script.js', lang: 'js', content: 'const datos = [\n  { nombre: "Ana", edad: 28, ciudad: "Madrid" },\n  { nombre: "Luis", edad: 22, ciudad: "Barcelona" },\n  { nombre: "Marta", edad: 31, ciudad: "Valencia" }\n];\nconst tbody = document.querySelector("#tabla tbody");\nfunction mostrar(arr) {\n  tbody.innerHTML = arr.map(d => `<tr><td>${d.nombre}</td><td>${d.edad}</td><td>${d.ciudad}</td></tr>`).join("");\n}\nlet orden = {};\ndocument.querySelectorAll("th").forEach(th => {\n  th.addEventListener("click", () => {\n    const col = th.textContent.toLowerCase();\n    orden[col] = !orden[col];\n    const sorted = [...datos].sort((a, b) => {\n      if (a[col] < b[col]) return orden[col] ? -1 : 1;\n      if (a[col] > b[col]) return orden[col] ? 1 : -1;\n      return 0;\n    });\n    mostrar(sorted);\n  });\n});\nmostrar(datos);' }
    ]
  },
  {
    id: 'ch22',
    title: 'Tarjetas con efecto flip',
    level: 'Intermedio',
    description: 'Crea tarjetas que giren al pasar el ratón para mostrar información en el reverso.',
    instructions: [
      'En <strong>index.html</strong>, diseña una tarjeta con clase "flip-card" que contenga "flip-card-inner", "flip-card-front" y "flip-card-back".',
      'En <strong>styles.css</strong>, usa <code>transform: rotateY</code> y <code>perspective</code> para el efecto 3D.',
      'Añade <code>transition</code> al hacer hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front"><h2>Front</h2></div>\n    <div class="flip-card-back"><h2>Back</h2><p>Información oculta</p></div>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flip-card { width: 200px; height: 250px; perspective: 1000px; }\n.flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }\n.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }\n.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 10px; display: flex; align-items: center; justify-content: center; }\n.flip-card-front { background: #2d6a4f; color: white; }\n.flip-card-back { background: #d4af37; color: black; transform: rotateY(180deg); }' }
    ]
  },
  {
    id: 'ch23',
    title: 'Loader animado solo con CSS',
    level: 'Básico',
    description: 'Crea un indicador de carga animado utilizando solo CSS y un div.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;div&gt;</code> con clase "loader".',
      'En <strong>styles.css</strong>, usa <code>border-radius: 50%</code> y <code>animation</code> con <code>@keyframes</code> para girar.',
      'Experimenta con diferentes colores de borde.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="loader"></div>' },
      { name: 'styles.css', lang: 'css', content: '.loader {\n  border: 8px solid #f3f3f3;\n  border-top: 8px solid #2d6a4f;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  animation: girar 1s linear infinite;\n  margin: auto;\n}\n@keyframes girar {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}' }
    ]
  },
  {
    id: 'ch24',
    title: 'Página 404 creativa',
    level: 'Básico',
    description: 'Diseña una página de error 404 atractiva con un mensaje divertido y un botón para volver al inicio.',
    instructions: [
      'En <strong>index.html</strong>, coloca un título grande "404", un párrafo y un enlace con estilo de botón.',
      'En <strong>styles.css</strong>, centra todo y aplica colores llamativos.',
      'Añade una pequeña animación al título.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="error-404">\n  <h1>404</h1>\n  <p>Página no encontrada</p>\n  <a href="#">Volver al inicio</a>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.error-404 { text-align: center; margin-top: 100px; }\nh1 { font-size: 5rem; color: #2d6a4f; animation: flotar 2s infinite alternate; }\na { padding: 10px 20px; background: #d4af37; color: white; text-decoration: none; border-radius: 5px; }\n@keyframes flotar { from { transform: translateY(0); } to { transform: translateY(-10px); } }' }
    ]
  },
  {
    id: 'ch25',
    title: 'Simulador de tirada de dados',
    level: 'Básico',
    description: 'Lanza un dado virtual que muestra un número aleatorio al hacer clic en un botón.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;div&gt;</code> con id "dado" y un botón "Lanzar".',
      'En <strong>script.js</strong>, genera un número aleatorio del 1 al 6 y muestra el resultado con caracteres Unicode (⚀ a ⚅).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="dado">⚀</div>\n<button id="lanzar">Lanzar</button>' },
      { name: 'styles.css', lang: 'css', content: '#dado { font-size: 4rem; text-align: center; margin: 20px; }' },
      { name: 'script.js', lang: 'js', content: 'const dados = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];\ndocument.getElementById("lanzar").addEventListener("click", () => {\n  const num = Math.floor(Math.random() * 6);\n  document.getElementById("dado").textContent = dados[num];\n});' }
    ]
  },
  {
    id: 'ch26',
    title: 'Conversor de divisas',
    level: 'Avanzado',
    description: 'Convierte una cantidad de Euros a Dólares usando una tasa fija, luego muestra el resultado.',
    instructions: [
      'En <strong>index.html</strong>, crea un input para euros, un botón y un espacio para mostrar el resultado.',
      'En <strong>script.js</strong>, define una tasa (ej. 1.1) y calcula la conversión al hacer clic o al escribir.',
      'Añade selectores para diferentes monedas (opcional).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="euros" placeholder="Euros">\n<button id="convertir">Convertir a USD</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'const tasa = 1.1;\ndocument.getElementById("convertir").addEventListener("click", () => {\n  const euros = parseFloat(document.getElementById("euros").value);\n  const usd = euros * tasa;\n  document.getElementById("resultado").textContent = `${euros} € = ${usd.toFixed(2)} USD`;\n});' }
    ]
  },
  {
    id: 'ch27',
    title: 'Notas adhesivas (Sticky Notes)',
    level: 'Intermedio',
    description: 'Crea una aplicación donde puedas agregar, editar y eliminar notas estilo post-it.',
    instructions: [
      'En <strong>index.html</strong>, coloca un botón "Nueva nota" y un contenedor con id "notas".',
      'En <strong>script.js</strong>, al hacer clic se añade un textarea con un botón eliminar.',
      'En <strong>styles.css</strong>, da apariencia de post-it con colores pastel.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="nuevaNota">+ Nueva nota</button>\n<div id="notas" style="display: flex; flex-wrap: wrap; gap: 10px;"></div>' },
      { name: 'styles.css', lang: 'css', content: 'textarea { width: 150px; height: 150px; background: #fff9c4; padding: 10px; border: none; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); resize: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("nuevaNota").addEventListener("click", () => {\n  const div = document.createElement("div");\n  div.innerHTML = `<textarea></textarea><br><button class="borrar">X</button>`;\n  div.querySelector(".borrar").addEventListener("click", () => div.remove());\n  document.getElementById("notas").appendChild(div);\n});' }
    ]
  },
  {
    id: 'ch28',
    title: 'Línea de tiempo vertical',
    level: 'Básico',
    description: 'Diseña una línea de tiempo vertical con eventos usando solo HTML y CSS.',
    instructions: [
      'En <strong>index.html</strong>, crea una serie de <code>&lt;div&gt;</code> con clase "evento".',
      'En <strong>styles.css</strong>, utiliza bordes y pseudoelementos para crear una línea y círculos.',
      'Añade colores alternos para cada lado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="timeline">\n  <div class="evento"><h3>2020</h3><p>Comenzó la pandemia</p></div>\n  <div class="evento"><h3>2022</h3><p>Aprendí desarrollo web</p></div>\n  <div class="evento"><h3>2025</h3><p>Proyecto actual</p></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.timeline { position: relative; padding-left: 30px; }\n.timeline::before { content: ""; position: absolute; left: 10px; top: 0; bottom: 0; width: 2px; background: #2d6a4f; }\n.evento { margin-bottom: 20px; position: relative; }\n.evento::before { content: ""; position: absolute; left: -24px; top: 5px; width: 10px; height: 10px; background: #d4af37; border-radius: 50%; }' }
    ]
  },
  {
    id: 'ch29',
    title: 'Efecto de máquina de escribir',
    level: 'Básico',
    description: 'Simula el efecto de una máquina de escribir que muestra texto letra por letra.',
    instructions: [
      'En <strong>index.html</strong>, crea un <code>&lt;div&gt;</code> vacío con id "maquina".',
      'En <strong>script.js</strong>, define una cadena de texto y muéstrala carácter a carácter con <code>setInterval</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="maquina"></div>' },
      { name: 'styles.css', lang: 'css', content: '#maquina { font-family: "Courier New", monospace; font-size: 1.5rem; border-right: 2px solid #2d6a4f; white-space: nowrap; overflow: hidden; }' },
      { name: 'script.js', lang: 'js', content: 'const texto = "¡Hola, bienvenido al laboratorio!";\nlet i = 0;\nconst div = document.getElementById("maquina");\nconst intervalo = setInterval(() => {\n  if (i < texto.length) { div.textContent += texto.charAt(i); i++; }\n  else clearInterval(intervalo);\n}, 80);' }
    ]
  },
  {
    id: 'ch30',
    title: 'Filtro de búsqueda en lista',
    level: 'Intermedio',
    description: 'Crea un campo de texto que filtre dinámicamente una lista de elementos.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;input&gt;</code> y una <code>&lt;ul&gt;</code> con varios <code>&lt;li&gt;</code>.',
      'En <strong>script.js</strong>, escucha el evento <code>input</code> y oculta los elementos que no coincidan con el texto.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscar" placeholder="Filtrar...">\n<ul id="lista">\n  <li>Manzana</li>\n  <li>Plátano</li>\n  <li>Fresa</li>\n  <li>Kiwi</li>\n  <li>Mango</li>\n</ul>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("buscar").addEventListener("input", function() {\n  const filtro = this.value.toLowerCase();\n  document.querySelectorAll("#lista li").forEach(li => {\n    li.style.display = li.textContent.toLowerCase().includes(filtro) ? "" : "none";\n  });\n});' }
    ]
  },
  {
    id: 'ch31',
    title: 'Generador de contraseñas seguras',
    level: 'Avanzado',
    description: 'Genera contraseñas aleatorias con letras, números y símbolos, y permite copiarlas al portapapeles.',
    instructions: [
      'En <strong>index.html</strong>, incluye un <code>&lt;input&gt;</code> de solo lectura, un botón generar y un botón copiar.',
      'En <strong>script.js</strong>, crea la lógica que mezcle caracteres aleatorios.',
      'Usa <code>navigator.clipboard.writeText</code> para copiar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="password" readonly>\n<button id="generar">Generar</button>\n<button id="copiar">Copiar</button>' },
      { name: 'script.js', lang: 'js', content: 'const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";\ndocument.getElementById("generar").addEventListener("click", () => {\n  let pass = "";\n  for (let i = 0; i < 12; i++) pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));\n  document.getElementById("password").value = pass;\n});\ndocument.getElementById("copiar").addEventListener("click", () => {\n  navigator.clipboard.writeText(document.getElementById("password").value);\n  alert("Contraseña copiada");\n});' }
    ]
  },
  {
    id: 'ch32',
    title: 'Gráfico de barras con divs',
    level: 'Intermedio',
    description: 'Representa datos numéricos mediante barras verticales hechas con divs y CSS.',
    instructions: [
      'En <strong>index.html</strong>, crea un contenedor y varios <code>&lt;div&gt;</code> con clase "barra".',
      'En <strong>styles.css</strong>, usa <code>height</code> distinta en cada barra y alineación inferior.',
      'Opcionalmente, añade etiquetas con los valores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="grafico">\n  <div class="barra" style="height: 60%;">60</div>\n  <div class="barra" style="height: 80%;">80</div>\n  <div class="barra" style="height: 40%;">40</div>\n  <div class="barra" style="height: 90%;">90</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.grafico { display: flex; align-items: flex-end; gap: 10px; height: 200px; border-left: 2px solid #000; border-bottom: 2px solid #000; padding: 10px; }\n.barra { width: 40px; background: #2d6a4f; color: white; text-align: center; }' }
    ]
  },
  {
    id: 'ch33',
    title: 'Temporizador de cuenta regresiva',
    level: 'Básico',
    description: 'Crea un temporizador que cuente hacia atrás desde un número de segundos y muestre un mensaje al finalizar.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;span&gt;</code> y un botón "Iniciar".',
      'En <strong>script.js</strong>, lee un valor fijo (ej. 10) y decrementa cada segundo con <code>setInterval</code>.',
      'Al llegar a 0, muestra "¡Tiempo!".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="cuenta">10</span>\n<button id="iniciar">Iniciar cuenta regresiva</button>' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 10;\nconst span = document.getElementById("cuenta");\nlet idIntervalo;\ndocument.getElementById("iniciar").addEventListener("click", () => {\n  if (idIntervalo) return;\n  idIntervalo = setInterval(() => {\n    tiempo--;\n    span.textContent = tiempo;\n    if (tiempo <= 0) {\n      clearInterval(idIntervalo);\n      idIntervalo = null;\n      span.textContent = "¡Tiempo!";\n      tiempo = 10;\n    }\n  }, 1000);\n});' }
    ]
  },
  {
    id: 'ch34',
    title: 'Drag & Drop básico',
    level: 'Avanzado',
    description: 'Implementa arrastrar y soltar elementos entre dos contenedores usando la API nativa.',
    instructions: [
      'En <strong>index.html</strong>, crea dos <code>&lt;div&gt;</code> con clase "caja", una con elementos y otra vacía.',
      'En <strong>script.js</strong>, maneja los eventos <code>dragstart</code>, <code>dragover</code> y <code>drop</code>.',
      'En <strong>styles.css</strong>, aplica estilos visuales durante el arrastre.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="caja" id="origen">\n  <div class="item" draggable="true">Elemento 1</div>\n  <div class="item" draggable="true">Elemento 2</div>\n</div>\n<div class="caja" id="destino"></div>' },
      { name: 'styles.css', lang: 'css', content: '.caja { width: 200px; min-height: 100px; border: 1px solid #ccc; padding: 10px; margin: 10px; display: inline-block; vertical-align: top; }\n.item { background: #2d6a4f; color: white; padding: 5px; margin: 5px 0; cursor: grab; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".item").forEach(item => {\n  item.addEventListener("dragstart", e => {\n    e.dataTransfer.setData("text/plain", e.target.outerHTML);\n    e.target.classList.add("dragging");\n  });\n  item.addEventListener("dragend", e => e.target.classList.remove("dragging"));\n});\nconst destino = document.getElementById("destino");\ndestino.addEventListener("dragover", e => e.preventDefault());\ndestino.addEventListener("drop", e => {\n  e.preventDefault();\n  const html = e.dataTransfer.getData("text/plain");\n  destino.innerHTML += html;\n});' }
    ]
  },
  {
    id: 'ch35',
    title: 'Pie de página (footer) siempre abajo',
    level: 'Básico',
    description: 'Asegúrate de que el pie de página permanezca en la parte inferior de la ventana incluso con poco contenido.',
    instructions: [
      'En <strong>index.html</strong>, estructura el body con un <code>&lt;header&gt;</code>, un <code>&lt;main&gt;</code> y un <code>&lt;footer&gt;</code>.',
      'En <strong>styles.css</strong>, usa Flexbox en <code>body</code> con <code>flex-direction: column</code> y <code>min-height: 100vh</code>.',
      'Aplica <code>margin-top: auto</code> al footer.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<header>Cabecera</header>\n<main>Contenido principal</main>\n<footer>Pie de página</footer>' },
      { name: 'styles.css', lang: 'css', content: 'html, body { height: 100%; margin: 0; }\nbody { display: flex; flex-direction: column; min-height: 100vh; }\nheader, footer { background: #2d6a4f; color: white; padding: 15px; text-align: center; }\nmain { flex: 1; padding: 20px; }' }
    ]
  },
  {
    id: 'ch36',
    title: 'Efecto parallax simple',
    level: 'Intermedio',
    description: 'Crea un efecto de parallax al hacer scroll sobre una imagen de fondo fija.',
    instructions: [
      'En <strong>index.html</strong>, añade una sección con clase "parallax" y contenido debajo.',
      'En <strong>styles.css</strong>, usa <code>background-attachment: fixed</code> y una imagen de placeholder.',
      'Ajusta el tamaño con <code>background-size: cover</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="parallax"></div>\n<div style="padding: 50px; background: #fff;">\n  <h2>Contenido después del parallax</h2>\n  <p>Texto de relleno...</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.parallax {\n  background-image: url("https://via.placeholder.com/1200x400/2d6a4f/ffffff");\n  height: 300px;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}' }
    ]
  },
  {
    id: 'ch37',
    title: 'Aviso de cookies',
    level: 'Básico',
    description: 'Muestra un banner de cookies que se puede ocultar al aceptar, guardando la preferencia en localStorage.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;div&gt;</code> fijo en la parte inferior con un mensaje y un botón "Aceptar".',
      'En <strong>script.js</strong>, oculta el banner al hacer clic y guarda una clave en localStorage.',
      'Al recargar, si ya aceptó no mostrar el banner.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cookie-banner">\n  Este sitio usa cookies. <button id="aceptarCookies">Aceptar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#cookie-banner { position: fixed; bottom: 0; width: 100%; background: #333; color: #fff; text-align: center; padding: 12px; }' },
      { name: 'script.js', lang: 'js', content: 'if (localStorage.getItem("cookies-aceptadas")) {\n  document.getElementById("cookie-banner").style.display = "none";\n}\ndocument.getElementById("aceptarCookies").addEventListener("click", () => {\n  localStorage.setItem("cookies-aceptadas", "true");\n  document.getElementById("cookie-banner").style.display = "none";\n});' }
    ]
  },
  {
    id: 'ch38',
    title: 'Reproductor de audio simple',
    level: 'Intermedio',
    description: 'Crea controles básicos de reproducción de audio con HTML y JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, coloca un elemento <code>&lt;audio&gt;</code> con un archivo de sonido (puede ser placeholder).',
      'Añade botones personalizados para reproducir y pausar.',
      'En <strong>script.js</strong>, controla <code>play()</code> y <code>pause()</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<audio id="miAudio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>\n<button id="playBtn">▶ Reproducir</button>\n<button id="pauseBtn">⏸ Pausa</button>' },
      { name: 'script.js', lang: 'js', content: 'const audio = document.getElementById("miAudio");\ndocument.getElementById("playBtn").addEventListener("click", () => audio.play());\ndocument.getElementById("pauseBtn").addEventListener("click", () => audio.pause());' }
    ]
  },
  {
    id: 'ch39',
    title: 'Mapa interactivo con Leaflet',
    level: 'Avanzado',
    description: 'Integra la librería Leaflet para mostrar un mapa interactivo con un marcador.',
    instructions: [
      'En <strong>index.html</strong>, enlaza la CDN de Leaflet CSS y JS.',
      'Añade un <code>&lt;div&gt;</code> con id "map" y un tamaño fijo.',
      'En <strong>script.js</strong>, inicializa el mapa con coordenadas y un marcador.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />\n<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>\n<div id="map" style="height: 300px;"></div>' },
      { name: 'script.js', lang: 'js', content: 'const map = L.map("map").setView([40.4168, -3.7038], 13);\nL.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {\n  attribution: "© OpenStreetMap"\n}).addTo(map);\nL.marker([40.4168, -3.7038]).addTo(map).bindPopup("Madrid, España");' }
    ]
  },
    {
    id: 'ch40',
    title: 'Selector de fecha personalizado',
    level: 'Intermedio',
    description: 'Crea un campo de fecha que muestre un calendario desplegable al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;input type="text"&gt;</code> para la fecha y un div calendario oculto.',
      'En <strong>script.js</strong>, genera los días del mes y permite seleccionar uno.',
      'En <strong>styles.css</strong>, posiciona el calendario como un dropdown.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="fecha" readonly placeholder="Selecciona fecha">\n<div id="calendario" class="oculto"></div>' },
      { name: 'styles.css', lang: 'css', content: '#calendario { position: absolute; background: white; border: 1px solid #ccc; padding: 10px; }\n.oculto { display: none; }' },
      { name: 'script.js', lang: 'js', content: 'const input = document.getElementById("fecha");\nconst cal = document.getElementById("calendario");\ninput.addEventListener("click", () => cal.classList.toggle("oculto"));\nconst hoy = new Date();\nfor (let i = 1; i <= 31; i++) {\n  const dia = document.createElement("div");\n  dia.textContent = i;\n  dia.addEventListener("click", () => {\n    input.value = `${i}/${hoy.getMonth()+1}/${hoy.getFullYear()}`;\n    cal.classList.add("oculto");\n  });\n  cal.appendChild(dia);\n}' }
    ]
  },
  {
    id: 'ch41',
    title: 'Sistema de pestañas (tabs)',
    level: 'Intermedio',
    description: 'Crea pestañas que muestren contenido diferente al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, define botones con clase "tab" y divs con clase "tab-content".',
      'En <strong>script.js</strong>, oculta todos los contenidos excepto el primero, y alterna al hacer clic.',
      'En <strong>styles.css</strong>, estiliza las pestañas activas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="tab activa" data-tab="1">Pestaña 1</button>\n<button class="tab" data-tab="2">Pestaña 2</button>\n<div class="tab-content" id="tab1">Contenido del primer tab</div>\n<div class="tab-content oculto" id="tab2">Contenido del segundo tab</div>' },
      { name: 'styles.css', lang: 'css', content: '.tab { padding: 10px; cursor: pointer; }\n.tab.activa { background: #2d6a4f; color: white; }\n.tab-content { padding: 10px; border: 1px solid #ccc; }\n.oculto { display: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".tab").forEach(tab => {\n  tab.addEventListener("click", () => {\n    document.querySelectorAll(".tab").forEach(t => t.classList.remove("activa"));\n    tab.classList.add("activa");\n    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("oculto"));\n    document.getElementById("tab" + tab.dataset.tab).classList.remove("oculto");\n  });\n});' }
    ]
  },
  {
    id: 'ch42',
    title: 'Imagen con zoom al pasar el ratón',
    level: 'Básico',
    description: 'Crea un efecto de lupa que amplía una imagen al hacer hover.',
    instructions: [
      'En <strong>index.html</strong>, usa una imagen con clase "zoom".',
      'En <strong>styles.css</strong>, aplica <code>transform: scale</code> con <code>transition</code> y un contenedor con overflow hidden.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="zoom-container">\n  <img src="https://via.placeholder.com/300" class="zoom">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.zoom-container { width: 300px; overflow: hidden; }\n.zoom { width: 100%; transition: transform 0.3s; }\n.zoom:hover { transform: scale(1.5); }' }
    ]
  },
  {
    id: 'ch43',
    title: 'Efecto de desenfoque al hacer scroll',
    level: 'Intermedio',
    description: 'Desenfoca una imagen gradualmente mientras haces scroll hacia abajo.',
    instructions: [
      'En <strong>index.html</strong>, coloca una imagen grande y contenido debajo.',
      'En <strong>script.js</strong>, escucha el scroll y ajusta <code>filter: blur</code> según la posición.',
      'En <strong>styles.css</strong>, fija la imagen con position sticky.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/800x400" id="imgScroll" style="position:sticky;top:0;">\n<div style="height:2000px;"></div>' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const img = document.getElementById("imgScroll");\n  const blur = Math.min(window.scrollY / 100, 10);\n  img.style.filter = `blur(${blur}px)`;\n});' }
    ]
  },
  {
    id: 'ch44',
    title: 'Lista de reproducción de videos de YouTube',
    level: 'Intermedio',
    description: 'Inserta videos de YouTube y permite cambiar entre ellos al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, añade un iframe con id "video" y botones con URLs de YouTube.',
      'En <strong>script.js</strong>, al hacer clic cambia el src del iframe.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>\n<button data-url="https://www.youtube.com/embed/dQw4w9WgXcQ">Video 1</button>\n<button data-url="https://www.youtube.com/embed/9bZkp7q19f0">Video 2</button>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("button[data-url]").forEach(btn => {\n  btn.addEventListener("click", () => {\n    document.getElementById("video").src = btn.dataset.url + "?autoplay=1";\n  });\n});' }
    ]
  },
  {
    id: 'ch45',
    title: 'Detector de palíndromos',
    level: 'Básico',
    description: 'Comprueba si una palabra o frase es un palíndromo (se lee igual al revés).',
    instructions: [
      'En <strong>index.html</strong>, crea un input y un botón; muestra el resultado en un párrafo.',
      'En <strong>script.js</strong>, limpia la cadena (espacios, mayúsculas) y compárala con su reverso.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="palabra" placeholder="Escribe una palabra">\n<button id="verificar">Verificar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("verificar").addEventListener("click", () => {\n  const texto = document.getElementById("palabra").value.replace(/\\s/g, "").toLowerCase();\n  const esPalindromo = texto === texto.split("").reverse().join("");\n  document.getElementById("resultado").textContent = esPalindromo ? "Es palíndromo" : "No es palíndromo";\n});' }
    ]
  },
  {
    id: 'ch46',
    title: 'Cifrado César',
    level: 'Avanzado',
    description: 'Implementa un cifrado César que desplace letras un número fijo de posiciones.',
    instructions: [
      'En <strong>index.html</strong>, pon un textarea, un input numérico y botones para cifrar/descifrar.',
      'En <strong>script.js</strong>, recorre cada carácter y aplica el desplazamiento solo a letras.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="texto" placeholder="Mensaje"></textarea><br>\n<input type="number" id="clave" value="3"><br>\n<button id="cifrar">Cifrar</button>\n<button id="descifrar">Descifrar</button>\n<p id="salida"></p>' },
      { name: 'script.js', lang: 'js', content: 'function cesar(texto, clave) {\n  return texto.replace(/[a-z]/gi, letra => {\n    const base = letra === letra.toUpperCase() ? 65 : 97;\n    return String.fromCharCode(((letra.charCodeAt(0) - base + clave) % 26 + 26) % 26 + base);\n  });\n}\ndocument.getElementById("cifrar").addEventListener("click", () => {\n  const clave = parseInt(document.getElementById("clave").value);\n  document.getElementById("salida").textContent = cesar(document.getElementById("texto").value, clave);\n});\ndocument.getElementById("descifrar").addEventListener("click", () => {\n  const clave = parseInt(document.getElementById("clave").value);\n  document.getElementById("salida").textContent = cesar(document.getElementById("texto").value, -clave);\n});' }
    ]
  },
  {
    id: 'ch47',
    title: 'Efecto de carga de página (preloader)',
    level: 'Básico',
    description: 'Muestra una animación de carga que desaparece al terminar de cargar la página.',
    instructions: [
      'En <strong>index.html</strong>, coloca un div con id "preloader" al principio del body.',
      'En <strong>styles.css</strong>, anima un spinner.',
      'En <strong>script.js</strong>, oculta el preloader cuando <code>window.onload</code> sucede.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="preloader">Cargando...</div>\n<h1>Contenido real</h1>' },
      { name: 'styles.css', lang: 'css', content: '#preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 999; display: flex; align-items: center; justify-content: center; font-size: 2rem; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("load", () => {\n  document.getElementById("preloader").style.display = "none";\n});' }
    ]
  },
  {
    id: 'ch48',
    title: 'Texto con degradado animado',
    level: 'Básico',
    description: 'Aplica un degradado de colores que se mueve sobre el texto.',
    instructions: [
      'En <strong>index.html</strong>, escribe un título con clase "gradiente".',
      'En <strong>styles.css</strong>, usa <code>background-clip: text</code> y <code>@keyframes</code> para mover el fondo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="gradiente">Texto con degradado</h1>' },
      { name: 'styles.css', lang: 'css', content: '.gradiente {\n  font-size: 3rem;\n  font-weight: bold;\n  background: linear-gradient(90deg, red, blue, green);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: mover 3s linear infinite;\n}\n@keyframes mover { to { background-position: 200% center; } }' }
    ]
  },
  {
    id: 'ch49',
    title: 'Menú de navegación con submenús desplegables',
    level: 'Intermedio',
    description: 'Crea una barra de navegación donde algunos elementos tengan submenús al hacer hover.',
    instructions: [
      'En <strong>index.html</strong>, estructura ul > li con ul.submenu anidados.',
      'En <strong>styles.css</strong>, oculta los submenús y muestra al hover con posicionamiento absoluto.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <ul class="nav">\n    <li><a href="#">Inicio</a></li>\n    <li class="dropdown"><a href="#">Servicios ▾</a>\n      <ul class="submenu">\n        <li><a href="#">Diseño web</a></li>\n        <li><a href="#">SEO</a></li>\n      </ul>\n    </li>\n    <li><a href="#">Contacto</a></li>\n  </ul>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '.nav { list-style:none; display:flex; background:#2d6a4f; padding:10px; }\n.nav a { color:white; text-decoration:none; padding:5px 10px; }\n.dropdown { position:relative; }\n.submenu { display:none; position:absolute; top:100%; left:0; background:#333; min-width:150px; }\n.submenu li { display:block; }\n.dropdown:hover .submenu { display:block; }' }
    ]
  },
  {
    id: 'ch50',
    title: 'Scroll suave a secciones',
    level: 'Básico',
    description: 'Al hacer clic en enlaces internos, la página se desplaza suavemente a la sección correspondiente.',
    instructions: [
      'En <strong>index.html</strong>, añade anclas (<code>#seccion1</code>) y enlaces que apunten a ellas.',
      'En <strong>styles.css</strong>, aplica <code>scroll-behavior: smooth</code> al html.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<a href="#seccion1">Ir a sección 1</a>\n<div id="seccion1" style="margin-top:800px;">Sección 1</div>' },
      { name: 'styles.css', lang: 'css', content: 'html { scroll-behavior: smooth; }' }
    ]
  },
  {
    id: 'ch51',
    title: 'Efecto de máscara sobre imagen',
    level: 'Intermedio',
    description: 'Muestra un texto sobre una imagen que aparece solo al hacer hover.',
    instructions: [
      'En <strong>index.html</strong>, crea un contenedor con una imagen y un div.overlay.',
      'En <strong>styles.css</strong>, posiciona el overlay sobre la imagen y oculta hasta hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="img-overlay">\n  <img src="https://via.placeholder.com/300">\n  <div class="overlay">Texto flotante</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.img-overlay { position: relative; width: 300px; }\n.img-overlay img { display: block; width: 100%; }\n.overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); color: white; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }\n.img-overlay:hover .overlay { opacity: 1; }' }
    ]
  },
  {
    id: 'ch52',
    title: 'Piedra, papel o tijera contra la máquina',
    level: 'Intermedio',
    description: 'Juega contra la computadora, que elige aleatoriamente y muestra el resultado.',
    instructions: [
      'En <strong>index.html</strong>, coloca tres botones (piedra, papel, tijera) y un div para resultados.',
      'En <strong>script.js</strong>, genera la elección de la máquina y determina el ganador.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="jugada" data-eleccion="piedra">Piedra</button>\n<button class="jugada" data-eleccion="papel">Papel</button>\n<button class="jugada" data-eleccion="tijera">Tijera</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'const opciones = ["piedra", "papel", "tijera"];\ndocument.querySelectorAll(".jugada").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const usuario = btn.dataset.eleccion;\n    const maquina = opciones[Math.floor(Math.random() * 3)];\n    let resultado = "";\n    if (usuario === maquina) resultado = "Empate";\n    else if ((usuario === "piedra" && maquina === "tijera") || (usuario === "papel" && maquina === "piedra") || (usuario === "tijera" && maquina === "papel")) {\n      resultado = "¡Ganaste!";\n    } else resultado = "Perdiste";\n    document.getElementById("resultado").textContent = `Tú: ${usuario} | Máquina: ${maquina} → ${resultado}`;\n  });\n});' }
    ]
  },
  {
    id: 'ch53',
    title: 'Lista de compras con almacenamiento local',
    level: 'Intermedio',
    description: 'Crea una lista de compras que persista al recargar la página usando localStorage.',
    instructions: [
      'En <strong>index.html</strong>, pon un input, un botón "Agregar" y un <code>&lt;ul&gt;</code>.',
      'En <strong>script.js</strong>, guarda los ítems en un array dentro de localStorage cada vez que se añada o elimine.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="item" placeholder="Nuevo artículo">\n<button id="agregar">Agregar</button>\n<ul id="lista"></ul>' },
      { name: 'script.js', lang: 'js', content: 'const lista = document.getElementById("lista");\nlet items = JSON.parse(localStorage.getItem("compras")) || [];\nfunction render() {\n  lista.innerHTML = items.map((item, i) => `<li>${item} <button data-index="${i}">X</button></li>`).join("");\n  localStorage.setItem("compras", JSON.stringify(items));\n}\ndocument.getElementById("agregar").addEventListener("click", () => {\n  const val = document.getElementById("item").value.trim();\n  if (val) { items.push(val); render(); document.getElementById("item").value = ""; }\n});\nlista.addEventListener("click", e => {\n  if (e.target.tagName === "BUTTON") {\n    items.splice(e.target.dataset.index, 1);\n    render();\n  }\n});\nrender();' }
    ]
  },
  {
    id: 'ch54',
    title: 'Efecto de sombra en movimiento con el ratón',
    level: 'Intermedio',
    description: 'La sombra de un elemento sigue la posición del ratón.',
    instructions: [
      'En <strong>index.html</strong>, coloca un div con id "sombra".',
      'En <strong>script.js</strong>, escucha <code>mousemove</code> y actualiza <code>text-shadow</code> o <code>box-shadow</code> según coordenadas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="sombra" style="width:200px;height:200px;background:#2d6a4f;">Mueve el ratón</div>' },
      { name: 'script.js', lang: 'js', content: 'document.addEventListener("mousemove", e => {\n  const div = document.getElementById("sombra");\n  const x = (e.clientX - window.innerWidth/2) / 15;\n  const y = (e.clientY - window.innerHeight/2) / 15;\n  div.style.boxShadow = `${x}px ${y}px 20px rgba(0,0,0,0.5)`;\n});' }
    ]
  },
  {
    id: 'ch55',
    title: 'Cambio de imagen al hacer clic',
    level: 'Básico',
    description: 'Al hacer clic en una imagen, esta cambia por otra aleatoria de un array.',
    instructions: [
      'En <strong>index.html</strong>, añade una img con id "imagen".',
      'En <strong>script.js</strong>, define un array de URLs y asigna una diferente en cada clic.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img id="imagen" src="https://via.placeholder.com/300/FF0000" style="cursor:pointer;">' },
      { name: 'script.js', lang: 'js', content: 'const fotos = [\n  "https://via.placeholder.com/300/FF0000",\n  "https://via.placeholder.com/300/00FF00",\n  "https://via.placeholder.com/300/0000FF"\n];\ndocument.getElementById("imagen").addEventListener("click", function() {\n  const aleatoria = fotos[Math.floor(Math.random() * fotos.length)];\n  this.src = aleatoria;\n});' }
    ]
  },
  {
    id: 'ch56',
    title: 'Animación de rebote con CSS',
    level: 'Básico',
    description: 'Crea una pelota que rebote infinitamente usando keyframes.',
    instructions: [
      'En <strong>index.html</strong>, coloca un div con clase "pelota".',
      'En <strong>styles.css</strong>, usa <code>animation</code> con <code>@keyframes</code> que modifique <code>translateY</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="pelota"></div>' },
      { name: 'styles.css', lang: 'css', content: '.pelota {\n  width: 50px; height: 50px; background: #d4af37; border-radius: 50%;\n  animation: rebotar 1s infinite alternate ease-in;\n}\n@keyframes rebotar {\n  from { transform: translateY(0); }\n  to { transform: translateY(200px); }\n}' }
    ]
  },
  {
    id: 'ch57',
    title: 'Indicador de fortaleza de contraseña',
    level: 'Intermedio',
    description: 'Evalúa en tiempo real la fortaleza de una contraseña y muéstralo con colores.',
    instructions: [
      'En <strong>index.html</strong>, añade un input type="password" y un div para la barra.',
      'En <strong>script.js</strong>, comprueba longitud, mayúsculas, números y símbolos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass" placeholder="Contraseña">\n<div id="barra" style="height:10px;width:0;"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("pass").addEventListener("input", function() {\n  const val = this.value;\n  let puntos = 0;\n  if (val.length >= 8) puntos++;\n  if (/[A-Z]/.test(val)) puntos++;\n  if (/[0-9]/.test(val)) puntos++;\n  if (/[^A-Za-z0-9]/.test(val)) puntos++;\n  document.getElementById("barra").style.width = puntos * 25 + "%";\n  const colores = ["red", "orange", "yellow", "green"];\n  document.getElementById("barra").style.background = colores[puntos-1] || "red";\n});' }
    ]
  },
  {
    id: 'ch58',
    title: 'Galería lightbox',
    level: 'Avanzado',
    description: 'Al hacer clic en una miniatura, se abre una versión grande de la imagen en un lightbox.',
    instructions: [
      'En <strong>index.html</strong>, crea miniaturas y un div lightbox oculto.',
      'En <strong>script.js</strong>, al hacer clic muestra la imagen grande y al hacer clic fuera se cierra.',
      'En <strong>styles.css</strong>, posiciona el lightbox en pantalla completa.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img class="miniatura" src="https://via.placeholder.com/100" data-full="https://via.placeholder.com/600">\n<div id="lightbox" class="oculto"><span id="cerrar">&times;</span><img id="imgGrande"></div>' },
      { name: 'styles.css', lang: 'css', content: '#lightbox { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; }\n#lightbox.oculto { display:none; }\n#cerrar { position:absolute; top:20px; right:40px; font-size:2rem; color:white; cursor:pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".miniatura").forEach(img => {\n  img.addEventListener("click", () => {\n    document.getElementById("lightbox").classList.remove("oculto");\n    document.getElementById("imgGrande").src = img.dataset.full;\n  });\n});\ndocument.getElementById("cerrar").addEventListener("click", () => document.getElementById("lightbox").classList.add("oculto"));' }
    ]
  },
  {
    id: 'ch59',
    title: 'Texto que se escribe solo (auto-type)',
    level: 'Básico',
    description: 'Muestra un texto que se va escribiendo solo, como en una terminal.',
    instructions: [
      'En <strong>index.html</strong>, crea un span vacío.',
      'En <strong>script.js</strong>, usa <code>setInterval</code> para añadir caracteres de una cadena.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="texto"></span>' },
      { name: 'script.js', lang: 'js', content: 'const mensaje = "Bienvenido al laboratorio de código...";\nlet i = 0;\nconst span = document.getElementById("texto");\nsetInterval(() => {\n  if (i < mensaje.length) { span.textContent += mensaje.charAt(i); i++; }\n}, 100);' }
    ]
  },
  {
    id: 'ch60',
    title: 'Botón de volver arriba',
    level: 'Básico',
    description: 'Muestra un botón flotante que aparece al hacer scroll y lleva al inicio de la página.',
    instructions: [
      'En <strong>index.html</strong>, añade un botón con id "irArriba" al final del body.',
      'En <strong>styles.css</strong>, fíjalo abajo a la derecha, oculto por defecto.',
      'En <strong>script.js</strong>, muéstralo al bajar y al hacer clic haz scroll suave al top.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div style="height:2000px;"></div>\n<button id="irArriba">↑</button>' },
      { name: 'styles.css', lang: 'css', content: '#irArriba { position:fixed; bottom:20px; right:20px; display:none; padding:10px; background:#2d6a4f; color:white; border:none; border-radius:50%; cursor:pointer; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  document.getElementById("irArriba").style.display = window.scrollY > 200 ? "block" : "none";\n});\ndocument.getElementById("irArriba").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));' }
    ]
  },
  {
    id: 'ch61',
    title: 'Juego de adivinar el número',
    level: 'Intermedio',
    description: 'La computadora elige un número secreto y el usuario debe adivinarlo en pocos intentos.',
    instructions: [
      'En <strong>index.html</strong>, crea un input, un botón "Adivinar" y un párrafo para pistas.',
      'En <strong>script.js</strong>, genera un número aleatorio y da pistas "más alto" o "más bajo".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="adivina" placeholder="Tu número">\n<button id="btnAdivinar">Adivinar</button>\n<p id="pista"></p>' },
      { name: 'script.js', lang: 'js', content: 'const secreto = Math.floor(Math.random() * 100) + 1;\nlet intentos = 0;\ndocument.getElementById("btnAdivinar").addEventListener("click", () => {\n  const num = parseInt(document.getElementById("adivina").value);\n  intentos++;\n  if (num === secreto) document.getElementById("pista").textContent = `¡Correcto! en ${intentos} intentos.`;\n  else if (num > secreto) document.getElementById("pista").textContent = "Más bajo...";\n  else document.getElementById("pista").textContent = "Más alto...";\n});' }
    ]
  },
  {
    id: 'ch62',
    title: 'Dibujar en un canvas',
    level: 'Avanzado',
    description: 'Permite al usuario dibujar líneas con el ratón sobre un elemento canvas.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;canvas&gt;</code> con id "lienzo".',
      'En <strong>script.js</strong>, escucha mousedown, mousemove y mouseup para trazar líneas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="lienzo" width="400" height="300" style="border:1px solid black;"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("lienzo");\nconst ctx = canvas.getContext("2d");\nlet dibujando = false;\ncanvas.addEventListener("mousedown", e => { dibujando = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); });\ncanvas.addEventListener("mousemove", e => { if (dibujando) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });\ncanvas.addEventListener("mouseup", () => dibujando = false);' }
    ]
  },
  {
    id: 'ch63',
    title: 'Cuadrícula de colores pixel art',
    level: 'Avanzado',
    description: 'Crea una cuadrícula donde cada celda cambie de color al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, genera con JavaScript una tabla de celdas.',
      'En <strong>script.js</strong>, añade un listener para colorear la celda clicada.',
      'En <strong>styles.css</strong>, define el tamaño de las celdas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="pixel-art"></div>' },
      { name: 'styles.css', lang: 'css', content: '.celda { width: 20px; height: 20px; border: 1px solid #ccc; display: inline-block; }' },
      { name: 'script.js', lang: 'js', content: 'const cont = document.getElementById("pixel-art");\nfor (let i = 0; i < 20; i++) {\n  for (let j = 0; j < 20; j++) {\n    const celda = document.createElement("div");\n    celda.className = "celda";\n    celda.addEventListener("click", function() { this.style.background = "red"; });\n    cont.appendChild(celda);\n  }\n  cont.appendChild(document.createElement("br"));\n}' }
    ]
  },
  {
    id: 'ch64',
    title: 'Carrusel de testimonios',
    level: 'Intermedio',
    description: 'Rota automáticamente entre diferentes testimonios con una pequeña animación.',
    instructions: [
      'En <strong>index.html</strong>, escribe varios bloques de texto con clase "testimonio".',
      'En <strong>styles.css</strong>, oculta todos menos el activo.',
      'En <strong>script.js</strong>, usa setInterval para cambiar el activo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="testimonios">\n  <div class="testimonio activo">"Excelente servicio" - Ana</div>\n  <div class="testimonio">"Muy recomendable" - Luis</div>\n  <div class="testimonio">"Volveré a comprar" - Marta</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.testimonio { display: none; padding: 20px; background: #f4f4f4; }\n.testimonio.activo { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const testimonios = document.querySelectorAll(".testimonio");\nlet idx = 0;\nsetInterval(() => {\n  testimonios[idx].classList.remove("activo");\n  idx = (idx + 1) % testimonios.length;\n  testimonios[idx].classList.add("activo");\n}, 3000);' }
    ]
  },
  {
    id: 'ch65',
    title: 'Generador de frases aleatorias',
    level: 'Básico',
    description: 'Muestra una frase inspiradora diferente cada vez que se presiona un botón.',
    instructions: [
      'En <strong>index.html</strong>, pon un párrafo y un botón "Nueva frase".',
      'En <strong>script.js</strong>, elige una frase al azar de un array.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p id="frase">Haz clic en el botón</p>\n<button id="nuevaFrase">Nueva frase</button>' },
      { name: 'script.js', lang: 'js', content: 'const frases = ["La práctica hace al maestro", "Nunca dejes de aprender", "El código es poesía", "Divide y vencerás"];\ndocument.getElementById("nuevaFrase").addEventListener("click", () => {\n  const aleatoria = frases[Math.floor(Math.random() * frases.length)];\n  document.getElementById("frase").textContent = aleatoria;\n});' }
    ]
  },
  {
    id: 'ch66',
    title: 'Campo de contraseña mostrar/ocultar',
    level: 'Básico',
    description: 'Agrega un icono de ojo que permita mostrar u ocultar la contraseña escrita.',
    instructions: [
      'En <strong>index.html</strong>, crea un input de contraseña y un botón con icono.',
      'En <strong>script.js</strong>, cambia el tipo del input entre "password" y "text".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="passw">\n<button id="togglePass">👁</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("togglePass").addEventListener("click", () => {\n  const input = document.getElementById("passw");\n  input.type = input.type === "password" ? "text" : "password";\n});' }
    ]
  },
  {
    id: 'ch67',
    title: 'Animación de escritura con CSS',
    level: 'Intermedio',
    description: 'Logra el efecto typewriter con CSS puro, sin JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, coloca un texto en un div.',
      'En <strong>styles.css</strong>, utiliza <code>overflow: hidden</code>, <code>white-space: nowrap</code> y <code>animation</code> con <code>steps()</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="typewriter">Esto es un efecto de máquina de escribir</div>' },
      { name: 'styles.css', lang: 'css', content: '.typewriter {\n  overflow: hidden;\n  white-space: nowrap;\n  border-right: 2px solid #2d6a4f;\n  animation: escribir 4s steps(40) infinite;\n}\n@keyframes escribir {\n  from { width: 0; }\n  to { width: 100%; }\n}' }
    ]
  },
  {
    id: 'ch68',
    title: 'Efecto de tarjeta 3D al pasar el ratón',
    level: 'Intermedio',
    description: 'La tarjeta gira en 3D según la posición del cursor.',
    instructions: [
      'En <strong>index.html</strong>, pon una tarjeta con contenido.',
      'En <strong>script.js</strong>, calcula la rotación basada en la posición del ratón.',
      'En <strong>styles.css</strong>, añade <code>transform-style: preserve-3d</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card3d" style="width:200px;height:250px;background:#2d6a4f;color:white;">Pasa el ratón</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".card3d").addEventListener("mousemove", e => {\n  const card = e.currentTarget;\n  const rect = card.getBoundingClientRect();\n  const x = (e.clientX - rect.left) / rect.width - 0.5;\n  const y = (e.clientY - rect.top) / rect.height - 0.5;\n  card.style.transform = `rotateY(${x*20}deg) rotateX(${-y*20}deg)`;\n});' }
    ]
  },
  {
    id: 'ch69',
    title: 'Cargar más contenido al hacer scroll (infinite scroll)',
    level: 'Avanzado',
    description: 'Detecta cuándo el usuario llega al final de la página y agrega más elementos.',
    instructions: [
      'En <strong>index.html</strong>, ten un contenedor con varios <code>&lt;p&gt;</code> y un sentinel div.',
      'En <strong>script.js</strong>, usa <code>Intersection Observer</code> para añadir más párrafos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="contenedor">\n  <p>Elemento 1</p>\n</div>\n<div id="sentinel" style="height:1px;"></div>' },
      { name: 'script.js', lang: 'js', content: 'const cont = document.getElementById("contenedor");\nconst obs = new IntersectionObserver(entries => {\n  if (entries[0].isIntersecting) {\n    for (let i = 0; i < 5; i++) {\n      const p = document.createElement("p");\n      p.textContent = "Nuevo elemento";\n      cont.appendChild(p);\n    }\n  }\n});\nobs.observe(document.getElementById("sentinel"));' }
    ]
  },
  {
    id: 'ch70',
    title: 'Generador de gradientes CSS',
    level: 'Intermedio',
    description: 'Elige dos colores y muestra un gradiente lineal en tiempo real.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs de color y un div que muestra el fondo.',
      'En <strong>script.js</strong>, actualiza el fondo con <code>linear-gradient</code> al cambiar los colores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="color" id="color1" value="#ff0000">\n<input type="color" id="color2" value="#0000ff">\n<div id="gradiente" style="height:150px;"></div>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const c1 = document.getElementById("color1").value;\n  const c2 = document.getElementById("color2").value;\n  document.getElementById("gradiente").style.background = `linear-gradient(to right, ${c1}, ${c2})`;\n}\ndocument.getElementById("color1").addEventListener("input", actualizar);\ndocument.getElementById("color2").addEventListener("input", actualizar);\nactualizar();' }
    ]
  },
  {
    id: 'ch71',
    title: 'Popup de notificación (toast)',
    level: 'Intermedio',
    description: 'Muestra un pequeño mensaje emergente que desaparece tras unos segundos.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Mostrar notificación" y un div toast oculto.',
      'En <strong>styles.css</strong>, posiciona el toast fijo abajo a la derecha.',
      'En <strong>script.js</strong>, añade una clase visible y luego la remueve con setTimeout.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="mostrarToast">Mostrar notificación</button>\n<div id="toast" class="oculto">¡Operación exitosa!</div>' },
      { name: 'styles.css', lang: 'css', content: '#toast { position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; padding: 15px; border-radius: 5px; }\n.oculto { visibility: hidden; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("mostrarToast").addEventListener("click", () => {\n  const toast = document.getElementById("toast");\n  toast.classList.remove("oculto");\n  setTimeout(() => toast.classList.add("oculto"), 3000);\n});' }
    ]
  },
  {
    id: 'ch72',
    title: 'Calculadora de propinas',
    level: 'Básico',
    description: 'Calcula la propina según el porcentaje y el total de la cuenta.',
    instructions: [
      'En <strong>index.html</strong>, inputs para total y porcentaje, y un botón calcular.',
      'En <strong>script.js</strong>, muestra el monto de propina y el total a pagar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="total" placeholder="Total cuenta">\n<input type="number" id="porcentaje" value="10" placeholder="%">\n<button id="calcular">Calcular</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const total = parseFloat(document.getElementById("total").value);\n  const porc = parseFloat(document.getElementById("porcentaje").value);\n  const propina = total * porc / 100;\n  document.getElementById("resultado").textContent = `Propina: $${propina.toFixed(2)} | Total: $${(total + propina).toFixed(2)}`;\n});' }
    ]
  },
  {
    id: 'ch73',
    title: 'Cambio de fuente dinámico',
    level: 'Básico',
    description: 'Permite al usuario cambiar la fuente de un texto seleccionándola de una lista.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;select&gt;</code> con opciones de fuentes y un párrafo.',
      'En <strong>script.js</strong>, escucha el cambio y modifica <code>style.fontFamily</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="fuente">\n  <option value="Arial">Arial</option>\n  <option value="Courier New">Courier New</option>\n  <option value="Georgia">Georgia</option>\n</select>\n<p id="texto">Este texto cambiará de fuente</p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("fuente").addEventListener("change", function() {\n  document.getElementById("texto").style.fontFamily = this.value;\n});' }
    ]
  },
  {
    id: 'ch74',
    title: 'Contador de palabras en tiempo real',
    level: 'Básico',
    description: 'Muestra el número de palabras y caracteres mientras se escribe en un textarea.',
    instructions: [
      'En <strong>index.html</strong>, un textarea y un span para las estadísticas.',
      'En <strong>script.js</strong>, cuenta palabras y caracteres en cada input.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="texto" rows="5" cols="50"></textarea>\n<p>Palabras: <span id="palabras">0</span> | Caracteres: <span id="caracteres">0</span></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("texto").addEventListener("input", function() {\n  const texto = this.value;\n  document.getElementById("caracteres").textContent = texto.length;\n  document.getElementById("palabras").textContent = texto.trim() === "" ? 0 : texto.trim().split(/\\s+/).length;\n});' }
    ]
  },
  {
    id: 'ch75',
    title: 'Animación de corazón latiendo',
    level: 'Básico',
    description: 'Dibuja un corazón con CSS y hazlo latir con keyframes.',
    instructions: [
      'En <strong>index.html</strong>, crea un div con clase "corazon".',
      'En <strong>styles.css</strong>, usa pseudo-elementos para formar el corazón y <code>animation</code> con scale.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="corazon"></div>' },
      { name: 'styles.css', lang: 'css', content: '.corazon {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  background: red;\n  transform: rotate(45deg);\n  margin: 50px;\n  animation: latido 1s infinite;\n}\n.corazon::before, .corazon::after {\n  content: "";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: red;\n  border-radius: 50%;\n}\n.corazon::before { top: -25px; left: 0; }\n.corazon::after { top: 0; left: -25px; }\n@keyframes latido {\n  0% { transform: rotate(45deg) scale(1); }\n  50% { transform: rotate(45deg) scale(1.3); }\n  100% { transform: rotate(45deg) scale(1); }\n}' }
    ]
  },
  {
    id: 'ch76',
    title: 'Sistema de votación simple',
    level: 'Intermedio',
    description: 'Dos opciones con botones de voto; muestra el total de votos y porcentaje.',
    instructions: [
      'En <strong>index.html</strong>, botones para cada opción y barras de progreso.',
      'En <strong>script.js</strong>, guarda los conteos y actualiza las barras al hacer clic.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="op1">JavaScript</button>\n<button id="op2">Python</button>\n<div>JS: <span id="votos1">0</span> <progress id="bar1" value="0" max="100"></progress></div>\n<div>Python: <span id="votos2">0</span> <progress id="bar2" value="0" max="100"></progress></div>' },
      { name: 'script.js', lang: 'js', content: 'let v1 = 0, v2 = 0;\nfunction actualizar() {\n  const total = v1 + v2 || 1;\n  document.getElementById("votos1").textContent = v1;\n  document.getElementById("votos2").textContent = v2;\n  document.getElementById("bar1").value = v1 / total * 100;\n  document.getElementById("bar2").value = v2 / total * 100;\n}\ndocument.getElementById("op1").addEventListener("click", () => { v1++; actualizar(); });\ndocument.getElementById("op2").addEventListener("click", () => { v2++; actualizar(); });' }
    ]
  },
  {
    id: 'ch77',
    title: 'Plugin de fecha y hora en footer',
    level: 'Básico',
    description: 'Muestra la fecha y hora actual en el pie de página y se actualiza cada minuto.',
    instructions: [
      'En <strong>index.html</strong>, añade un span en el footer.',
      'En <strong>script.js</strong>, actualiza con <code>new Date()</code> cada 60 segundos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<footer>© 2025 - <span id="fechaHora"></span></footer>' },
      { name: 'script.js', lang: 'js', content: 'function mostrar() {\n  document.getElementById("fechaHora").textContent = new Date().toLocaleString();\n}\nmostrar();\nsetInterval(mostrar, 60000);' }
    ]
  },
  {
    id: 'ch78',
    title: 'Buscador de GIFs con la API de Giphy',
    level: 'Avanzado',
    description: 'Busca GIFs usando la API pública de Giphy y los muestra en pantalla.',
    instructions: [
      'En <strong>index.html</strong>, un input y un botón "Buscar", y un div para mostrar resultados.',
      'En <strong>script.js</strong>, haz fetch a la API de Giphy (necesitarás una API key de prueba).',
      'Usa la key pública de prueba "dc6zaTOxFJmzC".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="busqueda" placeholder="Buscar GIF">\n<button id="buscarGif">Buscar</button>\n<div id="gifs"></div>' },
      { name: 'script.js', lang: 'js', content: 'const key = "dc6zaTOxFJmzC"; // key pública de desarrollo\ndocument.getElementById("buscarGif").addEventListener("click", () => {\n  const q = document.getElementById("busqueda").value;\n  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=5`)\n    .then(res => res.json())\n    .then(data => {\n      document.getElementById("gifs").innerHTML = data.data.map(g => `<img src="${g.images.fixed_height_small.url}">`).join("");\n    });\n});' }
    ]
  },
  {
    id: 'ch79',
    title: 'Editor de texto enriquecido (contenteditable)',
    level: 'Intermedio',
    description: 'Crea un área de texto que permita aplicar negrita, cursiva y subrayado con botones.',
    instructions: [
      'En <strong>index.html</strong>, un div con contenteditable="true" y botones de formato.',
      'En <strong>script.js</strong>, usa <code>document.execCommand</code> para modificar el texto seleccionado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="toolbar">\n  <button data-format="bold">N</button>\n  <button data-format="italic">C</button>\n  <button data-format="underline">S</button>\n</div>\n<div id="editor" contenteditable="true" style="border:1px solid #ccc; min-height:100px;">Escribe aquí...</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("#toolbar button").forEach(btn => {\n  btn.addEventListener("click", () => {\n    document.execCommand(btn.dataset.format, false, null);\n  });\n});' }
    ]
  },
  {
    id: 'ch80',
    title: 'Despertador digital',
    level: 'Avanzado',
    description: 'Configura una alarma que suene a una hora especificada, con sonido del navegador.',
    instructions: [
      'En <strong>index.html</strong>, un input de hora y un botón "Activar alarma".',
      'En <strong>script.js</strong>, compara la hora actual con la configurada cada segundo y emite un pitido.',
      'Usa <code>AudioContext</code> o un simple beep.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="time" id="alarmaHora">\n<button id="activar">Activar alarma</button>\n<p id="estado"></p>' },
      { name: 'script.js', lang: 'js', content: 'let alarmaActiva = false;\nlet horaAlarma = null;\ndocument.getElementById("activar").addEventListener("click", () => {\n  horaAlarma = document.getElementById("alarmaHora").value;\n  alarmaActiva = true;\n  document.getElementById("estado").textContent = "Alarma configurada a las " + horaAlarma;\n});\nsetInterval(() => {\n  if (!alarmaActiva) return;\n  const ahora = new Date().toTimeString().slice(0,5);\n  if (ahora === horaAlarma) {\n    alert("¡ALARMA!");\n    alarmaActiva = false;\n  }\n}, 1000);' }
    ]
  },
  {
    id: 'ch81',
    title: 'Efecto de lluvia de partículas',
    level: 'Avanzado',
    description: 'Anima partículas cayendo en un canvas, simulando lluvia.',
    instructions: [
      'En <strong>index.html</strong>, un canvas a pantalla completa.',
      'En <strong>script.js</strong>, crea un array de partículas y actualiza su posición en cada frame.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="lluvia" style="position:fixed;top:0;left:0;"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("lluvia");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst particulas = Array.from({length:100}, () => ({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, velocidad: 2+Math.random()*5 }));\nfunction dibujar() {\n  ctx.clearRect(0,0,canvas.width,canvas.height);\n  particulas.forEach(p => {\n    ctx.fillStyle = "#aaddff";\n    ctx.fillRect(p.x, p.y, 2, 10);\n    p.y += p.velocidad;\n    if (p.y > canvas.height) { p.y = 0; p.x = Math.random()*canvas.width; }\n  });\n  requestAnimationFrame(dibujar);\n}\ndibujar();' }
    ]
  },
  {
    id: 'ch82',
    title: 'Creador de memes (texto sobre imagen)',
    level: 'Intermedio',
    description: 'Sube una imagen y añade texto superior e inferior al estilo meme.',
    instructions: [
      'En <strong>index.html</strong>, un input file, dos inputs de texto y un botón para previsualizar.',
      'En <strong>script.js</strong>, dibuja la imagen y el texto en un canvas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="file" id="imgMeme" accept="image/*"><br>\n<input type="text" id="textoSuperior" placeholder="Texto superior"><br>\n<input type="text" id="textoInferior" placeholder="Texto inferior"><br>\n<button id="generar">Generar meme</button>\n<canvas id="canvasMeme" style="max-width:100%;"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'let img = new Image();\ndocument.getElementById("imgMeme").addEventListener("change", e => {\n  const file = e.target.files[0];\n  const reader = new FileReader();\n  reader.onload = ev => img.src = ev.target.result;\n  reader.readAsDataURL(file);\n});\ndocument.getElementById("generar").addEventListener("click", () => {\n  const canvas = document.getElementById("canvasMeme");\n  const ctx = canvas.getContext("2d");\n  img.onload = () => {\n    canvas.width = img.width;\n    canvas.height = img.height;\n    ctx.drawImage(img, 0, 0);\n    ctx.font = "30px Impact";\n    ctx.fillStyle = "white";\n    ctx.strokeStyle = "black";\n    ctx.lineWidth = 2;\n    ctx.textAlign = "center";\n    ctx.fillText(document.getElementById("textoSuperior").value, canvas.width/2, 50);\n    ctx.strokeText(document.getElementById("textoSuperior").value, canvas.width/2, 50);\n    ctx.fillText(document.getElementById("textoInferior").value, canvas.width/2, canvas.height-20);\n    ctx.strokeText(document.getElementById("textoInferior").value, canvas.width/2, canvas.height-20);\n  };\n});' }
    ]
  },
  {
    id: 'ch83',
    title: 'Gráfico circular simple (pie chart)',
    level: 'Intermedio',
    description: 'Representa porcentajes en un gráfico circular usando SVG.',
    instructions: [
      'En <strong>index.html</strong>, crea un elemento SVG con círculos.',
      'En <strong>script.js</strong>, calcula los ángulos y dibuja segmentos de color.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg id="pie" width="200" height="200"></svg>' },
      { name: 'script.js', lang: 'js', content: 'const svg = document.getElementById("pie");\nconst data = [40, 30, 20, 10];\nconst colores = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];\nlet acum = 0;\ndata.forEach((val, i) => {\n  const angulo = val / 100 * Math.PI * 2;\n  const x1 = 100 + 70 * Math.cos(acum);\n  const y1 = 100 + 70 * Math.sin(acum);\n  acum += angulo;\n  const x2 = 100 + 70 * Math.cos(acum);\n  const y2 = 100 + 70 * Math.sin(acum);\n  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");\n  const grande = angulo > Math.PI ? 1 : 0;\n  path.setAttribute("d", `M 100 100 L ${x1} ${y1} A 70 70 0 ${grande} 1 ${x2} ${y2} Z`);\n  path.setAttribute("fill", colores[i]);\n  svg.appendChild(path);\n});' }
    ]
  },
  {
    id: 'ch84',
    title: 'Gráfico de barras con Canvas',
    level: 'Intermedio',
    description: 'Dibuja un gráfico de barras dinámico con datos introducidos por el usuario.',
    instructions: [
      'En <strong>index.html</strong>, un textarea para ingresar números separados por comas y un canvas.',
      'En <strong>script.js</strong>, lee los datos y dibuja rectángulos proporcionales.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="datos">10,45,30,80,55</textarea>\n<button id="dibujar">Dibujar gráfico</button>\n<canvas id="canvasBar" width="400" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("dibujar").addEventListener("click", () => {\n  const datos = document.getElementById("datos").value.split(",").map(Number);\n  const canvas = document.getElementById("canvasBar");\n  const ctx = canvas.getContext("2d");\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  const max = Math.max(...datos);\n  const ancho = canvas.width / datos.length - 5;\n  datos.forEach((v, i) => {\n    const altura = (v / max) * canvas.height;\n    ctx.fillStyle = "#2d6a4f";\n    ctx.fillRect(i * (ancho+5), canvas.height - altura, ancho, altura);\n  });\n});' }
    ]
  },
  {
    id: 'ch85',
    title: 'Efecto de brillo (shine) sobre imagen',
    level: 'Intermedio',
    description: 'Añade un reflejo diagonal que se mueve al pasar el ratón sobre una imagen.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor de imagen con un pseudo-elemento.',
      'En <strong>styles.css</strong>, usa <code>:before</code> con un gradiente y animación al hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="shine"><img src="https://via.placeholder.com/300"></div>' },
      { name: 'styles.css', lang: 'css', content: '.shine { position:relative; overflow:hidden; display:inline-block; }\n.shine::before {\n  content:"";\n  position:absolute;\n  top:0; left:-100%;\n  width:50%;\n  height:100%;\n  background:linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);\n  transform:skewX(-25deg);\n}\n.shine:hover::before {\n  animation: brillo 1s;\n}\n@keyframes brillo { to { left:150%; } }' }
    ]
  },
  {
    id: 'ch86',
    title: 'Tarjetas expandibles',
    level: 'Intermedio',
    description: 'Al hacer clic, la tarjeta se expande para mostrar contenido adicional.',
    instructions: [
      'En <strong>index.html</strong>, tarjetas con un contenido breve y un div oculto con más información.',
      'En <strong>script.js</strong>, alterna una clase que cambia la altura.',
      'En <strong>styles.css</strong>, transiciones de altura.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tarjeta">\n  <div class="resumen">Título</div>\n  <div class="contenido">Descripción larga que se oculta...</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tarjeta .contenido { max-height: 0; overflow: hidden; transition: max-height 0.3s; }\n.tarjeta.abierta .contenido { max-height: 100px; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".tarjeta").addEventListener("click", function() {\n  this.classList.toggle("abierta");\n});' }
    ]
  },
  {
    id: 'ch87',
    title: 'Barra de progreso circular',
    level: 'Intermedio',
    description: 'Rodea un texto con un círculo que muestra porcentaje de progreso usando SVG.',
    instructions: [
      'En <strong>index.html</strong>, un SVG con un círculo de fondo y otro para el progreso.',
      'En <strong>script.js</strong>, ajusta el dashoffset según el porcentaje.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg id="progresoCircular" width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="8"/>\n  <circle id="progreso" cx="60" cy="60" r="50" fill="none" stroke="#2d6a4f" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="314" />\n</svg>\n<input type="number" id="porcentaje" value="75" max="100">' },
      { name: 'script.js', lang: 'js', content: 'const circulo = document.getElementById("progreso");\nconst perimetro = 2 * Math.PI * 50; // 314.15\ncirculo.style.strokeDasharray = perimetro;\ncirculo.style.strokeDashoffset = perimetro;\ndocument.getElementById("porcentaje").addEventListener("input", function() {\n  const val = Math.min(100, Math.max(0, this.value));\n  circulo.style.strokeDashoffset = perimetro - (val / 100) * perimetro;\n});' }
    ]
  },
  {
    id: 'ch88',
    title: 'Menú tipo acordeón con altura automática',
    level: 'Intermedio',
    description: 'Secciones que se expanden suavemente usando CSS grid o max-height.',
    instructions: [
      'En <strong>index.html</strong>, estructura de divs con encabezado y contenido.',
      'En <strong>script.js</strong>, calcula la altura real y alterna con transiciones.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="acordeon">\n  <div class="item"><h3>Sección 1</h3><div class="contenido">Contenido extenso...</div></div>\n  <div class="item"><h3>Sección 2</h3><div class="contenido">Otro contenido...</div></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.item .contenido { overflow: hidden; max-height: 0; transition: max-height 0.4s ease; }\n.item.abierta .contenido { max-height: 500px; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".item h3").forEach(h3 => {\n  h3.addEventListener("click", () => {\n    h3.parentElement.classList.toggle("abierta");\n  });\n});' }
    ]
  },
  {
    id: 'ch89',
    title: 'Calendario mensual generado por JS',
    level: 'Avanzado',
    description: 'Genera un calendario del mes actual con días correctamente alineados.',
    instructions: [
      'En <strong>index.html</strong>, un div vacío.',
      'En <strong>script.js</strong>, calcula el primer día y el número de días, y pinta la tabla.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="calendario"></div>' },
      { name: 'script.js', lang: 'js', content: 'const hoy = new Date();\nconst mes = hoy.getMonth();\nconst anio = hoy.getFullYear();\nconst primerDia = new Date(anio, mes, 1).getDay();\nconst diasMes = new Date(anio, mes+1, 0).getDate();\nlet html = "<table><tr><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr>";\nfor (let i = 0; i < (primerDia === 0 ? 6 : primerDia-1); i++) html += "<td></td>";\nfor (let dia = 1; dia <= diasMes; dia++) {\n  html += `<td>${dia}</td>`;\n  if ((primerDia + dia - 1) % 7 === 0) html += "</tr><tr>";\n}\nhtml += "</tr></table>";\ndocument.getElementById("calendario").innerHTML = html;' }
    ]
  },
  {
    id: 'ch90',
    title: 'Deslizador de rango con valor numérico',
    level: 'Básico',
    description: 'Un input range que muestra su valor actualizado en tiempo real.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;input type="range"&gt;</code> y un span.',
      'En <strong>script.js</strong>, escucha el evento input y actualiza el span.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="range" id="rango" min="0" max="100" value="50">\n<span id="valor">50</span>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("rango").addEventListener("input", function() {\n  document.getElementById("valor").textContent = this.value;\n});' }
    ]
  },
  {
    id: 'ch91',
    title: 'Cambio de imagen según opción seleccionada',
    level: 'Básico',
    description: 'Al elegir una opción en un select, cambia la imagen mostrada.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;select&gt;</code> con varias opciones y un <code>&lt;img&gt;</code>.',
      'En <strong>script.js</strong>, asigna el src según el valor seleccionado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="selector">\n  <option value="https://via.placeholder.com/150/FF0000">Rojo</option>\n  <option value="https://via.placeholder.com/150/00FF00">Verde</option>\n</select>\n<img id="imagen" src="https://via.placeholder.com/150/FF0000">' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("selector").addEventListener("change", function() {\n  document.getElementById("imagen").src = this.value;\n});' }
    ]
  },
  {
    id: 'ch92',
    title: 'Formulario de varias páginas (wizard)',
    level: 'Avanzado',
    description: 'Divide un formulario largo en pasos con botones "Siguiente" y "Anterior".',
    instructions: [
      'En <strong>index.html</strong>, crea varios fieldset con display none y un indicador de pasos.',
      'En <strong>script.js</strong>, oculta todos menos el actual y muestra el siguiente al avanzar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formWizard">\n  <fieldset class="paso" id="paso1">Nombre: <input type="text"></fieldset>\n  <fieldset class="paso" id="paso2" style="display:none">Email: <input type="email"></fieldset>\n  <fieldset class="paso" id="paso3" style="display:none">Resumen</fieldset>\n  <button type="button" id="siguiente">Siguiente</button>\n  <button type="button" id="anterior" disabled>Anterior</button>\n</form>' },
      { name: 'script.js', lang: 'js', content: 'let pasoActual = 1;\nconst totalPasos = 3;\nfunction mostrarPaso(n) {\n  document.querySelectorAll(".paso").forEach(p => p.style.display = "none");\n  document.getElementById("paso"+n).style.display = "block";\n  document.getElementById("anterior").disabled = n === 1;\n  document.getElementById("siguiente").textContent = n === totalPasos ? "Enviar" : "Siguiente";\n}\ndocument.getElementById("siguiente").addEventListener("click", () => {\n  if (pasoActual < totalPasos) { pasoActual++; mostrarPaso(pasoActual); }\n  else alert("Formulario enviado");\n});\ndocument.getElementById("anterior").addEventListener("click", () => {\n  if (pasoActual > 1) { pasoActual--; mostrarPaso(pasoActual); }\n});\nmostrarPaso(1);' }
    ]
  },
  {
    id: 'ch93',
    title: 'Efecto de partículas al hacer clic',
    level: 'Intermedio',
    description: 'Al hacer clic en cualquier parte, explotan pequeñas partículas de colores.',
    instructions: [
      'En <strong>index.html</strong>, un canvas a pantalla completa.',
      'En <strong>script.js</strong>, agrega partículas en la posición del clic y anímalas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="particulas" style="position:fixed;top:0;left:0;pointer-events:none;"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("particulas");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nlet particulas = [];\ncanvas.addEventListener("click", e => {\n  for (let i = 0; i < 30; i++) {\n    particulas.push({ x: e.clientX, y: e.clientY, vx: (Math.random()-0.5)*8, vy: (Math.random()-0.5)*8, vida: 1 });\n  }\n});\nfunction animar() {\n  ctx.clearRect(0,0,canvas.width,canvas.height);\n  particulas.forEach((p, idx) => {\n    p.x += p.vx;\n    p.y += p.vy;\n    p.vida *= 0.96;\n    ctx.fillStyle = `rgba(255, ${Math.floor(Math.random()*200)}, 0, ${p.vida})`;\n    ctx.beginPath();\n    ctx.arc(p.x, p.y, 4, 0, Math.PI*2);\n    ctx.fill();\n    if (p.vida < 0.02) particulas.splice(idx, 1);\n  });\n  requestAnimationFrame(animar);\n}\nanimar();' }
    ]
  },
  {
    id: 'ch94',
    title: 'Etiquetas de colores personalizados',
    level: 'Básico',
    description: 'Muestra etiquetas (badges) de diferentes colores según el texto.',
    instructions: [
      'En <strong>index.html</strong>, escribe varios span con clase "badge" y un atributo data-color.',
      'En <strong>styles.css</strong>, aplica un color de fondo usando variables CSS.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span class="badge" style="--color:#e74c3c">Urgente</span>\n<span class="badge" style="--color:#2ecc71">Listo</span>\n<span class="badge" style="--color:#f1c40f">Pendiente</span>' },
      { name: 'styles.css', lang: 'css', content: '.badge {\n  background: var(--color);\n  color: white;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n}' }
    ]
  },
  {
    id: 'ch95',
    title: 'Diagrama de flujo simple con CSS',
    level: 'Intermedio',
    description: 'Construye un diagrama de flujo con nodos conectados por líneas usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, divs enlazados con flechas (pueden ser pseudo-elementos).',
      'En <strong>styles.css</strong>, posiciona los nodos y dibuja líneas con bordes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flujo">\n  <div class="nodo">Inicio</div>\n  <div class="flecha"></div>\n  <div class="nodo">Proceso</div>\n  <div class="flecha"></div>\n  <div class="nodo">Fin</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flujo { display: flex; align-items: center; }\n.nodo { padding: 10px 20px; background: #2d6a4f; color: white; border-radius: 5px; }\n.flecha { width: 30px; height: 2px; background: #333; position: relative; }\n.flecha::after { content: ""; position: absolute; right: -5px; top: -4px; border-left: 10px solid #333; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }' }
    ]
  },
  {
    id: 'ch96',
    title: 'Redirección automática con cuenta atrás',
    level: 'Básico',
    description: 'Muestra un mensaje "Serás redirigido en X segundos" y redirige a otra página.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "cuenta".',
      'En <strong>script.js</strong>, decrementa cada segundo y al llegar a 0 usa <code>window.location.href</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cuenta">Serás redirigido en 5 segundos...</div>' },
      { name: 'script.js', lang: 'js', content: 'let segundos = 5;\nsetInterval(() => {\n  segundos--;\n  document.getElementById("cuenta").textContent = `Serás redirigido en ${segundos} segundos...`;\n  if (segundos === 0) window.location.href = "https://www.google.com";\n}, 1000);' }
    ]
  },
  {
    id: 'ch97',
    title: 'Cambio de tamaño de fuente con slider',
    level: 'Básico',
    description: 'Permite agrandar o reducir la fuente de un texto usando un control deslizante.',
    instructions: [
      'En <strong>index.html</strong>, un input range y un párrafo.',
      'En <strong>script.js</strong>, ajusta <code>style.fontSize</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="range" id="tamano" min="12" max="40" value="16">\n<p id="texto">Texto ajustable</p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("tamano").addEventListener("input", function() {\n  document.getElementById("texto").style.fontSize = this.value + "px";\n});' }
    ]
  },
  {
    id: 'ch98',
    title: 'Animación de carga con puntos suspensivos',
    level: 'Básico',
    description: 'Tres puntos que crecen y desaparecen sucesivamente.',
    instructions: [
      'En <strong>index.html</strong>, un span con tres puntos.',
      'En <strong>styles.css</strong>, anima cada punto con un delay distinto usando <code>@keyframes</code> y <code>nth-child</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="carga">Cargando<span class="punto">.</span><span class="punto">.</span><span class="punto">.</span></div>' },
      { name: 'styles.css', lang: 'css', content: '.punto { animation: aparecer 1.4s infinite; }\n.punto:nth-child(2) { animation-delay: 0.2s; }\n.punto:nth-child(3) { animation-delay: 0.4s; }\n@keyframes aparecer { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }' }
    ]
  },
  {
    id: 'ch99',
    title: 'Mapa de calor simple con tabla',
    level: 'Intermedio',
    description: 'Representa una matriz de números con intensidades de color en una tabla.',
    instructions: [
      'En <strong>index.html</strong>, una tabla HTML con números aleatorios.',
      'En <strong>script.js</strong>, colorea cada celda basándose en el valor (más alto = más oscuro).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<table id="calor"></table>' },
      { name: 'script.js', lang: 'js', content: 'const tabla = document.getElementById("calor");\nfor (let i = 0; i < 5; i++) {\n  const fila = tabla.insertRow();\n  for (let j = 0; j < 5; j++) {\n    const celda = fila.insertCell();\n    const valor = Math.floor(Math.random() * 100);\n    celda.textContent = valor;\n    const intensidad = valor / 100;\n    celda.style.background = `rgba(255, 0, 0, ${intensidad})`;\n  }\n}' }
    ]
  },
  {
    id: 'ch100',
    title: 'Integración de fuente de Google Fonts',
    level: 'Básico',
    description: 'Carga una fuente externa de Google Fonts y aplícala a toda la página.',
    instructions: [
      'En <strong>index.html</strong>, enlaza la hoja de estilo de Google Fonts en el <code>&lt;head&gt;</code>.',
      'En <strong>styles.css</strong>, asigna la fuente al body.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">\n<h1>Texto con Montserrat</h1>' },
      { name: 'styles.css', lang: 'css', content: 'body { font-family: "Montserrat", sans-serif; }' }
    ]
  },
    {
    id: 'ch101',
    title: 'Estrella de calificación interactiva',
    level: 'Intermedio',
    description: 'Crea 5 estrellas que se iluminen al pasar el ratón y permitan seleccionar una valoración.',
    instructions: [
      'En <strong>index.html</strong>, coloca 5 span con la clase "estrella" y un símbolo ☆.',
      'En <strong>styles.css</strong>, cambia el color a dorado cuando tenga la clase "activa".',
      'En <strong>script.js</strong>, al hacer clic marca todas las anteriores y guarda el valor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="estrellas">\n  <span class="estrella" data-valor="1">☆</span>\n  <span class="estrella" data-valor="2">☆</span>\n  <span class="estrella" data-valor="3">☆</span>\n  <span class="estrella" data-valor="4">☆</span>\n  <span class="estrella" data-valor="5">☆</span>\n</div>\n<p id="puntuacion"></p>' },
      { name: 'styles.css', lang: 'css', content: '.estrella { font-size: 2rem; cursor: pointer; color: #ccc; }\n.estrella.activa { color: #f1c40f; }' },
      { name: 'script.js', lang: 'js', content: 'const estrellas = document.querySelectorAll(".estrella");\nestrellas.forEach(estrella => {\n  estrella.addEventListener("click", () => {\n    const valor = parseInt(estrella.dataset.valor);\n    estrellas.forEach((e, i) => e.classList.toggle("activa", i < valor));\n    document.getElementById("puntuacion").textContent = `Valoración: ${valor} de 5`;\n  });\n});' }
    ]
  },
  {
    id: 'ch102',
    title: 'Generador de paleta de colores hex',
    level: 'Básico',
    description: 'Genera una paleta de 5 colores aleatorios y muestra sus códigos hexadecimales.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor vacío y un botón "Generar".',
      'En <strong>script.js</strong>, crea 5 divs con fondo aleatorio y su código hex.',
      'En <strong>styles.css</strong>, estiliza los cuadros de color.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="generar">Generar paleta</button>\n<div id="paleta" class="paleta"></div>' },
      { name: 'styles.css', lang: 'css', content: '.paleta { display: flex; gap: 10px; }\n.color-box { width: 80px; height: 80px; display: flex; align-items: flex-end; justify-content: center; font-size: 0.8rem; color: #fff; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("generar").addEventListener("click", () => {\n  const paleta = document.getElementById("paleta");\n  paleta.innerHTML = "";\n  for (let i = 0; i < 5; i++) {\n    const hex = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");\n    const div = document.createElement("div");\n    div.className = "color-box";\n    div.style.background = hex;\n    div.textContent = hex;\n    paleta.appendChild(div);\n  }\n});' }
    ]
  },
  {
    id: 'ch103',
    title: 'Botón con efecto de onda al hacer clic',
    level: 'Intermedio',
    description: 'Crea un botón que muestre una onda expansiva desde el punto donde se hace clic.',
    instructions: [
      'En <strong>index.html</strong>, un botón con clase "ripple-btn".',
      'En <strong>styles.css</strong>, posiciona el pseudo-elemento y anima su escala.',
      'En <strong>script.js</strong>, al hacer clic crea un span que se posiciona en el cursor y desaparece.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="ripple-btn">Haz clic</button>' },
      { name: 'styles.css', lang: 'css', content: '.ripple-btn { position: relative; overflow: hidden; padding: 12px 24px; background: #2d6a4f; color: white; border: none; cursor: pointer; }\n.ripple-btn .onda { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.4); transform: scale(0); animation: onda 0.6s linear; }\n@keyframes onda { to { transform: scale(4); opacity: 0; } }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".ripple-btn").addEventListener("click", function(e) {\n  const btn = e.currentTarget;\n  const rect = btn.getBoundingClientRect();\n  const x = e.clientX - rect.left;\n  const y = e.clientY - rect.top;\n  const onda = document.createElement("span");\n  onda.className = "onda";\n  onda.style.left = x + "px";\n  onda.style.top = y + "px";\n  btn.appendChild(onda);\n  setTimeout(() => onda.remove(), 600);\n});' }
    ]
  },
  {
    id: 'ch104',
    title: 'Recortar imagen con forma de círculo',
    level: 'Básico',
    description: 'Muestra una imagen recortada en forma circular usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, añade una imagen con clase "circulo".',
      'En <strong>styles.css</strong>, aplica <code>border-radius: 50%</code> y <code>object-fit: cover</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/200" class="circulo" width="200" height="200">' },
      { name: 'styles.css', lang: 'css', content: '.circulo { border-radius: 50%; object-fit: cover; }' }
    ]
  },
  {
    id: 'ch105',
    title: 'Efecto mach (glitch) en texto',
    level: 'Intermedio',
    description: 'Simula un efecto glitch en un título usando pseudo-elementos desplazados.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con clase "glitch".',
      'En <strong>styles.css</strong>, crea <code>::before</code> y <code>::after</code> con el mismo texto, desplazados y coloreados, y una animación de movimiento.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="glitch" data-text="GLITCH">GLITCH</h1>' },
      { name: 'styles.css', lang: 'css', content: '.glitch { position: relative; font-size: 3rem; }\n.glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; }\n.glitch::before { color: red; z-index: -1; animation: glitch-move 2s infinite reverse; }\n.glitch::after { color: blue; z-index: -2; animation: glitch-move 3s infinite; }\n@keyframes glitch-move { 0% { transform: translate(0); } 20% { transform: translate(-3px, 3px); } 40% { transform: translate(3px, -2px); } 60% { transform: translate(-2px, -3px); } 80% { transform: translate(3px, 2px); } 100% { transform: translate(0); } }' }
    ]
  },
  {
    id: 'ch106',
    title: 'Sistema de pestañas (tabs) con CSS puro',
    level: 'Intermedio',
    description: 'Crea pestañas funcionales usando solo radio buttons y CSS.',
    instructions: [
      'En <strong>index.html</strong>, inputs type="radio" con labels, y divs de contenido.',
      'En <strong>styles.css</strong>, oculta los radios, estiliza las labels y muestra el contenido correspondiente con <code>:checked ~</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tabs-css">\n  <input type="radio" id="tab1" name="tabs" checked>\n  <label for="tab1">Tab 1</label>\n  <input type="radio" id="tab2" name="tabs">\n  <label for="tab2">Tab 2</label>\n  <div class="content" id="content1">Contenido 1</div>\n  <div class="content" id="content2">Contenido 2</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tabs-css input { display: none; }\n.tabs-css label { display: inline-block; padding: 10px; background: #eee; cursor: pointer; }\n.tabs-css label:hover { background: #ddd; }\n.tabs-css input:checked + label { background: #2d6a4f; color: white; }\n.tabs-css .content { display: none; padding: 15px; border: 1px solid #ccc; }\n#tab1:checked ~ #content1 { display: block; }\n#tab2:checked ~ #content2 { display: block; }' }
    ]
  },
  {
    id: 'ch107',
    title: 'Lista de tareas con persistencia en localStorage',
    level: 'Intermedio',
    description: 'Crea un to-do list que guarde las tareas en localStorage y las recupere al recargar.',
    instructions: [
      'En <strong>index.html</strong>, input, botón "Agregar" y ul.',
      'En <strong>script.js</strong>, carga las tareas de localStorage, permite agregar y eliminar, guarda en cada cambio.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tareaInput" placeholder="Nueva tarea">\n<button id="agregar">Agregar</button>\n<ul id="listaTareas"></ul>' },
      { name: 'script.js', lang: 'js', content: 'const lista = document.getElementById("listaTareas");\nlet tareas = JSON.parse(localStorage.getItem("tareas")) || [];\nfunction render() {\n  lista.innerHTML = tareas.map((t, i) => `<li>${t} <button data-index="${i}">X</button></li>`).join("");\n  localStorage.setItem("tareas", JSON.stringify(tareas));\n}\nlista.addEventListener("click", e => {\n  if (e.target.tagName === "BUTTON") {\n    tareas.splice(e.target.dataset.index, 1);\n    render();\n  }\n});\ndocument.getElementById("agregar").addEventListener("click", () => {\n  const val = document.getElementById("tareaInput").value.trim();\n  if (val) { tareas.push(val); render(); document.getElementById("tareaInput").value = ""; }\n});\nrender();' }
    ]
  },
  {
    id: 'ch108',
    title: 'Efecto de carga con barra de progreso animada',
    level: 'Básico',
    description: 'Muestra una barra de progreso que se llena gradualmente hasta el 100%.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor y otro interno con clase "progreso".',
      'En <strong>styles.css</strong>, anima el ancho del div interno con keyframes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="barra"><div class="progreso"></div></div>' },
      { name: 'styles.css', lang: 'css', content: '.barra { width: 300px; height: 20px; background: #eee; border-radius: 10px; overflow: hidden; }\n.progreso { height: 100%; background: #2d6a4f; animation: cargar 3s forwards; }\n@keyframes cargar { from { width: 0; } to { width: 100%; } }' }
    ]
  },
  {
    id: 'ch109',
    title: 'Calculadora de IMC',
    level: 'Básico',
    description: 'Calcula el índice de masa corporal a partir de peso y altura.',
    instructions: [
      'En <strong>index.html</strong>, inputs para peso (kg) y altura (cm), botón y párrafo de resultado.',
      'En <strong>script.js</strong>, calcula IMC = peso / (altura/100)² y clasifícalo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="peso" placeholder="Peso kg">\n<input type="number" id="altura" placeholder="Altura cm">\n<button id="calcular">Calcular IMC</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const peso = parseFloat(document.getElementById("peso").value);\n  const altura = parseFloat(document.getElementById("altura").value) / 100;\n  const imc = peso / (altura * altura);\n  let clasificacion = "";\n  if (imc < 18.5) clasificacion = "Bajo peso";\n  else if (imc < 25) clasificacion = "Normal";\n  else if (imc < 30) clasificacion = "Sobrepeso";\n  else clasificacion = "Obesidad";\n  document.getElementById("resultado").textContent = `IMC: ${imc.toFixed(1)} (${clasificacion})`;\n});' }
    ]
  },
  {
    id: 'ch110',
    title: 'Juego de memoria con cartas',
    level: 'Avanzado',
    description: 'Crea un memorama donde debes emparejar cartas iguales.',
    instructions: [
      'En <strong>index.html</strong>, divs con clase "carta" y atributos data-par que guardan el valor.',
      'En <strong>styles.css</strong>, oculta el reverso y rota al hacer clic.',
      'En <strong>script.js</strong>, maneja la lógica de volteo y comparación.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tablero">\n  <div class="carta" data-par="1">🍎</div>\n  <div class="carta" data-par="1">🍎</div>\n  <div class="carta" data-par="2">🍋</div>\n  <div class="carta" data-par="2">🍋</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tablero { display: grid; grid-template-columns: repeat(2, 100px); gap: 10px; }\n.carta { width: 100px; height: 100px; background: #2d6a4f; color: transparent; display: flex; align-items: center; justify-content: center; font-size: 2rem; cursor: pointer; border-radius: 10px; }\n.carta.volteada { background: #fff; color: black; }' },
      { name: 'script.js', lang: 'js', content: 'let volteadas = [];\nlet bloqueado = false;\ndocument.querySelectorAll(".carta").forEach(c => {\n  c.addEventListener("click", () => {\n    if (bloqueado || c.classList.contains("volteada")) return;\n    c.classList.add("volteada");\n    volteadas.push(c);\n    if (volteadas.length === 2) {\n      if (volteadas[0].dataset.par === volteadas[1].dataset.par) {\n        volteadas = [];\n      } else {\n        bloqueado = true;\n        setTimeout(() => {\n          volteadas.forEach(c => c.classList.remove("volteada"));\n          volteadas = [];\n          bloqueado = false;\n        }, 800);\n      }\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch111',
    title: 'Slider de testimonios con pausa al hover',
    level: 'Intermedio',
    description: 'Un carrusel automático que se pausa al poner el ratón encima y continúa al quitarlo.',
    instructions: [
      'En <strong>index.html</strong>, varios divs con clase "slide".',
      'En <strong>script.js</strong>, rotación automática con setInterval, detenida en mouseenter y reanudada en mouseleave.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="carrusel">\n  <div class="slide activo">Testimonio 1</div>\n  <div class="slide">Testimonio 2</div>\n  <div class="slide">Testimonio 3</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.carrusel { position: relative; height: 60px; overflow: hidden; }\n.slide { display: none; padding: 20px; background: #eee; }\n.slide.activo { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const slides = document.querySelectorAll(".slide");\nlet idx = 0;\nlet intervalo = setInterval(siguiente, 3000);\ndocument.querySelector(".carrusel").addEventListener("mouseenter", () => clearInterval(intervalo));\ndocument.querySelector(".carrusel").addEventListener("mouseleave", () => intervalo = setInterval(siguiente, 3000));\nfunction siguiente() {\n  slides[idx].classList.remove("activo");\n  idx = (idx + 1) % slides.length;\n  slides[idx].classList.add("activo");\n}' }
    ]
  },
  {
    id: 'ch112',
    title: 'Fondo animado con formas geométricas',
    level: 'Intermedio',
    description: 'Usa CSS para crear figuras (círculos, triángulos) que floten con animaciones.',
    instructions: [
      'En <strong>index.html</strong>, varios divs con clase "forma".',
      'En <strong>styles.css</strong>, divs con border-radius o bordes para crear círculo y triángulo, y animaciones con desplazamiento y rotación.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="fondo-animado">\n  <div class="forma circulo"></div>\n  <div class="forma triangulo"></div>\n  <div class="forma circulo2"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.fondo-animado { position: relative; height: 200px; overflow: hidden; background: #1e1e2e; }\n.forma { position: absolute; }\n.circulo { width: 50px; height: 50px; background: rgba(212, 175, 55, 0.3); border-radius: 50%; animation: flotar 5s infinite alternate; left: 20px; top: 50px; }\n.triangulo { width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid rgba(45, 106, 79, 0.4); animation: flotar 7s infinite alternate; left: 120px; top: 30px; }\n.circulo2 { width: 30px; height: 30px; background: rgba(231, 76, 60, 0.2); border-radius: 50%; animation: flotar 4s infinite alternate; left: 200px; top: 80px; }\n@keyframes flotar { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(30px) rotate(180deg); } }' }
    ]
  },
  {
    id: 'ch113',
    title: 'Sombra de tarjeta que se levanta al hacer hover',
    level: 'Básico',
    description: 'Eleva una tarjeta con una sombra más grande al pasar el ratón.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "card".',
      'En <strong>styles.css</strong>, transición de box-shadow y transform.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card">Tarjeta</div>' },
      { name: 'styles.css', lang: 'css', content: '.card { padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: box-shadow 0.3s, transform 0.3s; }\n.card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.3); transform: translateY(-5px); }' }
    ]
  },
  {
    id: 'ch114',
    title: 'Conversor de unidades (km a millas)',
    level: 'Básico',
    description: 'Convierte kilómetros a millas y viceversa.',
    instructions: [
      'En <strong>index.html</strong>, un input numérico, un select para elegir "km a millas" o "millas a km", y un botón.',
      'En <strong>script.js</strong>, realiza la conversión y muestra el resultado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="valor" placeholder="0">\n<select id="conversion">\n  <option value="km-millas">km → millas</option>\n  <option value="millas-km">millas → km</option>\n</select>\n<button id="convertir">Convertir</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("convertir").addEventListener("click", () => {\n  const valor = parseFloat(document.getElementById("valor").value);\n  const tipo = document.getElementById("conversion").value;\n  let resultado = 0;\n  if (tipo === "km-millas") resultado = valor * 0.621371;\n  else resultado = valor / 0.621371;\n  document.getElementById("resultado").textContent = `${valor} → ${resultado.toFixed(2)}`;\n});' }
    ]
  },
  {
    id: 'ch115',
    title: 'Campo de búsqueda con autocompletado falso',
    level: 'Intermedio',
    description: 'Simula un autocompletado filtrando una lista de sugerencias mientras escribes.',
    instructions: [
      'En <strong>index.html</strong>, un input y un div para sugerencias.',
      'En <strong>script.js</strong>, filtra un array predefinido según el texto y muestra las coincidencias en un dropdown.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="busqueda" placeholder="Buscar...">\n<div id="sugerencias"></div>' },
      { name: 'styles.css', lang: 'css', content: '#sugerencias { border: 1px solid #ccc; max-height: 150px; overflow-y: auto; position: absolute; background: white; z-index: 10; }\n.sugerencia { padding: 8px; cursor: pointer; }\n.sugerencia:hover { background: #eee; }' },
      { name: 'script.js', lang: 'js', content: 'const palabras = ["manzana", "naranja", "plátano", "mango", "mandarina", "pera", "piña"];\nconst input = document.getElementById("busqueda");\nconst sugerencias = document.getElementById("sugerencias");\ninput.addEventListener("input", () => {\n  const texto = input.value.toLowerCase();\n  sugerencias.innerHTML = palabras.filter(p => p.startsWith(texto)).map(p => `<div class="sugerencia">${p}</div>`).join("");\n});\nsugerencias.addEventListener("click", e => {\n  if (e.target.classList.contains("sugerencia")) {\n    input.value = e.target.textContent;\n    sugerencias.innerHTML = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch116',
    title: 'Botones de compartir en redes sociales',
    level: 'Básico',
    description: 'Crea enlaces que abran ventanas de compartir en Twitter, Facebook y WhatsApp.',
    instructions: [
      'En <strong>index.html</strong>, tres enlaces con iconos (pueden ser texto) y href con URLs de compartir.',
      'Las URLs deben incluir la página actual y un texto predefinido.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<a href="https://twitter.com/intent/tweet?url=URL&text=Texto" target="_blank">Twitter</a>\n<a href="https://www.facebook.com/sharer/sharer.php?u=URL" target="_blank">Facebook</a>\n<a href="https://api.whatsapp.com/send?text=Texto%20URL" target="_blank">WhatsApp</a>' },
      { name: 'script.js', lang: 'js', content: '// Las URLs ya están en el HTML, pero puedes dinamizarlas con JS:\nconst url = encodeURIComponent(window.location.href);\nconst texto = encodeURIComponent("Mira esto");\ndocument.querySelector("a[href*=\'twitter\']").href = `https://twitter.com/intent/tweet?url=${url}&text=${texto}`;\ndocument.querySelector("a[href*=\'facebook\']").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;\ndocument.querySelector("a[href*=\'whatsapp\']").href = `https://api.whatsapp.com/send?text=${texto}%20${url}`;' }
    ]
  },
  {
    id: 'ch117',
    title: 'Tabla de multiplicar interactiva',
    level: 'Básico',
    description: 'Elige un número y muestra su tabla de multiplicar del 1 al 10.',
    instructions: [
      'En <strong>index.html</strong>, un input numérico y un div para mostrar la tabla.',
      'En <strong>script.js</strong>, genera la tabla al cambiar el número o al presionar un botón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="numero" value="5" min="1">\n<button id="mostrar">Mostrar tabla</button>\n<div id="tabla"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("mostrar").addEventListener("click", () => {\n  const num = parseInt(document.getElementById("numero").value);\n  let html = "";\n  for (let i = 1; i <= 10; i++) html += `<p>${num} x ${i} = ${num * i}</p>`;\n  document.getElementById("tabla").innerHTML = html;\n});' }
    ]
  },
  {
    id: 'ch118',
    title: 'Efecto de desplazamiento suave con anclas offset',
    level: 'Básico',
    description: 'Al hacer clic en un enlace, la página se desplaza suavemente restando un offset fijo (por header).',
    instructions: [
      'En <strong>index.html</strong>, enlace a #seccion y un div seccion más abajo con un header fijo.',
      'En <strong>script.js</strong>, previene el comportamiento default y usa scrollTo con behavior smooth y top ajustado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<header style="position:fixed;top:0;background:white;width:100%;">Cabecera</header>\n<a href="#seccion">Ir a sección</a>\n<div id="seccion" style="margin-top:800px;">Sección destino</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector("a[href=\'#seccion\']").addEventListener("click", e => {\n  e.preventDefault();\n  const target = document.querySelector("#seccion");\n  const offset = 60; // altura del header\n  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;\n  window.scrollTo({ top, behavior: "smooth" });\n});' }
    ]
  },
  {
    id: 'ch119',
    title: 'Galería de imágenes con filtro por categoría',
    level: 'Intermedio',
    description: 'Muestra imágenes filtradas al hacer clic en botones de categoría.',
    instructions: [
      'En <strong>index.html</strong>, botones con data-categoria y varias img con data-categoria.',
      'En <strong>script.js</strong>, al hacer clic muestra solo las que coinciden o todas si selecciona "todas".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button data-categoria="todas">Todas</button>\n<button data-categoria="naturaleza">Naturaleza</button>\n<button data-categoria="ciudad">Ciudad</button>\n<div class="galeria">\n  <img src="https://via.placeholder.com/150?text=Naturaleza" data-categoria="naturaleza">\n  <img src="https://via.placeholder.com/150?text=Ciudad" data-categoria="ciudad">\n  <img src="https://via.placeholder.com/150?text=Naturaleza2" data-categoria="naturaleza">\n</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("[data-categoria]").forEach(btn => {\n  btn.addEventListener("click", function() {\n    const cat = this.dataset.categoria;\n    document.querySelectorAll(".galeria img").forEach(img => {\n      img.style.display = (cat === "todas" || img.dataset.categoria === cat) ? "inline-block" : "none";\n    });\n  });\n});' }
    ]
  },
  {
    id: 'ch120',
    title: 'Mapa conceptual con listas anidadas',
    level: 'Básico',
    description: 'Crea un mapa conceptual simple usando listas HTML anidadas y estilos.',
    instructions: [
      'En <strong>index.html</strong>, ul y li anidados.',
      'En <strong>styles.css</strong>, conecta los nodos con líneas usando bordes izquierdos y pseudo-elementos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul class="arbol">\n  <li>Raíz\n    <ul>\n      <li>Rama 1</li>\n      <li>Rama 2</li>\n    </ul>\n  </li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: '.arbol, .arbol ul { list-style: none; position: relative; }\n.arbol li { padding: 5px 0; position: relative; }\n.arbol li::before { content: ""; position: absolute; left: -15px; top: 0; border-left: 1px solid #2d6a4f; height: 100%; }\n.arbol ul { margin-left: 20px; }' }
    ]
  },
  {
    id: 'ch121',
    title: 'Contador de visitas simulado con localStorage',
    level: 'Básico',
    description: 'Muestra cuántas veces has visitado la página (almacenado en localStorage).',
    instructions: [
      'En <strong>index.html</strong>, un span para el contador.',
      'En <strong>script.js</strong>, incrementa un valor guardado en localStorage cada vez que carga.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Has visitado esta página <span id="contador">0</span> veces.</p>' },
      { name: 'script.js', lang: 'js', content: 'let visitas = parseInt(localStorage.getItem("visitas")) || 0;\nvisitas++;\nlocalStorage.setItem("visitas", visitas);\ndocument.getElementById("contador").textContent = visitas;' }
    ]
  },
  {
    id: 'ch122',
    title: 'Validación de formulario con mensajes de error bajo campos',
    level: 'Intermedio',
    description: 'Formulario que valida campos obligatorios y formato email al enviar.',
    instructions: [
      'En <strong>index.html</strong>, formulario con nombre, email y mensaje. Cada uno con un span de error.',
      'En <strong>script.js</strong>, al hacer submit valida y muestra errores, evita envío si hay fallos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formulario">\n  <input type="text" id="nombre" placeholder="Nombre"><span class="error"></span><br>\n  <input type="email" id="email" placeholder="Email"><span class="error"></span><br>\n  <textarea id="mensaje" placeholder="Mensaje"></textarea><span class="error"></span><br>\n  <button type="submit">Enviar</button>\n</form>' },
      { name: 'styles.css', lang: 'css', content: '.error { color: red; font-size: 0.8rem; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("formulario").addEventListener("submit", function(e) {\n  e.preventDefault();\n  let valido = true;\n  const nombre = document.getElementById("nombre");\n  const email = document.getElementById("email");\n  const mensaje = document.getElementById("mensaje");\n  document.querySelectorAll(".error").forEach(span => span.textContent = "");\n  if (nombre.value.trim() === "") { nombre.nextElementSibling.textContent = "Nombre requerido"; valido = false; }\n  if (!/\\S+@\\S+\\.\\S+/.test(email.value)) { email.nextElementSibling.textContent = "Email inválido"; valido = false; }\n  if (mensaje.value.trim() === "") { mensaje.nextElementSibling.textContent = "Mensaje requerido"; valido = false; }\n  if (valido) alert("Formulario enviado");\n});' }
    ]
  },
  {
    id: 'ch123',
    title: 'Tarjeta de perfil con foto y descripción',
    level: 'Básico',
    description: 'Diseña una tarjeta de perfil con foto, nombre, profesión y enlaces sociales.',
    instructions: [
      'En <strong>index.html</strong>, estructura con divs y una imagen.',
      'En <strong>styles.css</strong>, centra el texto, redondea la imagen y coloca los enlaces uno al lado del otro.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="perfil">\n  <img src="https://via.placeholder.com/100" class="avatar">\n  <h2>Juan Pérez</h2>\n  <p>Desarrollador Web</p>\n  <div class="social">\n    <a href="#">Twitter</a>\n    <a href="#">LinkedIn</a>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.perfil { text-align: center; background: #f4f4f4; padding: 20px; border-radius: 10px; }\n.avatar { border-radius: 50%; width: 100px; height: 100px; object-fit: cover; }\n.social a { margin: 0 10px; text-decoration: none; }' }
    ]
  },
  {
    id: 'ch124',
    title: 'Efecto de texto neón con CSS',
    level: 'Básico',
    description: 'Aplica un efecto de neón a un título usando text-shadow y animación.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con clase "neon".',
      'En <strong>styles.css</strong>, múltiples sombras de colores intensos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="neon">NEÓN</h1>' },
      { name: 'styles.css', lang: 'css', content: '.neon {\n  color: #fff;\n  text-shadow: 0 0 5px #0fa, 0 0 10px #0fa, 0 0 20px #0fa, 0 0 40px #0fa, 0 0 80px #0fa;\n}' }
    ]
  },
  {
    id: 'ch125',
    title: 'Imagen con efecto de voltereta 3D',
    level: 'Intermedio',
    description: 'Haz que una imagen gire 180 grados al hacer hover mostrando su reverso.',
    instructions: [
      'En <strong>index.html</strong>, contenedor flip con imagen y un div atrás.',
      'En <strong>styles.css</strong>, perspective y transform rotateY al hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flip-3d">\n  <div class="cara frontal"><img src="https://via.placeholder.com/150"></div>\n  <div class="cara trasera">Info extra</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flip-3d { perspective: 600px; width: 150px; height: 150px; }\n.flip-3d > div { position: absolute; backface-visibility: hidden; transition: transform 0.6s; }\n.trasera { transform: rotateY(180deg); }\n.flip-3d:hover .frontal { transform: rotateY(180deg); }\n.flip-3d:hover .trasera { transform: rotateY(0deg); }' }
    ]
  },
  {
    id: 'ch126',
    title: 'Lista de reproducción de audio con una sola canción',
    level: 'Básico',
    description: 'Incrusta un audio y crea controles personalizados con HTML y JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, un elemento audio y botones play/pause, volumen, barra de progreso.',
      'En <strong>script.js</strong>, conecta los controles al elemento audio.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<audio id="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>\n<button id="play">▶</button>\n<button id="pause">⏸</button>\n<input type="range" id="volumen" min="0" max="1" step="0.1" value="1">' },
      { name: 'script.js', lang: 'js', content: 'const audio = document.getElementById("audio");\ndocument.getElementById("play").addEventListener("click", () => audio.play());\ndocument.getElementById("pause").addEventListener("click", () => audio.pause());\ndocument.getElementById("volumen").addEventListener("input", e => audio.volume = e.target.value);' }
    ]
  },
  {
    id: 'ch127',
    title: 'Calculadora de área de un círculo',
    level: 'Básico',
    description: 'Pide el radio y calcula el área del círculo.',
    instructions: [
      'En <strong>index.html</strong>, un input radio y un botón calcular.',
      'En <strong>script.js</strong>, area = π * radio².'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="radio" placeholder="Radio">\n<button id="calcular">Calcular área</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const r = parseFloat(document.getElementById("radio").value);\n  const area = Math.PI * r * r;\n  document.getElementById("resultado").textContent = `Área: ${area.toFixed(2)}`;\n});' }
    ]
  },
  {
    id: 'ch128',
    title: 'Adivinar la capital',
    level: 'Intermedio',
    description: 'Juego donde el programa elige una capital y el usuario intenta adivinar el país.',
    instructions: [
      'En <strong>index.html</strong>, input y botón verificar.',
      'En <strong>script.js</strong>, array de capitales y países, elige una al azar, compara respuesta.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Adivina el país de esta capital: <span id="capital"></span></p>\n<input id="respuesta" placeholder="País">\n<button id="verificar">Verificar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'const datos = { Madrid: "España", París: "Francia", Roma: "Italia", Berlín: "Alemania" };\nconst capitales = Object.keys(datos);\nlet actual = capitales[Math.floor(Math.random() * capitales.length)];\ndocument.getElementById("capital").textContent = actual;\ndocument.getElementById("verificar").addEventListener("click", () => {\n  const res = document.getElementById("respuesta").value.trim();\n  document.getElementById("resultado").textContent = (res === datos[actual]) ? "¡Correcto!" : "Incorrecto";\n});' }
    ]
  },
  {
    id: 'ch129',
    title: 'Cambio de imagen según tamaño de pantalla (picture element)',
    level: 'Básico',
    description: 'Usa el elemento picture para mostrar diferentes imágenes según la resolución.',
    instructions: [
      'En <strong>index.html</strong>, coloca un <code>&lt;picture&gt;</code> con source media y srcset.',
      'No necesita JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<picture>\n  <source media="(min-width: 650px)" srcset="https://via.placeholder.com/600x300">\n  <img src="https://via.placeholder.com/300x150" alt="Imagen adaptable">\n</picture>' }
    ]
  },
  {
    id: 'ch130',
    title: 'Menú con subrayado animado al pasar el ratón',
    level: 'Básico',
    description: 'Enlaces de navegación que muestran una línea que se desliza debajo al hacer hover.',
    instructions: [
      'En <strong>index.html</strong>, nav con enlaces.',
      'En <strong>styles.css</strong>, cada enlace con un pseudo-elemento ::after que escala al hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <a href="#">Inicio</a>\n  <a href="#">Servicios</a>\n  <a href="#">Contacto</a>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: 'a { text-decoration: none; position: relative; padding: 5px 10px; }\na::after { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: #2d6a4f; transform: scaleX(0); transition: transform 0.3s; }\na:hover::after { transform: scaleX(1); }' }
    ]
  },
  {
    id: 'ch131',
    title: 'Cuenta atrás para año nuevo',
    level: 'Intermedio',
    description: 'Muestra los días, horas, minutos y segundos restantes hasta el 1 de enero del próximo año.',
    instructions: [
      'En <strong>index.html</strong>, divs para días, horas, minutos y segundos.',
      'En <strong>script.js</strong>, calcula la diferencia entre la fecha actual y el 1 de enero del siguiente año, actualiza cada segundo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cuenta-regresiva">\n  <span id="dias"></span>d\n  <span id="horas"></span>h\n  <span id="minutos"></span>m\n  <span id="segundos"></span>s\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const fin = new Date(new Date().getFullYear() + 1, 0, 1);\nfunction actualizar() {\n  const ahora = new Date();\n  const diff = fin - ahora;\n  if (diff <= 0) { document.getElementById("cuenta-regresiva").innerHTML = "¡Feliz Año Nuevo!"; return; }\n  const d = Math.floor(diff / (1000*60*60*24));\n  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));\n  const m = Math.floor((diff % (1000*60*60)) / (1000*60));\n  const s = Math.floor((diff % (1000*60)) / 1000);\n  document.getElementById("dias").textContent = d;\n  document.getElementById("horas").textContent = h;\n  document.getElementById("minutos").textContent = m;\n  document.getElementById("segundos").textContent = s;\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch132',
    title: 'Efecto typing con cursor parpadeante',
    level: 'Básico',
    description: 'Simula escritura con un cursor que parpadea al final del texto.',
    instructions: [
      'En <strong>index.html</strong>, un span vacío.',
      'En <strong>script.js</strong>, añade caracteres uno a uno y el cursor al final.',
      'En <strong>styles.css</strong>, usa animación para el cursor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="texto"></span><span class="cursor">|</span>' },
      { name: 'styles.css', lang: 'css', content: '.cursor { animation: blink 1s infinite; }\n@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }' },
      { name: 'script.js', lang: 'js', content: 'const texto = "Cargando...";\nlet i = 0;\nconst span = document.getElementById("texto");\nsetInterval(() => {\n  if (i < texto.length) { span.textContent += texto.charAt(i); i++; }\n}, 150);' }
    ]
  },
  {
    id: 'ch133',
    title: 'Adivina la palabra (juego del ahorcado básico)',
    level: 'Avanzado',
    description: 'Juego de ahorcado con una palabra secreta y entrada de letras.',
    instructions: [
      'En <strong>index.html</strong>, muestra guiones y un input para letras.',
      'En <strong>script.js</strong>, mantén un array de letras correctas e incorrectas, actualiza la palabra oculta y dibuja algo simple (o cuenta intentos).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Palabra: <span id="palabra"></span></p>\n<input type="text" id="letra" maxlength="1">\n<button id="intentar">Intentar</button>\n<p id="incorrectas"></p><p id="mensaje"></p>' },
      { name: 'script.js', lang: 'js', content: 'const secreta = "javascript";\nlet aciertos = Array(secreta.length).fill("_");\nlet errores = [];\nfunction render() {\n  document.getElementById("palabra").textContent = aciertos.join(" ");\n  document.getElementById("incorrectas").textContent = "Fallos: " + errores.join(", ");\n  if (!aciertos.includes("_")) document.getElementById("mensaje").textContent = "¡Ganaste!";\n}\ndocument.getElementById("intentar").addEventListener("click", () => {\n  const letra = document.getElementById("letra").value.toLowerCase();\n  let acerto = false;\n  for (let i = 0; i < secreta.length; i++) {\n    if (secreta[i] === letra) { aciertos[i] = letra; acerto = true; }\n  }\n  if (!acerto) errores.push(letra);\n  document.getElementById("letra").value = "";\n  render();\n});\nrender();' }
    ]
  },
  {
    id: 'ch134',
    title: 'Gráfico de barras vertical con CSS',
    level: 'Básico',
    description: 'Construye un sencillo gráfico de barras usando divs y alturas porcentuales.',
    instructions: [
      'En <strong>index.html</strong>, contenedor flex con divs que tienen alturas distintas.',
      'En <strong>styles.css</strong>, align-items: flex-end y colores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="grafico">\n  <div style="height: 60%;">60%</div>\n  <div style="height: 90%;">90%</div>\n  <div style="height: 40%;">40%</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.grafico { display: flex; align-items: flex-end; gap: 10px; height: 150px; border-bottom: 2px solid #333; }\n.grafico div { width: 40px; background: #2d6a4f; color: white; text-align: center; }' }
    ]
  },
  {
    id: 'ch135',
    title: 'Efecto de tarjeta expandible con contenido extra oculto',
    level: 'Intermedio',
    description: 'Al hacer clic en "Ver más", la tarjeta se expande revelando texto adicional.',
    instructions: [
      'En <strong>index.html</strong>, una tarjeta con un resumen y un div con contenido adicional oculto. Un botón "Leer más".',
      'En <strong>script.js</strong>, alterna una clase que expande la altura.',
      'En <strong>styles.css</strong>, transiciones suaves de max-height.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card">\n  <div class="resumen">Título del artículo</div>\n  <div class="contenido-extra">Contenido extenso que permanece oculto por defecto.</div>\n  <button class="leer-mas">Leer más</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.contenido-extra { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }\n.card.expandida .contenido-extra { max-height: 100px; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".leer-mas").addEventListener("click", function() {\n  const card = this.parentElement;\n  card.classList.toggle("expandida");\n  this.textContent = card.classList.contains("expandida") ? "Leer menos" : "Leer más";\n});' }
    ]
  },
  {
    id: 'ch136',
    title: 'Color de fondo que cambia con scroll',
    level: 'Intermedio',
    description: 'El color de fondo de la página cambia gradualmente según la posición del scroll.',
    instructions: [
      'En <strong>index.html</strong>, contenido de gran altura.',
      'En <strong>script.js</strong>, escucha scroll y calcula un color intermedio basado en el porcentaje de desplazamiento.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div style="height:2000px;"></div>' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const scrollY = window.scrollY;\n  const maxScroll = document.body.scrollHeight - window.innerHeight;\n  const porcentaje = scrollY / maxScroll;\n  const r = Math.floor(46 + porcentaje * 100);\n  const g = Math.floor(106 + porcentaje * 100);\n  const b = Math.floor(79 + porcentaje * 100);\n  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;\n});' }
    ]
  },
  {
    id: 'ch137',
    title: 'Notificación push simulada',
    level: 'Básico',
    description: 'Muestra un mensaje emergente arriba a la derecha que simula una notificación.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "notificacion" oculto.',
      'En <strong>script.js</strong>, al hacer clic en un botón lo muestra y desaparece tras 4 segundos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="notificacion" class="oculto">Nuevo mensaje recibido</div>\n<button id="mostrarNoti">Mostrar notificación</button>' },
      { name: 'styles.css', lang: 'css', content: '#notificacion { position: fixed; top: 10px; right: 10px; background: #333; color: #fff; padding: 15px; border-radius: 5px; opacity: 0; transition: opacity 0.3s; }\n#notificacion.oculto { opacity: 0; }\n#notificacion:not(.oculto) { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("mostrarNoti").addEventListener("click", () => {\n  const noti = document.getElementById("notificacion");\n  noti.classList.remove("oculto");\n  setTimeout(() => noti.classList.add("oculto"), 4000);\n});' }
    ]
  },
  {
    id: 'ch138',
    title: 'Editor de Markdown simple',
    level: 'Avanzado',
    description: 'Escribe Markdown en un textarea y muestra la previsualización en otro div.',
    instructions: [
      'En <strong>index.html</strong>, un textarea y un div previsualización.',
      'En <strong>script.js</strong>, convierte a HTML simple (puedes usar una librería o hacerlo manual para negrita, itálica, títulos).',
      'Usa una librería marked.js CDN.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="markdown" rows="10" cols="50"># Hola</textarea>\n<div id="preview"></div>\n<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("markdown").addEventListener("input", function() {\n  document.getElementById("preview").innerHTML = marked.parse(this.value);\n});' }
    ]
  },
  {
    id: 'ch139',
    title: 'Selección múltiple con checkboxes estilo chips',
    level: 'Intermedio',
    description: 'Checkboxes que se muestran como chips y cambian de estilo al seleccionarse.',
    instructions: [
      'En <strong>index.html</strong>, checkboxes ocultos y labels.',
      'En <strong>styles.css</strong>, estiliza labels como chips, y cuando el checkbox está checked, cambia el fondo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="chips">\n  <input type="checkbox" id="op1" hidden><label for="op1">HTML</label>\n  <input type="checkbox" id="op2" hidden><label for="op2">CSS</label>\n  <input type="checkbox" id="op3" hidden><label for="op3">JavaScript</label>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.chips label { display: inline-block; background: #eee; padding: 5px 12px; border-radius: 20px; cursor: pointer; margin: 3px; }\n.chips input:checked + label { background: #2d6a4f; color: white; }' }
    ]
  },
  {
    id: 'ch140',
    title: 'Dibujar en canvas con colores y grosor',
    level: 'Avanzado',
    description: 'Amplía el dibujo en canvas añadiendo selector de color y rango de grosor.',
    instructions: [
      'En <strong>index.html</strong>, canvas, input color, input range grosor.',
      'En <strong>script.js</strong>, usa el color y grosor en el trazo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="lienzo" width="400" height="300" style="border:1px solid black;"></canvas><br>\n<input type="color" id="color" value="#000000">\n<input type="range" id="grosor" min="1" max="10" value="2">' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("lienzo");\nconst ctx = canvas.getContext("2d");\nlet dibujando = false;\nctx.lineWidth = 2;\ncanvas.addEventListener("mousedown", e => { dibujando = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); });\ncanvas.addEventListener("mousemove", e => { if (dibujando) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });\ncanvas.addEventListener("mouseup", () => dibujando = false);\ndocument.getElementById("color").addEventListener("input", e => ctx.strokeStyle = e.target.value);\ndocument.getElementById("grosor").addEventListener("input", e => ctx.lineWidth = e.target.value);' }
    ]
  },
  {
    id: 'ch141',
    title: 'Table of contents dinámico',
    level: 'Intermedio',
    description: 'Genera una tabla de contenidos automáticamente a partir de los encabezados h2 y h3 de la página.',
    instructions: [
      'En <strong>index.html</strong>, un div para el índice y varios encabezados.',
      'En <strong>script.js</strong>, recorre todos los h2 y h3, asigna ids si no tienen y crea enlaces.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav id="toc"></nav>\n<h2>Introducción</h2><p>...</p>\n<h2>Desarrollo</h2><p>...</p>\n<h3>Subsección</h3><p>...</p>' },
      { name: 'script.js', lang: 'js', content: 'const toc = document.getElementById("toc");\ndocument.querySelectorAll("h2, h3").forEach(el => {\n  if (!el.id) el.id = el.textContent.toLowerCase().replace(/\\s/g, "-");\n  const a = document.createElement("a");\n  a.href = "#" + el.id;\n  a.textContent = el.textContent;\n  a.style.display = (el.tagName === "H3") ? "block; padding-left:20px;" : "block";\n  toc.appendChild(a);\n});' }
    ]
  },
  {
    id: 'ch142',
    title: 'Efecto de iluminación con el ratón (spotlight)',
    level: 'Intermedio',
    description: 'Oscurece toda la pantalla menos un círculo que sigue al cursor.',
    instructions: [
      'En <strong>index.html</strong>, un div oscuro que cubre toda la página.',
      'En <strong>script.js</strong>, mueve un gradiente radial con la posición del ratón.',
      'En <strong>styles.css</strong>, el div con background radial-gradient dinámico.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="spotlight"></div>' },
      { name: 'styles.css', lang: 'css', content: '#spotlight { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, transparent 100px, rgba(0,0,0,0.8) 150px); pointer-events: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.addEventListener("mousemove", e => {\n  const x = e.clientX;\n  const y = e.clientY;\n  document.getElementById("spotlight").style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 100px, rgba(0,0,0,0.8) 150px)`;\n});' }
    ]
  },
  {
    id: 'ch143',
    title: 'Carrusel de imágenes con controles manuales',
    level: 'Intermedio',
    description: 'Añade botones anterior/siguiente a un slider de imágenes.',
    instructions: [
      'En <strong>index.html</strong>, imágenes y botones prev/next.',
      'En <strong>script.js</strong>, controla el índice manejando los clics.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="slider">\n  <img src="https://via.placeholder.com/300/FF0000" class="activa">\n  <img src="https://via.placeholder.com/300/00FF00">\n  <img src="https://via.placeholder.com/300/0000FF">\n  <button id="anterior">←</button>\n  <button id="siguiente">→</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.slider img { display: none; width:300px; }\n.slider img.activa { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const imgs = document.querySelectorAll(".slider img");\nlet idx = 0;\nfunction mostrar(n) {\n  imgs[idx].classList.remove("activa");\n  idx = (n + imgs.length) % imgs.length;\n  imgs[idx].classList.add("activa");\n}\ndocument.getElementById("anterior").addEventListener("click", () => mostrar(idx - 1));\ndocument.getElementById("siguiente").addEventListener("click", () => mostrar(idx + 1));' }
    ]
  },
  {
    id: 'ch144',
    title: 'Formulario de registro con pasos y barra de progreso',
    level: 'Intermedio',
    description: 'Divide el registro en 3 pasos con una barra de progreso que avanza.',
    instructions: [
      'En <strong>index.html</strong>, 3 fieldsets y botones siguiente/anterior. Una barra de progreso.',
      'En <strong>script.js</strong>, similar al wizard, además actualiza la barra de progreso según el paso actual.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<progress id="progreso" value="0" max="3"></progress>\n<form id="formWizard">\n  <fieldset class="paso" id="paso1">Nombre <input></fieldset>\n  <fieldset class="paso" id="paso2" style="display:none">Email <input></fieldset>\n  <fieldset class="paso" id="paso3" style="display:none">Contraseña <input type="password"></fieldset>\n  <button type="button" id="siguiente">Siguiente</button>\n  <button type="button" id="anterior" disabled>Anterior</button>\n</form>' },
      { name: 'script.js', lang: 'js', content: 'let paso = 1;\nfunction mostrar() {\n  document.querySelectorAll(".paso").forEach(p => p.style.display = "none");\n  document.getElementById("paso"+paso).style.display = "block";\n  document.getElementById("progreso").value = paso;\n  document.getElementById("anterior").disabled = paso === 1;\n  document.getElementById("siguiente").textContent = paso === 3 ? "Enviar" : "Siguiente";\n}\ndocument.getElementById("siguiente").addEventListener("click", () => {\n  if (paso < 3) { paso++; mostrar(); }\n  else alert("Formulario enviado");\n});\ndocument.getElementById("anterior").addEventListener("click", () => {\n  if (paso > 1) { paso--; mostrar(); }\n});\nmostrar();' }
    ]
  },
  {
    id: 'ch145',
    title: 'Mensaje de bienvenida con nombre guardado en cookie',
    level: 'Básico',
    description: 'Guarda el nombre del usuario en una cookie y lo muestra al regresar.',
    instructions: [
      'En <strong>index.html</strong>, un input y botón guardar; si ya hay cookie, muestra el saludo.',
      'En <strong>script.js</strong>, usa <code>document.cookie</code> para leer/escribir el nombre.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p id="saludo"></p>\n<input id="nombre" placeholder="Tu nombre">\n<button id="guardar">Guardar</button>' },
      { name: 'script.js', lang: 'js', content: 'function getCookie(nombre) {\n  const match = document.cookie.match(new RegExp("(^| )" + nombre + "=([^;]+)"));\n  return match ? match[2] : null;\n}\nconst nombreGuardado = getCookie("usuario");\nif (nombreGuardado) document.getElementById("saludo").textContent = "Bienvenido de nuevo, " + nombreGuardado;\ndocument.getElementById("guardar").addEventListener("click", () => {\n  const nombre = document.getElementById("nombre").value.trim();\n  if (nombre) {\n    document.cookie = "usuario=" + encodeURIComponent(nombre) + "; max-age=86400";\n    document.getElementById("saludo").textContent = "Hola, " + nombre;\n  }\n});' }
    ]
  },
  {
    id: 'ch146',
    title: 'Spinner de carga con CSS',
    level: 'Básico',
    description: 'Crea un spinner animado con varios círculos rotando.',
    instructions: [
      'En <strong>index.html</strong>, un div con varios span o un solo div con bordes.',
      'En <strong>styles.css</strong>, animación keyframes de rotación.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="spinner"></div>' },
      { name: 'styles.css', lang: 'css', content: '.spinner {\n  border: 5px solid #eee;\n  border-top: 5px solid #2d6a4f;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: auto;\n}\n@keyframes spin { to { transform: rotate(360deg); } }' }
    ]
  },
  {
    id: 'ch147',
    title: 'Popover hover con imagen ampliada',
    level: 'Intermedio',
    description: 'Al pasar el ratón sobre un texto, aparece una imagen relacionada en un popover.',
    instructions: [
      'En <strong>index.html</strong>, span con clase "popover" y data-img.',
      'En <strong>script.js</strong>, crea un div imagen y lo posiciona cerca del cursor.',
      'En <strong>styles.css</strong>, estiliza el popover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span class="popover" data-img="https://via.placeholder.com/150">Pasa el ratón</span>' },
      { name: 'styles.css', lang: 'css', content: '.popover { position: relative; color: #2d6a4f; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".popover").forEach(el => {\n  let popover;\n  el.addEventListener("mouseenter", () => {\n    popover = document.createElement("div");\n    popover.style.position = "absolute";\n    popover.style.background = "white";\n    popover.style.border = "1px solid #ccc";\n    popover.style.padding = "5px";\n    const img = document.createElement("img");\n    img.src = el.dataset.img;\n    popover.appendChild(img);\n    document.body.appendChild(popover);\n    popover.style.left = event.clientX + "px";\n    popover.style.top = event.clientY + "px";\n  });\n  el.addEventListener("mousemove", e => { if (popover) { popover.style.left = e.clientX + 10 + "px"; popover.style.top = e.clientY + 10 + "px"; } });\n  el.addEventListener("mouseleave", () => { if (popover) popover.remove(); });\n});' }
    ]
  },
  {
    id: 'ch148',
    title: 'Efecto hover que despega el elemento del fondo',
    level: 'Básico',
    description: 'Al pasar el ratón sobre una lista de elementos, el resto se atenúa.',
    instructions: [
      'En <strong>index.html</strong>, una ul con varios li.',
      'En <strong>styles.css</strong>, ul:hover li { opacity: 0.3; } y li:hover { opacity: 1; transform: scale(1.1); }.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul class="hover-list">\n  <li>Elemento 1</li>\n  <li>Elemento 2</li>\n  <li>Elemento 3</li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: '.hover-list:hover li { opacity: 0.5; transition: opacity 0.3s, transform 0.3s; }\n.hover-list li:hover { opacity: 1; transform: scale(1.1); }' }
    ]
  },
  {
    id: 'ch149',
    title: 'Efecto de desplazamiento con parallax horizontal',
    level: 'Intermedio',
    description: 'Varias capas de fondo que se mueven a diferente velocidad al hacer scroll horizontal.',
    instructions: [
      'En <strong>index.html</strong>, contenedor con overflow-x scroll y divs fondo.',
      'En <strong>script.js</strong>, ajusta translateX según el scroll.',
      'Este es más conceptual, puedes solo demostrar el principio con transform translateX en varios divs al hacer scroll.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="parallax-horizontal" style="display:flex; overflow-x:auto;">\n  <div class="capa" style="background-image:url(https://via.placeholder.com/800x200); height:200px; width:800px; background-size:cover;"></div>\n</div>' },
      { name: 'script.js', lang: 'js', content: '// Ejemplo simple: movimiento al hacer scroll con transform\nwindow.addEventListener("scroll", () => {\n  document.querySelector(".capa").style.transform = `translateX(${window.scrollY * 0.5}px)`;\n});' }
    ]
  },
  {
    id: 'ch150',
    title: 'Saludo según la hora del día',
    level: 'Básico',
    description: 'Muestra "Buenos días", "Buenas tardes" o "Buenas noches" dependiendo de la hora.',
    instructions: [
      'En <strong>index.html</strong>, un span para el saludo.',
      'En <strong>script.js</strong>, obtén la hora actual y elige el mensaje.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 id="saludo"></h1>' },
      { name: 'script.js', lang: 'js', content: 'const hora = new Date().getHours();\nlet mensaje = "";\nif (hora < 12) mensaje = "Buenos días";\nelse if (hora < 19) mensaje = "Buenas tardes";\nelse mensaje = "Buenas noches";\ndocument.getElementById("saludo").textContent = mensaje + "!";' }
    ]
  },
    {
    id: 'ch151',
    title: 'Botón que cambia de color al hacer clic',
    level: 'Básico',
    description: 'Crea un botón que cambie de color cada vez que se presiona, usando una lista de colores predefinida.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;button&gt;</code> con id "colorBtn".',
      'En <strong>script.js</strong>, define un array de colores y asigna uno distinto en cada clic, cíclicamente.',
      'En <strong>styles.css</strong>, da estilo inicial al botón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="colorBtn">Cambiar color</button>' },
      { name: 'styles.css', lang: 'css', content: '#colorBtn { padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; color: white; font-weight: bold; }' },
      { name: 'script.js', lang: 'js', content: 'const colores = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];\nlet indice = 0;\ndocument.getElementById("colorBtn").addEventListener("click", function() {\n  indice = (indice + 1) % colores.length;\n  this.style.backgroundColor = colores[indice];\n});' }
    ]
  },
  {
    id: 'ch152',
    title: 'Carrusel de frases con fade',
    level: 'Intermedio',
    description: 'Muestra frases que se desvanecen y aparecen suavemente cada 4 segundos.',
    instructions: [
      'En <strong>index.html</strong>, un div con varias frases, solo una visible.',
      'En <strong>styles.css</strong>, usa transiciones de opacidad y posición absoluta para que se superpongan.',
      'En <strong>script.js</strong>, rota las frases aplicando clases de visibilidad con setInterval.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="frases">\n  <p class="frase activa">"La práctica hace al maestro"</p>\n  <p class="frase">"Nunca dejes de aprender"</p>\n  <p class="frase">"El código es poesía"</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.frases { position: relative; height: 3rem; }\n.frase { position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 1s; }\n.frase.activa { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'const frases = document.querySelectorAll(".frase");\nlet idx = 0;\nsetInterval(() => {\n  frases[idx].classList.remove("activa");\n  idx = (idx + 1) % frases.length;\n  frases[idx].classList.add("activa");\n}, 4000);' }
    ]
  },
  {
    id: 'ch153',
    title: 'Contador regresivo para una fecha específica',
    level: 'Intermedio',
    description: 'Elige una fecha futura y muestra cuánto falta en formato días, horas, minutos y segundos.',
    instructions: [
      'En <strong>index.html</strong>, un div para la cuenta.',
      'En <strong>script.js</strong>, define la fecha objetivo (p.ej., para final de año) y actualiza cada segundo.',
      'Incluye el cálculo exacto y detén la cuenta si la fecha ya pasó.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cuenta">\n  <span id="dias"></span>d <span id="horas"></span>h <span id="minutos"></span>m <span id="segundos"></span>s\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const objetivo = new Date("2027-01-01T00:00:00");\nfunction actualizar() {\n  const ahora = new Date();\n  const diff = objetivo - ahora;\n  if (diff <= 0) {\n    document.getElementById("cuenta").textContent = "¡Llegó el día!";\n    return;\n  }\n  const d = Math.floor(diff / (1000*60*60*24));\n  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));\n  const m = Math.floor((diff % (1000*60*60)) / (1000*60));\n  const s = Math.floor((diff % (1000*60)) / 1000);\n  document.getElementById("dias").textContent = d;\n  document.getElementById("horas").textContent = h;\n  document.getElementById("minutos").textContent = m;\n  document.getElementById("segundos").textContent = s;\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch154',
    title: 'Animación de barras de carga simultáneas',
    level: 'Intermedio',
    description: 'Varias barras de progreso que se llenan al mismo tiempo con diferentes velocidades.',
    instructions: [
      'En <strong>index.html</strong>, tres divs con barras internas.',
      'En <strong>styles.css</strong>, animaciones keyframes con diferente duración para cada barra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="barra"><div class="progreso p1"></div></div>\n<div class="barra"><div class="progreso p2"></div></div>\n<div class="barra"><div class="progreso p3"></div></div>' },
      { name: 'styles.css', lang: 'css', content: '.barra { width: 300px; height: 20px; background: #eee; margin: 10px; border-radius: 10px; overflow: hidden; }\n.progreso { height: 100%; background: #2d6a4f; animation: llenar 3s forwards; }\n.p1 { animation-duration: 2s; }\n.p2 { animation-duration: 2.5s; }\n.p3 { animation-duration: 3.2s; }\n@keyframes llenar { from { width: 0; } to { width: 100%; } }' }
    ]
  },
  {
    id: 'ch155',
    title: 'Efecto de desplazamiento infinito de fondo',
    level: 'Intermedio',
    description: 'Un fondo con patrón que se mueve continuamente creando sensación de movimiento.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "fondo-movimiento".',
      'En <strong>styles.css</strong>, usa background-repeat y keyframes para animar background-position.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="fondo-movimiento"></div>' },
      { name: 'styles.css', lang: 'css', content: '.fondo-movimiento {\n  height: 200px;\n  background-image: url("https://via.placeholder.com/50/2d6a4f/ffffff?text=+");\n  animation: desplazar 5s linear infinite;\n}\n@keyframes desplazar { from { background-position: 0 0; } to { background-position: 50px 50px; } }' }
    ]
  },
  {
    id: 'ch156',
    title: 'Selector de idioma con banderas',
    level: 'Básico',
    description: 'Al hacer clic en una bandera, el texto de la página cambia de idioma (simulado).',
    instructions: [
      'En <strong>index.html</strong>, varios span con la clase "bandera" y data-idioma, y elementos con data-texto-es, data-texto-en, etc.',
      'En <strong>script.js</strong>, al hacer clic, actualiza los textos según el dataset.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span class="bandera" data-idioma="es">🇪🇸</span>\n<span class="bandera" data-idioma="en">🇬🇧</span>\n<h1 data-texto-es="Hola" data-texto-en="Hello">Hola</h1>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".bandera").forEach(b => {\n  b.addEventListener("click", () => {\n    const idioma = b.dataset.idioma;\n    document.querySelectorAll("[data-texto-"+idioma+"]").forEach(el => {\n      el.textContent = el.dataset["texto-"+idioma];\n    });\n  });\n});' }
    ]
  },
  {
    id: 'ch157',
    title: 'Botón con efecto de pulsación (presionado)',
    level: 'Básico',
    description: 'Al hacer clic, el botón se hunde y recupera su forma con una animación.',
    instructions: [
      'En <strong>index.html</strong>, un botón con clase "press".',
      'En <strong>styles.css</strong>, en la pseudo-clase :active, aplica transform scale y box-shadow inset.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="press">Presióname</button>' },
      { name: 'styles.css', lang: 'css', content: '.press { padding: 15px 30px; background: #2d6a4f; color: white; border: none; border-radius: 8px; cursor: pointer; transition: all 0.1s; }\n.press:active { transform: scale(0.95); box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); }' }
    ]
  },
  {
    id: 'ch158',
    title: 'Texto con reflejo',
    level: 'Básico',
    description: 'Añade un efecto de reflejo debajo de un título usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con clase "reflejo".',
      'En <strong>styles.css</strong>, duplica el texto con un pseudo-elemento, volteado verticalmente y con gradiente de desvanecimiento.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="reflejo">Reflejo</h1>' },
      { name: 'styles.css', lang: 'css', content: '.reflejo { position: relative; display: inline-block; }\n.reflejo::after {\n  content: attr(data-text) ? "Reflejo";\n  content: "Reflejo";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transform: scaleY(-1);\n  opacity: 0.4;\n  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}' }
    ]
  },
  {
    id: 'ch159',
    title: 'Menú circular que se expande al hacer clic',
    level: 'Intermedio',
    description: 'Un botón fijo que al hacer clic despliega varios iconos en forma circular.',
    instructions: [
      'En <strong>index.html</strong>, un botón principal y varios hijos con posición absoluta.',
      'En <strong>styles.css</strong>, transiciones de transform y opacidad.',
      'En <strong>script.js</strong>, alterna una clase "abierto".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="menu-circular">\n  <button class="btn-principal">+</button>\n  <button class="btn-hijo">A</button>\n  <button class="btn-hijo">B</button>\n  <button class="btn-hijo">C</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.menu-circular { position: relative; width: 60px; height: 60px; }\n.btn-principal { width: 60px; height: 60px; border-radius: 50%; background: #2d6a4f; color: white; border: none; font-size: 1.5rem; cursor: pointer; position: relative; z-index: 1; }\n.btn-hijo { position: absolute; top: 0; left: 0; width: 40px; height: 40px; border-radius: 50%; background: #d4af37; border: none; color: white; opacity: 0; transform: translate(0,0) scale(0); transition: all 0.3s; }\n.menu-circular.abierto .btn-hijo:nth-child(2) { transform: translate(-60px, -60px) scale(1); opacity: 1; }\n.menu-circular.abierto .btn-hijo:nth-child(3) { transform: translate(0, -80px) scale(1); opacity: 1; }\n.menu-circular.abierto .btn-hijo:nth-child(4) { transform: translate(60px, -60px) scale(1); opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".btn-principal").addEventListener("click", function() {\n  this.parentElement.classList.toggle("abierto");\n});' }
    ]
  },
  {
    id: 'ch160',
    title: 'Escáner de código QR ficticio',
    level: 'Intermedio',
    description: 'Muestra una animación de escaneo sobre una imagen que simula un código QR. Al "escanear" muestra un resultado predefinido.',
    instructions: [
      'En <strong>index.html</strong>, un div con una imagen de QR y un div línea animada.',
      'En <strong>styles.css</strong>, anima la línea hacia abajo.',
      'En <strong>script.js</strong>, después de 3 segundos muestra un texto de éxito.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="scanner">\n  <img src="https://via.placeholder.com/150/000/FFF?text=QR">\n  <div class="linea"></div>\n</div>\n<p id="resultado"></p>' },
      { name: 'styles.css', lang: 'css', content: '.scanner { position: relative; width: 150px; height: 150px; overflow: hidden; }\n.linea { position: absolute; top: -2px; left: 0; width: 100%; height: 2px; background: red; animation: escanear 2s linear infinite; }\n@keyframes escanear { from { top: -2px; } to { top: 100%; } }' },
      { name: 'script.js', lang: 'js', content: 'setTimeout(() => {\n  document.getElementById("resultado").textContent = "Código escaneado: Producto123";\n}, 3000);' }
    ]
  },
  {
    id: 'ch161',
    title: 'Recortar texto con puntos suspensivos automáticos',
    level: 'Básico',
    description: 'Muestra un texto que se trunca con "..." si es muy largo usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, un div con un párrafo de texto largo.',
      'En <strong>styles.css</strong>, aplica <code>text-overflow: ellipsis</code>, <code>overflow: hidden</code> y <code>white-space: nowrap</code> con ancho fijo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="truncar">Este es un texto muy largo que seguramente no cabrá en este contenedor tan pequeño.</div>' },
      { name: 'styles.css', lang: 'css', content: '.truncar { width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border: 1px solid #ccc; padding: 5px; }' }
    ]
  },
  {
    id: 'ch162',
    title: 'Tarjeta con flip y contenido en el reverso',
    level: 'Intermedio',
    description: 'Al hacer click (o hover) la tarjeta gira y muestra información adicional.',
    instructions: [
      'En <strong>index.html</strong>, estructura con dos divs, frontal y reverso, dentro de un contenedor flip.',
      'En <strong>styles.css</strong>, usa transform rotateY y backface-visibility.',
      'En <strong>script.js</strong>, añade un event listener para alternar clase al hacer clic (opcional).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-flip" id="card">\n  <div class="front">Frente</div>\n  <div class="back">Reverso con información</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.card-flip { width: 200px; height: 150px; perspective: 800px; cursor: pointer; }\n.card-flip > div { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transition: transform 0.6s; display: flex; align-items: center; justify-content: center; }\n.front { background: #2d6a4f; color: white; }\n.back { background: #d4af37; color: black; transform: rotateY(180deg); }\n.card-flip.volteada .front { transform: rotateY(180deg); }\n.card-flip.volteada .back { transform: rotateY(0deg); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("card").addEventListener("click", function() {\n  this.classList.toggle("volteada");\n});' }
    ]
  },
  {
    id: 'ch163',
    title: 'Icono de notificación con número de mensajes',
    level: 'Básico',
    description: 'Una campana con un pequeño círculo que muestra la cantidad de notificaciones sin leer.',
    instructions: [
      'En <strong>index.html</strong>, un div con icono y un span badge.',
      'En <strong>styles.css</strong>, posiciona el badge en la esquina superior derecha usando position absolute.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="icono-notif">\n  🔔\n  <span class="badge">3</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.icono-notif { position: relative; font-size: 2rem; display: inline-block; }\n.badge { position: absolute; top: -5px; right: -10px; background: red; color: white; border-radius: 50%; padding: 2px 6px; font-size: 0.7rem; }' }
    ]
  },
  {
    id: 'ch164',
    title: 'Efecto de desplazamiento tipo cinta (ticker)',
    level: 'Intermedio',
    description: 'Un texto que se desliza horizontalmente de forma continua, como las noticias de la bolsa.',
    instructions: [
      'En <strong>index.html</strong>, un div con un texto muy largo dentro de un contenedor con overflow hidden.',
      'En <strong>styles.css</strong>, anima el div interno con translateX de 100% a -100%.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="ticker">\n  <div class="ticker-texto">Noticia urgente: El mercado sube 5% en la jornada de hoy. </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.ticker { width: 100%; overflow: hidden; background: #333; color: white; padding: 10px 0; }\n.ticker-texto { white-space: nowrap; animation: deslizar 10s linear infinite; }\n@keyframes deslizar { from { transform: translateX(100%); } to { transform: translateX(-100%); } }' }
    ]
  },
  {
    id: 'ch165',
    title: 'Reloj con manecillas animadas (CSS)',
    level: 'Avanzado',
    description: 'Simula un reloj analógico con tres líneas rotando a diferentes velocidades usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, un div circular y tres divs internos para cada manecilla.',
      'En <strong>styles.css</strong>, animaciones de rotación con diferentes duraciones e iteration-count infinite.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="reloj-css">\n  <div class="manecilla horas"></div>\n  <div class="manecilla minutos"></div>\n  <div class="manecilla segundos"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.reloj-css { width: 120px; height: 120px; border: 4px solid black; border-radius: 50%; position: relative; }\n.manecilla { position: absolute; bottom: 50%; left: 50%; transform-origin: bottom center; background: black; }\n.horas { width: 4px; height: 30px; animation: rotar 43200s linear infinite; }\n.minutos { width: 3px; height: 45px; animation: rotar 3600s linear infinite; }\n.segundos { width: 1px; height: 55px; background: red; animation: rotar 60s linear infinite; }\n@keyframes rotar { to { transform: rotate(360deg); } }' }
    ]
  },
  {
    id: 'ch166',
    title: 'Gráfico de barras apiladas',
    level: 'Intermedio',
    description: 'Crea un gráfico de barras apiladas (dos series) con divs y CSS.',
    instructions: [
      'En <strong>index.html</strong>, varios divs contenedores de barra con dos divs internos de diferente color.',
      'En <strong>styles.css</strong>, usa alturas porcentuales para los segmentos y alineación vertical bottom.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="barras-apiladas">\n  <div class="barra"><div class="serie1" style="height:40%"></div><div class="serie2" style="height:30%"></div></div>\n  <div class="barra"><div class="serie1" style="height:50%"></div><div class="serie2" style="height:20%"></div></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.barras-apiladas { display: flex; gap: 20px; height: 200px; align-items: flex-end; }\n.barra { width: 60px; display: flex; flex-direction: column; justify-content: flex-end; }\n.serie1 { background: #2d6a4f; width: 100%; }\n.serie2 { background: #f1c40f; width: 100%; }' }
    ]
  },
  {
    id: 'ch167',
    title: 'Ventana emergente (popup) centrada en pantalla',
    level: 'Básico',
    description: 'Un botón que abre un popup con contenido, y se cierra al hacer clic fuera o en el botón cerrar.',
    instructions: [
      'En <strong>index.html</strong>, un div popup oculto (clase "popup-oculto") con un span cerrar.',
      'En <strong>script.js</strong>, alterna la clase al hacer clic en "Abrir".',
      'En <strong>styles.css</strong>, centra el popup con position fixed y flexbox.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="abrirPopup">Abrir</button>\n<div class="popup-backdrop popup-oculto" id="popup">\n  <div class="popup-content">\n    <span id="cerrarPopup">&times;</span>\n    <p>Contenido del popup</p>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.popup-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }\n.popup-oculto { display: none; }\n.popup-content { background: white; padding: 20px; border-radius: 10px; position: relative; }\n#cerrarPopup { position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 1.5rem; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("abrirPopup").addEventListener("click", () => document.getElementById("popup").classList.remove("popup-oculto"));\ndocument.getElementById("cerrarPopup").addEventListener("click", () => document.getElementById("popup").classList.add("popup-oculto"));' }
    ]
  },
  {
    id: 'ch168',
    title: 'Indicador de conexión a internet',
    level: 'Básico',
    description: 'Muestra un círculo verde si hay conexión, rojo si no, utilizando eventos online/offline.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "estado".',
      'En <strong>script.js</strong>, escucha window "online" y "offline" para cambiar el color.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="estado" class="online">● Conectado</div>' },
      { name: 'styles.css', lang: 'css', content: '.online { color: green; }\n.offline { color: red; }' },
      { name: 'script.js', lang: 'js', content: 'const estadoDiv = document.getElementById("estado");\nwindow.addEventListener("online", () => { estadoDiv.className = "online"; estadoDiv.textContent = "● Conectado"; });\nwindow.addEventListener("offline", () => { estadoDiv.className = "offline"; estadoDiv.textContent = "● Desconectado"; });' }
    ]
  },
  {
    id: 'ch169',
    title: 'Carrusel vertical con scroll snap',
    level: 'Intermedio',
    description: 'Varias secciones que encajan al hacer scroll vertical gracias a CSS Scroll Snap.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con scroll, y varias secciones hijas.',
      'En <strong>styles.css</strong>, usa <code>scroll-snap-type: y mandatory</code> en el contenedor y <code>scroll-snap-align: start</code> en las secciones.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="scroll-container">\n  <section class="panel">Sección 1</section>\n  <section class="panel">Sección 2</section>\n  <section class="panel">Sección 3</section>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.scroll-container { height: 300px; overflow-y: scroll; scroll-snap-type: y mandatory; }\n.panel { height: 100%; display: flex; align-items: center; justify-content: center; font-size: 2rem; scroll-snap-align: start; }\n.panel:nth-child(odd) { background: #e8f5e9; }\n.panel:nth-child(even) { background: #fff3e0; }' }
    ]
  },
  {
    id: 'ch170',
    title: 'Generador de números aleatorios en rango',
    level: 'Básico',
    description: 'Permite ingresar un mínimo y máximo, y genera un número entero aleatorio entre ellos.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs y un botón.',
      'En <strong>script.js</strong>, usa Math.random() y Math.floor() para calcularlo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="min" value="1">\n<input type="number" id="max" value="100">\n<button id="generar">Generar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("generar").addEventListener("click", () => {\n  const min = parseInt(document.getElementById("min").value);\n  const max = parseInt(document.getElementById("max").value);\n  const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;\n  document.getElementById("resultado").textContent = aleatorio;\n});' }
    ]
  },
  {
    id: 'ch171',
    title: 'Animación de olas con CSS',
    level: 'Intermedio',
    description: 'Simula olas del mar usando varios divs con formas onduladas y animaciones.',
    instructions: [
      'En <strong>index.html</strong>, contenedor de las olas.',
      'En <strong>styles.css</strong>, divs con border-radius y animaciones translateX y scale.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="mar">\n  <div class="ola o1"></div>\n  <div class="ola o2"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.mar { position: relative; height: 100px; overflow: hidden; background: #1e3c72; }\n.ola { position: absolute; width: 200%; height: 50px; background: rgba(255,255,255,0.3); border-radius: 40%; opacity: 0.7; }\n.o1 { animation: mover 6s linear infinite; }\n.o2 { animation: mover 8s linear infinite reverse; opacity: 0.5; }\n@keyframes mover { from { left: 0; } to { left: -100%; } }' }
    ]
  },
  {
    id: 'ch172',
    title: 'Columna de igual altura con flexbox',
    level: 'Básico',
    description: 'Tres columnas de contenido diferente que siempre tengan la misma altura.',
    instructions: [
      'En <strong>index.html</strong>, contenedor flex con tres divs.',
      'En <strong>styles.css</strong>, display flex y align-items stretch (por defecto).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="columnas">\n  <div class="col">Columna 1<br>Contenido corto</div>\n  <div class="col">Columna 2 con más texto para probar la altura</div>\n  <div class="col">Columna 3</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.columnas { display: flex; gap: 10px; }\n.col { flex: 1; background: #f0f0f0; padding: 15px; }' }
    ]
  },
  {
    id: 'ch173',
    title: 'Sticky header que se oculta al bajar y reaparece al subir',
    level: 'Avanzado',
    description: 'Barra de navegación fija que se oculta cuando haces scroll hacia abajo y vuelve a aparecer al subir.',
    instructions: [
      'En <strong>index.html</strong>, un header con id "header" y contenido muy alto.',
      'En <strong>script.js</strong>, compara la posición anterior del scroll para añadir/remover una clase que lo oculta.',
      'En <strong>styles.css</strong>, transición de top/transform.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<header id="header">Menú</header>\n<div style="height:2000px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '#header { position: fixed; top: 0; width: 100%; background: #2d6a4f; color: white; padding: 15px; transition: top 0.3s; }\n#header.oculto { top: -60px; }' },
      { name: 'script.js', lang: 'js', content: 'let prevScrollpos = window.pageYOffset;\nwindow.addEventListener("scroll", () => {\n  const currentScroll = window.pageYOffset;\n  const header = document.getElementById("header");\n  if (prevScrollpos > currentScroll) header.classList.remove("oculto");\n  else header.classList.add("oculto");\n  prevScrollpos = currentScroll;\n});' }
    ]
  },
  {
    id: 'ch174',
    title: 'Botón de "volver a cargar" con animación de giro',
    level: 'Básico',
    description: 'Un botón con un icono que gira al hacer clic y recarga la página.',
    instructions: [
      'En <strong>index.html</strong>, botón con texto ↻.',
      'En <strong>script.js</strong>, al hacer clic, aplica una clase que rote el icono y recarga tras 0.5s.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="recargar">↻</button>' },
      { name: 'styles.css', lang: 'css', content: '#recargar { font-size: 2rem; background: none; border: none; cursor: pointer; transition: transform 0.5s; }\n.girando { transform: rotate(360deg); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("recargar").addEventListener("click", function() {\n  this.classList.add("girando");\n  setTimeout(() => location.reload(), 500);\n});' }
    ]
  },
  {
    id: 'ch175',
    title: 'Texto con efecto de sombra 3D',
    level: 'Básico',
    description: 'Crea un texto con múltiples sombras para simular un efecto 3D extruido.',
    instructions: [
      'En <strong>index.html</strong>, un h1.',
      'En <strong>styles.css</strong>, usa múltiples text-shadow con desplazamiento progresivo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="texto-3d">3D Text</h1>' },
      { name: 'styles.css', lang: 'css', content: '.texto-3d { font-size: 3rem; color: #2d6a4f; text-shadow: 1px 1px 0 #1b4332, 2px 2px 0 #1b4332, 3px 3px 0 #1b4332, 4px 4px 0 #1b4332; }' }
    ]
  },
  {
    id: 'ch176',
    title: 'Conversor de temperatura (°C ↔ °F)',
    level: 'Básico',
    description: 'Convierte entre Celsius y Fahrenheit según una selección.',
    instructions: [
      'En <strong>index.html</strong>, input, select y botón.',
      'En <strong>script.js</strong>, aplica la fórmula adecuada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="temp" value="0">\n<select id="escala">\n  <option value="CtoF">Celsius a Fahrenheit</option>\n  <option value="FtoC">Fahrenheit a Celsius</option>\n</select>\n<button id="convertir">Convertir</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("convertir").addEventListener("click", () => {\n  const temp = parseFloat(document.getElementById("temp").value);\n  const escala = document.getElementById("escala").value;\n  let resultado;\n  if (escala === "CtoF") resultado = (temp * 9/5) + 32;\n  else resultado = (temp - 32) * 5/9;\n  document.getElementById("resultado").textContent = resultado.toFixed(1);\n});' }
    ]
  },
  {
    id: 'ch177',
    title: 'Efecto de lluvia de emojis',
    level: 'Avanzado',
    description: 'Emojis cayendo continuamente desde la parte superior de la pantalla.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor.',
      'En <strong>script.js</strong>, crea elementos span con emojis aleatorios y los anima con CSS (o JavaScript) hacia abajo, eliminándolos al salir.',
      'En <strong>styles.css</strong>, posiciona los emojis absolutamente y anima con keyframes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="lluvia-emoji"></div>' },
      { name: 'styles.css', lang: 'css', content: '.emoji-cayendo { position: absolute; top: -50px; animation: caer 4s linear forwards; }\n@keyframes caer { to { top: 110%; opacity: 0; } }' },
      { name: 'script.js', lang: 'js', content: 'const emojis = ["😀", "😂", "🥰", "🔥", "🎉", "💻"];\nsetInterval(() => {\n  const emoji = document.createElement("span");\n  emoji.className = "emoji-cayendo";\n  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];\n  emoji.style.left = Math.random() * 100 + "%";\n  emoji.style.fontSize = Math.random() * 30 + 20 + "px";\n  document.getElementById("lluvia-emoji").appendChild(emoji);\n  setTimeout(() => emoji.remove(), 4000);\n}, 300);' }
    ]
  },
  {
    id: 'ch178',
    title: 'Estrella fugaz con CSS',
    level: 'Básico',
    description: 'Una pequeña animación de una estrella fugaz cruzando la pantalla.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "estrella".',
      'En <strong>styles.css</strong>, div pequeño alargado con gradiente y animación de movimiento diagonal y fade.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="estrella-fugaz"></div>' },
      { name: 'styles.css', lang: 'css', content: '.estrella-fugaz { position: fixed; width: 80px; height: 2px; background: linear-gradient(to right, white, transparent); top: 100px; left: -100px; animation: pasar 2s linear infinite; }\n@keyframes pasar { to { left: 110%; top: 300px; opacity: 0; } }' }
    ]
  },
  {
    id: 'ch179',
    title: 'Selector de color (color picker) nativo',
    level: 'Básico',
    description: 'Usa un input type color para cambiar el color de un div.',
    instructions: [
      'En <strong>index.html</strong>, input color y un div.',
      'En <strong>script.js</strong>, actualiza el background del div al cambiar el input.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="color" id="picker" value="#2d6a4f">\n<div id="muestra" style="width:100px;height:100px;background:#2d6a4f;"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("picker").addEventListener("input", function() {\n  document.getElementById("muestra").style.backgroundColor = this.value;\n});' }
    ]
  },
  {
    id: 'ch180',
    title: 'Tarjeta de estadísticas con hover',
    level: 'Básico',
    description: 'Varias tarjetas con números que se agrandan al pasar el ratón.',
    instructions: [
      'En <strong>index.html</strong>, divs con número y texto.',
      'En <strong>styles.css</strong>, transición de transform y box-shadow al hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="estadisticas">\n  <div class="stat"><span>150+</span><p>Proyectos</p></div>\n  <div class="stat"><span>50+</span><p>Clientes</p></div>\n  <div class="stat"><span>10+</span><p>Años</p></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.estadisticas { display: flex; gap: 20px; }\n.stat { background: #2d6a4f; color: white; padding: 20px; border-radius: 10px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; }\n.stat:hover { transform: scale(1.1); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }\n.stat span { font-size: 2rem; font-weight: bold; }' }
    ]
  },
  {
    id: 'ch181',
    title: 'Efecto de sombra larga en texto',
    level: 'Básico',
    description: 'Texto con una sombra alargada estilo "long shadow".',
    instructions: [
      'En <strong>index.html</strong>, h1 con clase "long-shadow".',
      'En <strong>styles.css</strong>, genera múltiples text-shadow con JS (o manual para pocos) o con un truco de CSS.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="long-shadow">LONG SHADOW</h1>' },
      { name: 'styles.css', lang: 'css', content: '.long-shadow { font-size: 3rem; color: #2d6a4f; text-shadow: 2px 2px 0 #ddd, 4px 4px 0 #ccc, 6px 6px 0 #bbb, 8px 8px 0 #aaa; }' }
    ]
  },
  {
    id: 'ch182',
    title: 'Menú de navegación con íconos (sin texto)',
    level: 'Básico',
    description: 'Barra de navegación con solo iconos, y al hacer hover muestra el texto.',
    instructions: [
      'En <strong>index.html</strong>, enlaces con iconos emoji y un span de texto oculto.',
      'En <strong>styles.css</strong>, oculta los span y muéstralos al hacer hover en el enlace.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <a href="#">🏠 <span>Inicio</span></a>\n  <a href="#">📧 <span>Contacto</span></a>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: 'a span { display: none; }\na:hover span { display: inline; }' }
    ]
  },
  {
    id: 'ch183',
    title: 'Árbol de carpetas colapsable',
    level: 'Intermedio',
    description: 'Simula un árbol de directorios donde puedes expandir/colapsar carpetas al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, lista anidada con detalles y summary, o ul/li con botones.',
      'En <strong>script.js</strong>, alterna clases para mostrar/ocultar ul anidados.',
      'Alternativamente, usa etiquetas details y summary nativas de HTML5.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul class="arbol">\n  <li><button class="toggle">+</button> Carpeta A\n    <ul class="oculto">\n      <li>archivo1.txt</li>\n      <li>archivo2.txt</li>\n    </ul>\n  </li>\n  <li><button class="toggle">+</button> Carpeta B\n    <ul class="oculto">\n      <li>img.png</li>\n    </ul>\n  </li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: '.oculto { display: none; }\n.toggle { background: none; border: none; cursor: pointer; font-weight: bold; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".toggle").forEach(btn => {\n  btn.addEventListener("click", function() {\n    const ul = this.nextElementSibling;\n    ul.classList.toggle("oculto");\n    this.textContent = ul.classList.contains("oculto") ? "+" : "-";\n  });\n});' }
    ]
  },
  {
    id: 'ch184',
    title: 'Acordeón FAQ nativo con details/summary',
    level: 'Básico',
    description: 'Usa las etiquetas HTML5 details y summary para crear un FAQ accesible.',
    instructions: [
      'En <strong>index.html</strong>, estructura con details y summary.',
      'En <strong>styles.css</strong>, estiliza los elementos para que parezcan tarjetas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<details>\n  <summary>¿Qué es HTML?</summary>\n  <p>Lenguaje de marcado de hipertexto.</p>\n</details>\n<details>\n  <summary>¿Qué es CSS?</summary>\n  <p>Hojas de estilo en cascada.</p>\n</details>' },
      { name: 'styles.css', lang: 'css', content: 'details { margin-bottom: 10px; background: #f4f4f4; padding: 10px; border-radius: 5px; }\nsummary { cursor: pointer; font-weight: bold; }' }
    ]
  },
  {
    id: 'ch185',
    title: 'Indicador de batería con CSS',
    level: 'Básico',
    description: 'Dibuja un icono de batería que se llena según un porcentaje.',
    instructions: [
      'En <strong>index.html</strong>, div contenedor con borde y otro div interno para el nivel.',
      'En <strong>styles.css</strong>, usa ancho porcentual.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="bateria">\n  <div class="nivel" style="width: 75%;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.bateria { width: 100px; height: 30px; border: 2px solid #333; border-radius: 5px; position: relative; padding: 3px; }\n.bateria::after { content: ""; position: absolute; right: -8px; top: 5px; height: 15px; width: 5px; background: #333; border-radius: 0 3px 3px 0; }\n.nivel { height: 100%; background: #2d6a4f; border-radius: 2px; }' }
    ]
  },
  {
    id: 'ch186',
    title: 'Círculo de progreso con SVG estático',
    level: 'Básico',
    description: 'Un círculo SVG que muestra un porcentaje fijo.',
    instructions: [
      'En <strong>index.html</strong>, SVG con dos círculos.',
      'En <strong>styles.css</strong> o dentro del SVG, usa stroke-dasharray/dashoffset para el progreso.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="10"/>\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#2d6a4f" stroke-width="10" stroke-dasharray="314" stroke-dashoffset="78.5" />\n</svg>' }
    ]
  },
  {
    id: 'ch187',
    title: 'Efecto de desplazamiento con imágenes de fondo múltiples',
    level: 'Intermedio',
    description: 'Al hacer scroll, dos imágenes de fondo se mueven a diferente velocidad (parallax CSS puro).',
    instructions: [
      'En <strong>index.html</strong>, un div con varias secciones de fondo.',
      'En <strong>styles.css</strong>, usa background-attachment: fixed con diferentes imágenes para dar sensación de profundidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="parallax-css"></div>\n<div class="contenido">Contenido normal</div>\n<div class="parallax-css2"></div>' },
      { name: 'styles.css', lang: 'css', content: '.parallax-css { height: 300px; background: url("https://via.placeholder.com/1200x300/2d6a4f/ffffff") center/cover fixed; }\n.parallax-css2 { height: 250px; background: url("https://via.placeholder.com/1200x250/d4af37/ffffff") center/cover fixed; }\n.contenido { height: 200px; background: white; display: flex; align-items: center; justify-content: center; }' }
    ]
  },
  {
    id: 'ch188',
    title: 'Buscador de Emojis',
    level: 'Intermedio',
    description: 'Un input que filtra una lista de emojis mientras escribes.',
    instructions: [
      'En <strong>index.html</strong>, input y un div contenedor de emojis.',
      'En <strong>script.js</strong>, array de emojis con descripciones, filtra y muestra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscar-emoji" placeholder="Buscar emoji...">\n<div id="emojis"></div>' },
      { name: 'script.js', lang: 'js', content: 'const emojis = ["😀 sonriente", "🥰 amor", "🔥 fuego", "💻 portátil", "🎉 fiesta"];\nconst input = document.getElementById("buscar-emoji");\nconst cont = document.getElementById("emojis");\nfunction render(lista) {\n  cont.innerHTML = lista.map(e => `<p>${e}</p>`).join("");\n}\nrender(emojis);\ninput.addEventListener("input", () => {\n  const filtro = input.value.toLowerCase();\n  const filtrados = emojis.filter(e => e.toLowerCase().includes(filtro));\n  render(filtrados);\n});' }
    ]
  },
  {
    id: 'ch189',
    title: 'Página de mantenimiento con cuenta atrás',
    level: 'Básico',
    description: 'Página que muestra un mensaje de "Estamos en mantenimiento" y una cuenta regresiva para el regreso.',
    instructions: [
      'En <strong>index.html</strong>, texto y un div cronómetro.',
      'En <strong>script.js</strong>, define una fecha/hora de finalización y muestra el conteo regresivo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1>En mantenimiento</h1>\n<p>Volveremos en <span id="cuenta"></span></p>' },
      { name: 'script.js', lang: 'js', content: 'const finMantenimiento = new Date();\nfinMantenimiento.setHours(finMantenimiento.getHours() + 2);\nfunction actualizar() {\n  const diff = finMantenimiento - new Date();\n  if (diff <= 0) { document.getElementById("cuenta").textContent = "¡Ya disponible!"; return; }\n  const h = Math.floor(diff / 3600000);\n  const m = Math.floor((diff % 3600000) / 60000);\n  const s = Math.floor((diff % 60000) / 1000);\n  document.getElementById("cuenta").textContent = `${h}h ${m}m ${s}s`;\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch190',
    title: 'Tarjeta de producto con botón "Agregar al carrito"',
    level: 'Básico',
    description: 'Diseña una tarjeta de producto simple con imagen, nombre, precio y botón.',
    instructions: [
      'En <strong>index.html</strong>, estructura divs con imagen, h3, p y botón.',
      'En <strong>styles.css</strong>, estiliza la tarjeta y el botón.',
      'En <strong>script.js</strong>, al hacer clic en el botón, muestra un alert o actualiza un contador.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="producto">\n  <img src="https://via.placeholder.com/150" alt="producto">\n  <h3>Producto Ejemplo</h3>\n  <p>$19.99</p>\n  <button class="agregar-carrito">Agregar al carrito</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.producto { max-width: 200px; border: 1px solid #eee; border-radius: 10px; padding: 15px; text-align: center; }\n.agregar-carrito { background: #2d6a4f; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".agregar-carrito").addEventListener("click", () => alert("Producto agregado al carrito"));' }
    ]
  },
  {
    id: 'ch191',
    title: 'Botón con degradado animado',
    level: 'Básico',
    description: 'Un botón cuyo fondo cambia de color con una animación de gradiente.',
    instructions: [
      'En <strong>index.html</strong>, botón con clase "gradient-btn".',
      'En <strong>styles.css</strong>, anima background-position de un gradiente lineal.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="gradient-btn">Clic aquí</button>' },
      { name: 'styles.css', lang: 'css', content: '.gradient-btn { padding: 12px 24px; border: none; background: linear-gradient(90deg, #2d6a4f, #d4af37); background-size: 200% 100%; color: white; border-radius: 5px; animation: mover-gradiente 3s linear infinite; cursor: pointer; }\n@keyframes mover-gradiente { from { background-position: 0% 50%; } to { background-position: 200% 50%; } }' }
    ]
  },
  {
    id: 'ch192',
    title: 'Campo de contraseña con requisitos visibles',
    level: 'Intermedio',
    description: 'Muestra requisitos (longitud, mayúscula, número, símbolo) y se marcan al cumplirse.',
    instructions: [
      'En <strong>index.html</strong>, input password y una lista de requisitos con spans.',
      'En <strong>script.js</strong>, verifica cada condición en tiempo real y cambia la clase a "cumplido".',
      'En <strong>styles.css</strong>, colorea o tacha los requisitos cumplidos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass" placeholder="Contraseña">\n<ul>\n  <li id="req1">Mínimo 8 caracteres</li>\n  <li id="req2">Una mayúscula</li>\n  <li id="req3">Un número</li>\n  <li id="req4">Un símbolo</li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: '.cumplido { color: green; text-decoration: line-through; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("pass").addEventListener("input", function() {\n  const val = this.value;\n  document.getElementById("req1").classList.toggle("cumplido", val.length >= 8);\n  document.getElementById("req2").classList.toggle("cumplido", /[A-Z]/.test(val));\n  document.getElementById("req3").classList.toggle("cumplido", /[0-9]/.test(val));\n  document.getElementById("req4").classList.toggle("cumplido", /[^A-Za-z0-9]/.test(val));\n});' }
    ]
  },
  {
    id: 'ch193',
    title: 'Animación de carga con puntos que crecen',
    level: 'Básico',
    description: 'Tres puntos que escalan secuencialmente.',
    instructions: [
      'En <strong>index.html</strong>, spans con clase "dot".',
      'En <strong>styles.css</strong>, animación scale con diferente delay.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="dots">\n  <span class="dot">●</span>\n  <span class="dot">●</span>\n  <span class="dot">●</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.dot { display: inline-block; font-size: 1.5rem; animation: salto 1.4s infinite; }\n.dot:nth-child(2) { animation-delay: 0.2s; }\n.dot:nth-child(3) { animation-delay: 0.4s; }\n@keyframes salto { 0%, 100% { transform: scale(0.5); } 50% { transform: scale(1); } }' }
    ]
  },
  {
    id: 'ch194',
    title: 'Juego de preguntas (quiz) de una sola pregunta',
    level: 'Intermedio',
    description: 'Muestra una pregunta con 3 botones de respuesta. Indica si es correcto o incorrecto.',
    instructions: [
      'En <strong>index.html</strong>, pregunta y botones.',
      'En <strong>script.js</strong>, comprueba la respuesta correcta.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>¿Cuál es la capital de Francia?</p>\n<button class="respuesta">Madrid</button>\n<button class="respuesta correcta">París</button>\n<button class="respuesta">Berlín</button>\n<p id="feed"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".respuesta").forEach(btn => {\n  btn.addEventListener("click", function() {\n    const feed = document.getElementById("feed");\n    if (this.classList.contains("correcta")) {\n      feed.textContent = "¡Correcto!";\n    } else {\n      feed.textContent = "Incorrecto, intenta de nuevo.";\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch195',
    title: 'Efecto de resplandor en imagen al cargar',
    level: 'Intermedio',
    description: 'Una imagen con un overlay que se ilumina brevemente al cargar la página.',
    instructions: [
      'En <strong>index.html</strong>, contenedor imagen con pseudo-elemento.',
      'En <strong>styles.css</strong>, pseudo-elemento con gradiente y animación que se desplaza una vez.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="imagen-brillo"><img src="https://via.placeholder.com/200"></div>' },
      { name: 'styles.css', lang: 'css', content: '.imagen-brillo { position: relative; overflow: hidden; display: inline-block; }\n.imagen-brillo::after { content: ""; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent); transform: skewX(-25deg); animation: brillo 2s 1s forwards; }\n@keyframes brillo { to { left: 150%; } }' }
    ]
  },
  {
    id: 'ch196',
    title: 'Formulario con campo deshabilitado dinámicamente',
    level: 'Básico',
    description: 'Un checkbox que al marcarse, habilita un campo de texto.',
    instructions: [
      'En <strong>index.html</strong>, checkbox y un input deshabilitado.',
      'En <strong>script.js</strong>, cambia disabled del input al cambiar el checkbox.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="checkbox" id="habilitar"> Activar campo\n<input type="text" id="campo" disabled placeholder="Este campo está bloqueado">' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("habilitar").addEventListener("change", function() {\n  document.getElementById("campo").disabled = !this.checked;\n});' }
    ]
  },
  {
    id: 'ch197',
    title: 'Texto con efecto de escritura y borrado',
    level: 'Intermedio',
    description: 'Simula la escritura de una palabra, luego la borra y escribe otra, en bucle.',
    instructions: [
      'En <strong>index.html</strong>, un span.',
      'En <strong>script.js</strong>, maneja arrays de palabras y timers para añadir y borrar caracteres.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="typewriter"></span>' },
      { name: 'script.js', lang: 'js', content: 'const palabras = ["creativo", "dinámico", "moderno"];\nlet palIdx = 0;\nlet charIdx = 0;\nlet borrando = false;\nconst span = document.getElementById("typewriter");\nfunction escribir() {\n  const actual = palabras[palIdx];\n  if (!borrando) {\n    span.textContent = actual.substring(0, charIdx+1);\n    charIdx++;\n    if (charIdx === actual.length) { borrando = true; setTimeout(escribir, 1500); return; }\n  } else {\n    span.textContent = actual.substring(0, charIdx-1);\n    charIdx--;\n    if (charIdx === 0) { borrando = false; palIdx = (palIdx + 1) % palabras.length; }\n  }\n  setTimeout(escribir, borrando ? 50 : 150);\n}\nescribir();' }
    ]
  },
  {
    id: 'ch198',
    title: 'Elemento que sigue al ratón suavemente',
    level: 'Intermedio',
    description: 'Un div que persigue el cursor con un pequeño retardo (efecto "lerp").',
    instructions: [
      'En <strong>index.html</strong>, un div con posición fija.',
      'En <strong>script.js</strong>, actualiza la posición del div interpolando hacia el cursor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="seguidor" style="width:20px;height:20px;background:#d4af37;border-radius:50%;position:absolute;"></div>' },
      { name: 'script.js', lang: 'js', content: 'const seguidor = document.getElementById("seguidor");\nlet mouseX = 0, mouseY = 0;\nlet posX = 0, posY = 0;\ndocument.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; });\nfunction animar() {\n  posX += (mouseX - posX) * 0.1;\n  posY += (mouseY - posY) * 0.1;\n  seguidor.style.left = posX - 10 + "px";\n  seguidor.style.top = posY - 10 + "px";\n  requestAnimationFrame(animar);\n}\nanimar();' }
    ]
  },
  {
    id: 'ch199',
    title: 'Tarjeta con efecto de inclinación 3D al pasar el ratón',
    level: 'Intermedio',
    description: 'La tarjeta rota ligeramente en 3D hacia donde apunta el cursor.',
    instructions: [
      'En <strong>index.html</strong>, tarjeta con clase "tilt".',
      'En <strong>script.js</strong>, calcula ángulos según la posición del ratón sobre la tarjeta.',
      'En <strong>styles.css</strong>, define transform-style preserve-3d.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tilt-card" style="width:200px;height:250px;background:#2d6a4f;color:white;">TILT</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".tilt-card").addEventListener("mousemove", e => {\n  const card = e.currentTarget;\n  const rect = card.getBoundingClientRect();\n  const x = (e.clientX - rect.left) / rect.width - 0.5;\n  const y = (e.clientY - rect.top) / rect.height - 0.5;\n  card.style.transform = `rotateY(${x*20}deg) rotateX(${-y*20}deg)`;\n});' }
    ]
  },
  {
    id: 'ch200',
    title: 'Reloj tipo "flip clock" (con CSS)',
    level: 'Avanzado',
    description: 'Simula los números de un flip clock con animaciones de giro.',
    instructions: [
      'En <strong>index.html</strong>, varios divs para cada dígito.',
      'En <strong>styles.css</strong>, dos mitades (superior e inferior) que simulan el giro con transform origin.',
      'En <strong>script.js</strong>, actualiza los dígitos con la hora.',
      'Nota: es complejo, una versión simplificada solo muestra dígitos que cambian con fade.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flip-clock">\n  <span id="horas">00</span>:<span id="minutos">00</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flip-clock { font-size: 2rem; font-family: monospace; }' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const ahora = new Date();\n  document.getElementById("horas").textContent = String(ahora.getHours()).padStart(2, "0");\n  document.getElementById("minutos").textContent = String(ahora.getMinutes()).padStart(2, "0");\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
    {
    id: 'ch201',
    title: 'Selector de color de fondo con input range',
    level: 'Básico',
    description: 'Usa tres controles deslizantes (rojo, verde, azul) para cambiar el color de fondo de la página.',
    instructions: [
      'En <strong>index.html</strong>, añade tres <code>&lt;input type="range"&gt;</code> con id "r", "g", "b" (valores 0-255) y un div para previsualizar el color.',
      'En <strong>script.js</strong>, escucha el evento <code>input</code> en cada rango y actualiza el fondo con <code>rgb(r,g,b)</code>.',
      'En <strong>styles.css</strong>, centra los controles y da estilo al div de muestra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="control-color">\n  <label>R: <input type="range" id="r" min="0" max="255" value="45"></label>\n  <label>G: <input type="range" id="g" min="0" max="255" value="106"></label>\n  <label>B: <input type="range" id="b" min="0" max="255" value="79"></label>\n  <div id="muestra" style="width:100px;height:100px;margin-top:10px;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.control-color { text-align: center; }\n#muestra { background: rgb(45,106,79); border: 1px solid #ccc; margin: 0 auto; }' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const r = document.getElementById("r").value;\n  const g = document.getElementById("g").value;\n  const b = document.getElementById("b").value;\n  document.getElementById("muestra").style.backgroundColor = `rgb(${r},${g},${b})`;\n  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;\n}\ndocument.querySelectorAll("input[type=range]").forEach(input => input.addEventListener("input", actualizar));\nactualizar();' }
    ]
  },
  {
    id: 'ch202',
    title: 'Lista de tareas con prioridad (colores)',
    level: 'Intermedio',
    description: 'Crea un to-do list donde cada tarea tenga una prioridad (alta, media, baja) que cambie su color.',
    instructions: [
      'En <strong>index.html</strong>, input de texto, select con prioridades y botón "Agregar". Lista vacía.',
      'En <strong>script.js</strong>, al añadir, almacena la prioridad y asigna una clase CSS según el valor.',
      'En <strong>styles.css</strong>, define colores para .alta, .media, .baja.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarea" placeholder="Nueva tarea">\n<select id="prioridad">\n  <option value="alta">Alta</option>\n  <option value="media">Media</option>\n  <option value="baja">Baja</option>\n</select>\n<button id="agregar">Agregar</button>\n<ul id="lista"></ul>' },
      { name: 'styles.css', lang: 'css', content: '.alta { color: red; font-weight: bold; }\n.media { color: orange; }\n.baja { color: green; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("agregar").addEventListener("click", () => {\n  const texto = document.getElementById("tarea").value.trim();\n  const prioridad = document.getElementById("prioridad").value;\n  if (texto) {\n    const li = document.createElement("li");\n    li.textContent = texto;\n    li.className = prioridad;\n    document.getElementById("lista").appendChild(li);\n    document.getElementById("tarea").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch203',
    title: 'Gráfico de líneas simple con Canvas',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de líneas conectando puntos a partir de un array de datos.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;canvas&gt;</code> con id "grafico".',
      'En <strong>script.js</strong>, define un array de valores, calcula las coordenadas y dibuja líneas.',
      'Añade una cuadrícula básica y etiquetas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="grafico" width="400" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("grafico");\nconst ctx = canvas.getContext("2d");\nconst datos = [10, 40, 30, 70, 50, 90, 20];\nconst max = Math.max(...datos);\nconst ancho = canvas.width / (datos.length - 1);\nctx.beginPath();\nctx.moveTo(0, canvas.height - (datos[0] / max) * canvas.height);\ndatos.forEach((v, i) => {\n  ctx.lineTo(i * ancho, canvas.height - (v / max) * canvas.height);\n});\nctx.strokeStyle = "#2d6a4f";\nctx.lineWidth = 2;\nctx.stroke();' }
    ]
  },
  {
    id: 'ch204',
    title: 'Sistema de migas de pan (breadcrumbs)',
    level: 'Básico',
    description: 'Crea una barra de navegación tipo migas de pan con enlaces y separadores.',
    instructions: [
      'En <strong>index.html</strong>, una lista ordenada o divs con enlaces y el carácter "›".',
      'En <strong>styles.css</strong>, muestra los elementos en línea y estiliza los separadores con pseudo-elementos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav class="breadcrumbs">\n  <a href="#">Inicio</a>\n  <span>›</span>\n  <a href="#">Categoría</a>\n  <span>›</span>\n  <span>Producto actual</span>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '.breadcrumbs a, .breadcrumbs span { text-decoration: none; color: #2d6a4f; margin: 0 5px; }\n.breadcrumbs span { color: #666; }' }
    ]
  },
  {
    id: 'ch205',
    title: 'Caja de comentarios con almacenamiento local',
    level: 'Intermedio',
    description: 'Los visitantes pueden dejar comentarios que se guardan en localStorage y se muestran al recargar.',
    instructions: [
      'En <strong>index.html</strong>, formulario con nombre y mensaje, y un div para mostrar comentarios.',
      'En <strong>script.js</strong>, guarda un array de objetos en localStorage, renderiza la lista y añade nuevos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="nombre" placeholder="Tu nombre">\n<textarea id="mensaje" placeholder="Comentario"></textarea>\n<button id="publicar">Publicar</button>\n<div id="comentarios"></div>' },
      { name: 'script.js', lang: 'js', content: 'let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];\nfunction mostrar() {\n  document.getElementById("comentarios").innerHTML = comentarios.map(c => `<p><strong>${c.nombre}</strong>: ${c.mensaje}</p>`).join("");\n}\ndocument.getElementById("publicar").addEventListener("click", () => {\n  const nombre = document.getElementById("nombre").value.trim();\n  const mensaje = document.getElementById("mensaje").value.trim();\n  if (nombre && mensaje) {\n    comentarios.push({ nombre, mensaje });\n    localStorage.setItem("comentarios", JSON.stringify(comentarios));\n    mostrar();\n    document.getElementById("nombre").value = "";\n    document.getElementById("mensaje").value = "";\n  }\n});\nmostrar();' }
    ]
  },
  {
    id: 'ch206',
    title: 'Efecto de desenfoque en tarjeta al hacer hover',
    level: 'Básico',
    description: 'Una tarjeta con imagen que se vuelve borrosa al pasar el ratón por encima.',
    instructions: [
      'En <strong>index.html</strong>, un div con imagen de fondo.',
      'En <strong>styles.css</strong>, aplica <code>filter: blur(0)</code> y transición a <code>blur(3px)</code> al hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-blur"></div>' },
      { name: 'styles.css', lang: 'css', content: '.card-blur {\n  width: 300px;\n  height: 200px;\n  background: url("https://via.placeholder.com/300x200") center/cover;\n  transition: filter 0.3s;\n}\n.card-blur:hover { filter: blur(4px); }' }
    ]
  },
  {
    id: 'ch207',
    title: 'Scroll suave a elementos con JavaScript',
    level: 'Básico',
    description: 'Al hacer clic en un botón, la página se desplaza suavemente hacia un elemento específico.',
    instructions: [
      'En <strong>index.html</strong>, un botón y un div destino alejado.',
      'En <strong>script.js</strong>, utiliza <code>element.scrollIntoView({ behavior: "smooth" })</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="irAbajo">Ir a destino</button>\n<div id="destino" style="margin-top:800px;">¡Destino alcanzado!</div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("irAbajo").addEventListener("click", () => {\n  document.getElementById("destino").scrollIntoView({ behavior: "smooth" });\n});' }
    ]
  },
  {
    id: 'ch208',
    title: 'Efecto de texto con sombra que sigue al ratón',
    level: 'Intermedio',
    description: 'Un título cuya sombra se mueve dinámicamente con la posición del cursor.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con id "titulo".',
      'En <strong>script.js</strong>, escucha mousemove y aplica text-shadow con desplazamiento calculado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 id="titulo">Sombra dinámica</h1>' },
      { name: 'script.js', lang: 'js', content: 'document.addEventListener("mousemove", e => {\n  const x = (e.clientX - window.innerWidth/2) / 20;\n  const y = (e.clientY - window.innerHeight/2) / 20;\n  document.getElementById("titulo").style.textShadow = `${x}px ${y}px 10px rgba(0,0,0,0.3)`;\n});' }
    ]
  },
  {
    id: 'ch209',
    title: 'Formulario con botón de enviar que muestra carga',
    level: 'Intermedio',
    description: 'Al enviar el formulario, el botón cambia a un spinner de carga durante 2 segundos simulando envío.',
    instructions: [
      'En <strong>index.html</strong>, formulario simple y botón submit.',
      'En <strong>script.js</strong>, previene el envío, deshabilita el botón, muestra "Enviando..." y tras 2s restaura.',
      'En <strong>styles.css</strong>, estiliza el botón con transición.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formCarga">\n  <input type="text" placeholder="Mensaje" required>\n  <button type="submit" id="btnEnviar">Enviar</button>\n</form>' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("btnEnviar");\ndocument.getElementById("formCarga").addEventListener("submit", function(e) {\n  e.preventDefault();\n  btn.disabled = true;\n  btn.textContent = "Enviando...";\n  setTimeout(() => {\n    btn.textContent = "Enviado ✓";\n    setTimeout(() => {\n      btn.disabled = false;\n      btn.textContent = "Enviar";\n    }, 1500);\n  }, 2000);\n});' }
    ]
  },
  {
    id: 'ch210',
    title: 'Barra lateral deslizante (off-canvas)',
    level: 'Avanzado',
    description: 'Un menú lateral que aparece y se oculta con transición suave al hacer clic en un botón hamburguesa.',
    instructions: [
      'En <strong>index.html</strong>, un div menú lateral con posición fija y un botón hamburguesa.',
      'En <strong>styles.css</strong>, menú con width 250px, left -250px, transición left 0.3s. Clase "abierto" con left 0.',
      'En <strong>script.js</strong>, alternar la clase abierto al hacer clic.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="hamburguesa">☰</button>\n<nav id="offcanvas">\n  <a href="#">Inicio</a>\n  <a href="#">Servicios</a>\n  <a href="#">Contacto</a>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '#offcanvas { position: fixed; top: 0; left: -250px; width: 250px; height: 100%; background: #2d6a4f; transition: left 0.3s; padding-top: 60px; }\n#offcanvas.abierto { left: 0; }\n#hamburguesa { font-size: 2rem; position: fixed; top: 10px; left: 10px; z-index: 100; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("hamburguesa").addEventListener("click", () => {\n  document.getElementById("offcanvas").classList.toggle("abierto");\n});' }
    ]
  },
  {
    id: 'ch211',
    title: 'Efecto de partículas conectadas (canvas)',
    level: 'Avanzado',
    description: 'Partículas que se mueven y trazan líneas entre ellas cuando están cerca.',
    instructions: [
      'En <strong>index.html</strong>, canvas a pantalla completa.',
      'En <strong>script.js</strong>, crea un array de partículas, actualiza posiciones y dibuja líneas si la distancia es < 100px.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="canvas"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst particulas = Array.from({length: 50}, () => ({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*2, vy: (Math.random()-0.5)*2 }));\nfunction animar() {\n  ctx.clearRect(0,0,canvas.width,canvas.height);\n  particulas.forEach(p => {\n    p.x += p.vx; p.y += p.vy;\n    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;\n    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;\n    ctx.fillStyle = "#2d6a4f";\n    ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI*2); ctx.fill();\n    particulas.forEach(p2 => {\n      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);\n      if (dist < 120) { ctx.strokeStyle = `rgba(45,106,79,${0.2 - dist/600})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }\n    });\n  });\n  requestAnimationFrame(animar);\n}\nanimar();' }
    ]
  },
  {
    id: 'ch212',
    title: 'Clip-path en imagen con forma de polígono',
    level: 'Básico',
    description: 'Recorta una imagen con forma de hexágono usando clip-path.',
    instructions: [
      'En <strong>index.html</strong>, una imagen con clase "hex".',
      'En <strong>styles.css</strong>, aplica <code>clip-path: polygon(...)</code>.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/200" class="hex">' },
      { name: 'styles.css', lang: 'css', content: '.hex { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }' }
    ]
  },
  {
    id: 'ch213',
    title: 'Lista de tareas con fecha de vencimiento',
    level: 'Intermedio',
    description: 'Añade una fecha límite a cada tarea y muestra cuántos días faltan.',
    instructions: [
      'En <strong>index.html</strong>, inputs para tarea y fecha, botón "Agregar". La lista muestra la tarea, fecha y días restantes.',
      'En <strong>script.js</strong>, calcula la diferencia de días entre la fecha seleccionada y hoy.',
      'En <strong>styles.css</strong>, colorea en rojo si faltan menos de 3 días.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarea" placeholder="Tarea">\n<input type="date" id="fecha">\n<button id="agregar">Agregar</button>\n<ul id="lista"></ul>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("agregar").addEventListener("click", () => {\n  const texto = document.getElementById("tarea").value.trim();\n  const fecha = document.getElementById("fecha").value;\n  if (texto && fecha) {\n    const diasRestantes = Math.ceil((new Date(fecha) - new Date()) / (1000*60*60*24));\n    const li = document.createElement("li");\n    li.innerHTML = `${texto} - ${fecha} (${diasRestantes} días)`;\n    if (diasRestantes < 3) li.style.color = "red";\n    document.getElementById("lista").appendChild(li);\n  }\n});' }
    ]
  },
  {
    id: 'ch214',
    title: 'Reloj mundial (varias zonas horarias)',
    level: 'Avanzado',
    description: 'Muestra la hora actual en varias ciudades del mundo simultáneamente.',
    instructions: [
      'En <strong>index.html</strong>, una lista de ciudades con sus respectivos span.',
      'En <strong>script.js</strong>, usa <code>Intl.DateTimeFormat</code> o cálculos manuales para mostrar la hora localizada.',
      'Actualiza cada segundo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul>\n  <li>Nueva York: <span id="ny"></span></li>\n  <li>Londres: <span id="londres"></span></li>\n  <li>Tokio: <span id="tokio"></span></li>\n</ul>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const ahora = new Date();\n  document.getElementById("ny").textContent = new Date(ahora.toLocaleString("en-US", {timeZone: "America/New_York"})).toLocaleTimeString();\n  document.getElementById("londres").textContent = new Date(ahora.toLocaleString("en-US", {timeZone: "Europe/London"})).toLocaleTimeString();\n  document.getElementById("tokio").textContent = new Date(ahora.toLocaleString("en-US", {timeZone: "Asia/Tokyo"})).toLocaleTimeString();\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch215',
    title: 'Animación de salto de una pelota realista',
    level: 'Intermedio',
    description: 'Una pelota que cae y rebota con easing realista usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, un div pequeña pelota.',
      'En <strong>styles.css</strong>, animación que combina translateY y scale para simular el aplastamiento al rebotar.',
      'Usa curvas de aceleración (ease-in, ease-out).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="pelota-realista"></div>' },
      { name: 'styles.css', lang: 'css', content: '.pelota-realista { width: 50px; height: 50px; background: #d4af37; border-radius: 50%; animation: salto-realista 1s ease-in infinite alternate; }\n@keyframes salto-realista { 0% { transform: translateY(0) scale(1, 1); } 90% { transform: translateY(200px) scale(0.8, 1.2); } 100% { transform: translateY(200px) scale(0.8, 1.2); } }' }
    ]
  },
  {
    id: 'ch216',
    title: 'Página con modo lectura (quitar distracciones)',
    level: 'Intermedio',
    description: 'Un botón que al hacer clic oculta elementos secundarios (como sidebars) y agranda el contenido principal.',
    instructions: [
      'En <strong>index.html</strong>, estructura con header, sidebar y main. Un botón "Modo lectura".',
      'En <strong>script.js</strong>, alterna una clase que oculta header y sidebar.',
      'En <strong>styles.css</strong>, el main ocupa todo el ancho.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="lectura">Modo lectura</button>\n<header>Cabecera</header>\n<div class="wrapper">\n  <aside>Sidebar</aside>\n  <main>Contenido principal...</main>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.modo-lectura header, .modo-lectura aside { display: none; }\n.modo-lectura main { width: 100%; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("lectura").addEventListener("click", () => {\n  document.body.classList.toggle("modo-lectura");\n});' }
    ]
  },
  {
    id: 'ch217',
    title: 'Selector de tema con CSS custom properties',
    level: 'Intermedio',
    description: 'Cambia el tema de la página (colores) usando variables CSS y un botón.',
    instructions: [
      'En <strong>index.html</strong>, define variables en :root y un botón para alternar.',
      'En <strong>script.js</strong>, al hacer clic, cambia las variables CSS mediante style.setProperty.',
      'Guarda la preferencia en localStorage.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="contenido">Texto de ejemplo</div>\n<button id="cambiarTema">Cambiar tema</button>' },
      { name: 'styles.css', lang: 'css', content: ':root { --bg: white; --color: black; }\nbody { background: var(--bg); color: var(--color); }' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("cambiarTema");\nlet oscuro = localStorage.getItem("tema-oscuro") === "true";\nbtn.textContent = oscuro ? "Tema claro" : "Tema oscuro";\nbtn.addEventListener("click", () => {\n  oscuro = !oscuro;\n  document.documentElement.style.setProperty("--bg", oscuro ? "#1e1e2e" : "white");\n  document.documentElement.style.setProperty("--color", oscuro ? "#cdd6f4" : "black");\n  localStorage.setItem("tema-oscuro", oscuro);\n  btn.textContent = oscuro ? "Tema claro" : "Tema oscuro";\n});' }
    ]
  },
  {
    id: 'ch218',
    title: 'Efecto de texto "wave" (onda)',
    level: 'Básico',
    description: 'Cada letra de un título sube y baja secuencialmente creando un efecto de ola.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con varias letras en spans.',
      'En <strong>styles.css</strong>, animación translateY con retraso incremental gracias a nth-child.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="wave">\n  <span>O</span><span>l</span><span>a</span>\n</h1>' },
      { name: 'styles.css', lang: 'css', content: '.wave span { display: inline-block; animation: onda 1s ease-in-out infinite; }\n.wave span:nth-child(1) { animation-delay: 0s; }\n.wave span:nth-child(2) { animation-delay: 0.1s; }\n.wave span:nth-child(3) { animation-delay: 0.2s; }\n@keyframes onda { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }' }
    ]
  },
  {
    id: 'ch219',
    title: 'Juego de reacción (haz clic rápido)',
    level: 'Intermedio',
    description: 'Aparece un círculo en una posición aleatoria y debes hacer clic lo más rápido posible. Muestra el tiempo de reacción.',
    instructions: [
      'En <strong>index.html</strong>, un div círculo y un span de tiempo.',
      'En <strong>script.js</strong>, al hacer clic en el círculo, calcula el tiempo desde que apareció y lo reinicia en nueva posición.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="circulo" style="width:50px;height:50px;background:red;border-radius:50%;position:absolute;"></div>\n<p>Tiempo: <span id="tiempo">0</span> ms</p>' },
      { name: 'script.js', lang: 'js', content: 'const circulo = document.getElementById("circulo");\nlet inicio = Date.now();\nfunction mover() {\n  const x = Math.random() * (window.innerWidth - 50);\n  const y = Math.random() * (window.innerHeight - 50);\n  circulo.style.left = x + "px";\n  circulo.style.top = y + "px";\n  inicio = Date.now();\n}\ncirculo.addEventListener("click", () => {\n  const tiempo = Date.now() - inicio;\n  document.getElementById("tiempo").textContent = tiempo;\n  mover();\n});\nmover();' }
    ]
  },
  {
    id: 'ch220',
    title: 'Mensaje de copia al portapapeles',
    level: 'Básico',
    description: 'Un texto y un botón que al hacer clic copia el texto al portapapeles y muestra un aviso.',
    instructions: [
      'En <strong>index.html</strong>, un párrafo con texto y un botón "Copiar".',
      'En <strong>script.js</strong>, usa navigator.clipboard.writeText y luego cambia temporalmente el texto del botón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p id="texto">Texto para copiar</p>\n<button id="copiar">Copiar</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("copiar").addEventListener("click", () => {\n  const texto = document.getElementById("texto").textContent;\n  navigator.clipboard.writeText(texto).then(() => {\n    const btn = document.getElementById("copiar");\n    btn.textContent = "¡Copiado!";\n    setTimeout(() => btn.textContent = "Copiar", 1500);\n  });\n});' }
    ]
  },
  {
    id: 'ch221',
    title: 'Tarjeta con efecto de profundidad al pasar el ratón',
    level: 'Básico',
    description: 'Al hacer hover, la tarjeta se eleva y proyecta una sombra más pronunciada.',
    instructions: [
      'En <strong>index.html</strong>, div con clase "card-elevate".',
      'En <strong>styles.css</strong>, transición en transform y box-shadow.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-elevate">Contenido de tarjeta</div>' },
      { name: 'styles.css', lang: 'css', content: '.card-elevate { padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }\n.card-elevate:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }' }
    ]
  },
  {
    id: 'ch222',
    title: 'Semáforo interactivo',
    level: 'Básico',
    description: 'Tres círculos (rojo, amarillo, verde) que se encienden secuencialmente al hacer clic en un botón "Cambiar".',
    instructions: [
      'En <strong>index.html</strong>, tres divs contenedores de círculos.',
      'En <strong>script.js</strong>, un índice que avanza cíclicamente y aplica opacidad o color.',
      'En <strong>styles.css</strong>, círculos grises por defecto, encendidos con color sólido.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="semaforo">\n  <div class="luz roja"></div>\n  <div class="luz amarilla"></div>\n  <div class="luz verde"></div>\n  <button id="cambiar">Cambiar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.semaforo { display: flex; flex-direction: column; align-items: center; gap: 10px; }\n.luz { width: 40px; height: 40px; border-radius: 50%; background: #333; }\n.activo.roja { background: red; }\n.activo.amarilla { background: yellow; }\n.activo.verde { background: #00ff00; }' },
      { name: 'script.js', lang: 'js', content: 'let estado = 0;\nconst luces = ["roja", "amarilla", "verde"];\ndocument.getElementById("cambiar").addEventListener("click", () => {\n  document.querySelectorAll(".luz").forEach(luz => luz.classList.remove("activo"));\n  estado = (estado + 1) % 3;\n  document.querySelector(`.${luces[estado]}`).classList.add("activo");\n});' }
    ]
  },
  {
    id: 'ch223',
    title: 'Contador con botones +/-',
    level: 'Básico',
    description: 'Un número que se incrementa o decrementa con dos botones.',
    instructions: [
      'En <strong>index.html</strong>, un span con el contador y botones + y -.',
      'En <strong>script.js</strong>, maneja los clics para modificar la variable.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div>\n  <button id="decrementar">-</button>\n  <span id="contador">0</span>\n  <button id="incrementar">+</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'let contador = 0;\nconst span = document.getElementById("contador");\ndocument.getElementById("incrementar").addEventListener("click", () => { contador++; span.textContent = contador; });\ndocument.getElementById("decrementar").addEventListener("click", () => { contador--; span.textContent = contador; });' }
    ]
  },
  {
    id: 'ch224',
    title: 'Simulador de ruleta de la fortuna',
    level: 'Intermedio',
    description: 'Una ruleta que gira al hacer clic y se detiene en un resultado aleatorio.',
    instructions: [
      'En <strong>index.html</strong>, un círculo con segmentos de colores (CSS) y un botón "Girar".',
      'En <strong>script.js</strong>, añade una clase que rota el círculo rápidamente y se detiene con una rotación aleatoria.',
      'En <strong>styles.css</strong>, usa transición de transform con curva de desaceleración.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="ruleta-container">\n  <div class="ruleta"></div>\n  <button id="girar">Girar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.ruleta-container { position: relative; width: 200px; height: 200px; }\n.ruleta { width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(red 0deg 60deg, blue 60deg 120deg, green 120deg 180deg, yellow 180deg 240deg, orange 240deg 300deg, purple 300deg 360deg); transition: transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99); }' },
      { name: 'script.js', lang: 'js', content: 'const ruleta = document.querySelector(".ruleta");\nlet currentRotation = 0;\ndocument.getElementById("girar").addEventListener("click", () => {\n  currentRotation += Math.ceil(Math.random() * 3600) + 720; // varias vueltas extras\n  ruleta.style.transform = `rotate(${currentRotation}deg)`;\n});' }
    ]
  },
  {
    id: 'ch225',
    title: 'Desplegable (dropdown) accesible con teclado',
    level: 'Intermedio',
    description: 'Un menú desplegable que se abre no solo con clic, sino también con Enter y se navega con flechas.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Menú" y una lista ul.',
      'En <strong>script.js</strong>, maneja eventos keydown para abrir/cerrar y mover el foco.',
      'En <strong>styles.css</strong>, oculta la lista y la muestra al activar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="dropdown">\n  <button id="btn-menu" aria-haspopup="true">Menú</button>\n  <ul id="list-menu" role="menu" hidden>\n    <li role="menuitem" tabindex="-1">Opción 1</li>\n    <li role="menuitem" tabindex="-1">Opción 2</li>\n    <li role="menuitem" tabindex="-1">Opción 3</li>\n  </ul>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#list-menu { list-style: none; padding: 5px; border: 1px solid #ccc; display: none; }\n#list-menu[hidden] { display: none; }\n#list-menu:not([hidden]) { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("btn-menu");\nconst menu = document.getElementById("list-menu");\nbtn.addEventListener("click", () => menu.hidden = !menu.hidden);\nbtn.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); menu.hidden = !menu.hidden; } });' }
    ]
  },
  {
    id: 'ch226',
    title: 'Efecto de imagen que se revela al hacer scroll (scroll reveal)',
    level: 'Intermedio',
    description: 'Al hacer scroll hacia abajo, las imágenes aparecen con un fade o deslizamiento.',
    instructions: [
      'En <strong>index.html</strong>, varias imágenes con clase "reveal".',
      'En <strong>script.js</strong>, usa IntersectionObserver para añadir clase "visible".',
      'En <strong>styles.css</strong>, define opacidad y transform, y transición al recibir visible.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img class="reveal" src="https://via.placeholder.com/300" alt="img">\n<img class="reveal" src="https://via.placeholder.com/300" alt="img">\n<img class="reveal" src="https://via.placeholder.com/300" alt="img">' },
      { name: 'styles.css', lang: 'css', content: '.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s, transform 0.6s; margin: 50px auto; display: block; }\n.reveal.visible { opacity: 1; transform: translateY(0); }' },
      { name: 'script.js', lang: 'js', content: 'const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) entry.target.classList.add("visible");\n  });\n});\ndocument.querySelectorAll(".reveal").forEach(img => observer.observe(img));' }
    ]
  },
  {
    id: 'ch227',
    title: 'Formulario con contraseña y confirmación (validación)',
    level: 'Básico',
    description: 'Compara dos campos de contraseña y muestra si coinciden.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs password y un span de error.',
      'En <strong>script.js</strong>, al escribir en cualquiera, compara los valores y muestra mensaje de coincidencia.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass1" placeholder="Contraseña">\n<input type="password" id="pass2" placeholder="Repetir contraseña">\n<span id="mensaje"></span>' },
      { name: 'script.js', lang: 'js', content: 'const pass1 = document.getElementById("pass1");\nconst pass2 = document.getElementById("pass2");\nconst msg = document.getElementById("mensaje");\nfunction validar() {\n  if (pass2.value !== "") {\n    msg.textContent = pass1.value === pass2.value ? "Coinciden" : "No coinciden";\n    msg.style.color = pass1.value === pass2.value ? "green" : "red";\n  } else msg.textContent = "";\n}\npass1.addEventListener("input", validar);\npass2.addEventListener("input", validar);' }
    ]
  },
  {
    id: 'ch228',
    title: 'Álbum de fotos con vista previa en miniatura',
    level: 'Intermedio',
    description: 'Muestra una imagen principal y al hacer clic en miniaturas, cambia la imagen principal.',
    instructions: [
      'En <strong>index.html</strong>, una imagen grande y varias miniaturas debajo.',
      'En <strong>script.js</strong>, al hacer clic en una miniatura, actualiza el src de la imagen grande.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img id="principal" src="https://via.placeholder.com/400/FF0000" alt="principal">\n<div class="thumbnails">\n  <img class="thumb" src="https://via.placeholder.com/100/FF0000" data-full="https://via.placeholder.com/400/FF0000">\n  <img class="thumb" src="https://via.placeholder.com/100/00FF00" data-full="https://via.placeholder.com/400/00FF00">\n  <img class="thumb" src="https://via.placeholder.com/100/0000FF" data-full="https://via.placeholder.com/400/0000FF">\n</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".thumb").forEach(thumb => {\n  thumb.addEventListener("click", () => {\n    document.getElementById("principal").src = thumb.dataset.full;\n  });\n});' }
    ]
  },
  {
    id: 'ch229',
    title: 'Menú de navegación con barra de búsqueda integrada',
    level: 'Básico',
    description: 'Una barra de navegación con enlaces y un campo de búsqueda que simplemente muestra lo ingresado en un alert.',
    instructions: [
      'En <strong>index.html</strong>, nav con input y botón.',
      'En <strong>script.js</strong>, al hacer clic en buscar, muestra el término en un alert.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <a href="#">Inicio</a>\n  <input type="text" id="buscar" placeholder="Buscar..."><button id="btnBuscar">Buscar</button>\n</nav>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("btnBuscar").addEventListener("click", () => {\n  const term = document.getElementById("buscar").value;\n  alert("Buscando: " + term);\n});' }
    ]
  },
  {
    id: 'ch230',
    title: 'Cronómetro con vuelta (lap)',
    level: 'Intermedio',
    description: 'Cronómetro con botones iniciar, pausar, reiniciar y "vuelta" que registra el tiempo parcial.',
    instructions: [
      'En <strong>index.html</strong>, display del cronómetro, botones y una lista de vueltas.',
      'En <strong>script.js</strong>, guarda los tiempos de vuelta en un array y los muestra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="crono">00:00.0</div>\n<button id="iniciar">Iniciar</button>\n<button id="pausar">Pausar</button>\n<button id="reiniciar">Reiniciar</button>\n<button id="vuelta">Vuelta</button>\n<ul id="vueltas"></ul>' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 0, intervalo = null, corriendo = false;\nconst display = document.getElementById("crono");\nfunction fmt(ms) {\n  const mins = String(Math.floor(ms / 60000)).padStart(2, "0");\n  const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");\n  const dec = Math.floor((ms % 1000) / 100);\n  return `${mins}:${secs}.${dec}`;\n}\nfunction actualizarDisplay() { display.textContent = fmt(tiempo); }\ndocument.getElementById("iniciar").addEventListener("click", () => {\n  if (!corriendo) {\n    corriendo = true;\n    intervalo = setInterval(() => { tiempo += 100; actualizarDisplay(); }, 100);\n  }\n});\ndocument.getElementById("pausar").addEventListener("click", () => { clearInterval(intervalo); corriendo = false; });\ndocument.getElementById("reiniciar").addEventListener("click", () => { clearInterval(intervalo); corriendo = false; tiempo = 0; actualizarDisplay(); document.getElementById("vueltas").innerHTML = ""; });\ndocument.getElementById("vuelta").addEventListener("click", () => {\n  if (corriendo) {\n    const li = document.createElement("li");\n    li.textContent = fmt(tiempo);\n    document.getElementById("vueltas").appendChild(li);\n  }\n});' }
    ]
  },
  {
    id: 'ch231',
    title: 'Gráfico de pastel (pie chart) animado con Canvas',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de pastel con varios sectores y anima la aparición de cada sector.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, define datos de porcentajes y colores. Anima el ángulo final de cada sector usando requestAnimationFrame.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="pieChart" width="200" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("pieChart");\nconst ctx = canvas.getContext("2d");\nconst valores = [30, 25, 20, 15, 10];\nconst colores = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];\nlet progreso = 0;\nfunction animar() {\n  ctx.clearRect(0,0,canvas.width,canvas.height);\n  let anguloInicial = 0;\n  const anguloMax = (Math.PI * 2) * progreso;\n  valores.forEach((v, i) => {\n    const angulo = (v / 100) * anguloMax;\n    ctx.beginPath();\n    ctx.moveTo(100, 100);\n    ctx.arc(100, 100, 80, anguloInicial, anguloInicial + angulo);\n    ctx.closePath();\n    ctx.fillStyle = colores[i];\n    ctx.fill();\n    anguloInicial += angulo;\n  });\n  if (progreso < 1) { progreso += 0.02; requestAnimationFrame(animar); }\n}\nanimar();' }
    ]
  },
  {
    id: 'ch232',
    title: 'Texto con máscara de recorte (background-clip)',
    level: 'Básico',
    description: 'El texto muestra una imagen de fondo a través de las letras.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con clase "clip-text".',
      'En <strong>styles.css</strong>, background-image, -webkit-background-clip: text y color transparente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="clip-text">IMAGEN EN TEXTO</h1>' },
      { name: 'styles.css', lang: 'css', content: '.clip-text {\n  background: url("https://via.placeholder.com/600x200") center/cover;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 3rem;\n  font-weight: bold;\n}' }
    ]
  },
  {
    id: 'ch233',
    title: 'Acordeón de imágenes (expandir al hacer clic)',
    level: 'Intermedio',
    description: 'Una fila de imágenes que al hacer clic se expanden horizontalmente ocupando más espacio.',
    instructions: [
      'En <strong>index.html</strong>, contenedor flex con varias imágenes.',
      'En <strong>script.js</strong>, al hacer clic en una imagen, se le asigna flex-grow mayor y a las otras menor.',
      'En <strong>styles.css</strong>, transiciones de flex.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="acordeon-img">\n  <img src="https://via.placeholder.com/200/FF0000">\n  <img src="https://via.placeholder.com/200/00FF00">\n  <img src="https://via.placeholder.com/200/0000FF">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.acordeon-img { display: flex; width: 80%; overflow: hidden; }\n.acordeon-img img { flex: 1; object-fit: cover; transition: flex 0.5s; cursor: pointer; height: 200px; }\n.acordeon-img img.expandida { flex: 3; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".acordeon-img img").forEach(img => {\n  img.addEventListener("click", function() {\n    document.querySelectorAll(".acordeon-img img").forEach(i => i.classList.remove("expandida"));\n    this.classList.add("expandida");\n  });\n});' }
    ]
  },
  {
    id: 'ch234',
    title: 'Banner de anuncio con botón cerrar persistente',
    level: 'Básico',
    description: 'Un banner en la parte superior que se puede cerrar y no vuelve a aparecer en 24 horas.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "banner" y un botón X.',
      'En <strong>script.js</strong>, al hacer clic en cerrar, oculta el banner y guarda la fecha en localStorage. Al cargar, comprueba si han pasado 24 horas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="banner">Promoción especial <button id="cerrar">X</button></div>' },
      { name: 'script.js', lang: 'js', content: 'const banner = document.getElementById("banner");\nconst ocultoHasta = localStorage.getItem("banner-oculto");\nif (ocultoHasta && Date.now() < parseInt(ocultoHasta)) {\n  banner.style.display = "none";\n}\ndocument.getElementById("cerrar").addEventListener("click", () => {\n  banner.style.display = "none";\n  localStorage.setItem("banner-oculto", Date.now() + 24*60*60*1000);\n});' }
    ]
  },
  {
    id: 'ch235',
    title: 'Efecto de máquina de escribir con cursor',
    level: 'Básico',
    description: 'Un texto se escribe automáticamente letra por letra con un cursor parpadeante al final.',
    instructions: [
      'En <strong>index.html</strong>, un span "texto" y otro span "cursor".',
      'En <strong>script.js</strong>, setInterval que va añadiendo caracteres.',
      'En <strong>styles.css</strong>, anima el cursor con blink.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="texto"></span><span class="cursor">|</span>' },
      { name: 'styles.css', lang: 'css', content: '.cursor { animation: parpadeo 1s infinite; }\n@keyframes parpadeo { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }' },
      { name: 'script.js', lang: 'js', content: 'const mensaje = "Escribiendo automáticamente...";\nlet i = 0;\nconst span = document.getElementById("texto");\nsetInterval(() => {\n  if (i < mensaje.length) span.textContent += mensaje.charAt(i++);\n}, 100);' }
    ]
  },
  {
    id: 'ch236',
    title: 'Lista de tarjetas con filtro por categoría',
    level: 'Intermedio',
    description: 'Filtra tarjetas de contenido al hacer clic en botones de categoría.',
    instructions: [
      'En <strong>index.html</strong>, botones de filtro y varias tarjetas con data-categoria.',
      'En <strong>script.js</strong>, oculta/muestra tarjetas según el botón seleccionado.',
      'En <strong>styles.css</strong>, estiliza las tarjetas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="filtro-btn" data-cat="todos">Todos</button>\n<button class="filtro-btn" data-cat="html">HTML</button>\n<button class="filtro-btn" data-cat="css">CSS</button>\n<div class="tarjetas">\n  <div class="tarjeta" data-cat="html">HTML básico</div>\n  <div class="tarjeta" data-cat="css">CSS avanzado</div>\n  <div class="tarjeta" data-cat="js">JavaScript</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tarjeta { padding: 20px; margin: 5px; background: #f4f4f4; border-radius: 5px; display: inline-block; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".filtro-btn").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const cat = btn.dataset.cat;\n    document.querySelectorAll(".tarjeta").forEach(t => {\n      t.style.display = (cat === "todos" || t.dataset.cat === cat) ? "inline-block" : "none";\n    });\n  });\n});' }
    ]
  },
  {
    id: 'ch237',
    title: 'Video de fondo con texto superpuesto',
    level: 'Intermedio',
    description: 'Un video que ocupa todo el fondo y un texto centrado encima.',
    instructions: [
      'En <strong>index.html</strong>, un elemento video con autoplay muted loop y un div con el texto.',
      'En <strong>styles.css</strong>, posiciona el video fijo y el texto en posición absoluta centrada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<video autoplay muted loop class="video-fondo">\n  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n</video>\n<div class="texto-superpuesto">\n  <h1>Texto sobre video</h1>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.video-fondo { position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1; }\n.texto-superpuesto { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 2rem; }' }
    ]
  },
  {
    id: 'ch238',
    title: 'Calculadora de días entre dos fechas',
    level: 'Básico',
    description: 'Elige dos fechas con input date y calcula la diferencia en días.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs date y un botón calcular.',
      'En <strong>script.js</strong>, resta los valores de fecha y muestra los días.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="date" id="fecha1">\n<input type="date" id="fecha2">\n<button id="calcular">Calcular diferencia</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const f1 = new Date(document.getElementById("fecha1").value);\n  const f2 = new Date(document.getElementById("fecha2").value);\n  const diff = Math.abs(f2 - f1) / (1000*60*60*24);\n  document.getElementById("resultado").textContent = `Diferencia: ${diff} días`;\n});' }
    ]
  },
  {
    id: 'ch239',
    title: 'Efecto de sombra interior en imagen',
    level: 'Básico',
    description: 'Añade una sombra interior a una imagen usando box-shadow inset.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor con la imagen dentro.',
      'En <strong>styles.css</strong>, aplica box-shadow inset al contenedor sobre la imagen.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="sombra-interna"><img src="https://via.placeholder.com/200"></div>' },
      { name: 'styles.css', lang: 'css', content: '.sombra-interna { display: inline-block; position: relative; }\n.sombra-interna::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: inset 0 0 20px rgba(0,0,0,0.7); }' }
    ]
  },
  {
    id: 'ch240',
    title: 'Feedback en forma de estrellas con emojis',
    level: 'Básico',
    description: 'Cinco emojis de estrellas que se pueden seleccionar para valorar.',
    instructions: [
      'En <strong>index.html</strong>, span con emojis ⭐.',
      'En <strong>script.js</strong>, al hacer clic se marca esa y todas las anteriores.',
      'En <strong>styles.css</strong>, estilo para el seleccionado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="estrellas">\n  <span class="star">⭐</span>\n  <span class="star">⭐</span>\n  <span class="star">⭐</span>\n  <span class="star">⭐</span>\n  <span class="star">⭐</span>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".star").forEach((star, idx) => {\n  star.addEventListener("click", () => {\n    document.querySelectorAll(".star").forEach((s, i) => {\n      s.style.opacity = i <= idx ? 1 : 0.3;\n    });\n  });\n});' }
    ]
  },
  {
    id: 'ch241',
    title: 'Animación de contador de número (de 0 a N)',
    level: 'Básico',
    description: 'Un número que se incrementa rápidamente desde 0 hasta un valor objetivo al cargar la página.',
    instructions: [
      'En <strong>index.html</strong>, un span con data-target.',
      'En <strong>script.js</strong>, usa setInterval para incrementar gradualmente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="contador" data-target="1500">0</span>' },
      { name: 'script.js', lang: 'js', content: 'const span = document.getElementById("contador");\nconst target = +span.dataset.target;\nlet count = 0;\nconst increment = target / 100;\nconst timer = setInterval(() => {\n  count += increment;\n  if (count >= target) { span.textContent = target; clearInterval(timer); }\n  else span.textContent = Math.ceil(count);\n}, 20);' }
    ]
  },
  {
    id: 'ch242',
    title: 'Scroll spy (resaltar enlace activo)',
    level: 'Intermedio',
    description: 'Al hacer scroll, se resalta el enlace del menú correspondiente a la sección visible.',
    instructions: [
      'En <strong>index.html</strong>, un nav con enlaces a secciones y varias secciones.',
      'En <strong>script.js</strong>, usa IntersectionObserver en las secciones para añadir clase activa al enlace.',
      'En <strong>styles.css</strong>, estilo para enlace activo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <a href="#sec1" class="nav-link">Sección 1</a>\n  <a href="#sec2" class="nav-link">Sección 2</a>\n</nav>\n<div id="sec1" style="height:500px;"></div>\n<div id="sec2" style="height:500px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '.nav-link.activo { color: #d4af37; font-weight: bold; }' },
      { name: 'script.js', lang: 'js', content: 'const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    const id = entry.target.id;\n    const link = document.querySelector(`a[href="#${id}"]`);\n    if (entry.isIntersecting) link.classList.add("activo");\n    else link.classList.remove("activo");\n  });\n}, { threshold: 0.5 });\ndocument.querySelectorAll("div[id]").forEach(div => observer.observe(div));' }
    ]
  },
  {
    id: 'ch243',
    title: 'Formulario dinámico con campos agregados por el usuario',
    level: 'Avanzado',
    description: 'El usuario puede agregar dinámicamente más campos de texto (ej. varios emails).',
    instructions: [
      'En <strong>index.html</strong>, un contenedor de campos con un botón "Añadir email".',
      'En <strong>script.js</strong>, al hacer clic, clona un campo de email y lo añade al contenedor.',
      'Permite eliminar campos adicionales.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="emails">\n  <div class="email-field"><input type="email" name="email[]"></div>\n</div>\n<button id="agregarEmail">+ Añadir email</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("agregarEmail").addEventListener("click", () => {\n  const div = document.createElement("div");\n  div.className = "email-field";\n  div.innerHTML = \'<input type="email" name="email[]"> <button class="borrar">X</button>\';\n  document.getElementById("emails").appendChild(div);\n  div.querySelector(".borrar").addEventListener("click", () => div.remove());\n});' }
    ]
  },
  {
    id: 'ch244',
    title: 'Barra de herramientas flotante (sticky toolbar)',
    level: 'Intermedio',
    description: 'Una barra con botones de acción que se fija en la parte inferior de la pantalla tras hacer scroll.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "toolbar" y contenido largo.',
      'En <strong>script.js</strong>, al hacer scroll más allá de una altura, añade clase fixed-bottom.',
      'En <strong>styles.css</strong>, posición fija abajo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="toolbar">Acciones rápidas</div>\n<div style="height:2000px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '#toolbar { background: #2d6a4f; color: white; padding: 10px; position: fixed; bottom: -60px; left: 0; width: 100%; transition: bottom 0.3s; }\n#toolbar.mostrar { bottom: 0; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const toolbar = document.getElementById("toolbar");\n  if (window.scrollY > 300) toolbar.classList.add("mostrar");\n  else toolbar.classList.remove("mostrar");\n});' }
    ]
  },
  {
    id: 'ch245',
    title: 'Imagen con efecto de bordes redondeados asimétricos',
    level: 'Básico',
    description: 'Una imagen con border-radius usando valores distintos en cada esquina.',
    instructions: [
      'En <strong>index.html</strong>, imagen con clase "forma".',
      'En <strong>styles.css</strong>, border-radius: 50% 20% 70% 30% etc.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/200" class="forma">' },
      { name: 'styles.css', lang: 'css', content: '.forma { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }' }
    ]
  },
  {
    id: 'ch246',
    title: 'Despertador con sonido (usando Web Audio API)',
    level: 'Avanzado',
    description: 'Configura una alarma a una hora y cuando llega emite un pitido usando AudioContext.',
    instructions: [
      'En <strong>index.html</strong>, input time y botón activar.',
      'En <strong>script.js</strong>, comprueba cada segundo y si coincide, genera un tono con oscillator.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="time" id="alarma">\n<button id="activar">Activar alarma</button>' },
      { name: 'script.js', lang: 'js', content: 'let alarmaHora = null;\nlet audioCtx;\ndocument.getElementById("activar").addEventListener("click", () => {\n  alarmaHora = document.getElementById("alarma").value;\n  audioCtx = new (window.AudioContext || window.webkitAudioContext)();\n});\nsetInterval(() => {\n  if (alarmaHora) {\n    const ahora = new Date().toTimeString().slice(0,5);\n    if (ahora === alarmaHora) {\n      const oscillator = audioCtx.createOscillator();\n      oscillator.type = "square";\n      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);\n      oscillator.connect(audioCtx.destination);\n      oscillator.start();\n      oscillator.stop(audioCtx.currentTime + 1);\n      alarmaHora = null;\n    }\n  }\n}, 1000);' }
    ]
  },
  {
    id: 'ch247',
    title: 'Galería de imágenes con lazy loading',
    level: 'Básico',
    description: 'Usa el atributo loading="lazy" en las imágenes para que se carguen según se necesiten.',
    instructions: [
      'En <strong>index.html</strong>, varias imágenes con el atributo loading="lazy".',
      'Comprueba en el inspector de red que solo se cargan al acercarse.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/600/FF0000" loading="lazy" alt="img1" style="margin:500px 0;">\n<img src="https://via.placeholder.com/600/00FF00" loading="lazy" alt="img2" style="margin:500px 0;">' }
    ]
  },
  {
    id: 'ch248',
    title: 'Sistema de notificaciones tipo toast (mejorado)',
    level: 'Intermedio',
    description: 'Muestra notificaciones en la esquina que se apilan y desaparecen individualmente.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor de toasts y un botón para generar una nueva.',
      'En <strong>script.js</strong>, crea un div con clase toast, lo añade al contenedor y programa su eliminación tras 4s.',
      'En <strong>styles.css</strong>, animación de entrada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="toast-container"></div>\n<button id="nuevoToast">Notificación</button>' },
      { name: 'styles.css', lang: 'css', content: '#toast-container { position: fixed; top: 10px; right: 10px; display: flex; flex-direction: column; gap: 10px; }\n.toast { background: #333; color: white; padding: 12px; border-radius: 5px; animation: slideIn 0.3s; }\n@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("nuevoToast").addEventListener("click", () => {\n  const toast = document.createElement("div");\n  toast.className = "toast";\n  toast.textContent = "Notificación " + new Date().toLocaleTimeString();\n  document.getElementById("toast-container").appendChild(toast);\n  setTimeout(() => toast.remove(), 4000);\n});' }
    ]
  },
  {
    id: 'ch249',
    title: 'Efecto de filtro en imagen (sepia, grises, invertir) con CSS',
    level: 'Básico',
    description: 'Aplica diferentes filtros CSS a una imagen mediante botones.',
    instructions: [
      'En <strong>index.html</strong>, imagen y botones con data-filter.',
      'En <strong>script.js</strong>, al hacer clic cambia el estilo filter de la imagen.',
      'Los filtros: none, grayscale(100%), sepia(100%), invert(100%).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img id="img" src="https://via.placeholder.com/200">\n<button data-filter="none">Normal</button>\n<button data-filter="grayscale(100%)">Grises</button>\n<button data-filter="sepia(100%)">Sepia</button>\n<button data-filter="invert(100%)">Invertir</button>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("[data-filter]").forEach(btn => {\n  btn.addEventListener("click", () => {\n    document.getElementById("img").style.filter = btn.dataset.filter;\n  });\n});' }
    ]
  },
  {
    id: 'ch250',
    title: 'Juego de Snake básico (canvas)',
    level: 'Avanzado',
    description: 'Implementa el clásico juego de la serpiente que crece al comer comida.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, controla la serpiente con las flechas del teclado, detecta colisiones y genera comida aleatoria.',
      'En <strong>styles.css</strong>, un diseño simple.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="snake" width="400" height="400"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("snake");\nconst ctx = canvas.getContext("2d");\nlet snake = [{x: 10, y: 10}];\nlet comida = {x: 15, y: 15};\nlet dir = {x: 0, y: 0};\ndocument.addEventListener("keydown", e => {\n  switch(e.key) {\n    case "ArrowUp": if (dir.y === 0) dir = {x: 0, y: -1}; break;\n    case "ArrowDown": if (dir.y === 0) dir = {x: 0, y: 1}; break;\n    case "ArrowLeft": if (dir.x === 0) dir = {x: -1, y: 0}; break;\n    case "ArrowRight": if (dir.x === 0) dir = {x: 1, y: 0}; break;\n  }\n});\nfunction gameLoop() {\n  const cabeza = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};\n  if (cabeza.x < 0 || cabeza.x >= 20 || cabeza.y < 0 || cabeza.y >= 20 || snake.some(seg => seg.x === cabeza.x && seg.y === cabeza.y)) {\n    alert("Game Over");\n    snake = [{x: 10, y: 10}]; dir = {x: 0, y: 0};\n  }\n  snake.unshift(cabeza);\n  if (cabeza.x === comida.x && cabeza.y === comida.y) {\n    comida = {x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20)};\n  } else {\n    snake.pop();\n  }\n  ctx.clearRect(0,0,400,400);\n  snake.forEach(seg => { ctx.fillStyle = "#2d6a4f"; ctx.fillRect(seg.x*20, seg.y*20, 18, 18); });\n  ctx.fillStyle = "#d4af37"; ctx.fillRect(comida.x*20, comida.y*20, 18, 18);\n  setTimeout(gameLoop, 200);\n}\ngameLoop();' }
    ]
  },
    {
    id: 'ch251',
    title: 'Página de presentación con tarjetas animadas',
    level: 'Intermedio',
    description: 'Crea una sección "Nuestro equipo" con tarjetas que muestran foto y cargo, y que al hacer hover revelen una descripción breve con una animación suave.',
    instructions: [
      'En <strong>index.html</strong>, estructura tres divs con clase "card-miembro". Cada uno contiene una imagen de placeholder, nombre y cargo, y un div oculto con más detalles.',
      'En <strong>styles.css</strong>, utiliza transiciones de opacidad y transform para el div oculto, y un efecto de escala en la tarjeta.',
      'En <strong>script.js</strong>, puedes opcionalmente alternar una clase al hacer clic para accesibilidad táctil (además del hover).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="team">\n  <div class="card-miembro">\n    <img src="https://via.placeholder.com/150">\n    <h3>Ana García</h3>\n    <p>CEO</p>\n    <div class="detalles">Lidera la empresa desde 2020.</div>\n  </div>\n  <!-- Repite para otros miembros -->\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.team { display: flex; gap: 20px; }\n.card-miembro { text-align: center; border: 1px solid #eee; border-radius: 10px; padding: 20px; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; position: relative; overflow: hidden; }\n.card-miembro:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }\n.detalles { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(45,106,79,0.9); color: white; padding: 10px; transform: translateY(100%); transition: transform 0.3s; }\n.card-miembro:hover .detalles { transform: translateY(0); }' }
    ]
  },
  {
    id: 'ch252',
    title: 'Gráfico de barras con animación al entrar en pantalla',
    level: 'Intermedio',
    description: 'Las barras de un gráfico crecen desde cero hasta su valor cuando el usuario hace scroll hasta ellas.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor de barras con alturas predefinidas pero ocultas (altura 0).',
      'En <strong>script.js</strong>, usa IntersectionObserver para detectar cuando el gráfico entra en pantalla y activar una clase que inicia la animación CSS de altura.',
      'En <strong>styles.css</strong>, define la transición de height.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="grafico-scroll" id="graf">\n  <div class="barra-obs" data-altura="80"><span>80%</span></div>\n  <div class="barra-obs" data-altura="45"><span>45%</span></div>\n  <div class="barra-obs" data-altura="90"><span>90%</span></div>\n</div>\n<div style="height:800px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '.grafico-scroll { display: flex; align-items: flex-end; gap: 10px; height: 200px; }\n.barra-obs { width: 60px; background: #2d6a4f; color: white; text-align: center; height: 0; transition: height 0.8s ease; }\n.barra-obs.animar { height: var(--altura); }' },
      { name: 'script.js', lang: 'js', content: 'const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      document.querySelectorAll(".barra-obs").forEach(bar => {\n        bar.style.setProperty("--altura", bar.dataset.altura + "%");\n        bar.classList.add("animar");\n      });\n    }\n  });\n});\nobserver.observe(document.getElementById("graf"));' }
    ]
  },
  {
    id: 'ch253',
    title: 'Lista de reproducción de videos (YouTube embed)',
    level: 'Intermedio',
    description: 'Muestra una lista de miniaturas de videos de YouTube y al hacer clic cambia el iframe.',
    instructions: [
      'En <strong>index.html</strong>, un iframe principal y una serie de divs con data-video-id.',
      'En <strong>script.js</strong>, al hacer clic, actualiza el src del iframe con el ID del video.',
      'En <strong>styles.css</strong>, estiliza la lista lateral.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="video-list-container">\n  <iframe id="mainVideo" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>\n  <div class="playlist">\n    <div class="video-item" data-id="dQw4w9WgXcQ">Video 1</div>\n    <div class="video-item" data-id="9bZkp7q19f0">Video 2</div>\n    <div class="video-item" data-id="jNQXAC9IVRw">Video 3</div>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.video-list-container { display: flex; }\n.playlist { margin-left: 20px; }\n.video-item { padding: 10px; cursor: pointer; border: 1px solid #ccc; margin: 5px; }\n.video-item:hover { background: #eee; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".video-item").forEach(item => {\n  item.addEventListener("click", () => {\n    document.getElementById("mainVideo").src = `https://www.youtube.com/embed/${item.dataset.id}?autoplay=1`;\n  });\n});' }
    ]
  },
  {
    id: 'ch254',
    title: 'Formulario de inicio de sesión recordando usuario con cookie',
    level: 'Intermedio',
    description: 'Al marcar "Recordarme", guarda el nombre de usuario en una cookie para la próxima visita.',
    instructions: [
      'En <strong>index.html</strong>, formulario con input usuario, contraseña y checkbox recordar.',
      'En <strong>script.js</strong>, al cargar, si existe la cookie, rellena el nombre. Al hacer submit, si el checkbox está marcado, guarda la cookie (ej. por 7 días).',
      'Simula una validación simple (solo frontend).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="loginForm">\n  <input type="text" id="username" placeholder="Nombre de usuario">\n  <input type="password" id="password" placeholder="Contraseña">\n  <label><input type="checkbox" id="remember"> Recordarme</label>\n  <button type="submit">Iniciar sesión</button>\n</form>' },
      { name: 'script.js', lang: 'js', content: 'function getCookie(name) {\n  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));\n  return match ? decodeURIComponent(match[2]) : null;\n}\nconst savedUser = getCookie("savedUser");\nif (savedUser) document.getElementById("username").value = savedUser;\ndocument.getElementById("loginForm").addEventListener("submit", function(e) {\n  e.preventDefault();\n  if (document.getElementById("remember").checked) {\n    const user = document.getElementById("username").value;\n    document.cookie = `savedUser=${encodeURIComponent(user)}; max-age=604800; path=/`;\n  }\n  alert("Sesión iniciada (simulado)");\n});' }
    ]
  },
  {
    id: 'ch255',
    title: 'Cambio de moneda en tiempo real con selector',
    level: 'Avanzado',
    description: 'Muestra un precio base y al elegir una moneda en un select, actualiza el valor usando una tasa fija (puedes simular conversión).',
    instructions: [
      'En <strong>index.html</strong>, un span con el precio en USD y un select con otras monedas (EUR, GBP, JPY).',
      'En <strong>script.js</strong>, define un objeto de tasas y multiplica el precio base al cambiar el select.',
      'Muestra el resultado formateado con el símbolo de la moneda.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Precio base: $<span id="precio">25.00</span></p>\n<select id="moneda">\n  <option value="USD">USD</option>\n  <option value="EUR">EUR</option>\n  <option value="GBP">GBP</option>\n</select>\n<p>Precio convertido: <span id="convertido">25.00</span></p>' },
      { name: 'script.js', lang: 'js', content: 'const base = 25;\nconst tasas = { USD: 1, EUR: 0.92, GBP: 0.79 };\ndocument.getElementById("moneda").addEventListener("change", function() {\n  const moneda = this.value;\n  const valor = base * tasas[moneda];\n  document.getElementById("convertido").textContent = valor.toFixed(2) + " " + moneda;\n});' }
    ]
  },
  {
    id: 'ch256',
    title: 'Sistema de "Me gusta" (like) con contador',
    level: 'Básico',
    description: 'Un botón con corazón que al hacer clic incrementa un contador y cambia de color.',
    instructions: [
      'En <strong>index.html</strong>, un <button> con un emoji de corazón y un span para el contador.',
      'En <strong>script.js</strong>, guarda el estado y el contador (puede ser con localStorage).',
      'En <strong>styles.css</strong>, estilo para cuando está gustado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="likeBtn">❤️ <span id="contador">0</span></button>' },
      { name: 'styles.css', lang: 'css', content: '#likeBtn.gustado { color: red; }' },
      { name: 'script.js', lang: 'js', content: 'let gustado = false;\nlet cont = 0;\nconst btn = document.getElementById("likeBtn");\nconst span = document.getElementById("contador");\nbtn.addEventListener("click", () => {\n  gustado = !gustado;\n  cont = gustado ? cont + 1 : cont - 1;\n  span.textContent = cont;\n  btn.classList.toggle("gustado", gustado);\n});' }
    ]
  },
  {
    id: 'ch257',
    title: 'Marcador de pasos (stepper) horizontal',
    level: 'Intermedio',
    description: 'Indicador de pasos (1,2,3) donde se resalta el paso actual y las líneas entre ellos se colorean.',
    instructions: [
      'En <strong>index.html</strong>, una lista ordenada o divs que representen los pasos.',
      'En <strong>styles.css</strong>, usa pseudo-elementos para las líneas y clases .activo y .completado.',
      'En <strong>script.js</strong>, botones anterior/siguiente para cambiar el paso activo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="stepper">\n  <div class="paso activo">1</div>\n  <div class="linea"></div>\n  <div class="paso">2</div>\n  <div class="linea"></div>\n  <div class="paso">3</div>\n</div>\n<button id="siguiente">Siguiente</button>\n<button id="anterior">Anterior</button>' },
      { name: 'styles.css', lang: 'css', content: '.stepper { display: flex; align-items: center; }\n.paso { width: 30px; height: 30px; border-radius: 50%; background: #eee; text-align: center; line-height: 30px; }\n.paso.activo { background: #2d6a4f; color: white; }\n.linea { flex: 1; height: 2px; background: #eee; margin: 0 5px; }\n.linea.completada { background: #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'let pasoActual = 0;\nconst pasos = document.querySelectorAll(".paso");\nconst lineas = document.querySelectorAll(".linea");\nfunction actualizar() {\n  pasos.forEach((p, i) => p.classList.toggle("activo", i <= pasoActual));\n  lineas.forEach((l, i) => l.classList.toggle("completada", i < pasoActual));\n}\ndocument.getElementById("siguiente").addEventListener("click", () => { if (pasoActual < 2) pasoActual++; actualizar(); });\ndocument.getElementById("anterior").addEventListener("click", () => { if (pasoActual > 0) pasoActual--; actualizar(); });' }
    ]
  },
  {
    id: 'ch258',
    title: 'Efecto de imagen que se inclina con el movimiento del ratón',
    level: 'Intermedio',
    description: 'Una imagen que rota ligeramente en 3D hacia donde apunta el cursor, como un efecto de paralaje en tarjetas.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con una imagen.',
      'En <strong>script.js</strong>, calcula el ángulo en función de la posición del ratón respecto al centro del contenedor.',
      'En <strong>styles.css</strong>, define perspectiva y transición suave.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tilt-img">\n  <img src="https://via.placeholder.com/300">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tilt-img { perspective: 500px; display: inline-block; }\n.tilt-img img { transition: transform 0.2s; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".tilt-img").addEventListener("mousemove", e => {\n  const img = e.currentTarget.querySelector("img");\n  const rect = e.currentTarget.getBoundingClientRect();\n  const x = (e.clientX - rect.left) / rect.width - 0.5;\n  const y = (e.clientY - rect.top) / rect.height - 0.5;\n  img.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;\n});\ndocument.querySelector(".tilt-img").addEventListener("mouseleave", e => {\n  e.currentTarget.querySelector("img").style.transform = "rotateY(0) rotateX(0)";\n});' }
    ]
  },
  {
    id: 'ch259',
    title: 'Botonera de redes sociales con tooltips',
    level: 'Básico',
    description: 'Iconos de redes sociales que al hacer hover muestran el nombre de la red en un tooltip.',
    instructions: [
      'En <strong>index.html</strong>, varios enlaces con iconos (pueden ser emojis) y un atributo data-tooltip.',
      'En <strong>styles.css</strong>, posiciona un pseudo-elemento con el contenido del data-tooltip, mostrándolo al hover.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="social-links">\n  <a href="#" data-tooltip="Facebook">📘</a>\n  <a href="#" data-tooltip="Twitter">🐦</a>\n  <a href="#" data-tooltip="Instagram">📷</a>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.social-links a { position: relative; font-size: 2rem; margin: 0 10px; text-decoration: none; }\n.social-links a::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n}\n.social-links a:hover::after { opacity: 1; }' }
    ]
  },
  {
    id: 'ch260',
    title: 'Galería de imágenes estilo masonry (mampostería) con CSS',
    level: 'Intermedio',
    description: 'Distribuye imágenes de diferentes alturas en columnas como un masonry sin usar librerías (puedes usar columnas CSS).',
    instructions: [
      'En <strong>index.html</strong>, varias imágenes con diferentes alturas (puedes forzarlas con height).',
      'En <strong>styles.css</strong>, usa column-count y break-inside: avoid.',
      'No requiere JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="masonry">\n  <img src="https://via.placeholder.com/300x200">\n  <img src="https://via.placeholder.com/300x400">\n  <img src="https://via.placeholder.com/300x150">\n  <img src="https://via.placeholder.com/300x350">\n  <img src="https://via.placeholder.com/300x250">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.masonry { column-count: 3; column-gap: 10px; }\n.masonry img { width: 100%; margin-bottom: 10px; display: block; }' }
    ]
  },
  {
    id: 'ch261',
    title: 'Simulador de préstamo (cuota mensual)',
    level: 'Intermedio',
    description: 'Calcula la cuota mensual de un préstamo usando la fórmula de amortización francesa.',
    instructions: [
      'En <strong>index.html</strong>, inputs para monto, tasa de interés anual y plazo en meses.',
      'En <strong>script.js</strong>, aplica la fórmula: cuota = (capital * interes_mensual) / (1 - (1 + interes_mensual)**-plazo).',
      'Muestra el resultado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="monto" placeholder="Monto">\n<input type="number" id="tasa" placeholder="Tasa anual (%)" step="0.1">\n<input type="number" id="plazo" placeholder="Plazo (meses)">\n<button id="calcular">Calcular cuota</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const P = parseFloat(document.getElementById("monto").value);\n  const r = parseFloat(document.getElementById("tasa").value) / 100 / 12;\n  const n = parseInt(document.getElementById("plazo").value);\n  if (r === 0) {\n    document.getElementById("resultado").textContent = `Cuota: ${(P / n).toFixed(2)}`;\n  } else {\n    const cuota = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);\n    document.getElementById("resultado").textContent = `Cuota mensual: ${cuota.toFixed(2)}`;\n  }\n});' }
    ]
  },
  {
    id: 'ch262',
    title: 'Efecto de nieve cayendo con CSS',
    level: 'Intermedio',
    description: 'Simula copos de nieve cayendo usando múltiples divs con animaciones aleatorias.',
    instructions: [
      'En <strong>index.html</strong>, varios divs con clase "copo".',
      'En <strong>styles.css</strong>, animaciones de caída con diferentes duraciones y retrasos, y movimiento horizontal ligero.',
      'Puedes usar JavaScript para generar los divs aleatoriamente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="nube-nieve" id="nieve"></div>' },
      { name: 'styles.css', lang: 'css', content: '#nieve { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }\n.copo { position: absolute; top: -10px; background: white; border-radius: 50%; opacity: 0.7; animation: caer linear infinite; }\n@keyframes caer { to { transform: translateY(100vh) translateX(100px); } }' },
      { name: 'script.js', lang: 'js', content: 'const cont = document.getElementById("nieve");\nfor (let i = 0; i < 50; i++) {\n  const copo = document.createElement("div");\n  copo.className = "copo";\n  copo.style.left = Math.random() * 100 + "%";\n  copo.style.width = copo.style.height = Math.random() * 8 + 4 + "px";\n  copo.style.animationDuration = Math.random() * 5 + 5 + "s";\n  copo.style.animationDelay = Math.random() * 5 + "s";\n  cont.appendChild(copo);\n}' }
    ]
  },
  {
    id: 'ch263',
    title: 'Reloj mundial interactivo en mapa',
    level: 'Avanzado',
    description: 'Muestra un mapa simplificado y al hacer clic en una ciudad muestra su hora local.',
    instructions: [
      'En <strong>index.html</strong>, un div con imagen de un mapa mudo y puntos con data-ciudad.',
      'En <strong>script.js</strong>, define un objeto con zonas horarias y al hacer clic muestra la hora correspondiente en un tooltip.',
      'En <strong>styles.css</strong>, posiciona los puntos absolutamente sobre el mapa.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="mapa-ciudades">\n  <img src="https://via.placeholder.com/600x300/ccc" alt="mapa">\n  <div class="ciudad" data-zona="America/New_York" style="top:40%;left:25%;">NY</div>\n  <div class="ciudad" data-zona="Europe/London" style="top:35%;left:45%;">LON</div>\n</div>\n<p id="horaSeleccionada"></p>' },
      { name: 'styles.css', lang: 'css', content: '.mapa-ciudades { position: relative; display: inline-block; }\n.ciudad { position: absolute; background: #d4af37; color: white; padding: 2px 6px; border-radius: 3px; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".ciudad").forEach(c => {\n  c.addEventListener("click", () => {\n    const zona = c.dataset.zona;\n    const hora = new Date().toLocaleString("es-ES", { timeZone: zona, timeStyle: "medium" });\n    document.getElementById("horaSeleccionada").textContent = `${c.textContent}: ${hora}`;\n  });\n});' }
    ]
  },
  {
    id: 'ch264',
    title: 'Sistema de reserva de asientos (cine, teatro)',
    level: 'Avanzado',
    description: 'Muestra una cuadrícula de asientos, donde al hacer clic se seleccionan y cambian de color, calculando el total.',
    instructions: [
      'En <strong>index.html</strong>, una tabla o divs que representen asientos.',
      'En <strong>script.js</strong>, al hacer clic alterna la clase .ocupado, actualiza un contador y el precio total.',
      'En <strong>styles.css</strong>, asientos disponibles en gris, seleccionados en verde.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="sala">\n  <!-- Genera asientos con JS -->\n</div>\n<p>Asientos seleccionados: <span id="contador">0</span> | Total: $<span id="total">0</span></p>' },
      { name: 'styles.css', lang: 'css', content: '.asiento { width: 30px; height: 30px; background: #ccc; margin: 4px; display: inline-block; cursor: pointer; border-radius: 3px; }\n.asiento.seleccionado { background: #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'const sala = document.querySelector(".sala");\nconst precio = 8;\nfor (let i = 0; i < 30; i++) {\n  const asiento = document.createElement("div");\n  asiento.className = "asiento";\n  asiento.addEventListener("click", function() {\n    this.classList.toggle("seleccionado");\n    actualizar();\n  });\n  sala.appendChild(asiento);\n}\nfunction actualizar() {\n  const seleccionados = document.querySelectorAll(".asiento.seleccionado").length;\n  document.getElementById("contador").textContent = seleccionados;\n  document.getElementById("total").textContent = seleccionados * precio;\n}' }
    ]
  },
  {
    id: 'ch265',
    title: 'Efecto de máscara SVG sobre imagen (recorte animado)',
    level: 'Básico',
    description: 'Una imagen con un recorte animado usando SVG mask.',
    instructions: [
      'En <strong>index.html</strong>, un SVG con un elemento de máscara y una imagen.',
      'En <strong>styles.css</strong>, anima la máscara con CSS (ej. un círculo que se expande).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg width="300" height="200">\n  <defs>\n    <mask id="maskAnimada">\n      <circle cx="150" cy="100" r="50" fill="white" class="circulo-mask" />\n    </mask>\n  </defs>\n  <image href="https://via.placeholder.com/300x200" width="300" height="200" mask="url(#maskAnimada)" />\n</svg>' },
      { name: 'styles.css', lang: 'css', content: '.circulo-mask { animation: expandir 3s ease infinite alternate; }\n@keyframes expandir { from { r: 10; } to { r: 100; } }' }
    ]
  },
  {
    id: 'ch266',
    title: 'Generador de paleta de colores desde imagen',
    level: 'Avanzado',
    description: 'Sube una imagen y extrae los 3 colores dominantes usando un canvas (simplificado con promedio de bloques).',
    instructions: [
      'En <strong>index.html</strong>, input file y div contenedor de paleta.',
      'En <strong>script.js</strong>, dibuja la imagen en un canvas, muestrea píxeles en una cuadrícula y promedia los colores de cada bloque.',
      'Muestra los 3 colores promedio más comunes (o los 3 primeros bloques).',
      'En <strong>styles.css</strong>, display de los cuadros de color.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="file" id="imagenInput" accept="image/*">\n<div id="paleta-colores"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("imagenInput").addEventListener("change", function(e) {\n  const file = e.target.files[0];\n  const reader = new FileReader();\n  reader.onload = function(event) {\n    const img = new Image();\n    img.onload = function() {\n      const canvas = document.createElement("canvas");\n      canvas.width = img.width;\n      canvas.height = img.height;\n      const ctx = canvas.getContext("2d");\n      ctx.drawImage(img, 0, 0);\n      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;\n      const colores = [];\n      for (let i = 0; i < 9; i++) {\n        const x = Math.floor(i % 3) * (canvas.width / 3);\n        const y = Math.floor(i / 3) * (canvas.height / 3);\n        const index = (y * canvas.width + x) * 4;\n        colores.push(`rgb(${imageData[index]},${imageData[index+1]},${imageData[index+2]})`);\n      }\n      const paleta = document.getElementById("paleta-colores");\n      paleta.innerHTML = colores.map(c => `<div style="background:${c}; width:50px; height:50px; display:inline-block;"></div>`).join("");\n    };\n    img.src = event.target.result;\n  };\n  reader.readAsDataURL(file);\n});' }
    ]
  },
  {
    id: 'ch267',
    title: 'Barra de progreso de lectura de artículo',
    level: 'Intermedio',
    description: 'Una barra horizontal en la parte superior que se llena según el porcentaje de scroll de un artículo.',
    instructions: [
      'En <strong>index.html</strong>, un div con id "progreso-lectura" fijo arriba, y un artículo largo.',
      'En <strong>script.js</strong>, escucha el evento scroll y calcula el porcentaje basado en el desplazamiento y la altura del contenido.',
      'En <strong>styles.css</strong>, la barra con altura fija y color.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="progreso-lectura" style="height:4px; background:#2d6a4f; width:0; position:fixed; top:0;"></div>\n<article style="max-width:600px; margin:20px auto; height:2000px;">Contenido largo...</article>' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;\n  const progreso = (window.scrollY / alturaTotal) * 100;\n  document.getElementById("progreso-lectura").style.width = progreso + "%";\n});' }
    ]
  },
  {
    id: 'ch268',
    title: 'Sistema de "arrastrar y soltar" para ordenar lista',
    level: 'Avanzado',
    description: 'Permite al usuario arrastrar elementos de una lista para reordenarlos usando la API de Drag and Drop.',
    instructions: [
      'En <strong>index.html</strong>, una lista ul con varios li arrastrables.',
      'En <strong>script.js</strong>, maneja los eventos dragstart, dragover, drop para insertar el elemento en la nueva posición.',
      'En <strong>styles.css</strong>, indica visualmente el lugar de inserción.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul id="lista-arrastrable">\n  <li draggable="true">Elemento 1</li>\n  <li draggable="true">Elemento 2</li>\n  <li draggable="true">Elemento 3</li>\n  <li draggable="true">Elemento 4</li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: 'li { padding: 10px; background: #f0f0f0; margin: 5px; cursor: move; list-style: none; }\nli.drag-over { border-top: 3px solid #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'let draggedItem = null;\ndocument.querySelectorAll("[draggable]").forEach(item => {\n  item.addEventListener("dragstart", e => { draggedItem = e.target; e.dataTransfer.effectAllowed = "move"; });\n  item.addEventListener("dragover", e => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; e.target.classList.add("drag-over"); });\n  item.addEventListener("dragleave", e => e.target.classList.remove("drag-over"));\n  item.addEventListener("drop", e => {\n    e.preventDefault();\n    e.target.classList.remove("drag-over");\n    if (draggedItem !== e.target) {\n      const list = e.target.parentNode;\n      list.insertBefore(draggedItem, e.target);\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch269',
    title: 'Textarea con expansión automática',
    level: 'Básico',
    description: 'Un textarea que se expande automáticamente a medida que el usuario escribe.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;textarea&gt;</code> con id "autoExpand".',
      'En <strong>script.js</strong>, escucha el evento input, ajusta la altura del textarea a su scrollHeight.',
      'En <strong>styles.css</strong>, define overflow hidden y resize none.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="autoExpand" placeholder="Escribe..."></textarea>' },
      { name: 'styles.css', lang: 'css', content: '#autoExpand { resize: none; overflow: hidden; min-height: 30px; }' },
      { name: 'script.js', lang: 'js', content: 'const textarea = document.getElementById("autoExpand");\ntextarea.addEventListener("input", function() {\n  this.style.height = "auto";\n  this.style.height = this.scrollHeight + "px";\n});' }
    ]
  },
  {
    id: 'ch270',
    title: 'Galería de imágenes con lightbox simple',
    level: 'Intermedio',
    description: 'Al hacer clic en una miniatura, se abre la imagen a pantalla completa en un overlay.',
    instructions: [
      'En <strong>index.html</strong>, varias miniaturas y un div lightbox oculto.',
      'En <strong>script.js</strong>, al hacer clic en miniatura, asigna su src a la imagen grande y muestra el lightbox.',
      'Al hacer clic fuera o en un botón cerrar, lo oculta.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="galeria">\n  <img class="thumb" src="https://via.placeholder.com/150/FF0000" data-full="https://via.placeholder.com/600/FF0000">\n  <img class="thumb" src="https://via.placeholder.com/150/00FF00" data-full="https://via.placeholder.com/600/00FF00">\n</div>\n<div id="lightbox" class="oculto">\n  <span id="cerrar">&times;</span>\n  <img id="imagenGrande">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#lightbox { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; }\n#lightbox.oculto { display:none; }\n#cerrar { position: absolute; top:20px; right:40px; color:white; font-size:2rem; cursor:pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".thumb").forEach(thumb => {\n  thumb.addEventListener("click", () => {\n    document.getElementById("imagenGrande").src = thumb.dataset.full;\n    document.getElementById("lightbox").classList.remove("oculto");\n  });\n});\ndocument.getElementById("cerrar").addEventListener("click", () => {\n  document.getElementById("lightbox").classList.add("oculto");\n});' }
    ]
  },
  {
    id: 'ch271',
    title: 'Juego de memoria con números (secuencia)',
    level: 'Avanzado',
    description: 'El ordenador muestra una secuencia de números que el usuario debe repetir haciendo clic en los botones correctos.',
    instructions: [
      'En <strong>index.html</strong>, 4 botones numéricos y un botón "Iniciar".',
      'En <strong>script.js</strong>, genera una secuencia aleatoria, la reproduce iluminando botones, y luego espera la entrada del usuario.',
      'Compara la entrada con la secuencia y da feedback.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="memoria-numeros">\n  <button class="num-btn" data-num="1">1</button>\n  <button class="num-btn" data-num="2">2</button>\n  <button class="num-btn" data-num="3">3</button>\n  <button class="num-btn" data-num="4">4</button>\n  <button id="iniciar">Iniciar</button>\n  <p id="mensaje"></p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.num-btn { width: 60px; height: 60px; margin: 5px; font-size: 1.5rem; }\n.num-btn.iluminado { background: #d4af37; }' },
      { name: 'script.js', lang: 'js', content: 'let secuencia = [];\nlet entrada = [];\nlet puedeJugar = false;\nconst btns = document.querySelectorAll(".num-btn");\nfunction iluminarSecuencia() {\n  puedeJugar = false;\n  let i = 0;\n  const intervalo = setInterval(() => {\n    btns.forEach(b => b.classList.remove("iluminado"));\n    if (i < secuencia.length) {\n      const btn = [...btns].find(b => b.dataset.num == secuencia[i]);\n      btn.classList.add("iluminado");\n      i++;\n    } else {\n      clearInterval(intervalo);\n      puedeJugar = true;\n    }\n  }, 800);\n}\ndocument.getElementById("iniciar").addEventListener("click", () => {\n  secuencia.push(Math.ceil(Math.random() * 4));\n  entrada = [];\n  document.getElementById("mensaje").textContent = "Repite la secuencia";\n  iluminarSecuencia();\n});\nbtns.forEach(btn => {\n  btn.addEventListener("click", () => {\n    if (!puedeJugar) return;\n    entrada.push(parseInt(btn.dataset.num));\n    if (entrada[entrada.length-1] !== secuencia[entrada.length-1]) {\n      document.getElementById("mensaje").textContent = "Error. Vuelve a intentar.";\n      puedeJugar = false;\n      entrada = [];\n    } else if (entrada.length === secuencia.length) {\n      document.getElementById("mensaje").textContent = "Correcto! Preparando siguiente...";\n      setTimeout(() => {\n        secuencia.push(Math.ceil(Math.random() * 4));\n        entrada = [];\n        iluminarSecuencia();\n      }, 1000);\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch272',
    title: 'Ilustración CSS: una casa simple',
    level: 'Básico',
    description: 'Dibuja una casa solo con HTML y CSS (divs y bordes).',
    instructions: [
      'En <strong>index.html</strong>, varios divs para el tejado, la base, la puerta y la ventana.',
      'En <strong>styles.css</strong>, utiliza bordes, fondos y posicionamiento absoluto/relativo para armar la figura.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="casa">\n  <div class="tejado"></div>\n  <div class="pared"></div>\n  <div class="puerta"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.casa { position: relative; width: 200px; }\n.tejado { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 80px solid #8B4513; }\n.pared { width: 160px; height: 120px; background: #f4a460; margin: 0 auto; position: relative; }\n.puerta { width: 40px; height: 60px; background: #5c3a1e; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }' }
    ]
  },
  {
    id: 'ch273',
    title: 'Desplazamiento automático al hacer clic en enlace interno',
    level: 'Básico',
    description: 'Al hacer clic en un enlace, la página se desplaza hasta la sección, pero con un desplazamiento extra (offset) de 60px.',
    instructions: [
      'En <strong>index.html</strong>, enlace con href="#seccion" y una sección destino.',
      'En <strong>script.js</strong>, previene la acción por defecto, obtiene la posición de la sección y hace scroll con window.scrollTo considerando un offset.',
      'En <strong>styles.css</strong>, la sección puede tener un margen superior para simular el offset.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<a href="#seccion">Ir a sección</a>\n<div id="seccion" style="margin-top: 1000px; background: lightgray;">Sección destino</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector("a[href=\'#seccion\']").addEventListener("click", e => {\n  e.preventDefault();\n  const target = document.querySelector("#seccion");\n  const offset = 60;\n  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;\n  window.scrollTo({ top, behavior: "smooth" });\n});' }
    ]
  },
  {
    id: 'ch274',
    title: 'Pestanas con contenido remoto (AJAX simulado)',
    level: 'Intermedio',
    description: 'Al hacer clic en una pestaña, carga contenido desde un string predefinido (simulando petición fetch).',
    instructions: [
      'En <strong>index.html</strong>, botones pestaña y un div contenido.',
      'En <strong>script.js</strong>, usa una función que devuelve una promesa para "cargar" el texto tras un pequeño timeout, y luego inserta el HTML.',
      'Muestra un loader mientras carga.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="tab-btn" data-tab="1">Info</button>\n<button class="tab-btn" data-tab="2">Detalles</button>\n<div id="contenido">Selecciona una pestaña</div>' },
      { name: 'script.js', lang: 'js', content: 'const data = {\n  1: "Información general del producto...",\n  2: "Detalles técnicos: ..."\n};\ndocument.querySelectorAll(".tab-btn").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const tabId = btn.dataset.tab;\n    document.getElementById("contenido").innerHTML = "Cargando...";\n    setTimeout(() => {\n      document.getElementById("contenido").innerHTML = data[tabId];\n    }, 500);\n  });\n});' }
    ]
  },
  {
    id: 'ch275',
    title: 'Lista de tareas con categoría (etiquetas)',
    level: 'Intermedio',
    description: 'Añade tareas seleccionando una etiqueta de categoría (trabajo, personal, estudio) y cada una se muestra con un color diferente.',
    instructions: [
      'En <strong>index.html</strong>, input tarea, select de categoría y botón agregar. La lista muestra tareas con un badge de color.',
      'En <strong>script.js</strong>, al añadir, crea un li con clase según la categoría.',
      'En <strong>styles.css</strong>, define colores de badge.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarea" placeholder="Tarea">\n<select id="categoria">\n  <option value="trabajo">Trabajo</option>\n  <option value="personal">Personal</option>\n  <option value="estudio">Estudio</option>\n</select>\n<button id="agregar">+</button>\n<ul id="lista"></ul>' },
      { name: 'styles.css', lang: 'css', content: '.trabajo { color: #e74c3c; }\n.personal { color: #3498db; }\n.estudio { color: #2ecc71; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("agregar").addEventListener("click", () => {\n  const texto = document.getElementById("tarea").value.trim();\n  const cat = document.getElementById("categoria").value;\n  if (texto) {\n    const li = document.createElement("li");\n    li.className = cat;\n    li.textContent = `[${cat.toUpperCase()}] ${texto}`;\n    document.getElementById("lista").appendChild(li);\n    document.getElementById("tarea").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch276',
    title: 'Botón de "Me siento con suerte" de Google',
    level: 'Básico',
    description: 'Un botón que redirige a una URL aleatoria de una lista predefinida simulando el "I\'m feeling lucky".',
    instructions: [
      'En <strong>index.html</strong>, un botón con texto "Voy a tener suerte".',
      'En <strong>script.js</strong>, array con URLs interesantes, al hacer clic redirige a una aleatoria.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="suerte">Voy a tener suerte</button>' },
      { name: 'script.js', lang: 'js', content: 'const urls = ["https://www.wikipedia.org", "https://es.stackoverflow.com", "https://github.com", "https://developer.mozilla.org"];\ndocument.getElementById("suerte").addEventListener("click", () => {\n  const random = urls[Math.floor(Math.random() * urls.length)];\n  window.location.href = random;\n});' }
    ]
  },
  {
    id: 'ch277',
    title: 'Editor de texto simple con botones de formato',
    level: 'Avanzado',
    description: 'Un div contenteditable y botones para aplicar negrita, cursiva, subrayado usando document.execCommand.',
    instructions: [
      'En <strong>index.html</strong>, div editable con id "editor" y botones con data-command.',
      'En <strong>script.js</strong>, al hacer clic ejecuta execCommand con el comando correspondiente.',
      'En <strong>styles.css</strong>, estiliza los botones como barra de herramientas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="toolbar">\n  <button data-command="bold"><b>B</b></button>\n  <button data-command="italic"><i>I</i></button>\n  <button data-command="underline"><u>U</u></button>\n</div>\n<div id="editor" contenteditable="true" style="border:1px solid #ccc; min-height:200px; padding:10px;">Escribe aquí...</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("[data-command]").forEach(btn => {\n  btn.addEventListener("click", () => {\n    document.execCommand(btn.dataset.command, false, null);\n  });\n});' }
    ]
  },
  {
    id: 'ch278',
    title: 'Animación de tira cómica (viñetas deslizantes)',
    level: 'Intermedio',
    description: 'Un contenedor horizontal con viñetas (imágenes representando una historia) que se desliza al hacer clic en flechas.',
    instructions: [
      'En <strong>index.html</strong>, un div con overflow hidden y un div interno con imágenes en fila.',
      'Botones izquierda/derecha para desplazar el div interno.',
      'En <strong>script.js</strong>, anima la propiedad scrollLeft o translateX.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="comic-strip">\n  <div class="vinyetas" style="display:flex;">\n    <img src="https://via.placeholder.com/300x200/FF0000">\n    <img src="https://via.placeholder.com/300x200/00FF00">\n    <img src="https://via.placeholder.com/300x200/0000FF">\n  </div>\n  <button id="izq">◀</button>\n  <button id="der">▶</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.comic-strip { overflow: hidden; width: 300px; position: relative; }\n.vinyetas { transition: transform 0.3s; }' },
      { name: 'script.js', lang: 'js', content: 'const strip = document.querySelector(".vinyetas");\nlet pos = 0;\ndocument.getElementById("der").addEventListener("click", () => {\n  pos -= 300;\n  if (pos < -600) pos = 0;\n  strip.style.transform = `translateX(${pos}px)`;\n});\ndocument.getElementById("izq").addEventListener("click", () => {\n  pos += 300;\n  if (pos > 0) pos = -600;\n  strip.style.transform = `translateX(${pos}px)`;\n});' }
    ]
  },
  {
    id: 'ch279',
    title: 'Menú de navegación responsivo con ícono hamburguesa (CSS puro)',
    level: 'Intermedio',
    description: 'Haz un menú horizontal que se convierta en un botón de hamburguesa en pantallas pequeñas, usando checkbox hack y CSS.',
    instructions: [
      'En <strong>index.html</strong>, input checkbox oculto, label con icono y una lista ul.',
      'En <strong>styles.css</strong>, por defecto muestra la lista, en móviles oculta hasta que el checkbox esté checked.',
      'Usa transiciones suaves.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="checkbox" id="menu-toggle">\n<label for="menu-toggle" class="hamburger">☰</label>\n<nav class="menu">\n  <ul>\n    <li><a href="#">Inicio</a></li>\n    <li><a href="#">Servicios</a></li>\n    <li><a href="#">Contacto</a></li>\n  </ul>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '.hamburger { display: none; font-size: 2rem; cursor: pointer; }\n#menu-toggle { display: none; }\n.menu ul { list-style: none; display: flex; gap: 20px; }\n@media (max-width: 600px) {\n  .hamburger { display: block; }\n  .menu ul { display: none; flex-direction: column; background: #f0f0f0; padding: 10px; }\n  #menu-toggle:checked ~ .menu ul { display: flex; }\n}' }
    ]
  },
  {
    id: 'ch280',
    title: 'Mostrar/ocultar contraseña en formulario',
    level: 'Básico',
    description: 'Al hacer clic en un ícono de ojo, el campo de contraseña cambia entre type password y text.',
    instructions: [
      'En <strong>index.html</strong>, input password y un span (ícono) al lado.',
      'En <strong>script.js</strong>, alterna el atributo type del input.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass"><span id="toggleOjo">👁️</span>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("toggleOjo").addEventListener("click", () => {\n  const input = document.getElementById("pass");\n  input.type = input.type === "password" ? "text" : "password";\n});' }
    ]
  },
  {
    id: 'ch281',
    title: 'Animación de "respiración" de círculo',
    level: 'Básico',
    description: 'Un círculo que se expande y contrae suavemente simulando una respiración.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "circulo-respira".',
      'En <strong>styles.css</strong>, animación keyframes que alterna la escala.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="circulo-respira"></div>' },
      { name: 'styles.css', lang: 'css', content: '.circulo-respira { width: 100px; height: 100px; border-radius: 50%; background: #2d6a4f; margin: auto; animation: respirar 4s ease-in-out infinite; }\n@keyframes respirar { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }' }
    ]
  },
  {
    id: 'ch282',
    title: 'Marcador de puntuación para dos equipos',
    level: 'Básico',
    description: 'Dos contadores de goles/puntos que se incrementan con botones y se pueden reiniciar.',
    instructions: [
      'En <strong>index.html</strong>, dos equipos con nombre, span de puntuación y botones + y -.',
      'En <strong>script.js</strong>, funciones para modificar los contadores.',
      'Botón de reinicio global.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="marcador">\n  <div class="equipo"><h2>Equipo A</h2><button>-</button><span>0</span><button>+</button></div>\n  <div class="equipo"><h2>Equipo B</h2><button>-</button><span>0</span><button>+</button></div>\n  <button id="reiniciar">Reiniciar</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const puntuaciones = [0, 0];\nconst spans = document.querySelectorAll(".equipo span");\ndocument.querySelectorAll(".equipo").forEach((equipo, idx) => {\n  equipo.querySelector("button:last-child").addEventListener("click", () => { puntuaciones[idx]++; spans[idx].textContent = puntuaciones[idx]; });\n  equipo.querySelector("button:first-child").addEventListener("click", () => { if (puntuaciones[idx] > 0) puntuaciones[idx]--; spans[idx].textContent = puntuaciones[idx]; });\n});\ndocument.getElementById("reiniciar").addEventListener("click", () => { puntuaciones[0]=0; puntuaciones[1]=0; spans[0].textContent=0; spans[1].textContent=0; });' }
    ]
  },
  {
    id: 'ch283',
    title: 'Efecto de texto con subrayado animado (wipe)',
    level: 'Básico',
    description: 'Al hacer hover sobre un enlace, aparece un subrayado que se dibuja desde el centro hacia los lados.',
    instructions: [
      'En <strong>index.html</strong>, un enlace con clase "underline-wipe".',
      'En <strong>styles.css</strong>, pseudo-elemento ::after que parte de scaleX(0) en el centro y al hover scaleX(1).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<a href="#" class="underline-wipe">Pasa el ratón</a>' },
      { name: 'styles.css', lang: 'css', content: '.underline-wipe { text-decoration: none; position: relative; }\n.underline-wipe::after { content: ""; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: currentColor; transform: scaleX(0); transform-origin: center; transition: transform 0.3s; }\n.underline-wipe:hover::after { transform: scaleX(1); }' }
    ]
  },
  {
    id: 'ch284',
    title: 'Simulador de ruleta de descuento',
    level: 'Intermedio',
    description: 'Un div con varios descuentos, al hacer clic se resalta uno aleatorio (sorteo visual).',
    instructions: [
      'En <strong>index.html</strong>, contenedor con varias opciones (10% OFF, 20% OFF, 50% OFF, GRATIS).',
      'En <strong>script.js</strong>, al hacer clic en "Girar", añade una clase que se va moviendo rápidamente entre las opciones y luego se detiene en una.',
      'Muestra el premio.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="ruleta-descuento">\n  <div class="opcion">10%</div>\n  <div class="opcion">20%</div>\n  <div class="opcion">50%</div>\n  <div class="opcion">GRATIS</div>\n  <button id="girarRuleta">¡Girar!</button>\n  <p id="premio"></p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.ruleta-descuento { display: flex; gap: 10px; }\n.opcion { padding: 20px; border: 1px solid #ccc; background: #eee; }\n.opcion.resaltada { background: #d4af37; color: white; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("girarRuleta").addEventListener("click", function() {\n  const opciones = document.querySelectorAll(".opcion");\n  let cont = 0;\n  const totalVueltas = 20 + Math.floor(Math.random() * 10);\n  const intervalo = setInterval(() => {\n    opciones.forEach(op => op.classList.remove("resaltada"));\n    opciones[cont % opciones.length].classList.add("resaltada");\n    if (cont >= totalVueltas) {\n      clearInterval(intervalo);\n      const ganador = opciones[cont % opciones.length].textContent;\n      document.getElementById("premio").textContent = "¡Ganaste " + ganador + "!";\n    }\n    cont++;\n  }, 100);\n});' }
    ]
  },
  {
    id: 'ch285',
    title: 'Buscador de películas con OMDB API (simulado)',
    level: 'Avanzado',
    description: 'Simula la búsqueda de películas mostrando resultados de un objeto local (puedes luego conectarlo a una API real).',
    instructions: [
      'En <strong>index.html</strong>, input y botón buscar, y un div para resultados.',
      'En <strong>script.js</strong>, un array de películas locales, filtra por título y muestra las coincidencias.',
      'Muestra póster de placeholder, título y año.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscarPeli" placeholder="Título de película">\n<button id="btnBuscar">Buscar</button>\n<div id="resultados"></div>' },
      { name: 'script.js', lang: 'js', content: 'const peliculas = [\n  { titulo: "El Padrino", anio: 1972 },\n  { titulo: "Pulp Fiction", anio: 1994 },\n  { titulo: "Origen", anio: 2010 }\n];\ndocument.getElementById("btnBuscar").addEventListener("click", () => {\n  const texto = document.getElementById("buscarPeli").value.toLowerCase();\n  const filtradas = peliculas.filter(p => p.titulo.toLowerCase().includes(texto));\n  document.getElementById("resultados").innerHTML = filtradas.map(p => `<p>${p.titulo} (${p.anio})</p>`).join("");\n});' }
    ]
  },
  {
    id: 'ch286',
    title: 'Efecto de texto "split" al pasar el ratón',
    level: 'Intermedio',
    description: 'Cada letra de una palabra se mueve hacia arriba al hacer hover, creando un efecto de separación.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con spans alrededor de cada letra.',
      'En <strong>styles.css</strong>, al hacer hover sobre el h1, cada span se desplaza con translateY y un retardo incremental (nth-child).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="split">\n  <span>H</span><span>o</span><span>l</span><span>a</span>\n</h1>' },
      { name: 'styles.css', lang: 'css', content: '.split span { display: inline-block; transition: transform 0.3s; }\n.split:hover span:nth-child(1) { transform: translateY(-10px); }\n.split:hover span:nth-child(2) { transform: translateY(-10px); transition-delay: 0.05s; }\n.split:hover span:nth-child(3) { transform: translateY(-10px); transition-delay: 0.1s; }\n.split:hover span:nth-child(4) { transform: translateY(-10px); transition-delay: 0.15s; }' }
    ]
  },
  {
    id: 'ch287',
    title: 'Menú de contexto personalizado con clic derecho',
    level: 'Avanzado',
    description: 'Deshabilita el menú contextual del navegador y muestra uno propio al hacer clic derecho en un elemento.',
    instructions: [
      'En <strong>index.html</strong>, un div que actuará como área sensible y un div menú oculto.',
      'En <strong>script.js</strong>, escucha el evento contextmenu, previene el default, posiciona el menú personalizado en las coordenadas del ratón y lo muestra.',
      'Al hacer clic fuera, se oculta.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="area" style="width:300px;height:200px;background:#eee;">Clic derecho aquí</div>\n<div id="ctxMenu" class="oculto" style="position:absolute;background:white;border:1px solid #ccc;padding:5px;">\n  <div class="ctx-item">Opción 1</div>\n  <div class="ctx-item">Opción 2</div>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const area = document.getElementById("area");\nconst menu = document.getElementById("ctxMenu");\narea.addEventListener("contextmenu", e => {\n  e.preventDefault();\n  menu.style.left = e.clientX + "px";\n  menu.style.top = e.clientY + "px";\n  menu.classList.remove("oculto");\n});\ndocument.addEventListener("click", () => menu.classList.add("oculto"));\nmenu.addEventListener("click", e => alert("Seleccionaste: " + e.target.textContent));' }
    ]
  },
  {
    id: 'ch288',
    title: 'Cuadrícula adaptable con CSS Grid (auto-fill)',
    level: 'Básico',
    description: 'Crea una cuadrícula de tarjetas que se ajusta automáticamente al ancho de la pantalla sin media queries.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor grid con varias child divs.',
      'En <strong>styles.css</strong>, usa grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="grid-auto">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n  <div class="grid-item">4</div>\n  <div class="grid-item">5</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.grid-auto { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }\n.grid-item { background: #2d6a4f; color: white; padding: 20px; text-align: center; }' }
    ]
  },
  {
    id: 'ch289',
    title: 'Botón de copiar al portapapeles con mensaje flotante',
    level: 'Básico',
    description: 'Al hacer clic en un botón, copia un texto y muestra un pequeño mensaje "Copiado" que desaparece.',
    instructions: [
      'En <strong>index.html</strong>, texto a copiar (puede ser un código de ejemplo) y un botón.',
      'En <strong>script.js</strong>, usa Clipboard API y muestra un tooltip temporal.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<pre id="codigo">printf("Hola mundo");</pre>\n<button id="copiar">Copiar código</button>\n<span id="mensajeCopiado" style="display:none;">¡Copiado!</span>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("copiar").addEventListener("click", async () => {\n  const texto = document.getElementById("codigo").textContent;\n  await navigator.clipboard.writeText(texto);\n  const msg = document.getElementById("mensajeCopiado");\n  msg.style.display = "inline";\n  setTimeout(() => msg.style.display = "none", 1500);\n});' }
    ]
  },
  {
    id: 'ch290',
    title: 'Caja de comentarios con fecha automática',
    level: 'Básico',
    description: 'El usuario escribe un comentario, se publica con la fecha y hora actual.',
    instructions: [
      'En <strong>index.html</strong>, input y botón publicar, y un div para los comentarios.',
      'En <strong>script.js</strong>, al publicar, añade el comentario con la fecha formateada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="comentario" placeholder="Escribe algo..."><button id="publicar">Publicar</button>\n<div id="muro"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("publicar").addEventListener("click", () => {\n  const texto = document.getElementById("comentario").value.trim();\n  if (texto) {\n    const ahora = new Date().toLocaleString();\n    const div = document.createElement("div");\n    div.innerHTML = `<strong>${ahora}</strong>: ${texto}`;\n    document.getElementById("muro").prepend(div);\n    document.getElementById("comentario").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch291',
    title: 'Previsualización de video de YouTube al pegar URL',
    level: 'Intermedio',
    description: 'El usuario pega una URL de YouTube, se extrae el ID y se muestra una miniatura y el título (simulado).',
    instructions: [
      'En <strong>index.html</strong>, input pegar URL y botón cargar, div previsualización.',
      'En <strong>script.js</strong>, extrae el ID con una expresión regular, genera la miniatura (img de img.youtube.com/vi/ID/0.jpg).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="urlYoutube" placeholder="URL de YouTube"><button id="previewBtn">Previsualizar</button>\n<div id="preview"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("previewBtn").addEventListener("click", () => {\n  const url = document.getElementById("urlYoutube").value;\n  const match = url.match(/(?:youtu\\.be\\/|\\?v=|\\/embed\\/)([\\w-]{11})/);\n  if (match) {\n    const id = match[1];\n    document.getElementById("preview").innerHTML = `<img src="https://img.youtube.com/vi/${id}/0.jpg" alt="thumbnail">`;\n  } else {\n    alert("URL no válida");\n  }\n});' }
    ]
  },
  {
    id: 'ch292',
    title: 'Termómetro de progreso animado',
    level: 'Básico',
    description: 'Una barra vertical que se llena gradualmente hasta un porcentaje, como un termómetro.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor con borde redondeado, y dentro otro div para el mercurio.',
      'En <strong>styles.css</strong>, altura variable vía atributo style o clase con animación.',
      'Puede usar un input range para cambiar el valor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="termometro"><div class="mercurio" id="mercurio"></div></div>\n<input type="range" id="nivelTerm" min="0" max="100" value="30">' },
      { name: 'styles.css', lang: 'css', content: '.termometro { width: 40px; height: 200px; border: 2px solid #333; border-radius: 20px; position: relative; overflow: hidden; background: #eee; }\n.mercurio { position: absolute; bottom: 0; width: 100%; background: #e74c3c; height: 30%; transition: height 0.3s; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("nivelTerm").addEventListener("input", e => {\n  document.getElementById("mercurio").style.height = e.target.value + "%";\n});' }
    ]
  },
  {
    id: 'ch293',
    title: 'Citas aleatorias que cambian cada 5 segundos',
    level: 'Básico',
    description: 'Muestra una cita famosa en un div y cambia aleatoriamente cada 5 segundos.',
    instructions: [
      'En <strong>index.html</strong>, div con id "cita".',
      'En <strong>script.js</strong>, array de citas, setInterval que selecciona una aleatoria y la muestra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<blockquote id="cita">"La práctica hace al maestro"</blockquote>' },
      { name: 'script.js', lang: 'js', content: 'const citas = [\n  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",\n  "No dejes para mañana lo que puedas hacer hoy. - Thomas Jefferson",\n  "La creatividad es la inteligencia divirtiéndose. - Albert Einstein"\n];\nsetInterval(() => {\n  const aleat = Math.floor(Math.random() * citas.length);\n  document.getElementById("cita").textContent = citas[aleat];\n}, 5000);' }
    ]
  },
  {
    id: 'ch294',
    title: 'Página de error 500 simulada',
    level: 'Básico',
    description: 'Diseña una página de error con estilo "500 Internal Server Error" con CSS creativo.',
    instructions: [
      'En <strong>index.html</strong>, texto grande 500 con un mensaje.',
      'En <strong>styles.css</strong>, centra, colores oscuros, y una animación sutil (como un parpadeo).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="error-500">\n  <h1>500</h1>\n  <p>Error interno del servidor</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.error-500 { text-align: center; margin-top: 100px; color: #e74c3c; }\nh1 { font-size: 5rem; animation: parpadeo 2s infinite; }\n@keyframes parpadeo { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }' }
    ]
  },
  {
    id: 'ch295',
    title: 'Switch de palanca (toggle) personalizado',
    level: 'Básico',
    description: 'Crea un interruptor on/off con CSS puro, usando checkbox.',
    instructions: [
      'En <strong>index.html</strong>, label con un input checkbox oculto y un span para el diseño.',
      'En <strong>styles.css</strong>, estiliza el span como una pastilla que se desliza.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<label class="switch">\n  <input type="checkbox" id="toggle">\n  <span class="slider"></span>\n</label>' },
      { name: 'styles.css', lang: 'css', content: '.switch { position: relative; display: inline-block; width: 50px; height: 24px; }\n.switch input { opacity: 0; width: 0; height: 0; }\n.slider { position: absolute; cursor: pointer; top:0; left:0; right:0; bottom:0; background-color: #ccc; transition: .4s; border-radius: 24px; }\n.slider::before { content: ""; position: absolute; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }\ninput:checked + .slider { background-color: #2d6a4f; }\ninput:checked + .slider::before { transform: translateX(26px); }' }
    ]
  },
  {
    id: 'ch296',
    title: 'Gráfico de dispersión simple con Canvas',
    level: 'Avanzado',
    description: 'Dibuja puntos en un canvas a partir de un array de coordenadas (x,y), simulando un scatter plot.',
    instructions: [
      'En <strong>index.html</strong>, canvas con ejes dibujados.',
      'En <strong>script.js</strong>, define datos {x,y} y dibuja círculos en las posiciones correspondientes.',
      'Los puntos pueden ser de colores según un tercer valor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="scatter" width="300" height="300"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("scatter");\nconst ctx = canvas.getContext("2d");\n// ejes\nctx.beginPath(); ctx.moveTo(50,20); ctx.lineTo(50,280); ctx.stroke();\nctx.beginPath(); ctx.moveTo(50,250); ctx.lineTo(280,250); ctx.stroke();\nconst datos = [{x:60,y:200},{x:100,y:150},{x:150,y:100},{x:200,y:80},{x:250,y:180}];\ndatos.forEach(d => {\n  ctx.beginPath();\n  ctx.arc(d.x, d.y, 5, 0, Math.PI*2);\n  ctx.fillStyle = "#2d6a4f";\n  ctx.fill();\n});' }
    ]
  },
  {
    id: 'ch297',
    title: 'Mensaje de "copia al portapapeles" con estilo toast',
    level: 'Básico',
    description: 'Un texto de código y un botón copiar; al copiar aparece un toast "Texto copiado" durante 2s.',
    instructions: [
      'Combinación del reto de copiar y un toast simple.',
      'Reutiliza código anterior.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<pre id="code">console.log("hello world");</pre>\n<button id="copyBtn">Copiar</button>\n<div id="toastCopy" class="toast-oculto">Copiado al portapapeles</div>' },
      { name: 'styles.css', lang: 'css', content: '#toastCopy { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #333; color: white; padding: 10px 20px; border-radius: 5px; opacity: 0; transition: opacity 0.3s; }\n#toastCopy.toast-visible { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("copyBtn").addEventListener("click", async () => {\n  await navigator.clipboard.writeText(document.getElementById("code").textContent);\n  const toast = document.getElementById("toastCopy");\n  toast.classList.add("toast-visible");\n  setTimeout(() => toast.classList.remove("toast-visible"), 2000);\n});' }
    ]
  },
  {
    id: 'ch298',
    title: 'Card con efecto de zoom en la imagen al hacer hover',
    level: 'Básico',
    description: 'Tarjeta con imagen que hace un zoom suave al pasar el ratón (la imagen escala, no la tarjeta).',
    instructions: [
      'En <strong>index.html</strong>, div card con un div imagen y contenido.',
      'En <strong>styles.css</strong>, overflow hidden en el contenedor de imagen y transform scale en hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-zoom">\n  <div class="card-img"><img src="https://via.placeholder.com/300x200"></div>\n  <p>Título</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.card-zoom { width: 300px; border: 1px solid #ccc; border-radius: 10px; overflow: hidden; }\n.card-img { overflow: hidden; height: 200px; }\n.card-img img { width: 100%; transition: transform 0.3s; }\n.card-zoom:hover img { transform: scale(1.1); }' }
    ]
  },
  {
    id: 'ch299',
    title: 'Buscador de texto en una página (CTRL+F simulado)',
    level: 'Avanzado',
    description: 'Un campo de búsqueda que resalta todas las coincidencias de texto dentro de un div de contenido.',
    instructions: [
      'En <strong>index.html</strong>, input y un div con varios párrafos.',
      'En <strong>script.js</strong>, al escribir, encuentra el texto y envuelve las coincidencias en un span con clase resaltado.',
      'Debe restaurar el texto original al cambiar la búsqueda.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="searchText" placeholder="Buscar...">\n<div id="content">JavaScript es un lenguaje de programación interpretado. Se usa en desarrollo web.</div>' },
      { name: 'script.js', lang: 'js', content: 'const original = document.getElementById("content").textContent;\ndocument.getElementById("searchText").addEventListener("input", function() {\n  const term = this.value.trim();\n  const contentEl = document.getElementById("content");\n  if (!term) { contentEl.innerHTML = original; return; }\n  const regex = new RegExp(`(${term})`, "gi");\n  contentEl.innerHTML = original.replace(regex, `<span class="resaltar">$1</span>`);\n});' },
      { name: 'styles.css', lang: 'css', content: '.resaltar { background: yellow; }' }
    ]
  },
  {
    id: 'ch300',
    title: 'Efecto "Matrix" de lluvia de caracteres',
    level: 'Avanzado',
    description: 'Simula la famosa lluvia de caracteres verdes cayendo sobre un fondo negro usando Canvas.',
    instructions: [
      'En <strong>index.html</strong>, un canvas a pantalla completa.',
      'En <strong>script.js</strong>, crea columnas de caracteres que se desplazan hacia abajo y cambian aleatoriamente.',
      'Usa una fuente monoespaciada verde.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="matrix"></canvas>' },
      { name: 'styles.css', lang: 'css', content: 'body { margin: 0; overflow: hidden; background: black; } canvas { display: block; }' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("matrix");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst columnas = Math.floor(canvas.width / 20);\nconst gotas = Array(columnas).fill(1);\nconst letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";\nfunction dibujar() {\n  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = "#0F0";\n  ctx.font = "15px monospace";\n  for (let i = 0; i < gotas.length; i++) {\n    const texto = letras.charAt(Math.floor(Math.random() * letras.length));\n    ctx.fillText(texto, i * 20, gotas[i] * 20);\n    if (gotas[i] * 20 > canvas.height && Math.random() > 0.975) gotas[i] = 0;\n    gotas[i]++;\n  }\n  requestAnimationFrame(dibujar);\n}\ndibujar();' }
    ]
  },
    {
    id: 'ch301',
    title: 'Página de inicio tipo "Hero" con imagen de fondo',
    level: 'Básico',
    description: 'Crea una sección principal (hero) con una gran imagen de fondo, título, subtítulo y un botón de llamada a la acción.',
    instructions: [
      'En <strong>index.html</strong>, estructura un <code>&lt;header&gt;</code> o <code>&lt;section&gt;</code> con clase "hero".',
      'En <strong>styles.css</strong>, aplica <code>background-image</code>, <code>background-size: cover</code> y centra el texto con Flexbox.',
      'Añade un botón estilizado y un efecto hover.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<section class="hero">\n  <div class="hero-content">\n    <h1>Construye el futuro</h1>\n    <p>Desarrollo web moderno a tu alcance.</p>\n    <button class="btn-hero">Empieza ahora</button>\n  </div>\n</section>' },
      { name: 'styles.css', lang: 'css', content: '.hero {\n  height: 100vh;\n  background: url("https://via.placeholder.com/1200x800/2d6a4f/ffffff") center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: white;\n}\n.hero-content { background: rgba(0,0,0,0.5); padding: 30px; border-radius: 10px; }\n.btn-hero { padding: 15px 30px; background: #d4af37; border: none; color: white; font-weight: bold; border-radius: 30px; cursor: pointer; }\n.btn-hero:hover { background: #b8960f; }' }
    ]
  },
  {
    id: 'ch302',
    title: 'Barra de navegación transparente que cambia al hacer scroll',
    level: 'Intermedio',
    description: 'Crea un menú fijo transparente que al hacer scroll hacia abajo cambia a un fondo sólido.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;nav&gt;</code> con posición fija y varios enlaces, más contenido extenso debajo.',
      'En <strong>script.js</strong>, escucha el evento scroll y añade o quita una clase CSS según la posición de desplazamiento.',
      'En <strong>styles.css</strong>, define la clase con fondo sólido y sombra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav id="nav">\n  <a href="#">Inicio</a>\n  <a href="#">Servicios</a>\n  <a href="#">Contacto</a>\n</nav>\n<div style="height:2000px; background: linear-gradient(white, #ccc);"></div>' },
      { name: 'styles.css', lang: 'css', content: '#nav { position: fixed; top: 0; width: 100%; padding: 15px; transition: background 0.3s; z-index: 100; }\n#nav.solido { background: rgba(45, 106, 79, 0.95); color: white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); }\n#nav a { margin: 0 15px; text-decoration: none; color: inherit; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const nav = document.getElementById("nav");\n  nav.classList.toggle("solido", window.scrollY > 50);\n});' }
    ]
  },
  {
    id: 'ch303',
    title: 'Efecto de bordes arcoíris animados',
    level: 'Básico',
    description: 'Un div cuyo borde cambia de color en un ciclo infinito, creando un efecto arcoíris.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "rainbow-border".',
      'En <strong>styles.css</strong>, utiliza <code>@keyframes</code> para cambiar <code>border-color</code> o crea un gradiente animado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="rainbow-border">Contenido</div>' },
      { name: 'styles.css', lang: 'css', content: '.rainbow-border {\n  padding: 20px;\n  border: 3px solid;\n  border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;\n  animation: rotar-arcoiris 4s linear infinite;\n}\n@keyframes rotar-arcoiris { 100% { filter: hue-rotate(360deg); } }' }
    ]
  },
  {
    id: 'ch304',
    title: 'Paginación simple con botones Anterior/Siguiente',
    level: 'Intermedio',
    description: 'Muestra una lista de elementos paginada, 3 por página, con controles para avanzar y retroceder.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor para los elementos y botones de paginación.',
      'En <strong>script.js</strong>, define un array de elementos, corta según la página actual y renderiza.',
      'Deshabilita los botones cuando estás en la primera o última página.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="lista-pag"></div>\n<button id="anterior">Anterior</button>\n<button id="siguiente">Siguiente</button>\n<p>Página <span id="pagina">1</span></p>' },
      { name: 'script.js', lang: 'js', content: 'const datos = Array.from({length: 10}, (_, i) => `Elemento ${i+1}`);\nlet pagina = 0;\nconst itemsPorPagina = 3;\nconst totalPaginas = Math.ceil(datos.length / itemsPorPagina);\nfunction mostrar() {\n  const inicio = pagina * itemsPorPagina;\n  const fin = inicio + itemsPorPagina;\n  document.getElementById("lista-pag").innerHTML = datos.slice(inicio, fin).map(d => `<p>${d}</p>`).join("");\n  document.getElementById("pagina").textContent = pagina + 1;\n  document.getElementById("anterior").disabled = pagina === 0;\n  document.getElementById("siguiente").disabled = pagina === totalPaginas - 1;\n}\ndocument.getElementById("anterior").addEventListener("click", () => { if (pagina > 0) pagina--; mostrar(); });\ndocument.getElementById("siguiente").addEventListener("click", () => { if (pagina < totalPaginas - 1) pagina++; mostrar(); });\nmostrar();' }
    ]
  },
  {
    id: 'ch305',
    title: 'Timer de 5 minutos para presentación',
    level: 'Básico',
    description: 'Un temporizador que cuenta hacia atrás desde 5 minutos y emite una alerta al llegar a cero.',
    instructions: [
      'En <strong>index.html</strong>, un display grande que muestre minutos:segundos y un botón para iniciar.',
      'En <strong>script.js</strong>, resta segundos con setInterval y detén al llegar a 0.',
      'Muestra un mensaje de "Tiempo terminado".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="display">05:00</div>\n<button id="iniciar">Iniciar</button>' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 300;\nlet intervalo;\nconst display = document.getElementById("display");\nfunction actualizar() {\n  const min = String(Math.floor(tiempo / 60)).padStart(2, "0");\n  const seg = String(tiempo % 60).padStart(2, "0");\n  display.textContent = min + ":" + seg;\n  if (tiempo === 0) { clearInterval(intervalo); display.textContent = "¡Tiempo!"; }\n}\ndocument.getElementById("iniciar").addEventListener("click", () => {\n  clearInterval(intervalo);\n  tiempo = 300;\n  actualizar();\n  intervalo = setInterval(() => { if (tiempo > 0) { tiempo--; actualizar(); } }, 1000);\n});' }
    ]
  },
  {
    id: 'ch306',
    title: 'Efecto de giro infinito en un icono SVG',
    level: 'Básico',
    description: 'Un icono SVG (como un engranaje) que gira continuamente usando CSS animation.',
    instructions: [
      'En <strong>index.html</strong>, inserta un SVG inline (o usa una imagen).',
      'En <strong>styles.css</strong>, aplica una animación de rotación al elemento SVG o a un div contenedor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="engranaje">\n  <svg width="100" height="100" viewBox="0 0 100 100">\n    <circle cx="50" cy="50" r="40" fill="none" stroke="#2d6a4f" stroke-width="10" stroke-dasharray="20 10" />\n  </svg>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.engranaje { animation: girar 3s linear infinite; display: inline-block; }\n@keyframes girar { 100% { transform: rotate(360deg); } }' }
    ]
  },
  {
    id: 'ch307',
    title: 'Acordeón animado con CSS puro (radio buttons)',
    level: 'Intermedio',
    description: 'Un acordeón que funciona solo con radio buttons y CSS, sin JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, inputs radio con etiquetas y divs de contenido asociados.',
      'En <strong>styles.css</strong>, oculta los radio, muestra el contenido contiguo cuando el radio está :checked.',
      'Añade transiciones de max-height para suavizar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="accordion-css">\n  <input type="radio" id="ac1" name="acc" checked><label for="ac1">Sección 1</label>\n  <div class="acc-content">Contenido 1</div>\n  <input type="radio" id="ac2" name="acc"><label for="ac2">Sección 2</label>\n  <div class="acc-content">Contenido 2</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.accordion-css input { display: none; }\n.accordion-css label { display: block; padding: 10px; background: #eee; cursor: pointer; margin: 5px 0; }\n.acc-content { max-height: 0; overflow: hidden; transition: max-height 0.3s; }\n.accordion-css input:checked + label + .acc-content { max-height: 100px; }' }
    ]
  },
  {
    id: 'ch308',
    title: 'Botones de redes sociales con efecto hover de despliegue',
    level: 'Básico',
    description: 'Iconos de redes sociales que al pasar el ratón despliegan el nombre de la red hacia la derecha.',
    instructions: [
      'En <strong>index.html</strong>, varios enlaces con íconos y un span oculto.',
      'En <strong>styles.css</strong>, posiciona el span y lo muestra al hover con un efecto slide.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="social-slide">\n  <a href="#">📘 <span>Facebook</span></a>\n  <a href="#">🐦 <span>Twitter</span></a>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.social-slide a { text-decoration: none; display: inline-block; position: relative; margin: 10px; }\n.social-slide span { display: inline-block; width: 0; overflow: hidden; white-space: nowrap; transition: width 0.3s; vertical-align: middle; }\n.social-slide a:hover span { width: 80px; }' }
    ]
  },
  {
    id: 'ch309',
    title: 'Barra de búsqueda que se expande al hacer clic',
    level: 'Básico',
    description: 'Un campo de búsqueda oculto en un ícono de lupa que se expande al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, un div con un botón de lupa que al hacer clic añade una clase "abierto" para mostrar un input.',
      'En <strong>script.js</strong>, alterna la clase y enfoca el input.',
      'En <strong>styles.css</strong>, transición de width.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="search-expand">\n  <button id="lupa">🔍</button>\n  <input type="text" id="buscar" placeholder="Buscar...">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#buscar { width: 0; padding: 0; border: none; transition: width 0.3s; outline: none; }\n.abierto #buscar { width: 200px; padding: 10px; border: 1px solid #ccc; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("lupa").addEventListener("click", () => {\n  const cont = document.querySelector(".search-expand");\n  cont.classList.toggle("abierto");\n  document.getElementById("buscar").focus();\n});' }
    ]
  },
  {
    id: 'ch310',
    title: 'Tarjeta con efecto de rotación al hacer clic (revelar reverso)',
    level: 'Básico',
    description: 'Al hacer clic, la tarjeta rota y muestra contenido en el reverso.',
    instructions: [
      'En <strong>index.html</strong>, div contenedor con div frontal y div reverso.',
      'En <strong>script.js</strong>, toggle de una clase "girada" que aplica rotateY 180deg.',
      'En <strong>styles.css</strong>, backface-visibility hidden y transición 3D.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flip-click" id="flipCard">\n  <div class="face front">Frente</div>\n  <div class="face back">Reverso</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flip-click { width: 200px; height: 150px; perspective: 600px; cursor: pointer; }\n.face { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transition: transform 0.6s; }\n.front { background: #2d6a4f; color: white; display: flex; align-items: center; justify-content: center; }\n.back { background: #d4af37; color: black; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; }\n.flip-click.girada .front { transform: rotateY(180deg); }\n.flip-click.girada .back { transform: rotateY(0deg); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("flipCard").addEventListener("click", function() { this.classList.toggle("girada"); });' }
    ]
  },
  {
    id: 'ch311',
    title: 'Simulador de lanzamiento de moneda',
    level: 'Básico',
    description: 'Un botón que al hacer clic simula lanzar una moneda y muestra cara o cruz aleatoriamente.',
    instructions: [
      'En <strong>index.html</strong>, un div para mostrar el resultado y un botón "Lanzar".',
      'En <strong>script.js</strong>, genera un número aleatorio 0 o 1.',
      'Muestra "Cara" si es 0, "Cruz" si es 1, con una animación simple o un emoji.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="moneda" style="font-size: 3rem;">🪙</div>\n<button id="lanzar">Lanzar</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("lanzar").addEventListener("click", () => {\n  const resultado = Math.random() < 0.5 ? "😀 Cara" : "🦅 Cruz";\n  document.getElementById("moneda").textContent = resultado;\n});' }
    ]
  },
  {
    id: 'ch312',
    title: 'Formulario con campo de texto que crece al escribir',
    level: 'Básico',
    description: 'Un campo de texto que se expande automáticamente en altura a medida que escribes.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;textarea&gt;</code> con id "crece".',
      'En <strong>script.js</strong>, ajusta la altura en el evento input.',
      'En <strong>styles.css</strong>, define overflow hidden y resize none.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="crece" placeholder="Escribe algo..."></textarea>' },
      { name: 'styles.css', lang: 'css', content: '#crece { resize: none; overflow: hidden; min-height: 40px; width: 100%; }' },
      { name: 'script.js', lang: 'js', content: 'const ta = document.getElementById("crece");\nta.addEventListener("input", function() {\n  this.style.height = "auto";\n  this.style.height = this.scrollHeight + "px";\n});' }
    ]
  },
  {
    id: 'ch313',
    title: 'Lista de compras con total acumulado',
    level: 'Intermedio',
    description: 'Agrega artículos con precio, la lista muestra el nombre, precio y un total actualizado.',
    instructions: [
      'En <strong>index.html</strong>, inputs para nombre, precio y botón "Agregar". Una tabla o lista con los productos y un span para el total.',
      'En <strong>script.js</strong>, guarda los productos en un array y recalcula el total al agregar.',
      'Permite eliminar artículos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="producto" placeholder="Producto">\n<input type="number" id="precio" placeholder="Precio" step="0.01">\n<button id="agregar">Agregar</button>\n<ul id="lista"></ul>\n<p>Total: $<span id="total">0.00</span></p>' },
      { name: 'script.js', lang: 'js', content: 'let total = 0;\ndocument.getElementById("agregar").addEventListener("click", () => {\n  const nombre = document.getElementById("producto").value.trim();\n  const precio = parseFloat(document.getElementById("precio").value);\n  if (nombre && !isNaN(precio)) {\n    const li = document.createElement("li");\n    li.innerHTML = `${nombre} - $${precio.toFixed(2)} <button class="borrar">X</button>`;\n    document.getElementById("lista").appendChild(li);\n    total += precio;\n    document.getElementById("total").textContent = total.toFixed(2);\n    li.querySelector(".borrar").addEventListener("click", () => { total -= precio; document.getElementById("total").textContent = total.toFixed(2); li.remove(); });\n    document.getElementById("producto").value = "";\n    document.getElementById("precio").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch314',
    title: 'Carrusel de imágenes con indicadores (dots)',
    level: 'Intermedio',
    description: 'Un slider de imágenes con circulitos indicadores que muestran la posición actual y permiten navegar.',
    instructions: [
      'En <strong>index.html</strong>, imágenes, dots y botones prev/next.',
      'En <strong>script.js</strong>, sincroniza los dots con el slide activo, y haz clic en un dot para ir a ese slide.',
      'En <strong>styles.css</strong>, estiliza los dots activos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="slider-dots">\n  <div class="slides"><img src="https://via.placeholder.com/300/FF0000" class="activa"><img src="https://via.placeholder.com/300/00FF00"><img src="https://via.placeholder.com/300/0000FF"></div>\n  <div class="dots"><span class="dot activo"></span><span class="dot"></span><span class="dot"></span></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.slides img { display: none; width: 300px; }\n.slides img.activa { display: block; }\n.dots { text-align: center; }\n.dot { display: inline-block; width: 12px; height: 12px; background: #ccc; border-radius: 50%; margin: 5px; cursor: pointer; }\n.dot.activo { background: #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'const imgs = document.querySelectorAll(".slides img");\nconst dots = document.querySelectorAll(".dot");\nlet idx = 0;\nfunction mostrar(n) {\n  imgs[idx].classList.remove("activa");\n  dots[idx].classList.remove("activo");\n  idx = (n + imgs.length) % imgs.length;\n  imgs[idx].classList.add("activa");\n  dots[idx].classList.add("activo");\n}\ndots.forEach((dot, i) => dot.addEventListener("click", () => mostrar(i)));\nsetInterval(() => mostrar(idx + 1), 3000);' }
    ]
  },
  {
    id: 'ch315',
    title: 'Etiquetas (tags) con botón de cerrar',
    level: 'Básico',
    description: 'Un input para añadir tags que aparecen como chips estilizados con una X para eliminarlos.',
    instructions: [
      'En <strong>index.html</strong>, input de texto y botón "Añadir tag". Div contenedor para los tags.',
      'En <strong>script.js</strong>, crea span con clase "tag", texto y un botón X que lo elimina.',
      'En <strong>styles.css</strong>, estilo de pastilla con borde redondeado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tagInput" placeholder="Nuevo tag">\n<button id="anadirTag">Añadir</button>\n<div id="tagsContainer"></div>' },
      { name: 'styles.css', lang: 'css', content: '.tag { display: inline-block; background: #2d6a4f; color: white; padding: 3px 10px; border-radius: 20px; margin: 3px; }\n.tag button { background: transparent; border: none; color: white; margin-left: 5px; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("anadirTag").addEventListener("click", () => {\n  const texto = document.getElementById("tagInput").value.trim();\n  if (texto) {\n    const tag = document.createElement("span");\n    tag.className = "tag";\n    tag.innerHTML = `${texto} <button>×</button>`;\n    tag.querySelector("button").addEventListener("click", () => tag.remove());\n    document.getElementById("tagsContainer").appendChild(tag);\n    document.getElementById("tagInput").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch316',
    title: 'Efecto de sombra larga en imagen',
    level: 'Básico',
    description: 'Aplica una sombra alargada a una imagen para darle un efecto de profundidad estilizado.',
    instructions: [
      'En <strong>index.html</strong>, una imagen con clase "long-shadow-img".',
      'En <strong>styles.css</strong>, combina múltiples box-shadows con desplazamiento progresivo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/200" class="long-shadow-img">' },
      { name: 'styles.css', lang: 'css', content: '.long-shadow-img {\n  box-shadow: 1px 1px 0 #ddd, 2px 2px 0 #ccc, 3px 3px 0 #bbb, 4px 4px 0 #aaa, 5px 5px 0 #999;\n}' }
    ]
  },
  {
    id: 'ch317',
    title: 'Indicador de contraseña fuerte/débil con colores',
    level: 'Intermedio',
    description: 'Verifica la fortaleza de una contraseña y muestra un mensaje de color (rojo, naranja, amarillo, verde).',
    instructions: [
      'En <strong>index.html</strong>, input type="password" y un span de mensaje.',
      'En <strong>script.js</strong>, evalúa longitud, mayúsculas, números y símbolos para asignar una clase de color.',
      'En <strong>styles.css</strong>, colores para .debil, .media, .fuerte, .muy-fuerte.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass" placeholder="Contraseña">\n<span id="fortaleza"></span>' },
      { name: 'styles.css', lang: 'css', content: '.debil { color: red; }\n.media { color: orange; }\n.fuerte { color: green; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("pass").addEventListener("input", function() {\n  const val = this.value;\n  let puntos = 0;\n  if (val.length >= 8) puntos++;\n  if (/[A-Z]/.test(val)) puntos++;\n  if (/[0-9]/.test(val)) puntos++;\n  if (/[^A-Za-z0-9]/.test(val)) puntos++;\n  const span = document.getElementById("fortaleza");\n  span.className = puntos <= 1 ? "debil" : puntos <= 2 ? "media" : "fuerte";\n  span.textContent = ["", "Débil", "Media", "Fuerte", "Muy fuerte"][puntos];\n});' }
    ]
  },
  {
    id: 'ch318',
    title: 'Círculo de progreso animado con CSS',
    level: 'Intermedio',
    description: 'Un círculo SVG que se rellena gradualmente hasta un porcentaje usando animación CSS.',
    instructions: [
      'En <strong>index.html</strong>, un SVG con dos círculos (uno de fondo y otro animado).',
      'En <strong>styles.css</strong>, anima stroke-dashoffset de 314 a 0 (para 100%).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="10"/>\n  <circle class="progress-circle" cx="60" cy="60" r="50" fill="none" stroke="#2d6a4f" stroke-width="10" stroke-dasharray="314" stroke-dashoffset="314" />\n</svg>' },
      { name: 'styles.css', lang: 'css', content: '.progress-circle { animation: llenar 2s ease forwards; }\n@keyframes llenar { to { stroke-dashoffset: 0; } }' }
    ]
  },
  {
    id: 'ch319',
    title: 'Fondo animado con degradado que se desplaza',
    level: 'Básico',
    description: 'Un fondo con un degradado lineal que se mueve continuamente.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "fondo-movimiento".',
      'En <strong>styles.css</strong>, background gradient con tamaño 200% y animación de background-position.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="fondo-movimiento">Contenido</div>' },
      { name: 'styles.css', lang: 'css', content: '.fondo-movimiento {\n  height: 200px;\n  background: linear-gradient(270deg, #2d6a4f, #d4af37, #e74c3c);\n  background-size: 600% 600%;\n  animation: moverFondo 8s ease infinite;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@keyframes moverFondo {\n  0% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n  100% { background-position: 0% 50%; }\n}' }
    ]
  },
  {
    id: 'ch320',
    title: 'Buscador y filtro de tabla',
    level: 'Intermedio',
    description: 'Una tabla con varias filas y un campo de búsqueda que filtra las filas en tiempo real.',
    instructions: [
      'En <strong>index.html</strong>, un input buscar y una tabla HTML con varias filas.',
      'En <strong>script.js</strong>, esconde las filas cuyo contenido no coincida con el término de búsqueda.',
      'En <strong>styles.css</strong>, estiliza la tabla.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="filtroTabla" placeholder="Buscar...">\n<table id="tabla" border="1">\n  <tr><th>Nombre</th><th>Ciudad</th></tr>\n  <tr><td>Ana</td><td>Madrid</td></tr>\n  <tr><td>Luis</td><td>Barcelona</td></tr>\n  <tr><td>Marta</td><td>Valencia</td></tr>\n</table>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("filtroTabla").addEventListener("input", function() {\n  const term = this.value.toLowerCase();\n  document.querySelectorAll("#tabla tr:not(:first-child)").forEach(row => {\n    row.style.display = row.textContent.toLowerCase().includes(term) ? "" : "none";\n  });\n});' }
    ]
  },
  {
    id: 'ch321',
    title: 'Modal con animación de entrada (fade + scale)',
    level: 'Intermedio',
    description: 'Un modal que aparece con una animación de desvanecimiento y escalado desde el centro.',
    instructions: [
      'En <strong>index.html</strong>, estructura modal con backdrop.',
      'En <strong>styles.css</strong>, por defecto opacidad 0 y transform scale(0.5). Al añadir clase "visible", opacidad 1 y scale(1) con transición.',
      'En <strong>script.js</strong>, toggle de la clase al abrir/cerrar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="abrirModal">Abrir modal animado</button>\n<div class="modal-backdrop oculto" id="modalAnim">\n  <div class="modal-card">\n    <span id="cerrarModal">×</span>\n    <p>¡Soy un modal animado!</p>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.modal-backdrop { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; opacity:0; transition: opacity 0.3s; pointer-events:none; }\n.modal-backdrop.oculto { display:none; }\n.modal-backdrop.visible { opacity:1; pointer-events:auto; display:flex; }\n.modal-card { background: white; padding: 20px; border-radius: 10px; transform: scale(0.5); transition: transform 0.3s; }\n.modal-backdrop.visible .modal-card { transform: scale(1); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("abrirModal").addEventListener("click", () => {\n  document.getElementById("modalAnim").classList.remove("oculto");\n  setTimeout(() => document.getElementById("modalAnim").classList.add("visible"), 10);\n});\ndocument.getElementById("cerrarModal").addEventListener("click", () => {\n  document.getElementById("modalAnim").classList.remove("visible");\n  setTimeout(() => document.getElementById("modalAnim").classList.add("oculto"), 300);\n});' }
    ]
  },
  {
    id: 'ch322',
    title: 'Efecto de histograma con divs de colores',
    level: 'Básico',
    description: 'Representa un histograma simple con divs de colores y alturas variables.',
    instructions: [
      'En <strong>index.html</strong>, contenedor flex con divs de diferentes alturas.',
      'En <strong>styles.css</strong>, asigna alturas aleatorias (o predefinidas) y colores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="histograma">\n  <div style="height: 80%; background: #e74c3c;"></div>\n  <div style="height: 50%; background: #3498db;"></div>\n  <div style="height: 90%; background: #2ecc71;"></div>\n  <div style="height: 40%; background: #f1c40f;"></div>\n  <div style="height: 70%; background: #9b59b6;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.histograma { display: flex; align-items: flex-end; gap: 5px; height: 200px; }\n.histograma div { width: 40px; }' }
    ]
  },
  {
    id: 'ch323',
    title: 'Calculadora de cambio (cajero)',
    level: 'Intermedio',
    description: 'Dado un precio y una cantidad pagada, calcula el cambio a devolver y desglosa los billetes/monedas necesarios.',
    instructions: [
      'En <strong>index.html</strong>, inputs para precio y pagado, y un botón calcular.',
      'En <strong>script.js</strong>, calcula la diferencia y usa un algoritmo voraz para desglosar en billetes (100, 50, 20, 10, 5, 1, 0.5, 0.1, etc).',
      'Muestra el desglose en una lista.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="precio" placeholder="Precio">\n<input type="number" id="pagado" placeholder="Pagado">\n<button id="calcular">Calcular cambio</button>\n<ul id="cambio"></ul>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const precio = parseFloat(document.getElementById("precio").value);\n  const pagado = parseFloat(document.getElementById("pagado").value);\n  let cambio = pagado - precio;\n  if (cambio < 0) { alert("Cantidad pagada insuficiente"); return; }\n  const billetes = [100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05];\n  const lista = document.getElementById("cambio");\n  lista.innerHTML = "";\n  billetes.forEach(b => {\n    const cantidad = Math.floor(cambio / b);\n    if (cantidad > 0) {\n      lista.innerHTML += `<li>${cantidad} x ${b >= 1 ? "$" + b : (b*100) + "¢"}</li>`;\n      cambio = (cambio - cantidad * b).toFixed(2);\n    }\n  });\n});' }
    ]
  },
  {
    id: 'ch324',
    title: 'Página de "Próximamente" con formulario de suscripción',
    level: 'Básico',
    description: 'Una página de aterrizaje minimalista con un título, descripción y un formulario de suscripción por email.',
    instructions: [
      'En <strong>index.html</strong>, estructura centrada vertical y horizontalmente usando flex.',
      'Coloca un título grande, un párrafo, un input email y un botón de suscripción.',
      'En <strong>styles.css</strong>, fondo con gradiente, estilos para el formulario.',
      'En <strong>script.js</strong>, al hacer clic en suscribir, muestra un mensaje de confirmación simulando envío.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="coming-soon">\n  <h1>Próximamente</h1>\n  <p>Estamos trabajando en algo increíble.</p>\n  <input type="email" id="email" placeholder="Tu email">\n  <button id="suscribir">Notifícame</button>\n  <p id="mensaje"></p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: 'body, html { height: 100%; margin: 0; }\n.coming-soon { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #1e1e2e, #2d6a4f); color: white; }\ninput { padding: 10px; margin: 10px; width: 250px; border-radius: 5px; border: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("suscribir").addEventListener("click", () => {\n  const email = document.getElementById("email").value;\n  if (email) document.getElementById("mensaje").textContent = "Gracias, te notificaremos.";\n});' }
    ]
  },
  {
    id: 'ch325',
    title: 'Canvas con dibujo de firma digital',
    level: 'Avanzado',
    description: 'Permite al usuario dibujar su firma en un canvas y luego descargarla como imagen.',
    instructions: [
      'En <strong>index.html</strong>, un canvas y botones "Limpiar" y "Descargar".',
      'En <strong>script.js</strong>, captura eventos de ratón para dibujar.',
      'El botón descargar convierte el canvas a dataURL y fuerza la descarga.',
      'En <strong>styles.css</strong>, borde punteado en el canvas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="firma" width="400" height="200" style="border:1px dashed #000;"></canvas><br>\n<button id="limpiar">Limpiar</button>\n<button id="descargar">Descargar</button>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("firma");\nconst ctx = canvas.getContext("2d");\nlet dibujando = false;\ncanvas.addEventListener("mousedown", e => { dibujando = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); });\ncanvas.addEventListener("mousemove", e => { if (dibujando) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });\ncanvas.addEventListener("mouseup", () => dibujando = false);\ndocument.getElementById("limpiar").addEventListener("click", () => ctx.clearRect(0,0,canvas.width,canvas.height));\ndocument.getElementById("descargar").addEventListener("click", () => {\n  const link = document.createElement("a");\n  link.download = "firma.png";\n  link.href = canvas.toDataURL("image/png");\n  link.click();\n});' }
    ]
  },
  {
    id: 'ch326',
    title: 'Indicador de desplazamiento con barra lateral',
    level: 'Básico',
    description: 'Una barra vertical en el lateral que muestra el progreso de lectura en la página.',
    instructions: [
      'En <strong>index.html</strong>, un div fijo a la derecha y un contenido muy alto.',
      'En <strong>script.js</strong>, calcula el porcentaje de scroll y ajusta la altura de la barra.',
      'En <strong>styles.css</strong>, la barra con color y transición suave.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="barra-scroll"></div>\n<div style="height:3000px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '#barra-scroll { position: fixed; top: 0; right: 0; width: 4px; height: 0; background: #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const altura = document.documentElement.scrollHeight - window.innerHeight;\n  const porcentaje = (window.scrollY / altura) * 100;\n  document.getElementById("barra-scroll").style.height = porcentaje + "%";\n});' }
    ]
  },
  {
    id: 'ch327',
    title: 'Generador de excusas aleatorias',
    level: 'Básico',
    description: 'Un botón que al hacer clic muestra una excusa aleatoria de una lista predefinida.',
    instructions: [
      'En <strong>index.html</strong>, un párrafo para la excusa y un botón "Nueva excusa".',
      'En <strong>script.js</strong>, array de frases y selección aleatoria.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p id="excusa">¿Necesitas una excusa?</p>\n<button id="nuevaExcusa">Generar excusa</button>' },
      { name: 'script.js', lang: 'js', content: 'const excusas = ["Se fue la luz", "Mi perro se comió la tarea", "El tráfico estaba imposible", "Perdí la noción del tiempo", "No me llegó la notificación"];\ndocument.getElementById("nuevaExcusa").addEventListener("click", () => {\n  document.getElementById("excusa").textContent = excusas[Math.floor(Math.random() * excusas.length)];\n});' }
    ]
  },
  {
    id: 'ch328',
    title: 'Reloj con manecillas SVG animadas por JS',
    level: 'Avanzado',
    description: 'Dibuja un reloj analógico con SVG donde las manecillas se mueven en tiempo real mediante JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, un SVG con líneas para las manecillas.',
      'En <strong>script.js</strong>, actualiza el atributo transform rotate de cada manecilla cada segundo.',
      'Dibuja también la esfera (círculo) y los números (opcional).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg id="relojSVG" width="200" height="200" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="45" fill="none" stroke="#2d6a4f" stroke-width="2"/>\n  <line id="horas" x1="50" y1="50" x2="50" y2="25" stroke="#333" stroke-width="4"/>\n  <line id="minutos" x1="50" y1="50" x2="50" y2="18" stroke="#555" stroke-width="2"/>\n  <line id="segundos" x1="50" y1="50" x2="50" y2="15" stroke="red" stroke-width="1"/>\n</svg>' },
      { name: 'script.js', lang: 'js', content: 'function actualizarReloj() {\n  const ahora = new Date();\n  const h = ahora.getHours() % 12;\n  const m = ahora.getMinutes();\n  const s = ahora.getSeconds();\n  document.getElementById("horas").setAttribute("transform", `rotate(${h*30 + m*0.5}, 50, 50)`);\n  document.getElementById("minutos").setAttribute("transform", `rotate(${m*6}, 50, 50)`);\n  document.getElementById("segundos").setAttribute("transform", `rotate(${s*6}, 50, 50)`);\n}\nsetInterval(actualizarReloj, 1000);\nactualizarReloj();' }
    ]
  },
  {
    id: 'ch329',
    title: 'Comparador de dos números',
    level: 'Básico',
    description: 'Dos inputs numéricos y un botón que muestra cuál es mayor, menor o si son iguales.',
    instructions: [
      'En <strong>index.html</strong>, campos A y B, botón comparar.',
      'En <strong>script.js</strong>, lógica de comparación y mensaje dinámico.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="numA" placeholder="Número A">\n<input type="number" id="numB" placeholder="Número B">\n<button id="comparar">Comparar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("comparar").addEventListener("click", () => {\n  const a = parseFloat(document.getElementById("numA").value);\n  const b = parseFloat(document.getElementById("numB").value);\n  let msg = "";\n  if (a > b) msg = "A es mayor que B";\n  else if (a < b) msg = "B es mayor que A";\n  else msg = "Son iguales";\n  document.getElementById("resultado").textContent = msg;\n});' }
    ]
  },
  {
    id: 'ch330',
    title: 'Efecto "sticky" en el último elemento de una lista',
    level: 'Básico',
    description: 'Haz que el último elemento de una lista se quede pegado en la parte inferior al hacer scroll dentro de un contenedor.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con altura limitada y overflow-y scroll, y una larga lista donde el último elemento tenga position sticky bottom: 0.',
      'En <strong>styles.css</strong>, aplica sticky solo al último hijo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="scroll-list">\n  <p>Item 1</p><p>Item 2</p><p>Item 3</p><p>Item 4</p><p>Item 5</p>\n  <p class="sticky-bottom">Siempre visible</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.scroll-list { height: 200px; overflow-y: scroll; border: 1px solid #ccc; padding: 10px; }\n.sticky-bottom { position: sticky; bottom: 0; background: #d4af37; padding: 10px; }' }
    ]
  },
  {
    id: 'ch331',
    title: 'Desplegable de preguntas frecuentes (FAQ) con animación',
    level: 'Intermedio',
    description: 'Cada pregunta al hacer clic despliega la respuesta con una animación suave de altura.',
    instructions: [
      'En <strong>index.html</strong>, divs con clase "faq-item", dentro un div pregunta y un div respuesta.',
      'En <strong>script.js</strong>, toggle de clase "abierto" y animación vía max-height.',
      'En <strong>styles.css</strong>, transición de max-height.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="faq">\n  <div class="faq-item"><div class="pregunta">¿Qué es HTML?</div><div class="respuesta">Lenguaje de marcado.</div></div>\n  <div class="faq-item"><div class="pregunta">¿Qué es CSS?</div><div class="respuesta">Hojas de estilo.</div></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.faq-item .respuesta { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; }\n.faq-item.abierto .respuesta { max-height: 50px; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".pregunta").forEach(pregunta => pregunta.addEventListener("click", function() {\n  this.parentElement.classList.toggle("abierto");\n}));' }
    ]
  },
  {
    id: 'ch332',
    title: 'Validación de tarjeta de crédito (algoritmo de Luhn)',
    level: 'Avanzado',
    description: 'Verifica si un número de tarjeta es válido usando el algoritmo de Luhn.',
    instructions: [
      'En <strong>index.html</strong>, input para el número de tarjeta y botón verificar.',
      'En <strong>script.js</strong>, implementa el algoritmo (doblar dígitos en posiciones impares, sumar, verificar múltiplo de 10).',
      'Muestra si es válida o no.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarjeta" placeholder="Número de tarjeta">\n<button id="verificar">Verificar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("verificar").addEventListener("click", () => {\n  const num = document.getElementById("tarjeta").value.replace(/\\s/g, "");\n  let suma = 0;\n  let doble = false;\n  for (let i = num.length - 1; i >= 0; i--) {\n    let digito = parseInt(num.charAt(i), 10);\n    if (doble) {\n      digito *= 2;\n      if (digito > 9) digito -= 9;\n    }\n    suma += digito;\n    doble = !doble;\n  }\n  document.getElementById("resultado").textContent = (suma % 10 === 0) ? "Tarjeta válida" : "Tarjeta inválida";\n});' }
    ]
  },
  {
    id: 'ch333',
    title: 'Cronómetro con tiempos parciales (voltas) guardados',
    level: 'Intermedio',
    description: 'Un cronómetro que permite registrar múltiples tiempos de vuelta y los lista debajo.',
    instructions: [
      'En <strong>index.html</strong>, display, botón iniciar/parar/reiniciar y botón "Vuelta".',
      'En <strong>script.js</strong>, similar al anterior pero permite múltiples vueltas.',
      'Muestra la lista de tiempos de vuelta.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="crono">00:00.0</div>\n<button id="iniciar">Iniciar</button>\n<button id="pausar">Pausar</button>\n<button id="reiniciar">Reiniciar</button>\n<button id="vuelta">Vuelta</button>\n<ul id="vueltas"></ul>' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 0, intervalo, corriendo = false;\nconst display = document.getElementById("crono");\nfunction format(ms) {\n  const m = String(Math.floor(ms/60000)).padStart(2,"0");\n  const s = String(Math.floor((ms%60000)/1000)).padStart(2,"0");\n  const d = Math.floor((ms%1000)/100);\n  return `${m}:${s}.${d}`;\n}\nfunction act() { display.textContent = format(tiempo); }\ndocument.getElementById("iniciar").addEventListener("click", () => { if(!corriendo) { corriendo = true; intervalo = setInterval(() => { tiempo += 100; act(); }, 100); } });\ndocument.getElementById("pausar").addEventListener("click", () => { clearInterval(intervalo); corriendo = false; });\ndocument.getElementById("reiniciar").addEventListener("click", () => { clearInterval(intervalo); corriendo = false; tiempo = 0; act(); document.getElementById("vueltas").innerHTML = ""; });\ndocument.getElementById("vuelta").addEventListener("click", () => {\n  if (corriendo) document.getElementById("vueltas").innerHTML += `<li>${format(tiempo)}</li>`;\n});' }
    ]
  },
  {
    id: 'ch334',
    title: 'Cuadrícula de colores con celdas que cambian al pasar el ratón',
    level: 'Básico',
    description: 'Una cuadrícula de divs que al pasar el ratón por encima cambian de color aleatoriamente.',
    instructions: [
      'En <strong>index.html</strong>, genera con JS una cuadrícula de divs.',
      'En <strong>script.js</strong>, añade event listener mouseenter que cambia el background a un color aleatorio.',
      'En <strong>styles.css</strong>, cuadrícula con display flex wrap.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cuadricula" class="cuadricula"></div>' },
      { name: 'styles.css', lang: 'css', content: '.cuadricula { display: flex; flex-wrap: wrap; width: 300px; }\n.celda { width: 30px; height: 30px; border: 1px solid #ddd; }' },
      { name: 'script.js', lang: 'js', content: 'const cont = document.getElementById("cuadricula");\nfor (let i = 0; i < 100; i++) {\n  const celda = document.createElement("div");\n  celda.className = "celda";\n  celda.addEventListener("mouseenter", function() {\n    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;\n    this.style.backgroundColor = color;\n  });\n  cont.appendChild(celda);\n}' }
    ]
  },
  {
    id: 'ch335',
    title: 'Gráfico de velas (candlestick) simple',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de velas financieras basado en datos de ejemplo usando Canvas.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, define un array de datos {open, high, low, close}. Dibuja rectángulos y líneas.',
      'Colorea verde si close > open, rojo si no.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="candlestick" width="300" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const ctx = document.getElementById("candlestick").getContext("2d");\nconst datos = [{o:10,h:15,l:8,c:13},{o:13,h:18,l:12,c:12},{o:12,h:14,l:9,c:9}];\nconst ancho = 60;\ndatos.forEach((d, i) => {\n  const color = d.c >= d.o ? "#2ecc71" : "#e74c3c";\n  ctx.strokeStyle = color;\n  ctx.beginPath();\n  ctx.moveTo(i*ancho+30, d.h*10);\n  ctx.lineTo(i*ancho+30, d.l*10);\n  ctx.stroke();\n  ctx.fillStyle = color;\n  const y = Math.min(d.o, d.c) * 10;\n  const altura = Math.abs(d.c - d.o) * 10;\n  ctx.fillRect(i*ancho+10, y, 40, altura || 1);\n});' }
    ]
  },
  {
    id: 'ch336',
    title: 'Efecto de rotación en 3D al hacer clic',
    level: 'Intermedio',
    description: 'Un div que rota 360 grados en 3D al hacer clic, y vuelve a su posición al siguiente clic.',
    instructions: [
      'En <strong>index.html</strong>, un div con contenido.',
      'En <strong>script.js</strong>, alterna una clase que aplica transform rotateY.',
      'En <strong>styles.css</strong>, define perspectiva y transición.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="rotar-3d" id="caja">Haz clic</div>' },
      { name: 'styles.css', lang: 'css', content: '.rotar-3d { width: 150px; height: 150px; background: #2d6a4f; color: white; display: flex; align-items: center; justify-content: center; transition: transform 0.8s; }\n.rotar-3d.girada { transform: rotateY(360deg); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("caja").addEventListener("click", function() {\n  this.classList.toggle("girada");\n});' }
    ]
  },
  {
    id: 'ch337',
    title: 'Fondo de pantalla con partículas flotantes (canvas)',
    level: 'Avanzado',
    description: 'Canvas a pantalla completa con partículas que se mueven lentamente creando un fondo dinámico.',
    instructions: [
      'En <strong>index.html</strong>, canvas posicionado fixed detrás de todo.',
      'En <strong>script.js</strong>, animación de partículas con opacidad baja y movimiento aleatorio.',
      'En <strong>styles.css</strong>, coloca el canvas detrás con z-index -1.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="fondoCanvas"></canvas>\n<h1 style="position:relative;">Contenido encima</h1>' },
      { name: 'styles.css', lang: 'css', content: '#fondoCanvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("fondoCanvas");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst particulas = Array.from({length: 30}, () => ({x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*2+1, vx: Math.random()-0.5, vy: Math.random()-0.5}));\nfunction animar() {\n  ctx.clearRect(0,0,canvas.width,canvas.height);\n  ctx.fillStyle = "rgba(45,106,79,0.3)";\n  particulas.forEach(p => {\n    p.x += p.vx; p.y += p.vy;\n    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;\n    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;\n    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();\n  });\n  requestAnimationFrame(animar);\n}\nanimar();' }
    ]
  },
  {
    id: 'ch338',
    title: 'Formulario de contacto con validación y mensaje de éxito',
    level: 'Básico',
    description: 'Formulario de tres campos (nombre, email, mensaje) que al enviar correctamente muestra un mensaje de éxito sin recargar.',
    instructions: [
      'En <strong>index.html</strong>, formulario con los tres campos y un div para el mensaje.',
      'En <strong>script.js</strong>, previene el envío, valida campos, y si todo ok, muestra "Mensaje enviado" y limpia el formulario.',
      'Estilos opcionales.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="contacto">\n  <input type="text" id="nombre" placeholder="Nombre" required>\n  <input type="email" id="email" placeholder="Email" required>\n  <textarea id="mensaje" placeholder="Mensaje" required></textarea>\n  <button type="submit">Enviar</button>\n</form>\n<p id="aviso"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("contacto").addEventListener("submit", function(e) {\n  e.preventDefault();\n  const nombre = document.getElementById("nombre").value.trim();\n  const email = document.getElementById("email").value.trim();\n  const mensaje = document.getElementById("mensaje").value.trim();\n  if (nombre && email && mensaje) {\n    document.getElementById("aviso").textContent = "Mensaje enviado correctamente.";\n    this.reset();\n  }\n});' }
    ]
  },
  {
    id: 'ch339',
    title: 'Animación de latido de corazón con keyframes',
    level: 'Básico',
    description: 'Un corazón que late usando CSS animations.',
    instructions: [
      'En <strong>index.html</strong>, un div con la clase "heart".',
      'En <strong>styles.css</strong>, dibuja el corazón con pseudo-elementos y anima con scale.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="heart"></div>' },
      { name: 'styles.css', lang: 'css', content: '.heart { position: relative; width: 50px; height: 50px; background: red; transform: rotate(45deg); margin: 50px; animation: latir 1s infinite; }\n.heart::before, .heart::after { content: ""; position: absolute; width: 50px; height: 50px; background: red; border-radius: 50%; }\n.heart::before { top: -25px; left: 0; }\n.heart::after { top: 0; left: -25px; }\n@keyframes latir { 0%, 100% { transform: rotate(45deg) scale(1); } 50% { transform: rotate(45deg) scale(1.3); } }' }
    ]
  },
  {
    id: 'ch340',
    title: 'Test de velocidad de escritura (WPM)',
    level: 'Avanzado',
    description: 'Muestra un texto de ejemplo y el usuario debe escribirlo en un textarea. Calcula palabras por minuto y precisión.',
    instructions: [
      'En <strong>index.html</strong>, un div con el texto a copiar, un textarea para escribir, y un botón finalizar.',
      'En <strong>script.js</strong>, al iniciar (o al comenzar a escribir), guarda el tiempo. Al finalizar, calcula WPM y compara caracteres.',
      'Muestra los resultados.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="textoOriginal">El rápido zorro marrón salta sobre el perro perezoso.</div>\n<textarea id="textoUsuario" rows="4" cols="50"></textarea>\n<button id="finalizar">Finalizar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'let inicio;\ndocument.getElementById("textoUsuario").addEventListener("focus", () => { if (!inicio) inicio = Date.now(); });\ndocument.getElementById("finalizar").addEventListener("click", () => {\n  if (!inicio) return;\n  const tiempo = (Date.now() - inicio) / 60000;\n  const original = document.getElementById("textoOriginal").textContent;\n  const usuario = document.getElementById("textoUsuario").value;\n  const palabras = usuario.trim().split(/\\s+/).length;\n  const wpm = Math.round(palabras / tiempo);\n  let correctos = 0;\n  for (let i = 0; i < Math.min(original.length, usuario.length); i++) {\n    if (original[i] === usuario[i]) correctos++;\n  }\n  const precision = Math.round((correctos / original.length) * 100);\n  document.getElementById("resultado").textContent = `WPM: ${wpm}, Precisión: ${precision}%`;\n});' }
    ]
  },
  {
    id: 'ch341',
    title: 'Barra de progreso circular con texto en el centro',
    level: 'Intermedio',
    description: 'Un círculo SVG que se rellena y en el centro muestra el porcentaje numérico.',
    instructions: [
      'En <strong>index.html</strong>, un SVG con círculos y un texto centrado.',
      'En <strong>script.js</strong>, actualiza stroke-dashoffset y el texto según un valor o un input range.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg id="svgProg" width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="10"/>\n  <circle id="progreso" cx="60" cy="60" r="50" fill="none" stroke="#2d6a4f" stroke-width="10" stroke-dasharray="314" stroke-dashoffset="314" />\n  <text id="textoProg" x="60" y="65" text-anchor="middle" font-size="20">0%</text>\n</svg>\n<input type="range" id="slider" min="0" max="100" value="0">' },
      { name: 'script.js', lang: 'js', content: 'const circulo = document.getElementById("progreso");\nconst texto = document.getElementById("textoProg");\ndocument.getElementById("slider").addEventListener("input", e => {\n  const val = e.target.value;\n  circulo.setAttribute("stroke-dashoffset", 314 - (val/100)*314);\n  texto.textContent = val + "%";\n});' }
    ]
  },
  {
    id: 'ch342',
    title: 'Tarjeta de presentación con avatar generado',
    level: 'Básico',
    description: 'Crea una tarjeta de presentación sencilla con un avatar circular generado por una API (ej. ui-avatars.com).',
    instructions: [
      'En <strong>index.html</strong>, estructura div tarjeta con nombre, cargo y una imagen cuyo src apunte a <code>https://ui-avatars.com/api/?name=Nombre+Apellido&background=2d6a4f&color=fff</code>.',
      'En <strong>styles.css</strong>, estiliza la tarjeta, redondea la imagen.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-presentacion">\n  <img src="https://ui-avatars.com/api/?name=Juan+Perez&background=2d6a4f&color=fff">\n  <h3>Juan Pérez</h3>\n  <p>Desarrollador Web</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.card-presentacion { text-align: center; border: 1px solid #eee; border-radius: 10px; padding: 20px; width: 200px; }\n.card-presentacion img { border-radius: 50%; width: 80px; height: 80px; }' }
    ]
  },
  {
    id: 'ch343',
    title: 'Animación de texto que se escribe línea por línea',
    level: 'Intermedio',
    description: 'Muestra varias líneas de texto que aparecen una tras otra con efecto de escritura.',
    instructions: [
      'En <strong>index.html</strong>, varios span o divs por línea.',
      'En <strong>script.js</strong>, oculta todas las líneas, y con un bucle setTimeout las va revelando una a una añadiendo la clase visible.',
      'En <strong>styles.css</strong>, transición de opacidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="lineas">\n  <span>Primera línea</span>\n  <span>Segunda línea</span>\n  <span>Tercera línea</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.lineas span { opacity: 0; transition: opacity 0.5s; display: block; }\n.lineas span.visible { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".lineas span").forEach((span, i) => {\n  setTimeout(() => span.classList.add("visible"), i * 800);\n});' }
    ]
  },
  {
    id: 'ch344',
    title: 'Contador de palabras en un textarea',
    level: 'Básico',
    description: 'Muestra en tiempo real el número de palabras y caracteres de un textarea.',
    instructions: [
      'En <strong>index.html</strong>, textarea y div de estadísticas.',
      'En <strong>script.js</strong>, evento input, cuenta palabras (split por espacios) y caracteres.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="textarea" rows="5" cols="40"></textarea>\n<p>Palabras: <span id="palabras">0</span> | Caracteres: <span id="caracteres">0</span></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("textarea").addEventListener("input", function() {\n  const texto = this.value;\n  document.getElementById("caracteres").textContent = texto.length;\n  document.getElementById("palabras").textContent = texto.trim() === "" ? 0 : texto.trim().split(/\\s+/).length;\n});' }
    ]
  },
  {
    id: 'ch345',
    title: 'Selector de color con previsualización en texto',
    level: 'Básico',
    description: 'Al elegir un color en un input type color, cambia el color de un texto dinámicamente.',
    instructions: [
      'En <strong>index.html</strong>, input color y un párrafo.',
      'En <strong>script.js</strong>, asigna el valor del input como color del párrafo.',
      'Incluye un input text para escribir el texto a mostrar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="color" id="colorPicker" value="#2d6a4f">\n<input type="text" id="textoMostrar" value="Texto de ejemplo">\n<p id="textoColoreado">Texto de ejemplo</p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("colorPicker").addEventListener("input", function() { document.getElementById("textoColoreado").style.color = this.value; });\ndocument.getElementById("textoMostrar").addEventListener("input", function() { document.getElementById("textoColoreado").textContent = this.value; });' }
    ]
  },
  {
    id: 'ch346',
    title: 'Álbum de fotos con galería ligera (lightbox)',
    level: 'Intermedio',
    description: 'Varias miniaturas que al hacer clic abren una versión ampliada en un lightbox centrado, con botón cerrar y navegación entre imágenes.',
    instructions: [
      'En <strong>index.html</strong>, un set de imágenes miniatura y un div lightbox con img grande y botones anterior/siguiente.',
      'En <strong>script.js</strong>, al hacer clic en miniatura, muestra el lightbox con esa imagen y permite navegar.',
      'Cierra al hacer clic fuera o en la X.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="miniaturas">\n  <img class="thumb" src="https://via.placeholder.com/150/FF0000" data-full="https://via.placeholder.com/600/FF0000">\n  <img class="thumb" src="https://via.placeholder.com/150/00FF00" data-full="https://via.placeholder.com/600/00FF00">\n</div>\n<div id="lightbox" class="oculto">\n  <span id="cerrar">&times;</span>\n  <img id="imgGrande">\n  <button id="anterior">&lt;</button>\n  <button id="siguiente">&gt;</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#lightbox { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; }\n#lightbox.oculto { display:none; }\n#cerrar { position:absolute; top:20px; right:30px; color:white; font-size:2rem; cursor:pointer; }' },
      { name: 'script.js', lang: 'js', content: 'const thumbs = document.querySelectorAll(".thumb");\nconst lightbox = document.getElementById("lightbox");\nconst imgGrande = document.getElementById("imgGrande");\nlet currentIndex = 0;\nfunction mostrar(index) {\n  currentIndex = index;\n  imgGrande.src = thumbs[currentIndex].dataset.full;\n  lightbox.classList.remove("oculto");\n}\nthumbs.forEach((thumb, i) => thumb.addEventListener("click", () => mostrar(i)));\ndocument.getElementById("cerrar").addEventListener("click", () => lightbox.classList.add("oculto"));\ndocument.getElementById("anterior").addEventListener("click", () => { if (currentIndex > 0) mostrar(currentIndex - 1); });\ndocument.getElementById("siguiente").addEventListener("click", () => { if (currentIndex < thumbs.length - 1) mostrar(currentIndex + 1); });' }
    ]
  },
  {
    id: 'ch347',
    title: 'Barra de navegación con subrayado que sigue al hover',
    level: 'Intermedio',
    description: 'Un menú donde el subrayado (o fondo) se desliza suavemente hacia el enlace sobre el que se posa el ratón.',
    instructions: [
      'En <strong>index.html</strong>, nav con enlaces y un div adicional que actúa como indicador deslizante.',
      'En <strong>script.js</strong>, al hacer hover sobre un enlace, calcula su posición y ancho y mueve el indicador.',
      'En <strong>styles.css</strong>, transición left y width en el indicador.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav class="sliding-nav">\n  <a href="#">Inicio</a>\n  <a href="#">Servicios</a>\n  <a href="#">Contacto</a>\n  <div class="slider-hover"></div>\n</nav>' },
      { name: 'styles.css', lang: 'css', content: '.sliding-nav { position: relative; display: inline-flex; gap: 20px; }\n.slider-hover { position: absolute; bottom: -2px; left: 0; height: 3px; background: #2d6a4f; transition: left 0.3s, width 0.3s; }' },
      { name: 'script.js', lang: 'js', content: 'const slider = document.querySelector(".slider-hover");\ndocument.querySelectorAll(".sliding-nav a").forEach(link => {\n  link.addEventListener("mouseenter", () => {\n    const rect = link.getBoundingClientRect();\n    const navRect = link.parentElement.getBoundingClientRect();\n    slider.style.left = rect.left - navRect.left + "px";\n    slider.style.width = rect.width + "px";\n  });\n});' }
    ]
  },
  {
    id: 'ch348',
    title: 'Efecto de imagen comparativa (before/after slider)',
    level: 'Avanzado',
    description: 'Muestra dos imágenes superpuestas y un control deslizante que revela una u otra.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con dos imágenes, una debajo de la otra. La de arriba tiene clip o overflow controlado por un input range.',
      'En <strong>script.js</strong>, al mover el rango, ajusta el ancho visible de la imagen superior.',
      'En <strong>styles.css</strong>, posicionamiento absoluto y overflow hidden.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="img-compare">\n  <img src="https://via.placeholder.com/400x300/FF0000/FFFFFF" class="img-bottom">\n  <img src="https://via.placeholder.com/400x300/0000FF/FFFFFF" class="img-top" id="imgTop">\n  <input type="range" id="rangeCompare" min="0" max="100" value="50">\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.img-compare { position: relative; display: inline-block; }\n.img-bottom, .img-top { display: block; max-width: 100%; }\n.img-top { position: absolute; top: 0; left: 0; overflow: hidden; width: 50%; border-right: 2px solid white; }' },
      { name: 'script.js', lang: 'js', content: 'const imgTop = document.getElementById("imgTop");\nconst range = document.getElementById("rangeCompare");\nrange.addEventListener("input", () => {\n  imgTop.style.width = range.value + "%";\n});' }
    ]
  },
  {
    id: 'ch349',
    title: 'Cuadro de diálogo nativo personalizado (dialog)',
    level: 'Básico',
    description: 'Usa la etiqueta HTML5 <code>&lt;dialog&gt;</code> para crear un modal nativo y ábrelo/ciérralo con JavaScript.',
    instructions: [
      'En <strong>index.html</strong>, un elemento <code>&lt;dialog&gt;</code> con contenido y botones para abrirlo con <code>.showModal()</code> y cerrarlo con <code>.close()</code>.',
      'En <strong>script.js</strong>, eventos para los botones.',
      'En <strong>styles.css</strong>, estiliza el dialog (fondo, borde, etc.).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<dialog id="miDialogo">\n  <p>Este es un diálogo nativo.</p>\n  <button id="cerrarDialogo">Cerrar</button>\n</dialog>\n<button id="abrirDialogo">Abrir diálogo</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("abrirDialogo").addEventListener("click", () => document.getElementById("miDialogo").showModal());\ndocument.getElementById("cerrarDialogo").addEventListener("click", () => document.getElementById("miDialogo").close());' }
    ]
  },
  {
    id: 'ch350',
    title: 'Mini juego: atrapa el objeto (clicker)',
    level: 'Intermedio',
    description: 'Un cuadrado que aparece en posiciones aleatorias; al hacer clic sumas puntos y se mueve a otro lugar.',
    instructions: [
      'En <strong>index.html</strong>, un div "objetivo" y un span para la puntuación.',
      'En <strong>script.js</strong>, al hacer clic en el objetivo, aumenta el contador y reposiciona aleatoriamente.',
      'En <strong>styles.css</strong>, el objetivo con posición absoluta dentro de un contenedor relativo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="area-juego">\n  <div id="objetivo"></div>\n</div>\n<p>Puntos: <span id="puntos">0</span></p>' },
      { name: 'styles.css', lang: 'css', content: '.area-juego { position: relative; width: 400px; height: 300px; background: #eee; border: 1px solid #ccc; }\n#objetivo { position: absolute; width: 50px; height: 50px; background: #e74c3c; border-radius: 50%; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'let puntos = 0;\nconst obj = document.getElementById("objetivo");\nfunction mover() {\n  const area = obj.parentElement;\n  const x = Math.random() * (area.offsetWidth - 50);\n  const y = Math.random() * (area.offsetHeight - 50);\n  obj.style.left = x + "px";\n  obj.style.top = y + "px";\n}\nobj.addEventListener("click", () => {\n  puntos++;\n  document.getElementById("puntos").textContent = puntos;\n  mover();\n});\nmover();' }
    ]
  },
    {
    id: 'ch351',
    title: 'Lista de tareas con fecha límite y recordatorio',
    level: 'Intermedio',
    description: 'Crea un gestor de tareas donde cada una tenga una fecha de vencimiento. Las tareas vencidas se marcan en rojo automáticamente.',
    instructions: [
      'En <strong>index.html</strong>, inputs para tarea y fecha, botón agregar y una lista.',
      'En <strong>script.js</strong>, guarda las tareas con su fecha, calcula si están vencidas comparando con la fecha actual y aplica una clase CSS.',
      'En <strong>styles.css</strong>, define .vencida con color rojo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarea" placeholder="Tarea">\n<input type="date" id="fecha">\n<button id="agregar">Agregar</button>\n<ul id="lista"></ul>' },
      { name: 'styles.css', lang: 'css', content: '.vencida { color: red; }' },
      { name: 'script.js', lang: 'js', content: 'const lista = document.getElementById("lista");\ndocument.getElementById("agregar").addEventListener("click", () => {\n  const texto = document.getElementById("tarea").value.trim();\n  const fecha = document.getElementById("fecha").value;\n  if (texto && fecha) {\n    const li = document.createElement("li");\n    li.textContent = `${texto} - ${fecha}`;\n    if (new Date(fecha) < new Date()) li.classList.add("vencida");\n    lista.appendChild(li);\n    document.getElementById("tarea").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch352',
    title: 'Efecto de explosión de partículas con clic',
    level: 'Avanzado',
    description: 'Al hacer clic en cualquier parte de la página, explota una ráfaga de partículas de colores aleatorios.',
    instructions: [
      'En <strong>index.html</strong>, un canvas a pantalla completa.',
      'En <strong>script.js</strong>, al hacer clic, crea partículas en la posición del ratón con velocidades aleatorias y las anima decreciendo la opacidad.',
      'En <strong>styles.css</strong>, el canvas cubre todo y no interfiere con clics.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="canvas"></canvas>' },
      { name: 'styles.css', lang: 'css', content: '#canvas { position: fixed; top:0; left:0; z-index: 999; pointer-events: none; }' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst particulas = [];\nfunction crearExplosion(x, y) {\n  for (let i = 0; i < 30; i++) {\n    particulas.push({\n      x, y,\n      vx: (Math.random() - 0.5) * 6,\n      vy: (Math.random() - 0.5) * 6,\n      vida: 1,\n      color: `hsl(${Math.random() * 360}, 100%, 50%)`\n    });\n  }\n}\nfunction animar() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  for (let i = particulas.length - 1; i >= 0; i--) {\n    const p = particulas[i];\n    p.x += p.vx;\n    p.y += p.vy;\n    p.vida -= 0.02;\n    ctx.fillStyle = p.color;\n    ctx.globalAlpha = p.vida;\n    ctx.beginPath();\n    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);\n    ctx.fill();\n    if (p.vida <= 0) particulas.splice(i, 1);\n  }\n  ctx.globalAlpha = 1;\n  requestAnimationFrame(animar);\n}\ndocument.addEventListener("click", e => crearExplosion(e.clientX, e.clientY));\nanimar();' }
    ]
  },
  {
    id: 'ch353',
    title: 'Reloj mundial con selector de ciudad',
    level: 'Intermedio',
    description: 'Un selector de ciudades y un reloj que muestra la hora local de la ciudad elegida.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;select&gt;</code> con opciones de ciudades y un span para la hora.',
      'En <strong>script.js</strong>, define un objeto con zonas horarias y actualiza la hora cada segundo usando <code>Intl.DateTimeFormat</code>.',
      'En <strong>styles.css</strong>, estiliza el reloj.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="ciudad">\n  <option value="America/New_York">Nueva York</option>\n  <option value="Europe/London">Londres</option>\n  <option value="Asia/Tokyo">Tokio</option>\n</select>\n<div id="hora" style="font-size:2rem; font-family:monospace;"></div>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const zona = document.getElementById("ciudad").value;\n  const ahora = new Date().toLocaleTimeString("es-ES", { timeZone: zona, timeStyle: "medium" });\n  document.getElementById("hora").textContent = ahora;\n}\ndocument.getElementById("ciudad").addEventListener("change", actualizar);\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch354',
    title: 'Generador de códigos QR',
    level: 'Avanzado',
    description: 'Escribe un texto y genera un código QR usando la API de Google Charts.',
    instructions: [
      'En <strong>index.html</strong>, un input y un div para mostrar la imagen QR.',
      'En <strong>script.js</strong>, al escribir, actualiza el src de una imagen con la URL <code>https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=</code> + texto.',
      'En <strong>styles.css</strong>, centra todo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="qrText" placeholder="Texto para QR">\n<img id="qrImg" alt="QR">' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("qrText").addEventListener("input", function() {\n  const texto = encodeURIComponent(this.value);\n  document.getElementById("qrImg").src = texto ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${texto}` : "";\n});' }
    ]
  },
  {
    id: 'ch355',
    title: 'Sistema de votación por estrellas (rating)',
    level: 'Básico',
    description: 'Cinco estrellas que se iluminan al pasar el ratón y al hacer clic fijan la calificación.',
    instructions: [
      'En <strong>index.html</strong>, cinco <code>&lt;span&gt;</code> con estrellas ☆.',
      'En <strong>script.js</strong>, al hacer clic en una estrella se guarda el valor, al pasar el ratón se iluminan temporalmente.',
      'En <strong>styles.css</strong>, estrellas en dorado para las activas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="rating">\n  <span class="estrella" data-val="1">☆</span>\n  <span class="estrella" data-val="2">☆</span>\n  <span class="estrella" data-val="3">☆</span>\n  <span class="estrella" data-val="4">☆</span>\n  <span class="estrella" data-val="5">☆</span>\n  <p id="valoracion"></p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.estrella { font-size: 2rem; cursor: pointer; }\n.estrella.dorada { color: gold; }' },
      { name: 'script.js', lang: 'js', content: 'const estrellas = document.querySelectorAll(".estrella");\nlet valorSeleccionado = 0;\nestrellas.forEach((estrella, index) => {\n  estrella.addEventListener("click", () => {\n    valorSeleccionado = index + 1;\n    document.getElementById("valoracion").textContent = `Calificación: ${valorSeleccionado}`;\n    estrellas.forEach((e, i) => e.classList.toggle("dorada", i < valorSeleccionado));\n  });\n  estrella.addEventListener("mouseenter", () => {\n    estrellas.forEach((e, i) => e.classList.toggle("dorada", i <= index));\n  });\n  estrella.addEventListener("mouseleave", () => {\n    estrellas.forEach((e, i) => e.classList.toggle("dorada", i < valorSeleccionado));\n  });\n});' }
    ]
  },
  {
    id: 'ch356',
    title: 'Animación de cubo 3D giratorio',
    level: 'Intermedio',
    description: 'Dibuja un cubo 3D con CSS y hazlo girar continuamente.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor con seis divs para las caras.',
      'En <strong>styles.css</strong>, utiliza <code>transform-style: preserve-3d</code> y <code>rotation</code> en X y Y.',
      'Anima con keyframes una rotación continua.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="cubo">\n  <div class="cara frente">1</div>\n  <div class="cara atras">2</div>\n  <div class="cara izquierda">3</div>\n  <div class="cara derecha">4</div>\n  <div class="cara arriba">5</div>\n  <div class="cara abajo">6</div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.cubo { position: relative; width: 100px; height: 100px; transform-style: preserve-3d; animation: girar 5s linear infinite; margin: 50px auto; }\n.cara { position: absolute; width: 100px; height: 100px; border: 2px solid #fff; background: rgba(45,106,79,0.8); color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; }\n.frente { transform: translateZ(50px); }\n.atras { transform: rotateY(180deg) translateZ(50px); }\n.derecha { transform: rotateY(90deg) translateZ(50px); }\n.izquierda { transform: rotateY(-90deg) translateZ(50px); }\n.arriba { transform: rotateX(90deg) translateZ(50px); }\n.abajo { transform: rotateX(-90deg) translateZ(50px); }\n@keyframes girar { 100% { transform: rotateX(360deg) rotateY(360deg); } }' }
    ]
  },
  {
    id: 'ch357',
    title: 'Menú de navegación circular animado',
    level: 'Intermedio',
    description: 'Al hacer clic en un botón central, los enlaces se despliegan en círculo a su alrededor.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor relativo con un botón principal y varios enlaces con posición absoluta.',
      'En <strong>script.js</strong>, alterna una clase que los reposiciona usando CSS transform.',
      'En <strong>styles.css</strong>, anima los enlaces con transiciones de transform y opacidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="menu-circ">\n  <button id="btnCentral">+</button>\n  <a href="#" class="item-circ" style="--i:1;">A</a>\n  <a href="#" class="item-circ" style="--i:2;">B</a>\n  <a href="#" class="item-circ" style="--i:3;">C</a>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.menu-circ { position: relative; width: 200px; height: 200px; margin: 50px; }\n#btnCentral { width: 50px; height: 50px; border-radius: 50%; background: #2d6a4f; color: white; border: none; cursor: pointer; position: absolute; top: 75px; left: 75px; z-index: 2; }\n.item-circ { position: absolute; top: 85px; left: 85px; width: 30px; height: 30px; background: #d4af37; color: black; text-align: center; line-height: 30px; border-radius: 50%; text-decoration: none; transition: transform 0.4s ease, opacity 0.4s; opacity: 0; }\n.menu-circ.abierto .item-circ:nth-child(2) { transform: translate(-60px, -60px); opacity: 1; }\n.menu-circ.abierto .item-circ:nth-child(3) { transform: translate(0, -80px); opacity: 1; }\n.menu-circ.abierto .item-circ:nth-child(4) { transform: translate(60px, -60px); opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("btnCentral").addEventListener("click", function() {\n  this.parentElement.classList.toggle("abierto");\n});' }
    ]
  },
  {
    id: 'ch358',
    title: 'Galería de imágenes con búsqueda y filtro',
    level: 'Intermedio',
    description: 'Muestra una galería de imágenes con títulos y un campo de búsqueda que filtra por nombre.',
    instructions: [
      'En <strong>index.html</strong>, input de búsqueda y un contenedor de imágenes.',
      'En <strong>script.js</strong>, objetos con src y nombre; al escribir, oculta las que no coincidan.',
      'En <strong>styles.css</strong>, usa CSS Grid para la galería.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscarImg" placeholder="Buscar imagen...">\n<div class="galeria-grid" id="galeria"></div>' },
      { name: 'styles.css', lang: 'css', content: '.galeria-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }\n.card-img { text-align: center; }' },
      { name: 'script.js', lang: 'js', content: 'const imagenes = [\n  { src: "https://via.placeholder.com/150/FF0000", nombre: "Rojo" },\n  { src: "https://via.placeholder.com/150/00FF00", nombre: "Verde" },\n  { src: "https://via.placeholder.com/150/0000FF", nombre: "Azul" }\n];\nfunction render(filtro = "") {\n  document.getElementById("galeria").innerHTML = imagenes\n    .filter(i => i.nombre.toLowerCase().includes(filtro))\n    .map(i => `<div class="card-img"><img src="${i.src}"><p>${i.nombre}</p></div>`).join("");\n}\nrender();\ndocument.getElementById("buscarImg").addEventListener("input", e => render(e.target.value.toLowerCase()));' }
    ]
  },
  {
    id: 'ch359',
    title: 'Gráfico de líneas animado con SVG',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de líneas con SVG y anímalo para que la línea se dibuje progresivamente.',
    instructions: [
      'En <strong>index.html</strong>, un elemento SVG con un <code>&lt;polyline&gt;</code> o <code>&lt;path&gt;</code>.',
      'En <strong>styles.css</strong>, anima <code>stroke-dashoffset</code>.',
      'En <strong>script.js</strong>, puedes generar las coordenadas dinámicamente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg width="300" height="200">\n  <polyline points="0,150 50,100 100,120 150,50 200,70 250,20 300,80" fill="none" stroke="#2d6a4f" stroke-width="3"\n    stroke-dasharray="400" stroke-dashoffset="400" class="animar-linea" />\n</svg>' },
      { name: 'styles.css', lang: 'css', content: '.animar-linea { animation: dibujar 2s ease forwards; }\n@keyframes dibujar { to { stroke-dashoffset: 0; } }' }
    ]
  },
  {
    id: 'ch360',
    title: 'Conversor de texto a binario',
    level: 'Básico',
    description: 'Escribe un texto y obtén su representación en código binario (8 bits por carácter).',
    instructions: [
      'En <strong>index.html</strong>, un input y un área de salida.',
      'En <strong>script.js</strong>, recorre cada carácter, obtiene su charCodeAt y convierte a binario con padStart.',
      'En <strong>styles.css</strong>, estiliza la salida.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="texto" placeholder="Texto">\n<p id="binario"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("texto").addEventListener("input", function() {\n  const texto = this.value;\n  const bin = texto.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");\n  document.getElementById("binario").textContent = bin;\n});' }
    ]
  },
  {
    id: 'ch361',
    title: 'Simulador de lanzamiento de dos dados',
    level: 'Básico',
    description: 'Lanza dos dados al hacer clic y muestra la suma total.',
    instructions: [
      'En <strong>index.html</strong>, dos divs que representan los dados y un botón "Lanzar".',
      'En <strong>script.js</strong>, genera números aleatorios 1-6 y muestra los caracteres Unicode de dados.',
      'Muestra la suma.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="lanzar">Lanzar dados</button>\n<div id="dados" style="font-size:3rem;">🎲 🎲</div>\n<p>Suma: <span id="suma"></span></p>' },
      { name: 'script.js', lang: 'js', content: 'const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];\ndocument.getElementById("lanzar").addEventListener("click", () => {\n  const d1 = Math.floor(Math.random() * 6);\n  const d2 = Math.floor(Math.random() * 6);\n  document.getElementById("dados").textContent = `${caras[d1]} ${caras[d2]}`;\n  document.getElementById("suma").textContent = d1 + d2 + 2;\n});' }
    ]
  },
  {
    id: 'ch362',
    title: 'Línea de tiempo vertical interactiva',
    level: 'Intermedio',
    description: 'Al hacer clic en un año, se expande mostrando detalles del evento.',
    instructions: [
      'En <strong>index.html</strong>, divs con clase "evento" y contenido oculto.',
      'En <strong>script.js</strong>, alterna una clase al hacer clic en el año.',
      'En <strong>styles.css</strong>, transición de max-height para expandir.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="timeline">\n  <div class="evento"><h3 class="ano">2022</h3><div class="detalle">Empecé a programar</div></div>\n  <div class="evento"><h3 class="ano">2024</h3><div class="detalle">Primer proyecto real</div></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.evento .detalle { max-height: 0; overflow: hidden; transition: max-height 0.3s; }\n.evento.abierto .detalle { max-height: 50px; }\n.ano { cursor: pointer; color: #2d6a4f; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".ano").forEach(ano => ano.addEventListener("click", function() {\n  this.parentElement.classList.toggle("abierto");\n}));' }
    ]
  },
  {
    id: 'ch363',
    title: 'Contador de caracteres restantes (como Twitter)',
    level: 'Básico',
    description: 'Un textarea con un límite de 280 caracteres; muestra cuántos quedan y cambia de color al acercarse al límite.',
    instructions: [
      'En <strong>index.html</strong>, textarea y un span.',
      'En <strong>script.js</strong>, evento input: calcula restantes y cambia el color del span si es menor a 20.',
      'En <strong>styles.css</strong>, estiliza el span.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="mensaje" maxlength="280" rows="4" cols="50"></textarea>\n<p>Caracteres restantes: <span id="restantes">280</span></p>' },
      { name: 'script.js', lang: 'js', content: 'const limite = 280;\ndocument.getElementById("mensaje").addEventListener("input", function() {\n  const restantes = limite - this.value.length;\n  const span = document.getElementById("restantes");\n  span.textContent = restantes;\n  span.style.color = restantes <= 20 ? "red" : "black";\n});' }
    ]
  },
  {
    id: 'ch364',
    title: 'Reproductor de video con controles personalizados',
    level: 'Intermedio',
    description: 'Usa la API de video para crear controles play/pause, barra de progreso y volumen.',
    instructions: [
      'En <strong>index.html</strong>, un elemento <code>&lt;video&gt;</code> y botones personalizados.',
      'En <strong>script.js</strong>, conecta los controles: play(), pause(), volume, currentTime.',
      'En <strong>styles.css</strong>, oculta los controles nativos y estiliza los personalizados.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<video id="miVideo" width="400" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>\n<div>\n  <button id="playBtn">▶</button>\n  <button id="pauseBtn">⏸</button>\n  <input type="range" id="volumen" min="0" max="1" step="0.1" value="1">\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const video = document.getElementById("miVideo");\ndocument.getElementById("playBtn").addEventListener("click", () => video.play());\ndocument.getElementById("pauseBtn").addEventListener("click", () => video.pause());\ndocument.getElementById("volumen").addEventListener("input", e => video.volume = e.target.value);' }
    ]
  },
  {
    id: 'ch365',
    title: 'Sistema de comentarios anidados (hilos)',
    level: 'Avanzado',
    description: 'Permite responder a un comentario, mostrando las respuestas indentadas debajo.',
    instructions: [
      'En <strong>index.html</strong>, un formulario para comentario principal y botón "Responder" en cada comentario.',
      'En <strong>script.js</strong>, al responder, añade un formulario de respuesta debajo de ese comentario, y al enviarlo lo inserta como hijo.',
      'En <strong>styles.css</strong>, indentación con margin-left.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="comentarios">\n  <textarea id="nuevoComentario" placeholder="Añadir comentario"></textarea>\n  <button id="btnComentar">Comentar</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'let idCounter = 0;\nfunction crearComentario(texto, contenedor) {\n  const div = document.createElement("div");\n  div.className = "comentario";\n  div.style.marginLeft = "20px";\n  const id = "c" + idCounter++;\n  div.innerHTML = `<p>${texto}</p><button class="responder">Responder</button><div class="respuestas"></div>`;\n  contenedor.appendChild(div);\n  div.querySelector(".responder").addEventListener("click", () => {\n    const form = document.createElement("div");\n    form.innerHTML = `<textarea></textarea><button class="enviar">Enviar</button>`;\n    div.querySelector(".respuestas").appendChild(form);\n    form.querySelector(".enviar").addEventListener("click", () => {\n      const respText = form.querySelector("textarea").value.trim();\n      if (respText) {\n        crearComentario(respText, div.querySelector(".respuestas"));\n        form.remove();\n      }\n    });\n  });\n}\ndocument.getElementById("btnComentar").addEventListener("click", () => {\n  const texto = document.getElementById("nuevoComentario").value.trim();\n  if (texto) {\n    crearComentario(texto, document.getElementById("comentarios"));\n    document.getElementById("nuevoComentario").value = "";\n  }\n});' }
    ]
  },
  {
    id: 'ch366',
    title: 'Efecto de carga tipo esqueleto (skeleton screen)',
    level: 'Intermedio',
    description: 'Simula la carga de contenido mostrando barras grises animadas que luego se reemplazan por el contenido real tras unos segundos.',
    instructions: [
      'En <strong>index.html</strong>, divs con clase "skeleton" y contenido real oculto.',
      'En <strong>styles.css</strong>, animación de shimmer sobre los skeletons.',
      'En <strong>script.js</strong>, tras 3 segundos, oculta los skeletons y muestra el contenido real.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="contenido">\n  <div class="skeleton linea" style="width:80%;"></div>\n  <div class="skeleton linea" style="width:60%;"></div>\n  <div class="skeleton linea" style="width:90%;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.skeleton { background: #eee; height: 20px; margin: 10px; border-radius: 5px; position: relative; overflow: hidden; }\n.skeleton::after { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); animation: shimmer 1.5s infinite; }\n@keyframes shimmer { 100% { left: 100%; } }' },
      { name: 'script.js', lang: 'js', content: 'setTimeout(() => {\n  document.getElementById("contenido").innerHTML = "<p>¡Contenido cargado!</p><p>Esto es real.</p>";\n}, 3000);' }
    ]
  },
  {
    id: 'ch367',
    title: 'Barra de navegación con migas de pan dinámicas',
    level: 'Básico',
    description: 'Un breadcrumb que se genera automáticamente según la ruta o secciones visitadas.',
    instructions: [
      'En <strong>index.html</strong>, div contenedor y varios enlaces de sección.',
      'En <strong>script.js</strong>, al hacer clic en un enlace, actualiza el breadcrumb mostrando la ruta recorrida.',
      'En <strong>styles.css</strong>, estiliza los breadcrumbs con separadores >.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav id="breadcrumb"></nav>\n<a href="#" class="link-sec" data-nombre="Home">Home</a>\n<a href="#" class="link-sec" data-nombre="Productos">Productos</a>\n<a href="#" class="link-sec" data-nombre="Detalle">Detalle</a>' },
      { name: 'script.js', lang: 'js', content: 'let ruta = [];\ndocument.querySelectorAll(".link-sec").forEach(link => {\n  link.addEventListener("click", function(e) {\n    e.preventDefault();\n    const nombre = this.dataset.nombre;\n    ruta.push(nombre);\n    document.getElementById("breadcrumb").innerHTML = ruta.join(" › ");\n  });\n});' }
    ]
  },
  {
    id: 'ch368',
    title: 'Formulario con validación visual (iconos)',
    level: 'Intermedio',
    description: 'Al escribir en campos, muestra un check verde o una cruz roja según si el campo es válido.',
    instructions: [
      'En <strong>index.html</strong>, inputs con un span al lado para el icono.',
      'En <strong>script.js</strong>, valida cada campo con expresiones regulares y muestra ✓ o ✗.',
      'En <strong>styles.css</strong>, colores verde y rojo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="nombre" placeholder="Nombre"><span id="iconoNombre"></span><br>\n<input type="email" id="email" placeholder="Email"><span id="iconoEmail"></span>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("nombre").addEventListener("input", function() {\n  const valido = this.value.trim().length >= 3;\n  document.getElementById("iconoNombre").textContent = valido ? "✓" : "✗";\n  document.getElementById("iconoNombre").style.color = valido ? "green" : "red";\n});\ndocument.getElementById("email").addEventListener("input", function() {\n  const valido = /^\\S+@\\S+\\.\\S+$/.test(this.value);\n  document.getElementById("iconoEmail").textContent = valido ? "✓" : "✗";\n  document.getElementById("iconoEmail").style.color = valido ? "green" : "red";\n});' }
    ]
  },
  {
    id: 'ch369',
    title: 'Buscador de GIFs con API de Giphy',
    level: 'Avanzado',
    description: 'Busca GIFs usando la API de Giphy y los muestra en una cuadrícula.',
    instructions: [
      'En <strong>index.html</strong>, input y div para resultados.',
      'En <strong>script.js</strong>, realiza fetch a la API de Giphy (con API key pública) y muestra imágenes.',
      'En <strong>styles.css</strong>, grid para los GIFs.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscarGif" placeholder="Buscar GIFs">\n<button id="buscarBtn">Buscar</button>\n<div id="gifs"></div>' },
      { name: 'script.js', lang: 'js', content: 'const apiKey = "dc6zaTOxFJmzC"; // key de desarrollo\ndocument.getElementById("buscarBtn").addEventListener("click", () => {\n  const q = document.getElementById("buscarGif").value;\n  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=9`)\n    .then(res => res.json())\n    .then(data => {\n      document.getElementById("gifs").innerHTML = data.data.map(g => `<img src="${g.images.fixed_height_small.url}">`).join("");\n    });\n});' }
    ]
  },
  {
    id: 'ch370',
    title: 'Calculadora de interés compuesto',
    level: 'Básico',
    description: 'Calcula el capital final tras un número de años con una tasa de interés anual.',
    instructions: [
      'En <strong>index.html</strong>, inputs para capital inicial, tasa y años, botón y resultado.',
      'En <strong>script.js</strong>, aplica la fórmula: capital * (1 + tasa/100)^años.',
      'Muestra el resultado formateado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="capital" placeholder="Capital inicial">\n<input type="number" id="tasa" placeholder="Tasa anual %" step="0.1">\n<input type="number" id="anios" placeholder="Años">\n<button id="calcular">Calcular</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const capital = parseFloat(document.getElementById("capital").value);\n  const tasa = parseFloat(document.getElementById("tasa").value);\n  const anios = parseInt(document.getElementById("anios").value);\n  const final = capital * Math.pow(1 + tasa / 100, anios);\n  document.getElementById("resultado").textContent = `Capital final: $${final.toFixed(2)}`;\n});' }
    ]
  },
  {
    id: 'ch371',
    title: 'Modal de confirmación para eliminar elemento',
    level: 'Básico',
    description: 'Un botón eliminar que abre un modal preguntando "¿Estás seguro?" y ejecuta la acción al confirmar.',
    instructions: [
      'En <strong>index.html</strong>, un elemento (fila de tabla o div) con un botón "Eliminar" y un modal oculto.',
      'En <strong>script.js</strong>, al hacer clic en eliminar, muestra el modal; si confirma, elimina el elemento.',
      'En <strong>styles.css</strong>, estiliza el modal.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="item">Elemento a eliminar <button class="btn-eliminar">Eliminar</button></div>\n<div id="modalConfirm" class="oculto">\n  <p>¿Estás seguro?</p>\n  <button id="si">Sí</button>\n  <button id="no">No</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#modalConfirm { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }\n.oculto { display: none; }' },
      { name: 'script.js', lang: 'js', content: 'let elementoAEliminar;\ndocument.querySelector(".btn-eliminar").addEventListener("click", function() {\n  elementoAEliminar = document.getElementById("item");\n  document.getElementById("modalConfirm").classList.remove("oculto");\n});\ndocument.getElementById("si").addEventListener("click", () => {\n  if (elementoAEliminar) elementoAEliminar.remove();\n  document.getElementById("modalConfirm").classList.add("oculto");\n});\ndocument.getElementById("no").addEventListener("click", () => document.getElementById("modalConfirm").classList.add("oculto"));' }
    ]
  },
  {
    id: 'ch372',
    title: 'Arrastrar y soltar para subir archivo (drag & drop)',
    level: 'Avanzado',
    description: 'Una zona donde el usuario puede arrastrar un archivo de texto y se muestra su contenido.',
    instructions: [
      'En <strong>index.html</strong>, un div zona de drop.',
      'En <strong>script.js</strong>, maneja dragover y drop, usa FileReader para leer el archivo como texto.',
      'En <strong>styles.css</strong>, estiliza la zona activa.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="dropZone">Arrastra aquí un archivo de texto</div>\n<pre id="contenidoArchivo"></pre>' },
      { name: 'styles.css', lang: 'css', content: '#dropZone { width: 300px; height: 150px; border: 2px dashed #2d6a4f; text-align: center; line-height: 150px; }' },
      { name: 'script.js', lang: 'js', content: 'const zone = document.getElementById("dropZone");\nzone.addEventListener("dragover", e => { e.preventDefault(); zone.style.background = "#e8f5e9"; });\nzone.addEventListener("dragleave", () => zone.style.background = "");\nzone.addEventListener("drop", e => {\n  e.preventDefault();\n  zone.style.background = "";\n  const file = e.dataTransfer.files[0];\n  if (file && file.type.match("text")) {\n    const reader = new FileReader();\n    reader.onload = ev => document.getElementById("contenidoArchivo").textContent = ev.target.result;\n    reader.readAsText(file);\n  }\n});' }
    ]
  },
  {
    id: 'ch373',
    title: 'Menú lateral tipo "drawer" con overlay',
    level: 'Intermedio',
    description: 'Un menú que se desliza desde la izquierda empujando o superponiendo el contenido, con fondo semitransparente.',
    instructions: [
      'En <strong>index.html</strong>, un nav lateral oculto y un overlay.',
      'En <strong>script.js</strong>, al hacer clic en hamburguesa, añade clase para mostrar el nav y el overlay.',
      'En <strong>styles.css</strong>, transiciones de left.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="hamburger">☰</button>\n<nav id="drawer">\n  <a href="#">Inicio</a>\n  <a href="#">Perfil</a>\n  <a href="#">Salir</a>\n</nav>\n<div id="overlay" class="oculto"></div>' },
      { name: 'styles.css', lang: 'css', content: '#drawer { position: fixed; top: 0; left: -250px; width: 250px; height: 100%; background: #2d6a4f; transition: left 0.3s; padding-top: 60px; }\n#drawer.abierto { left: 0; }\n#overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); }\n#overlay.oculto { display: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("hamburger").addEventListener("click", () => {\n  document.getElementById("drawer").classList.toggle("abierto");\n  document.getElementById("overlay").classList.toggle("oculto");\n});' }
    ]
  },
  {
    id: 'ch374',
    title: 'Efecto de confeti cayendo',
    level: 'Avanzado',
    description: 'Al hacer clic en un botón, caen confetis de colores desde la parte superior.',
    instructions: [
      'En <strong>index.html</strong>, un canvas o divs que se posicionan aleatoriamente.',
      'En <strong>script.js</strong>, crea múltiples divs de colores, los posiciona y anima su caída.',
      'En <strong>styles.css</strong>, animación de caída con keyframes (fallback con JS).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="lanzarConfeti">🎉 Lanzar confeti</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("lanzarConfeti").addEventListener("click", () => {\n  for (let i = 0; i < 50; i++) {\n    const confeti = document.createElement("div");\n    confeti.className = "confeti";\n    confeti.style.left = Math.random() * 100 + "%";\n    confeti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;\n    confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";\n    confeti.style.animationDelay = Math.random() + "s";\n    document.body.appendChild(confeti);\n    setTimeout(() => confeti.remove(), 5000);\n  }\n});' },
      { name: 'styles.css', lang: 'css', content: '.confeti { position: fixed; top: -10px; width: 10px; height: 10px; animation: caerConfeti linear forwards; pointer-events: none; }\n@keyframes caerConfeti { to { top: 100vh; transform: rotate(720deg); opacity: 0; } }' }
    ]
  },
  {
    id: 'ch375',
    title: 'Componente de tabs con carga dinámica',
    level: 'Intermedio',
    description: 'Al hacer clic en una pestaña, se carga contenido desde un array (simulando AJAX).',
    instructions: [
      'En <strong>index.html</strong>, botones de pestaña y un div contenido.',
      'En <strong>script.js</strong>, define un objeto con el contenido de cada pestaña y al hacer clic actualiza el div.',
      'En <strong>styles.css</strong>, estiliza las pestañas activas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="tab">Inicio</button>\n<button class="tab">Servicios</button>\n<button class="tab">Contacto</button>\n<div id="tabContent"></div>' },
      { name: 'script.js', lang: 'js', content: 'const contenidos = ["Bienvenido a la página", "Ofrecemos desarrollo web", "Email: info@web.com"];\ndocument.querySelectorAll(".tab").forEach((tab, i) => {\n  tab.addEventListener("click", () => {\n    document.querySelectorAll(".tab").forEach(t => t.classList.remove("activo"));\n    tab.classList.add("activo");\n    document.getElementById("tabContent").textContent = contenidos[i];\n  });\n});' }
    ]
  },
  {
    id: 'ch376',
    title: 'Gráfico de barras apiladas con Canvas',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de barras apiladas con dos series usando Canvas.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, define datos para dos categorías, y para cada barra dibuja los rectángulos uno encima del otro.',
      'Usa colores diferentes para cada serie.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="barrasCanvas" width="300" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const ctx = document.getElementById("barrasCanvas").getContext("2d");\nconst datos = [{a:30, b:20}, {a:50, b:40}, {a:25, b:45}];\nconst colores = ["#2d6a4f", "#d4af37"];\nconst ancho = 60;\ndatos.forEach((d, i) => {\n  let acum = 0;\n  [d.a, d.b].forEach((val, j) => {\n    ctx.fillStyle = colores[j];\n    const altura = val;\n    ctx.fillRect(i * (ancho + 20) + 40, canvas.height - acum - altura, ancho, altura);\n    ctx.fillStyle = "white";\n    ctx.fillText(val, i * (ancho + 20) + 50, canvas.height - acum - altura / 2);\n    acum += altura;\n  });\n});' }
    ]
  },
  {
    id: 'ch377',
    title: 'Juego de Tres en Raya (Tic-Tac-Toe)',
    level: 'Avanzado',
    description: 'Tablero 3x3, dos jugadores (X y O), detecta ganador y empate.',
    instructions: [
      'En <strong>index.html</strong>, divs para las celdas y un span de estado.',
      'En <strong>script.js</strong>, gestiona turnos, guarda el estado en un array, verifica líneas.',
      'Al ganar, bloquea el tablero y muestra mensaje.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tablero" id="ttt"></div>\n<p id="estado">Turno: X</p>\n<button id="reiniciar">Reiniciar</button>' },
      { name: 'styles.css', lang: 'css', content: '.tablero { display: grid; grid-template-columns: repeat(3, 60px); gap: 5px; }\n.celda { width: 60px; height: 60px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 2rem; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'let turno = "X", tablero = Array(9).fill(null), juegoActivo = true;\nconst combinaciones = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];\nfunction render() {\n  document.getElementById("ttt").innerHTML = tablero.map((v, i) => `<div class="celda" data-idx="${i}">${v || ""}</div>`).join("");\n  document.getElementById("estado").textContent = juegoActivo ? `Turno: ${turno}` : "Juego terminado";\n}\ndocument.getElementById("ttt").addEventListener("click", e => {\n  if (!juegoActivo || !e.target.classList.contains("celda")) return;\n  const idx = e.target.dataset.idx;\n  if (tablero[idx]) return;\n  tablero[idx] = turno;\n  combinaciones.forEach(c => {\n    if (c.every(i => tablero[i] === turno)) { juegoActivo = false; document.getElementById("estado").textContent = `¡${turno} gana!`; }\n  });\n  if (juegoActivo && tablero.every(v => v)) { juegoActivo = false; document.getElementById("estado").textContent = "Empate"; }\n  turno = turno === "X" ? "O" : "X";\n  render();\n});\ndocument.getElementById("reiniciar").addEventListener("click", () => { tablero = Array(9).fill(null); turno = "X"; juegoActivo = true; render(); });\nrender();' }
    ]
  },
  {
    id: 'ch378',
    title: 'Notificaciones push simuladas con sonido',
    level: 'Intermedio',
    description: 'Muestra una notificación emergente con un breve tono (beep) generado con Web Audio API.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Simular notificación".',
      'En <strong>script.js</strong>, crea un oscillator breve y muestra un toast.',
      'En <strong>styles.css</strong>, toast bonito.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="notificar">Simular notificación</button>\n<div id="toast" class="toast-oculto">Notificación: Nuevo mensaje</div>' },
      { name: 'styles.css', lang: 'css', content: '#toast { position: fixed; top: 20px; right: 20px; background: #333; color: white; padding: 15px; border-radius: 5px; transition: opacity 0.3s; }\n.toast-oculto { opacity: 0; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("notificar").addEventListener("click", () => {\n  const ctx = new (window.AudioContext || window.webkitAudioContext)();\n  const oscillator = ctx.createOscillator();\n  oscillator.type = "square";\n  oscillator.frequency.setValueAtTime(800, ctx.currentTime);\n  oscillator.connect(ctx.destination);\n  oscillator.start();\n  oscillator.stop(ctx.currentTime + 0.15);\n  const toast = document.getElementById("toast");\n  toast.classList.remove("toast-oculto");\n  setTimeout(() => toast.classList.add("toast-oculto"), 2500);\n});' }
    ]
  },
  {
    id: 'ch379',
    title: 'Efecto de texto con reflejo 3D',
    level: 'Intermedio',
    description: 'Un título que parece reflejarse en una superficie debajo con un gradiente de desvanecimiento.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con data-text.',
      'En <strong>styles.css</strong>, usa un pseudo-elemento con el mismo contenido, rotado y con gradiente de máscara.',
      'No requiere JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="reflejo3d" data-text="Reflejo">Reflejo</h1>' },
      { name: 'styles.css', lang: 'css', content: '.reflejo3d { font-size: 3rem; position: relative; display: inline-block; }\n.reflejo3d::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transform: scaleY(-1);\n  opacity: 0.4;\n  background: linear-gradient(transparent, rgba(255,255,255,0.8));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}' }
    ]
  },
  {
    id: 'ch380',
    title: 'Círculo de progreso animado con porcentaje',
    level: 'Intermedio',
    description: 'Un SVG circular que se llena hasta un porcentaje dado con animación al cargar.',
    instructions: [
      'En <strong>index.html</strong>, SVG con círculos y texto.',
      'En <strong>styles.css</strong>, anima stroke-dashoffset.',
      'El porcentaje puede ser fijo o controlado por un atributo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<svg width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="10"/>\n  <circle class="progreso-circulo" cx="60" cy="60" r="50" fill="none" stroke="#2d6a4f" stroke-width="10" stroke-dasharray="314" stroke-dashoffset="314"/>\n  <text x="60" y="65" text-anchor="middle">70%</text>\n</svg>' },
      { name: 'styles.css', lang: 'css', content: '.progreso-circulo { animation: llenarProg 2s ease forwards; }\n@keyframes llenarProg { to { stroke-dashoffset: 94.2; } }' }
    ]
  },
  {
    id: 'ch381',
    title: 'Lazy loading de imágenes con efecto blur',
    level: 'Intermedio',
    description: 'Carga imágenes solo cuando entran en la vista, con un efecto de desenfoque inicial que desaparece.',
    instructions: [
      'En <strong>index.html</strong>, muchas imágenes con data-src y una pequeña miniatura borrosa inline.',
      'En <strong>script.js</strong>, IntersectionObserver que reemplaza el src y añade clase "cargada".',
      'En <strong>styles.css</strong>, transición de filter blur a 0.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img class="lazy" src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27300%27 height=%27200%27%3E%3C/svg%3E" data-src="https://via.placeholder.com/600x400" style="filter:blur(10px);"><br>\n<img class="lazy" src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27300%27 height=%27200%27%3E%3C/svg%3E" data-src="https://via.placeholder.com/600x400/00FF00" style="filter:blur(10px); margin-top:500px;">' },
      { name: 'script.js', lang: 'js', content: 'const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      img.onload = () => img.style.filter = "blur(0)";\n      observer.unobserve(img);\n    }\n  });\n});\ndocument.querySelectorAll(".lazy").forEach(img => observer.observe(img));' }
    ]
  },
  {
    id: 'ch382',
    title: 'Scroll infinito con carga de más elementos',
    level: 'Avanzado',
    description: 'Al hacer scroll cerca del final de la lista, se añaden automáticamente más elementos.',
    instructions: [
      'En <strong>index.html</strong>, una lista y un div centinela al final.',
      'En <strong>script.js</strong>, IntersectionObserver sobre el centinela, cuando es visible añade 5 elementos nuevos y mueve el centinela.',
      'Simula carga con un pequeño retardo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul id="listaInfinita"></ul>\n<div id="centinela"></div>' },
      { name: 'script.js', lang: 'js', content: 'const lista = document.getElementById("listaInfinita");\nlet contador = 0;\nfunction agregarItems(n = 5) {\n  for (let i = 0; i < n; i++) {\n    const li = document.createElement("li");\n    li.textContent = `Elemento ${++contador}`;\n    lista.appendChild(li);\n  }\n}\nconst observer = new IntersectionObserver(entries => {\n  if (entries[0].isIntersecting) {\n    agregarItems();\n  }\n});\nobserver.observe(document.getElementById("centinela"));\nagregarItems(10);' }
    ]
  },
  {
    id: 'ch383',
    title: 'Botón de "me gusta" con animación',
    level: 'Básico',
    description: 'Un botón de corazón que al hacer clic se rellena y muestra una animación de escala.',
    instructions: [
      'En <strong>index.html</strong>, botón con corazón 🤍.',
      'En <strong>script.js</strong>, alterna entre 🤍 y ❤️ y aplica una clase CSS para la animación.',
      'En <strong>styles.css</strong>, keyframes de latido.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="like">🤍</button>' },
      { name: 'styles.css', lang: 'css', content: '.like-activo { animation: pop 0.3s ease; }\n@keyframes pop { 50% { transform: scale(1.3); } }' },
      { name: 'script.js', lang: 'js', content: 'let gustado = false;\nconst btn = document.getElementById("like");\nbtn.addEventListener("click", function() {\n  gustado = !gustado;\n  btn.textContent = gustado ? "❤️" : "🤍";\n  btn.classList.add("like-activo");\n  setTimeout(() => btn.classList.remove("like-activo"), 300);\n});' }
    ]
  },
  {
    id: 'ch384',
    title: 'Simulador de cajero automático',
    level: 'Intermedio',
    description: 'Un saldo inicial y botones para depositar, retirar y consultar saldo.',
    instructions: [
      'En <strong>index.html</strong>, display del saldo, input de cantidad y botones.',
      'En <strong>script.js</strong>, maneja operaciones, valida saldo suficiente al retirar.',
      'En <strong>styles.css</strong>, estiliza como una pantalla de cajero.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="atm">\n  <h2>Saldo: $<span id="saldo">1000</span></h2>\n  <input type="number" id="cantidad" placeholder="Cantidad">\n  <button id="depositar">Depositar</button>\n  <button id="retirar">Retirar</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'let saldo = 1000;\nconst span = document.getElementById("saldo");\nfunction actualizar() { span.textContent = saldo; }\ndocument.getElementById("depositar").addEventListener("click", () => {\n  const monto = parseFloat(document.getElementById("cantidad").value);\n  if (monto > 0) { saldo += monto; actualizar(); }\n});\ndocument.getElementById("retirar").addEventListener("click", () => {\n  const monto = parseFloat(document.getElementById("cantidad").value);\n  if (monto > 0 && monto <= saldo) { saldo -= monto; actualizar(); }\n  else alert("Saldo insuficiente.");\n});' }
    ]
  },
  {
    id: 'ch385',
    title: 'Convertidor de segundos a formato HH:MM:SS',
    level: 'Básico',
    description: 'Ingresa una cantidad total de segundos y muestra su equivalente en horas, minutos y segundos.',
    instructions: [
      'En <strong>index.html</strong>, input segundos y botón convertir.',
      'En <strong>script.js</strong>, calcula las divisiones enteras y módulo.',
      'Muestra el resultado formateado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="segundos" placeholder="Segundos">\n<button id="convertir">Convertir</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("convertir").addEventListener("click", () => {\n  let total = parseInt(document.getElementById("segundos").value);\n  const h = Math.floor(total / 3600);\n  total %= 3600;\n  const m = Math.floor(total / 60);\n  const s = total % 60;\n  document.getElementById("resultado").textContent = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;\n});' }
    ]
  },
  {
    id: 'ch386',
    title: 'Efecto de texto que se desvanece en los bordes',
    level: 'Básico',
    description: 'Un párrafo con un degradado de opacidad en los extremos superior e inferior.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor con texto largo.',
      'En <strong>styles.css</strong>, usa una máscara con gradiente lineal (webkit-mask-image).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="fade-text">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Este texto se desvanece al final.</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.fade-text { height: 100px; overflow-y: auto; -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%); }' }
    ]
  },
  {
    id: 'ch387',
    title: 'Opciones estilizadas con radio buttons',
    level: 'Básico',
    description: 'Tres opciones representadas como tarjetas. Al seleccionar una, se marca visualmente.',
    instructions: [
      'En <strong>index.html</strong>, inputs radio ocultos y labels asociadas.',
      'En <strong>styles.css</strong>, labels estilizadas como tarjetas, borde verde cuando el radio está checked.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="opciones">\n  <input type="radio" id="op1" name="plan" hidden checked>\n  <label for="op1">Básico</label>\n  <input type="radio" id="op2" name="plan" hidden>\n  <label for="op2">Pro</label>\n  <input type="radio" id="op3" name="plan" hidden>\n  <label for="op3">Enterprise</label>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.opciones label { display: inline-block; padding: 20px; border: 2px solid #ccc; border-radius: 10px; cursor: pointer; margin: 5px; transition: border-color 0.2s; }\n.opciones input:checked + label { border-color: #2d6a4f; background: #e8f5e9; }' }
    ]
  },
  {
    id: 'ch388',
    title: 'Caja de búsqueda con historial',
    level: 'Intermedio',
    description: 'Un buscador que guarda las últimas 5 búsquedas en localStorage y las muestra como sugerencias.',
    instructions: [
      'En <strong>index.html</strong>, input buscar y lista de historial debajo.',
      'En <strong>script.js</strong>, almacena en un array, guarda en localStorage y renderiza historial.',
      'Al hacer clic en una sugerencia, se coloca en el input.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscador" placeholder="Buscar...">\n<ul id="historial"></ul>' },
      { name: 'script.js', lang: 'js', content: 'let historial = JSON.parse(localStorage.getItem("historial")) || [];\nconst input = document.getElementById("buscador");\nconst lista = document.getElementById("historial");\nfunction renderHistorial() {\n  lista.innerHTML = historial.map(h => `<li class="sugerencia">${h}</li>`).join("");\n}\ninput.addEventListener("keydown", e => {\n  if (e.key === "Enter" && input.value.trim()) {\n    const termino = input.value.trim();\n    historial = [termino, ...historial.filter(t => t !== termino)].slice(0, 5);\n    localStorage.setItem("historial", JSON.stringify(historial));\n    renderHistorial();\n  }\n});\nlista.addEventListener("click", e => { if (e.target.classList.contains("sugerencia")) input.value = e.target.textContent; });\nrenderHistorial();' }
    ]
  },
  {
    id: 'ch389',
    title: 'Gráfico de radar simple con Canvas',
    level: 'Avanzado',
    description: 'Dibuja un gráfico de radar (araña) con 5 ejes a partir de valores normalizados.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, define ejes (60°, 120°, etc.), dibuja la cuadrícula y rellena el polígono de datos.',
      'Muestra etiquetas opcionales.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="radar" width="300" height="300"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const ctx = document.getElementById("radar").getContext("2d");\nconst centroX = 150, centroY = 150, radio = 100;\nconst datos = [0.8, 0.6, 0.9, 0.4, 0.7];\nctx.beginPath();\nfor (let i = 0; i <= 5; i++) {\n  const angulo = (Math.PI * 2 * i / 5) - Math.PI / 2;\n  const x = centroX + radio * Math.cos(angulo);\n  const y = centroY + radio * Math.sin(angulo);\n  if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n}\nctx.closePath();\nctx.strokeStyle = "#ccc";\nctx.stroke();\nctx.beginPath();\ndatos.forEach((val, i) => {\n  const angulo = (Math.PI * 2 * i / 5) - Math.PI / 2;\n  const x = centroX + radio * val * Math.cos(angulo);\n  const y = centroY + radio * val * Math.sin(angulo);\n  if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n});\nctx.closePath();\nctx.fillStyle = "rgba(45, 106, 79, 0.5)";\nctx.fill();\nctx.strokeStyle = "#2d6a4f";\nctx.stroke();' }
    ]
  },
  {
    id: 'ch390',
    title: 'Presiona la tecla correcta (juego rápido)',
    level: 'Intermedio',
    description: 'Muestra una letra aleatoria y el usuario debe presionar la tecla correspondiente lo más rápido posible.',
    instructions: [
      'En <strong>index.html</strong>, letra grande y un span de puntuación.',
      'En <strong>script.js</strong>, genera letra aleatoria, escucha keydown, compara y suma puntos.',
      'Si falla, muestra un mensaje.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Presiona la letra: <span id="letra" style="font-size:4rem;">A</span></p>\n<p>Puntos: <span id="puntos">0</span></p>' },
      { name: 'script.js', lang: 'js', content: 'let puntos = 0;\nlet letraActual = String.fromCharCode(65 + Math.floor(Math.random() * 26));\ndocument.getElementById("letra").textContent = letraActual;\ndocument.addEventListener("keydown", e => {\n  if (e.key.toUpperCase() === letraActual) {\n    puntos++;\n    document.getElementById("puntos").textContent = puntos;\n    letraActual = String.fromCharCode(65 + Math.floor(Math.random() * 26));\n    document.getElementById("letra").textContent = letraActual;\n  } else {\n    document.body.style.background = "red";\n    setTimeout(() => document.body.style.background = "", 200);\n  }\n});' }
    ]
  },
  {
    id: 'ch391',
    title: 'Formulario de registro paso a paso con indicador',
    level: 'Intermedio',
    description: 'Formulario dividido en 3 pasos con indicador visual de progreso.',
    instructions: [
      'En <strong>index.html</strong>, tres fieldsets ocultos excepto el primero, y un indicador de pasos (círculos).',
      'En <strong>script.js</strong>, botones siguiente/anterior que muestran el fieldset correspondiente.',
      'En <strong>styles.css</strong>, estiliza el indicador.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="stepper">\n  <span class="paso activo">1</span> <span class="paso">2</span> <span class="paso">3</span>\n</div>\n<fieldset id="paso1">Nombre <input></fieldset>\n<fieldset id="paso2" style="display:none;">Email <input></fieldset>\n<fieldset id="paso3" style="display:none;">Contraseña <input type="password"></fieldset>\n<button id="anterior" disabled>Anterior</button>\n<button id="siguiente">Siguiente</button>' },
      { name: 'script.js', lang: 'js', content: 'let paso = 1;\nconst total = 3;\nfunction actualizar() {\n  document.querySelectorAll("fieldset").forEach((f, i) => f.style.display = (i+1===paso)?"block":"none");\n  document.querySelectorAll(".stepper .paso").forEach((p, i) => p.classList.toggle("activo", i+1<=paso));\n  document.getElementById("anterior").disabled = paso === 1;\n  document.getElementById("siguiente").textContent = paso === total ? "Enviar" : "Siguiente";\n}\ndocument.getElementById("siguiente").addEventListener("click", () => {\n  if (paso < total) { paso++; actualizar(); } else alert("Formulario enviado");\n});\ndocument.getElementById("anterior").addEventListener("click", () => {\n  if (paso > 1) { paso--; actualizar(); }\n});\nactualizar();' }
    ]
  },
  {
    id: 'ch392',
    title: 'Portada de revista con CSS (imagen y texto superpuesto)',
    level: 'Básico',
    description: 'Simula una portada de revista con una imagen de fondo, titular grande, subtítulo y fecha.',
    instructions: [
      'En <strong>index.html</strong>, un div con imagen de fondo y posición relativa, y dentro textos con posición absoluta.',
      'En <strong>styles.css</strong>, ajusta el texto con diferentes tamaños, colores y sombras.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="portada">\n  <h1>EL FUTURO ES HOY</h1>\n  <h2>Tecnología y más</h2>\n  <span class="fecha">Junio 2026</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.portada {\n  position: relative;\n  width: 300px;\n  height: 400px;\n  background: url("https://via.placeholder.com/300x400/2d6a4f/ffffff") center/cover;\n  color: white;\n  font-family: "Georgia", serif;\n}\n.portada h1 { position: absolute; top: 20px; left: 20px; font-size: 2.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.7); }\n.portada h2 { position: absolute; top: 120px; left: 20px; font-size: 1.2rem; }\n.fecha { position: absolute; bottom: 10px; right: 10px; }' }
    ]
  },
  {
    id: 'ch393',
    title: 'Indicador de nivel de batería con Battery API',
    level: 'Avanzado',
    description: 'Usa la Battery Status API para mostrar el nivel de batería del dispositivo y si está cargando.',
    instructions: [
      'En <strong>index.html</strong>, un span o div para el nivel.',
      'En <strong>script.js</strong>, usa navigator.getBattery().then y actualiza el nivel y el estado de carga.',
      'En <strong>styles.css</strong>, una barra de progreso.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="bateria">Obteniendo nivel...</div>' },
      { name: 'script.js', lang: 'js', content: 'if ("getBattery" in navigator) {\n  navigator.getBattery().then(battery => {\n    function actualizar() {\n      const nivel = Math.round(battery.level * 100);\n      document.getElementById("bateria").textContent = `Batería: ${nivel}% ${battery.charging ? "⚡" : ""}`;\n    }\n    actualizar();\n    battery.addEventListener("levelchange", actualizar);\n    battery.addEventListener("chargingchange", actualizar);\n  });\n} else {\n  document.getElementById("bateria").textContent = "Battery API no soportada.";\n}' }
    ]
  },
  {
    id: 'ch394',
    title: 'Animación de olas con gradientes SVG',
    level: 'Intermedio',
    description: 'Ondas animadas en la parte inferior de un div usando SVG o CSS.',
    instructions: [
      'En <strong>index.html</strong>, un div con un SVG wave.',
      'En <strong>styles.css</strong>, anima el SVG desplazándolo horizontalmente.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="olas">\n  <svg viewBox="0 0 1440 120">\n    <path class="ola" d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="#2d6a4f" opacity="0.5"/>\n    <path class="ola2" d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="#2d6a4f"/>\n  </svg>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.ola { animation: moverOla 6s linear infinite; }\n.ola2 { animation: moverOla 8s linear infinite reverse; }\n@keyframes moverOla { from { transform: translateX(0); } to { transform: translateX(-100%); } }' }
    ]
  },
  {
    id: 'ch395',
    title: 'Modo oscuro con toggle y persistencia en localStorage',
    level: 'Intermedio',
    description: 'Botón para cambiar entre tema claro y oscuro, guardando la preferencia en localStorage.',
    instructions: [
      'En <strong>index.html</strong>, un botón de toggle.',
      'En <strong>script.js</strong>, define variables CSS para los colores, cambia entre dos conjuntos y guarda en localStorage.',
      'En <strong>styles.css</strong>, define las variables en :root y una clase .dark para sobreescribirlas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="toggleDark">🌙 Modo oscuro</button>\n<p>Este es un texto de prueba.</p>' },
      { name: 'styles.css', lang: 'css', content: ':root { --bg: #fff; --color: #333; }\nbody { background: var(--bg); color: var(--color); }\nbody.dark { --bg: #1e1e2e; --color: #cdd6f4; }' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("toggleDark");\nconst oscuro = localStorage.getItem("darkMode") === "true";\ndocument.body.classList.toggle("dark", oscuro);\nbtn.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";\nbtn.addEventListener("click", () => {\n  const isDark = document.body.classList.toggle("dark");\n  localStorage.setItem("darkMode", isDark);\n  btn.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";\n});' }
    ]
  },
  {
    id: 'ch396',
    title: 'Visor de PDF embebido',
    level: 'Básico',
    description: 'Muestra un archivo PDF usando un <code>&lt;iframe&gt;</code> o <code>&lt;embed&gt;</code>.',
    instructions: [
      'En <strong>index.html</strong>, un iframe con src apuntando a un PDF público (ej. un pdf de muestra).',
      'Añade un atributo width y height.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" width="600" height="400"></iframe>' }
    ]
  },
  {
    id: 'ch397',
    title: 'Calculadora de propina ajustable',
    level: 'Básico',
    description: 'Ingresa el monto de la cuenta y un porcentaje, y muestra la propina y el total.',
    instructions: [
      'En <strong>index.html</strong>, inputs para total y porcentaje, y botón calcular.',
      'En <strong>script.js</strong>, calcula propina = total * porcentaje / 100 y total a pagar.',
      'Muestra los resultados formateados.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="total" placeholder="Total cuenta">\n<input type="number" id="porcentaje" value="15" placeholder="% propina">\n<button id="calcular">Calcular propina</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcular").addEventListener("click", () => {\n  const total = parseFloat(document.getElementById("total").value);\n  const porc = parseFloat(document.getElementById("porcentaje").value);\n  const propina = total * porc / 100;\n  document.getElementById("resultado").textContent = `Propina: $${propina.toFixed(2)} | Total a pagar: $${(total + propina).toFixed(2)}`;\n});' }
    ]
  },
  {
    id: 'ch398',
    title: 'Reloj de arena animado con CSS',
    level: 'Intermedio',
    description: 'Dibuja un reloj de arena con divs y anima la arena cayendo.',
    instructions: [
      'En <strong>index.html</strong>, estructura con varios divs (parte superior, inferior, arena).',
      'En <strong>styles.css</strong>, animación que reduce la altura de la arena superior y aumenta la inferior.',
      'No requiere JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="reloj-arena">\n  <div class="superior">\n    <div class="arena-sup"></div>\n  </div>\n  <div class="inferior">\n    <div class="arena-inf"></div>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.reloj-arena { width: 100px; height: 200px; display: flex; flex-direction: column; justify-content: space-between; }\n.superior, .inferior { width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; position: relative; overflow: hidden; }\n.superior { border-top: 80px solid #d4af37; }\n.inferior { border-bottom: 80px solid #d4af37; }\n.arena-sup { position: absolute; top: -80px; left: -50px; width: 100px; height: 80px; background: #f4a460; animation: vaciar 4s linear infinite; }\n.arena-inf { position: absolute; bottom: -80px; left: -50px; width: 100px; height: 0; background: #f4a460; animation: llenarInf 4s linear infinite; }\n@keyframes vaciar { 0%, 100% { height: 80px; } 50% { height: 0; } }\n@keyframes llenarInf { 0%, 100% { height: 0; } 50% { height: 80px; } }' }
    ]
  },
  {
    id: 'ch399',
    title: 'Selector de país con banderas (emoji)',
    level: 'Básico',
    description: 'Un select con nombres de países y sus banderas emoji.',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;select&gt;</code> con opciones que empiecen con el emoji de la bandera.',
      'Ejemplo: 🇪🇸 España, 🇺🇸 Estados Unidos, etc.',
      'En <strong>script.js</strong>, al seleccionar muestra en un span el país elegido.',
      'Sin CSS adicional.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="pais">\n  <option>🇪🇸 España</option>\n  <option>🇺🇸 Estados Unidos</option>\n  <option>🇩🇪 Alemania</option>\n</select>\n<p id="seleccionado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("pais").addEventListener("change", function() {\n  document.getElementById("seleccionado").textContent = "Seleccionaste: " + this.value;\n});' }
    ]
  },
  {
    id: 'ch400',
    title: 'Juego de memoria con emojis (20 cartas)',
    level: 'Avanzado',
    description: 'Un memorama de 5x4 con emojis. Voltea dos cartas, si coinciden se quedan; si no, se ocultan de nuevo.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor grid 5x4 generado con JS.',
      'En <strong>script.js</strong>, crea array de 10 emojis duplicados, los mezcla, dibuja cartas y gestiona la lógica de volteo y emparejamiento.',
      'En <strong>styles.css</strong>, cartas con transición de giro.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="memorama" id="memorama"></div>' },
      { name: 'styles.css', lang: 'css', content: '.memorama { display: grid; grid-template-columns: repeat(5, 60px); gap: 5px; }\n.carta { width: 60px; height: 60px; background: #2d6a4f; color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; cursor: pointer; border-radius: 5px; }\n.carta.volteada, .carta.acertada { background: #fff; color: black; }' },
      { name: 'script.js', lang: 'js', content: 'const emojis = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯"];\nlet cartas = [...emojis, ...emojis].sort(() => Math.random() - 0.5);\nlet seleccionadas = [];\nlet bloqueado = false;\nfunction render() {\n  document.getElementById("memorama").innerHTML = cartas.map((emoji, i) => `<div class="carta" data-idx="${i}">?</div>`).join("");\n}\ndocument.getElementById("memorama").addEventListener("click", e => {\n  if (bloqueado || !e.target.classList.contains("carta") || e.target.classList.contains("volteada") || e.target.classList.contains("acertada")) return;\n  const idx = e.target.dataset.idx;\n  e.target.textContent = cartas[idx];\n  e.target.classList.add("volteada");\n  seleccionadas.push(e.target);\n  if (seleccionadas.length === 2) {\n    bloqueado = true;\n    if (seleccionadas[0].textContent === seleccionadas[1].textContent) {\n      seleccionadas.forEach(c => c.classList.add("acertada"));\n      seleccionadas = [];\n      bloqueado = false;\n    } else {\n      setTimeout(() => {\n        seleccionadas.forEach(c => { c.textContent = "?"; c.classList.remove("volteada"); });\n        seleccionadas = [];\n        bloqueado = false;\n      }, 800);\n    }\n  }\n});\nrender();' }
    ]
  },
    {
    id: 'ch401',
    title: 'Botón con efecto de pulso infinito',
    level: 'Básico',
    description: 'Crea un botón que emita un anillo expansivo continuamente, como un sonar.',
    instructions: [
      'En <strong>index.html</strong>, añade un <code>&lt;button&gt;</code> con clase "pulso".',
      'En <strong>styles.css</strong>, usa un pseudo-elemento <code>::before</code> con un <code>animation</code> que expanda el borde y lo haga desaparecer.',
      'Repite la animación infinitamente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="pulso">Púlsame</button>' },
      { name: 'styles.css', lang: 'css', content: '.pulso { position: relative; padding: 15px 30px; background: #2d6a4f; color: white; border: none; border-radius: 30px; overflow: hidden; }\n.pulso::before { content: ""; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border: 2px solid rgba(212,175,55,0.5); border-radius: 50%; transform: translate(-50%, -50%); animation: anillo 2s infinite; }\n@keyframes anillo { 0% { width: 0; height: 0; opacity: 1; } 100% { width: 200px; height: 200px; opacity: 0; } }' }
    ]
  },
  {
    id: 'ch402',
    title: 'Notas con diseño de post-it giratorio',
    level: 'Básico',
    description: 'Crea notas adhesivas con una ligera rotación aleatoria y sombra, simulando post-its en un tablero.',
    instructions: [
      'En <strong>index.html</strong>, varios <code>&lt;div&gt;</code> con clase "postit".',
      'En <strong>styles.css</strong>, aplica colores pastel, sombra de caja, y una rotación de unos grados con <code>transform: rotate(-2deg)</code> (alterna).',
      'Usa <code>nth-child</code> para alternar rotación.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="postit">Recordar comprar leche</div>\n<div class="postit">Llamar al cliente</div>\n<div class="postit">Enviar factura</div>' },
      { name: 'styles.css', lang: 'css', content: '.postit { width: 200px; padding: 20px; background: #fff9c4; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); margin: 10px; display: inline-block; }\n.postit:nth-child(odd) { transform: rotate(-2deg); }\n.postit:nth-child(even) { transform: rotate(2deg); }' }
    ]
  },
  {
    id: 'ch403',
    title: 'Generador de nombres aleatorios para proyectos',
    level: 'Básico',
    description: 'Combina adjetivos y sustantivos para generar un nombre divertido de proyecto.',
    instructions: [
      'En <strong>index.html</strong>, un botón y un span para mostrar el nombre.',
      'En <strong>script.js</strong>, arrays de adjetivos y sustantivos. Al hacer clic, selecciona uno de cada uno y muestra la combinación.',
      'Ejemplo: "Ágil unicornio", "Poderoso halcón".'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="generarNombre">Generar nombre</button>\n<p id="nombreProyecto"></p>' },
      { name: 'script.js', lang: 'js', content: 'const adj = ["Ágil", "Poderoso", "Cósmico", "Veloz", "Increíble"];\nconst sust = ["Unicornio", "Halcón", "Cohete", "Tigre", "Dragón"];\ndocument.getElementById("generarNombre").addEventListener("click", () => {\n  const a = adj[Math.floor(Math.random()*adj.length)];\n  const s = sust[Math.floor(Math.random()*sust.length)];\n  document.getElementById("nombreProyecto").textContent = a + " " + s;\n});' }
    ]
  },
  {
    id: 'ch404',
    title: 'Barra lateral con pestañas colapsables',
    level: 'Intermedio',
    description: 'Un menú lateral con categorías que se expanden y colapsan al hacer clic.',
    instructions: [
      'En <strong>index.html</strong>, lista ul/li con botones que muestran/ocultan sublistas.',
      'En <strong>script.js</strong>, toggle de clase "oculto" en las sublistas.',
      'En <strong>styles.css</strong>, transiciones suaves con max-height.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul class="menu-lateral">\n  <li><button class="cat-btn">Productos</button>\n    <ul class="submenu oculto">\n      <li>Software</li>\n      <li>Hardware</li>\n    </ul>\n  </li>\n  <li><button class="cat-btn">Servicios</button>\n    <ul class="submenu oculto">\n      <li>Consultoría</li>\n      <li>Soporte</li>\n    </ul>\n  </li>\n</ul>' },
      { name: 'styles.css', lang: 'css', content: '.submenu.oculto { max-height: 0; overflow: hidden; transition: max-height 0.3s; }\n.submenu:not(.oculto) { max-height: 200px; }\n.cat-btn { background: none; border: none; cursor: pointer; padding: 5px; font-weight: bold; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".cat-btn").forEach(btn => {\n  btn.addEventListener("click", function() {\n    this.nextElementSibling.classList.toggle("oculto");\n  });\n});' }
    ]
  },
  {
    id: 'ch405',
    title: 'Previsualización de enlace con metadatos (como redes sociales)',
    level: 'Intermedio',
    description: 'Pega una URL y extrae (simulado) título, descripción e imagen para mostrar una tarjeta de previsualización.',
    instructions: [
      'En <strong>index.html</strong>, input para URL y botón "Vista previa".',
      'En <strong>script.js</strong>, usa un objeto predefinido con URLs de ejemplo y sus metadatos. Al ingresar una URL conocida, muestra la tarjeta; si no, un error.',
      'Muestra imagen, título y descripción en un div.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="url" placeholder="https://ejemplo.com">\n<button id="preview">Vista previa</button>\n<div id="tarjeta"></div>' },
      { name: 'script.js', lang: 'js', content: 'const metadatos = {\n  "https://ejemplo.com": { titulo: "Ejemplo", desc: "Sitio de ejemplo", img: "https://via.placeholder.com/150" },\n  "https://noticia.com": { titulo: "Última hora", desc: "Noticia de hoy", img: "https://via.placeholder.com/150" }\n};\ndocument.getElementById("preview").addEventListener("click", () => {\n  const url = document.getElementById("url").value.trim();\n  const data = metadatos[url];\n  if (data) {\n    document.getElementById("tarjeta").innerHTML = `<div style="border:1px solid #ccc; padding:10px; display:flex; gap:10px;">\n      <img src="${data.img}" width="80">\n      <div><h4>${data.titulo}</h4><p>${data.desc}</p></div>\n    </div>`;\n  } else {\n    document.getElementById("tarjeta").innerHTML = "<p>No se pudo obtener previsualización.</p>";\n  }\n});' }
    ]
  },
  {
    id: 'ch406',
    title: 'Efecto de cursor personalizado que cambia',
    level: 'Intermedio',
    description: 'Reemplaza el cursor por un círculo que cambia de tamaño al pasar sobre enlaces o botones.',
    instructions: [
      'En <strong>index.html</strong>, añade un div para el cursor personalizado.',
      'En <strong>script.js</strong>, sigue el ratón con mousemove, y al entrar en elementos específicos (a, button) agranda el cursor.',
      'En <strong>styles.css</strong>, cursor circular semi-transparente. Oculta el cursor nativo (cursor: none en body).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cursor"></div>\n<a href="#">Enlace</a> <button>Botón</button>' },
      { name: 'styles.css', lang: 'css', content: 'body { cursor: none; }\n#cursor { width: 20px; height: 20px; border: 2px solid #2d6a4f; border-radius: 50%; position: fixed; pointer-events: none; transition: width 0.2s, height 0.2s; z-index: 9999; }\n#cursor.grande { width: 40px; height: 40px; background: rgba(45,106,79,0.2); }' },
      { name: 'script.js', lang: 'js', content: 'const cursor = document.getElementById("cursor");\ndocument.addEventListener("mousemove", e => { cursor.style.left = e.clientX - 10 + "px"; cursor.style.top = e.clientY - 10 + "px"; });\ndocument.querySelectorAll("a, button").forEach(el => {\n  el.addEventListener("mouseenter", () => cursor.classList.add("grande"));\n  el.addEventListener("mouseleave", () => cursor.classList.remove("grande"));\n});' }
    ]
  },
  {
    id: 'ch407',
    title: 'Visor de archivos CSV',
    level: 'Avanzado',
    description: 'Sube un archivo CSV y muéstralo en una tabla HTML.',
    instructions: [
      'En <strong>index.html</strong>, un input file y un div para la tabla.',
      'En <strong>script.js</strong>, lee el archivo con FileReader, separa por líneas y comas, y genera una tabla.',
      'Muestra la primera fila como cabecera.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="file" id="csvFile" accept=".csv">\n<div id="tablaCsv"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("csvFile").addEventListener("change", function(e) {\n  const file = e.target.files[0];\n  const reader = new FileReader();\n  reader.onload = function(ev) {\n    const lineas = ev.target.result.split("\\n").filter(l => l.trim());\n    const datos = lineas.map(l => l.split(","));\n    let html = "<table border=1>";\n    datos.forEach((fila, i) => {\n      html += "<tr>";\n      fila.forEach(celda => html += (i===0 ? "<th>" : "<td>") + celda + (i===0 ? "</th>" : "</td>"));\n      html += "</tr>";\n    });\n    html += "</table>";\n    document.getElementById("tablaCsv").innerHTML = html;\n  };\n  reader.readAsText(file);\n});' }
    ]
  },
  {
    id: 'ch408',
    title: 'Barra de progreso de carga de archivo',
    level: 'Intermedio',
    description: 'Simula la subida de un archivo mostrando una barra de progreso que avanza hasta el 100%.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Subir" y una barra de progreso.',
      'En <strong>script.js</strong>, al hacer clic, deshabilita el botón y avanza la barra con setInterval hasta 100%, luego restaura.',
      'En <strong>styles.css</strong>, estiliza la barra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="subir">Subir archivo</button>\n<div class="barra"><div class="progreso" id="progreso"></div></div>' },
      { name: 'styles.css', lang: 'css', content: '.barra { width: 300px; height: 20px; background: #eee; }\n.progreso { height: 100%; background: #2d6a4f; width: 0; transition: width 0.1s; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("subir").addEventListener("click", function() {\n  this.disabled = true;\n  const prog = document.getElementById("progreso");\n  let ancho = 0;\n  const intervalo = setInterval(() => {\n    ancho += 5;\n    prog.style.width = ancho + "%";\n    if (ancho >= 100) {\n      clearInterval(intervalo);\n      setTimeout(() => { prog.style.width = "0"; this.disabled = false; }, 500);\n    }\n  }, 100);\n});' }
    ]
  },
  {
    id: 'ch409',
    title: 'Simulador de escritura con teclas visuales',
    level: 'Intermedio',
    description: 'Al presionar teclas físicas, se ilumina una tecla en un teclado virtual dibujado con HTML/CSS.',
    instructions: [
      'En <strong>index.html</strong>, crea divs para cada letra del teclado.',
      'En <strong>script.js</strong>, escucha keydown y añade una clase "presionada" a la tecla correspondiente; la quita con keyup.',
      'En <strong>styles.css</strong>, estiliza las teclas como un teclado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="teclado" id="teclado"></div>' },
      { name: 'styles.css', lang: 'css', content: '.tecla { display: inline-block; width: 30px; height: 30px; border: 1px solid #ccc; text-align: center; line-height: 30px; margin: 2px; border-radius: 5px; }\n.tecla.presionada { background: #2d6a4f; color: white; }' },
      { name: 'script.js', lang: 'js', content: 'const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];\nconst cont = document.getElementById("teclado");\nrows.forEach(row => {\n  const divRow = document.createElement("div");\n  row.split("").forEach(letra => {\n    const tecla = document.createElement("span");\n    tecla.className = "tecla";\n    tecla.textContent = letra;\n    tecla.dataset.key = letra;\n    divRow.appendChild(tecla);\n  });\n  cont.appendChild(divRow);\n});\ndocument.addEventListener("keydown", e => {\n  const tecla = document.querySelector(`.tecla[data-key="${e.key.toUpperCase()}"]`);\n  if (tecla) tecla.classList.add("presionada");\n});\ndocument.addEventListener("keyup", e => {\n  const tecla = document.querySelector(`.tecla[data-key="${e.key.toUpperCase()}"]`);\n  if (tecla) tecla.classList.remove("presionada");\n});' }
    ]
  },
  {
    id: 'ch410',
    title: 'Determinar si un año es bisiesto',
    level: 'Básico',
    description: 'Ingresa un año y comprueba si es bisiesto.',
    instructions: [
      'En <strong>index.html</strong>, input año y botón verificar.',
      'En <strong>script.js</strong>, aplica la regla: divisible por 4 y no por 100, o divisible por 400.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="anio" placeholder="Año">\n<button id="verificar">Verificar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("verificar").addEventListener("click", () => {\n  const anio = parseInt(document.getElementById("anio").value);\n  const bisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;\n  document.getElementById("resultado").textContent = bisiesto ? "Es bisiesto" : "No es bisiesto";\n});' }
    ]
  },
  {
    id: 'ch411',
    title: 'Muestra una imagen aleatoria de Unsplash',
    level: 'Básico',
    description: 'Carga una imagen aleatoria desde la API de Unsplash (source.unsplash.com) en un img.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Nueva imagen" y una imagen.',
      'En <strong>script.js</strong>, al hacer clic, cambia el src a <code>https://source.unsplash.com/random/400x300</code> con un parámetro de tiempo para evitar caché.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="nuevaImg">Nueva imagen</button><br>\n<img id="img" src="https://source.unsplash.com/random/400x300" width="400">' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("nuevaImg").addEventListener("click", () => {\n  document.getElementById("img").src = `https://source.unsplash.com/random/400x300?${Date.now()}`;\n});' }
    ]
  },
  {
    id: 'ch412',
    title: 'Banner de cookies con botón de configuración',
    level: 'Intermedio',
    description: 'Un banner de cookies que permite aceptar todas, rechazar o configurar categorías (esenciales, analíticas, marketing).',
    instructions: [
      'En <strong>index.html</strong>, banner con checkboxes y botones.',
      'En <strong>script.js</strong>, guarda preferencias en localStorage y muestra/oculta el banner.',
      'En <strong>styles.css</strong>, posiciona el banner fijo abajo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cookieBanner">\n  <p>Usamos cookies</p>\n  <label><input type="checkbox" id="esenciales" checked disabled> Esenciales</label>\n  <label><input type="checkbox" id="analiticas"> Analíticas</label>\n  <label><input type="checkbox" id="marketing"> Marketing</label>\n  <button id="guardarCookies">Guardar preferencias</button>\n  <button id="rechazarCookies">Rechazar</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const banner = document.getElementById("cookieBanner");\nif (localStorage.getItem("cookiesConfig")) banner.style.display = "none";\ndocument.getElementById("guardarCookies").addEventListener("click", () => {\n  localStorage.setItem("cookiesConfig", JSON.stringify({\n    esenciales: true,\n    analiticas: document.getElementById("analiticas").checked,\n    marketing: document.getElementById("marketing").checked\n  }));\n  banner.style.display = "none";\n});\ndocument.getElementById("rechazarCookies").addEventListener("click", () => {\n  localStorage.setItem("cookiesConfig", JSON.stringify({esenciales: true, analiticas: false, marketing: false}));\n  banner.style.display = "none";\n});' }
    ]
  },
  {
    id: 'ch413',
    title: 'Gráfico de barras con etiquetas usando Canvas',
    level: 'Intermedio',
    description: 'Dibuja un gráfico de barras sencillo con Canvas, mostrando el valor encima de cada barra.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, array de valores, dibuja rectángulos y escribe el valor usando ctx.fillText.',
      'Escala las barras proporcionalmente al alto del canvas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="graficoBarras" width="400" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const ctx = document.getElementById("graficoBarras").getContext("2d");\nconst datos = [45, 80, 30, 65, 90];\nconst max = Math.max(...datos);\nconst ancho = 60;\nconst gap = 20;\nctx.fillStyle = "#2d6a4f";\ndatos.forEach((val, i) => {\n  const altura = (val / max) * (canvas.height - 30);\n  ctx.fillRect(i*(ancho+gap)+30, canvas.height - altura, ancho, altura);\n  ctx.fillStyle = "black";\n  ctx.fillText(val, i*(ancho+gap)+ancho/2, canvas.height - altura - 5);\n  ctx.fillStyle = "#2d6a4f";\n});' }
    ]
  },
  {
    id: 'ch414',
    title: 'Carrusel de imágenes con arrastre (swipe) táctil',
    level: 'Avanzado',
    description: 'Implementa un slider que se pueda deslizar con el dedo en pantallas táctiles, usando touchstart, touchmove, touchend.',
    instructions: [
      'En <strong>index.html</strong>, contenedor con imágenes en fila.',
      'En <strong>script.js</strong>, guarda la posición del touch, calcula el desplazamiento y al soltar, determina si avanza o retrocede.',
      'En <strong>styles.css</strong>, el contenedor overflow hidden y las imágenes con display flex.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="swipe-carousel">\n  <div class="swipe-track" id="track">\n    <img src="https://via.placeholder.com/300/FF0000" width="300">\n    <img src="https://via.placeholder.com/300/00FF00" width="300">\n    <img src="https://via.placeholder.com/300/0000FF" width="300">\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.swipe-carousel { width: 300px; overflow: hidden; }\n.swipe-track { display: flex; transition: transform 0.3s; }' },
      { name: 'script.js', lang: 'js', content: 'const track = document.getElementById("track");\nlet startX = 0;\nlet currentTranslate = 0;\nlet index = 0;\ntrack.addEventListener("touchstart", e => {\n  startX = e.touches[0].clientX;\n  track.style.transition = "none";\n});\ntrack.addEventListener("touchmove", e => {\n  const diff = e.touches[0].clientX - startX;\n  track.style.transform = `translateX(${currentTranslate + diff}px)`;\n});\ntrack.addEventListener("touchend", e => {\n  const diff = e.changedTouches[0].clientX - startX;\n  track.style.transition = "transform 0.3s";\n  if (diff < -50) index = Math.min(index + 1, 2);\n  else if (diff > 50) index = Math.max(index - 1, 0);\n  currentTranslate = -index * 300;\n  track.style.transform = `translateX(${currentTranslate}px)`;\n});' }
    ]
  },
  {
    id: 'ch415',
    title: 'Barra de noticias tipo marquesina con dirección variable',
    level: 'Básico',
    description: 'Un texto que se desplaza horizontalmente, y un botón que invierte la dirección.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor marquesina y un botón "Invertir".',
      'En <strong>styles.css</strong>, animación CSS que mueva translateX, y al invertir, cambia la dirección con JS añadiendo una clase.',
      'En <strong>script.js</strong>, toggle de clase "inverso" que usa animation-direction: reverse.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="marquee"><div class="marquee-texto">Noticia importante: el mercado sube.</div></div>\n<button id="invertir">Invertir</button>' },
      { name: 'styles.css', lang: 'css', content: '.marquee { overflow: hidden; background: #333; color: white; padding: 5px; }\n.marquee-texto { white-space: nowrap; animation: scroll 10s linear infinite; }\n.marquee-texto.inverso { animation-direction: reverse; }\n@keyframes scroll { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("invertir").addEventListener("click", () => {\n  document.querySelector(".marquee-texto").classList.toggle("inverso");\n});' }
    ]
  },
  {
    id: 'ch416',
    title: 'Previsualización de código HTML en un iframe',
    level: 'Intermedio',
    description: 'Escribe HTML en un textarea y muestra el resultado en un iframe al hacer clic en "Actualizar".',
    instructions: [
      'En <strong>index.html</strong>, un textarea y un iframe.',
      'En <strong>script.js</strong>, crea un Blob con el contenido del textarea, genera una URL y asigna al src del iframe.',
      'Opcional: botón actualizar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="codigoHtml" rows="10" cols="50"><h1>Hola mundo</h1></textarea>\n<button id="actualizar">Actualizar vista</button>\n<iframe id="resultado" width="100%" height="200"></iframe>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("actualizar").addEventListener("click", () => {\n  const html = document.getElementById("codigoHtml").value;\n  const blob = new Blob([html], {type: "text/html"});\n  document.getElementById("resultado").src = URL.createObjectURL(blob);\n});' }
    ]
  },
  {
    id: 'ch417',
    title: 'Generador de proverbios aleatorios',
    level: 'Básico',
    description: 'Muestra un refrán aleatorio al hacer clic en un botón.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Nuevo refrán" y un párrafo.',
      'En <strong>script.js</strong>, array de refranes y elige uno al azar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="nuevoRefran">Nuevo refrán</button>\n<p id="refran"></p>' },
      { name: 'script.js', lang: 'js', content: 'const refranes = ["Más vale pájaro en mano que ciento volando.", "A caballo regalado no le mires el diente.", "No dejes para mañana lo que puedas hacer hoy."];\ndocument.getElementById("nuevoRefran").addEventListener("click", () => {\n  document.getElementById("refran").textContent = refranes[Math.floor(Math.random() * refranes.length)];\n});' }
    ]
  },
  {
    id: 'ch418',
    title: 'Botón que se mueve al intentar hacer clic (troll)',
    level: 'Básico',
    description: 'Un botón que cambia de posición al pasar el ratón por encima, huyendo del cursor.',
    instructions: [
      'En <strong>index.html</strong>, un botón con id "escurridizo".',
      'En <strong>script.js</strong>, al hacer hover (mouseenter), cambia aleatoriamente sus propiedades de posicionamiento absoluto.',
      'En <strong>styles.css</strong>, posición absoluta dentro de un contenedor relativo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div style="position:relative; height:300px;">\n  <button id="escurridizo" style="position:absolute;">Haz clic</button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("escurridizo");\nbtn.addEventListener("mouseenter", () => {\n  const maxX = 200, maxY = 200;\n  btn.style.left = Math.random() * maxX + "px";\n  btn.style.top = Math.random() * maxY + "px";\n});' }
    ]
  },
  {
    id: 'ch419',
    title: 'Efecto de imagen con duotono',
    level: 'Básico',
    description: 'Aplica un filtro de duotono a una imagen usando CSS (filter con múltiples valores y background-blend-mode).',
    instructions: [
      'En <strong>index.html</strong>, un div con una imagen de fondo.',
      'En <strong>styles.css</strong>, aplica <code>filter: grayscale(100%)</code> y un <code>background-color</code> con <code>mix-blend-mode</code>.',
      'O bien, aplica un pseudo-elemento con color y blend mode sobre la imagen.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="duotono"></div>' },
      { name: 'styles.css', lang: 'css', content: '.duotono {\n  width: 300px; height: 200px;\n  background: url("https://via.placeholder.com/300x200"), linear-gradient(45deg, #2d6a4f, #d4af37);\n  background-blend-mode: luminosity;\n  background-size: cover;\n}' }
    ]
  },
  {
    id: 'ch420',
    title: 'Mini editor de Markdown con vista previa',
    level: 'Avanzado',
    description: 'Escribe Markdown en un textarea y muestra la previsualización HTML usando la librería marked.js.',
    instructions: [
      'En <strong>index.html</strong>, un textarea y un div previsualización. Incluye la CDN de marked.',
      'En <strong>script.js</strong>, al escribir (input), convierte el texto con marked.parse y lo inyecta en el div.',
      'En <strong>styles.css</strong>, lado a lado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>\n<textarea id="markdown" rows="15" cols="40"># Título\n**negrita** *cursiva*</textarea>\n<div id="preview"></div>' },
      { name: 'styles.css', lang: 'css', content: 'body { display: flex; gap: 20px; }\n#preview { border: 1px solid #ccc; padding: 10px; width: 300px; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("markdown").addEventListener("input", function() {\n  document.getElementById("preview").innerHTML = marked.parse(this.value);\n});' }
    ]
  },
  {
    id: 'ch421',
    title: 'Mapa de calor con tabla de colores graduales',
    level: 'Intermedio',
    description: 'Una tabla donde cada celda muestra un valor numérico y su color de fondo indica la magnitud.',
    instructions: [
      'En <strong>index.html</strong>, tabla generada con JS.',
      'En <strong>script.js</strong>, asigna a cada celda un valor aleatorio y un color hsl variando el matiz o la luminosidad.',
      'En <strong>styles.css</strong>, estiliza las celdas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<table id="heatmap"></table>' },
      { name: 'script.js', lang: 'js', content: 'const tabla = document.getElementById("heatmap");\nfor (let i = 0; i < 6; i++) {\n  const fila = tabla.insertRow();\n  for (let j = 0; j < 6; j++) {\n    const celda = fila.insertCell();\n    const valor = Math.floor(Math.random() * 100);\n    celda.textContent = valor;\n    celda.style.backgroundColor = `hsl(${120 - valor * 1.2}, 80%, 70%)`;\n  }\n}' }
    ]
  },
  {
    id: 'ch422',
    title: 'Carga de perfil de GitHub con API pública',
    level: 'Avanzado',
    description: 'Ingresa un nombre de usuario de GitHub y muestra su avatar y nombre usando la API.',
    instructions: [
      'En <strong>index.html</strong>, input y botón buscar.',
      'En <strong>script.js</strong>, fetch a https://api.github.com/users/username, y muestra los datos.',
      'Muestra avatar y nombre público.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="usuario" placeholder="Usuario GitHub">\n<button id="buscar">Buscar</button>\n<div id="perfil"></div>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("buscar").addEventListener("click", () => {\n  const user = document.getElementById("usuario").value.trim();\n  fetch(`https://api.github.com/users/${user}`)\n    .then(res => res.json())\n    .then(data => {\n      document.getElementById("perfil").innerHTML = `<img src="${data.avatar_url}" width="100"><h2>${data.name || data.login}</h2>`;\n    })\n    .catch(() => document.getElementById("perfil").innerHTML = "Usuario no encontrado.");\n});' }
    ]
  },
  {
    id: 'ch423',
    title: 'Calendario de adviento interactivo',
    level: 'Intermedio',
    description: 'Una cuadrícula de 24 celdas, cada una al hacer clic revela una imagen o mensaje.',
    instructions: [
      'En <strong>index.html</strong>, genera 24 celdas con JS.',
      'En <strong>script.js</strong>, al hacer clic, cambia el contenido por un emoji o imagen predefinida.',
      'En <strong>styles.css</strong>, estiliza las celdas como puertas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="calendario" id="adviento"></div>' },
      { name: 'styles.css', lang: 'css', content: '.calendario { display: grid; grid-template-columns: repeat(4, 80px); gap: 10px; }\n.celda-adv { width: 80px; height: 80px; background: #e74c3c; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; }' },
      { name: 'script.js', lang: 'js', content: 'const regalos = ["🎁", "🎄", "🍪", "⭐", "🧦"];\nconst cont = document.getElementById("adviento");\nfor (let i = 0; i < 24; i++) {\n  const celda = document.createElement("div");\n  celda.className = "celda-adv";\n  celda.textContent = i + 1;\n  celda.addEventListener("click", function() {\n    this.textContent = regalos[Math.floor(Math.random() * regalos.length)];\n  });\n  cont.appendChild(celda);\n}' }
    ]
  },
  {
    id: 'ch424',
    title: 'Simulador de semáforo con temporizador',
    level: 'Intermedio',
    description: 'Semáforo que cambia automáticamente cada 3 segundos entre rojo, amarillo y verde.',
    instructions: [
      'En <strong>index.html</strong>, tres divs circulares.',
      'En <strong>script.js</strong>, un array de colores y tiempos, ciclo con setInterval.',
      'En <strong>styles.css</strong>, círculos con opacidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="semaforo">\n  <div class="luz roja"></div>\n  <div class="luz amarilla"></div>\n  <div class="luz verde"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.luz { width: 50px; height: 50px; border-radius: 50%; background: #333; margin: 10px; }\n.luz.encendida.roja { background: red; }\n.luz.encendida.amarilla { background: yellow; }\n.luz.encendida.verde { background: #00ff00; }' },
      { name: 'script.js', lang: 'js', content: 'const luces = document.querySelectorAll(".luz");\nconst secuencia = [{clase:"roja", tiempo:4000}, {clase:"amarilla", tiempo:1000}, {clase:"verde", tiempo:3000}];\nlet i = 0;\nfunction cambiar() {\n  luces.forEach(l => l.classList.remove("encendida"));\n  luces[i].classList.add("encendida", secuencia[i].clase);\n  setTimeout(() => { i = (i + 1) % 3; cambiar(); }, secuencia[i].tiempo);\n}\ncambiar();' }
    ]
  },
  {
    id: 'ch425',
    title: 'Generador de fondo geométrico aleatorio (CSS)',
    level: 'Intermedio',
    description: 'Cada vez que se carga la página, el fondo aparece con un patrón de polígonos aleatorios usando CSS.',
    instructions: [
      'En <strong>index.html</strong>, un div principal.',
      'En <strong>script.js</strong>, genera un gradiente cónico o múltiples background-image con posiciones aleatorias.',
      'Usa estilos en línea o variables CSS modificadas con JS.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="fondoGeo" style="height:100vh;"></div>' },
      { name: 'script.js', lang: 'js', content: 'const colores = ["#2d6a4f", "#d4af37", "#e74c3c", "#3498db"];\nlet bg = "";\nfor (let i = 0; i < 10; i++) {\n  const color = colores[Math.floor(Math.random()*colores.length)];\n  const x = Math.random()*100, y = Math.random()*100;\n  bg += `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent 50%), `;\n}\nbg = bg.slice(0, -2);\ndocument.getElementById("fondoGeo").style.backgroundImage = bg;' }
    ]
  },
  {
    id: 'ch426',
    title: 'Lista de tareas con filtro "Todas/Pendientes/Completadas"',
    level: 'Intermedio',
    description: 'Un to-do list donde se puede marcar como completada una tarea y filtrar con botones.',
    instructions: [
      'En <strong>index.html</strong>, input, botón agregar, botones de filtro y lista.',
      'En <strong>script.js</strong>, guarda tareas con estado booleano. Al filtrar, muestra solo las que correspondan.',
      'En <strong>styles.css</strong>, tarea completada con tachado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="tarea">\n<button id="agregar">+</button>\n<button class="filtro" data-filtro="todas">Todas</button>\n<button class="filtro" data-filtro="pendientes">Pendientes</button>\n<button class="filtro" data-filtro="completadas">Completadas</button>\n<ul id="listaTodo"></ul>' },
      { name: 'styles.css', lang: 'css', content: '.completada { text-decoration: line-through; }' },
      { name: 'script.js', lang: 'js', content: 'let tareas = [];\nlet filtro = "todas";\nfunction render() {\n  const filtradas = filtro === "todas" ? tareas : tareas.filter(t => filtro === "pendientes" ? !t.hecho : t.hecho);\n  document.getElementById("listaTodo").innerHTML = filtradas.map((t, i) => `<li class="${t.hecho ? "completada" : ""}">${t.texto} <input type="checkbox" data-idx="${i}" ${t.hecho ? "checked" : ""}></li>`).join("");\n}\ndocument.getElementById("agregar").addEventListener("click", () => {\n  const texto = document.getElementById("tarea").value.trim();\n  if (texto) { tareas.push({texto, hecho: false}); render(); document.getElementById("tarea").value = ""; }\n});\ndocument.getElementById("listaTodo").addEventListener("change", e => {\n  if (e.target.type === "checkbox") {\n    tareas[e.target.dataset.idx].hecho = e.target.checked;\n    render();\n  }\n});\ndocument.querySelectorAll(".filtro").forEach(btn => btn.addEventListener("click", () => { filtro = btn.dataset.filtro; render(); }));' }
    ]
  },
  {
    id: 'ch427',
    title: 'Efecto de sombra en relieve (paper stack)',
    level: 'Básico',
    description: 'Simula un montón de papeles apilados con sombras sucesivas detrás de un div.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "paper-stack".',
      'En <strong>styles.css</strong>, usa múltiples box-shadows con desplazamiento ligero y colores de sombra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="paper-stack">Contenido</div>' },
      { name: 'styles.css', lang: 'css', content: '.paper-stack { padding: 20px; background: white; box-shadow: 1px 1px 3px rgba(0,0,0,0.2), 2px 2px 6px rgba(0,0,0,0.1), 4px 4px 10px rgba(0,0,0,0.05); }' }
    ]
  },
  {
    id: 'ch428',
    title: 'Mapa interactivo de una oficina (hover revela nombres)',
    level: 'Intermedio',
    description: 'Una imagen de un plano con áreas sensibles al hover que muestran un tooltip con el nombre del empleado.',
    instructions: [
      'En <strong>index.html</strong>, imagen de fondo y divs posicionados absolutamente sobre los escritorios.',
      'En <strong>script.js</strong>, los divs tienen data-nombre, al hover muestran un tooltip.',
      'En <strong>styles.css</strong>, tooltip estilizado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="plano">\n  <img src="https://via.placeholder.com/500x300" alt="plano">\n  <div class="punto" data-nombre="Juan" style="top:50px;left:100px;"></div>\n  <div class="punto" data-nombre="Ana" style="top:150px;left:250px;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.plano { position: relative; display: inline-block; }\n.punto { position: absolute; width: 20px; height: 20px; background: rgba(45,106,79,0.7); border-radius: 50%; cursor: pointer; }\n.punto::after { content: attr(data-nombre); position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #333; color: white; padding: 2px 8px; border-radius: 4px; white-space: nowrap; opacity: 0; transition: opacity 0.3s; pointer-events: none; }\n.punto:hover::after { opacity: 1; }' }
    ]
  },
  {
    id: 'ch429',
    title: 'Modo superposición de cuadrícula para diseño (grid overlay)',
    level: 'Básico',
    description: 'Muestra u oculta una cuadrícula semitransparente sobre la página para ayudar a maquetar.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Mostrar cuadrícula".',
      'En <strong>script.js</strong>, crea un div overlay con líneas dibujadas con CSS (repeating-linear-gradient) y alterna su visibilidad.',
      'En <strong>styles.css</strong>, el overlay fijo cubriendo toda la pantalla.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="toggleGrid">Mostrar cuadrícula</button>\n<div id="gridOverlay" class="oculto"></div>' },
      { name: 'styles.css', lang: 'css', content: '#gridOverlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(45,106,79,0.2) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(45,106,79,0.2) 20px); }\n.oculto { display: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("toggleGrid").addEventListener("click", () => {\n  document.getElementById("gridOverlay").classList.toggle("oculto");\n});' }
    ]
  },
  {
    id: 'ch430',
    title: 'Reloj de sol (sundial) animado',
    level: 'Avanzado',
    description: 'Simula la sombra de un reloj de sol moviéndose según la hora del día usando CSS transform rotate.',
    instructions: [
      'En <strong>index.html</strong>, un círculo con una línea.',
      'En <strong>script.js</strong>, cada segundo actualiza el ángulo de la línea basado en la hora actual (0-360 grados de 6am a 6pm simplificado).',
      'En <strong>styles.css</strong>, la línea con transform-origin en el centro.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="sundial">\n  <div class="gnomon" id="gnomon"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.sundial { width: 200px; height: 200px; border-radius: 50%; border: 2px solid #333; position: relative; }\n.gnomon { position: absolute; width: 4px; height: 80px; background: black; bottom: 50%; left: 50%; transform-origin: bottom center; }' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const ahora = new Date();\n  const horas = ahora.getHours() + ahora.getMinutes() / 60;\n  const angulo = ((horas - 6) / 12) * 180; // 6am=0, 6pm=180\n  document.getElementById("gnomon").style.transform = `rotate(${angulo}deg)`;\n}\nsetInterval(actualizar, 60000);\nactualizar();' }
    ]
  },
  {
    id: 'ch431',
    title: 'Botonera de emojis para reacción rápida',
    level: 'Básico',
    description: 'Un conjunto de botones con emojis (👍 ❤️ 😂 😮) que al hacer clic muestran un pequeño contador de cada reacción.',
    instructions: [
      'En <strong>index.html</strong>, botones con emojis y un span debajo.',
      'En <strong>script.js</strong>, cada clic incrementa un contador individual y lo muestra.',
      'En <strong>styles.css</strong>, botones grandes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="reaccion" data-emoji="👍">👍 <span>0</span></button>\n<button class="reaccion" data-emoji="❤️">❤️ <span>0</span></button>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".reaccion").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const span = btn.querySelector("span");\n    span.textContent = parseInt(span.textContent) + 1;\n  });\n});' }
    ]
  },
  {
    id: 'ch432',
    title: 'Simulador de máquina expendedora',
    level: 'Intermedio',
    description: 'Selecciona un producto de una lista y paga con monedas virtuales; calcula el cambio.',
    instructions: [
      'En <strong>index.html</strong>, lista de productos con precios, un campo de pago y botón comprar.',
      'En <strong>script.js</strong>, verifica saldo suficiente, calcula cambio.',
      'En <strong>styles.css</strong>, diseño simple.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="producto">\n  <option value="1.00">Agua ($1.00)</option>\n  <option value="1.50">Refresco ($1.50)</option>\n</select>\n<input type="number" id="pago" placeholder="Pago" step="0.1">\n<button id="comprar">Comprar</button>\n<p id="resultado"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("comprar").addEventListener("click", () => {\n  const precio = parseFloat(document.getElementById("producto").value);\n  const pago = parseFloat(document.getElementById("pago").value);\n  if (pago >= precio) {\n    const cambio = pago - precio;\n    document.getElementById("resultado").textContent = `Compra exitosa. Cambio: $${cambio.toFixed(2)}`;\n  } else {\n    document.getElementById("resultado").textContent = "Pago insuficiente.";\n  }\n});' }
    ]
  },
  {
    id: 'ch433',
    title: 'Animación de rebote de íconos flotantes',
    level: 'Básico',
    description: 'Una serie de emojis o íconos que rebotan suavemente hacia arriba y abajo de forma desincronizada.',
    instructions: [
      'En <strong>index.html</strong>, varios span con emojis.',
      'En <strong>styles.css</strong>, animación bounce con diferentes duraciones y delays usando nth-child.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="flotadores">\n  <span>🎈</span> <span>🏀</span> <span>⚽</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.flotadores span { display: inline-block; animation: flotar 2s ease-in-out infinite; }\n.flotadores span:nth-child(1) { animation-duration: 1.8s; }\n.flotadores span:nth-child(2) { animation-duration: 2.2s; }\n.flotadores span:nth-child(3) { animation-duration: 2.5s; }\n@keyframes flotar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }' }
    ]
  },
  {
    id: 'ch434',
    title: 'Transformar texto: mayúsculas, minúsculas, capitalizar',
    level: 'Básico',
    description: 'Un textarea y botones que convierten el texto a mayúsculas, minúsculas o capitalizado (primera letra de cada palabra en mayúscula).',
    instructions: [
      'En <strong>index.html</strong>, textarea y tres botones.',
      'En <strong>script.js</strong>, usa .toUpperCase(), .toLowerCase() y un reemplazo regex para capitalizar.',
      'Muestra el resultado en el propio textarea o en otro div.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<textarea id="texto" rows="4" cols="50"></textarea><br>\n<button id="mayus">MAYÚSCULAS</button>\n<button id="minus">minúsculas</button>\n<button id="capitalizar">Capitalizar</button>' },
      { name: 'script.js', lang: 'js', content: 'const area = document.getElementById("texto");\ndocument.getElementById("mayus").addEventListener("click", () => area.value = area.value.toUpperCase());\ndocument.getElementById("minus").addEventListener("click", () => area.value = area.value.toLowerCase());\ndocument.getElementById("capitalizar").addEventListener("click", () => area.value = area.value.replace(/\\b\\w/g, c => c.toUpperCase()));' }
    ]
  },
  {
    id: 'ch435',
    title: 'Campo de contraseña con medidor de coincidencia',
    level: 'Básico',
    description: 'Dos campos de contraseña que al escribir muestran si coinciden o no con un mensaje y color.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs password y un span de mensaje.',
      'En <strong>script.js</strong>, al input en cualquiera, compara los valores.',
      'En <strong>styles.css</strong>, clase "coincide" en verde, "no-coincide" en rojo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="password" id="pass1" placeholder="Contraseña">\n<input type="password" id="pass2" placeholder="Confirmar">\n<span id="mensaje"></span>' },
      { name: 'script.js', lang: 'js', content: 'const p1 = document.getElementById("pass1"), p2 = document.getElementById("pass2"), msg = document.getElementById("mensaje");\nfunction validar() {\n  if (p2.value) {\n    if (p1.value === p2.value) { msg.textContent = "Coinciden"; msg.className = "coincide"; }\n    else { msg.textContent = "No coinciden"; msg.className = "no-coincide"; }\n  } else { msg.textContent = ""; }\n}\np1.addEventListener("input", validar);\np2.addEventListener("input", validar);' },
      { name: 'styles.css', lang: 'css', content: '.coincide { color: green; }\n.no-coincide { color: red; }' }
    ]
  },
  {
    id: 'ch436',
    title: 'Contador de visitas totales (simulado)',
    level: 'Básico',
    description: 'Muestra un número que incrementa cada vez que se carga la página (usando localStorage).',
    instructions: [
      'En <strong>index.html</strong>, un span.',
      'En <strong>script.js</strong>, lee un valor anterior de localStorage, lo incrementa y lo muestra.',
      'Guarda el nuevo valor.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<p>Visitas totales: <span id="visitas">0</span></p>' },
      { name: 'script.js', lang: 'js', content: 'let count = parseInt(localStorage.getItem("totalVisitas")) || 0;\ncount++;\nlocalStorage.setItem("totalVisitas", count);\ndocument.getElementById("visitas").textContent = count;' }
    ]
  },
  {
    id: 'ch437',
    title: 'Gráfico de pastel con segmentos separados (exploded pie)',
    level: 'Intermedio',
    description: 'Dibuja un gráfico de pastel con un segmento ligeramente separado del centro.',
    instructions: [
      'En <strong>index.html</strong>, un canvas.',
      'En <strong>script.js</strong>, dibuja sectores usando ctx.arc y un pequeño desplazamiento en el sector destacado.',
      'Calcula el centro del sector desplazado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="pieExploded" width="200" height="200"></canvas>' },
      { name: 'script.js', lang: 'js', content: 'const ctx = document.getElementById("pieExploded").getContext("2d");\nconst datos = [40, 20, 25, 15];\nconst colores = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];\nlet anguloInicial = 0;\ndatos.forEach((d, i) => {\n  const angulo = (d / 100) * Math.PI * 2;\n  const medio = anguloInicial + angulo / 2;\n  const cx = 100, cy = 100, radio = 70;\n  let offsetX = 0, offsetY = 0;\n  if (i === 2) { offsetX = Math.cos(medio) * 10; offsetY = Math.sin(medio) * 10; }\n  ctx.beginPath();\n  ctx.moveTo(cx + offsetX, cy + offsetY);\n  ctx.arc(cx + offsetX, cy + offsetY, radio, anguloInicial, anguloInicial + angulo);\n  ctx.closePath();\n  ctx.fillStyle = colores[i];\n  ctx.fill();\n  anguloInicial += angulo;\n});' }
    ]
  },
  {
    id: 'ch438',
    title: 'Slider de precios con dos manijas (rango)',
    level: 'Avanzado',
    description: 'Dos inputs range superpuestos para seleccionar un rango de precios (mínimo y máximo).',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con dos inputs range.',
      'En <strong>script.js</strong>, sincroniza los valores y muestra el rango actual.',
      'En <strong>styles.css</strong>, superpón los inputs con position absolute.',
      'Puedes usar un solo elemento div personalizado con dos thumb, pero con dos inputs es más sencillo.',
      'Controla que el mínimo no supere al máximo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="rango-doble">\n  <input type="range" id="minRange" min="0" max="100" value="20">\n  <input type="range" id="maxRange" min="0" max="100" value="80">\n  <p>Rango: $<span id="minVal">20</span> - $<span id="maxVal">80</span></p>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const minRange = document.getElementById("minRange");\nconst maxRange = document.getElementById("maxRange");\nminRange.addEventListener("input", () => {\n  if (parseInt(minRange.value) > parseInt(maxRange.value)) maxRange.value = minRange.value;\n  document.getElementById("minVal").textContent = minRange.value;\n  document.getElementById("maxVal").textContent = maxRange.value;\n});\nmaxRange.addEventListener("input", () => {\n  if (parseInt(maxRange.value) < parseInt(minRange.value)) minRange.value = maxRange.value;\n  document.getElementById("minVal").textContent = minRange.value;\n  document.getElementById("maxVal").textContent = maxRange.value;\n});' }
    ]
  },
  {
    id: 'ch439',
    title: 'Botón "Cerrar sesión" con confirmación',
    level: 'Básico',
    description: 'Un botón de salir que pregunta con un confirm() y simula un logout.',
    instructions: [
      'En <strong>index.html</strong>, botón "Cerrar sesión".',
      'En <strong>script.js</strong>, muestra confirm y si acepta, redirige (o muestra mensaje).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="logout">Cerrar sesión</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("logout").addEventListener("click", () => {\n  if (confirm("¿Estás seguro de cerrar sesión?")) {\n    alert("Sesión cerrada.");\n    // window.location.href = ...\n  }\n});' }
    ]
  },
  {
    id: 'ch440',
    title: 'Generador de números aleatorios con historial',
    level: 'Básico',
    description: 'Cada clic genera un número aleatorio y lo añade a una lista que muestra los últimos 10 generados.',
    instructions: [
      'En <strong>index.html</strong>, botón generar y una lista debajo.',
      'En <strong>script.js</strong>, al hacer clic, genera un número random, lo añade a un array y actualiza la lista (max 10 ítems).',
      'En <strong>styles.css</strong>, simple.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="generar">Generar número</button>\n<ul id="historial"></ul>' },
      { name: 'script.js', lang: 'js', content: 'const lista = document.getElementById("historial");\nlet numeros = [];\ndocument.getElementById("generar").addEventListener("click", () => {\n  numeros.unshift(Math.floor(Math.random() * 1000));\n  if (numeros.length > 10) numeros.pop();\n  lista.innerHTML = numeros.map(n => `<li>${n}</li>`).join("");\n});' }
    ]
  },
  {
    id: 'ch441',
    title: 'Animación de carga con tipo pulso (pulse loader)',
    level: 'Básico',
    description: 'Varios círculos que pulsan secuencialmente como indicador de carga.',
    instructions: [
      'En <strong>index.html</strong>, tres spans con clase "pulse-dot".',
      'En <strong>styles.css</strong>, animación de escala con retraso incremental.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="pulse-loader">\n  <span class="pulse-dot"></span>\n  <span class="pulse-dot"></span>\n  <span class="pulse-dot"></span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.pulse-dot { display: inline-block; width: 15px; height: 15px; border-radius: 50%; background: #2d6a4f; margin: 5px; animation: pulse-dot 1.2s ease-in-out infinite; }\n.pulse-dot:nth-child(2) { animation-delay: 0.2s; }\n.pulse-dot:nth-child(3) { animation-delay: 0.4s; }\n@keyframes pulse-dot { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } }' }
    ]
  },
  {
    id: 'ch442',
    title: 'Transiciones entre páginas simuladas (single page)',
    level: 'Intermedio',
    description: 'Varias "páginas" (divs) que se alternan con un efecto de fade al hacer clic en enlaces del menú.',
    instructions: [
      'En <strong>index.html</strong>, un nav y varios sections con clase "pagina", solo una visible.',
      'En <strong>script.js</strong>, al hacer clic en un enlace, añade clase "activa" a la sección correspondiente con una transición de opacidad.',
      'En <strong>styles.css</strong>, las páginas position absolute, transición opacity.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<nav>\n  <a href="#pagina1" class="nav-link">Inicio</a>\n  <a href="#pagina2" class="nav-link">Servicios</a>\n</nav>\n<div id="pagina1" class="pagina activa"><h2>Inicio</h2></div>\n<div id="pagina2" class="pagina"><h2>Servicios</h2></div>' },
      { name: 'styles.css', lang: 'css', content: '.pagina { position: absolute; opacity: 0; transition: opacity 0.5s; pointer-events: none; }\n.pagina.activa { opacity: 1; pointer-events: auto; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".nav-link").forEach(link => {\n  link.addEventListener("click", e => {\n    e.preventDefault();\n    document.querySelectorAll(".pagina").forEach(p => p.classList.remove("activa"));\n    document.querySelector(link.getAttribute("href")).classList.add("activa");\n  });\n});' }
    ]
  },
  {
    id: 'ch443',
    title: 'Página de error 503 con diseño creativo',
    level: 'Básico',
    description: 'Diseña una página de "Servicio no disponible" estilizada con CSS, un mensaje y un botón para reintentar.',
    instructions: [
      'En <strong>index.html</strong>, un div centrado con el código 503 y un botón.',
      'En <strong>styles.css</strong>, fondo oscuro, fuente grande, animación sutil.',
      'Botón recarga la página.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="error-503">\n  <h1>503</h1>\n  <p>Servicio no disponible</p>\n  <button onclick="location.reload()">Reintentar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.error-503 { text-align: center; margin-top: 100px; color: #ccc; }\nh1 { font-size: 5rem; color: #e74c3c; }' }
    ]
  },
  {
    id: 'ch444',
    title: 'Efecto de desenfoque al hacer scroll (progressive blur)',
    level: 'Intermedio',
    description: 'Un div fijo que se vuelve borroso según el scroll de la página.',
    instructions: [
      'En <strong>index.html</strong>, un div sticky/fixed y contenido debajo.',
      'En <strong>script.js</strong>, al hacer scroll, aplica un filtro blur basado en el scrollY.',
      'En <strong>styles.css</strong>, transición suave en el filtro.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="blur-on-scroll" id="blurDiv">Contenido que se desenfoca</div>\n<div style="height:2000px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '.blur-on-scroll { position: sticky; top: 20px; transition: filter 0.2s; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  const blurValue = Math.min(window.scrollY / 100, 10);\n  document.getElementById("blurDiv").style.filter = `blur(${blurValue}px)`;\n});' }
    ]
  },
  {
    id: 'ch445',
    title: 'Lista de elementos con ordenación alfabética',
    level: 'Básico',
    description: 'Una lista que se puede ordenar ascendente o descendentemente al hacer clic en un botón.',
    instructions: [
      'En <strong>index.html</strong>, una ul con varios li y un botón "Ordenar A-Z".',
      'En <strong>script.js</strong>, recoge los textos, los ordena y reinserta.',
      'Alterna entre A-Z y Z-A.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<ul id="listaOrden">\n  <li>Perro</li><li>Árbol</li><li>Casa</li><li>Barco</li>\n</ul>\n<button id="ordenar">Ordenar A-Z</button>' },
      { name: 'script.js', lang: 'js', content: 'let ascendente = true;\ndocument.getElementById("ordenar").addEventListener("click", function() {\n  const lista = document.getElementById("listaOrden");\n  const items = [...lista.querySelectorAll("li")];\n  items.sort((a, b) => ascendente ? a.textContent.localeCompare(b.textContent) : b.textContent.localeCompare(a.textContent));\n  lista.innerHTML = "";\n  items.forEach(item => lista.appendChild(item));\n  ascendente = !ascendente;\n  this.textContent = ascendente ? "Ordenar A-Z" : "Ordenar Z-A";\n});' }
    ]
  },
  {
    id: 'ch446',
    title: 'Efecto de máquina de escribir con bucle de palabras',
    level: 'Intermedio',
    description: 'Un texto que se escribe, se borra y luego escribe otra palabra, en un bucle infinito.',
    instructions: [
      'En <strong>index.html</strong>, un span vacío.',
      'En <strong>script.js</strong>, array de palabras, alterna entre escribir y borrar usando setTimeouts recursivos o setInterval con estado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<span id="typewriter"></span>' },
      { name: 'script.js', lang: 'js', content: 'const palabras = ["creativo", "moderno", "dinámico"];\nlet i = 0, j = 0, borrando = false;\nconst span = document.getElementById("typewriter");\nfunction tick() {\n  const actual = palabras[i];\n  if (!borrando) {\n    span.textContent = actual.substring(0, j + 1);\n    j++;\n    if (j === actual.length) { borrando = true; setTimeout(tick, 1500); return; }\n  } else {\n    span.textContent = actual.substring(0, j - 1);\n    j--;\n    if (j === 0) { borrando = false; i = (i + 1) % palabras.length; }\n  }\n  setTimeout(tick, borrando ? 50 : 150);\n}\ntick();' }
    ]
  },
  {
    id: 'ch447',
    title: 'Simulador de dado de rol (D20, D12, etc.)',
    level: 'Básico',
    description: 'Botones para tirar diferentes dados de rol (D4, D6, D8, D10, D12, D20) y mostrar el resultado.',
    instructions: [
      'En <strong>index.html</strong>, botones con el nombre del dado y un span de resultado.',
      'En <strong>script.js</strong>, al hacer clic, genera número aleatorio según las caras y lo muestra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button class="dado" data-caras="4">D4</button>\n<button class="dado" data-caras="6">D6</button>\n<button class="dado" data-caras="20">D20</button>\n<p>Resultado: <span id="resultadoDado"></span></p>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".dado").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const caras = parseInt(btn.dataset.caras);\n    const tirada = Math.ceil(Math.random() * caras);\n    document.getElementById("resultadoDado").textContent = tirada;\n  });\n});' }
    ]
  },
  {
    id: 'ch448',
    title: 'Login con validación de campos y foco automático',
    level: 'Básico',
    description: 'Formulario de inicio de sesión que al cargar enfoca el primer campo, y si algún campo está vacío muestra un borde rojo.',
    instructions: [
      'En <strong>index.html</strong>, dos inputs y un botón.',
      'En <strong>script.js</strong>, autofocus en el primer input. Al enviar, valida que no estén vacíos y marca borde rojo si es necesario.',
      'En <strong>styles.css</strong>, clase .error con border red.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="login">\n  <input type="text" id="usuario" placeholder="Usuario" autofocus>\n  <input type="password" id="pass" placeholder="Contraseña">\n  <button type="submit">Iniciar sesión</button>\n</form>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("login").addEventListener("submit", function(e) {\n  e.preventDefault();\n  let ok = true;\n  const u = document.getElementById("usuario"), p = document.getElementById("pass");\n  [u, p].forEach(campo => {\n    if (!campo.value.trim()) { campo.classList.add("error"); ok = false; }\n    else campo.classList.remove("error");\n  });\n  if (ok) alert("Inicio de sesión simulado");\n});' },
      { name: 'styles.css', lang: 'css', content: '.error { border-color: red; }' }
    ]
  },
  {
    id: 'ch449',
    title: 'Vista de galería con efecto de filtro de color al hacer clic',
    level: 'Intermedio',
    description: 'Una galería de imágenes y botones de filtro (sepia, grises, invertir) que aplican un filtro CSS a todas las imágenes.',
    instructions: [
      'En <strong>index.html</strong>, varias imágenes y botones de filtro.',
      'En <strong>script.js</strong>, al hacer clic, cambia el estilo filter de las imágenes.',
      'En <strong>styles.css</strong>, galería en grid.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button data-filter="none">Normal</button>\n<button data-filter="sepia(100%)">Sepia</button>\n<button data-filter="grayscale(100%)">Grises</button>\n<div class="galeria-filter">\n  <img src="https://via.placeholder.com/100/FF0000">\n  <img src="https://via.placeholder.com/100/00FF00">\n</div>' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll("[data-filter]").forEach(btn => {\n  btn.addEventListener("click", () => {\n    document.querySelectorAll(".galeria-filter img").forEach(img => img.style.filter = btn.dataset.filter);\n  });\n});' }
    ]
  },
  {
    id: 'ch450',
    title: 'Acordeón de imágenes con altura flexible',
    level: 'Intermedio',
    description: 'Una columna de imágenes donde al hacer clic en una se expande a altura completa y las demás se ajustan.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor flex columna con divs de imagen.',
      'En <strong>script.js</strong>, al hacer clic, asigna flex-grow grande y reduce las otras.',
      'En <strong>styles.css</strong>, transiciones de flex.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="accordion-img-col">\n  <div class="acc-img"><img src="https://via.placeholder.com/200x100/FF0000"></div>\n  <div class="acc-img"><img src="https://via.placeholder.com/200x100/00FF00"></div>\n  <div class="acc-img"><img src="https://via.placeholder.com/200x100/0000FF"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.accordion-img-col { display: flex; flex-direction: column; height: 300px; width: 200px; }\n.acc-img { flex: 1; overflow: hidden; transition: flex 0.3s; cursor: pointer; }\n.acc-img img { width: 100%; height: 100%; object-fit: cover; }\n.acc-img.expandida { flex: 5; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".acc-img").forEach(el => {\n  el.addEventListener("click", function() {\n    document.querySelectorAll(".acc-img").forEach(e => e.classList.remove("expandida"));\n    this.classList.add("expandida");\n  });\n});' }
    ]
  },
    {
    id: 'ch451',
    title: 'Tarjeta de usuario con hover animado',
    level: 'Básico',
    description: 'Diseña una tarjeta de perfil que al pasar el ratón muestre una capa con información extra y un botón.',
    instructions: [
      'En <strong>index.html</strong>, crea un div con imagen, nombre y un div overlay para el texto extra.',
      'En <strong>styles.css</strong>, posiciona el overlay sobre la imagen, oculto por defecto, y al hover desliza hacia arriba con opacidad.',
      'No requiere JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="card-user">\n  <img src="https://via.placeholder.com/200">\n  <div class="user-info">\n    <h3>Maria López</h3>\n    <div class="overlay">\n      <p>Diseñadora UX</p>\n      <button>Contactar</button>\n    </div>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.card-user { position: relative; width: 200px; overflow: hidden; }\n.card-user img { display: block; width: 100%; }\n.user-info { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); color: white; padding: 10px; transform: translateY(100%); transition: transform 0.3s; }\n.card-user:hover .user-info { transform: translateY(0); }' }
    ]
  },
  {
    id: 'ch452',
    title: 'Búsqueda en tiempo real con resaltado',
    level: 'Intermedio',
    description: 'Un campo de búsqueda que resalta en amarillo las coincidencias dentro de un texto largo.',
    instructions: [
      'En <strong>index.html</strong>, un input y un párrafo con bastante texto.',
      'En <strong>script.js</strong>, usa una expresión regular para envolver las coincidencias en un <code>&lt;span class="highlight"&gt;</code>.',
      'En <strong>styles.css</strong>, define el fondo amarillo para .highlight.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscador" placeholder="Buscar palabra...">\n<p id="texto">JavaScript es un lenguaje de programación muy utilizado en desarrollo web. Es versátil y potente.</p>' },
      { name: 'styles.css', lang: 'css', content: '.highlight { background: yellow; }' },
      { name: 'script.js', lang: 'js', content: 'const original = document.getElementById("texto").innerHTML;\ndocument.getElementById("buscador").addEventListener("input", function() {\n  const term = this.value.trim();\n  const p = document.getElementById("texto");\n  if (!term) { p.innerHTML = original; return; }\n  const regex = new RegExp(`(${term})`, "gi");\n  p.innerHTML = original.replace(regex, \'<span class="highlight">$1</span>\');\n});' }
    ]
  },
  {
    id: 'ch453',
    title: 'Pomodoro Timer',
    level: 'Intermedio',
    description: 'Implementa un temporizador Pomodoro (25 min trabajo, 5 min descanso) con botones para iniciar, pausar y reiniciar.',
    instructions: [
      'En <strong>index.html</strong>, un display de minutos:segundos, botones iniciar/pausar y reiniciar.',
      'En <strong>script.js</strong>, controla el ciclo de trabajo y descanso, alternando automáticamente.',
      'En <strong>styles.css</strong>, diseño limpio y centrado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="pomodoro">\n  <div id="timer">25:00</div>\n  <button id="iniciar">Iniciar</button>\n  <button id="pausar">Pausar</button>\n  <button id="reiniciar">Reiniciar</button>\n  <p id="estado">Trabajo</p>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.pomodoro { text-align: center; font-family: sans-serif; }\n#timer { font-size: 3rem; margin: 20px; }' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 25 * 60;\nlet intervalo;\nlet activo = false;\nlet modoTrabajo = true;\nconst timer = document.getElementById("timer");\nconst estado = document.getElementById("estado");\nfunction actualizarDisplay() {\n  const min = String(Math.floor(tiempo / 60)).padStart(2, "0");\n  const seg = String(tiempo % 60).padStart(2, "0");\n  timer.textContent = min + ":" + seg;\n  estado.textContent = modoTrabajo ? "Trabajo" : "Descanso";\n}\nfunction finCiclo() {\n  clearInterval(intervalo);\n  activo = false;\n  if (modoTrabajo) {\n    tiempo = 5 * 60;\n    modoTrabajo = false;\n  } else {\n    tiempo = 25 * 60;\n    modoTrabajo = true;\n  }\n  actualizarDisplay();\n}\ndocument.getElementById("iniciar").addEventListener("click", () => {\n  if (activo) return;\n  activo = true;\n  intervalo = setInterval(() => {\n    tiempo--;\n    actualizarDisplay();\n    if (tiempo <= 0) finCiclo();\n  }, 1000);\n});\ndocument.getElementById("pausar").addEventListener("click", () => {\n  clearInterval(intervalo);\n  activo = false;\n});\ndocument.getElementById("reiniciar").addEventListener("click", () => {\n  clearInterval(intervalo);\n  activo = false;\n  tiempo = 25 * 60;\n  modoTrabajo = true;\n  actualizarDisplay();\n});\nactualizarDisplay();' }
    ]
  },
  {
    id: 'ch454',
    title: 'Slideshow de fondo con transición de opacidad',
    level: 'Intermedio',
    description: 'Cambia la imagen de fondo de un div cada 4 segundos con un suave fundido.',
    instructions: [
      'En <strong>index.html</strong>, un div con clase "bg-slideshow".',
      'En <strong>script.js</strong>, array de URLs, y con setInterval alterna la opacidad entre dos capas.',
      'En <strong>styles.css</strong>, dos divs absolutos, uno con la imagen activa.',
      'Al cargar, inicia la secuencia.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="bg-slideshow" id="bgSlide">\n  <div class="bg-layer activa" id="layer1"></div>\n  <div class="bg-layer" id="layer2"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.bg-slideshow { position: relative; height: 300px; }\n.bg-layer { position: absolute; top:0; left:0; width:100%; height:100%; background-size: cover; opacity: 0; transition: opacity 1s; }\n.bg-layer.activa { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'const imagenes = ["https://via.placeholder.com/800x300/FF0000", "https://via.placeholder.com/800x300/00FF00", "https://via.placeholder.com/800x300/0000FF"];\nlet indice = 0;\nlet capaActiva = 1;\nconst layer1 = document.getElementById("layer1");\nconst layer2 = document.getElementById("layer2");\nlayer1.style.backgroundImage = `url(${imagenes[0]})`;\nfunction cambiar() {\n  indice = (indice + 1) % imagenes.length;\n  if (capaActiva === 1) {\n    layer2.style.backgroundImage = `url(${imagenes[indice]})`;\n    layer2.classList.add("activa");\n    layer1.classList.remove("activa");\n    capaActiva = 2;\n  } else {\n    layer1.style.backgroundImage = `url(${imagenes[indice]})`;\n    layer1.classList.add("activa");\n    layer2.classList.remove("activa");\n    capaActiva = 1;\n  }\n}\nsetInterval(cambiar, 4000);' }
    ]
  },
  {
    id: 'ch455',
    title: 'Texto con efecto de neón parpadeante',
    level: 'Básico',
    description: 'Un letrero de neón que parpadea como si tuviera un fallo eléctrico.',
    instructions: [
      'En <strong>index.html</strong>, un h1 con clase "neon-flicker".',
      'En <strong>styles.css</strong>, usa text-shadow para el neón y una animación con keyframes que ocasionalmente apague el brillo.',
      'Agrega un pequeño retraso aleatorio (con diferentes duraciones).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<h1 class="neon-flicker">ABIERTO</h1>' },
      { name: 'styles.css', lang: 'css', content: '.neon-flicker {\n  color: #fff;\n  text-shadow: 0 0 5px #0fa, 0 0 10px #0fa, 0 0 20px #0fa, 0 0 40px #0fa;\n  animation: parpadeo 2s infinite;\n}\n@keyframes parpadeo {\n  0%, 100% { opacity: 1; }\n  2%, 4% { opacity: 0.3; }\n  6%, 8% { opacity: 1; }\n  50% { opacity: 1; }\n  52%, 54% { opacity: 0.2; }\n  56% { opacity: 1; }\n}' }
    ]
  },
  {
    id: 'ch456',
    title: 'Caja de colores RGB con sliders',
    level: 'Básico',
    description: 'Tres controles deslizantes para rojo, verde y azul, y un div que muestra el color resultante.',
    instructions: [
      'En <strong>index.html</strong>, inputs range con id R, G, B y un div con id "muestra".',
      'En <strong>script.js</strong>, actualizar el fondo del div con rgb(r,g,b) al mover cualquier slider.',
      'Muestra el valor numérico al lado de cada slider.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<label>R: <input type="range" id="r" min="0" max="255" value="45"><span id="rVal">45</span></label><br>\n<label>G: <input type="range" id="g" min="0" max="255" value="106"><span id="gVal">106</span></label><br>\n<label>B: <input type="range" id="b" min="0" max="255" value="79"><span id="bVal">79</span></label><br>\n<div id="muestra" style="width:100px;height:100px;background:rgb(45,106,79);"></div>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const r = document.getElementById("r").value;\n  const g = document.getElementById("g").value;\n  const b = document.getElementById("b").value;\n  document.getElementById("rVal").textContent = r;\n  document.getElementById("gVal").textContent = g;\n  document.getElementById("bVal").textContent = b;\n  document.getElementById("muestra").style.background = `rgb(${r},${g},${b})`;\n}\ndocument.querySelectorAll("input[type=range]").forEach(inp => inp.addEventListener("input", actualizar));' }
    ]
  },
  {
    id: 'ch457',
    title: 'Reloj digital con segundos y fecha',
    level: 'Básico',
    description: 'Muestra la hora actual (HH:MM:SS) y debajo la fecha completa.',
    instructions: [
      'En <strong>index.html</strong>, dos divs.',
      'En <strong>script.js</strong>, setInterval que actualiza cada segundo, usando <code>Date.toLocaleTimeString</code> y <code>toLocaleDateString</code>.',
      'En <strong>styles.css</strong>, fuente grande y centrada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="hora" style="font-size:3rem;"></div>\n<div id="fecha"></div>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const ahora = new Date();\n  document.getElementById("hora").textContent = ahora.toLocaleTimeString("es-ES");\n  document.getElementById("fecha").textContent = ahora.toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" });\n}\nsetInterval(actualizar, 1000);\nactualizar();' }
    ]
  },
  {
    id: 'ch458',
    title: 'Desplegable accesible con teclado',
    level: 'Intermedio',
    description: 'Un menú desplegable que se activa con Enter/Space y se navega con flechas.',
    instructions: [
      'En <strong>index.html</strong>, un botón que abre un ul, los items son enfocables.',
      'En <strong>script.js</strong>, maneja keydown para abrir/cerrar y mover el foco con ArrowDown/ArrowUp.',
      'Al perder el foco, se cierra.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="dropdown-acc">\n  <button id="btnDropdown">Seleccionar ▼</button>\n  <ul id="listaDropdown" role="listbox" hidden>\n    <li role="option" tabindex="-1">Opción 1</li>\n    <li role="option" tabindex="-1">Opción 2</li>\n    <li role="option" tabindex="-1">Opción 3</li>\n  </ul>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("btnDropdown");\nconst lista = document.getElementById("listaDropdown");\nconst items = [...lista.querySelectorAll("li")];\nbtn.addEventListener("click", () => alternar());\nbtn.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); alternar(); } });\nfunction alternar() {\n  const abierto = !lista.hidden;\n  lista.hidden = abierto;\n  if (!abierto) items[0]?.focus();\n}\nlista.addEventListener("keydown", e => {\n  const idx = items.indexOf(document.activeElement);\n  if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }\n  else if (e.key === "ArrowUp") { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }\n  else if (e.key === "Escape") { lista.hidden = true; btn.focus(); }\n});\ndocument.addEventListener("click", e => { if (!e.target.closest(".dropdown-acc")) lista.hidden = true; });' }
    ]
  },
  {
    id: 'ch459',
    title: 'Canvas con firma (guardar en localStorage)',
    level: 'Intermedio',
    description: 'Permite dibujar una firma en canvas y guardarla en localStorage para mostrarla al recargar.',
    instructions: [
      'En <strong>index.html</strong>, un canvas y botones "Limpiar", "Guardar".',
      'En <strong>script.js</strong>, al dibujar, cuando se suelta el ratón, convierte a dataURL y guarda en localStorage.',
      'Al cargar, si hay firma guardada, la dibuja en el canvas.',
      'Usa eventos de ratón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="firmaCanvas" width="400" height="200" style="border:1px solid black;"></canvas>\n<button id="limpiar">Limpiar</button>\n<button id="guardar">Guardar</button>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("firmaCanvas");\nconst ctx = canvas.getContext("2d");\nlet dibujando = false;\ncanvas.addEventListener("mousedown", e => { dibujando = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); });\ncanvas.addEventListener("mousemove", e => { if (dibujando) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });\ncanvas.addEventListener("mouseup", () => { dibujando = false; });\ndocument.getElementById("limpiar").addEventListener("click", () => ctx.clearRect(0,0,canvas.width,canvas.height));\ndocument.getElementById("guardar").addEventListener("click", () => {\n  const data = canvas.toDataURL();\n  localStorage.setItem("firma", data);\n  alert("Firma guardada");\n});\nconst guardada = localStorage.getItem("firma");\nif (guardada) {\n  const img = new Image();\n  img.onload = () => ctx.drawImage(img, 0, 0);\n  img.src = guardada;\n}' }
    ]
  },
  {
    id: 'ch460',
    title: 'Efecto de rotación al hacer clic con perspectiva',
    level: 'Básico',
    description: 'Un div que al hacer clic gira 180 grados en el eje Y y vuelve a su posición original al siguiente clic.',
    instructions: [
      'En <strong>index.html</strong>, un div con la clase "rotate-perspective".',
      'En <strong>script.js</strong>, toggle de clase "girado" que aplica transform rotateY(180deg).',
      'En <strong>styles.css</strong>, transición con perspectiva.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="rotate-perspective" id="rotador"></div>' },
      { name: 'styles.css', lang: 'css', content: '.rotate-perspective { width: 200px; height: 150px; background: #2d6a4f; color: white; display: flex; align-items: center; justify-content: center; transition: transform 0.8s; transform-style: preserve-3d; }\n.rotate-perspective.girado { transform: rotateY(180deg); }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("rotador").addEventListener("click", function() {\n  this.classList.toggle("girado");\n});' }
    ]
  },
  {
    id: 'ch461',
    title: 'Generador de colores aleatorios con copia',
    level: 'Básico',
    description: 'Muestra un color aleatorio en un div, su código hexadecimal y un botón para copiarlo.',
    instructions: [
      'En <strong>index.html</strong>, un div de muestra, un span con el código, botón "Nuevo color" y "Copiar".',
      'En <strong>script.js</strong>, genera un hexadecimal aleatorio, lo asigna al div y actualiza el span.',
      'Copiar usa navigator.clipboard.writeText.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="nuevoColor">Nuevo color</button>\n<div id="colorBox" style="width:150px;height:100px;margin:10px;background:#2d6a4f;"></div>\n<p>Código: <span id="hex">#2d6a4f</span> <button id="copiar">Copiar</button></p>' },
      { name: 'script.js', lang: 'js', content: 'function generarHex() {\n  const hex = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");\n  document.getElementById("colorBox").style.background = hex;\n  document.getElementById("hex").textContent = hex;\n}\ndocument.getElementById("nuevoColor").addEventListener("click", generarHex);\ndocument.getElementById("copiar").addEventListener("click", () => {\n  navigator.clipboard.writeText(document.getElementById("hex").textContent);\n  alert("Color copiado");\n});\ngenerarHex();' }
    ]
  },
  {
    id: 'ch462',
    title: 'Panel de pestañas con animación de deslizamiento',
    level: 'Intermedio',
    description: 'Las pestañas muestran su contenido desplazándose lateralmente dentro de un contenedor.',
    instructions: [
      'En <strong>index.html</strong>, botones pestaña y un contenedor con un div ancho que contiene paneles.',
      'En <strong>script.js</strong>, al hacer clic en una pestaña, mueve el div interno con translateX.',
      'En <strong>styles.css</strong>, overflow hidden en el contenedor y transición en el interno.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="tabs-slide">\n  <button class="tab-btn" data-tab="0">Tab 1</button>\n  <button class="tab-btn" data-tab="1">Tab 2</button>\n  <button class="tab-btn" data-tab="2">Tab 3</button>\n  <div class="tabs-track" id="track">\n    <div class="tab-panel">Contenido 1</div>\n    <div class="tab-panel">Contenido 2</div>\n    <div class="tab-panel">Contenido 3</div>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tabs-slide { width: 300px; overflow: hidden; }\n.tabs-track { display: flex; transition: transform 0.3s; }\n.tab-panel { min-width: 300px; padding: 20px; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelectorAll(".tab-btn").forEach(btn => {\n  btn.addEventListener("click", () => {\n    const idx = parseInt(btn.dataset.tab);\n    document.getElementById("track").style.transform = `translateX(-${idx * 300}px)`;\n  });\n});' }
    ]
  },
  {
    id: 'ch463',
    title: 'Barra de navegación que se encoge al hacer scroll',
    level: 'Intermedio',
    description: 'Un header fijo que reduce su tamaño y cambia a un logo más pequeño tras hacer scroll.',
    instructions: [
      'En <strong>index.html</strong>, un header con título y nav. Contenido debajo.',
      'En <strong>script.js</strong>, al hacer scroll > 100, añade clase "shrink" que cambia padding y font-size.',
      'En <strong>styles.css</strong>, transición suave.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<header id="header">\n  <h1 id="logo">SMS Studios</h1>\n  <nav><a href="#">Inicio</a> <a href="#">Servicios</a></nav>\n</header>\n<div style="height:2000px;"></div>' },
      { name: 'styles.css', lang: 'css', content: '#header { position: fixed; top:0; width:100%; background: #2d6a4f; color: white; padding: 20px; transition: padding 0.3s; }\n#logo { transition: font-size 0.3s; }\n#header.shrink { padding: 10px; }\n#header.shrink #logo { font-size: 1.2rem; }' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  document.getElementById("header").classList.toggle("shrink", window.scrollY > 100);\n});' }
    ]
  },
  {
    id: 'ch464',
    title: 'Gráfico de barras apiladas al 100%',
    level: 'Intermedio',
    description: 'Muestra la proporción de dos categorías en varias barras, todas al 100% de altura.',
    instructions: [
      'En <strong>index.html</strong>, un canvas o divs. Con divs es más simple: cada barra tiene dos segmentos coloreados cuyas alturas suman el alto fijo.',
      'En <strong>styles.css</strong>, contenedor con altura fija, segmentos con altura porcentual.',
      'Los datos pueden ser estáticos.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="stacked-100">\n  <div class="barra"><div class="segA" style="height:60%"></div><div class="segB" style="height:40%"></div></div>\n  <div class="barra"><div class="segA" style="height:30%"></div><div class="segB" style="height:70%"></div></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.stacked-100 { display: flex; align-items: flex-end; gap: 20px; height: 200px; }\n.barra { width: 60px; height: 100%; display: flex; flex-direction: column-reverse; }\n.segA { background: #2d6a4f; }\n.segB { background: #d4af37; }' }
    ]
  },
  {
    id: 'ch465',
    title: 'Simulador de dado con animación',
    level: 'Básico',
    description: 'Al hacer clic en "Tirar dado", el dado (emoji) cambia rápidamente varias veces antes de mostrar el resultado final.',
    instructions: [
      'En <strong>index.html</strong>, un div para el dado y botón tirar.',
      'En <strong>script.js</strong>, al hacer clic, inicia un intervalo que cambia el emoji rápidamente 10 veces, y luego muestra el resultado final aleatorio.',
      'En <strong>styles.css</strong>, dado grande.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="dado" style="font-size:4rem;">🎲</div>\n<button id="tirar">Tirar dado</button>' },
      { name: 'script.js', lang: 'js', content: 'const caras = ["⚀","⚁","⚂","⚃","⚄","⚅"];\ndocument.getElementById("tirar").addEventListener("click", function() {\n  this.disabled = true;\n  let cont = 0;\n  const interval = setInterval(() => {\n    document.getElementById("dado").textContent = caras[Math.floor(Math.random() * 6)];\n    cont++;\n    if (cont >= 10) {\n      clearInterval(interval);\n      document.getElementById("dado").textContent = caras[Math.floor(Math.random() * 6)];\n      this.disabled = false;\n    }\n  }, 100);\n});' }
    ]
  },
  {
    id: 'ch466',
    title: 'Galería con vista de diapositivas y autoplay',
    level: 'Básico',
    description: 'Una galería que cambia de imagen cada 3 segundos automáticamente.',
    instructions: [
      'En <strong>index.html</strong>, un div imagen con un set de imágenes ocultas.',
      'En <strong>script.js</strong>, setInterval que cambia el src de la imagen visible.',
      'En <strong>styles.css</strong>, imagen centrada.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img id="diapo" src="https://via.placeholder.com/400/FF0000">' },
      { name: 'script.js', lang: 'js', content: 'const fotos = ["https://via.placeholder.com/400/FF0000", "https://via.placeholder.com/400/00FF00", "https://via.placeholder.com/400/0000FF"];\nlet i = 0;\nsetInterval(() => {\n  i = (i + 1) % fotos.length;\n  document.getElementById("diapo").src = fotos[i];\n}, 3000);' }
    ]
  },
  {
    id: 'ch467',
    title: 'Ventana de alerta personalizada',
    level: 'Intermedio',
    description: 'Reemplaza el alert nativo por un modal bonito centrado.',
    instructions: [
      'En <strong>index.html</strong>, un botón que abre un div modal con un mensaje y un botón "Aceptar".',
      'En <strong>script.js</strong>, muestra/oculta el modal.',
      'En <strong>styles.css</strong>, centrado con overlay.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="abrirAlerta">Mostrar alerta</button>\n<div id="overlayAlerta" class="oculto">\n  <div class="alerta">\n    <p>Esto es un mensaje de alerta</p>\n    <button id="cerrarAlerta">Aceptar</button>\n  </div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#overlayAlerta { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; }\n#overlayAlerta.oculto { display: none; }\n.alerta { background: white; padding: 30px; border-radius: 10px; text-align: center; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("abrirAlerta").addEventListener("click", () => document.getElementById("overlayAlerta").classList.remove("oculto"));\ndocument.getElementById("cerrarAlerta").addEventListener("click", () => document.getElementById("overlayAlerta").classList.add("oculto"));' }
    ]
  },
  {
    id: 'ch468',
    title: 'Escáner de puertos simulado',
    level: 'Intermedio',
    description: 'Simula el escaneo de puertos de una IP mostrando una lista de puertos comunes y un progreso.',
    instructions: [
      'En <strong>index.html</strong>, un botón "Escanear" y una lista de puertos predefinidos.',
      'En <strong>script.js</strong>, al hacer clic, recorre la lista con un pequeño retraso (simulando latencia) y marca cada puerto como "abierto" o "cerrado" (aleatorio).',
      'Muestra barra de progreso.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<button id="escanear">Escanear puertos</button>\n<div id="progresoScan" style="height:10px;background:#eee;"><div id="barraScan" style="height:100%;width:0;background:#2d6a4f;"></div></div>\n<ul id="resultadosScan"></ul>' },
      { name: 'script.js', lang: 'js', content: 'const puertos = [80, 443, 22, 21, 3306];\ndocument.getElementById("escanear").addEventListener("click", function() {\n  this.disabled = true;\n  const lista = document.getElementById("resultadosScan");\n  lista.innerHTML = "";\n  let completados = 0;\n  puertos.forEach((p, i) => {\n    setTimeout(() => {\n      const estado = Math.random() > 0.5 ? "Abierto" : "Cerrado";\n      lista.innerHTML += `<li>Puerto ${p}: ${estado}</li>`;\n      completados++;\n      document.getElementById("barraScan").style.width = (completados / puertos.length) * 100 + "%";\n      if (completados === puertos.length) this.disabled = false;\n    }, i * 800);\n  });\n});' }
    ]
  },
  {
    id: 'ch469',
    title: 'Texto con cursor de terminal y prompt',
    level: 'Básico',
    description: 'Muestra un texto estático con un prompt de terminal (usuario@host:~$) y un cursor parpadeante.',
    instructions: [
      'En <strong>index.html</strong>, un div que contenga el prompt y un span cursor.',
      'En <strong>styles.css</strong>, anima el cursor con blink. Sin JavaScript.',
      'Opcional: el prompt es solo decorativo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="terminal">\n  <span class="prompt">user@localhost:~$</span> <span class="cursor">█</span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.terminal { background: #1e1e1e; color: #0f0; font-family: monospace; padding: 10px; }\n.cursor { animation: blink 1s step-end infinite; }\n@keyframes blink { 50% { opacity: 0; } }' }
    ]
  },
  {
    id: 'ch470',
    title: 'Efecto de cortina de humo',
    level: 'Intermedio',
    description: 'Una capa que cubre la página y se disipa al hacer clic, revelando el contenido.',
    instructions: [
      'En <strong>index.html</strong>, un div "smoke" que ocupe toda la pantalla con fondo oscuro semitransparente.',
      'En <strong>script.js</strong>, al hacer clic, añade clase que desvanece el div (opacity 0) y tras la transición lo oculta.',
      'En <strong>styles.css</strong>, transición de opacidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="smokeScreen">\n  <p>Haz clic para revelar</p>\n</div>\n<h1>Contenido detrás</h1>' },
      { name: 'styles.css', lang: 'css', content: '#smokeScreen { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; transition: opacity 1s; }\n#smokeScreen.oculto { opacity: 0; pointer-events: none; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("smokeScreen").addEventListener("click", function() {\n  this.classList.add("oculto");\n});' }
    ]
  },
  {
    id: 'ch471',
    title: 'Botón de copia de código con feedback',
    level: 'Básico',
    description: 'Un bloque de código y un botón "Copiar". Al copiar, cambia temporalmente el texto del botón a "Copiado".',
    instructions: [
      'En <strong>index.html</strong>, un <code>&lt;pre&gt;</code> con un código de ejemplo y un <code>&lt;button&gt;</code>.',
      'En <strong>script.js</strong>, copia el texto al portapapeles y cambia el botón por 2 segundos.',
      'Estilo simple.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<pre id="snippet">const greet = () => console.log("Hi");</pre>\n<button id="copySnippet">Copiar</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("copySnippet").addEventListener("click", async () => {\n  const code = document.getElementById("snippet").innerText;\n  await navigator.clipboard.writeText(code);\n  const btn = document.getElementById("copySnippet");\n  btn.textContent = "¡Copiado!";\n  setTimeout(() => btn.textContent = "Copiar", 2000);\n});' }
    ]
  },
  {
    id: 'ch472',
    title: 'Subtítulo animado con GSAP (CDN)',
    level: 'Avanzado',
    description: 'Anima un título con la librería GSAP desde CDN.',
    instructions: [
      'En <strong>index.html</strong>, añade el script de GSAP CDN y un h1.',
      'En <strong>script.js</strong>, usa gsap.from() para animar el título con opacidad y desplazamiento.',
      'Muestra una animación al cargar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>\n<h1 id="gsapTitle">Animado con GSAP</h1>' },
      { name: 'script.js', lang: 'js', content: 'gsap.from("#gsapTitle", { duration: 1.5, opacity: 0, y: -50, ease: "bounce.out" });' }
    ]
  },
  {
    id: 'ch473',
    title: 'Overlay de carga al enviar formulario',
    level: 'Básico',
    description: 'Al hacer clic en enviar, aparece un overlay con un spinner de carga que desaparece tras 2 segundos.',
    instructions: [
      'En <strong>index.html</strong>, un formulario y un div overlay oculto con un spinner CSS.',
      'En <strong>script.js</strong>, previene envío, muestra overlay, y tras 2s lo oculta.',
      'En <strong>styles.css</strong>, spinner animado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<form id="formOverlay">\n  <input type="text" placeholder="Nombre" required>\n  <button type="submit">Enviar</button>\n</form>\n<div id="loadingOverlay" class="oculto"><div class="spinner"></div></div>' },
      { name: 'styles.css', lang: 'css', content: '#loadingOverlay { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center; }\n#loadingOverlay.oculto { display: none; }\n.spinner { border: 5px solid #eee; border-top: 5px solid #2d6a4f; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("formOverlay").addEventListener("submit", function(e) {\n  e.preventDefault();\n  document.getElementById("loadingOverlay").classList.remove("oculto");\n  setTimeout(() => {\n    document.getElementById("loadingOverlay").classList.add("oculto");\n    alert("Formulario enviado simulado");\n    this.reset();\n  }, 2000);\n});' }
    ]
  },
  {
    id: 'ch474',
    title: 'Control deslizante de opacidad para imagen',
    level: 'Básico',
    description: 'Un input range que controla la opacidad de una imagen.',
    instructions: [
      'En <strong>index.html</strong>, input type="range" min="0" max="1" step="0.1" value="1" y una imagen.',
      'En <strong>script.js</strong>, al cambiar el rango, ajusta img.style.opacity.',
      'Muestra el valor actual al lado.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="range" id="opacidad" min="0" max="1" step="0.1" value="1"> <span id="valOpacity">1</span>\n<br><img src="https://via.placeholder.com/200" id="imgOpacity">' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("opacidad").addEventListener("input", function() {\n  document.getElementById("imgOpacity").style.opacity = this.value;\n  document.getElementById("valOpacity").textContent = this.value;\n});' }
    ]
  },
  {
    id: 'ch475',
    title: 'Lista de tarjetas con filtro por búsqueda textual',
    level: 'Intermedio',
    description: 'Filtra tarjetas basado en el texto ingresado en un buscador.',
    instructions: [
      'En <strong>index.html</strong>, varias tarjetas con título y descripción, un input de búsqueda.',
      'En <strong>script.js</strong>, al escribir, oculta las tarjetas cuyo título o descripción no contengan el término.',
      'Búsqueda insensible a mayúsculas/minúsculas.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="buscarTarjeta" placeholder="Buscar...">\n<div class="tarjetas">\n  <div class="tarjeta"><h3>HTML</h3><p>Lenguaje de marcado</p></div>\n  <div class="tarjeta"><h3>CSS</h3><p>Hojas de estilo</p></div>\n  <div class="tarjeta"><h3>JavaScript</h3><p>Lenguaje de scripting</p></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.tarjeta { border: 1px solid #ccc; padding: 10px; margin: 5px; }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("buscarTarjeta").addEventListener("input", function() {\n  const term = this.value.toLowerCase();\n  document.querySelectorAll(".tarjeta").forEach(t => {\n    t.style.display = t.textContent.toLowerCase().includes(term) ? "" : "none";\n  });\n});' }
    ]
  },
  {
    id: 'ch476',
    title: 'Animación de carga con tres barras rebotando',
    level: 'Básico',
    description: 'Tres barras verticales que rebotan a diferentes tiempos.',
    instructions: [
      'En <strong>index.html</strong>, tres spans con clase "bar".',
      'En <strong>styles.css</strong>, animación de escalado vertical con delay.',
      'Sin JavaScript.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="loader-bars">\n  <span class="bar"></span>\n  <span class="bar"></span>\n  <span class="bar"></span>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.bar { display: inline-block; width: 6px; height: 30px; background: #2d6a4f; margin: 2px; animation: bounceBar 1.2s ease-in-out infinite; }\n.bar:nth-child(1) { animation-delay: 0s; }\n.bar:nth-child(2) { animation-delay: 0.15s; }\n.bar:nth-child(3) { animation-delay: 0.3s; }\n@keyframes bounceBar { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }' }
    ]
  },
  {
    id: 'ch477',
    title: 'Vista de tabla con paginación mejorada',
    level: 'Intermedio',
    description: 'Extiende la paginación mostrando números de página y "..." cuando hay muchas.',
    instructions: [
      'En <strong>index.html</strong>, una tabla con datos generados, botones de paginación dinámicos.',
      'En <strong>script.js</strong>, genera los botones de página mostrando máximo 5 páginas consecutivas y botones "primera" y "última".',
      'Usa un array de datos y items por página.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<table id="tablaPaginada"><tbody></tbody></table>\n<div id="paginacion"></div>' },
      { name: 'script.js', lang: 'js', content: 'const datos = Array.from({length: 50}, (_, i) => ({ id: i+1, nombre: `Elemento ${i+1}` }));\nconst porPag = 5;\nconst totalPaginas = Math.ceil(datos.length / porPag);\nlet paginaActual = 1;\nfunction mostrar() {\n  const inicio = (paginaActual - 1) * porPag;\n  const fin = inicio + porPag;\n  const paginaDatos = datos.slice(inicio, fin);\n  const tbody = document.querySelector("#tablaPaginada tbody");\n  tbody.innerHTML = paginaDatos.map(d => `<tr><td>${d.id}</td><td>${d.nombre}</td></tr>`).join("");\n  renderPaginacion();\n}\nfunction renderPaginacion() {\n  const cont = document.getElementById("paginacion");\n  let html = \'\';\n  if (paginaActual > 1) html += `<button class="page-btn" data-page="${paginaActual-1}">Anterior</button>`;\n  for (let i = Math.max(1, paginaActual-2); i <= Math.min(totalPaginas, paginaActual+2); i++) {\n    html += `<button class="page-btn ${i === paginaActual ? \'activo\' : \'\'}" data-page="${i}">${i}</button>`;\n  }\n  if (paginaActual < totalPaginas) html += `<button class="page-btn" data-page="${paginaActual+1}">Siguiente</button>`;\n  cont.innerHTML = html;\n}\ndocument.getElementById("paginacion").addEventListener("click", e => {\n  if (e.target.classList.contains("page-btn")) {\n    paginaActual = parseInt(e.target.dataset.page);\n    mostrar();\n  }\n});\nmostrar();' }
    ]
  },
  {
    id: 'ch478',
    title: 'Tarjeta con efecto de rebote al pasar el ratón',
    level: 'Básico',
    description: 'Al hacer hover, la tarjeta hace un pequeño rebote hacia arriba.',
    instructions: [
      'En <strong>index.html</strong>, un div card.',
      'En <strong>styles.css</strong>, animación keyframes de bounce que se aplica al hover.',
      'Puede usar transform translateY.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="bounce-card">Tarjeta</div>' },
      { name: 'styles.css', lang: 'css', content: '.bounce-card { padding: 30px; background: #2d6a4f; color: white; width: 200px; text-align: center; transition: transform 0.3s; }\n.bounce-card:hover { animation: bounce 0.5s; }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }' }
    ]
  },
  {
    id: 'ch479',
    title: 'Componente de rating con corazones',
    level: 'Básico',
    description: 'En lugar de estrellas, usa corazones (❤️/🤍) para calificar.',
    instructions: [
      'En <strong>index.html</strong>, cinco spans con 🤍.',
      'En <strong>script.js</strong>, al hacer clic, cambia a ❤️ todos los anteriores y guarda la valoración.',
      'En <strong>styles.css</strong>, cursor pointer.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="heart-rating">\n  <span class="hr">🤍</span>\n  <span class="hr">🤍</span>\n  <span class="hr">🤍</span>\n  <span class="hr">🤍</span>\n  <span class="hr">🤍</span>\n  <p id="valoracionCor"></p>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const hearts = document.querySelectorAll(".hr");\nhearts.forEach((h, idx) => {\n  h.addEventListener("click", () => {\n    hearts.forEach((hh, i) => hh.textContent = i <= idx ? "❤️" : "🤍");\n    document.getElementById("valoracionCor").textContent = `Calificación: ${idx+1}/5`;\n  });\n});' }
    ]
  },
  {
    id: 'ch480',
    title: 'Mapa de Google Maps estático con enlace',
    level: 'Básico',
    description: 'Inserta un mapa estático usando la API Static de Google con unas coordenadas de muestra.',
    instructions: [
      'En <strong>index.html</strong>, una imagen cuyo src apunte a <code>https://maps.googleapis.com/maps/api/staticmap?center=40.4168,-3.7038&zoom=13&size=400x300&key=TU_API_KEY</code>. Como no tenemos key, puedes usar una alternativa libre como OpenStreetMap embebida en un iframe.',
      'Usa un iframe con OpenStreetMap: <code>https://www.openstreetmap.org/export/embed.html?bbox=...</code> o simplemente un placeholder.',
      'Para simplicidad, usaremos un placeholder de un mapa.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/400x300?text=Mapa" alt="Mapa estático">' }
    ]
  },
  {
    id: 'ch481',
    title: 'Contador animado con desplazamiento de dígitos',
    level: 'Intermedio',
    description: 'Simula un odómetro o contador de seguidores que anima los números al cambiar.',
    instructions: [
      'En <strong>index.html</strong>, un div que muestra un número.',
      'En <strong>script.js</strong>, cada cierto tiempo, incrementa el valor y usa una transición CSS para deslizar los dígitos.',
      'Puede ser un contador simple que cambie de 0 a 1000 en 3 segundos con requestAnimationFrame.',
      'Versión simplificada: muestra el número y un efecto de cambio de opacidad al actualizar.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="contadorSeguidores">0</div>' },
      { name: 'script.js', lang: 'js', content: 'let valor = 0;\nconst target = 1250;\nconst duracion = 3000;\nconst incremento = target / (duracion / 30);\nconst intervalo = setInterval(() => {\n  valor += incremento;\n  if (valor >= target) { valor = target; clearInterval(intervalo); }\n  document.getElementById("contadorSeguidores").textContent = Math.floor(valor);\n}, 30);' }
    ]
  },
  {
    id: 'ch482',
    title: 'Efecto de halo alrededor de una imagen',
    level: 'Básico',
    description: 'Una imagen que tiene un resplandor exterior que aparece al hacer hover.',
    instructions: [
      'En <strong>index.html</strong>, una imagen con clase "glow".',
      'En <strong>styles.css</strong>, al hover aplica box-shadow con un color difuso.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<img src="https://via.placeholder.com/150" class="glow">' },
      { name: 'styles.css', lang: 'css', content: '.glow { transition: box-shadow 0.3s; }\n.glow:hover { box-shadow: 0 0 15px 5px rgba(45,106,79,0.7); }' }
    ]
  },
  {
    id: 'ch483',
    title: 'Menú flotante (floating action menu)',
    level: 'Intermedio',
    description: 'Un botón circular que al hacer clic despliega varias opciones en arco.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor con botón principal y varios botones secundarios con posición absoluta.',
      'En <strong>script.js</strong>, toggle de clase para mostrar/ocultar los botones.',
      'En <strong>styles.css</strong>, transición con scale y opacidad para cada botón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="fab-menu">\n  <button class="fab-btn">+</button>\n  <button class="fab-item" style="--angle:0deg;">A</button>\n  <button class="fab-item" style="--angle:45deg;">B</button>\n  <button class="fab-item" style="--angle:90deg;">C</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.fab-menu { position: relative; width: 60px; height: 60px; }\n.fab-btn { width: 50px; height: 50px; border-radius: 50%; background: #2d6a4f; color: white; border: none; cursor: pointer; position: absolute; bottom:0; right:0; z-index: 2; }\n.fab-item { position: absolute; bottom: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; background: #d4af37; border: none; color: white; transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-80px) rotate(calc(-1 * var(--angle))); opacity: 0; transition: all 0.3s; }\n.fab-menu.abierto .fab-item { opacity: 1; }' },
      { name: 'script.js', lang: 'js', content: 'document.querySelector(".fab-btn").addEventListener("click", function() {\n  this.parentElement.classList.toggle("abierto");\n});' }
    ]
  },
  {
    id: 'ch484',
    title: 'Botón de desplazamiento al inicio (smooth)',
    level: 'Básico',
    description: 'Un botón fijo abajo a la derecha que al hacer clic sube suavemente al inicio.',
    instructions: [
      'En <strong>index.html</strong>, contenido largo y un botón con estilo.',
      'En <strong>script.js</strong>, al hacer clic, window.scrollTo({ top: 0, behavior: "smooth" }).',
      'En <strong>styles.css</strong>, el botón solo visible tras hacer algo de scroll.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div style="height:2000px;"></div>\n<button id="irArriba" style="position:fixed;bottom:20px;right:20px;display:none;">↑</button>' },
      { name: 'script.js', lang: 'js', content: 'window.addEventListener("scroll", () => {\n  document.getElementById("irArriba").style.display = window.scrollY > 300 ? "block" : "none";\n});\ndocument.getElementById("irArriba").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));' }
    ]
  },
  {
    id: 'ch485',
    title: 'Cálculo de edad a partir de fecha de nacimiento',
    level: 'Básico',
    description: 'Ingresa tu fecha de nacimiento y calcula tu edad en años, meses y días.',
    instructions: [
      'En <strong>index.html</strong>, un input date y un botón.',
      'En <strong>script.js</strong>, calcula la diferencia con la fecha actual y descompón en años, meses, días.',
      'Muestra el resultado en un párrafo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="date" id="nacimiento">\n<button id="calcularEdad">Calcular edad</button>\n<p id="edad"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("calcularEdad").addEventListener("click", () => {\n  const fechaNac = new Date(document.getElementById("nacimiento").value);\n  const hoy = new Date();\n  let años = hoy.getFullYear() - fechaNac.getFullYear();\n  let meses = hoy.getMonth() - fechaNac.getMonth();\n  let días = hoy.getDate() - fechaNac.getDate();\n  if (días < 0) { meses--; días += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate(); }\n  if (meses < 0) { años--; meses += 12; }\n  document.getElementById("edad").textContent = `${años} años, ${meses} meses, ${días} días`;\n});' }
    ]
  },
  {
    id: 'ch486',
    title: 'Slideshow con efecto de cubo (3D)',
    level: 'Avanzado',
    description: 'Muestra un cubo que gira para mostrar diferentes caras con imágenes.',
    instructions: [
      'En <strong>index.html</strong>, estructura de cubo con 4 caras (imágenes).',
      'En <strong>styles.css</strong>, transform-style preserve-3d, animación de rotación.',
      'En <strong>script.js</strong>, botones para rotar a la siguiente cara manualmente.',
      'Usa transform rotateY.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="cube-carousel">\n  <div class="cube">\n    <div class="face front"><img src="https://via.placeholder.com/200/FF0000"></div>\n    <div class="face right"><img src="https://via.placeholder.com/200/00FF00"></div>\n    <div class="face back"><img src="https://via.placeholder.com/200/0000FF"></div>\n    <div class="face left"><img src="https://via.placeholder.com/200/FFFF00"></div>\n  </div>\n  <button id="girarCube">Girar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.cube-carousel { perspective: 600px; width: 200px; height: 200px; margin: 50px auto; }\n.cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.8s; }\n.face { position: absolute; width: 200px; height: 200px; backface-visibility: hidden; }\n.face img { width: 100%; height: 100%; object-fit: cover; }\n.front { transform: translateZ(100px); }\n.right { transform: rotateY(90deg) translateZ(100px); }\n.back { transform: rotateY(180deg) translateZ(100px); }\n.left { transform: rotateY(-90deg) translateZ(100px); }' },
      { name: 'script.js', lang: 'js', content: 'let angle = 0;\ndocument.getElementById("girarCube").addEventListener("click", () => {\n  angle += 90;\n  document.querySelector(".cube").style.transform = `rotateY(${angle}deg)`;\n});' }
    ]
  },
  {
    id: 'ch487',
    title: 'Chatbot simulado con respuestas predefinidas',
    level: 'Intermedio',
    description: 'Escribe un mensaje y obtén una respuesta automática basada en palabras clave.',
    instructions: [
      'En <strong>index.html</strong>, un contenedor de chat, input y botón enviar.',
      'En <strong>script.js</strong>, array de preguntas/respuestas, busca coincidencias parciales y responde.',
      'Muestra los mensajes en globos de diálogo.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="chat"><div id="chatMessages"></div></div>\n<input type="text" id="chatInput" placeholder="Escribe..."><button id="chatSend">Enviar</button>' },
      { name: 'styles.css', lang: 'css', content: '#chatMessages { height: 200px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }\n.msg { margin: 5px 0; }\n.msg.user { text-align: right; color: #2d6a4f; }\n.msg.bot { text-align: left; color: #333; }' },
      { name: 'script.js', lang: 'js', content: 'const respuestas = [\n  ["hola", "¡Hola! ¿Cómo estás?"],\n  ["cómo estás", "Estoy bien, gracias por preguntar."],\n  ["adiós", "¡Hasta luego!"]\n];\nfunction responder(texto) {\n  const msg = texto.toLowerCase();\n  for (const [clave, resp] of respuestas) {\n    if (msg.includes(clave)) return resp;\n  }\n  return "Lo siento, no entiendo.";\n}\ndocument.getElementById("chatSend").addEventListener("click", () => {\n  const input = document.getElementById("chatInput");\n  const mensaje = input.value.trim();\n  if (!mensaje) return;\n  const chat = document.getElementById("chatMessages");\n  chat.innerHTML += `<div class="msg user">Tú: ${mensaje}</div>`;\n  input.value = "";\n  setTimeout(() => {\n    chat.innerHTML += `<div class="msg bot">Bot: ${responder(mensaje)}</div>`;\n    chat.scrollTop = chat.scrollHeight;\n  }, 500);\n});' }
    ]
  },
  {
    id: 'ch488',
    title: 'Switch de unidad de longitud (px a rem)',
    level: 'Básico',
    description: 'Convierte un valor de píxeles a rem (asumiendo base 16px).',
    instructions: [
      'En <strong>index.html</strong>, input numérico y botón convertir.',
      'En <strong>script.js</strong>, calcula valor/16 y muestra resultado.',
      'Muestra ambos valores.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="number" id="pxInput" value="16"> px = <span id="remOutput">1</span> rem\n<button id="convertirPx">Convertir</button>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("convertirPx").addEventListener("click", () => {\n  const px = parseFloat(document.getElementById("pxInput").value);\n  document.getElementById("remOutput").textContent = (px / 16).toFixed(3);\n});' }
    ]
  },
  {
    id: 'ch489',
    title: 'Animación "splash screen" al cargar',
    level: 'Básico',
    description: 'Muestra una pantalla de bienvenida que desaparece tras 2 segundos.',
    instructions: [
      'En <strong>index.html</strong>, un div splash que cubre todo.',
      'En <strong>script.js</strong>, al cargar la página, tras 2s añade clase para desvanecerlo.',
      'En <strong>styles.css</strong>, transición de opacidad.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="splash">Bienvenido</div>' },
      { name: 'styles.css', lang: 'css', content: '#splash { position: fixed; top:0; left:0; width:100%; height:100%; background: #2d6a4f; color: white; display: flex; align-items: center; justify-content: center; font-size: 3rem; transition: opacity 1s; }\n#splash.oculto { opacity: 0; pointer-events: none; }' },
      { name: 'script.js', lang: 'js', content: 'setTimeout(() => {\n  document.getElementById("splash").classList.add("oculto");\n}, 2000);' }
    ]
  },
  {
    id: 'ch490',
    title: 'Simulador de dados con dos dados (craps)',
    level: 'Básico',
    description: 'Lanza dos dados y muestra reglas básicas del juego craps: si la suma es 7 u 11 ganas, 2,3,12 pierdes, otro número establece punto.',
    instructions: [
      'En <strong>index.html</strong>, dos dados y un botón, muestra el resultado y el mensaje.',
      'En <strong>script.js</strong>, implementa la lógica simple de una tirada.',
      'En <strong>styles.css</strong>, dados grandes.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="dados" style="font-size:3rem;">🎲 🎲</div>\n<button id="lanzar">Lanzar</button>\n<p id="resultadoCraps"></p>' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("lanzar").addEventListener("click", () => {\n  const d1 = Math.ceil(Math.random() * 6);\n  const d2 = Math.ceil(Math.random() * 6);\n  const suma = d1 + d2;\n  const caras = ["⚀","⚁","⚂","⚃","⚄","⚅"];\n  document.getElementById("dados").textContent = `${caras[d1-1]} ${caras[d2-1]}`;\n  if (suma === 7 || suma === 11) document.getElementById("resultadoCraps").textContent = "¡Ganaste!";\n  else if (suma === 2 || suma === 3 || suma === 12) document.getElementById("resultadoCraps").textContent = "Perdiste (Craps)";\n  else document.getElementById("resultadoCraps").textContent = `Punto establecido: ${suma}`;\n});' }
    ]
  },
  {
    id: 'ch491',
    title: 'Indicador de moneda con símbolo',
    level: 'Básico',
    description: 'Un selector de países y un campo de cantidad que muestra el valor con el símbolo de moneda correcto.',
    instructions: [
      'En <strong>index.html</strong>, select con países y sus monedas, input cantidad, y un párrafo que muestre la cantidad formateada.',
      'En <strong>script.js</strong>, usa Intl.NumberFormat con el locale adecuado.',
      'Al cambiar el país, actualiza el formato.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<select id="paisMoneda">\n  <option value="es-ES">España (€)</option>\n  <option value="en-US">EEUU ($)</option>\n  <option value="ja-JP">Japón (¥)</option>\n</select>\n<input type="number" id="monto" value="25">\n<p id="formateado"></p>' },
      { name: 'script.js', lang: 'js', content: 'function actualizar() {\n  const locale = document.getElementById("paisMoneda").value;\n  const monto = parseFloat(document.getElementById("monto").value) || 0;\n  const formateado = new Intl.NumberFormat(locale, { style: "currency", currency: locale === "es-ES" ? "EUR" : locale === "en-US" ? "USD" : "JPY" }).format(monto);\n  document.getElementById("formateado").textContent = formateado;\n}\ndocument.getElementById("paisMoneda").addEventListener("change", actualizar);\ndocument.getElementById("monto").addEventListener("input", actualizar);\nactualizar();' }
    ]
  },
  {
    id: 'ch492',
    title: 'Lista de reproducción de audio dinámica',
    level: 'Intermedio',
    description: 'Una lista de canciones (URLs de audio) y al hacer clic en una, se reproduce.',
    instructions: [
      'En <strong>index.html</strong>, un elemento audio y una lista de títulos con data-src.',
      'En <strong>script.js</strong>, al hacer clic, cambia el src del audio y lo reproduce.',
      'Muestra el título actual.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<audio id="audioPlayer" controls></audio>\n<ul id="playlist">\n  <li data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Canción 1</li>\n  <li data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3">Canción 2</li>\n</ul>' },
      { name: 'script.js', lang: 'js', content: 'const audio = document.getElementById("audioPlayer");\ndocument.querySelectorAll("#playlist li").forEach(li => {\n  li.addEventListener("click", () => {\n    audio.src = li.dataset.src;\n    audio.play();\n  });\n});' }
    ]
  },
  {
    id: 'ch493',
    title: 'Fondo con efecto de partículas de nieve (CSS)',
    level: 'Intermedio',
    description: 'Múltiples círculos blancos cayendo con animación CSS pura, simulando nieve.',
    instructions: [
      'En <strong>index.html</strong>, un div contenedor.',
      'En <strong>styles.css</strong>, genera varios pseudo-elementos o divs con posiciones diferentes y animación de caída.',
      'Aunque lo ideal es generar los copos con JS para más aleatoriedad, en este reto puedes definir varios divs manualmente con clases diferentes.',
      'Usa 10 divs con clase "snow" y diferentes left y animation-duration.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="snow-container">\n  <div class="snow" style="left:10%; animation-duration:5s;"></div>\n  <div class="snow" style="left:30%; animation-duration:7s;"></div>\n  <div class="snow" style="left:50%; animation-duration:6s;"></div>\n  <div class="snow" style="left:70%; animation-duration:8s;"></div>\n  <div class="snow" style="left:90%; animation-duration:5.5s;"></div>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '.snow-container { position: relative; height: 300px; background: #1e1e2e; overflow: hidden; }\n.snow { position: absolute; width: 10px; height: 10px; background: white; border-radius: 50%; top: -10px; animation: fall linear infinite; }\n@keyframes fall { to { top: 100%; } }' }
    ]
  },
  {
    id: 'ch494',
    title: 'Efecto de imagen polaroid con CSS',
    level: 'Básico',
    description: 'Una imagen con marco blanco y una sombra suave, como una foto Polaroid.',
    instructions: [
      'En <strong>index.html</strong>, un div que contiene una img y un pie de foto.',
      'En <strong>styles.css</strong>, padding, fondo blanco, box-shadow, y rotación ligera aleatoria con nth-child.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<figure class="polaroid">\n  <img src="https://via.placeholder.com/200">\n  <figcaption>Recuerdo</figcaption>\n</figure>' },
      { name: 'styles.css', lang: 'css', content: '.polaroid { background: white; padding: 15px 15px 30px; box-shadow: 2px 2px 8px rgba(0,0,0,0.2); display: inline-block; transform: rotate(-2deg); }\n.polaroid:nth-child(even) { transform: rotate(2deg); }\n.polaroid img { display: block; }' }
    ]
  },
  {
    id: 'ch495',
    title: 'Previsualización de texto Markdown con showdown.js',
    level: 'Avanzado',
    description: 'Otra opción de preview de Markdown usando la librería Showdown (CDN).',
    instructions: [
      'En <strong>index.html</strong>, textarea y div preview, incluye showdown.min.js.',
      'En <strong>script.js</strong>, convierte el texto con new showdown.Converter().makeHtml().',
      'Actualiza en tiempo real (input).'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"><\/script>\n<textarea id="mdInput" rows="10" cols="40"># título</textarea>\n<div id="mdPreview"></div>' },
      { name: 'script.js', lang: 'js', content: 'const converter = new showdown.Converter();\ndocument.getElementById("mdInput").addEventListener("input", function() {\n  document.getElementById("mdPreview").innerHTML = converter.makeHtml(this.value);\n});' }
    ]
  },
  {
    id: 'ch496',
    title: 'Saludo dinámico con IA (simulado con frases)',
    level: 'Básico',
    description: 'Muestra un mensaje de saludo que cambia cada vez que se pulsa un botón, simulando una IA.',
    instructions: [
      'En <strong>index.html</strong>, un span y botón "Preguntar".',
      'En <strong>script.js</strong>, array de respuestas variadas y elige una aleatoria.',
      'Puedes añadir input para enviar una pregunta (simulado) y devolver una respuesta aleatoria de un banco de frases.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<input type="text" id="pregunta" placeholder="Pregunta..."><button id="preguntar">Preguntar</button>\n<p id="respuestaIA"></p>' },
      { name: 'script.js', lang: 'js', content: 'const respuestas = ["Me parece interesante", "No estoy seguro", "Podría ser", "¡Claro que sí!", "No tengo respuesta"];\ndocument.getElementById("preguntar").addEventListener("click", () => {\n  document.getElementById("respuestaIA").textContent = respuestas[Math.floor(Math.random() * respuestas.length)];\n  document.getElementById("pregunta").value = "";\n});' }
    ]
  },
  {
    id: 'ch497',
    title: 'Cronómetro con formato de competición (00:00.0)',
    level: 'Básico',
    description: 'Un cronómetro que muestra minutos, segundos y décimas de segundo.',
    instructions: [
      'En <strong>index.html</strong>, un display y botones iniciar/pausar/reiniciar.',
      'En <strong>script.js</strong>, setInterval cada 100ms para actualizar décimas.',
      'Formatea adecuadamente.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div id="cronoComp">00:00.0</div>\n<button id="iniciarComp">Iniciar</button>\n<button id="pausarComp">Pausar</button>\n<button id="reiniciarComp">Reiniciar</button>' },
      { name: 'script.js', lang: 'js', content: 'let tiempo = 0;\nlet intervalo;\nconst display = document.getElementById("cronoComp");\nfunction act() {\n  const min = String(Math.floor(tiempo / 600)).padStart(2, "0");\n  const seg = String(Math.floor((tiempo % 600) / 10)).padStart(2, "0");\n  const dec = tiempo % 10;\n  display.textContent = `${min}:${seg}.${dec}`;\n}\ndocument.getElementById("iniciarComp").addEventListener("click", () => {\n  if (intervalo) return;\n  intervalo = setInterval(() => { tiempo++; act(); }, 100);\n});\ndocument.getElementById("pausarComp").addEventListener("click", () => { clearInterval(intervalo); intervalo = null; });\ndocument.getElementById("reiniciarComp").addEventListener("click", () => { clearInterval(intervalo); intervalo = null; tiempo = 0; act(); });' }
    ]
  },
  {
    id: 'ch498',
    title: 'Canvas con dibujo libre de varios colores',
    level: 'Intermedio',
    description: 'Permite cambiar el color del pincel usando botones de colores y dibujar en un canvas.',
    instructions: [
      'En <strong>index.html</strong>, canvas y botones de colores.',
      'En <strong>script.js</strong>, al hacer clic en un botón cambia el strokeStyle del contexto.',
      'Mantén la funcionalidad de dibujo con el ratón.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<canvas id="canvasDibujo" width="400" height="300" style="border:1px solid black;"></canvas>\n<div>\n  <button class="color-btn" data-color="#e74c3c" style="background:#e74c3c;"></button>\n  <button class="color-btn" data-color="#2d6a4f" style="background:#2d6a4f;"></button>\n  <button class="color-btn" data-color="#3498db" style="background:#3498db;"></button>\n</div>' },
      { name: 'script.js', lang: 'js', content: 'const canvas = document.getElementById("canvasDibujo");\nconst ctx = canvas.getContext("2d");\nlet dibujando = false;\nlet color = "#000000";\ncanvas.addEventListener("mousedown", e => { dibujando = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); ctx.strokeStyle = color; });\ncanvas.addEventListener("mousemove", e => { if (dibujando) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });\ncanvas.addEventListener("mouseup", () => dibujando = false);\ndocument.querySelectorAll(".color-btn").forEach(btn => {\n  btn.addEventListener("click", function() { color = this.dataset.color; });\n});' }
    ]
  },
  {
    id: 'ch499',
    title: 'Vista de datos en formato tabla con ordenación por columnas',
    level: 'Intermedio',
    description: 'Datos estáticos en una tabla, al hacer clic en el encabezado se ordena ascendente/descendente.',
    instructions: [
      'En <strong>index.html</strong>, una tabla con thead y tbody.',
      'En <strong>script.js</strong>, asigna event listeners a los th, implementa el ordenamiento (numérico o alfabético).',
      'Muestra flechas indicando dirección de ordenación.'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<table id="tablaOrden" border="1">\n  <thead><tr><th data-col="nombre">Nombre</th><th data-col="edad">Edad</th></tr></thead>\n  <tbody id="tbodyOrden">\n    <tr><td>Ana</td><td>22</td></tr>\n    <tr><td>Luis</td><td>30</td></tr>\n    <tr><td>Marta</td><td>25</td></tr>\n  </tbody>\n</table>' },
      { name: 'script.js', lang: 'js', content: 'const tbody = document.getElementById("tbodyOrden");\nlet direccion = {};\ndocument.querySelectorAll("th[data-col]").forEach(th => {\n  th.addEventListener("click", () => {\n    const col = th.dataset.col;\n    direccion[col] = !direccion[col];\n    const filas = [...tbody.querySelectorAll("tr")];\n    const idx = col === "nombre" ? 0 : 1;\n    filas.sort((a, b) => {\n      const valA = a.children[idx].textContent;\n      const valB = b.children[idx].textContent;\n      const comparacion = isNaN(valA) ? valA.localeCompare(valB) : parseFloat(valA) - parseFloat(valB);\n      return direccion[col] ? comparacion : -comparacion;\n    });\n    filas.forEach(f => tbody.appendChild(f));\n  });\n});' }
    ]
  },
  {
    id: 'ch500',
    title: '¡Has llegado al reto 500! Crea una animación de celebración',
    level: 'Básico',
    description: 'Para celebrar el reto 500, crea una animación con confeti, un texto grande "500" y un mensaje de enhorabuena.',
    instructions: [
      'Crea un div central con "500" que crece y gira con una animación CSS, y un botón que lance confeti (como el reto 374, reutilizando).',
      'Usa JS para generar partículas de colores.',
      '¡Felicidades por llegar hasta aquí!'
    ],
    template: [
      { name: 'index.html', lang: 'html', content: '<div class="celebracion">\n  <h1 id="numeroCelebra">500</h1>\n  <p>Retos completados</p>\n  <button id="festejar">Festejar</button>\n</div>' },
      { name: 'styles.css', lang: 'css', content: '#numeroCelebra { font-size: 5rem; animation: celebPop 2s infinite alternate; }\n@keyframes celebPop { from { transform: scale(1) rotate(0deg); } to { transform: scale(1.2) rotate(10deg); } }\n.confeti { position: fixed; top: -10px; width: 10px; height: 10px; animation: caerConfeti linear forwards; pointer-events: none; }\n@keyframes caerConfeti { to { top: 100vh; transform: rotate(720deg); opacity: 0; } }' },
      { name: 'script.js', lang: 'js', content: 'document.getElementById("festejar").addEventListener("click", () => {\n  for (let i = 0; i < 80; i++) {\n    const confeti = document.createElement("div");\n    confeti.className = "confeti";\n    confeti.style.left = Math.random() * 100 + "%";\n    confeti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;\n    confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";\n    document.body.appendChild(confeti);\n    setTimeout(() => confeti.remove(), 5000);\n  }\n});' }
    ]
  },
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