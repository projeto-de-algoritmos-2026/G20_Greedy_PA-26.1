# 🎒 Mochila Fracionária — Visualizador Interativo

> Projeto desenvolvido para a disciplina **Projeto de Algoritmos (PA-26.1)** — Universidade de Brasília (UnB/FGA)  
> **Grupo 20 | Módulo: Algoritmos Gananciosos (Greedy)**

---

## 📋 Sobre o Projeto

Este repositório contém um **visualizador interativo do algoritmo da Mochila Fracionária**, implementado como uma aplicação web em HTML, CSS e JavaScript puro.

A Mochila Fracionária é um problema clássico de otimização resolvido de forma ótima por uma **estratégia gananciosa (greedy)**: ordenar os itens pela melhor razão valor/peso e preencher a mochila priorizando sempre o item com maior retorno por unidade de peso, permitindo frações de itens.

---

## 🧠 Algoritmo

A estratégia gulosa aplicada segue os passos:

1. Calcular a **razão valor/peso** de cada item
2. **Ordenar** os itens em ordem decrescente de razão
3. Inserir os itens na mochila um a um:
   - Se o item cabe inteiro → insere completamente
   - Se não cabe → insere a fração que couber
4. Parar quando a mochila estiver cheia

**Complexidade:** O(n log n) — dominada pela ordenação

---

## 🖥️ Funcionalidades

- Adição de itens com nome, peso e valor
- Cálculo automático da razão valor/peso (R$/kg)
- Visualização gráfica da mochila sendo preenchida com blocos coloridos
- Exibição do valor total obtido e do espaço utilizado
- Interface responsiva e interativa

---

## 🚀 Como Executar

Não requer instalação. Basta abrir o arquivo diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/projeto-de-algoritmos-2026/G20_Greedy_PA-26.1.git

# Acesse a pasta
cd G20_Greedy_PA-26.1

# Abra no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou acesse diretamente pelo GitHub Pages (se disponível).

---

## 📁 Estrutura do Repositório

```
G20_Greedy_PA-26.1/
├── index.html    # Aplicação completa (HTML + CSS + JS)
├── .gitignore
└── README.md
```

---

## 👥 Integrantes

| Matrícula | Nome |
|-----------|------|
| — 222008468 | — Danilo Sarmento Barros|
| — | — |

> Preencha com os dados do grupo.

---

## 📚 Referências

- CORMEN, T. H. et al. *Introdução a Algoritmos*. 3ª ed. MIT Press, 2009. Cap. 16 — Algoritmos Gulosos.
- SEDGEWICK, R.; WAYNE, K. *Algorithms*. 4ª ed. Addison-Wesley, 2011.
- Material de aula — Projeto de Algoritmos, UnB/FGA, 2026/1.
