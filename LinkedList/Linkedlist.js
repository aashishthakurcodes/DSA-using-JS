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
    while (last.next) {
        last = last.next;
    }

    last.next = newNode;

}

//././././

//Inserting at given point (prevnode is the given node with data and next pointr)
LinkedList.prototype.insertAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("PrevNode cannot be null");
        return
    }
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode;

}

//Deleting a node at the begining.

LinkedList.prototype.deleteAtbegining = function () {
    if (!this.head) {
        console.log("Node is already empty")
        return;
    }
    this.head = this.head.next
}

//Deleting at the End
LinkedList.prototype.deleteAtEnd = function () {
    if (!this.head) {
        console.log("Node is already empty")
        return;
    }

    if (this.head.next) {
        this.head = null;
        return
    }
    let secondLast = this.head;
    //if secondlast.next.next===value
    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }
    //if secondlast.next.next==null
    secondLast.next = null;
}


//Deletion by Key
LinkedList.prototype.deleteBykey=function(key){
    if(!this.head){
        console.log("List is empty")
        return
    }
    if(this.head.data===key){
        this.head=this.head.next;
        return
    }

    const currentValue=this.head;
    while(currentValue.next !== null){
        if(currentValue.next.data===key){
            currentValue.next=currentValue.next.next
            return
        }
        currentValue=currentValue.next;
    }

    console.log("No node found with given data")
}


//Searching the element
LinkedList.prototype.searchElement=function(key){
    let currentValue=this.head;
    while(currentValue){
        if(currentValue.data===key){
            console.log("Data Found")
            return true
        }
       
    }
    console.log("Data Not Found");
    return false;
}

//Tarversal List
LinkedList.prototype.traversalList=function(){
    let currentValue=this.head;
    let list=[]
    while(currentValue){
        list.push(currentValue.data) //adding data in node
        currentValue=currentValue.next //Move to next node
    }
    console.log(list.join("->"));
   
}

// reverse a linked list

LinkedList.prototype.reverse = function(){
    let current = this.head
    let prev = null
    let next = null
  
    while(current){
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }