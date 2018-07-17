const printError = require('./index.js');

const giveRandomIntInRange = (a, b) => {
  return Math.floor(Math.random() * ((b-a) + 1) + a);
};

describe('Basic Tests', () => {
  test('Should be able to detect static errors', () => {
    expect(printError('aaabbbcccdddeee')).toBe('0/15');
  });

  test('Should be able to detect error trails of 1', () => {
    expect(printError('aaaxbbbcccydddeeez')).toBe('3/18');
  });

  test('Should be able to detect trails of more than 1', () => {
    expect(printError('aaaxxbbbccnncdddeeoooe')).toBe('7/22');
  });

  test('Should return correctly if everything is an error', () => {
    expect(printError('xxxxxxxxxxxxxxxxxxxx')).toBe('20/20');
  });
});

describe('Random Test', () => {
  // to hold the randomly generated test data
  var testData = [];
  // how many test?
  var iterations = giveRandomIntInRange(10, 100);

  for(var i = 0; i <= iterations; i++){
    // how long are the strings?
    var printLength = giveRandomIntInRange(100, 400);
    // to hold my character codes, mmm digits
    var print = [];

    for(var j = 0; j < printLength; j++) {
      // give me a random good digit :D
      print.push(giveRandomIntInRange(97, 109));
    }
    // done making integer array? Feed me and let's see
    // what word I  burp up.
    testData.push(''+ String.fromCharCode(...print));
    // clear the integers from the print array
    print = [];
  }

  testData.forEach( (data) => {
    test('Should pass a randomly generated string', () => {
      // error count for testing purposes
      var errorCount = giveRandomIntInRange(0, 100);
      for(var x = 0; x < errorCount; x++) {
        // inject the errors into the string
        data = data.slice(0, x).concat(String.fromCharCode(giveRandomIntInRange(110, 122)).concat(data.slice(x+1)));
      }
      // test
      expect(printError(data)).toBe(`${errorCount}/${data.length}`);
    })
  });
});