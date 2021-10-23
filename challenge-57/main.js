// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr) {
	let arr2 = [];
	let newArr = arr.reduce((unique, num) => {
		num = String(num);
		if (num in unique) {
			unique[num]++;
		} else {
			unique[num] = 1;
		}
		return unique;
	}, {});
	for (let num in newArr) {
		if (newArr[num] === 1) {
			arr2.push(num);
		}
	}
	return Number(arr2[0]) + Number(arr2[1]);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);

let arr1 = [
	02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
let arr2 = [
	20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
];
