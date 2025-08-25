document.getElementById('year').textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

const navLinks = document.querySelectorAll('#navContent .nav-link');
const navCollapse = document.getElementById('navContent');
navLinks.forEach(link => link.addEventListener('click', () => {
  const isShown = navCollapse.classList.contains('show');
  if (isShown) new bootstrap.Collapse(navCollapse).hide();
}));

const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
if (themeBtn) {
  const updateIcon = () => {
    themeBtn.innerHTML = root.classList.contains('light')
      ? '<i class="bi bi-brightness-high"></i>'
      : '<i class="bi bi-moon"></i>';
  };
  updateIcon();
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateIcon();
  });
}
