module.exports = oneAway = (word1, word2) => {
  let charMap = {};
  // Are one of the words longer than the other by 2 characters?
  if (Math.abs(word1.length - word2.length) >= 2) {
    return false;
  }

  // iterate through the lonest word
  for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // console.log(word1[i], word2[i]);
    if (word1[i] === word2[i]) {
      charMap[word1[i]] ? charMap[word1[i]]++ : charMap[word1[i]] = 1;
    } else {
      if(word1[i] !== undefined) {
        charMap[word1[i]] ? charMap[word1[i]]++ : charMap[word1[i]] = 1;
      }

      if(word2[i]  !== undefined) {
        charMap[word2[i]] ? charMap[word2[i]]++ : charMap[word2[i]] = 1;
      }
    }
  }
  return Object.keys(charMap).length <= Math.min(word1.length + 1, word2.length + 1);
};