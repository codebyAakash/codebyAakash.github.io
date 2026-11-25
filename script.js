// Theme (remembers choice, defaults to light)
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;
document.getElementById('theme').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// Count-up for experience
const el = document.getElementById('count');
const to = +el.dataset.to;
let n = 0;
const t = setInterval(() => { el.textContent = ++n; if (n >= to) clearInterval(t); }, 350);

// Cursor glow
const glow = document.querySelector('.glow');
addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

// 3D tilt on card (desktop only)
const card = document.getElementById('card');
if (matchMedia('(hover:hover)').matches) {
  card.parentElement.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  });
  card.parentElement.addEventListener('pointerleave', () => card.style.transform = '');
}

document.getElementById('year').textContent = new Date().getFullYear();
