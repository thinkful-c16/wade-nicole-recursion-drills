'use strict';

//input is going to be a string
//output will be an array of strings
//all possible permutations of the original string
//potentially for loop taking the char at index[0]

//current letter, previous letter, after letters

function getAnagrams (string) {

  if (string.length === 1){
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    let cl = string[i];
    let pl = string.substring(0, i);
    let al = string.substring(i + 1);
    console.log(cl, pl, al);

    return [(cl + pl + al), ...getAnagrams(cl)];
    
  }  

}

let str='hello';

console.log(getAnagrams(str));