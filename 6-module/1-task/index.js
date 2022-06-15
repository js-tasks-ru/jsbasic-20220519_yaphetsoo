/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = this.#render();
  }

  get elem() {
    return this.table;
  }

  #render() {
    let table = document.createElement("table");
    let htmlHeadTable = `<thead>
                          <tr>
                              <th>Имя</th>
                              <th>Возраст</th>
                              <th>Зарплата</th>
                              <th>Город</th>
                          </tr>
                        </thead>`;
    table.insertAdjacentHTML("afterbegin", htmlHeadTable);

    let htmlBodyTable = `<tbody>`;

    this.rows.forEach(element => {
      htmlBodyTable += `<tr>
                          <td>${element.name}</td>
                          <td>${element.age}</td>
                          <td>${element.salary}</td>
                          <td>${element.city}</td>
                          <td><button>X</button></td>
                        </tr>`;
    });

    table.insertAdjacentHTML("beforeend", htmlBodyTable);

    let buttons = table.querySelectorAll("button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        button.closest("tr").remove();
      });
    });

    return table;
  }
}
