//Q1
let $greet, _greet, greet1, result,i;
$greet = prompt ("Enter the first greet message");
_greet= prompt ("Enter the second greet message");
greet1= prompt ("Enter the second greet message");
result = $greet + "\n" + _greet + "\n" + greet1;
alert (result);

// variable name cant start with the special characters (except $ and _ )
// $greet and _greet are valid
// but #greet1 and @result is invalid


//Q2
str="Albatross is white.";
result="";
i=0;
for (i=str.length-1;i>=0;i--)
    result=result+ str[i];
//alert(result);
console.log(result);

//Q3
let s, t, u, v, w, z, x, i;
s="abc";
t="$";
u="$";
v="$";
w="$";
z="$";
x=2;
i=1;
while (i < s.length) {
    t=" "+ i;
    u=i*2;
    if ( s.includes ('c') )
        v='#';
    z=z+t+u+v+w;
    i++;
  }
console.log (z);//$ 12#$ 24#$

//Q4
a=8.0;
b=4.0;
b+=4.0;
c=1.0;
c*=2;
a/=2.0;
d=10.0;
d-=1;
console.log(a-b); //-4
console.log(a+b);// 12
console.log(a/b);// 0.5
console.log(a*b);// 32
console.log(a%b);// 4
console.log(a/b==c);// false
console.log(a!=c);// true
console.log(a>c);//true
console.log(b>=a);//true
console.log (d<a);//false
console.log (!(c<=d));//false


//Q5

let maxnum=0,i=0;
let lst= [1,2,3,4,5,1,2,6,7,3,9, 0, 1];

for (i=0;i<lst.length;i++){
    if (lst[i]>maxnum)
       maxnum=lst[i];
}

console.log(maxnum);

//Q6
let a = prompt ("Enter the first number: ");
let b = prompt ("Enter the second number: ");
let sum = a + b;
console.log ("the sum of " + a + " and " + b +  " is: " + sum );//the sum of 5 and 6 is: 56

//Q7
let str="2 stringifies!!!",i,ch,result;
result="";
for (i=0;i<str.length;i++){
  ch=str[i];
   if (ch>="A" && ch<="Z")
      result=result;
   else if (ch>="a" && ch<="z")
      result=result;
   else
      result=result+ch;
}
console.log(result);// 2 !!!

//Q8
radius=12;
area=Math.PI*radius*radius;
console.log(area);


//Q9

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
console.log(result);//-10 is an even  and negative number

//Q10
let num, i;
num = 10;
i=0;
while (i<num){
    console.log ("num"+"*"+i);
    i++;
}
//num*0
//num*1
//num*2
//num*3
//num*4
//num*5
//num*6
//num*7
//num*8
//num*9

//Q11

let i, x=10;
for(i=0;i<x+1;i++)
      if (x%i==0)
          console.log(i);

//1
//2
//5
//10

//Q12
let i, x, r=0;
x=10;
i=0;
do{
     i++;
     r+=i;
     i++;
}
while (i<x+1)
console.log(r);//36


//Q13
let i, x, r=0;
x=10;
for(i=0;i<x+1;i++){
     i++;
     if (x%i==1)
        r+=i;
}
console.log(r);

//while conversion
let i, x, r=0;
x=10;
i=0;
while(i<x+1){
     i++;
     if (x%i==1)
        r+=i;
     i++;
}
console.log(r);

//do-while conversion

let i, x, r=0;
x=10;
i=0;

do{
     i++;
     if (x%i==1)
        r+=i;
     i++;
}
while(i<x+1)

console.log(r);

//Q14
let i,x;
x=12;
for(i=0; i<x; i++){
    if (x%i==2){
        break;
        }
    console.log(i);
}
alert ("Oh no, I am broke!");
//0
//1
//2
//3
//4
//Oh no, I am broke!

let i, x;
x=12;
for(i=0;i<x;i++){
    if (x%i==0){
        continue;
        }
    console.log(i);
}
alert ("Ooof, I survived or did I?");// 0 5 7 8 9 10 11
//Ooof, I survived or did I?

//Q15

//a)
let str = "sandstone finder";
let str2= str.substr(5, 4);
console.log(str2);// tone

//b)
let count=0, number=4;
let i=number;
while (i>2) {
 	     count=count+1;
       i--;
  }
console.log(count);//2

//c)

let total=0, number=10, i;
for ( i=0; i<=number; i+=5) {
	total+=i;
}
console.log(i);//15

//d)
let result = Math.floor((Math.random() * 10) + 1);
console.log(result);// 1 to 10

//e)
let string1 = "Hi there";
let string2 = string1.indexOf('t') + string1.charAt(5);
console.log(string2);// 3e

//Q16

//a) do..while loop

//b)
let n=5;
console.log(n % 2 == 1);// true
//c) prompt


//d)
var num1 = "10";
var num2 = 11;
 num2 = num2 + num1;// "1110"

//e)
let value1 = 99;
let value2 = 25;
let result = "value1" + "value2"; // "value1value2"
