// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(container=[]){
        this.container= container
    }
    addToQueue(value){
        return this.container.push(value);
    }
    removeFromQueue(){
        return this.container.shift();
    }
}

module.exports = Queue;
