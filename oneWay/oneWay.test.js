const oneAway = require('./oneWay');

describe('Should return true when the words are (zero or) one character away from being the same', () => {
  it('Test for pale, pales', () => {
    expect(oneAway('pale', 'pales')).toBe(true);
  });

  it('Test for pale, paled', () => {
    expect(oneAway('pale', 'paled')).toBe(true);
  });

  it('Test for pale, ple', () => {
    expect(oneAway('pale', 'ple')).toBe(true);
  });

  it('Test for pale, bale', () => {
    expect(oneAway('pale', 'bale')).toBe(true);
  });

  it('Test for pale, pale', () => {
    expect(oneAway('pale', 'pale')).toBe(true);
  });
})

describe('Should return false when the words are more than one character away from being the same', () => {
  it('Test for pale, pales', () => {
    expect(oneAway('pale', 'bales')).toBe(false);
  });

  it('Test for pale, baled', () => {
    expect(oneAway('pale', 'baled')).toBe(false);
  });

  it('Test for pale, told', () => {
    expect(oneAway('pale', 'told')).toBe(false);
  });

  it('Test for pale, tail', () => {
    expect(oneAway('pale', 'tail')).toBe(false);
  });
})