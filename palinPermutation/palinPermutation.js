module.exports = palinPermutation = (str) => {
  const createCharMap = (string) => {
    return string.split('').reduce((acc, char) => {
      if (!acc[char]) {
        acc[char] = 1;
        acc.length++;
      } else {
        acc[char]++;
        acc.length++;
      }
      return acc;
    }, { length: 0 });
  };

  const checkForOneOddChar = (charMap) => {
    let found = false;
    for (let char in charMap) {
      if (charMap[char] % 2 !== 0 && !found && char !== 'length') {
        found = true;
      } else if (charMap[char] % 2 !== 0 && found && char !== 'length') {
        return false;
      }
    }

    if (charMap.length % 2 === 0) {
      return true;
    } else {
      return found;
    }
  };

  let charMap = createCharMap(str.toLowerCase().split(' ').join(''));
  return checkForOneOddChar(charMap);
}