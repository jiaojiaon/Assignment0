function fizzBuzz(start, end) {
  var arr = new Array();
    for(var j = start; j<= end; j++){
      if(j%3 == 0 && j%5 == 0){
        arr.push("FizzBuzz");
      }else if(j%3 == 0){
        arr.push("Fizz");
      }else if(j%5 == 0){
        arr.push("Buzz");
      }
      else{
        arr.push(j);
      }
    }
    return arr;
  }
}

// Do not edit this line;
module.exports = fizzBuzz;
