//----------------------------slider--------------------------------
var slides = document.querySelectorAll('.slide')
var currentSlide = 0
var arrowRight = document.querySelector('.right')
var arrowLeft = document.querySelector('.left')
var dots = document.querySelectorAll('.dot')

var i
var interval

changeSlides(currentSlide)

function slideshow() {
  for(i=0; i < slides.length; i++) {
    slides[i].style.opacity = 0
    dots[i].style.opacity = 0.3
  }
  currentSlide++;
  if(currentSlide > slides.length-1) { currentSlide = 0}
  slides[currentSlide].style.opacity = 1
  dots[currentSlide].style.opacity = 1
}

function changeSlides(n) {
  slides[currentSlide].style.opacity = 0
  dots[currentSlide].style.opacity = 0.3
  currentSlide += n
  if (currentSlide > slides.length-1) {currentSlide = 0}
  if (currentSlide < 0) {currentSlide = slides.length-1}
  slides[currentSlide].style.opacity = 1
  dots[currentSlide].style.opacity = 1
  interval = setInterval(slideshow, 2000)
}

function nextSlide() {
  clearInterval(interval)
  changeSlides(1)
}

function prevSlide() {
  clearInterval(interval)
  changeSlides(-1)
}

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', prevSlide)
//-------------------------------------------------------------
