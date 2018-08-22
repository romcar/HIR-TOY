const Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const BinarySearchTree = function (value) {
  this._root = value ? new Node(value) : null;
  this._size = this._root ? 1 : 0;
}

BinarySearchTree.prototype.constructor = BinarySearchTree;

BinarySearchTree.prototype.add = function (value) {
  let node = new Node(value);
  let current = this._root;

  if (!current) {
    this._root = node;
    ++this._size;
    return;
  }

  let parent = null;
  while (current) {
    if (value < current.value) {
      parent = current;
      current = current.left;
    } else {
      parent = current;
      current = current.right;
    }
  }
  value > parent.value ? parent.right = node : parent.left = node;
  ++this._size;
};

BinarySearchTree.prototype.remove = function (value) {
  let current = this._root;
  let result = null;
  let parent = null;
  if (this.contains(value)) {
    while (current) {
      if (current.value !== value) {
        parent = current;

        if (value > current.value) {
          current = current.right;
        } else {
          current = current.left;
        }
      } else {
        break;
      }
    }
  } else {
    return false;
  }


  if (parent) {
    if (current.right && current.left) {
      if (parent.left && parent.left.value === value) {
        console.log(parent)
        parent.left = current.right;
        parent.left.left = current.left
        result = current.value;
        --this._size;
      } else {
        parent.right = current.right;
        parent.right.left = current.left;
        result = current.value;
        --this._size;
      }
    } else if (current.left && !current.right) {
      if (parent.left && parent.left.value === value) {
        parent.left = current.left;
        result = current.value;
        --this._size;
      } else {
        parent.left = current.right;
        result = current.value;
        --this._size;
      }
    } else if (current.right && !current.left) {
      if (parent.left && parent.left.value === value) {
        parent.left = current.right;
        result = current.value;
        --this._size;
      } else {
        parent.right = current.right;
        result = current.value;
        --this._size;
      }
    } else {
      if (parent.right.value === value) {
        parent.right = null;
        result = current.value;
        --this._size;
      } else {
        parent.left = null;
        result = current.value;
        --this._size;
      }
    }

  } else {

    if (current.value === value) {
      result = current.value;
      this._root = null;
      --this._size;
    }

  }
  return result;
};
BinarySearchTree.prototype.contains = function (value) {
  let current = this._root;

  if (!current) {
    return false;
  }

  while (current) {
    if (current.value === value) {
      result = true;
      return true;
    }

    if (current.value > value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};
BinarySearchTree.prototype.depth = function (val) {
  let current = this._root;
  let height = null;
  while (val && current && current.value !== val) {
    if (current.value < val) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
}
BinarySearchTree.prototype.preOrder = function () {
  let results = [];

  (function preTraversal(current) {
    if (!current) { return; }
    results.push(current.value)
    preTraversal(current.left);
    preTraversal(current.right);
  })(this._root);
  return results;
};
BinarySearchTree.prototype.inOrder = function () {
  let results = [];

  (function inTraversal(current) {
    if (!current) { return; }
    inTraversal(current.left);
    results.push(current.value)
    inTraversal(current.right);
  })(this._root);
  return results;
};

BinarySearchTree.prototype.postOrder = function () {
  let results = [];

  (function postTraversal(current) {
    if (!current) { return; }
    postTraversal(current.left);
    postTraversal(current.right);
    results.push(current.value)
  })(this._root);
  return results;
};

module.exports = BinarySearchTree;