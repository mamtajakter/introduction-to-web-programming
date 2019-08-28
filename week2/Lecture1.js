var x = 3.14;
var y = 3;
document.getElementById("p1").innerHTML = x + "<br>" + y;

//maximum number of digit is allowed in integer is 15
var x2 = 999999999999999; //gives accurate output if atmost 15 digits
var y2 = 9999999999999999;//gives incorrect output if more than 15 digits
document.getElementById("p2").innerHTML = x2 + "<br>" + y2;

var x3 = 0.2 + 0.1;
document.getElementById("p3").innerHTML = "0.2 + 0.1 = " + x3;

var x4 = 0.2 + 0.1;
document.getElementById("p4").innerHTML = "0.2 + 0.1 = " + x4;
var y4 = (0.2*10 + 0.1*10) / 10;
document.getElementById("p5").innerHTML = "0.2 + 0.1 = " + y4;

var x6 = 5;
x6++;
var z6 = x6;
document.getElementById("p6").innerHTML = z6;

var x7 = 5;
x7--;
var z7 = x7;
document.getElementById("p7").innerHTML = z7;

var x8 = 5;
document.getElementById("p8").innerHTML = x8 ** 2;

//Operator Precedence

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
document.getElementById("p9").innerHTML = 100 + 50 * 3;

//And (as in school mathematics) the precedence can be changed by using parentheses:
document.getElementById("p10").innerHTML = (100 + 50) * 3;

//When many operations have the same precedence (like addition and subtraction), they are computed from left to right:
document.getElementById("p11").innerHTML = 100 + 50 - 3;
