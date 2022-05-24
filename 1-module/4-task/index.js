function checkSpam(str) {
  str = str.toLowerCase();

  return str.includes(('1xBet').toLowerCase()) || str.includes(('XXX').toLowerCase());
}
