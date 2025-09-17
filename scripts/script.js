const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinks = document.querySelectorAll('#menuOverlay .nav-link');

menuOverlay.classList.add('inactive'); 

openBtn.addEventListener('click', () => {
  menuOverlay.classList.add('active');
  menuOverlay.classList.remove('inactive');
});

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  menuOverlay.classList.add('inactive');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuOverlay.classList.add('inactive');
  });
});

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

AOS.init();

// Carrossel - Trajetória
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".trajetoria-card");
  const dotsContainer = document.querySelector(".dots-container");
  if (!dotsContainer) return; // Segurança caso o container não exista

  let currentIndex = 0;

  // Cria os dots dinamicamente conforme número de cards
  cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === currentIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function checkViewport() {
    if (window.innerWidth <= 767) {
      currentIndex = 0;  // Reseta para o primeiro card no modo mobile
      updateCarousel();
      dotsContainer.style.display = "flex";
    } else {
      // Desktop: mostrar todos os cards
      cards.forEach(card => card.classList.add("active"));
      dotsContainer.style.display = "none";
    }
  }

  window.addEventListener("resize", debounce(checkViewport, 150));

  checkViewport();
});
