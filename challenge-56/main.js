// sum all elements in an array, except the highest and lowest

const sum = arr =>
	arr
		.sort((a, b) => a - b)
		.slice(1, -1)
		.reduce((a, b) => a + b);

console.log(sum([6, 2, 1, 8, 10]));
console.log(sum([1, 1, 11, 2, 3]));

const sum = arr =>
	arr.reduce((a, c) => a + c) - Math.max(...arr) - Math.min(...arr);
