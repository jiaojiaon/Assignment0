function pairSum(nums, target) {
  if(nums.length <= 1){
      throw error;
    }
    for(var i = 0; i < nums.length; i++){
       for(var j = 1; j < nums.length; j++){
          if(nums[i]+nums[j] == target){
            return true;
          }
       }
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;
