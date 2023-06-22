console.log("DeHuff has the smallest dick");

/*
 * You are given an array that is strictly increasing and then strictly decreasing (no repetition, there must be at least
 * one smaller number before the peak, and one smaller number post the peak)
 * (this is called a mtn array fyi)
 * It will not have duplicates.
 * Navigate the array and return the INDEX of the PEAK (highest point)
 *
 * @param {number[]} arr
 * @return {number}
 */

/* HANK'S PSEUDO CODE:
* Check through each number comparing it to the previous number. 
* if the number checked is greater than the previous number, then move to the next.
* If the number checked is less than the previous number, then return the previous number (that is the number that is greater than the number checked.)
* BIG O:
* Time Complexity (the amount of calcs you are going to be doing) - O(n) -> where n is the size of our array
O(log n)
* Space (Memory) Complexity - O(k);
*
* You use this often when looking for something within a SORTED input. If the input is not sorted, you have to sort first and then is O(n logn) time complexity (worse than O(n))
*/

// DeHuff's Answer (Binary Search):
// var peakIndexMountainArray = function(arr) {
//   let top = arr.length - 1; //a pointer to the last element in the array
//   let bottom = 0; //pointer to the first element in the array

//   while(bottom < top) {
//     var middle = bottom + Math.floor((top - bottom) / 2); //finds the middle index
//     if(arr[middle] < arr[middle + 1]) {
//       bottom = middle + 1;
//     } else {
//       top = middle;
//     }
//   }
//   return top;
// }

var peakIndexMountainArray = function (arr) {
	let top = arr.length - 1;
	let bottom = 0;

	while (bottom < top) {
		var middle = bottom + Math.floor((top - bottom) / 2);
		console.log(arr[middle], bottom, top);
		if (arr[middle] < arr[middle + 1]) {
			bottom = middle + 1;
		} else {
			top = middle;
		}
	}
	return top;

	// 0,1,2,3,4,5, 6, 7, 8, 9,10,11,12,13
	// 4,5,6,7,8,9,10,11,12,11,10, 9, 8
	//                11,12,11,10, 9, 8
	//                11,12,11
	//                11,12
	//                   12
};


// Hank's Answer
// var peakIndexInMountainArray = function(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i-1]) {
//       return i-1;
//     }
//   }
// };

const singleExample = [4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8]; //Expected: 1
console.log(peakIndexMountainArray(singleExample));

// const examples = [
//   {"example" : [0,1,5,2,1,0],
//    "expected" : 2 },
//   { "example" : [2,4,2,1],
//    "expected" : 1 },
//     [1, 2,3,4,5,4,3,2] // Expected: 4
//   ];

// const testSuite = (examples) => {
//   for(example of examples) {
//     console.log(example);
//   }
// }
