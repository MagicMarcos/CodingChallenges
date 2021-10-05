// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

//description: string of numbers -> sum the odds and evens then compare
//parameters: always a string of numbers
//return: a string stating whether even or odd is greater or same
//example: str = 123  returns Odd is greater than Even
//example: str = 4821 returns Even is greater than Odd
//example: str = 1322 returns Even and Odd are the same
//pseudo code:
//convert string to array, loop through converting each el to number checking if even or odd and adding to a counter, then compare the counters and return accordingly

function evenOrOdd(str) {
	let countEven = 0;
	let countOdd = 0;
	for (let el of str) {
		if (Number(el) % 2 !== 0) {
			countOdd += Number(el);
		} else {
			countEven += Number(el);
		}
	}
	if (countEven > countOdd) {
		return 'Even is greater than Odd';
	} else if (countOdd > countEven) {
		return 'Odd is greater than Even';
	} else {
		return 'Even and Odd are the same';
	}
}

t0 = performance.now();
evenOrOdd(
	'1234567895803498570498570495873094609485630457634958736459837601293845034567'
);
t1 = performance.now();
console.log(t1 - t0, 'ms');
