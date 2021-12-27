function fizzBuzz(start, end) {
  var arr = new Array();
    arr[0] = start;
    for(var i = 0; i < end; i++){
      arr[i+1] = arr[i]+1;
    }
    for(var j = 1; j<= arr; i++){
      if(j%3 == 0 && j%5 == 0){
        arr[j-1] = "FizzBuzz";
      }else if(i%3 == 0){
        arr[j-1] = "Fizz";
      }else if(i%5 == 0){
        arr[j-1] == "Buzz";
      }
      else{
        arr[j-1] =j;
      }
    }
    return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;