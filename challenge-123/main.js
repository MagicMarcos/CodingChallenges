// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
	if (strs.length === 1) {
		return strs[0];
	}
	let newTemp = strs.sort((a, b) => (a > b ? 1 : -1));
	let first = newTemp[0],
		last = newTemp[newTemp.length - 1];
	if (first.length === 0 || first[0] !== last[0]) {
		return '';
	} else {
		let result = '';
		let i = 0,
			j = 0;
		while (i < first.length && j < last.length) {
			if (first[i] === last[i]) {
				result += first[i];
				i++;
				j++;
			} else {
				break;
			}
		}
		return result;
	}
};
