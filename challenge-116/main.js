// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
	// map through arr and change numbers into string numbers
	// use reduce to iterate through the array. We set the initial value to an empty object. Thus allNums is an object.
	// then we check if nums is in the object
	// if yes, we use bracked notation to find the property that matched nums and add one to its value
	// otherwise we create a new property in allNums of nums and set it to 1
	// then return all Nums
	let numObj = arr
		.map(el => el.toString())
		.reduce((allNums, nums) => {
			if (nums in allNums) {
				allNums[nums]++;
			} else {
				allNums[nums] = 1;
			}
			return allNums;
		}, {});

	// loop through our numObj and check if the value of a given property is odd, if yes then we return it and make sure to convert it back to a number
	for (let number in numObj) {
		if (numObj[number] % 2 != 0) {
			return Number(number);
		}
	}
}

// XOR operator, solution
const findOdd = xs => xs.reduce((a, b) => a ^ b);
