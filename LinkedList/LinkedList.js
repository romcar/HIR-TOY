const Node = (val) => {
  const node = {};
  node.value = val;
  node.next = null;
  return node;
}
const LinkedList = function (val) {
  this.head = val ? Node(val) : null;
  this.tail = val ? this.head : null;
  this.size = val ? 1 : 0;
};

LinkedList.prototype.addToTail = function (val) {
  // if there is nothing in the list start one
  if (this.head === null) {
    this.head = Node(val);
    this.tail = this.head;
    this.size++;
    return;
  }

  // else reference the tail
  this.tail.next = Node(val);
  this.tail = this.tail.next
  this.size++;
  return;
}; // Time complexity: O(1);

LinkedList.prototype.addToHead = function (val) {
  if (this.head === null) {
    this.head = Node(val);
    this.tail = this.head;
    this.size++;
    return;
  }

  let temp = this.head;
  this.head = Node(val);
  this.head.next = temp;
  this.size++;
  return;
}; // Time complexity: O(1)

LinkedList.prototype.removeFromHead = function () {
  let temp = this.head.value;
  this.head = this.head.next;
  this.size--;
  return temp;
}; // Time complexity: O(1);

LinkedList.prototype.removeFromTail = function () {
  let temp = this.tail.value;
  let head = this.head;
  let prev = null;
  while (head && head.next) {
    prev = head;
    head = head.next;
  }

  this.tail = prev;
  this.tail.next = null;
  this.size--;
  return temp;
}; // Time complexity: O(n) -- because of while loop

LinkedList.prototype.createWithinRange = function (min, max) {
  if (this.head) {
    throw new Error('Linked list must be empty for this method to be used');
  } else {
    for (min; min <= max; min++) {
      this.addToTail(min)
    }
  }
}; // Time complexity: O(n) n = max - min

module.exports = LinkedList;