const camisas = [
    {
        id: 1,
        nome: "Flamengo 2026",
        time: "Flamengo",
        preco: 150,
        imagem: ""
    },
    {
        id: 2,
        nome: "Corinthians 2026",
        time: "Corinthians",
        preco: 150,
        imagem: ""
    },
    {
        id: 3,
        nome: "Palmeiras 2026",
        time: "Palmeiras",
        preco: 150,
        imagem: ""
    },
    {
        id: 4,
        nome: "Santos 2026",
        time: "Santos",
        preco: 150,
        imagem: ""
    }
];

const catalogContainer = document.getElementById('catalog');

function criarCardHTML(camisa) {
    return `
        <div class = "card">
            <img src = "${camisa.imagem}" alt = "Camisa ${camisa.time}">
            <h2>${camisa.nome}</h2>
            <p class = "price">R$ ${camisa.preco.toFixed(2)}</p>
            <a href = "#" class = "whatsapp-btn">Pedir no Whatsapp</a>
        </div>
    `;    
}

function renderizarCatalogo(listaCamisas) {
    catalogContainer.innerHTML = listaCamisas.map(criarCardHTML).join('');
}

renderizarCatalogo(camisas);

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