const BinarySearchTree = require('./BinarySearchTree.js');
describe('Binary Search Tree', () => {
  it('Should be able to initialize the BST with or without a value', () => {
    const bst = new BinarySearchTree();
    expect(bst._root).toEqual(null);
    expect(bst._size).toEqual(0);

    const bst2 = new BinarySearchTree(1);
    expect(bst2._root.value).toEqual(1);
    expect(bst2._size).toEqual(1);
  });

  it('Should be add the first value as the root if the tree is initialized empty', () => {
    const bst = new BinarySearchTree();

    bst.add(19);
    expect(bst._root.value).toEqual(19);
    expect(bst._root.left).toEqual(null);
    expect(bst._root.right).toEqual(null);
  });

  it('Should be able to add items less than the parent node to the left of the parent node', () => {
    const bst = new BinarySearchTree(90);
    bst.add(20);
    bst.add(35);
    bst.add(100);
    bst.add(150);
    bst.add(19);
    bst.add(112);
    bst.add(91);
    bst.add(1);
    bst.add(8);
    bst.add(53);
    bst.add(923);
    bst.add(78);
    bst.add(11);
    bst.add(97);
    bst.add(170);
    bst.add(185);
    bst.add(135);
    bst.add(176);
    bst.add(113);
    bst.add(101);
    bst.add(954);
    const recurse = (current) => {
      // if both left and right exist
      if (current.left && current.right) {
        // test out both of them
        expect(current.value > current.left.value && current.value < current.right.value).toEqual(true);
        // recurse on each
        recurse(current.left);
        recurse(current.right);
        // if just the left exists
      } else if (current.left) {
        // check that one out
        expect(current.value > current.left.value).toEqual(true);
        recurse(current.left);
        // if just the right
      } else if (current.right) {
        // do the same
        expect(current.value < current.right.value).toEqual(true);
        recurse(current.right);
      } else {
        // if you hit anything else just return...
        return;
      }
    }

    recurse(bst._root);
  });

  it('Should be able to check to see if the tree contains a value', () => {
    const values = [343, 123, 54, 2, 9, 11, 90, 54, 75, 87, 456, 27, 64, 82, , 739, 855, 67, 55, 78, 1543, 8, 5, 4];

    const bst = new BinarySearchTree();

    values.forEach((value) => { bst.add(value) });
    // console.log(bst)
    values.forEach((value) => {
      expect(bst.contains(value)).toEqual(true);
    });

    expect(bst.contains('wonderful')).toEqual(false);
  });

  it('Should be able to remove items from a tree correctly', () => {
    const bst = new BinarySearchTree();

    bst.add(1);

    expect(bst.contains(1)).toEqual(true);
    expect(bst._size).toEqual(1);
    expect(bst.remove(1)).toEqual(1);
    expect(bst.contains(1)).toEqual(false);
    expect(bst._size).toEqual(0);

    let values = [30, 3, 18, 2, 4, 6, 19, 32, 7];
    values.forEach((value) => bst.add(value));

    expect(bst._size).toEqual(values.length);
    expect(bst.contains(2)).toEqual(true);
    expect(bst.contains(18)).toEqual(true);
    expect(bst.contains(7)).toEqual(true);
    expect(bst.remove(2)).toEqual(2); // 8 remaining
    expect(bst._size).toEqual(8);
    expect(bst.remove(18)).toEqual(18); //
    expect(bst._size).toEqual(7);
    expect(bst.contains(3)).toEqual(true);
    expect(bst.remove(17)).toEqual(false);

    expect(bst.contains(19)).toEqual(true);
    expect(bst.contains(6)).toEqual(true);
    expect(bst.contains(32)).toEqual(true);

  });
});