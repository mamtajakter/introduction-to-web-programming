// take a string and look for how many times "e" appears in that
let countEcho = function(s) {  //initialize count 
count = 0; 
 
//count e's in s 
for (var i = 0; i < s.length; ++i) {
    if (s.charAt(i) === "e") 
       ++count; 
 }
 
//return the result 
return count; 
 };

// take a string and a char and then look for how many times the char appears in that string
 let countOccurrences = function(s,c) {  //initialize count 
 count = 0; 
 
 //count e's in s 
 for (var i = 0; i < s.length; ++i) {
   ch= s.charAt(i)
   if (ch === c) 
       debugger;
      ++count; 
    } 
 //return the result 
 return count; 
  };

  // take a char and then look for whether its an alphabetic letter or not
 let isAlpha = function(ch){ 
   if(ch >= "A" && ch <= "Z") 
        return true; 
   if (ch >="a" && ch <= "z")
        return true;
   else 
        return false; 
 };


 // take a string and count the total number of alphabetic letters

let countLetters= function (s){

  count=0;

  for (var i=0; i<s.length; i++){
    ch= s.charAt(i);
    if(isAlpha(ch)) {
         count=count+1; 
       }

  }

  return count;

}
