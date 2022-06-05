/* eslint-disable indent */
function highlight(table) {
  let statusIndex = 3, genderIndex = 2, ageIndex = 1;
  //getIndexes(table.rows[0]);

  for (let i = 1; i < table.rows.length; i++) {
    checkForStatus(table.rows[i], statusIndex);
    checkForGender(table.rows[i], genderIndex);
    checkForAge(table.rows[i], ageIndex);
  }
}

// function getIndexes(row) {
//   for (let i = 0; i < row.cells.length; i++) {
//     switch (row.cells[i].innerHTML) {
//       case "Status":
//         statusIndex = i;
//       case "Gender":
//         genderIndex = i;
//       case "Age":
//         ageIndex = i;
//     }
//   }
// }

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
