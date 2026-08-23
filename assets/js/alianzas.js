const clanesAliados = [
  {
    nombre: "CHIHUAHUENSE  DINASTY",
    logo: "../../assets/img/alianzas/CHIHUAHUENSEDINASTY.jpg",
    descripcion: "Un lugar donde las pequeñas acciones son poderosas aparece chy un clan para socializar y convivir sanamente.",
    activo: true,
    nuevaAlianza: true,
    fechaAlianza: "2026-06-02"
  },
  {
    nombre: "Zion Dynasty",
    logo: "../../assets/img/alianzas/ZionDynasty.jpg",
    descripcion: "Comunidad creada con el fin de garantizar un ambiente de convivencia y juego sano, a traves de la creacion de contenido y actividades en diferentes juegos.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-11-24"
  },
  {
    nombre: "Bloody Legacy",
    logo: "../../assets/img/alianzas/BloodyLegacy.jpg",
    descripcion: "Clan enfocado en evade, llevando una buena comunicación, siendo un clan de palabra, en el cual nuestros aliados e integrantes pueden confiar plenamente.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-27"
  },
  {
    nombre: "WIND BREAKER",
    logo: "../../assets/img/alianzas/WINDBREAKER.jpg",
    descripcion: "En WIND BREAKER, buscamos ser un refugio lleno de magia, sueños y risas, donde cada habitante pueda sentirse cómodo, libre y parte de algo especial mientras forma parte de este mundo encantado.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-31"
  },
  {
    nombre: "LUWANCE",
    logo: "../../assets/img/alianzas/LUWANCE.jpg",
    descripcion: "Es un clan que prioriza la transparencia, el respeto y el crecimiento real. Aqui, la fuerza no se mide por ego, sino por el corazon de su comunidad.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-13"
  },
  {
    nombre: "The Black Bulls",
    logo: "../../assets/img/alianzas/TheBlackBulls.jpg",
    descripcion: "The Black Bulls simboliza el poder absoluto, la fuerza imponente y el misterio indomable.",
    activo: true,
    nuevaAlianza: false,
    fechaAlianza: "2025-12-20"
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



