function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = nums.filter(nums => nums < target).length;
    return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;