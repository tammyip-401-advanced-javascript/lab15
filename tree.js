'use strict';

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value)
    this.count = 0
  }

  size() {
    return this.count
  }

  add(val) {
    this.count++

    let newNode = new Node(val)

    const searchTree = node => {
      //if value < node.value, go left
      if (val < node.value) {
        if (!node.left) {
          node.left = newNode
        } else {
          // if already had a node there, look left again to see if there's an open space
          searchTree(node.left)
        }
      }
      // if value > node.value, go right
      else if (val > node.value) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root);
  }

  contains(val) {
    let currentNode = this.root

    while (currentNode) {
      if (val === currentNode.value) {
        return true;
      }
      if (val < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    //traverse the entire tree and exit the while loop, and never found the value
    return false;
  }

  min() {
    let currentNode = this.root

    //continue traversing left until no more child
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.node

    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value;
  }

  //depth first search - branch by branch

  // in-order
  // left, root, right
  inOrder(node) {
    let result = []

    if (!node) {
      return;
    }
    // if left child exists, go left again
    if (node.left) {
      this.inOrder(node.left)
    }
    //capture root node value
    result.push(node.value)

    //if right child exists, go right again
    if (node.right) {
      this.inOrder(node.right)
    }
    return result;
  }

  // pre-order
  // root, left, right
  preOrder(node) {
    let result = []

    if (!node) {
      return;
    }
    //capture root node value
    result.push(node.value)

    // if left child exists, go left again
    if (node.left) {
      this.preOrder(node.left)
    }
    //if right child exists, go right again
    if (node.right) {
      this.preOrder(node.right)
    }
    return result;
  }

  //post-order
  //left, right, roof
  postOrder(node) {
    let result = []

    if (!node) {
      return;
    }

    // if left child exists, go left again
    if (node.left) {
      this.postOrder(node.left)
    }
    //if right child exists, go right again
    if (node.right) {
      this.postOrder(node.right)
    }
    //capture root node value
    result.push(node.value)

    return result;
  }

  //breath first search - level by level
  //use a queue

}

module.export = BinaryTree
