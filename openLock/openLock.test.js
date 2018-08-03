const openLock = require('./openLock.js');

describe('OpenLock', () => {
  xit('Should return the minimal total number of turns required', ()=> {
    let deadends = ["0201", "0101", "0102", "1212", "2002"];
    let target = "0202";

    expect(openLock(deadends, target)).toBe(6);
  });

  it('Should return the minimal total number of turns required', ()=> {
    let deadends = ["8888"];
    let target = "0009";

    expect(openLock(deadends, target)).toBe(1);
  });
});


/*

I - deadends -- [ strings ]
      - only 4 chars long
      - represent only numbers
    target -- string
      - the code we want to get to
O - number -- represents the minimum number of turns required
C - deadends will be in the range [1, 500]
  - target will never be in the deadend list

E - examples are in test.

Approach:


  define turns = 0;
  define start at "0000"
  if the target is included in deadends
    return -1

  iterate through target's chars
    if the current char of target matches the current char of start
      continue
    else
        turn current char to the next possiblity
        is this sequence a dead end?
          true: go back
          false: add 1 to turns



*/