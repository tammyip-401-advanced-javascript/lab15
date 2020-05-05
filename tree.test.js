// You can successfully instantiate an empty tree
// You can successfully instantiate a tree and add a single root node
// You can successfully add a left and right child to a single root node
// You can successfully do a preOrder traversal
// You can successfully do an inOrder traversal
// You can successfully do a postOrder traversal
// You can successfully add a value to a binary search tree
// You can search a binary search tree for a value and get the correct true/false result

const BinaryTree = require('./tree.js');

describe('tree', () => {

  it('can instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.node).toBeUndefined;
  })

  describe('add', () => {
    it('can add a single root node', () => {
      const binaryTree = new BinaryTree();
      binaryTree.add(3)
      expect(binaryTree.node.value).toEqual(3)
    })

    it('can add a left and right child to a single root node', () => {
      const binaryTree = new BinaryTree();
      binaryTree.add(4);
      binaryTree.add(3);
      binaryTree.add(5);

      expect(binaryTree.node.left.value).toEqual(3);
      expect(binaryTree.node.right.value).toEqual(5);
    })
  })

  describe('preOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.add(12)
      binaryTree.add(2)
      binaryTree.add(15)
    })

    it('looks at the root first', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.node)
      expect(binaryTreePreOrder[0]).toEqual(12);
    })

    it('traverses to the left side next', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.node)
      expect(binaryTreePreOrder[1]).toEqual(2);
    })

    it('traverses to the right side last', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.node)
      expect(binaryTreePreOrder[2]).toEqual(15);

    })
  })

  describe('inOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.add(12)
      binaryTree.add(2)
      binaryTree.add(15)
    })

    it('looks at the left node first', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.node)
      expect(inOrderTree[0]).toEqual(2);
    })

    it('traverses to the root next', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.node)
      expect(inOrderTree[1]).toEqual(12);
    })

    it('traverses to the right side last', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.node)
      expect(inOrderTree[2]).toEqual(15);
    })
  })

  describe('postOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.add(12)
      binaryTree.add(2)
      binaryTree.add(15)
    })

    it('looks at the left node first', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.node)
      expect(postOrderTree[0]).toEqual(2);
    })

    it('traverses to right next', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.node)
      expect(postOrderTree[1]).toEqual(15);
    })

    it('traverses to the root last', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.node)
      expect(postOrderTree[2]).toEqual(12);
    })
  })

  describe('contains()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.add(12)
      binaryTree.add(2)
      binaryTree.add(15)
    })
    it('can search a value and return true or false', () => {
      const binaryTree = binaryTree.contains(binaryTree.node)
      expect(binaryTree.contains(12)).toEqual(true);
      expect(binaryTree.contains(3)).toEqual(false);
    })
  })
})
