let x, y, z, a, b, c, r, minb, maxb, totalCount, st;

x=Math.PI;
document.getElementById("p1").innerHTML="Pi value: "+ x;

x=4.4;
y=Math.round(x);
document.getElementById("p2").innerHTML="Round of " + x + " is "+ y;

x=4.8;
y=Math.round(x);
document.getElementById("p3").innerHTML="Round of " + x + " is "+ y;

x=4.4;
y=Math.ceil(x);
document.getElementById("p4").innerHTML="Ceil of " + x + " is "+ y;

x=4.8;
y=Math.floor(x);
document.getElementById("p5").innerHTML="Floor of " + x + " is "+ y;

x=4;
y=2;
z=Math.pow(x,y);
document.getElementById("p6").innerHTML="Power of " + x + " and " + y + " is "+ z;

x=16;
y=Math.sqrt(x);
document.getElementById("p7").innerHTML="Sqrt of " + x + " is "+ y;

x=Math.min(1,2,-56, 90,678, 0,214,-900);
document.getElementById("p8").innerHTML="Min is "+ x;

x=Math.max(1,2,-56, 90,678, 0,214,-900);
document.getElementById("p9").innerHTML="Max is "+ x;


x= Math.random();//
document.getElementById("p10").innerHTML="Random number between 0 and 1 is : "+ x;

x= Math.random()*100;//
document.getElementById("p11").innerHTML="Random number between 0 and 100 is : "+ x;

x= Math.floor(Math.random()*100);//
document.getElementById("p12").innerHTML="Random integer between 0 and 100 is : "+ x;

minb=90;
totalCount=10;
x= Math.floor(Math.random()*totalCount) + minb;//
document.getElementById("p13").innerHTML="Random integer between "+ minb+ " and " + (minb+totalCount)+ " is : " + x;

let n1 = prompt ("Enter the first number: "); // n1,n2,n3 is a string because prompt gives a string input
let n2 = prompt ("Enter the second number: ");
let n3 = prompt ("Enter the third number: ");
n1= Number(n1);
n2= Number(n2);
n3= Number(n3);
let average = (n1 + n2 + n3) / 3;// "+" operation concatenates the strings n1, n2, n3
alert ("the average is: " + average );

// to convert number n1 to a string again
st= n1.toString();
