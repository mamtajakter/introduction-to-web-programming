// Practice Assignment 2 but with function expression
let s, result;

let maxWord=function(str){
  let ar,i,curWord, curLength, maxLength, maxLengthWord, n;

  maxLength=0;
  maxLengthWord="";
  ar=str.split(" ");
  n=ar.length;
  for (i=0;i<n;i++){
    curWord=ar[i];
    curLength=curWord.length;

    if(curLength>maxLength){
      maxLength=curLength;
      maxLengthWord=curWord;
    }
  }
 return maxLengthWord;
}

let countPunc=function (str){
  let i,n,ch, patt1, patt2, count;

  count=0;
  patt1=/[A-Z]/i;
  patt2=/[0-9]/i;
  n=str.length;
  for (i=0;i<n;i++){
    ch=str[i];
    if (patt1.test(ch))
        count=count;
    else if (patt2.test(ch))
        count=count;
    else
        count++;
  }
  return count;
}

let maxDigit=function(num){
  let i,ch,curDigit, maxDigitSoFar, n;

  maxDigitSoFar=0;
  n=num.length;
  for (i=0;i<n;i++){
    ch=num[i];
    curDigit=Number(num[i]);

    if(curDigit>maxDigitSoFar){
      maxDigitSoFar=curDigit;
    }
  }
 return maxDigitSoFar;
}

s= prompt("Enter a sentence.");

result=maxWord(s);
document.getElementById("p1").innerHTML=`The maximum word in ${s} is ${result}.`



s= prompt("Enter a sentence.");

result=countPunc(s);
document.getElementById("p2").innerHTML=`The total count of punctuations in ${s} is ${result}.`



s= prompt("Enter a number.");

result=maxDigit(s);
document.getElementById("p3").innerHTML=`The maximum digit in ${s} is ${result}.`
