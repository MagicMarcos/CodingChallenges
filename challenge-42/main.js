//Brute Force Leet code -- take your time through PREP

// given an array of integers num and an integer target, return indices of the two numbers such that they add up to target
// you may assume that each input would have exactly one solution, and you

//? I will be given an array of nums and another number called target. And we have to find the indices of two numbers that add up to that target.
//array nums, target num, indices (not the numbers themselves)3
//? will there ever anything that are not numbers, special characters, empty arrays, negative numbers?
//? are they all whole numbers?
//? Will there always be two or more numbers in this array?
//? is there anything else, I may have missed or not clarified about this array?
//! with arrays, always ask about special characters, empty arrays,
//array nums -> no funny business?

//? in regards to the number, ask same questions about the array
// target num -> no funny business

//? Let's clarify the return
//? will there ever be a scenario that there aren't two numbers in this array that doesn't add up.
//returning an array, of two nums -> [index, index]

//? can we walk through some examples?
//? will I ever run into a scenario where there are multiple solutions, which would you like me to return? first, last?
//[1,2,3,4,5], 9 -> [3,4]
//[2,3,5,1,2,6,4], 7 -> [2,4]
//[22,7,100,5], 12 -> [1,3]
//? is there anything you see that I'm missing in these examples, that you think I should include?

function findTarget(nums, target) {
	//? the solution that comes immediately to mind, is a brute force solution, where we just loop through and find the indices that work -- let's just get some points on the board
	//outer loop grabbing num
	for (let i = 0; i < nums.length; i++) {
		//inner loop testing that num with all other num
		//? there was one thing we didn't get to clarify -> can the number added to itself = to the target? Just to clarify we don't want to added the same number to itself
		for (let k = 0; nums.length; k++) {
			//if two nums added = target -> return nums indices
			if (nums[i] + nums[k] === target && i !== k) {
				return [i, k];
			}
		}
	}
}
//? is there anything you feel that I'm missing from this problem? I know it can be faster and I know we can definitely optimize this problem. If we do run out of time here, I'll follow up via email with the optimized answer

//test cases
//? do these look good? Is there anything that's missing or doesn't look correct at the moment?
console.log(findTarget([1, 2, 3, 4, 5], 9), '[3,4]');
console.log(findTarget([2, 3, 5, 1, 2, 6, 4], 7), '[2,4]');
console.log(findTarget([22, 7, 100, 5], 12), '[1,3]');
