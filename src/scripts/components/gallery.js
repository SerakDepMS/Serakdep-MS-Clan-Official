
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('[data-gallery-item]');
  if (!galleryItems.length) return;


  let modal = document.querySelector('.gallery-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
      <div class="gallery-modal-content">
        <div class="gallery-modal-header">
          <h3 class="gallery-modal-title"></h3>
          <button class="gallery-modal-close" aria-label="Cerrar"><i class="fas fa-times"></i></button>
        </div>
        <div class="gallery-modal-body">
          <div class="gallery-modal-image-container">
            <div class="gallery-modal-image"></div>
          </div>
          <div class="gallery-modal-info">
            <div class="gallery-modal-role"></div>
            <div class="gallery-modal-description"></div>
            <div class="gallery-modal-meta"></div>
            <div class="gallery-modal-badge"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalElement = modal;
  const modalTitle = modalElement.querySelector('.gallery-modal-title');
  const modalRole = modalElement.querySelector('.gallery-modal-role');
  const modalDesc = modalElement.querySelector('.gallery-modal-description');
  const modalMeta = modalElement.querySelector('.gallery-modal-meta');
  const modalBadge = modalElement.querySelector('.gallery-modal-badge');
  const modalImageContainer = modalElement.querySelector('.gallery-modal-image');
  const closeBtn = modalElement.querySelector('.gallery-modal-close');

  function openModal(itemData) {
    modalImageContainer.innerHTML = '';
    modalMeta.innerHTML = '';

    modalTitle.textContent = itemData.title || 'Sin título';
    modalRole.innerHTML = itemData.role 
      ? `<i class="fas fa-${itemData.badgeIcon || 'image'}"></i> ${itemData.role}` 
      : '';
    modalDesc.textContent = itemData.description || '';

    if (itemData.date) {
      const dateSpan = document.createElement('span');
      dateSpan.innerHTML = `<i class="far fa-calendar"></i> ${itemData.date}`;
      modalMeta.appendChild(dateSpan);
    }
    if (itemData.tags) {
      const tagsSpan = document.createElement('span');
      tagsSpan.innerHTML = `<i class="fas fa-tags"></i> ${itemData.tags}`;
      modalMeta.appendChild(tagsSpan);
    }

    if (itemData.badge) {
      modalBadge.innerHTML = `<i class="fas fa-${itemData.badgeIcon || 'tag'}"></i> ${itemData.badge}`;
      modalBadge.style.display = 'inline-flex';
    } else {
      modalBadge.style.display = 'none';
    }

    if (itemData.image && itemData.image !== '#') {
      const img = document.createElement('img');
      img.src = itemData.image;
      img.alt = itemData.title;
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/600x400/2d6a4f/ffffff?text=Imagen+no+disponible';
      };
      modalImageContainer.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.style.padding = '40px';
      placeholder.style.textAlign = 'center';
      placeholder.style.color = '#6c757d';
      placeholder.innerHTML = '<i class="fas fa-image fa-3x"></i><p>Imagen no disponible</p>';
      modalImageContainer.appendChild(placeholder);
    }

    modalElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalElement.classList.add('closing');
    setTimeout(() => {
      modalElement.classList.remove('active', 'closing');
      document.body.style.overflow = '';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalElement.classList.contains('active')) {
      closeModal();
    }
  });

  galleryItems.forEach(card => {
    const zoomBtn = card.querySelector('.gallery-zoom');
    const rawData = card.getAttribute('data-gallery-item');
    let itemData = {};
    try {
      itemData = JSON.parse(rawData);
    } catch (e) {
      console.warn('Error parseando data-gallery-item', e);
      return;
    }

    const openHandler = (e) => {
      e.stopPropagation();
      openModal(itemData);
    };

    if (zoomBtn) {
      zoomBtn.addEventListener('click', openHandler);
    } else {
      card.style.cursor = 'pointer';
      card.addEventListener('click', openHandler);
    }
  });
});