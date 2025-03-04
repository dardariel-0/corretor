export default function animacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const sectionsRight = document.querySelectorAll('[data-anime="scrollRight"]');

  const metadeTelaUsuario = window.innerHeight * 0.85;

  function scrollAnimado() {
    sections.forEach((section) => {
      let sectionTop = section.getBoundingClientRect().top - metadeTelaUsuario;

      console.log(sectionTop);
      if (sectionTop < 0) {
        section.classList.add("js-animaLeft");
      }
    });
  }

  scrollAnimado();

  function scrollAnimadoRight() {
    sectionsRight.forEach((section) => {
      let sectionTop = section.getBoundingClientRect().top - metadeTelaUsuario;

      console.log(sectionTop);
      if (sectionTop < 0) {
        section.classList.add("js-animaRight");
      }
    });
  }

  scrollAnimadoRight();

  window.addEventListener("scroll", scrollAnimado);
  window.addEventListener("scroll", scrollAnimadoRight);
}
