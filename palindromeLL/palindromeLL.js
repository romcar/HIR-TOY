const isPalin = (list) => {
  const extractWord = (l) => {
    let word = '';

    while (l) {
      word = word + l.value;
      l = l.next;
    }

    return word;
  }

  //extract the word from the linked list
  const word = extractWord(list);
  // split the word char by char and reverse it
  const flipped = word.split('').reverse().join('');
  // are the words the same?
  // console.log(word, flipped)
  return word === flipped;

}


module.exports = isPalin;