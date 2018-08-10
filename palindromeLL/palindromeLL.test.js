const isPalin = require('./palindromeLL.js');

describe('Is this linked list a palindrome?', () => {
  it('Should return true for a linked list that is a palindrome', () => {
    const ll = {
      value: 'r',
      next: {
        value: 'a',
        next: {
          value: 'c',
          next: {
            value: 'e',
            next: {
              value: 'c',
              next: {
                value: 'a',
                next: {
                  value: 'r',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(true);
  });

  it('Should return true for a linked list that is a palindrome', () => {
    const ll = {
      value: 'c',
      next: {
        value: 'a',
        next: {
          value: 't',
          next: {
            value: 's',
            next: {
              value: 't',
              next: {
                value: 'a',
                next: {
                  value: 'c',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(true);
  });

  it('Should return true for a linked list that is a palindrome', () => {
    const ll = {
      value: 't',
      next: {
        value: 'a',
        next: {
          value: 'c',
          next: {
            value: 'o',
            next: {
              value: 'c',
              next: {
                value: 'a',
                next: {
                  value: 't',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(true);
  });

  it('Should return false if the linked list is not a palindrom', () => {
    const ll = {
      value: 'r',
      next: {
        value: 'a',
        next: {
          value: 'c',
          next: {
            value: 'e',
            next: {
              value: 'c',
              next: {
                value: 'a',
                next: {
                  value: 't',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(false);
  });

  it('Should return false if the linked list is not a palindrom', () => {
    const ll = {
      value: 'n',
      next: {
        value: 'i',
        next: {
          value: 'k',
          next: {
            value: 'k',
            next: {
              value: 'i',
              next: {
                value: ' ',
                next: {
                  value: 'M',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(false);
  });

  it('Should return false if the linked list is not a palindrom', () => {
    const ll = {
      value: 'e',
      next: {
        value: 'e',
        next: {
          value: 'e',
          next: {
            value: 'e',
            next: {
              value: 'c',
              next: {
                value: 'a',
                next: {
                  value: 't',
                  next: null
                }
              }
            }
          }
        }
      }
    }; // end ll

    expect(isPalin(ll)).toEqual(false);
  });
});