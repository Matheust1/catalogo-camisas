const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function  setTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('tema', theme);
}

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    setTheme(temaSalvo);
}

themeToggle.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    setTheme(novoTema);
});