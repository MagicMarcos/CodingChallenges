// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
// Test.assertEquals(high('take me to semynak'), 'semynak');

function wordScore(str) {
	let alphabet = {};

	let alpha = [...'abcdefghijklmnopqrstuvwxyz'];
	alpha.forEach(el => (alphabet[`${el}`] = alpha.indexOf(el) + 1));

	const word = str
		.split('')
		.map(el => (el = alphabet[`${el}`]))
		.join(' ')
		.split('  ')
		.map(j =>
			j
				.split(' ')
				.map(y => Number(y))
				.reduce((a, c) => a + c)
		);

	const num = Math.max.apply(null, word);

	return str.split(' ')[word.indexOf(num)];
}

console.log(wordScore('hello world magiciansz clown'));

// preferred solution
function highScore(str) {
	//set up alphabet string -- first letter is empty so that a =1 and not zero when we call indexOf
	const alphabet = ' abcdefghijklmnopqrstuvwxyz';
	//lets us get the score of a word by taking the index of each individual letter of the word in the alphabet string and reducing down to the total value of the word
	// each time the loop runs we add to the accumulator
	//so in the string "abc" a has an index of 1, then b has an index of 2 - so now out accumulator = 3, then c has an index of three, thus our accumulator (therefore our score) is 6
	const score = word =>
		word.split('').reduce((a, c) => a + alphabet.indexOf(c), 0);
	let highestWord = '';
	let highestCount = 0;

	//split the string loop through the words
	//pass in string to the score function
	//check if the score from a word is greatest than the current highest count
	//if so we set highest word and highest count to this value

	str.split(
		' '.forEach(w => {
			const scoreCheck = score(w);
			if (scoreCheck > highestCount) {
				highestWord = w;
				highestCount = scoreCheck;
			}
		})
	);
	return highestWord;
}

console.log(highScore('hello world magiciansz clown'));
