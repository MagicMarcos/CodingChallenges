// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27

function sumCubes(n) {
	// use array constructor we create an array of N length -> each el is undefined
	// key() method creates an array iterator object that contains the keys for each index in the array
	// spread operator in an array literal gives an array of n-length starting from 0 to n
	// map through to add one to each element (we want 1 thru N) and cube them
	// then reduce
	return [...Array(n).keys()]
		.map(el => Math.pow(el + 1, 3))
		.reduce((a, c) => a + c);
}

const cubeSum = n =>
	[...Array(n).keys()].map(el => Math.pow(el + 1, 3)).reduce((a, c) => a + c);

function sumCubes(n) {
	return ((n * (n + 1)) / 2) ** 2;
}
