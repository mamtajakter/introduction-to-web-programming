let n1 = prompt ("Enter the first number: "); // n1,n2,n3 is a string because prompt gives a string input
let n2 = prompt ("Enter the second number: ");
let n3 = prompt ("Enter the third number: ");
let average = (n1 + n2 + n3) / 3;// "+" operation concatenates the strings n1, n2, n3
alert  ("the average is: " + average );

let a=16.0;
let b=8.0;
b+=8.0;//b=16
let c=2.0;
c*=1;//c=2
a/=2.0;//a=8
d=5.0;
d-=1;//d=4
alert (a-b);// -8
alert (a+b);//24
alert (a/b);//0.5
alert (a*b);//128
alert (a%b) ;//8

let l= prompt("Enter the base of the traiangle");
let w= prompt("Enter the height of the traiangle");
area= 0.5*l*w;
console.log ("The area of a traiangle is " + area);

let firstname=prompt("Enter your first name");
let lastname=prompt("Enter your last name");
let name= firstname + " " + lastname;
alert ("Welcome to CIS 111, " + name);
