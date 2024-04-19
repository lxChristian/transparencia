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
