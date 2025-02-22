export default function initMenuMobile() {}

// import outsideClick from "./outsideclick.js";

// consts
const btnMobile = document.querySelector(".btn-open");
const menuMobile = document.querySelector(".header-list");
const closeMenu = document.querySelector(".close-menu");

// função 1

function menuClik() {
  menuMobile.classList.toggle("ativo");
}

btnMobile.addEventListener("click", menuClik);
closeMenu.addEventListener("click", menuClik);

// função clique outside

function openMenu() {
  outsideClick(menuMobile, "click", () => {
    menuMobile.classList.remove("ativo");
  });
}

// btnMobile.addEventListener("click", openMenu);
