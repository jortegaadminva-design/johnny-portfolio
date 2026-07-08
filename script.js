// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile nav after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Scroll-spy: highlight active nav link based on section in view
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(section => spy.observe(section));

// Tool & store logo fallback: if a brand icon fails to load, swap it for a text badge
document.querySelectorAll('.tool-logo[data-fallback], .store-logo[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    const fallback = document.createElement('span');
    fallback.className = img.classList.contains('store-logo') ? 'store-logo tool-fallback' : 'tool-logo tool-fallback';
    fallback.style.width = img.classList.contains('store-logo') ? '20px' : '';
    fallback.style.height = img.classList.contains('store-logo') ? '20px' : '';
    fallback.style.fontSize = img.classList.contains('store-logo') ? '8px' : '';
    fallback.textContent = img.getAttribute('data-fallback');
    img.replaceWith(fallback);
  });
});
