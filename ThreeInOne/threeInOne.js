const threeInOne = function (limit) {
  const tripleStack = {};
  const storage = [];
  tripleStack.limit = limit ? limit : 3;
  tripleStack.information = {};
  // we need a way to map out the starting coordinates based on limit given or default limit, thus splitting the array. This only needs to be done once in my opinion.
  (function init(l) {
    // initialize the coordinates for the stacks.
    let y = 0;
    for (let i = 0; i <= 2; i++) {
      let x = y;
      y = y + l;
      tripleStack.information[i] = {
        coordinates: [x, y - 1],
        size: 0,
        top: null
      };
      for (let j = x; j <= y - 1; j++) {
        storage[j] = undefined;
      }
    }
  })(tripleStack.limit);

  tripleStack.push = function (q, val) {

    // if the queue was not provided,
    if (!q && q !== 0) {
      // choose the first queue that is not full
      for (let i = 0; i <= 2; i++) {
        if (!this.isFull(i)) {
          q = i;
          return;
        }
      }
    }

    let start = this.information[q].coordinates[0];
    let end = this.information[q].coordinates[1];
    let top = this.information[q].top || start;
    for (let j = top; j <= end; j++) {
      if (!this.isFull(q)) {
        if (!storage[j]) {
          storage[j] = val;
          this.information[q].top = j;
          ++this.information[q].size;
          return;
        }
      } else {
        throw new Error(`Stack ${q} is full`);
      }
    }
  };

  tripleStack.isFull = function (q) {
    let top = this.information[q].top;
    let end = this.information[q].coordinates[1];
    return top === end;
  };

  tripleStack.isEmpty = function (q) {
    let top = this.information[q].top;
    let start = this.information[q].coordinates[0];
    return top < start;
  };

  tripleStack.pop = function (q) {
    let results = null;
    if (q || q === 0) {
      if (!this.isEmpty(q)) {
        let { top } = this.information[q];
        results = storage[top];
        storage[top] = undefined;
        --this.information[q].top;
        --this.information[q].size;
      } else {
        throw new Error(`Stack ${q} is empty`);
      }
    }
    return results;
  };

  tripleStack.peek = function (q) {
    return storage[this.information[q].top];
  };

  tripleStack.size = function (q) {
    return this.information[q].size;
  };

  return tripleStack;
};


module.exports = threeInOne;