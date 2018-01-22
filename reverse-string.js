'use strict';

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  else {
    return string[string.length-1] + reverseString(string.slice(0, string.length-1));
  }
}

let str = "lufkniht";

console.log(reverseString(str));