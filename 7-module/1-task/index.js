import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render();
  }

  #render() {
    let ribbonMenuHtml = createElement(`
      <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>

      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      </div>
    `);

    let leftButton = ribbonMenuHtml.querySelector(".ribbon__arrow_left");
    let rightButton = ribbonMenuHtml.querySelector(".ribbon__arrow_right");
    let ribbonInner = ribbonMenuHtml.querySelector(".ribbon__inner");

    leftButton.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
    });
    rightButton.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
    });
    ribbonInner.addEventListener("scroll", () => {
      if (ribbonInner.scrollLeft < 1) {
        leftButton.classList.remove("ribbon__arrow_visible");
      }
      else if (ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth < 1) {
        rightButton.classList.remove("ribbon__arrow_visible");
      }
      else {
        leftButton.classList.add("ribbon__arrow_visible");
        rightButton.classList.add("ribbon__arrow_visible");
      }
    });

    let hrefs = ribbonMenuHtml.querySelectorAll(".ribbon__item");

    let currentHref = null;

    hrefs.forEach((href) => {
      href.addEventListener("click", (event) => {
        if (currentHref !== null) {
          currentHref.classList.remove("ribbon__item_active");
        }
        currentHref = href;
        event.preventDefault();
        href.classList.add("ribbon__item_active");

        ribbonMenuHtml.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: href.dataset.id,
          bubbles: true
        }));
      });
    });


    return ribbonMenuHtml;
  }

}
