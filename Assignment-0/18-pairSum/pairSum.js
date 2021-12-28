function pairSum(nums, target) {
  if(nums.length <= 1){
    throw 
  }
  for(var i = 0; i < nums.length-1; i++){
    if(nums[i]+nums[i+1] == target){
      return true;
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
