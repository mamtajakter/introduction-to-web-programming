let toggleCase = function(s) {
    let result = "";
    var ch;
    for (let i = 0; i < s.length; ++i) {
        ch= s.charAt(i);
      if (ch>="A" && ch<="Z") {
        result=result+ch.toLowerCase();
        }
        else if (ch>="a" && ch<="z") {
          result=result+ch.toUpperCase();
        }
        else {
          result=result+ch;
        }
      }
      return result;
    };


    var isDigit = (ch) => {

      var digits = /[0123456789]/;
      return digits.test(ch);

    }


    var countDigits= s=>{
       count=0;
      for (var i=0;i<s.length;i++){
        ch=s.charAt(i);
        if (isDigit(ch))
           count++;
      }
      return count;
    }

    var isVowel = (ch) => {

      var vowels = /[aeiouAEIOU]/;
      return vowels.test(ch);

    }

    var countVowels= s=>{
       count=0;
      for (var i=0;i<s.length;i++){
        ch=s.charAt(i);
        if (isVowel(ch))
           count++;
      }
      return count;
    }

//takes a array of words and finds out the maxword
    function maxWord(l) {
      maxlength=0;
      maxword1="";
     for (var i = 0; i < l.length; i++) {
       str = l[i];
       vowelLength=str.length;
       if (vowelLength > maxlength){
         maxlength=vowelLength;
         maxword1= str;
       }
     }
     return maxword1;
   }

//takes a sentence and finds out the maxword
    function maxWord2(s) {
     l=s.split(" ");
     return maxWord(l);
   }




    function maxVowelWord(s) {
     maxlength=0;
     maxword1="";
     l=s.split(" ");
      for (var i = 0; i < l.length; i++) {
        str = l[i];
        vowelLength=countVowels(str);
        if (vowelLength > maxlength){
          maxlength=vowelLength;
          maxword1= str;
        }
      }
      return maxword1;
    }
