const API_EVENTOS = "https://api.npoint.io/b7d27b89b7da43de6683";
const INTERVALO_ACTUALIZACION = 12000;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent = new Date().getFullYear();
  cargarEventosDesdeAPI();
  setInterval(actualizarEventosPeriodicamente, INTERVALO_ACTUALIZACION);
});

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let lastKnownDate = new Date();
let ultimaActualizacionTimestamp = null;


async function cargarEventosDesdeAPI(esActualizacionPeriodica = false) {
  try {

    const cacheBuster = `_cb=${Date.now()}`;
    const urlConAntiCache = API_EVENTOS.includes('?') 
      ? `${API_EVENTOS}&${cacheBuster}` 
      : `${API_EVENTOS}?${cacheBuster}`;
    

    if (!esActualizacionPeriodica) {
      console.log("Cargando eventos iniciales...");
    }
    
    const response = await fetch(urlConAntiCache);
    if (!response.ok) throw new Error("Error al cargar eventos");

    const data = await response.json();


    const nuevosEventos = {};
    if (data.eventos && Array.isArray(data.eventos)) {
      data.eventos.forEach(evento => {
        const dateKey = evento.fecha;
        nuevosEventos[dateKey] = {
          type: evento.tipo || "game",
          icon: evento.icono || "🎮",
          title: evento.titulo || "Evento del Clan",
          description: evento.descripcion || "¡No te pierdas este evento!",
          status: evento.estado || "closed",
          category: evento.categoria || "general",
        };
      });
    }


    const eventosAnteriores = window.calendarEvents ? JSON.stringify(window.calendarEvents) : '';
    const eventosNuevosStr = JSON.stringify(nuevosEventos);
    const hanCambiado = eventosAnteriores !== eventosNuevosStr;


    window.calendarEvents = nuevosEventos;

    if (hanCambiado) {
      console.log(`¡DATOS ACTUALIZADOS! ${Object.keys(window.calendarEvents).length} eventos cargados.`);
    } else {

    }


    initTodayEvent();
    renderCalendar(currentMonth, currentYear);
    renderEventList(currentMonth, currentYear);
    updateEventsDoneCounter();
    
    ultimaActualizacionTimestamp = Date.now();

  } catch (error) {
    console.error("❌ Error cargando eventos desde API:", error);
    const todayEventElement = document.getElementById("today-event");
    if (todayEventElement) {
      todayEventElement.innerHTML = `
        <div class="today-event-content no-event">
          <div class="today-event-icon">⚠️</div>
          <div class="today-event-details">
            <h3>Error al cargar eventos</h3>
            <p>No se pudieron cargar los eventos. Intenta recargar la página.</p>
          </div>
        </div>
      `;
    }
  }
}


async function actualizarEventosPeriodicamente() {
  await cargarEventosDesdeAPI(true);
}


function getLocalDate(dateString = null) {
  if (!dateString) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
  const parts = dateString.split("-");
  if (parts.length !== 3) return new Date(dateString);
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

function formatDateForKey(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateEventsDoneCounter() {
  const today = getLocalDate();
  const pastEvents = Object.entries(window.calendarEvents || {}).filter(
    ([dateKey, event]) => {
      const eventDate = getLocalDate(dateKey);
      return eventDate < today;
    }
  ).length;
  const eventsDoneElement = document.getElementById("events-done");
  if (eventsDoneElement) eventsDoneElement.textContent = pastEvents;
}

function initCalendar() {
  updateCurrentDate();
  renderCalendar(currentMonth, currentYear);
  renderEventList(currentMonth, currentYear);
}

function updateCurrentDate() {
  const now = getLocalDate();
  currentMonth = now.getMonth();
  currentYear = now.getFullYear();
  lastKnownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function checkDateUpdate() {
  const now = getLocalDate();
  const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (currentDate.getTime() !== lastKnownDate.getTime()) {
    console.log("¡Nuevo día detectado! Actualizando...");
    initTodayEvent();
    updateCurrentDate();
    renderCalendar(currentMonth, currentYear);
    renderEventList(currentMonth, currentYear);
    updateEventsDoneCounter();
  }
}

function navigateToCurrentMonth() {
  const now = getLocalDate();
  currentMonth = now.getMonth();
  currentYear = now.getFullYear();
  renderCalendar(currentMonth, currentYear);
  renderEventList(currentMonth, currentYear);

}

function renderCalendar(month, year) {
  const calendarGrid = document.getElementById("calendar-grid");
  const monthYearElement = document.getElementById("current-month-year");
  if (!calendarGrid || !monthYearElement) return;
  calendarGrid.innerHTML = "";
  const today = getLocalDate();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  monthYearElement.textContent = `${monthNames[month]} ${year}`;
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement("div");
    dayElement.className = "calendar-day header";
    dayElement.textContent = day;
    calendarGrid.appendChild(dayElement);
  });
  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay();
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();
  for (let i = 0; i < startingDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.className = "calendar-day empty";
    calendarGrid.appendChild(emptyDay);
  }
  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement("div");
    dayElement.className = "calendar-day";
    dayElement.dataset.day = day;
    dayElement.dataset.month = month;
    dayElement.dataset.year = year;
    const isToday = year === todayYear && month === todayMonth && day === todayDate;
    if (isToday) dayElement.classList.add("today");
    const dayOfWeek = new Date(year, month, day).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) dayElement.classList.add("weekend");
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const event = window.calendarEvents ? window.calendarEvents[dateKey] : null;
    if (event) {
      dayElement.classList.add("event-day");
      dayElement.dataset.eventType = event.type;
      dayElement.classList.add(`event-${event.type}`);
    }
    const dayNumber = document.createElement("span");
    dayNumber.className = "day-number";
    dayNumber.textContent = day;
    dayElement.appendChild(dayNumber);
    if (event) {
      const eventIcons = document.createElement("div");
      eventIcons.className = "event-icons";
      eventIcons.textContent = event.icon;
      dayElement.appendChild(eventIcons);
    }
    if (isToday) {
      const todayIndicator = document.createElement("div");
      todayIndicator.className = "today-indicator";
      todayIndicator.textContent = "HOY";
      dayElement.appendChild(todayIndicator);
    }
    calendarGrid.appendChild(dayElement);
  }
}

function renderEventList(month, year) {
  const eventsList = document.getElementById("calendar-events-list");
  if (!eventsList) return;
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const currentMonthEvents = Object.entries(window.calendarEvents || {})
    .filter(([dateKey]) => {
      const eventDate = getLocalDate(dateKey);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    })
    .sort(([dateA], [dateB]) => getLocalDate(dateA) - getLocalDate(dateB));
  if (currentMonthEvents.length === 0) {
    eventsList.innerHTML = `
      <div class="events-list-header">
        <h4>Eventos de ${monthNames[month]} ${year}</h4>
      </div>
      <div class="no-events-message">
        <i class="fas fa-calendar-times"></i>
        <p>No hay eventos programados para este mes.</p>
      </div>
    `;
    return;
  }
  let html = `
    <div class="events-list-header">
      <h4>Eventos de ${monthNames[month]} ${year}</h4>
      <span class="events-count">${currentMonthEvents.length} eventos</span>
    </div>
    <div class="events-list-container">
  `;
  const today = getLocalDate();
  currentMonthEvents.forEach(([dateKey, event]) => {
    const eventDate = getLocalDate(dateKey);
    const day = eventDate.getDate();
    const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const shortDayName = dayNames[eventDate.getDay()];
    let typeColor = "#4CAF50";
    if (event.type === "tournament") typeColor = "#FF9800";
    else if (event.type === "game") typeColor = "#2196F3";
    else if (event.type === "special") typeColor = "#9C27B0";
    const isToday = eventDate.getDate() === today.getDate() && eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    const isSoon = daysUntil >= 0 && daysUntil <= 3;
    const eventClass = isToday ? "today-event-list" : (isSoon ? "soon-event-list" : "");
    const statusBadge = event.status === "open"
      ? '<span class="open-badge"><i class="fas fa-unlock-alt"></i> Abierto</span>'
      : '<span class="closed-badge"><i class="fas fa-lock"></i> Cerrado</span>';
    html += `
      <div class="event-list-item ${eventClass}" data-event-date="${dateKey}">
        <div class="event-list-date">
          <div class="event-day-number">${day}</div>
          <div class="event-day-name">${shortDayName}</div>
        </div>
        <div class="event-list-content">
          <div class="event-list-title">
            <span class="event-icon">${event.icon}</span>
            <strong>${event.title}</strong>
            ${isToday ? '<span class="today-badge">HOY</span>' : ''}
            ${isSoon && !isToday ? `<span class="soon-badge">En ${daysUntil} día${daysUntil !== 1 ? 's' : ''}</span>` : ''}
            ${statusBadge}
          </div>
          <div class="event-list-description">${event.description || ''}</div>
          <div class="event-list-footer">
            <span class="event-list-type" style="color: ${typeColor}"><i class="fas fa-tag"></i> ${event.type}</span>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  eventsList.innerHTML = html;
}

function changeMonth(direction) {
  if (direction === "prev") {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  } else if (direction === "next") {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  }
  renderCalendar(currentMonth, currentYear);
  renderEventList(currentMonth, currentYear);
}

function initTodayEvent() {
  const today = getLocalDate();
  const todayKey = formatDateForKey(today);
  const event = window.calendarEvents ? window.calendarEvents[todayKey] : null;
  const todayEventElement = document.getElementById("today-event");
  if (!todayEventElement) return;
  
  if (event) {
    let typeText = "", typeColor = "#4CAF50";
    if (event.type === "tournament") { typeText = "🏆 Torneo"; typeColor = "#FF9800"; }
    else if (event.type === "game") { typeText = "🎮 Game Night"; typeColor = "#2196F3"; }
    else if (event.type === "special") { typeText = "🎁 Especial"; typeColor = "#9C27B0"; }
    
    const isOpen = event.status === "open";
    const joinButton = isOpen 
      ? `<button class="btn-join-now" onclick="joinEventNow()"><i class="fas fa-play-circle"></i> Unirse ahora</button>`
      : `<p class="event-closed-message"><i class="fas fa-lock"></i> Este evento aún no está abierto para unirse.</p>`;
    
    todayEventElement.innerHTML = `
      <div class="today-event-content">
        <div class="today-event-icon">${event.icon}</div>
        <div class="today-event-details">
          <h3>${event.title} <span class="today-event-badge">HOY</span></h3>
          <p style="color:${typeColor}">${typeText}</p>
          <p>${event.description || ''}</p>
          ${joinButton}
        </div>
      </div>
    `;
  } else {
    const nextEvent = findNextEvent();
    if (nextEvent) {
      const nextDate = getLocalDate(nextEvent.date);
      const daysUntil = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
      todayEventElement.innerHTML = `
        <div class="today-event-content no-event">
          <div class="today-event-icon">📅</div>
          <div class="today-event-details">
            <h3>Próximo evento en ${daysUntil} día${daysUntil !== 1 ? 's' : ''}</h3>
            <p>${nextEvent.icon} ${nextEvent.title}</p>
            <p>${formatDate(nextDate)}</p>
          </div>
        </div>
      `;
    } else {
      todayEventElement.innerHTML = `
        <div class="today-event-content no-event">
          <div class="today-event-icon">📅</div>
          <div class="today-event-details">
            <h3>No hay eventos programados</h3>
            <p>Próximamente se anunciarán nuevas actividades.</p>
          </div>
        </div>
      `;
    }
  }
}

function findNextEvent() {
  if (!window.calendarEvents) return null;
  const today = getLocalDate();
  const upcoming = Object.entries(window.calendarEvents)
    .filter(([dateKey]) => getLocalDate(dateKey) > today)
    .sort(([a], [b]) => getLocalDate(a) - getLocalDate(b));
  if (upcoming.length > 0) {
    const [date, event] = upcoming[0];
    return { date, ...event };
  }
  return null;
}

function initReminderSystem() {

}

function initStatistics() {

}

function initEventListeners() {
  document.getElementById("prev-month")?.addEventListener("click", () => changeMonth("prev"));
  document.getElementById("next-month")?.addEventListener("click", () => changeMonth("next"));
  document.getElementById("today-btn")?.addEventListener("click", navigateToCurrentMonth);
  

  document.addEventListener("click", (e) => {
    if (e.target.closest(".calendar-day.event-day")) {
      const dayElement = e.target.closest(".calendar-day");
      const day = dayElement.dataset.day;
      const month = parseInt(dayElement.dataset.month) + 1;
      const year = dayElement.dataset.year;
      const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const event = window.calendarEvents[dateKey];
      if (event) showEventModal(event, dateKey);
    }
    if (e.target.closest(".event-list-item")) {
      const eventItem = e.target.closest(".event-list-item");
      const date = eventItem.dataset.eventDate;
      const event = window.calendarEvents[date];
      if (event) showEventModal(event, date);
    }
  });
}

function showEventModal(event, dateKey) {
  let modal = document.getElementById("event-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "event-modal";
    modal.className = "event-modal";
    modal.innerHTML = `
      <div class="event-modal-content">
        <div class="event-modal-header">
          <h3 id="event-modal-title"></h3>
          <button class="event-modal-close">&times;</button>
        </div>
        <div class="event-modal-body">
          <div class="event-modal-icon" id="event-modal-icon"></div>
          <div class="event-modal-info">
            <p id="event-modal-date"></p>
            <p id="event-modal-type"></p>
          </div>
          <p class="event-modal-description" id="event-modal-description"></p>
          <div class="event-modal-actions">
            <button class="btn-join-now-modal" id="btn-join-now-modal" style="display: none;">
              <i class="fas fa-play-circle"></i> Unirse ahora
            </button>
            <button class="btn-share-event" id="btn-share-event">
              <i class="fas fa-share-alt"></i> Compartir
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector(".event-modal-close").addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
  }
  
  const eventDate = getLocalDate(dateKey);
  const formattedDate = formatDate(eventDate);
  let typeText = "", typeColor = "#4CAF50";
  if (event.type === "tournament") { typeText = "🏆 Torneo"; typeColor = "#FF9800"; }
  else if (event.type === "game") { typeText = "🎮 Game Night"; typeColor = "#2196F3"; }
  else if (event.type === "special") { typeText = "🎁 Especial"; typeColor = "#9C27B0"; }
  
  modal.querySelector("#event-modal-title").textContent = event.title;
  modal.querySelector("#event-modal-icon").innerHTML = `<span style="font-size: 3em;">${event.icon}</span>`;
  modal.querySelector("#event-modal-date").innerHTML = `📅 ${formattedDate}`;
  modal.querySelector("#event-modal-type").innerHTML = `<span style="color: ${typeColor}">${typeText}</span>`;
  modal.querySelector("#event-modal-description").textContent = event.description || "";
  
  const joinBtn = modal.querySelector("#btn-join-now-modal");
  const today = getLocalDate();
  const isToday = formatDateForKey(eventDate) === formatDateForKey(today);
  if (isToday && event.status === "open") {
    joinBtn.style.display = "inline-block";
    joinBtn.onclick = () => { joinEventNow(); modal.style.display = "none"; };
  } else {
    joinBtn.style.display = "none";
  }
  
  modal.querySelector("#btn-share-event").onclick = () => shareEvent(event, dateKey);
  modal.style.display = "flex";
}

function shareEvent(event, dateKey) {
  const eventDate = getLocalDate(dateKey);
  const formattedDate = formatDate(eventDate);
  const text = `¡Únete a nuestro evento: ${event.title}!\n📅 ${formattedDate}\n\n${event.description || ''}\n\n#ClanEvents`;
  if (navigator.share) {
    navigator.share({ title: event.title, text: text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Evento copiado al portapapeles");
    }).catch(() => {
      console.warn("No se pudo copiar automáticamente");
    });
  }
}

function joinEventNow() {
  const today = getLocalDate();
  const todayKey = formatDateForKey(today);
  const event = window.calendarEvents[todayKey];
  if (event && event.status === "open") {
    window.open("https://www.roblox.com/share?code=bb53c2c4362b054aa38d05a20baba28f&type=Server", "_blank");
  } else {
    console.warn("Evento no está abierto para unirse.");
  }
}

function formatDate(date) {
  return date.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}


initEventListeners();


window.joinEventNow = joinEventNow;