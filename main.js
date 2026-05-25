// =====================
// NAVBAR SCROLL
// =====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =====================
// SCROLL REVEAL
// =====================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// =====================
// CAMBIO DE IDIOMA
// =====================
let currentLang = 'es';

const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
  translatePage(currentLang);
});

function translatePage(lang) {
  const elements = document.querySelectorAll('[data-es]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      // Si tiene HTML (como <br>), usar innerHTML
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });
}

// =====================
// FORMULARIO
// =====================
const form = document.getElementById('reservaForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = currentLang === 'es' ? '¡Reservación enviada! ✓' : 'Reservation sent! ✓';
  btn.style.background = 'var(--accent)';
  btn.style.color = 'var(--dark)';
  setTimeout(() => {
    btn.textContent = currentLang === 'es' ? 'Enviar Reservación' : 'Send Reservation';
    btn.style.background = '';
    btn.style.color = '';
    form.reset();
  }, 3000);
});

// =====================
// HAMBURGER MENU
// =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(13,17,23,0.95)';
  navLinks.style.padding = '1.5rem';
  navLinks.style.gap = '1rem';
});
