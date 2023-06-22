

/*
1550. Three Consecutive Odds
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 
Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000

INPUTS:
 @param {number[]} arr
 @return {boolean}

num % 2 !== 0

PSEUDO CODE: 
 1. Iterate over the array, checking each number to see if they are even or odd
 2. Skip any numbers that are even
 3. If a number is odd, then we start a count at 1.
 4. We then check the next number, if it is even we reset count to 0, and go to the number after it.
 5. Otherwise, we have another odd number, so our count increases by 1.
 6. Repeat steps 4 and 5 until we see 3 odd numbers. If we have 3 odd numbers, return true.
 7. If our iterator variable (i) reaches the end of the array then we can return false.
*/

//Your original answer (if you can think about why this is wrong)
 var threeConsecutiveOdds = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    let count = 0;

    if ( arr[i] % 2 != 0) { 
      count ++;
    } else {
      count = 0;
    }
    
    if(count === 3) {
      return "true"
    } else {
      return "false"
    }
  }    
};

//An answer that works:
var threeConsecutiveOdds = function(arr) {
  let count = 0;
  
  for(let num of arr) {
      if(num % 2 !== 0) {
          count++;
          if(count === 3) {
              return true;
          }
      } else {
          count = 0;
      }
  }

  return false;
};

let result = threeConsecutiveOdds([2,3,34,3,4,5,7,23,12]);
console.log(result);