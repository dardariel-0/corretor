export default function initChangeColor() {
  const headerBg = document.querySelector(".header-bg");
  const sectionB = document.querySelector(".scroll-black");

  const sectionG = document.querySelector(".scroll-grey");
  const sectionB2 = document.querySelector(".scroll-black2");

  function animaScroll() {
    const sectionTop = sectionB.getBoundingClientRect().top;
    const sectionBottom = sectionB.getBoundingClientRect().bottom;

    if (sectionTop < 60) {
      headerBg.classList.add("preto");
    } else if (sectionBottom > 60) {
      headerBg.classList.remove("preto");
    }
  }

  function animaScrollGrey() {
    const sectionTop = sectionG.getBoundingClientRect().top;
    const sectionBottom = sectionG.getBoundingClientRect().bottom;

    if (sectionTop < 60) {
      headerBg.classList.add("cinza");
    } else if (sectionBottom > 60) {
      headerBg.classList.remove("cinza");
    }
  }

  function animaScroll2() {
    const sectionTop = sectionB2.getBoundingClientRect().top;
    const sectionBottom = sectionB2.getBoundingClientRect().bottom;

    if (sectionTop < 60) {
      headerBg.classList.add("preto2");
    } else if (sectionBottom > 60) {
      headerBg.classList.remove("preto2");
    }
  }

  window.addEventListener("scroll", animaScroll);
  window.addEventListener("scroll", animaScrollGrey);
  window.addEventListener("scroll", animaScroll2);
}
