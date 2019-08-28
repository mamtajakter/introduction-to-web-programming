// Practice Assignment 2 but with function array syntax

// let multiplyES6 = (x, y) => { return x * y };

let greaterThanN = (num, n) => {
 let result="", i;
 num=num.toString();
 n= Number(n);

 for (i=0;i<num.length;i++){
   if(Number(num[i])>n)
     result=result+num[i];
 }
  return result;
}

let properDivisor = (n) => {

  let i, result="";
  for (i=0;i<=n;i++){
      if (n%i==0)
         result+=i+" ";
  }
  return result;
}

let toggleCase = (str) => {
  let i, result="", ch, patt1=/[a-z]/, patt2=/[A-Z]/;
  for (i=0;i<str.length; i++){
    ch= str[i];
    if (patt1.test(ch))
       result+=ch.toUpperCase();
    else if (patt2.test(ch))
       result+=ch.toLowerCase();
    else
       result+=ch;
  }
  return result;
}
