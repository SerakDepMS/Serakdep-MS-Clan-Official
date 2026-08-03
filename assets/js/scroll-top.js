/**
 * Serakdep MS — Botón "Volver Arriba"
 * Sistema de scroll compartido para páginas standalone (Multi-Gamer).
 */
(function () {
  // Crear botón
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Volver arriba');
  btn.setAttribute('id', 'scroll-top-btn');
  document.body.appendChild(btn);

  // Estilos inline (sin depender de CSS extra)
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '32px',
    right: '28px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)',
    border: '1px solid rgba(82,183,136,0.45)',
    color: '#ffffff',
    fontSize: '17px',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(0,0,0,0.45)',
    zIndex: '100001',
    transition: 'opacity 0.3s ease, transform 0.25s ease',
    opacity: '0',
    transform: 'scale(0.7) translateY(10px)',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  // Hover: resaltar
  btn.addEventListener('mouseenter', function () {
    this.style.background = 'linear-gradient(135deg, #52b788 0%, #2d6a4f 100%)';
    this.style.transform = 'scale(1.08)';
  });
  btn.addEventListener('mouseleave', function () {
    this.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)';
    this.style.transform = window.scrollY > 400 ? 'scale(1)' : 'scale(0.7) translateY(10px)';
  });

  // Mostrar / ocultar según posición de scroll
  function toggleBtn() {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.7) translateY(10px)';
      btn.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn();

  // Click: ir al tope suavemente
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
