## Lab 15 DSA: Tree Implementation

## Challenge
Create a BinaryTree class and it should have the following methods/functions:

preOrder() - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order

inOrder() - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order

postOrder() - A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order

add(val) - A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree

contains(val) - A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not

## Approach & Efficiency
Use recursion for depth first search traversal

Big O:
preOrder(): O(N)
inOrder(): O(N)
postOrder(): O(N)
add(): O(h), h = tree height 
contains(): O(h), h = tree height 

## API
preOrder(): traverses tree in the order of root, left, right
inOrder(): traverses tree in the order of left, root, right
postOrder(): traverses tree in the order of left, right, root
add(): adds a new node containing a given value to the tree (for smaller value, keep looking to the left until there is an open space in the tree, for bigger value, keep looking to the right until there is an open space to add the new node.)
contains(): traverses the tree to find a given value

## Testing
Run in the termial: npm test tree.test.js

