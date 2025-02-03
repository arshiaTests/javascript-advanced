/**
 * Problem:
 * Write a function that takes an array of numbers and sorts it in ascending order.
 *
 * Your task:
 * Implement the function `sortArray` that sorts the given array in ascending order.
 *
 * Example:
 * sortArray([3, 1, 4, 1, 5, 9]) should return [1, 1, 3, 4, 5, 9].
 */
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
      }
    }
    return arr;
  }
  console.log(sortArray([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
  console.log(sortArray([10, 2, 5, 1])); // [1, 2, 5, 10]
  
  module.exports = sortArray;
  
 
  
