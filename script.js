let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementById("slides");
  currentSlide = (index + slides.children.length) % slides.children.length;
  const translation = -currentSlide * 100 + "%";
  slides.style.transform = "translateX(" + translation + ")";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
setInterval(nextSlide, 5000);