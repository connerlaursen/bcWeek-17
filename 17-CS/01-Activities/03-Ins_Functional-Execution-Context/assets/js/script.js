
// // 'use strict'
// // In the browser, the keyword 'this' in the Global Execution Context is the window object
// const globalThis = this; // window
// function myFuncA() {
//   console.log('globalThis', globalThis);
//   console.log('myFuncAThis', this);
//   // since this was not assigned by the call, it will default to the global object
//   console.log(globalThis === this);
// }

// myFuncA();
//  {firstObjectMethod: ƒ}
// 

console.log(this)
console.log(this.innerWidth)
console.log(window.innerWidth)
const objA = {
  propertyInObjectA:"inside object A",
  firstObjectMethod: function () {
    // console.log('globalThis', globalThis);
    console.log(`value of 'this' in objA`, this);
    console.log(this.propertyInObjectA);
    // since this was not assigned by the call, it will default to the global object
    // console.log(globalThis === this);
  }
};


const objB = {
  secondObjectMethod: function () {
    // console.log('globalThis', globalThis);
    console.log(`value of 'this' in objB`, this);
    // since this was not assigned by the call, it will default to the global object
    // console.log(globalThis === this);
  }
};



// keyword this reference depends on how the function is called
objA.firstObjectMethod();
objB.secondObjectMethod();

