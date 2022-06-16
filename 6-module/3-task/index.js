import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render();
  }

  get #offsetWidth() {
    return this.elem.querySelector(".carousel__inner").offsetWidth;
  }

  #render() {
    let carouselHtml = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>
      `);

    let carouselSlideHtml;
    let carouselInnerElem = carouselHtml.querySelector(".carousel__inner");

    this.slides.forEach(slide => {
      carouselSlideHtml = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);

      let button = carouselSlideHtml.querySelector(".carousel__button");
      button.addEventListener("click", () => {
        carouselHtml.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        }));
      });

      carouselInnerElem.insertAdjacentElement("beforeend", carouselSlideHtml);
    });

    this.#initCarousel(carouselHtml);

    return carouselHtml;
  }

  #initCarousel(carouselHtml) {
    alert(this.offsetWidthVal);
    let slidesCount = this.slides.length;
    let carousel = carouselHtml.querySelector('.carousel__inner');
    let leftCarouselButton = carouselHtml.querySelector('.carousel__arrow_left');
    let rightCarouselButton = carouselHtml.querySelector('.carousel__arrow_right');

    let carouselOffsetWidth;

    leftCarouselButton.style.display = 'none';
    let currentSlide = 1;

    leftCarouselButton.addEventListener("click", () => {
      carouselOffsetWidth = this.#offsetWidth;
      carousel.style.transform = `translateX(-${(currentSlide - 2) * carouselOffsetWidth}px)`;
      currentSlide--;
      setSlideButtons();
    });

    rightCarouselButton.addEventListener("click", () => {
      carouselOffsetWidth = this.#offsetWidth;
      carousel.style.transform = `translateX(-${currentSlide * carouselOffsetWidth}px)`;
      currentSlide++;
      setSlideButtons();
    });

    function setSlideButtons() {
      if (currentSlide === 1) {
        leftCarouselButton.style.display = 'none';
      } else if (currentSlide === slidesCount) {
        rightCarouselButton.style.display = 'none';
      } else {
        leftCarouselButton.style.display = '';
        rightCarouselButton.style.display = '';
      }
    }
  }
}
