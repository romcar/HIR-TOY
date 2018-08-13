const loopDetection = (head) => {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer == fastPointer) {
      break;
    }
  };

  if (!fastPointer || !fastPointer.next) {
    return false;
  }
  slowPointer = head;
  while (slowPointer != fastPointer) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next;
  }

  return fastPointer.value;
}; // Time complexity: O(n)

module.exports = loopDetection;