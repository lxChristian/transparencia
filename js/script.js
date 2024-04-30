// Acessar Pagina

const linksPaginas = document.querySelectorAll("[data-pagina]");

linksPaginas.forEach((link) => {
  link.addEventListener("click", avancaPagina);
});

function avancaPagina(link) {
  link.preventDefault();
  const conteudo = document.querySelector("[data-conteudo]");
  const pagina = link.srcElement.getAttribute("href");
  fetch(pagina)
    .then((response) => response.text())
    .then((body) => {
      conteudo.innerHTML = body;
    });
}

// Acessibilidade

const btnsAcessibilidade = document.querySelectorAll("[data-acessibilidade]");

btnsAcessibilidade.forEach((btn) => {
  btn.addEventListener("click", acessibilidade);
});

let fonte = 16;

function acessibilidade() {
  const html = document.documentElement;
  switch (this.dataset.acessibilidade) {
    case "aumentaFonte":
      if (html.style.fontSize < "22px") {
        html.style.fontSize = `${++fonte}px`;
      }
      break;

    case "diminuiFonte":
      if (html.style.fontSize > "12px") {
        html.style.fontSize = `${--fonte}px`;
      }
      break;

    case "contraste":
      this.classList.toggle("ativo");
      html.classList.toggle("contraste");
      break;
  }
}
