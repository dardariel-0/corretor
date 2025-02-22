export default function initMenuMobile() {}

import outsideClick from "./outsideclick.js";

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

//////////////////////////////

function removerAtivo() {
  menuMobile.classList.remove("ativo");
}

function openMenu() {
  outsideClick(menuMobile, "click", removerAtivo);
}

btnMobile.addEventListener("click", openMenu);
