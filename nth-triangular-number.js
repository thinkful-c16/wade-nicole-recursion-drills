'use strict';

function triangularNumber(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + triangularNumber(n-1);
  }
}

console.log(triangularNumber(7));