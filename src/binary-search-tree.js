const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootTree
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let newNode = new Node(data);

    if (!this.rootTree){
      this.rootTree = newNode;
    } else {
      this.insertNode(this.rootTree, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }


  }

  has(data, node = this.rootTree) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

      if (!node) return false

      if (node.data === data) return true

      if (data < node.data) {
        return this.has(data, node.left)
      } else {
        return this.has(data, node.right)
      }
  }

  find(data, node = this.rootTree) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

      if (!node) return null

      if (node.data === data) return node

      if (data < node.data) {
        return this.find(data, node.left);
      } else {
        return this.find(data, node.right);
      }
  }

  remove(data, node = this.rootTree) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!node) return null

    if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;
    } else if (node.data < data) {
      node.right = this.remove(data, node.right);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.data = minRightNode.data;

      node.right = this.remove(minRightNode.data, node.right);

      return node;
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

// const testTree = new BinarySearchTree();

// testTree.add(1);
// testTree.add(2);
// testTree.add(3);
// testTree.add(4);
// testTree.add(5);

// console.log(testTree)

// console.log(testTree.root().data)
// console.log(testTree.min())
// console.log(testTree.max())
// testTree.remove(5);
// console.log(testTree.has(5))
// console.log(testTree.max())

module.exports = {
  BinarySearchTree
};