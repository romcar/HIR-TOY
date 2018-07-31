const MyCircularQueue = require('./queue.js');
let circularQueue,
    queueSize;
beforeEach(() => {
  queueSize = 5000;
  circularQueue = new MyCircularQueue(queueSize);
});
describe('MyCircularQueue', () => {
  it('MyCircularQueue is a function', ()=> {
    expect(MyCircularQueue).toBeInstanceOf(Function);
  });

  it('Should have a front function', ()=> {
    expect(circularQueue.front).toBeInstanceOf(Function);
  });

  it('Should have a rear function', () => {
    expect(circularQueue.rear).toBeInstanceOf(Function);
  });

  it('Should have a enqueue function', () => {
    expect(circularQueue.enqueue).toBeInstanceOf(Function);
  });

  it('Should have a dequeue function', () => {
    expect(circularQueue.dequeue).toBeInstanceOf(Function);
  });

  it('Should have a isFull function', () => {
    expect(circularQueue.isFull).toBeInstanceOf(Function);
  });

  it('Should have a isEmpty function', () => {
    expect(circularQueue.isEmpty).toBeInstanceOf(Function);
  });

  it('Should have a size number', ()=> {
    let type = typeof circularQueue.size;
    expect(type).toBe("number");
  });

  it('Should be able to add an element to the circular queue', ()=> {
    for(let i = 0; i < queueSize; i ++) {
      circularQueue.enqueue(i);
      expect(circularQueue.size).toBe(i+1);
    }
  });

  it('Should return false if an element was not added to the queue', ()=> {
    for (let i = 0; i <= queueSize; i++) {
      circularQueue.enqueue(i);
    };

    expect(circularQueue.enqueue("wonderful")).toBe(false);
    expect(circularQueue.tail).toBe(queueSize-1);
    expect(circularQueue.size).toBe(queueSize);

  });

  it('Should assign head and tail to first element inserted', ()=> {
      circularQueue.enqueue(0);
      expect(circularQueue.size).toBe(1);

    expect(circularQueue.front()).toBe(0);
    expect(circularQueue.rear()).toBe(0);
  });

  it('Should be able to remove an element from the queue', ()=> {
    for (let i = 0; i <= queueSize; i++) {
      circularQueue.enqueue(i);
    }

    // console.log(circularQueue.tail);
    for (let i = 0; i <= queueSize - 1; i++) {
      expect(circularQueue.dequeue()).toBe(true);
    }
  });

});