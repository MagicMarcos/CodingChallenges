//reverse a string?
//? what do we take into this function?
//-> a string
//? is it just a string, can it be anything other than a string?
//-> no
//? should I account for upper or lower case?
//-> no
//? will it always be a single word or should I worry about spaces?
//-> just a single word
//? What should we return? A boolan? the reverse string? something else?
//-> a boolean
//? so for example
// racecar -> true
// bob -> true
// dog -> false

//! lets just set up up the function here and some test cases before we proceed is that okay?

function isReverse(word) {
	//! now that we have the function and test cases set up, can we work thorugh some pseudo code, before proceeding?
	// reverse the word by splitting it into an array, then using the reverse method
	let revWord = word.split('').reverse().join('');
	//compare the new reversed word with the original word. We use a special JS quirk to avoid having to use a conditional
	return word === revWord;
}

//! here were going to call our function and console.log the result
console.log(isReverse(racecar), true);
console.log(isReverse(bob), true);
console.log(isReverse(dog), false);

//* ask if this is okay
//* ask if they'd like you to refactor this to better fit their team
//* offer to use some ES6 or even shortening/cleaning this up a bit
//* does your team prefer the code to be commented out?
