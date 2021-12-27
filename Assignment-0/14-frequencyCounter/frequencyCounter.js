function frequencyCounter(word) {
  var count = {};
     for(var i = 0; i<word.length; i++){
       var ch = word.charAt(i);
       if(count[ch]){
         count[ch]++;
       }else{
         count[ch] = 1;
       }
     }
     return count;
}

// Do not edit this line;
module.exports = frequencyCounter;