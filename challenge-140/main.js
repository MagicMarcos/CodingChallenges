// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

//str -> no funny businessx

// reversed string

//  ("marcos"),"socram"
//  ('Cat'), 'taC'

// loop thru string backwards
// push to an empty array
// join the array
function reverseStr(str) {
  let strRev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}

console.log(reverseStr('marcos'), 'socram');
console.log(reverseStr('Cat'), 'taC');
