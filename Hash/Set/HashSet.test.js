const HashSet = require('./HashSet.js');

describe('Hash Set', () => {
  it('Should initialize a hash set', () => {
    const h = new HashSet();

    expect(h.size).toEqual(0);
    expect(h.limit).toEqual(4);
  });

  it('Should be able to add things into the hash set', () => {
    const h = new HashSet();

    h.add('dog');
    h.add('cat');
    h.add('javascript');

    expect(h.size).toEqual(3);
    expect(h.contains('dog')).toEqual(true);
    expect(h.contains('cat')).toEqual(true);
    expect(h.contains('javascript')).toEqual(true);
    expect(h.contains('money')).toEqual(false);
    expect(h.limit).toEqual(4);
  });

  it('Should be able to remove items from a hash set', () => {
    const h = new HashSet();

    h.add('bird');
    h.add('is');
    h.add('good');

    expect(h.remove('is')).toEqual('is');
    expect(h.remove('good')).toEqual('good');
    expect(h.size).toEqual(1);
    expect(h.limit).toEqual(4);
  });

  it('Should be able to iterate over the items in the hash set one by one', () => {
    const h = new HashSet(50);

    const elements = [
      'wonderful', 'watermelon', 'grapes', 'money', 'javascript', 'mouse',
      'dog', 'cat', 'anchor', 'candy', 'pen', 'cartridge', 'keyboard',
      'snacks', 'pepperoni', 'lazer', 'lexar'
    ];

    elements.forEach((item) => {
      h.add(item);
    });
    let iterator = h.iterator();
    expect(iterator).toBeInstanceOf(Function);
    expect(iterator()).toEqual('lexar');
    expect(iterator()).toEqual('watermelon');
    expect(iterator()).toEqual('mouse');
    expect(iterator()).toEqual('snacks');
    expect(iterator()).toEqual('pen');
    expect(iterator()).toEqual('lazer');
    expect(iterator()).toEqual('dog');
    expect(iterator()).toEqual('grapes');
    expect(iterator()).toEqual('javascript');
    expect(iterator()).toEqual('anchor');
    expect(iterator()).toEqual('cartridge');
    expect(iterator()).toEqual('cat');
    expect(iterator()).toEqual('candy');
    expect(iterator()).toEqual('wonderful');
    expect(iterator()).toEqual('pepperoni');
    expect(iterator()).toEqual('money');
    expect(iterator()).toEqual('keyboard');
    expect(iterator()).toEqual(undefined);
  });

  it('Should make a shallow copy of the hash set', () => {
    const h1 = new HashSet();
    h1.add('dog');
    h1.add('cat');
    h1.add('monkey');

    const h2 = h1.clone();

    console.log(h2.contains('dog'))
  });
});

/*
  Hash Set - https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html
    - Usually indicates close to O(1) time complexity
    - Usually has these functions
      - add -- adds an item to the hash set
      - destroy -- clears the hash set
      - clone -- creates a shallow copy of the hash set
      - contains -- returns true if set contains element
      - isEmpty
      - iterator -- returns elements in sequential order
      - remove
      - size
*/