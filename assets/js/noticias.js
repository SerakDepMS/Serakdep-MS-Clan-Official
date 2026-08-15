const CONFIG = {
  CATEGORIES: {
    announcement: { text: "Anuncio" },
    tournament: { text: "Torneo" },
    collaboration: { text: "Colaboración" },
    maintenance: { text: "Mantenimiento" },
    update: { text: "Actualización" },
    event: { text: "Evento" },
  },
};

if (typeof API_DB === "undefined") {
  window.API_DB = "https://api.npoint.io/c7935f8e8b0b09b0b07b";
} else {
  window.API_DB = API_DB;
}

const INTERVALO_ACTUALIZACION = 12000;

let currentFilter = "all";
let ultimaActualizacionTimestamp = null;
let datosAnterioresStr = '';

let newsDatabase = {
  lastUpdate: new Date().toISOString(),
  news: [],
};

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  initializeData();
  initEventListeners();

  setInterval(actualizarNoticiasPeriodicamente, INTERVALO_ACTUALIZACION);
});

async function loadFromNpoint(esActualizacionPeriodica = false) {
  try {
    if (!window.API_DB || window.API_DB.trim() === "") return false;

    const cacheBuster = `_cb=${Date.now()}`;
    const cleanUrl = window.API_DB.trim();
    const urlConAntiCache = cleanUrl.includes('?')
      ? `${cleanUrl}&${cacheBuster}`
      : `${cleanUrl}?${cacheBuster}`;

    const response = await fetch(urlConAntiCache);
    if (!response.ok) {
      if (response.status === 404) throw new Error("Base de datos de noticias no encontrada");
      if (response.status >= 500) throw new Error("Error del servidor - Intenta más tarde");
      throw new Error(`Error HTTP ${response.status}: No se pudieron cargar las noticias`);
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      throw new Error("Error al procesar datos de noticias: respuesta inválida");
    }

    const nuevasNoticias = (data.news || []).map((newsItem) => ({
      id: newsItem.id,
      title: newsItem.title,
      category: newsItem.category,
      content: newsItem.content,
      excerpt: newsItem.excerpt || newsItem.content.substring(0, 150) + "...",
      date: newsItem.date,
      image: newsItem.image || "",
      important: newsItem.important || false,
      pinned: newsItem.pinned || false,
      author: newsItem.author || "Administrador",
    }));

    const nuevoEstado = {
      news: nuevasNoticias,
    };

    const nuevoEstadoStr = JSON.stringify(nuevoEstado);
    const hanCambiado = (datosAnterioresStr !== nuevoEstadoStr);

    if (hanCambiado) {
      newsDatabase.news = nuevasNoticias;
      console.log(`¡NOTICIAS ACTUALIZADAS! ${newsDatabase.news.length} noticias cargadas.`);
      datosAnterioresStr = nuevoEstadoStr;
      renderNews();
      saveToLocalStorage();
    }

    ultimaActualizacionTimestamp = Date.now();
    return true;

  } catch (error) {
    return false;
  }
}

async function actualizarNoticiasPeriodicamente() {
  await loadFromNpoint(true);
}

async function initializeData() {
  console.log("Cargando noticias iniciales...");

  if (window.API_DB && window.API_DB.trim() !== "") {
    const success = await loadFromNpoint();
    if (success) {
      datosAnterioresStr = JSON.stringify({
        news: newsDatabase.news
      });
      return;
    }
  }

  loadFromLocalStorage();

  if (newsDatabase.news.length === 0) {
    newsDatabase.news = [
      {
        id: 1,
        title: "Bienvenidos al Clan Serakdep MS",
        category: "announcement",
        content: "Bienvenida oficial al clan Serakdep MS.",
        excerpt: "Bienvenida oficial al clan Serakdep MS.",
        date: new Date().toISOString().split("T")[0],
        image: "",
        important: true,
        pinned: true,
        author: "Admin Principal",
      },
    ];
  }

  renderNews();
  datosAnterioresStr = JSON.stringify({
    news: newsDatabase.news
  });
}

function initEventListeners() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.dataset.filter;
      renderNews();
    });
  });
}

function renderNews() {
  const container = document.getElementById("news-container");

  let filteredNews = newsDatabase.news;
  if (currentFilter !== "all") {
    if (currentFilter === "important") {
      filteredNews = newsDatabase.news.filter((news) => news.important);
    } else {
      filteredNews = newsDatabase.news.filter((news) => news.category === currentFilter);
    }
  }


  filteredNews.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  container.innerHTML = "";

  if (filteredNews.length === 0) {
    container.innerHTML = `
      <div class="no-news">
        <i class="far fa-newspaper"></i>
        <h3>No hay noticias disponibles</h3>
        <p>Prueba con otro filtro o vuelve más tarde.</p>
      </div>
    `;
  } else {
    filteredNews.forEach((news) => {
      const category = CONFIG.CATEGORIES[news.category] || { text: "Noticia" };
      const date = new Date(news.date).toLocaleDateString("es-ES");

      const newsHTML = `
        <article class="news-card" data-id="${news.id}">
          <div class="news-card-header">
            <div class="news-meta-top">
              <div class="news-category">
                <span class="category-text">${category.text}</span>
              </div>
              <div class="news-date">
                <i class="far fa-calendar"></i>
                <span class="date-text">${date}</span>
              </div>
            </div>
            
            <div class="news-badges">
              ${news.important ? '<span class="badge-important">Importante</span>' : ""}
              ${news.pinned ? '<span class="badge-pinned">Fijado</span>' : ""}
              ${isNewNews(news.date) ? '<span class="badge-new">Nuevo</span>' : ""}
            </div>
          </div>
          
          <div class="news-card-content">
            <h3 class="news-title">${news.title}</h3>
            <div class="news-excerpt">${news.excerpt}</div>
          </div>
          
          <div class="news-card-footer">
            <button class="btn-read-more">
              Leer más
            </button>
          </div>
        </article>
      `;

      container.insertAdjacentHTML("beforeend", newsHTML);
    });

    addNewsEvents();
  }
}

function addNewsEvents() {
  document.querySelectorAll(".btn-read-more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const newsCard = this.closest(".news-card");
      const newsId = parseInt(newsCard.dataset.id);
      readMoreNews(newsId);
    });
  });
}

async function readMoreNews(id) {
  const news = newsDatabase.news.find((n) => n.id === id);
  if (!news) return;

  const category = CONFIG.CATEGORIES[news.category] || { text: "Noticia" };
  const date = new Date(news.date).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const modalHTML = `
    <div class="news-modal active" id="news-modal-blog">
      <div class="modal-overlay"></div>
      <div class="modal-content blog-style">
        <button class="close-modal" aria-label="Cerrar noticia">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-header">
          <div class="modal-meta">
            <span class="category-badge">${category.text}</span>
            <span class="date-badge"><i class="far fa-calendar"></i> ${date}</span>
          </div>
          <h2 class="modal-title">${news.title}</h2>
        </div>

        <div class="modal-image-wrapper">
          <img src="../../assets/img/clan-logo.webp" alt="Serakdep MS" class="modal-featured-image">
        </div>

        <div class="modal-body">
          ${news.content.split("\n").map((p) => `<p>${p}</p>`).join("")}
        </div>

        <div class="modal-footer">
          <span class="modal-author">Publicado por ${news.author}</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  if (!document.querySelector("#modal-blog-styles")) {
    const styles = document.createElement("style");
    styles.id = "modal-blog-styles";
    styles.textContent = `
      .news-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 5000;
        padding: 20px;
      }
      .news-modal.active {
        display: flex;
      }
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .modal-content.blog-style {
        position: relative;
        background: #ffffff;
        border-radius: 20px;
        max-width: 820px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 0;
        box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        animation: modalFadeIn 0.4s ease;
      }
      @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.95) translateY(20px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .modal-content.blog-style .close-modal {
        position: sticky;
        top: 15px;
        right: 15px;
        float: right;
        background: rgba(0,0,0,0.05);
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 1.3rem;
        cursor: pointer;
        color: #333;
        transition: background 0.2s ease, transform 0.2s ease;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 15px 0 0;
      }
      .modal-content.blog-style .close-modal:hover {
        background: rgba(0,0,0,0.1);
        transform: rotate(90deg);
      }
      .modal-header {
        padding: 20px 35px 0 35px;
      }
      .modal-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 12px;
      }
      .category-badge {
        background: #e8f5e9;
        color: #2d6a4f;
        padding: 6px 16px;
        border-radius: 30px;
        font-size: 0.85rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .date-badge {
        color: #666;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: #f5f5f5;
        padding: 6px 16px;
        border-radius: 30px;
      }
      .modal-title {
        font-size: 2rem;
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1.3;
        margin: 10px 0 20px 0;
        font-family: 'Poppins', sans-serif;
      }
      .modal-image-wrapper {
        padding: 0 35px;
        margin-bottom: 25px;
      }
      .modal-featured-image {
        width: 100%;
        max-height: 420px;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.08);
      }
      .modal-body {
        padding: 0 35px 30px 35px;
        font-size: 1.05rem;
        line-height: 1.8;
        color: #333;
      }
      .modal-body p {
        margin-bottom: 1.2rem;
      }
      .modal-footer {
        display: flex;
        justify-content: flex-end;
        padding: 20px 35px 30px 35px;
        border-top: 1px solid #eee;
        background: #fafafa;
        border-radius: 0 0 20px 20px;
      }
      .modal-author {
        color: #666;
        font-size: 0.9rem;
      }
      @media (max-width: 768px) {
        .news-modal {
          padding: 12px;
        }
        .modal-content.blog-style {
          width: 100%;
          max-width: 100%;
          border-radius: 12px;
          max-height: 92vh;
          margin: auto;
        }
        .modal-header {
          padding: 15px 20px 0 20px;
        }
        .modal-title {
          font-size: 1.5rem;
        }
        .modal-image-wrapper {
          padding: 0 20px;
        }
        .modal-body {
          padding: 0 20px 20px 20px;
          font-size: 0.95rem;
        }
        .modal-footer {
          padding: 15px 20px 20px 20px;
        }
        .modal-content.blog-style .close-modal {
          top: 10px;
          right: 10px;
          width: 38px;
          height: 38px;
          font-size: 1.1rem;
          margin: 10px 10px 0 0;
        }
      }
      html.dark-theme .modal-content.blog-style,
      body.dark-theme .modal-content.blog-style {
        background: #1a1f1c;
        color: #e0e0e0;
      }
      html.dark-theme .modal-title,
      body.dark-theme .modal-title {
        color: #f0e6c5;
      }
      html.dark-theme .modal-body,
      body.dark-theme .modal-body {
        color: #d5d5d5;
      }
      html.dark-theme .category-badge,
      body.dark-theme .category-badge {
        background: rgba(45, 106, 79, 0.3);
        color: #a8d5be;
      }
      html.dark-theme .date-badge,
      body.dark-theme .date-badge {
        background: rgba(255,255,255,0.05);
        color: #b5b5b5;
      }
      html.dark-theme .modal-footer,
      body.dark-theme .modal-footer {
        background: rgba(255,255,255,0.03);
        border-top-color: rgba(255,255,255,0.08);
      }
      html.dark-theme .modal-author,
      body.dark-theme .modal-author {
        color: #b5b5b5;
      }
      html.dark-theme .modal-content.blog-style .close-modal,
      body.dark-theme .modal-content.blog-style .close-modal {
        background: rgba(255,255,255,0.08);
        color: #d5d5d5;
      }
      html.dark-theme .modal-content.blog-style .close-modal:hover,
      body.dark-theme .modal-content.blog-style .close-modal:hover {
        background: rgba(255,255,255,0.15);
      }
    `;
    document.head.appendChild(styles);
  }

  const modal = document.querySelector(".news-modal.active");
  const closeBtn = modal.querySelector(".close-modal");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 300);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-overlay")) {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 300);
    }
  });
}

function isNewNews(dateString) {
  const newsDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - newsDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}

function saveToLocalStorage() {
  try {
    localStorage.setItem("serakdep_news", JSON.stringify(newsDatabase));
  } catch (e) { }
}

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem("serakdep_news");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.news && Array.isArray(parsed.news)) {
        newsDatabase.news = parsed.news;
      }
    }
  } catch (e) { }
}