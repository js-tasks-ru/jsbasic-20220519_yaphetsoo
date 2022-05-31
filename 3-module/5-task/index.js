function getMinMax(str) {
  let splitedArr = str.split(" ");
  let numberArr = [];

  splitedArr.forEach(element => {
    if (!isNaN(Number(element))) {
      numberArr.push(Number(element));
    }
  });

  numberArr.sort(compare);
  return { min: numberArr[0], max: numberArr[numberArr.length - 1]};
}

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
