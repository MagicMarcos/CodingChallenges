// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
//=====================================================================================//
// check for N num -> a positive num, where each digit raised to the the number of digits in the number added up = number
// number -> always pos, always num, always whole num. No funny bizz
// return boolean -> true if narcissisisits
//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 // return true
//  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 //return false
function narcissistic(value) {
  // val -> toString() -> split('') || [... str]
  const numStr = value.toString();
  const pow = numStr.length;
  const numArr = [...numStr];
  // loop through array -> convert ele into string -> el^array.length -> sum them up
  const result = numArr.reduce((a, c) => a + Number(c) ** pow, 0);
  // compare if sum === value -> return boolean
  return result === value;

  //   return [...String(value)].reduce((a,c) => a + Number(c)**(String(value).length) , 0) === value
}
