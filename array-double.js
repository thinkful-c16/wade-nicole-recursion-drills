'use strict';

let arr = [2,4,6];

function arrayDouble(arr) {
  if (!arr.length) {
    return [];
  } else {
    return [(arr[0] * 2), ...arrayDouble(arr.slice(1))];
  }
}

console.log(arrayDouble(arr));