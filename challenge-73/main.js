// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

// figure out the odd numbers and then map to replace in place

function sortArray(arr) {
	//create an array of sorted odd nums
	const oddNums = arr.filter(num => num % 2).sort((a, b) => a - b);
	//any odd number in n%2 would return 1 -> a truthy value -> 1 == true (0 is a falsy value)
	// map always creates an array that has some value -> the ternary mean that were either returning a value or another and the shift() holds the value shifted from the other array -- so map just plops in that value that was passed into it
	return arr.map(n => (n % 2 ? oddNums.shift() : n));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(
	sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
	[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);
console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(sortArray([7, 1]), [1, 7]);
