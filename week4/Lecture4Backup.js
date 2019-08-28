


//traverse string from 0 to length - 1
let vowels ='aeiou', result = "";
for (let i =0; i < vowels.length; i++) {
  result = result + vowels[i];
}
console.log(result);

//countOccurrence
var ch="e";
var s="Hello World, Hi there";
var count=0;

  for(var i =0; i < s.length; ++i){
    if(s[i]==ch)
      ++count;
    }

console.log(count);


//countAlpha

var s="Hello World, Hi there";
var count=0;

  for(var i =0; i < s.length; ++i){
    var ch=s[i];
    if (ch >="A" && ch <="Z")
       ++count;
    else if (ch >="a" && ch <="z")
        ++count;
    else
        count=count;
    }

console.log(count);

//alphaOnlySentence

var s="Hello World, Hi there";
var result="";

  for(var i =0; i < s.length; ++i){
    var ch=s[i];
    if (ch >="A" && ch <="Z")
       result=result+ch;
    if (ch >="a" && ch <="z")
        result=result+ch;

    }

console.log(result);


//NonalphaSentence

var s="Hello7 World8, Hi3 there!3";
var result="";

  for(var i =0; i < s.length; ++i){
    var ch=s[i];
    if ((!(ch >="A" && ch <="Z")) && (!(ch >="a" && ch <="z")))
       result=result+ch;


    }

console.log(result);

  //countVowels
  var ch="e";
  var s="Hello World, Hi there";
  var count=0;
    for(let i =0; i < s.length; ++i){
      if((s[i]=='a') || (s[i]=='e') || (s[i]=='i')  || (s[i]=='o') || (s[i]=='u'))
      count++;
      if((s[i]=='A') || (s[i]=='E') || (s[i]=='I')  || (s[i]=='O') || (s[i]=='U'))
      count++;
    }


    //countDigits
    var ch="e";
    var s="Hello4 World2, Hi8 there!2";
    var count=0;
      for(let i =0; i < s.length; ++i){
        if((s[i]=='0') || (s[i]=='1') || (s[i]=='2')  || (s[i]=='3') || (s[i]=='4'))
        count++;
        if((s[i]=='5') || (s[i]=='6') || (s[i]=='7')  || (s[i]=='8') || (s[i]=='9'))
        count++;
      }
console.log(count);

let a = prompt ("Enter the first number: ");
let b = prompt ("Enter the second number: ");
let sum = a + b;
console.log ("the sum of " + a + " and " + b +  " is: " + sum );


a=8.0
b=4.0
b+=4.0
c=1.0
c*=2
a/=2.0
d=10.0
d-=1
console.log(a-b)
console.log(a+b)
console.log(a/b)
console.log(a*b)
console.log(a%b)
console.log(a/b==c)
console.log(a!=c)
console.log(a>c)
console.log(b>=a)
console.log (d<a)
console.log (c<=d)


let $greet, _greet, #greet, @result;
$greet = prompt("Enter the first greet message");
_greet=prompt("Enter the second greet message");
#greet=prompt("Enter the second greet message");
result = $greet+"\n"+ _greet + "\n"+ #greet;
console.log (result);


let num = -10, result="";
result=num+"";

if (num >= 0) {
  if (num == 0)
    result=result + " is Zero ";
  else {
    if (num % 2 == 0)
      result=result + " is Even ";
    else if ((num % 3) == 0)
      result=result + " is divisible by 3 ";
    else
      result=result + " is not divisible by 2 and 3 ";
  }
  result=result + " and Positive number ";
} else {
  if (num < 0)
     {
    if (num % 2 == 1)
      result=result + " is an odd ";
    else
      result=result + " is an even ";
  }
  result=result + " and negative number ";
}
console.log(result);

let num,i;
num = 10;
for(i=0;i<10;i++){
console.log("num"+"*"+i);
}

for i in range(1, x + 1):
    if x % i == 0:
        print(i)
        x=10;
        for(i=0;i<x+1;i++)
          if (x%i==0)
             console.log(i);



let num,i,x,r=0;
num = 10;
x=10;
for(i=0;i<x;i++){
i++;

r+=i;
}
console.log(r);


let i, x, r=0;
x=10;
for(i=0;i<x+1;i++){
     i++;
     if (x%i==1)
        r+=i;
}
console.log(r);
