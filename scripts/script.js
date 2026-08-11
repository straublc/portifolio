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
// TRAJETÓRIA — dots sincronizados com scroll snap
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const wrapper  = document.getElementById('trajScroll');
  const dotsContainer = document.getElementById('trajDots');
  if (!wrapper || !dotsContainer) return;

  const items = wrapper.querySelectorAll('.traj-scroll-item');

  // Cria dots
  items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Item ${i + 1}`);
    // Clicar no dot faz scroll suave até o item
    dot.addEventListener('click', () => {
      items[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  // IntersectionObserver: marca o dot do card mais visível
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const idx = Array.from(items).indexOf(entry.target);
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }
    });
  }, {
    root: wrapper,
    threshold: 0.5
  });

  items.forEach(item => observer.observe(item));
});
