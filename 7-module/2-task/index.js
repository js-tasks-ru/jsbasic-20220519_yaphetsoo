import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.#render();
    this.escHandler = (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    };
  }

  setBody(modalBodyHtml) {
    let modalBody = this.elem.querySelector(".modal__body");
    while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
    }
    modalBody.append(modalBodyHtml);
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").textContent = title;
  }

  open() {
    document.body.classList.add("is-modal-open");
    document.body.append(this.elem);
    document.addEventListener("keydown", this.escHandler);
  }

  close() {
    document.body.classList.remove("is-modal-open");
    document.body.lastChild.remove();
    document.removeEventListener("keydown", this.escHandler);
  }

  #render() {
    let modal = createElement(`
      <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>
        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>`
    );

    let closeButton = modal.querySelector(".modal__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });

    return modal;
  }
}
