// You can successfully instantiate an empty tree
// You can successfully instantiate a tree and add a single root node
// You can successfully add a left and right child to a single root node
// You can successfully do a preOrder traversal
// You can successfully do an inOrder traversal
// You can successfully do a postOrder traversal
// You can successfully add a val to a binary search tree
// You can search a binary search tree for a val and get the correct true/false result

const trees = require('./tree.js');
const BT = trees.BinaryTree;
const BST = trees.BinarySearchTree;

describe('tree', () => {

  it('can instantiate an empty tree', () => {
    const binaryTree = new BT();
    expect(binaryTree).toBeDefined();
    expect(binaryTree.root).toBe(null);
  })

  describe('add', () => {
    it('can add a single root node', () => {
      const binaryTree = new BST();
      binaryTree.add(3)
      expect(binaryTree.root.val).toEqual(3)
    })

    it('can add a left and right child to a single root node', () => {
      const binaryTree = new BST();
      binaryTree.add(4);
      binaryTree.add(3);
      binaryTree.add(5);

      expect(binaryTree.root.val).toEqual(4);
      expect(binaryTree.root.left.val).toEqual(3);
      expect(binaryTree.root.right.val).toEqual(5);
    })
  })

  describe('preOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BST();
      binaryTree.add(12)
      binaryTree.add(2)
      binaryTree.add(15)
    })

    it('looks at the root first', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[0]).toEqual(12);
    })

    it('traverses to the left side next', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[1]).toEqual(2);
    })

    it('traverses to the right side last', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[2]).toEqual(15);
    })

    it('can return a tree in preOrder', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder).toEqual([12, 2, 15]);
    })

    describe('inOrder()', () => {
      let binaryTree;
      beforeEach(() => {
        binaryTree = new BST();
        binaryTree.add(12)
        binaryTree.add(2)
        binaryTree.add(15)
      })
    })

    describe('postOrder()', () => {
      let binaryTree;
      beforeEach(() => {
        binaryTree = new BST();
        binaryTree.add(12)
        binaryTree.add(2)
        binaryTree.add(15)
      })

      it('can return a tree in postOrder', () => {
        // const binaryTreePreOrder = binaryTree.postOrder()
        expect(binaryTree.postOrder()).toEqual([2, 15, 12]);
      })
    })

    describe('contains()', () => {
      let binaryTree;
      beforeEach(() => {
        binaryTree = new BST();
        binaryTree.add(12)
        binaryTree.add(2)
        binaryTree.add(15)
      })
      it('can search a val and return true or false', () => {
        expect(binaryTree.contains(12)).toBe(true);
        expect(binaryTree.contains(3)).toBe(false);
      })
    })

    describe('max()', () => {
      let binaryTree;
      beforeEach(() => {
        binaryTree = new BST();
        binaryTree.add(12)
        binaryTree.add(2)
        binaryTree.add(15)
      })
      it('can search a val and return true or false', () => {
        expect(binaryTree.max()).toBe(15);
      })
    })
  })
})

