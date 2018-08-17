const Tree = function (value) {
  this.value = value ? value : null;
  this.children = [];
  // we could add size here but it would then be on each tree node
}

Tree.prototype.constructor = Tree;

Tree.prototype.add = function (value) {
  let root = this;
  let node = new Tree(value);

  if (!root.value) {
    console.log('root')
    root.value = value;
  }

  root.children.push(node);
};


Tree.prototype.remove = function (value) {
  let result = null;
  let parent = null;
  (function find(current) {

    if (current.children.length) {
      for (let i = 0; i < current.children.length; i++) {
        parent = current;
        if (parent.children[i].value === value && parent.children[i].children.length) {
          parent.children.push(...parent.children[i].children);
          result = parent.children[i].value;
          parent.children = parent.children.slice(0, i).concat(parent.children.slice(i + 1));
        }
        if (parent.children[i].value === value && !parent.children[i].children.length) {
          result = parent.children[i].value;
          parent.children = parent.children.slice(0, i).concat(parent.children.slice(i + 1));
        }
        if (parent.children[i]) {
          find(parent.children[i])
        } else {
          return;
        }
      }
    }
  })(this);
  return result;
};

Tree.prototype.size = function () {
  let root = this;
  let size = 0;

  if (root.value) {
    ++size;
  } else {
    return 0;
  }

  (function calcSize(current) {
    if (current.children.length) {
      current.children.forEach(child => {
        ++size;
        calcSize(child);
      })
    } else {
      return size;
    }
  })(this);
  return size;
};

Tree.prototype.depth = function () {
  let root = this;
  let maxDepth = 0;
  (function dig(current, d) {
    // if the current node has children
    if (current.children.length) {
      // iterate through each child
      for (let i = 0; i < current.children.length; i++) {
        dig(current.children[i], d + 1);
      }
    } else {
      maxDepth = Math.max(maxDepth, d);
    }
  })(this, 0);

  return maxDepth;
};

Tree.prototype.contains = function (value) {
  let result = false;

  (function find(current) {
    if (current.value === value) {
      result = true;
    }
    for (let i = 0; i < current.children.length; i++) {
      find(current.children[i]);
    }
  })(this);
  return result;
};


module.exports = Tree;