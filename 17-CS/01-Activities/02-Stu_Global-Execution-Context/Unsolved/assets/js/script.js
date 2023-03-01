// 1) Where is carNoise stored?
//

// globalExContext = ["define and store carNoise", "define and store go fast"];
// events = ["show confirm", "wait for click", "go fast"]
// goFastContext = ["define and store speed", "define and store makeNoise"];
// eventsMakeNoise = ["makeNoise"];
// makeNoiseContext = ["define and storing sound"]

const carNoise = 'Honk';
// 2) Where is goFast stored?
// 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // 
  
  // 5) Where is makeNoise stored?
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
