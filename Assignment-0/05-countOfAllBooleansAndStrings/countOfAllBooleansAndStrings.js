function countOfAllBooleansAndStrings(arr) {
  var countB = arr.filter(Boolean).length;
    var countS = arr.filter(arr => arr).length;
    return countB + countS;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;