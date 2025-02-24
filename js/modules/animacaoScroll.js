//animação scroll
const sections = document.querySelectorAll(".js-scroll-left");

function animacaoLeft() {
  if (sections.length) {
    const metadeTelaUsuario = window.innerHeight * 0.2;
    // aqui puxei 70% do tamannho da tela do usuario que é a distancia q a animação vai acontecer

    function animacaoScroll() {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top - metadeTelaUsuario;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animacaoScroll();
  }
  // animacaoScroll();

  window.addEventListener("scroll", animacaoScroll);
}
animacaoLeft();

function animacaoRight() {
  const sections = document.querySelectorAll(".js-scroll-right");

  if (sections.length) {
    const metadeTelaUsuario = window.innerHeight * 0.7;
    // aqui puxei 70% do tamannho da tela do usuario que é a distancia q a animação vai acontecer

    function animacaoScroll() {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top - metadeTelaUsuario;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
  }
  animacaoScroll();

  window.addEventListener("scroll", animacaoScroll);
}
animacaoRight();
