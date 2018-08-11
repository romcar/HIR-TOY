const linkedListIntersection = require('./linkedListIntersection.js');

const createLLInRange = (i, j) => {
  const Node = (val) => {
    const obj = {};
    obj.value = val;
    obj.next = null;
    return obj;
  } // end node
  var temp = Node(i);
  var result = temp;
  while (++i <= j) {
    temp.next = Node(i);
    temp = temp.next;
  } // end while

  return result;
};

describe('Linked Lists Intersect', () => {
  it('Should return the value of the node on which the two linked list intersect', () => {
    let l1 = createLLInRange(0, 5);
    let l2 = createLLInRange(5, 10);

    let temp1 = l1;
    let temp2 = l2;
    while (temp1.next !== null) {
      temp1 = temp1.next;
    }

    while (temp2.next !== null) {
      temp2 = temp2.next;
    }

    let l3 = createLLInRange(20, 25);
    let expected = l3;
    temp1.next = l3;
    temp2.next = l3;

    expect(linkedListIntersection(l1, l2)).toEqual(expected);
  });

  it('Should return null if the linked lists do not intersect', () => {
    let l1 = createLLInRange(0, 10);
    let l2 = createLLInRange(0, 50);

    expect(linkedListIntersection(l1, l2)).toEqual(null);
  });
});