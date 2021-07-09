// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
// Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
// Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

function arrayChecker(array1, array2) {
	const newArr = array2.map(el => array1.filter(l => l === el).length);
	return newArr;
}

console.log(
	arrayChecker(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])
);
console.log(
	arrayChecker(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])
);
console.log(
	arrayChecker(
		['quick', 'brown', 'fox', 'is', 'quick'],
		['quick', 'abc', 'fox']
	)
);

// more optimized version
const arrChecker = (arr1, arr2) =>
	arr2.map(el => arr1.filter(l => l === e).length);
