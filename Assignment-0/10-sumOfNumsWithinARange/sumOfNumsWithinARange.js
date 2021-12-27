function sumOfNumsWithinARange(nums, start, end) {
  var startIndex = 0;
    var endIndex = 0;

    for(var i = 0; nums.length(); i++){
      if(nums[i] == start){
        startIndex = i;
      }
      if(nums[i] == end){
        endIndex = i;
      }
    }
    return (endIndex-startIndex)+1;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;