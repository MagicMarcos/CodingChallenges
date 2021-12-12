// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

// Example:

// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

function sumAllButMinMax(arr) {
  // const sortedArr = arr.sort((a,b) => a-b)
  // sortedArr.pop()
  // return sortedArr.reduce((a, c) => a + c) - sortedArr[0]

  let total = 0;
  let max = 0;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      total += max;
      max = arr[i];
    } else if (min > arr[i]) {
      total += min;
      min = arr[i];
    } else {
      total += arr[i];
    }
  }
  return total;
}

console.log(sumAllButMinMax([1, 1, 11, 2, 3]), 6);
console.log(sumAllButMinMax([6, 2, 1, 8, 10]), 16);
