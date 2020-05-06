'use strict';

class Node {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0
  }

  //depth first search - branch by branch

  // in-order
  // left, root, right
  inOrder() {

    function inHelper(node, result) {
      if (!node) {
        return result;
      }
      inHelper(node.left);
      result.push(node.val);
      inHelper(node.right);
      return result;
    }
    return inHelper(this.root, []);
  }

  // pre-order
  // root, left, right
  preOrder(node) {
    // let result = []

    if (!node) {
      return;
    }
    //capture root node value
    // result.push(node.val)

    // if left child exists, go left again
    let leftArr = [];
    if (node.left) {
      leftArr = this.preOrder(node.left)
    }
    //if right child exists, go right again
    let rightArr = [];
    if (node.right) {
      rightArr = this.preOrder(node.right)
    }
    return [node.val, ...leftArr, ...rightArr];
  }

  //post-order
  //left, right, root
  postOrder() {
    let result = [];

    function postHelper(node) {
      if (!node) {
        return;
      }
      postHelper(node.left);
      postHelper(node.right);
      result.push(node.val);
    }

    //get the recursion started to tranverse the tree
    postHelper(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        } else currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else currentNode = currentNode.right;
      } else if (currentNode.val === val) return;
    }
  }

  contains(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val > val) currentNode = currentNode.left;
      else if (currentNode.val < val) currentNode = currentNode.right;
      else if (currentNode.val === val) return true;
    }

    return false;
  }

  min() {
    let currentNode = this.root

    //continue traversing left until no more child
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.val;
  }

  //find maximum value in a Binary Search Tree
  max() {
    let currentNode = this.root

    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.val;
  }
  //breath first search - level by level
  //use a queue

}

module.exports = { BinaryTree, BinarySearchTree };
