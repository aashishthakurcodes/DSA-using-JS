
//Doubly Linked list Node..[prev[data]next]
class Node {
    constructor(data, next = null, prev = null) {
        this.next = next;
        this.data = data;
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
//Insertion at the begining of the node
DoublyLinkedList.prototype.insertatBegining = function (data) {
    const newNode = new Node(data, this.head, null)
    //when we have list of nodes point the prev of first node to new node 
    //when the list is not empty
    if (this.head !== null) {
        this.head.prev = newNode;
    }
    this.head = newNode;
    //when the list is empty
    if (this.tail === null) {
        this.tail = newNode
    }
}

//Insertion at given point
DoublyLinkedList.prototype.insertAtGivenPoint = function (data, prevNode) {
    if (prevNode == null) {
        console.log("Previous node is required")
        return;
    }

    const newNode = new Node(data, prevNode.next, prevNode)
    // Update the next node's previous pointer
    if (prevNode.next !== null) {
        prevNode.next.prevNode = newNode;
    }
    prevNode.next = newNode
    //tail
    if (newNode.next == null) {
        this.tail = newNode
    }
}

//Insertion at the end Point

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail)

    if (this.tail !== null) {
        this.tail.next = newNode

    }

    this.tail = newNode

    if (this.head === null) {
        this.head = newNode
    }

}

//Deletion  of first Node
DoublyLinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return // nothing to delete
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null

    }
    else {
        this.head = this.head.next;
        this.head.prev = null;
    }
}


DoublyLinkedList.prototype.deleteLastNode = function () {
    //if no tail or no node
    if (!this.tail) {
        console.log("DLL is empty")
        return
    }
    //if only one node
    if (this.head == this.tail) {
        this.head = this.tail = null;
    }
    else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

DoublyLinkedlist.prototype.reverse = function(){
    let current = this.head;
    let temp = null
  
    while(current != null){
      //swapping
      temp = current.prev
      current.prev = current.next
      current.next = temp;
      //move to next node
      current = current.prev
    }
    if (temp != null) {
      this.tail = this.head
      this.head = temp.prev
    }
  }

//   How Values Change
// Node 1: prev = Node 2, next = null
// Node 2: prev = Node 3, next = Node 1
// Node 3: prev = Node 4, next = Node 2
// Node 4: prev = null, next = Node 3