let indexes = { statusIndex: 0, genderIndex: 0, ageIndex: 0 };

function highlight(table) {
  setIndexes(table.rows[0], indexes);

  for (let i = 1; i < table.rows.length; i++) {
    checkForStatus(table.rows[i]);
    checkForGender(table.rows[i]);
    checkForAge(table.rows[i]);
  }
}

function setIndexes(row, indexes) {
  for (let i = 0; i < row.cells.length; i++) {
    switch (row.cells[i].innerHTML) {
      case "Status":
        indexes.statusIndex = i;
        break;
      case "Gender":
        indexes.genderIndex = i;
        break;
      case "Age":
        indexes.ageIndex = i;
        break;
    }
  }
}

function checkForStatus(row) {
  if (row.cells[indexes.statusIndex].hasAttribute("data-available")) {
    row.cells[indexes.statusIndex].dataset.available === "true" ? row.classList.add("available") : row.classList.add("unavailable");
  }
  else {
    row.hidden = true;
  }
}

function checkForGender(row) {
  if (row.cells[indexes.genderIndex].innerHTML === "m") {
    row.classList.add('male');
  }
  else if (row.cells[indexes.genderIndex].innerHTML === "f") {
    row.classList.add('female');
  }
}

function checkForAge(row) {
  if (row.cells[indexes.ageIndex].innerHTML < 18) {
    row.style = "text-decoration: line-through";
  }
}
