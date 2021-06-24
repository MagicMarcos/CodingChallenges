// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//? So let's break down what we are taking into this function as a parameter:
//? it will always be number?
//? will it ever not be a number?

//? now i'd like to focus on what value I am returning:
//? will I return a number corresponding with a quarter?
//? will I simply return a string? If so what should I include in that string?>

//? I'd like to work through some examples before we move on if that's okay with you.
//? month 3 (march) => first quarter (1)
//? month 12 (december) => fourth quarter (4)
//? month 6 (june) => second quarter (2)

//? Im gonna take a second here to set up our function and some test cases

function quarterOf(month) {
	//? I'd like to run through some pseudo code before we proceed here, if that's alright with you?
	// conditional statement -> checks if month passed in falls within a range and returns the quarter it belongs to
	if (month <= 3) {
		return 1;
	} else if (month <= 6) {
		return 2;
	} else if (month <= 9) {
		return 3;
	} else {
		return 4;
	}
	//? is there anything you think might be wrong with my logic here?
}

console.log(quarterOf(3), 1);
console.log(quarterOf(12), 4);
console.log(quarterOf(6), 2);

//? A couple of last notes, we certainly could go back and use some ES6 syntax and a ternary conditional operator to make this a little cleaner if you'd like?
//? in practice, does your team prefer one liners? Do they like for the code to be commented out?
//? do you have any comments questions or concerns about the code I just presented?
