// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false

var isPerfectSquare = function (num) {
  // declare left = 0 , right = x

  //while left <= right
  //declare mid = left+right / 2
  // check if mid * mid is our num -> if true return true
  // check if right + right > num -> if so right is set to mid - 1
  // this removes all numbers that were greater than right
  // else
  // left = mid + 1 -> this just increments left every time right + right is less than num

  let left = 0,
    right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return true;
    else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
