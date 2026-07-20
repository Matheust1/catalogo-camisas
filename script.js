/* =====================================================================
   CONFIGURAÇÃO DA LOJA
   Troque o número abaixo pelo seu WhatsApp (código do país + DDD +
   número, só números, sem espaços/traços).
===================================================================== */
const NUMERO_WHATSAPP = "5592984033318";

/* =====================================================================
   CATEGORIAS
   Toda camisa precisa de uma "categoria" igual a uma destas 4 opções
   (respeitando maiúsculas/acentos exatamente como estão aqui):
   "Brasileiros", "Europeus", "Resto do Mundo", "Seleções"
===================================================================== */
const CATEGORIAS = ["Brasileiros", "Europeus", "Resto do Mundo", "Seleções"];

/* =====================================================================
   DADOS DAS CAMISAS
   Para adicionar uma camisa nova: copie um objeto do array abaixo,
   cole no final (antes do "];"), mude os valores e salve.

   "imagens" é uma LISTA de caminhos de fotos (frente, costas, detalhe,
   etc.). Coloque os arquivos dentro da pasta "images/" e escreva os
   caminhos aqui, por exemplo:
     imagens: ["images/flamengo-frente.jpg", "images/flamengo-costas.jpg"]

   Se ainda não tiver fotos, deixe "imagens: []" (lista vazia) — o site
   desenha uma camisa ilustrada automaticamente nas cores do time.
===================================================================== */
const camisas = [
  {
    id: 1,
    nome: "Flamengo 2026 I",
    time: "Flamengo",
    categoria: "Brasileiros",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 2,
    nome: "Corinthians 2026 I",
    time: "Corinthians",
    categoria: "Brasileiros",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 3,
    nome: "Palmeiras 2026 I",
    time: "Palmeiras",
    categoria: "Brasileiros",
    tamanhos: "M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 4,
    nome: "Santos 2026 I",
    time: "Santos",
    categoria: "Brasileiros",
    tamanhos: "P, M, G",
    imagens: [],
    disponivel: true,
  },
  {
    id: 5,
    nome: "São Paulo 2026 I",
    time: "São Paulo",
    categoria: "Brasileiros",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: false,
  },
  {
    id: 6,
    nome: "Vasco da Gama 2026 I",
    time: "Vasco da Gama",
    categoria: "Brasileiros",
    tamanhos: "M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 7,
    nome: "Grêmio 2026 I",
    time: "Grêmio",
    categoria: "Brasileiros",
    tamanhos: "P, M, G",
    imagens: [],
    disponivel: true,
  },
  {
    id: 8,
    nome: "Internacional 2026 I",
    time: "Internacional",
    categoria: "Brasileiros",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 9,
    nome: "Real Madrid 2026 I",
    time: "Real Madrid",
    categoria: "Europeus",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 10,
    nome: "Manchester City 2026 I",
    time: "Manchester City",
    categoria: "Europeus",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 11,
    nome: "Barcelona 2026 I",
    time: "Barcelona",
    categoria: "Europeus",
    tamanhos: "M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 12,
    nome: "River Plate 2026 I",
    time: "River Plate",
    categoria: "Resto do Mundo",
    tamanhos: "P, M, G",
    imagens: [],
    disponivel: true,
  },
  {
    id: 13,
    nome: "Boca Juniors 2026 I",
    time: "Boca Juniors",
    categoria: "Resto do Mundo",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 14,
    nome: "Brasil 2026 I",
    time: "Brasil",
    categoria: "Seleções",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
  {
    id: 15,
    nome: "Argentina 2026 I",
    time: "Argentina",
    categoria: "Seleções",
    tamanhos: "P, M, G, GG",
    imagens: [],
    disponivel: true,
  },
];

/* Cores de referência de cada time, usadas pra desenhar a camisa
   ilustrada quando não há foto real ainda. Time fora da lista usa
   o vermelho da loja como cor padrão. */
const CORES_TIME = {
  "Flamengo": ["#C8102E", "#1A1A1A"],
  "Corinthians": ["#1A1A1A", "#FFFFFF"],
  "Palmeiras": ["#0B6E36", "#FFFFFF"],
  "Santos": ["#1A1A1A", "#FFFFFF"],
  "São Paulo": ["#C8102E", "#0B1F5C"],
  "Vasco da Gama": ["#1A1A1A", "#FFFFFF"],
  "Grêmio": ["#0B1F5C", "#1A1A1A"],
  "Internacional": ["#C8102E", "#FFFFFF"],
  "Real Madrid": ["#FFFFFF", "#0B1F5C"],
  "Manchester City": ["#6CABDD", "#1A1A1A"],
  "Barcelona": ["#A50044", "#004D98"],
  "River Plate": ["#FFFFFF", "#C8102E"],
  "Boca Juniors": ["#0B1F5C", "#FFC72C"],
  "Brasil": ["#0B6E36", "#F7D117"],
  "Argentina": ["#75AADB", "#FFFFFF"],
};

/* =====================================================================
   ELEMENTOS DA PÁGINA
===================================================================== */
const catalogContainer = document.getElementById("catalog");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterChips = document.getElementById("filter-chips");
const themeToggle = document.getElementById("theme-toggle");
const footerWhatsapp = document.getElementById("footer-whatsapp");
const html = document.documentElement;

const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalMainImage = document.getElementById("modal-main-image");
const modalThumbs = document.getElementById("modal-thumbs");
const modalPrev = document.getElementById("modal-prev");
const modalNext = document.getElementById("modal-next");
const modalTeam = document.getElementById("modal-team");
const modalTitle = document.getElementById("modal-title");
const modalSizes = document.getElementById("modal-sizes");
const modalWhatsapp = document.getElementById("modal-whatsapp");

const cartFab = document.getElementById("cart-fab");
const cartCount = document.getElementById("cart-count");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartItemsContainer = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartCheckout = document.getElementById("cart-checkout");

/* estado atual dos filtros */
let filtroCategoria = "Todos";
let termoBusca = "";

/* estado atual do modal aberto */
let camisaAberta = null;
let indiceImagemAtual = 0;

/* itens do carrinho: lista de { id, quantidade } */
let carrinho = [];

/* =====================================================================
   WHATSAPP
===================================================================== */
function criarLinkWhatsapp(mensagem) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

/* =====================================================================
   CAMISA ILUSTRADA (fallback sem foto real)
===================================================================== */
function criarJerseySVG(camisa) {
  const [corPrincipal, corSecundaria] = CORES_TIME[camisa.time] || ["#E10600", "#1A1A1A"];
  const inicial = camisa.time.charAt(0).toUpperCase();

  return `
    <svg class="jersey-art" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Camisa ${camisa.time}">
      <rect width="200" height="200" fill="${corPrincipal}" opacity="0.12"></rect>
      <path d="M70 30 L45 45 L20 75 L40 95 L55 82 L55 175 L145 175 L145 82 L160 95 L180 75 L155 45 L130 30
               C130 45 115 55 100 55 C85 55 70 45 70 30 Z"
            fill="${corPrincipal}" stroke="${corSecundaria}" stroke-width="4"></path>
      <path d="M70 30 L45 45 L20 75 L40 95 L55 82" fill="none" stroke="${corSecundaria}" stroke-width="4"></path>
      <path d="M130 30 L155 45 L180 75 L160 95 L145 82" fill="none" stroke="${corSecundaria}" stroke-width="4"></path>
      <text x="100" y="130" font-family="Bebas Neue, sans-serif" font-size="46" fill="${corSecundaria}" text-anchor="middle">${inicial}</text>
    </svg>
  `;
}

/* Retorna a lista de imagens de uma camisa pronta pra exibir.
   Se não houver fotos reais, devolve uma única "imagem" ilustrada. */
function imagensParaExibir(camisa) {
  if (camisa.imagens && camisa.imagens.length > 0) {
    return camisa.imagens.map((src) => ({ tipo: "foto", src }));
  }
  return [{ tipo: "ilustracao" }];
}

function htmlDaImagem(camisa, item) {
  if (item.tipo === "foto") {
    return `<img src="${item.src}" alt="Camisa ${camisa.time}" loading="lazy">`;
  }
  return criarJerseySVG(camisa);
}

/* =====================================================================
   RENDERIZAÇÃO DOS CARDS
===================================================================== */
function criarCardHTML(camisa) {
  const primeiraImagem = imagensParaExibir(camisa)[0];
  const imagemHTML = htmlDaImagem(camisa, primeiraImagem);

  const botaoAcao = camisa.disponivel
    ? `<button class="whatsapp-btn" data-add-id="${camisa.id}">Adicionar ao carrinho</button>`
    : `<button class="whatsapp-btn disabled" disabled>Esgotado</button>`;

  return `
    <article class="card ${camisa.disponivel ? "" : "unavailable"}">
      <button class="card-image" data-id="${camisa.id}" aria-label="Ver mais fotos de ${camisa.nome}">
        <span class="card-badge">${camisa.disponivel ? "Disponível" : "Esgotado"}</span>
        ${imagemHTML}
      </button>
      <div class="card-body">
        <span class="card-team">${camisa.time}</span>
        <h2 class="card-name">${camisa.nome}</h2>
        <span class="card-sizes">Tamanhos: ${camisa.tamanhos}</span>
        ${botaoAcao}
      </div>
    </article>
  `;
}

function camisasFiltradas() {
  return camisas.filter((camisa) => {
    const passaCategoria = filtroCategoria === "Todos" || camisa.categoria === filtroCategoria;
    const passaBusca =
      camisa.time.toLowerCase().includes(termoBusca.toLowerCase()) ||
      camisa.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return passaCategoria && passaBusca;
  });
}

function renderizarCatalogo() {
  const lista = camisasFiltradas();
  catalogContainer.innerHTML = lista.map(criarCardHTML).join("");
  emptyState.hidden = lista.length > 0;

  catalogContainer.querySelectorAll(".card-image").forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = Number(botao.dataset.id);
      const camisa = camisas.find((c) => c.id === id);
      abrirModal(camisa);
    });
  });

  catalogContainer.querySelectorAll("[data-add-id]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = Number(botao.dataset.addId);
      adicionarAoCarrinho(id);
    });
  });
}

/* =====================================================================
   FILTROS POR CATEGORIA (chips)
===================================================================== */
function renderizarChips() {
  const opcoes = ["Todos", ...CATEGORIAS];

  filterChips.innerHTML = opcoes
    .map(
      (categoria) => `
        <button class="chip ${categoria === filtroCategoria ? "active" : ""}" data-categoria="${categoria}">
          ${categoria}
        </button>
      `
    )
    .join("");

  filterChips.querySelectorAll(".chip").forEach((botao) => {
    botao.addEventListener("click", () => {
      filtroCategoria = botao.dataset.categoria;
      renderizarChips();
      renderizarCatalogo();
    });
  });
}

/* =====================================================================
   BUSCA
===================================================================== */
searchInput.addEventListener("input", (evento) => {
  termoBusca = evento.target.value;
  renderizarCatalogo();
});

/* =====================================================================
   MODAL — página de detalhes com galeria de fotos
===================================================================== */
function abrirModal(camisa) {
  camisaAberta = camisa;
  indiceImagemAtual = 0;

  modalTeam.textContent = camisa.time;
  modalTitle.textContent = camisa.nome;
  modalSizes.textContent = `Tamanhos: ${camisa.tamanhos}`;

  if (camisa.disponivel) {
    modalWhatsapp.textContent = "Adicionar ao carrinho";
    modalWhatsapp.classList.remove("disabled");
    modalWhatsapp.disabled = false;
    modalWhatsapp.onclick = () => adicionarAoCarrinho(camisa.id);
  } else {
    modalWhatsapp.textContent = "Esgotado";
    modalWhatsapp.classList.add("disabled");
    modalWhatsapp.disabled = true;
    modalWhatsapp.onclick = null;
  }

  renderizarThumbs();
  mostrarImagem(0);

  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
  camisaAberta = null;
}

function mostrarImagem(indice) {
  const imagens = imagensParaExibir(camisaAberta);
  indiceImagemAtual = (indice + imagens.length) % imagens.length;

  modalMainImage.innerHTML = htmlDaImagem(camisaAberta, imagens[indiceImagemAtual]);

  modalThumbs.querySelectorAll(".modal-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === indiceImagemAtual);
  });
}

function renderizarThumbs() {
  const imagens = imagensParaExibir(camisaAberta);

  const mostraNavegacao = imagens.length > 1;
  modalThumbs.hidden = !mostraNavegacao;
  modalPrev.hidden = !mostraNavegacao;
  modalNext.hidden = !mostraNavegacao;

  modalThumbs.innerHTML = imagens
    .map(
      (item, indice) => `
        <button class="modal-thumb" data-indice="${indice}">
          ${htmlDaImagem(camisaAberta, item)}
        </button>
      `
    )
    .join("");

  modalThumbs.querySelectorAll(".modal-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mostrarImagem(Number(thumb.dataset.indice));
    });
  });
}

modalClose.addEventListener("click", fecharModal);

modalOverlay.addEventListener("click", (evento) => {
  if (evento.target === modalOverlay) {
    fecharModal();
  }
});

modalPrev.addEventListener("click", () => mostrarImagem(indiceImagemAtual - 1));
modalNext.addEventListener("click", () => mostrarImagem(indiceImagemAtual + 1));

document.addEventListener("keydown", (evento) => {
  if (!modalOverlay.hidden) {
    if (evento.key === "Escape") fecharModal();
    if (evento.key === "ArrowLeft") mostrarImagem(indiceImagemAtual - 1);
    if (evento.key === "ArrowRight") mostrarImagem(indiceImagemAtual + 1);
  }

  if (!cartOverlay.hidden && evento.key === "Escape") {
    fecharCarrinho();
  }
});

/* =====================================================================
   CARRINHO — vários itens, quantidades e mensagem consolidada
===================================================================== */
function carregarCarrinho() {
  try {
    const salvo = localStorage.getItem("carrinho");
    carrinho = salvo ? JSON.parse(salvo) : [];
  } catch (erro) {
    carrinho = [];
  }

  sanitizarCarrinho();
}

/* Remove do carrinho qualquer item inválido: id que não existe mais no
   catálogo, quantidade que não é um número inteiro positivo, ou
   entradas duplicadas (soma as quantidades nesse caso). Protege contra
   dados corrompidos ou editados manualmente no localStorage. */
function sanitizarCarrinho() {
  if (!Array.isArray(carrinho)) {
    carrinho = [];
    return;
  }

  const somasPorId = new Map();

  carrinho.forEach((item) => {
    const id = Number(item && item.id);
    const quantidade = Number(item && item.quantidade);
    const camisaExiste = camisas.some((c) => c.id === id);
    const quantidadeValida = Number.isInteger(quantidade) && quantidade > 0;

    if (!camisaExiste || !quantidadeValida) return;

    somasPorId.set(id, (somasPorId.get(id) || 0) + quantidade);
  });

  carrinho = Array.from(somasPorId, ([id, quantidade]) => ({ id, quantidade }));
}

function salvarCarrinho() {
  sanitizarCarrinho();
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id, quantidade = 1) {
  const camisaExiste = camisas.some((c) => c.id === id);
  if (!camisaExiste || !Number.isInteger(quantidade) || quantidade <= 0) return;

  const item = carrinho.find((i) => i.id === id);

  if (item) {
    item.quantidade += quantidade;
  } else {
    carrinho.push({ id, quantidade });
  }

  salvarCarrinho();
  atualizarContadorCarrinho();

  if (!cartOverlay.hidden) {
    renderizarCarrinho();
  }
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter((i) => i.id !== id);
  salvarCarrinho();
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find((i) => i.id === id);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removerDoCarrinho(id);
    return;
  }

  salvarCarrinho();
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

function quantidadeTotalCarrinho() {
  return carrinho.reduce((total, item) => total + item.quantidade, 0);
}

function atualizarContadorCarrinho() {
  const total = quantidadeTotalCarrinho();
  cartCount.textContent = total;
  cartCount.hidden = total === 0;

  cartCount.classList.remove("bump");
  // força o navegador a "esquecer" a animação anterior antes de reaplicar
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
}

function itemDeCarrinhoHTML(item) {
  const camisa = camisas.find((c) => c.id === item.id);
  if (!camisa) return "";

  const imagem = htmlDaImagem(camisa, imagensParaExibir(camisa)[0]);

  return `
    <div class="cart-item">
      <div class="cart-item-image">${imagem}</div>
      <div class="cart-item-info">
        <span class="card-team">${camisa.time}</span>
        <span class="cart-item-name">${camisa.nome}</span>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-qty-id="${camisa.id}" data-delta="-1" aria-label="Diminuir quantidade">−</button>
        <span class="qty-value">${item.quantidade}</span>
        <button class="qty-btn" data-qty-id="${camisa.id}" data-delta="1" aria-label="Aumentar quantidade">+</button>
      </div>
      <button class="cart-item-remove" data-remove-id="${camisa.id}" aria-label="Remover ${camisa.nome}">&times;</button>
    </div>
  `;
}

function renderizarCarrinho() {
  cartEmpty.hidden = carrinho.length > 0;
  cartItemsContainer.innerHTML = carrinho.map(itemDeCarrinhoHTML).join("");

  cartItemsContainer.querySelectorAll("[data-qty-id]").forEach((botao) => {
    botao.addEventListener("click", () => {
      alterarQuantidade(Number(botao.dataset.qtyId), Number(botao.dataset.delta));
    });
  });

  cartItemsContainer.querySelectorAll("[data-remove-id]").forEach((botao) => {
    botao.addEventListener("click", () => {
      removerDoCarrinho(Number(botao.dataset.removeId));
    });
  });

  const temItens = carrinho.length > 0;
  cartCheckout.classList.toggle("disabled", !temItens);
  cartCheckout.href = temItens ? mensagemPedidoCarrinho() : "#";
}

function mensagemPedidoCarrinho() {
  const linhas = carrinho.map((item, indice) => {
    const camisa = camisas.find((c) => c.id === item.id);
    return `${indice + 1}) ${item.quantidade}x ${camisa.nome}`;
  });

  const texto = [
    "Olá! Gostaria de fazer o seguinte pedido:",
    "",
    "*Pedido — Eleven Supply*",
    ...linhas,
    "",
    `Total de itens: ${quantidadeTotalCarrinho()}`,
    "",
    "Aguardo confirmação de valores e forma de pagamento. Obrigado!",
  ].join("\n");

  return criarLinkWhatsapp(texto);
}

function abrirCarrinho() {
  renderizarCarrinho();
  cartOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharCarrinho() {
  cartOverlay.hidden = true;
  document.body.style.overflow = "";
}

cartFab.addEventListener("click", abrirCarrinho);
cartClose.addEventListener("click", fecharCarrinho);

cartOverlay.addEventListener("click", (evento) => {
  if (evento.target === cartOverlay) {
    fecharCarrinho();
  }
});

cartCheckout.addEventListener("click", (evento) => {
  if (carrinho.length === 0) {
    evento.preventDefault();
    return;
  }

  // dá um instante pro navegador abrir o link do WhatsApp antes de esvaziar
  setTimeout(() => {
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
    fecharCarrinho();
  }, 300);
});

/* =====================================================================
   TEMA CLARO/ESCURO
===================================================================== */
function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("tema", theme);
}

const temaSalvo = localStorage.getItem("tema");
const preferenciaSistema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(temaSalvo || preferenciaSistema);

themeToggle.addEventListener("click", () => {
  const temaAtual = html.getAttribute("data-theme");
  setTheme(temaAtual === "dark" ? "light" : "dark");
});

/* =====================================================================
   INICIALIZAÇÃO
===================================================================== */
footerWhatsapp.href = criarLinkWhatsapp("Olá! Vim pelo catálogo e gostaria de mais informações.");
carregarCarrinho();
atualizarContadorCarrinho();
renderizarChips();
renderizarCatalogo();