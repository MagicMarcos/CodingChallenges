// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
	let result;
	let countedNums = numbers.map((num, idx, numbers) => {
		if (num !== numbers[numbers.indexOf(num) + 1]) {
			result = num;
		}
	});
	return result;
}

// given that the array is always odd, and its only two different numbers, we can sort and then check if the first num equals the second. if not then it must be the last number
function stray(numbers) {
	numbers = numbers.sort();
	return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
}

function stray(numbers) {
	return numbers.reduce((x, y) => x ^ y);
}
