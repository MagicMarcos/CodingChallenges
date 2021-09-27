// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how  many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
function twiceAsOld(a, b) {
	return a > 2 * b ? a - 2 * b : 2 * b - a;
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

function twiceAsOld(d, s) {
	var ss = s * 2;
	if (d - ss < 0) {
		return (d - ss) * -1;
	} else {
		return d - ss;
	}
}
