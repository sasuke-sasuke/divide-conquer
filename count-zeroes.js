// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return arr.length - left;
  }
  


module.exports = countZeroes