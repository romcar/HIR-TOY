const Stack = require('./Stack.js');

describe('Stack', () => {
  it('Should be able to instantiate an empty stack with no limit', () => {
    const s = new Stack();

    expect(s.size()).toEqual(0);
    expect(s.peek()).toEqual(undefined);
    expect(s.limit).toEqual(null);
  });

  it('Should be able to add a value to the stack', () => {
    const s = new Stack();
    s.push(2);
    expect(s.size()).toEqual(1);
    expect(s.peek()).toBe(2);
  });

  it('Should be able to remove item from queue', () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);

    expect(s.pop()).toEqual(6);
    expect(s.pop()).toEqual(5);
    expect(s.pop()).toEqual(4);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);

    expect(() => {
      s.pop();
    }).toThrow('Out of bounds, cannot remove item. Stack is empty');
  });
});