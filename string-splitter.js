'use strict';

function stringSplitter(str, sep) {
  if (str.indexOf(sep) === -1){
    return [str.slice(0, str.length)];
  }
  else {
    return [str.slice(0, str.indexOf(sep)), ...stringSplitter(str.slice(str.indexOf(sep) + 1), sep)];
  }
}

let string = "red/orange/yellow/green/blue/purple";
let separator = "/";

console.log(stringSplitter(string, separator));