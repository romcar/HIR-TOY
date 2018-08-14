const Queue = require('./Queue.js');

describe('Queue', () => {
  it('Should instantiate an empty queue', () => {
    const q = new Queue();

    expect(q.size).toEqual(0);
    expect(q.limit).toEqual(null);
    expect(q.peek()).toEqual(undefined);
  });

  it('Should be able to instantiate a queue with a limit', () => {
    const q = new Queue(3);

    expect(q.size).toEqual(0);

    expect(q.limit).toEqual(3);
    expect(q.peek()).toEqual(undefined);
  });

  it('Should be able to add items to the queue', () => {
    const q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.peek()).toEqual(1);
    expect(q.size).toEqual(3);
  });

  it('Should be able to remove items from queue ', () => {
    const q = new Queue();

    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    q.enqueue(4);

    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(4);
    expect(() => {
      q.dequeue()
    }).toThrow("Queue is empty");
  });

  it('Should return error if limit is reached in the queue ', () => {
    const q = new Queue(5);

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(() => {
      q.enqueue(6);
    }).toThrow();

    q.dequeue();
    q.dequeue();
    q.enqueue(6);
    q.enqueue(7);
  });
});

  /*
    A Queue is a last in first out data structure
    it usually has a enqueue and dequeue method. Enqueue adds an element to one side of the the storage array (or linked list). Dequeue removes and item from the other side of the storage array.

    It also is able to peek into the first item in the storage item.

    If the queue is implemented with an array, the size variable can be omitted.

    A queue, given a limit(number: first parameter), can be circular in nature. If the second parameter is false and the queue becomes full, then an error will be thrown.

    The queue can tell when it's empty and when it is full
  */