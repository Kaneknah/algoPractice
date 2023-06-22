/* 
  Hello Hanky Poo, let's play a little game...
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
  
  Constraints:

  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
  
  Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

  DATA FORMAT:
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
/*
  Would you like this solved for space complexity or time complexity? What are the constrains of our system in terms of space?  

  Pseudo Code:
  1. Taking the nums array, starting with the first number in it and add it to the next number in the array and check to see if it is equal to "target" [2,7] = 9
  2.  If it is equal to the target, return both indices.
  3.  If it is not equal to the target, move to the next number [2,11] = 13.
  4. continue this proces untill the first index is complete without matching the target.
  5. then move to the second index and repeat step 1-3, [7,11].

  What is the Big(O) of the above solution? Space and time complexity.
    O(n^2)
    nums.length = n
    
  A COMMON APPROACH TO PROBLEMS:
  Memoization aka Dynamic Programming (top down)
  What this does is saves down information at each step that we can use for future steps.
*/

function twoSum(nums, target) {
  let map = {};

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] in map) {
      return [map[nums[i]], i]
    } else {
      //this means that nums[i] is NOT in map
      let diff = target - nums[i]; //24 when nums[i] = 2
      map[diff] = i; 
    }
  }
}

let test = twoSum([2,7,24,12], 26);
console.log(test);

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i+1 ; k < nums.length; k++) {
//         if (nums[i] + nums[k] === target) {
//           return [i, k]
//       }
//     }
//   }
// }


