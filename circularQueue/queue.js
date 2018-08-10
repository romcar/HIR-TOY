module.exports = MyCircularQueue = function(n) {
	this.limit = n;
	this.size = 0;
	this.head = -1;
	this.tail = -1;
	storage = [];
};

MyCircularQueue.prototype.front = function() {
	return this.size ? storage[this.head] : -1;
};

MyCircularQueue.prototype.rear = function() {
	return this.size ? storage[this.tail] : -1;
};

MyCircularQueue.prototype.enqueue = function(val) {
	/* resets the pointers if the queue is empty */
	if (this.isEmpty()) {
		// this.head = -1;
		// this.tail = -1;
		this.head = this.tail = 0;
		storage[this.head] = val;
		++this.size;
		return true;
	}

	if (this.isFull()) {
		return false;
	}

	if (this.tail >= this.limit - 1 && !this.isFull()) {
		this.tail = storage.indexOf(undefined) - 1;
	}

	this.tail++;

	if (!storage[this.tail]) {
		storage[this.tail] = val;
		++this.size;
		return true;
	}
	return false;
};

MyCircularQueue.prototype.dequeue = function() {
	if (this.isEmpty()) return false;

	storage[this.head] = undefined;
	--this.size;
	++this.head;

	return true;
};

MyCircularQueue.prototype.isEmpty = function() {
	return this.size === 0;
};

MyCircularQueue.prototype.isFull = function() {
	return this.size === this.limit;
};

// const x = new MyCircularQueue(5);
// x.enqueue(2);
// x.enqueue(3);
// x.enqueue(4);
// console.log(x)
