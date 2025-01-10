//Basic linked list operations

//creating node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Creating Linked List

class LinkedList {
    constructor() {
        this.head = null;
    }
}

//iNSERTING ELEMENT AT BEGINING

LinkedList.prototype.insertBegining = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
}

//Inserting at the END
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    //First Case if no node (this.head===null)
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    //this.head.next 
    while (last.next){
        last=last.next;
    }
    
    last.next=newNode;

}

//Inserting at given point (prevnode is the given node with data and next pointr)
LinkedList.prototype.insertAfter=function(prevNode,data){
if(!prevNode){
    console.log("PrevNode cannot be null");
    return
}
const newNode=new Node(data,prevNode.next)
prevNode.next=newNode;

}