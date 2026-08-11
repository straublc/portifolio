// ============================================
// MENU MOBILE — DRAWER LATERAL
// ============================================
const openBtn      = document.getElementById('openMenu');
const closeBtn     = document.getElementById('closeMenu');
const menuOverlay  = document.getElementById('menuOverlay');
const menuBackdrop = document.getElementById('menuBackdrop');
const overlayLinks = document.querySelectorAll('#menuOverlay .overlay-link');

function openMenu() {
  menuOverlay.classList.add('active');
  menuOverlay.classList.remove('inactive');
  menuOverlay.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');
  openBtn.classList.add('hamburger--active');
  document.documentElement.style.overflow = 'hidden'; // trava scroll no html
}

function closeMenu() {
  menuOverlay.classList.remove('active');
  menuOverlay.classList.add('inactive');
  menuOverlay.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
  openBtn.classList.remove('hamburger--active');
  document.documentElement.style.overflow = '';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuBackdrop.addEventListener('click', closeMenu);
overlayLinks.forEach(link => link.addEventListener('click', closeMenu));

// Fecha com Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOverlay.classList.contains('active')) closeMenu();
});

// ============================================
// NEUTRALIZA interferência do Bootstrap nos modais
// Bootstrap 5 injeta overflow:hidden e padding-right inline no body
// ao abrir modais — isso cria scrollbar duplo. Removemos via evento.
// ============================================
document.addEventListener('show.bs.modal', () => {
  // Aguarda o Bootstrap aplicar os estilos e sobrescreve imediatamente
  const observer = new MutationObserver(() => {
    document.body.style.setProperty('overflow', 'visible', 'important');
    document.body.style.setProperty('padding-right', '0px', 'important');
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
  // Para de observar após 300ms (tempo suficiente para o modal abrir)
  setTimeout(() => observer.disconnect(), 300);
});

document.addEventListener('hidden.bs.modal', () => {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
});

// ============================================
// AOS INIT
// ============================================
AOS.init({ once: true, offset: 60 });

// ============================================
// NAVBAR — scroll shrink sutil
// ============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(10, 10, 15, 0.97)';
  } else {
    nav.style.background = 'rgba(10, 10, 15, 0.85)';
  }
});

// ============================================
// TRAJETÓRIA — carrossel mobile com dots
// ============================================
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.trajetoria-card');
  const dotsContainer = document.querySelector('.dots-container');
  if (!dotsContainer || !cards.length) return;

  let currentIndex = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Card ${i + 1}`);
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  function updateCarousel() {
    cards.forEach((card, i) => card.classList.toggle('active', i === currentIndex));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  function checkViewport() {
    if (window.innerWidth <= 767) {
      if (currentIndex >= cards.length) currentIndex = 0;
      updateCarousel();
    } else {
      cards.forEach(card => {
        card.classList.add('active');
        card.style.opacity = '1';
      });
    }
  }

  window.addEventListener('resize', debounce(checkViewport, 150));
  checkViewport();

  // Swipe mobile
  let touchStartX = 0;
  dotsContainer.parentElement.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  dotsContainer.parentElement.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && currentIndex < cards.length - 1) currentIndex++;
      else if (diff < 0 && currentIndex > 0) currentIndex--;
      updateCarousel();
    }
  }, { passive: true });
});
