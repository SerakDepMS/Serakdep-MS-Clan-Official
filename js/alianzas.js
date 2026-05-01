const clanesAliados = [
  {
    nombre: "Whicked White Void",
    logo: "images/alianzas/WhickedWhiteVoid.jpg",
    descripcion: "Uniendo el vacio con el poder de los dragones blancos, tejemos la realidad con hilos invisibles.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-04-03"
  },
  {
    nombre: "Kian Vove Xoar's",
    logo: "images/alianzas/KianVoveXoars.jpg",
    descripcion: "Nuestro objetivo es tener un espacio de convivencia sana, ser como una familia, un espacio seguro para todos y todas.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-04-02"
  },
  {
    nombre: "Golden Vultures",
    logo: "images/alianzas/GoldenVultures.jpg",
    descripcion: "Comunidad creada con el fin de garantizar un ambiente de convivencia y juego sano, a traves de la creacion de contenido y actividades en diferentes juegos.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-11-24"
  },
  {
    nombre: "NYTHERA",
    logo: "images/alianzas/NYTHERA.jpg",
    descripcion: "Nuestra mision es crecer como una comunidad fuerte, confiable y sobre todo poder forjar una gran amistad entre todos.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-21"
  },
  {
    nombre: "The Future Legends",
    logo: "images/alianzas/TheFutureLegends.jpg",
    descripcion: "Es un clan para socializar y hacer amigos, algunas veces se hay giveaways con robux.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-02-03"
  },
  {
    nombre: "Bloody Legacy",
    logo: "images/alianzas/BloodyLegacy.jpg",
    descripcion: "Clan enfocado en evade, llevando una buena comunicación, siendo un clan de palabra, en el cual nuestros aliados e integrantes pueden confiar plenamente.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-27"
  },
  {
    nombre: "Wonderland",
    logo: "images/alianzas/Wonderland.jpg",
    descripcion: "En Wonderland, buscamos ser un refugio lleno de magia, sueños y risas, donde cada habitante pueda sentirse cómodo, libre y parte de algo especial mientras forma parte de este mundo encantado.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-31"
  },
  {
    nombre: "Legión Nova",
    logo: "images/alianzas/LegionNova.jpg",
    descripcion: "Somos una alianza unida por la lealtad, la estrategia y el crecimiento constante. En Legión Nova no solo buscamos ganar, sino construir un equipo fuerte donde cada miembro tenga voz, apoyo y un proposito claro. Nos enfocamos en mejorar juntos, superar retos y mantener siempre el respeto como base de todo. Aqui nadie se queda atrás.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-01-20"
  },
  {
    nombre: "LUWANCE",
    logo: "images/alianzas/LUWANCE.jpg",
    descripcion: "Es un clan que prioriza la transparencia, el respeto y el crecimiento real. Aqui, la fuerza no se mide por ego, sino por el corazon de su comunidad.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-13"
  },
  {
    nombre: "BOBOX COMMUNITY",
    logo: "images/alianzas/Boboxcommunity.jpg",
    descripcion: "Es un lugar donde queremos que los integrantes puedan divertirse y ser una bonita familia. Nuestra mision es poder crear un buen ambiente con nuestros integrantes.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-02-25"
  },
  {
    nombre: "Kira's Order",
    logo: "images/alianzas/KirasOrder.jpg",
    descripcion: "Somos un clan enfocado en la diversion, donde lo mas importante es crear amistades y compartir buenos momentos. Nos gusta organizar eventos, participar juntos y mantener un ambiente entretenido.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-19"
  },
  {
    nombre: "Azeroth Seraphim Griever",
    logo: "images/alianzas/AzerothSeraphimGriever.jpg",
    descripcion: "En busca de la excelencia y la unidad, creamos un espacio donde la cooperación y el respeto son fundamentales.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2026-10-27"
  },
  {
    nombre: "Celestial Diamond",
    logo: "images/alianzas/CelestialDiamond.jpg",
    descripcion: "Nuestro clan es una comunidad diversa, en busca de congregaciones divertidas.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-22"
  }
  
  
];


function renderizarAlianzas() {
  const grid = document.getElementById("alianzasGrid");
  if (!grid) return;

  grid.innerHTML = "";

  clanesAliados.forEach((clan) => {
    const card = document.createElement("div");
    card.className = `alianza-card ${clan.activo ? "activo" : "inactivo"} ${clan.nuevaAlianza ? "nueva" : ""}`;


    const fecha = new Date(clan.fechaAlianza);
    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    card.innerHTML = `
      <!-- Indicador de estado -->
      <span class="estado-indicador ${clan.activo ? "activo" : "inactivo"}" title="${clan.activo ? "Activo" : "Inactivo"}"></span>

      <!-- Badge de nueva alianza -->
      ${clan.nuevaAlianza ? '<span class="badge-nueva">⚡ Nueva Alianza</span>' : ""}

      <!-- Logo -->
      <img
        src="${clan.logo}"
        alt="Logo de ${clan.nombre}"
        class="alianza-logo"
        onerror="this.src='https://via.placeholder.com/100/1b4332/d4af37?text=${clan.nombre.charAt(0)}'"
        loading="lazy"
      />

      <!-- Nombre -->
      <h3>${clan.nombre}</h3>

      <!-- Descripción -->
      <p class="descripcion">${clan.descripcion}</p>

      <!-- Footer -->
      <div class="alianza-footer">
        <span class="estado-texto ${clan.activo ? "activo" : "inactivo"}">
          <i class="fas fa-circle" style="font-size: 0.5em; vertical-align: middle; margin-right: 4px;"></i>
          ${clan.activo ? "Activo" : "Inactivo"}
        </span>
        <span class="fecha-alianza">
          <i class="far fa-calendar-alt"></i> ${fechaFormateada}
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderizarAlianzas();
});