// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
	for (let i = 0; i <= nums.length; i++) {
		for (j = nums.length - 1; j >= 0; j--) {
			if (nums[j] + nums[i] == target && i != j) {
				return [j, i];
			}
		}
	}
};

const newSum = (nums, target) => {
	// let hash = {};

	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] in hash) return [hash[nums[i]], i];

	// 	hash[target - nums[i]] = i;
	// }

	return nums.reduce((numObj, number, idx) => {
		if (number in numObj) return [numObj[number], idx];
		numObj[target - number] = idx;
	}, {});
};

newSum([1, 2, 3, 4, 5, 6], 6);
