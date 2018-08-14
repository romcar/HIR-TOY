class Queue {
  constructor(limit, ) {
    this.storage = [];
    this.limit = limit ? limit : null;
    this.size = 0;
  }

  enqueue(val) {
    if (this.limit && this.limit === this.size) {
      throw new Error('Queue is full');
    }

    this.storage = [val].concat(this.storage);
    this.size++;
  }// Time complexity O(1);

  dequeue() {
    if (this.size <= 0) {
      this.size = 0;
      throw new Error('Queue is empty');
    }
    return this.storage[--this.size];
  }// Time complexity O(1);

  peek() {
    return this.storage[this.size - 1];
  }// Time complexity O(1);
}

module.exports = Queue;