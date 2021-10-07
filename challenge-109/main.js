// make a function that adds all numbers from 1 to n, accumulating those numbers on the say
// ex n=3 => 5
// n MUST be a positive integer only
// no floats, or anything that's not a string => return false for these cases

// P=> number, can be non -number, must check if valid num, no negative, no 0

// R => sum of numbers from 1 to n, or false if !number

// E => f(0) => false , f(-1) => false, f() => false, f(3) => 6

// P => check if num -> if num - loop up to n, adding to a counter -> return counter....
// otherwise return false

function f(n) {
	let counter = 0;
	if (typeof n == 'number' && n > 0 && n % 1 === 0) {
		for (let i = 1; i <= n; i++) {
			counter = counter + i;
		}
		return counter;
	} else {
		return false;
	}
}

const f = n =>
	typeof n == 'number' && n > 0 && n % 1 === 0
		? [...Array(n).keys()].map(x => ++x).reduce((a, c) => a + c)
		: false;

function f(n) {
	return Number.isInteger(n) && n > 0 ? (n * (n + 1)) / 2 : false;
}
