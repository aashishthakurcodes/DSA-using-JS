// Creating a node in the binary search tree
class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Creating the Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// Adding the insertion function to the prototype
BinarySearchTree.prototype.insert = function (key) {
  // Creating a new node
  const newNode = new BSTNode(key);

  // If no root exists in the tree
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

// Helper method to handle insertion recursively
BinarySearchTree.prototype.insertNode = function (node, newNode) {
  // If the newNode key is less than the current node's key
  if (newNode.key < node.key) {
    // If there is no left child, add the newNode here
    if (node.left === null) {
      node.left = newNode;
    } else {
      // Recurse into the left subtree
      this.insertNode(node.left, newNode);
    }
  }
  // If the newNode key is greater than or equal to the current node's key
  else {
    // If there is no right child, add the newNode here
    if (node.right === null) {
      node.right = newNode;
    } else {
      // Recurse into the right subtree
      this.insertNode(node.right, newNode);
    }
  }
};

// Usage example:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

console.log(JSON.stringify(bst, null, 2));


// Adding the delete method to the prototype
BinarySearchTree.prototype.delete = function (key) {
  this.root = this.deleteNode(this.root, key);
};

// Helper method for deleting a node
BinarySearchTree.prototype.deleteNode = function (node, key) {
  // If the tree is empty
  if (node == null) {
    return null;
  }

  // Traverse the tree to find the key
  if (key < node.key) {
    node.left = this.deleteNode(node.left, key);
  } else if (key > node.key) {
    node.right = this.deleteNode(node.right, key);
  } else {
    // Node with one child or no child
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    // Node with two children: Find the inorder successor (minimum in the right subtree)
    let tempNode = this.findMinNode(node.right);
    node.key = tempNode.key;
    // Delete the inorder successor
    node.right = this.deleteNode(node.right, tempNode.key);
  }
  return node;
};

// Helper method to find the minimum node
BinarySearchTree.prototype.findMinNode = function (node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

