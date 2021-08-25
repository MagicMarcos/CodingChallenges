// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!
function mostOften(str) {
	const characters = {};
	for (let char of str) {
		characters[char] = characters[char] + 1 || 1;
	}

	let mostCount = 0;
	let mostCharacter = null;

	for (let char in characters) {
		if (characters[char] > mostCount) {
			mostCount = characters[char];
			mostCharacter = char;
		}
	}
	return mostCharacter;
}
console.log(mostOften('uglydogbuttasss'));
