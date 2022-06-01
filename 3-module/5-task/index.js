function getMinMax(str) {

  let numberArr = str.split(" ")
                     .filter(element => !isNaN(Number(element)))
                     .map(element => Number(element));

  numberArr.sort(compare);
  return { min: numberArr[0], max: numberArr[numberArr.length - 1]};
}

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
