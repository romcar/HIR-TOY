const Tree = require('./Tree.js');

describe('Tree with n children', () => {
  it('Should initialize a tree to null', () => {
    const tree = new Tree();

    expect(tree.value).toEqual(null);
    expect(tree.children.length).toEqual(0);
  });

  it('Should be able to add a child to the tree', () => {
    const tree = new Tree(1); // depth : 0
    tree.add(2); // depth: 1
    tree.add(3); // depth: 1
    const two = tree.children[0];
    const three = tree.children[1];
    two.add(4); // depth: 2
    two.add(5); // depth: 2
    three.add(6); // depth: 2
    three.add(7); // depth: 2
    const treeLeft = two.children[0];
    const treeRight = two.children[1];
    treeLeft.add(52); // depth: 3
    treeRight.add(51);
    const four = treeLeft.children[0];
    four.add('x')
    four.add('x')
    four.add('x')

    expect(tree.value).toEqual(1);
    expect(tree.size()).toEqual(12);
    expect(tree.depth()).toEqual(4);
  });

  it('Should be able to remove nodes from the tree', () => {
    const tree = new Tree(1);

    tree.add(2);
    tree.add(3);

    const d2Left = tree.children[0];
    const d2Right = tree.children[1];

    d2Left.add(4);
    d2Left.add(5);
    d2Right.add(6);
    d2Right.add(7);
    d2Right.add(8);
    d2Right.add(9);

    expect(tree.size()).toEqual(9);
    expect(tree.depth()).toEqual(2);

    tree.remove(9);
    tree.remove(8);
    tree.remove(7);
    tree.remove(6);

    expect(tree.size()).toEqual(5);
  });

  it('Should return true if the tree has what we are looking for', () => {
    const tree = new Tree('cat');
    tree.add('dog');
    tree.add('monkey');

    const d2Left = tree.children[0];
    const d2Right = tree.children[1];

    d2Left.add('bird');
    d2Left.add('ladybug');
    d2Right.add('watermelon');
    d2Right.add('javascript');
    d2Right.add('keyboard');
    d2Right.add('painting');

    expect(tree.contains('bird')).toEqual(true);
    expect(tree.contains('watermelon')).toEqual(true);
    expect(tree.contains('ladybug')).toEqual(true);
    expect(tree.contains('monkey')).toEqual(true);
  });

  it('Should return false if the item does NOT exists in the tree', () => {
    const tree = new Tree('cat');
    tree.add('dog');
    tree.add('monkey');

    const d2Left = tree.children[0];
    const d2Right = tree.children[1];

    d2Left.add('bird');
    d2Left.add('ladybug');
    d2Right.add('watermelon');
    d2Right.add('javascript');
    d2Right.add('keyboard');
    d2Right.add('painting');

    expect(tree.contains('erwin')).toEqual(false);
    expect(tree.contains('money')).toEqual(false);
    expect(tree.contains('tree')).toEqual(false);
  });
});