// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// Examples
// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)

function removeChars(s) {
	const alphaArr = [...'abcdefghijklmnopqrstuvwxyz '];

	return s
		.split('')
		.filter(el => alphaArr.find(x => (x === el ? el : x.toUpperCase() === el)))
		.join('');
}

const removeChars = s =>
	s
		.split('')
		.filter(el =>
			[...'abcdefghijklmnopqrstuvwxyz '].find(x =>
				x === el ? el : x.toUpperCase() === el
			)
		)
		.join('');

function removeChars(s) {
	// the filter method filters out any letter that is a space, or any letter that does not equal its upper or lower case counter part.
	// "a".toUpperCase() === "a".toLowerCase => false
	// "%".toUpperCase() === "%".toLowerCase => true
	return s
		.split('')
		.filter(s => s === ' ' || s.toLowerCase() !== s.toUpperCase())
		.join('');
}
