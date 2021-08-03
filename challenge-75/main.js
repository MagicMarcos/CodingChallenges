// function takes a single word arg and returns an ordered list containing all indexes of capital letters in the string

function capIndex(str) {
	const caps = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			caps.push(i);
		}
	}

	return caps;
}

console.log(capIndex('CodEWaRs'), [0, 3, 4, 6]);
