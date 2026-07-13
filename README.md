# Eleven Supply

Catálogo digital de camisas de time, com pedidos combinados diretamente
pelo WhatsApp. Sem contas de usuário, sem carrinho, sem checkout — só
uma vitrine rápida de navegar, com o fechamento do pedido acontecendo
na conversa.

🔗 **Site no ar:** _(link após o deploy)_

## Sobre o projeto

O Eleven Supply nasceu como um catálogo simples para uma loja de
camisas de time: o cliente navega pelas opções disponíveis, filtra por
categoria, vê os detalhes e várias fotos de cada camisa, e finaliza o
interesse com um clique que abre o WhatsApp já com a mensagem
preenchida. Toda a parte de preço, tamanho e pagamento é combinada
diretamente na conversa.

O site é 100% estático — não depende de servidor, banco de dados ou
login — o que o torna leve, rápido de carregar e simples de hospedar.

## Funcionalidades

- Catálogo responsivo, com grid que se adapta a qualquer tamanho de tela
- Modo claro/escuro, com a preferência do visitante salva no navegador
- Busca por nome do time
- Filtro por categoria (Brasileiros, Europeus, Resto do Mundo, Seleções)
- Página de detalhes com galeria de fotos (vários ângulos por camisa,
  navegação por setas e miniaturas)
- Pedido via WhatsApp com mensagem automática, já identificando a
  camisa de interesse
- Camisas sem foto cadastrada exibem uma ilustração gerada
  automaticamente nas cores do time, evitando cards quebrados

## Tecnologias

HTML, CSS e JavaScript puro — sem frameworks, sem build step e sem
dependências externas além das fontes do Google Fonts. O catálogo é
renderizado dinamicamente a partir de uma estrutura de dados em
JavaScript, e o tema claro/escuro é implementado com CSS custom
properties.

## Estrutura do projeto

```
catalogo-camisas/
├── index.html    → estrutura da página
├── style.css     → visual, layout e temas
├── script.js     → dados do catálogo e toda a lógica da interface
├── images/       → fotos das camisas
└── README.md
```

## Identidade visual

| Uso                 | Cor       |
|----------------------|-----------|
| Vermelho principal    | `#E10600` |
| Vermelho escuro       | `#A30000` |
| Fundo (modo claro)    | `#F6F4F1` |
| Fundo (modo escuro)   | `#101114` |

Tipografia: **Bebas Neue** para títulos e destaques, **Inter** para o
corpo do texto.

## Rodando localmente

Por não ter build step, basta abrir o `index.html` num navegador, ou
servir a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8080
```

---

Projeto desenvolvido como estudo prático de front-end (HTML, CSS e
JavaScript puro), com foco em performance, responsividade e boas
práticas de organização de código.