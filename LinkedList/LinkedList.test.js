const LinkedList = require('./LinkedList.js');

describe('Linked List', () => {
  it('Should create an instance without a starting value', () => {
    let listWithoutValue = new LinkedList();

    expect(listWithoutValue.head).toEqual(null);
    expect(listWithoutValue.tail).toEqual(null);
    expect(listWithoutValue.size).toEqual(0);
  });

  it('Should create an instance with a starting value ', () => {
    let listWithValue = new LinkedList(1);

    expect(listWithValue.head.value).toEqual(1);
    expect(listWithValue.tail).toEqual(listWithValue.head);
    expect(listWithValue.size).toEqual(1);
  });

  it('Should be able to add new values to the end of the list', () => {
    let list = new LinkedList();
    list.addToTail(1);

    expect(list.head.value).toEqual(1);
    expect(list.size).toEqual(1);

    for (let i = 2; i <= 1000; i++) {
      list.addToTail(i);
    }

    expect(list.head.value).toEqual(1);
    expect(list.tail.value).toEqual(1000);
    expect(list.size).toEqual(1000);
  });

  it('Should be able to add values to the beginning of the list', () => {
    let list = new LinkedList();

    list.addToHead(1);
    expect(list.head.value).toEqual(1);
    expect(list.size).toEqual(1);

    for (let i = 2; i <= 1000; i++) {
      list.addToHead(i);
    }

    expect(list.head.value).toEqual(1000);
    expect(list.tail.value).toEqual(1);
    expect(list.size).toEqual(1000);
  });

  it('Should be able to remove something from the end of the list', () => {
    let ll = new LinkedList();

    for (let i = 1; i <= 100; i++) {
      ll.addToTail(i);
    }

    expect(ll.removeFromTail()).toEqual(100);
    expect(ll.size).toEqual(99);

    expect(ll.removeFromTail()).toEqual(99);
    expect(ll.removeFromTail()).toEqual(98);
    expect(ll.removeFromTail()).toEqual(97);
    expect(ll.removeFromTail()).toEqual(96);
    expect(ll.removeFromTail()).toEqual(95);
    expect(ll.removeFromTail()).toEqual(94);
    expect(ll.removeFromTail()).toEqual(93);

    expect(ll.size).toEqual(92);
  });

  it('Should be able to remove something from the beginning of the list', () => {
    let ll = new LinkedList();

    for (let i = 1; i <= 100; i++) {
      ll.addToTail(i);
    }

    expect(ll.removeFromHead()).toEqual(1);
    expect(ll.size).toEqual(99);

    expect(ll.removeFromHead()).toEqual(2);
    expect(ll.removeFromHead()).toEqual(3);
    expect(ll.removeFromHead()).toEqual(4);
    expect(ll.removeFromHead()).toEqual(5);
    expect(ll.removeFromHead()).toEqual(6);
    expect(ll.removeFromHead()).toEqual(7);
    expect(ll.removeFromHead()).toEqual(8);

    expect(ll.size).toEqual(92)
  });

  it('Should be able to create a linked list within a certain range', () => {
    var ll = new LinkedList();
    ll.createWithinRange(1, 1000);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next.next.value).toEqual(6);
    expect(ll.tail.value).toEqual(1000);
    expect(ll.size).toEqual(1000)
  });

  it('Should not allow for a range to be created with a populated linked list', () => {
    var ll = new LinkedList(1);

    expect(() => {
      ll.createWithinRange(2, 10)
    }).toThrow('Linked list must be empty for this method to be used');
  });
});

