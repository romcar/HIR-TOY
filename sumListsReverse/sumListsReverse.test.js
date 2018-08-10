const sumListsReverse = require('./sumListsReverse.js');

describe('Sum Lists (Linked Lists)', () => {
  it('Should be able to take in two lists that represents a number in reverse order of the same length and returns the sum of both of those list', () => {
    const list1 = {
      value: 0,
      next: {
        value: 0,
        next: {
          value: 5,
          next: null
        }
      }
    };

    const list2 = {
      value: 7,
      next: {
        value: 4,
        next: {
          value: 4,
          next: null
        }
      }
    };

    const expectedResult = {
      value: 7,
      next: {
        value: 4,
        next: {
          value: 9,
          next: null
        }
      }
    }

    expect(sumListsReverse(list1, list2)).toEqual(expectedResult);
  });

  it('Should be able to take in two lists that represents a number in reverse order of the same length and returns the sum of both of those list', () => {
    const list1 = {
      value: 2,
      next: {
        value: 7,
        next: {
          value: 3,
          next: null
        }
      }
    };

    const list2 = {
      value: 0,
      next: {
        value: 1,
        next: {
          value: 4,
          next: null
        }
      }
    };

    const expectedResult = {
      value: 2,
      next: {
        value: 8,
        next: {
          value: 7,
          next: null
        }
      }
    }

    expect(sumListsReverse(list1, list2)).toEqual(expectedResult);
  });

  it('Should be able to add two lists that represent numbers in reverse order of varying lengths', () => {
    const list1 = {
      value: 0,
      next: {
        value: 0,
        next: {
          value: 6,
          next: null
        }
      }
    };

    const list2 = {
      value: 7,
      next: {
        value: 4,
        next: {
          value: 4,
          next: {
            value: 9,
            next: null
          } // 10047
        }
      }
    };

    const expectedResult = {
      value: 7,
      next: {
        value: 4,
        next: {
          value: 0,
          next: {
            value: 0,
            next: {
              value: 1,
              next: null
            }
          }
        }
      }
    }

    expect(sumListsReverse(list1, list2)).toEqual(expectedResult);
  });
});