// check if a number is prime

function isPrime(num) {
	//check if its 2
	if (num <= 3) return num > 1;

	if (num % 2 === 0 || num % 3 === 0) return false;

	let count = 5;
	//for numbers under 25, if they aren't divisinbleby 2 or 3 they are prime.
	while (Math.pow(count, 2) <= num) {
		if (num % count === 0 || num % (count + 2) === 0) return false;

		count += 6;
	}

	return true;
}
