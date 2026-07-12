# Eleven Supply — Catálogo de Camisas de Time

Catálogo online (site estático, sem banco de dados) para visualização de
camisas de time. Não há carrinho nem checkout: o pedido é combinado
diretamente pelo WhatsApp, através de um botão em cada camisa.

🔗 **Site no ar:** _(cole aqui o link depois do deploy)_

## Funcionalidades

- Catálogo responsivo (grid que se adapta a qualquer tela)
- Modo claro/escuro, com a preferência salva no navegador
- Busca por nome do time
- Filtro por categoria (Brasileiros, Europeus, Resto do Mundo, Seleções)
- Clique numa camisa abre uma página de detalhes com galeria de fotos
  (vários ângulos, com setas e miniaturas)
- Botão "Pedir no WhatsApp" com mensagem pré-preenchida por camisa
- Camisas sem foto real ainda exibem uma ilustração gerada automaticamente
  nas cores do time

## Estrutura do projeto

```
catalogo-camisas/
├── index.html      → estrutura da página
├── style.css        → visual (cores, layout, tema claro/escuro)
├── script.js         → dados das camisas + toda a lógica
├── images/            → fotos reais das camisas (opcional)
└── README.md
```

## Como adicionar ou remover uma camisa

Todo o catálogo é controlado por um único lugar: o array `camisas`, no
topo do arquivo `script.js`.

**Para adicionar uma camisa**, copie um bloco como este e cole dentro do
array (antes do `];`), ajustando os valores:

```javascript
{
  id: 16,
  nome: "Botafogo 2026 I",
  time: "Botafogo",
  categoria: "Brasileiros",
  preco: 229.9,
  tamanhos: "P, M, G",
  imagens: [],
  disponivel: true,
},
```

- `id`: um número que ainda não foi usado por nenhuma outra camisa
- `nome`: nome que aparece no card
- `time`: nome do time (usado na busca)
- `categoria`: uma destas 4 opções, exatamente como escrito (usada nos
  filtros do topo): `"Brasileiros"`, `"Europeus"`, `"Resto do Mundo"`,
  `"Seleções"`
- `preco`: número, use ponto (não vírgula) para casas decimais
- `tamanhos`: texto livre, ex: `"P, M, G, GG"`
- `imagens`: uma **lista** de caminhos de foto (pode ter quantas quiser
  — frente, costas, detalhe da gola, etc.). Deixe `[]` (lista vazia) se
  ainda não tiver fotos — nesse caso o site desenha uma camisa ilustrada
  automaticamente
- `disponivel`: `true` ou `false` — quando `false`, o card aparece
  esmaecido com selo "Esgotado" e o botão de pedido fica desativado

Se quiser adicionar um time novo que ainda não existe no site, também
vale a pena incluir as cores dele no objeto `CORES_TIME` (logo abaixo do
array `camisas`), pra ilustração automática usar as cores certas.

**Para remover uma camisa**, apague o bloco `{ ... }` correspondente.

**Para usar fotos reais**, coloque os arquivos dentro da pasta `images/`
e liste os caminhos em `imagens`, por exemplo:

```javascript
imagens: [
  "images/flamengo-frente.jpg",
  "images/flamengo-costas.jpg",
  "images/flamengo-detalhe.jpg",
],
```

Com 2 ou mais fotos, a página de detalhes mostra setas de navegação e
miniaturas clicáveis automaticamente. Com 1 foto só (ou nenhuma), essa
navegação fica escondida sozinha — não precisa configurar nada a mais.

> ⚠️ Não use links de sites como Yupoo direto dentro de `imagens` — a
> maioria bloqueia o uso da imagem fora do próprio site (hotlink
> protection). Baixe a foto e coloque na pasta `images/`.

## Como colocar seu WhatsApp real

No topo do `script.js`, troque o valor de `NUMERO_WHATSAPP` pelo seu
número, no formato **código do país + DDD + número**, só números:

```javascript
const NUMERO_WHATSAPP = "5592900000000";
```

## Publicando as alterações

Depois de editar o `script.js` (ou qualquer outro arquivo):

```bash
git add .
git commit -m "feat: adiciona camisa do Botafogo"
git push
```

Se o site estiver publicado no Vercel ou Netlify conectado a este
repositório do GitHub, o site atualiza sozinho a cada `git push` — não
precisa fazer mais nada.

## Cores do design

| Uso              | Cor       |
|-------------------|-----------|
| Vermelho principal | `#E10600` |
| Vermelho escuro    | `#A30000` |
| Fundo (claro)      | `#F6F4F1` |
| Fundo (escuro)     | `#101114` |

## Tecnologias

HTML, CSS e JavaScript puro — sem frameworks, sem build step, sem
dependências externas (além das fontes do Google Fonts).
