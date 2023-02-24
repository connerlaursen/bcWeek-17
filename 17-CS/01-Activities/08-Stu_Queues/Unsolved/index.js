// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(container =[]) {

    this.container = container;
  }
  
  addToQueue(el) {

    return this.container.push(el);
  }

  removeFromQueue(el) {


  return this.container.shift(el);
  }
  }
  


module.exports = Queue;
