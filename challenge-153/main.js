// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function ageDifference(arr) {
  arr = arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1], arr[arr.length - 1] - arr[0]];
}

console.log(ageDifference([0, 2, 3, 23, 48]), 48);
console.log(ageDifference([5, 40, 0, 3, 23, 48]), 48);
