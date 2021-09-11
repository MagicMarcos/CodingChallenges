// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
	let numArr = [];
	for (let i = a; i <= b; i++) {
		numArr.push(i);
	}
	return numArr;
}
