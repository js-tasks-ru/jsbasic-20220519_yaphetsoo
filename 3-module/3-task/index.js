function camelize(str) {
  // ваш код...
  let splitedArr = str.split('-');

  if (splitedArr.length == 1) {
    return splitedArr[0];
  }

  for (let i = 1; i < splitedArr.length; i++) {
    let stringWithUpperCase = splitedArr[i].replace(splitedArr[i][0], splitedArr[i][0].toUpperCase());
    splitedArr[i] = stringWithUpperCase;
  }

  return splitedArr.join("");

}
