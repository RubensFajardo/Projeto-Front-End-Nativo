//Variável constante para não alterar seu processo de execução

const hamburguer = document.querySelector(".hamburguer");
const layoutMenuMobile = document.querySelector(".layoutMenuMobile");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    layoutMenuMobile.classList.toggle('active');
});