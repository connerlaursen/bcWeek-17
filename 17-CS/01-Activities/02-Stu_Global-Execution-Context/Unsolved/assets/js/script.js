// 1) Where is carNoise stored?
// gec
const carNoise = 'Honk';
// 2) Where is goFast stored?
// gec
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned a value after confirmation, where goFast is ran with a value of 80. stored inside the function
  
  // 5) Where is makeNoise stored?
  // inside goFast function
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // make noise function is ran with value of honk which was stored in gec at the beginning of script
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// prompt confirmation of wanting to go fast, when you click ok, the rest of the page is ran
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
