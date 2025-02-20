/////////////////////////////////////////////////

const headerBg = document.querySelector(".header-bg");
const sectionB = document.querySelector(".scroll-black");

const sectionG = document.querySelector(".scroll-grey");
const sectionB2 = document.querySelector(".scroll-black2");

function animaScroll() {
  const sectionTop = sectionB.getBoundingClientRect().top;
  const sectionBottom = sectionB.getBoundingClientRect().bottom;

  // console.log(sectionTop, sectionBottom);
  if (sectionTop < 80) {
    headerBg.classList.add("preto");
  } else if (sectionBottom > 60) {
    headerBg.classList.remove("preto");
  }
}

function animaScrollGrey() {
  const sectionTop = sectionG.getBoundingClientRect().top;
  const sectionBottom = sectionG.getBoundingClientRect().bottom;

  console.log(sectionTop, sectionBottom);
  if (sectionTop < 80) {
    headerBg.classList.add("cinza");
  } else if (sectionBottom > 60) {
    headerBg.classList.remove("cinza");
  }
}

function animaScroll2() {
  const sectionTop = sectionB2.getBoundingClientRect().top;
  const sectionBottom = sectionB2.getBoundingClientRect().bottom;

  // console.log(sectionTop, sectionBottom);
  if (sectionTop < 80) {
    headerBg.classList.add("preto2");
  } else if (sectionBottom > 60) {
    headerBg.classList.remove("preto2");
  }
}

window.addEventListener("scroll", animaScroll);
window.addEventListener("scroll", animaScrollGrey);
window.addEventListener("scroll", animaScroll2);

/////////////q

// slide

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
