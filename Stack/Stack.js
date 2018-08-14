class Stack {

  constructor(limit) {
    this.items = [];
    this.limit = limit ? limit : null;
  };

  size() {
    return this.items.length;
  };

  push(val) {
    if (this.items.length > this.limit && this.limit) {
      throw new Error('Out of bounds, cannot add another item. Stack is full')
    }
    this.items[this.items.length] = val;
  };

  pop() {
    if (this.items.length <= 0) {
      throw new Error('Out of bounds, cannot remove item. Stack is empty')
    }
    let temp = this.items[this.items.length - 1];
    this.items.length = this.items.length - 1;
    return temp;
  };

  peek() {
    return this.items[this.items.length - 1];
  };
};

module.exports = Stack;