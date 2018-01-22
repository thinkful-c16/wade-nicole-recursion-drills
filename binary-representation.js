'use strict';

// 25 / 2 = 12    25 % 2 = 1
// 12 /2 = 6      12 % 2 = 0
// 6 / 2 = 3      6 % 2 = 0
// 3 /2 = 1       3 % 2 = 1
// 1 /2 = 0       1 % 2 = 1

function toBinary(number) {
  if ((number / 2) < 1) {
    return [1];
  }
  return [...toBinary(Math.floor(number / 2)), number % 2].join('');
}

let num = 25;

console.log(toBinary(num));