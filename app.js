const tooltips = document.querySelectorAll(".tooltip");
const infoButtons = document.querySelectorAll(".item__info");

document.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("item__info")) {
    const tooltip = event.target.nextElementSibling;
    tooltip.style.display = 'block';
  }
})
document.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("item__info")) {
    const tooltip = event.target.nextElementSibling;
    tooltip.style.display = 'none';
  }
});

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
