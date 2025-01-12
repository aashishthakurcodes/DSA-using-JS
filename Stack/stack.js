class Stack{
    constructor(){
        this.stack=[]
    }

//Adding Data to stack
push(data){
    this.stack.push(data)
  }
}
let myStack=new Stack();
myStack.push(78)