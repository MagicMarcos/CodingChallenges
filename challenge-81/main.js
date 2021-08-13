//reverse a string of characters without using the reverse method. And what would you say about the split reverse join method.

//In an interview take a up a little bit of extra time and say something like --- well I could use split reverse join but let's pretend we didnt have it. I think I could solve it with a simple for loop

function reverseWord(str) {
	let newStr = '';
	for (let char of str) {
		newStr = char + newStr;
	}
	return newStr;
}

console.log(reverseWord(abc));
