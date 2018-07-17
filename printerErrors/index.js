module.exports = printerError = (s) => {
  // a - m have a char code of 97-109
  var errorCount = 0;
  s.split('').forEach(char => {
    if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 109) {
      errorCount++;
    }
  });

  return '' + errorCount + '/' + s.length;
}