// Theme toggle & year
const btn = document.getElementById('themeToggle');
btn?.addEventListener('click', () => {
  const html = document.documentElement;
  html.setAttribute('data-bs-theme', html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
  btn.innerHTML = html.getAttribute('data-bs-theme') === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
});
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
