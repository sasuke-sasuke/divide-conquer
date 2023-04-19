function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let start = null;
    let end = null;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];
        if (midVal < num) {
            left = mid + 1;
        }
        else if (midVal > num) {
            right = mid - 1;
        }
        
    }
  
    
  }
  
module.exports = sortedFrequency