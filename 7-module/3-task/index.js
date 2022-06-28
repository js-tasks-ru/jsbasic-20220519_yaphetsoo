import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.#render();
  }

  #render() {
    let sliderHtml = createElement(`
    <div class="slider">
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">${this.value}</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 0%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
      </div>
    </div>
    `);

    let sliderStepsHtml = `<span class="slider__step-active"></span>`;
    for (let i = 1; i < this.steps; i++) {
      sliderStepsHtml += `<span></span>`;
    }

    let sliderStepsElem = sliderHtml.querySelector(".slider__steps");
    sliderStepsElem.innerHTML = sliderStepsHtml;

    sliderHtml.addEventListener("click", (event) => {
      //Удаление slider__step-active со старого value
      sliderStepsElem.children[this.value].classList.remove("slider__step-active");

      //Расчет value в зависимости от клика пользователя
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;

      //Изменение значения value на слайдере
      let sliderValue = this.elem.querySelector(".slider__value");
      sliderValue.textContent = this.value;

      //Добавление класса slider__step-active для нового value
      sliderStepsElem.children[this.value].classList.add("slider__step-active");

      //Изменение положения ползунка и расширение закрашенной области
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      //Вызов пользовательского события
      sliderHtml.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }));
    });

    return sliderHtml;
  }
}
