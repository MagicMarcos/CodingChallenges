// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiInOrder(arr) {
  // should we sort this first?
  // arr.sort((a, b) => a -b )
  return arr.reduce((a, c) => a * c);
}

console.log(multiInOrder([1, 2, 3, 4]), 24);
console.log(multiInOrder([1, 2, 4, 3]), 24);
