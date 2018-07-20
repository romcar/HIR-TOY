const stringCompression = require('./stringCompression');

describe('String Compression', () => {
  it('Should return the string if the compression is longer than the actual word', () => {
    expect(stringCompression('dog')).toBe('dog');
    expect(stringCompression('America')).toBe('America');
    expect(stringCompression('Matthew')).toBe('Matthew'); // (Matthew).length -> 7   (M1a1t2h1e1w1).length -> 12
  });

  it('Should be case sensitive', ()=> {
    expect(stringCompression('AaAAAAAAAAAAa')).toBe('A1a1A10a1');
    expect(stringCompression('ffffrrqqqqknmttttttttttttttttllllhHHHHHHiIIIIIIIIIVVVvvvvVVV')).toBe('f4r2q4k1n1m1t16l4h1H6i1I9V3v4V3');
  });
});
