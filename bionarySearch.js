// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let top = nums.length - 1;
	let bottom = 0;

	while (bottom <= top) {
		var middle = bottom + Math.floor((top - bottom) / 2);
		if (nums[middle] < target) {
			bottom = middle + 1;
		} else if (nums[middle] > target) {
			top = middle;
		} else if (nums[middle] === target) {
			return middle;
		}
	}
	return -1;
};
// search([-1,0,3,5,9,12])
// const example = [-1,0,3,5,9,12]; //Expected: 4
console.log(search([2, 5], 6));
