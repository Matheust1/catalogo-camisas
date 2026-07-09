const camisas = [
    {
        id: 1,
        nome: "Flamengo 2026",
        time: "Flamengo",
        preco: 150,
        imagem: "https://photo.yupoo.com/abcd1234fei/446764bd/d89aacbb.jpg"
    },
    {
        id: 2,
        nome: "Corinthians 2026",
        time: "Corinthians",
        preco: 150,
        imagem: "https://photo.yupoo.com/abcd1234fei/953fec00/c7c17d02.jpg"
    },
    {
        id: 3,
        nome: "Palmeiras 2026",
        time: "Palmeiras",
        preco: 150,
        imagem: "https://photo.yupoo.com/abcd1234fei/5009b5b2/80803cdd.jpg"
    },
    {
        id: 4,
        nome: "Santos 2026",
        time: "Santos",
        preco: 150,
        imagem: "https://photo.yupoo.com/abcd1234fei/868620d2/7c2771d1.jpg"
    }
];

const catalogContainer = document.getElementById('catalog');
const NUMERO_WHATSAPP = "5592984033318";
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function criarCardHTML(camisa) {
    return `
        <div class = "card">
            <img src = "${camisa.imagem}" alt = "Camisa ${camisa.time}">
            <h2>${camisa.nome}</h2>
            <p class = "price">R$ ${camisa.preco.toFixed(2)}</p>
            <a href = "${criarLinkWhatsapp(camisa)}" class = "whatsapp-btn" target="_blank" rel="noopener noreferrer">
                Pedir no Whatsapp
            </a>
        </div>
    `;    
}

function renderizarCatalogo(listaCamisas) {
    catalogContainer.innerHTML = listaCamisas.map(criarCardHTML).join('');
}

renderizarCatalogo(camisas);

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

function criarLinkWhatsapp(camisa) {
    const mensagem = `Olá, tenho interesse na camisa: ${camisa.nome}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    return `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;
}