'use strict';
// function max(numbers) {
//   let nowMax = numbers[0];
//   let i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] > nowMax) {
//       nowMax = numbers[i];    
//     }
//     i++;   
//   }
//   return nowMax;
// }

// function min(numbers) {
//   let nowMin = numbers[0];
//   let i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] < nowMin) {
//       nowMin = numbers[i];    
//     }
//     i++;   
//   }
//   return nowMin;
// }
debugger; 
function average (numbers){
  let total = 0;
  numbers.forEach(function(number){
    total += number; 
  });
  return total/numbers.length; 
}

average ([4, 8]);