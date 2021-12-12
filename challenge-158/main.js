function solution(numbers) {
  let objNum = {};

  //loop through and push our triples into an obj
  for (let i = 0; i < numbers.length - 2; i++) {
    // our triplet array
    let numArr = [numbers[i], numbers[i + 1], numbers[i + 2]];

    // add our numArr into the obj
    objNum[i] = numArr;
  }

  // stores our resulting array
  let res = [];

  // loop through our obj
  for (let arr in objNum) {
    // conditional checks whether values in our obj satisfy the zigzag conditional
    if (objNum[arr][1] > objNum[arr][0] && objNum[arr][1] > objNum[arr][2]) {
      res.push(1);
    } else if (
      objNum[arr][1] < objNum[arr][0] &&
      objNum[arr][1] < objNum[arr][2]
    ) {
      res.push(1);
    } else {
      res.push(0);
    }
  }
  //return our array
  return res;
}

// For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

console.log(solution([1, 2, 1, 3, 4]));
