// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(stackContainer=[]){
        this.stackContainer = stackContainer;
    }
    add(value){
        return this.stackContainer.push(value)
    }
    remove(){
        return this.stackContainer.pop()
    }
}

module.exports = Stack;
