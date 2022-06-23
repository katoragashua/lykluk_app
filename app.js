window.addEventListener("load", startCarousel);
// Carousel
let slidePosition = 0;
let carouselImages = document.getElementsByClassName("carousel-images");
let totalSlides = carouselImages.length;

function play() {
  hide();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  carouselImages[slidePosition].classList.add("current-carousel");
}

function hide() {
  // Using a for of loop
  for (let image of carouselImages) {
    image.classList.remove("current-carousel");
    image.classList.add("hidden");
  }
}

function startCarousel() {
  setInterval(play, 5000);
}
