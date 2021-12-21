// return libraries in descending order of occurence - libraries that occur the same number of times are sorted in alphabetical order
// the key to solving this is sorting the array alphabetically first, then count the number of times each library occurs and lastly sorting the libraries based on how many times they occur

function solution(libraries) {
  // sort our libraries alphabetically first
  libs = libraries.sort();

  //declare empty obj where we'll store our libraries alphabetically along with their occurance number
  let libObj = {};

  //loop through our sorted libraries adding each to our obj, and incrementing existing ones
  //because libraries were already sorted alphabetically, they're added in alphabetical order to the obj
  for (let i = 0; i < libs.length; i++) {
    if (libs[i] in libObj) {
      libObj[libs[i]] += 1;
    } else {
      libObj[libs[i]] = 1;
    }
  }

  //grab all entries from our library obj and sort them by how many times they repeat
  // using sort we can target the second element in each subarray
  let libObjEntryArr = Object.entries(libObj).sort((a, b) => b[1] - a[1]);

  //empty array that will store our results
  let libraryArr = [];

  //loop through our final sorted array grabbing only the library names and storing them in libraryArr
  libObjEntryArr.forEach(el => libraryArr.push(el[0]));

  return libraryArr;
}

console.log(
  solution([
    'nodemon',
    'express',
    'express',
    'express',
    'nodemon',
    'passport',
    'passport',
    'async',
  ]),
  ['express', 'nodemon', 'passport', 'async']
);

console.log(solution(['express', 'nodemon', 'express']));
console.log(solution(['express', 'async']));
console.log(solution(['']), ['']);
console.log(solution(['express']));
console.log(
  solution([
    'async',
    'express',
    'async',
    'express',
    'async',
    'nodemon',
    'nodemon',
    'nodemon',
    'nodemon',
    'nodemon',
    'express',
    'express',
    'async',
    'passport',
    'multer',
    'multer',
    'multer',
    'multer',
    'multer',
    'multer',
    'nodemon',
    'zebra',
    'zebra',
  ])
);

// follow up interview
