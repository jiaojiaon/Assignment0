class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var start = 0;
    var end = nums.length-1;
    while(start <= end){
      var mid = Math.floor((start + end)/2);
      if(arr[mid] == target) return true;
      else if(arr[mid] < target){
        start = mid+1;
      }
      else
        end = mid-1;
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
