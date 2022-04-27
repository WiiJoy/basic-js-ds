const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueItem = null
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queueItem
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const newListNode = new ListNode(value)

    if (this.queueItem === null) {
      this.queueItem = newListNode
    } else {
      let currListNode = this.queueItem

      while (currListNode.next !== null) {
        currListNode = currListNode.next
      }

      currListNode.next = newListNode
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currListNode = this.queueItem

    if (currListNode !== null) {
      this.queueItem = currListNode.next
      return currListNode.value
    }
  }
}

module.exports = {
  Queue
};
