'use strict';

// function repeat(fn, n) {
//   for(let i = 0; i < n; i++) {
//     fn();
//   }
// }
// function hello() {
//   console.log('Hello world');
// }

// function goodbye() {
//   console.log('Goodbye world');
// }
// repeat(hello, 5);
// repeat(goodbye, 5);

// function filter(arr, fn) {
//   // TASK: Define your function here
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++){
//     if (fn(arr[i]) === true){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray; 
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames); // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

 
// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   return function(location) {
//     warningCounter ++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//   };
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const hiChris = hazardWarningCreator('Chris is on the road');
// const byeChris = hazardWarningCreator('Chris is sleeping');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');
// hiChris('Hey, how are you?');
// byeChris('Goodnight');

debugger; 
// const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// const result = turtleMovements.filter(function(arr) {
//   if (arr[0] >= 0 && arr[1] >= 0){
//     return arr; 
//   }
// });

// const totalCaseSteps = result.map(function(arr){
//   return arr[0] + arr[1]; 
// });

// totalCaseSteps.forEach(function(val){
//   console.log(val); 
// });

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const arr = input.split(' ');
const result = arr.reduce(function(accumulator, currentValue){
  if (currentValue.length === 3){
    return accumulator += ' ';
  }
  else{
    return accumulator += currentValue[currentValue.length -1].toUpperCase();
  }
},'');
console.log(result); 
