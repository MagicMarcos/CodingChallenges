// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
	if (number <= 0) {
		return 0;
	} else {
		return [...Array(number).keys()]
			.filter(el => el % 5 === 0 || el % 3 === 0)
			.reduce((a, c) => a + c);
	}
}

let interval = 10000;

function timeOut() {
	setTimeout(testFunc, interval);
}

function testFunc() {
	if (interval > 2500) {
		interval -= 1000;
	} else if (interval <= 2500) {
		interval -= 100;
	} else if (interval <= 1000) {
		interval -= 50;
	} else if (interval === 100) {
		interval = 100;
	}
	console.log(interval);
	console.log('hello');
	timeOut();
}

timeOut();
