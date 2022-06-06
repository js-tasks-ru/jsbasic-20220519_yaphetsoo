function highlight(table) {
  let indexes = { statusIndex: 0, genderIndex: 0, ageIndex: 0 };
  setIndexes(table.rows[0], indexes);

  for (let i = 1; i < table.rows.length; i++) {
    checkForStatus(table.rows[i], indexes.statusIndex);
    checkForGender(table.rows[i], indexes.genderIndex);
    checkForAge(table.rows[i], indexes.ageIndex);
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

function checkForStatus(row, statusIndex) {
  if (row.cells[statusIndex].hasAttribute("data-available")) {
    row.cells[statusIndex].dataset.available === "true" ? row.classList.add("available") : row.classList.add("unavailable");
  }
  else {
    row.hidden = true;
  }
}

function checkForGender(row, genderIndex) {
  if (row.cells[genderIndex].innerHTML === "m") {
    row.classList.add('male');
  }
  else if (row.cells[genderIndex].innerHTML === "f") {
    row.classList.add('female');
  }
}

function checkForAge(row, ageIndex) {
  if (row.cells[ageIndex].innerHTML < 18) {
    row.style = "text-decoration: line-through";
  }
}
