function countOfAllBooleansAndStrings(arr) {
  var count = 0;
      for(var i = 0; i<arr.length; i++){
        if(typeof arr[i] === 'string' || typeof arr[i] === 'boolean'){
          count++;
        }
      }
      return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
