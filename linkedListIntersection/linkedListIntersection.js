const linkedListIntersection = (l1, l2) => {
  const getSizeAndLastNodeOfLinkedList = (l) => {
    // iterates over list and calculates size and finds
    // tail node.

    let size = 0;

    // is the list null
    if (l === null) {
      return { size, tail: null };
    }

    size++;
    while (l.next) {
      size = size + 1;
      l = l.next;
    }
    return { size, tail: l }
  }

  /*
    Get the size and the tail node of each linked list
  */
  const result1 = getSizeAndLastNodeOfLinkedList(l1);
  const result2 = getSizeAndLastNodeOfLinkedList(l2);

  // console.log(result1.tail === result2.tail)
  if (result1.tail != result2.tail) {
    // console.log(result1.tail != result2.tail)
    return null;
  }

  /*
    Determine which list is shorter
  */

  // Get the absolute value because at this point we do not
  // know who is larger and who is smaller
  let difference = Math.abs(result1.size - result2.size);
  let shortList = result1.size <= result2.size ? l1 : l2;
  let longList = result2.size >= result1.size ? l2 : l1;

  while (difference) {
    longList = longList.next;
    difference--;
  }

  while (shortList != longList) {
    shortList = shortList.next;
    longList = longList.next;
  }

  return longList;



}

module.exports = linkedListIntersection;