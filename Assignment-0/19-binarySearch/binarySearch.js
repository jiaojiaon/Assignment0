class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var start = 0;
    var end = nums.length-1;
        while(start <= end){
          var mid = Math.floor(end/2);
          if(nums[mid] == target) return true;
          else if(nums[mid] <= target){
            start = mid+1;
            return this.binarySearch(nums.slice(start+1, end), target);
          }
          else
            end = mid-1;
            return this.binarySearch(nums.slice(start, mid-1), target);
        }
        return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
