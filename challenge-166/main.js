// Write a program that, given an array A[] of n numbers and another number x, determines whether there exist two elements in A[] whose sum is exactly x.

function findSumInArray(arr, num) {
  // object keeps track of all sum combinations
  let obj = {};
  // empty array to keep track of our sums
  let sums = [];

  for (let i = 0; i < arr.length; i++) {
    // if current value is in our obj -> we push that key value pair to our sums array
    // must compare to undefined as 0 is a falsy value
    if (obj[arr[i]] !== undefined) {
      let val = obj[arr[i]];
      sums.push([val, arr[i]]);
    } else {
      // store num minus current element of arr and current element of array in obj
      obj[num - arr[i]] = arr[i];
    }
  }
  if (!sums.length)
    return `no valid pair of sums that equal ${num} found in array`;
  return sums;
}

// console.log(findSumInArray([0, -1, 2, -3, 1, -2] , -2))
// console.log(findSumInArray([1, -2, 1, 0, 5] ,0))
