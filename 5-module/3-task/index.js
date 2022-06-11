function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let leftCarouselButton = document.querySelector('.carousel__arrow_left');
  let rightCarouselButton = document.querySelector('.carousel__arrow_right');
  let carouselOffsetWidth = carousel.offsetWidth;

  leftCarouselButton.style.display = 'none';
  let currentSlide = 1;


  leftCarouselButton.addEventListener("click", () => {
    carousel.style.transform = `translateX(-${(currentSlide - 2) * carouselOffsetWidth}px)`;
    currentSlide--;
    setSlideButtons();
  });

  rightCarouselButton.addEventListener("click", () => {
    carousel.style.transform = `translateX(-${currentSlide * carouselOffsetWidth}px)`;
    currentSlide++;
    setSlideButtons();
  });

  function setSlideButtons() {
    if (currentSlide === 1) {
      leftCarouselButton.style.display = 'none';
    } else if (currentSlide === 4) {
      rightCarouselButton.style.display = 'none';
    } else {
      leftCarouselButton.style.display = '';
      rightCarouselButton.style.display = '';
    }
  }
}
