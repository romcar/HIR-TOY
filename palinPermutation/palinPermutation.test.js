const palinPermutation = require('./palinPermutation');

describe("Should be able to tell you if the strings are permutations of a palindrome", () => {
  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('aab')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('Taco Coa')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('rAce caR rAc eCar')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('magic')).toBe(false);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('11bn7hhh7bn')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaab')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbc')).toBe(true);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false);
  });

  test('palinPermutations -- test: 1', () => {
    expect(palinPermutation('texas')).toBe(false);
  });
});