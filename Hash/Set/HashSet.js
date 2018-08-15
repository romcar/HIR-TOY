const toHashedIndex = (val, max) => {
  let hash = 0;

  for (var i = 0; i < val.length; i++) {
    hash = (hash << 5) + hash + val.charCodeAt(i);
    hash = hash & hash;
    has = Math.abs(hash);
  }
  return Math.abs(hash % max);
}

const HashSet = function (num) {
  const hashSet = {};
  const storage = [];
  hashSet.limit = num || 4;
  hashSet.size = 0;


  hashSet.add = function (value) {
    let index = toHashedIndex(value, this.limit);

    if (!storage[index]) {
      storage[index] = [value];
      ++this.size;
    } else {
      if (!storage[index].includes(value)) {
        storage[index].push(value);
        ++this.size;
      }
    }
  }; // Time complexity: O(1)

  hashSet.remove = function (value) {
    let index = toHashedIndex(value, this.limit);
    let result = null;
    if (!storage[index]) {
      throw new Error('Does not exists');
    }

    let bucket = storage[index];

    bucket = bucket.reduce((newBucket, entry) => {
      if (entry !== value) {
        newBucket.push(entry);
        return newBucket;
      } else {
        result = entry;
        this.size--;
      }
    }, []);
    storage[index] = bucket;
    return result;
  };

  hashSet.destroy = function () {
    storage = [];
    this.size = 0;
    this.limit = 4;
    return;
  };// Time complexity: O(1)

  hashSet.clone = function () {
    return this;
  };

  hashSet.contains = function (value) {
    let index = toHashedIndex(value, this.limit);
    let found = false;
    if (!storage[index]) {
      return false;
    }

    const bucket = storage[index];
    bucket.forEach((entry) => {
      if (entry === value) {
        found = true;
      }
    });
    return found;
  };// Time complexity: O(1), O(log(n))

  hashSet.isEmpty = function () {
    return this.size <= 0;
  };// Time complexity: O(1)

  hashSet.iterator = function () {
    let current = 0;
    let bucketItem = 0;
    let count = 0;
    let size = this.size;
    let limit = this.limit;
    return recurse = function () {
      // if (count <= this.size) {
      if (count === size || current >= limit) {
        return;
      }
      let result = null;
      if (storage[current] && storage[current].length) {
        let currentItem = storage[current][bucketItem];
        if (currentItem) {
          ++bucketItem;
          if (count !== size) {
            return currentItem;

          }
        }
        bucketItem = 0;
        ++current;
        result = recurse();

        if (result) {
          ++count;
          return result;
        }
      } else {
        ++current;
        result = recurse();
        if (result) {
          return result;
        }
      }
    }
  };

  return hashSet;
}



module.exports = HashSet;