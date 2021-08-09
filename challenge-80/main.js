// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// BRUTE FORCE
// function fizzbuzz(num) {
// 	let numArr = [];
// 	for (let i = 1; i <= num; i++) {
// 		numArr.push(i);
// 	}
// 	return numArr.map(el =>
// 		el % 3 === 0 && el % 2 === 0
// 			? (el = 'fizzbuzz')
// 			: el % 3 === 0
// 			? (el = 'buzz')
// 			: el % 2 === 0
// 			? (el = 'fizz')
// 			: el
// 	);
// }

//OPTIMAL
const fizzBuzz = number => {
	let output = [];
	for (let i = 1; i <= number; i++) {
		i % 6 === 0
			? output.push('Fizz Buzz')
			: i % 2 === 0
			? output.push('Fizz')
			: i % 3 === 0
			? output.push('Buzz')
			: output.push(i);
	}
	return output;
};

console.log(fizzBuzz(10));
