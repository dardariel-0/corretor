export default function initMenuMobile() {
  const btnMobile = document.querySelector(".btn-open");
  const menuMobile = document.querySelector(".header-list");
  const closeMenu = document.querySelector(".close-menu");

  btnMobile.onclick = function () {
    menuMobile.classList.add("ativo");
  };

  closeMenu.onclick = function () {
    menuMobile.classList.remove("ativo");
  };

  document.onclick = function (evento) {
    if (
      !btnMobile.contains(evento.target) &&
      !menuMobile.contains(evento.target)
    ) {
      menuMobile.classList.remove("ativo");
    }
  };
}
