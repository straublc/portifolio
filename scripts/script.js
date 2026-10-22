// ============================================
// MENU MOBILE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const menu       = document.getElementById('menu');

function setMenu(open) {
  menu.classList.toggle('is-open', open);
  menu.inert = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('is-locked', open);
  if (open) menu.querySelector('a')?.focus({ preventScroll: true });
}

menuToggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

// ============================================
// LAYOUT DESKTOP
// Fecha o menu e deixa a trajetória toda aberta (cards em grade);
// no mobile volta a ser lista expansível com só o primeiro aberto.
// ============================================
const desktop       = matchMedia('(min-width: 1024px)');
const timelineItems = document.querySelectorAll('.timeline__item');

function syncLayout() {
  if (desktop.matches) setMenu(false);
  timelineItems.forEach((item, i) => {
    item.open = desktop.matches || i === 0;
    item.querySelector('summary').tabIndex = desktop.matches ? -1 : 0;
  });
}

desktop.addEventListener('change', syncLayout);
syncLayout();

// ============================================
// TEMA CLARO / ESCURO
// Sem escolha salva, segue o sistema.
// ============================================
const root        = document.documentElement;
const systemDark  = matchMedia('(prefers-color-scheme: dark)');
const themeColors = { light: '#ffffff', dark: '#000000' };

const currentTheme = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');

function syncThemeColor() {
  const forced = root.dataset.theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    const media = meta.media.includes('dark') ? 'dark' : 'light';
    meta.content = themeColors[forced || media];
  });
}

document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    // Se a escolha coincide com o sistema, volta a seguir o sistema
    if (next === (systemDark.matches ? 'dark' : 'light')) {
      delete root.dataset.theme;
      try { localStorage.removeItem('theme'); } catch (e) {}
    } else {
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    }
    syncThemeColor();
  });
});

syncThemeColor();

// ============================================
// ANIMAÇÃO DE ENTRADA
// ============================================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// LINK ATIVO NA NAVEGAÇÃO
// ============================================
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.toggleAttribute('aria-current', link.hash === `#${entry.target.id}`);
      if (link.hasAttribute('aria-current')) link.setAttribute('aria-current', 'true');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// ============================================
// ANO NO RODAPÉ
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
