// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

const longestPossible = (str1, str2) =>
	[...new Set(str1 + str2)].sort().join('');

console.log(longestPossible('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

// set holds only unique values from concatenating strings
//create an array from a set
// used the spread operator to grab the values of the set (otherwise the array would contain an object)
