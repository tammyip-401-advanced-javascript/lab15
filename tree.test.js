// You can successfully instantiate an empty tree
// You can successfully instantiate a tree and add a single root node
// You can successfully add a left and right child to a single root node
// You can successfully do a preOrder traversal
// You can successfully do an inOrder traversal
// You can successfully do a postOrder traversal
// You can successfully add a value to a binary search tree
// You can search a binary search tree for a value and get the correct true/false result

const Tree = require('./tree.js');

describe('queue operations', () => {
  it('can successfully enqueue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');

    expect(myQueue.isEmpty()).toBe(false);
    expect(myQueue.peek()).toBe('red');
  });

  it('can successfully enqueue multiple values into a queue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');
    myQueue.enqueue('orange');
    myQueue.enqueue('green');
    myQueue.enqueue('blue');

    expect(myQueue.isEmpty()).toBe(false);
    expect(myQueue.peek()).toBe('red');
  });

  it('can successfully dequeue out of a queue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');
    myQueue.enqueue('orange');

    expect(myQueue.isEmpty()).toBe(false);
    expect(myQueue.peek()).toBe('red');

    let dequeuedNode = myQueue.dequeue();

    expect(dequeuedNode.val).toBe('red');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();

    console.log(myQueue);

    expect(myQueue.isEmpty()).toBe(true);
    expect(myQueue.front).toBe(null);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');

    expect(myQueue.peek()).toBe('red');
  });

  it('can successfully instantiate an empty queue', () => {
    let myQueue = new Queue();

    expect(myQueue.isEmpty()).toBe(true);
    expect(myQueue.front).toBe(null);
  });

  it('raises an exception when dequeue or peek on empty queue', () => {
    let myQueue = new Queue();

    expect(myQueue.isEmpty()).toBe(true);
    expect(myQueue.front).toBe(null);

    expect(() => {
      myQueue.peek();
    }).toThrow();
    expect(() => {
      myQueue.dequeue();
    }).toThrow();
  });
});
