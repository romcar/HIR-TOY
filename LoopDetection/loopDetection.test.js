const LinkedList = require('../LinkedList/LinkedList.js');

const loopDetection = require('./loopDetection.js');


describe('Loop detection for linked list', () => {
  it('Should be able to detect when a linked list loops', () => {
    let ll = new LinkedList();
    ll.createWithinRange(0, 10);

    ll.tail.next = ll.head.next.next;

    expect(loopDetection(ll.head)).toEqual(2);
  });

  it('Should be able to do a huge loop', () => {
    let ll = new LinkedList();
    ll.createWithinRange(0, 100000);

    let temp = ll.head;
    for (let i = 0; i <= 5000; i++) {
      temp = temp.next;
    }
    ll.tail.next = temp;

    expect(loopDetection(ll.head)).toEqual(5001);
  });

  it('Should return false when there is no loop found', () => {
    let ll = new LinkedList();
    ll.createWithinRange(0, 99);
    expect(loopDetection(ll.head)).toEqual(false);
  });
});