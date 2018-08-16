const HashMap = require('./HashMap.js');

describe('Hash Maps', () => {
  it('Should be able to invoke a new instance of a hash map', () => {
    const map = new HashMap();

    expect(map.size).toEqual(0);
    expect(map.limit).toEqual(4);
  });

  it('Should be able to add key: value pairs into the hash map', () => {
    const map = new HashMap();

    map.set('dog', 'bark');
    map.set('cat', 'meow');
    map.set('bird', 'chirp');

    expect(map.size).toEqual(3);
    expect(map.limit).toEqual(4);
  });

  it('Should be able to expand and shrink the hash map based on how full it is. Doubles at 75% + and halves itself at 25% -.', () => {
    const map = new HashMap();

    map.set('dog', 'bark');
    map.set('cat', 'meow');
    map.set('bird', 'chirp');

    expect(map.size).toEqual(3);
    expect(map.limit).toEqual(4);

    map.set('cars', 'zoom');

    expect(map.get('cars')).toEqual('zoom');
    expect(map.size).toEqual(4);
    expect(map.limit).toEqual(8);

    map.set('coding', 'click');
    map.set('coffee', 'drip');
    map.set('espresso', 'drip');

    expect(map.size).toEqual(7);
    expect(map.limit).toEqual(16);

    map.delete('cars');
    expect(map.get('cars')).toEqual(false);
    expect(map.size).toEqual(6);

    map.delete('cat');
    expect(map.size).toEqual(5);
    map.delete('coding');
    expect(map.size).toEqual(4);
    expect(map.limit).toEqual(8);
  });

  it('Should be able to find items inserted into hash map', () => {
    const map = new HashMap();

    map.set('magic', 'javascript');
    map.set('cow', 'moo');

    expect(map.has('cow')).toEqual(true);
    expect(map.get('magic')).toEqual('javascript');
  });

  it('Should be able to clear the hash map if needed', () => {
    const map = new HashMap();

    map.set(1, 1);
    map.set(2, 2);
    map.set(3, 3);
    map.set(4, 4);
    map.set(5, 5);
    map.set(6, 6);

    expect(map.size).toEqual(6);
    expect(map.limit).toEqual(8);

    map.clear();

    expect(map.size).toEqual(0);
    expect(map.limit).toEqual(4);
  });

  it('Should return all the keys and values inside of the hash map when .keys or .values are used', () => {
    const map = new HashMap();
    const elements = ['cat', 'dog', 'mouse', 'castle'];

    elements.forEach(e => {
      map.set(e, e)
    });

    expect(map.keys().sort()).toEqual(elements.sort());
    expect(map.values().sort()).toEqual(elements.sort());

  });
});