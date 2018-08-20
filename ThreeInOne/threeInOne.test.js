const threeInOne = require("./threeInOne.js");

describe('Three in one', () => {
  it('Should only have form of storage', () => {
    const tripleStack = threeInOne();

    // each stack should be initialized with size 0
    expect(tripleStack.information[0].coordinates).toEqual([0, 2]);
    expect(tripleStack.information[0].size).toEqual(0);

    expect(tripleStack.information[1].coordinates).toEqual([3, 5]);
    expect(tripleStack.information[1].size).toEqual(0);

    expect(tripleStack.information[2].coordinates).toEqual([6, 8]);
    expect(tripleStack.information[2].size).toEqual(0);
  });

  it('Should be able to add items into seperate stack and not allow for the limit to be surpassed', () => {
    const tripleStack = threeInOne();

    tripleStack.push(0, 'cat');
    expect(tripleStack.peek(0)).toEqual('cat');

    tripleStack.push(1, 'dog');
    expect(tripleStack.peek(1)).toEqual('dog');

    tripleStack.push(2, 'cow');
    expect(tripleStack.peek(2)).toEqual('cow');

    tripleStack.push(0, 'meow');
    expect(tripleStack.peek(0)).toEqual('meow');

    tripleStack.push(1, 'bark');
    expect(tripleStack.peek(1)).toEqual('bark');

    tripleStack.push(2, 'moo');
    expect(tripleStack.peek(2)).toEqual('moo');

    tripleStack.push(0, 'yas');
    expect(tripleStack.peek(0)).toEqual('yas');

    tripleStack.push(1, 'no');
    expect(tripleStack.peek(1)).toEqual('no');

    tripleStack.push(2, 'maybe');
    expect(tripleStack.peek(2)).toEqual('maybe');

    expect(() => {
      tripleStack.push(0, 'magic');
    }).toThrowError();

    expect(() => {
      tripleStack.push(1, 'magic');
    }).toThrowError();

    expect(() => {
      tripleStack.push(2, 'magic');
    }).toThrowError();

    expect(tripleStack.size(0)).toEqual(3);
    expect(tripleStack.size(1)).toEqual(3);
    expect(tripleStack.size(2)).toEqual(3);
  });


  it('Should be able to remove items from a specified stack in lifo order', () => {
    const tripleStack = threeInOne();

    tripleStack.push(0, 'cat');
    tripleStack.push(0, 'dog');
    tripleStack.push(0, 'cow');

    tripleStack.push(1, 'says');
    tripleStack.push(1, 'goes');
    tripleStack.push(1, 'yells');

    tripleStack.push(2, 'meow');
    tripleStack.push(2, 'bark');
    tripleStack.push(2, 'moooooo');

    let result = `${tripleStack.pop(0)} ${tripleStack.pop(1)} ${tripleStack.pop(2)}`;

    expect(result).toEqual('cow yells moooooo');
    expect(tripleStack.size(1)).toEqual(2);
    expect(tripleStack.size(2)).toEqual(2);
    expect(tripleStack.size(0)).toEqual(2);

    result = `${tripleStack.pop(0)} ${tripleStack.pop(1)} ${tripleStack.pop(2)}`;

    expect(result).toEqual('dog goes bark');
    expect(tripleStack.size(0)).toEqual(1);
    expect(tripleStack.size(1)).toEqual(1);
    expect(tripleStack.size(2)).toEqual(1);


    result = `${tripleStack.pop(0)} ${tripleStack.pop(1)} ${tripleStack.pop(2)}`;

    expect(result).toEqual('cat says meow');
    expect(tripleStack.size(0)).toEqual(0);
    expect(tripleStack.size(1)).toEqual(0);
    expect(tripleStack.size(2)).toEqual(0);

    expect(() => {
      tripleStack.pop(0);
    }).toThrowError();

    expect(() => {
      tripleStack.pop(1);
    }).toThrowError();

    expect(() => {
      tripleStack.pop(2);
    }).toThrowError();

  });
});
