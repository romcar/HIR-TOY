const toHashedIndex = (value, max) => {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) + hash + value.charCodeAt(i);
    hash = hash & hash;
  };
  return Math.abs(hash % max);
  // Should return an always positive index from 0 to max
}

const HashMap = function () {
  // We will always have a limit of 4 on first instantiation
  const hashMap = {};
  let storage = [];
  hashMap.size = 0;
  hashMap.limit = 4;

  hashMap.resize = function () {
    let percent = this.size / this.limit;

    if (percent >= 0.75) {
      let oldStorage = storage;
      this.limit = this.limit * 2;
      storage = [];
      this.size = 0;
      oldStorage.forEach(bucket => {


        for (let i = 0; i < bucket.length; i++) {
          this.set(bucket[i][0], bucket[i][1], true);
        }
      });
    } else if (percent <= 0.25 && this.limit > 4) {
      let oldStorage = storage;
      this.limit = this.limit / 2;
      storage = [];
      this.size = 0;
      oldStorage.forEach(bucket => {

        for (let i = 0; i < bucket.length; i++) {
          this.set(bucket[i][0], bucket[i][1], true);
        }
      });
    }
  }

  hashMap.set = function (key, value, isResizing = false) {
    isResizing ? null : this.resize(this, storage);

    let index = toHashedIndex(key, this.limit);

    !storage[index] ? storage[index] = [[key, value]] : storage[index].push([key, value]);

    ++this.size;
  };

  hashMap.get = function (key) {
    let result = false;
    let index = toHashedIndex(key, this.limit);
    let bucket = storage[index];
    if (!bucket) {
      return false;
    }
    if (bucket) {
      bucket.forEach((tuple) => {
        if (tuple[0] === key) {
          result = tuple[1];
        }
      });
    } else {
      return false;
    }
    return result;
  };

  hashMap.has = function (key) {
    return !!this.get(key);
  };

  hashMap.keys = function () {
    let results = [];

    storage.forEach(bucket => {
      bucket.forEach(tuple => {
        if (tuple) [
          results.push(tuple[0])
        ]
      })
    })
    return results;
  };
  hashMap.values = function () {
    let results = [];

    storage.forEach(bucket => {
      bucket.forEach(tuple => {
        if (tuple) {
          results.push(tuple[1]);
        }
      });
    });
    return results;
  };
  hashMap.clear = function () {
    storage = [];
    this.size = 0;
    this.limit = 4;
  };
  hashMap.delete = function (key) {
    this.resize();
    let result = null;
    let index = toHashedIndex(key, this.limit);
    if (storage[index]) {
      storage[index] = storage[index].reduce((newBucket, tuple) => {
        if (tuple[0] !== key) {
          newBucket.push(tuple);
        } else {
          result = tuple;
          this.size = this.size - 1;
        }

        return newBucket;
      }, []);
    }
    this.resize();
    return result;
  };

  return hashMap
};

module.exports = HashMap;