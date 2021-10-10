// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined. You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]);
// //returns true

// isSquare([3, 4, 7, 9]);
// //returns false

// isSquare([]);
// //returns undefined

//* check if arr is empty,
//* filter out elements that are squares by checking if result of Math.sqrt returns an integer
//* since filter returns a new array, we check that arrays length against arr -
//* if all elements are squares -> then array lengths will be the same and we return true else false

const isSquare = arr =>
	arr.length === 0
		? undefined
		: arr.filter(el => Number.isInteger(Math.sqrt(el))).length === arr.length
		? true
		: false;

var isSquare = function (arr) {
	return arr.length ? arr.every(i => Math.sqrt(i) % 1 == 0) : undefined;
};
