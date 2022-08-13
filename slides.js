let slides = document.getElementsByClassName("preview-thumb");
let slideIndex = 1;

showSlides(slideIndex);

setInterval(function(){
  showSlides(slideIndex += 1);
}, 5000);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Current active slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("preview-thumb");
  let thumbnail = document.getElementsByClassName('preview-thumb-s');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnail[slideIndex-1].className += " active";
} 