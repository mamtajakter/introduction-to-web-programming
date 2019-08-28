 x, y, result, fName, lName;

 function squareCalc(t) {
   y = t * t;
   return y;
 }

 function areaCircle(p) {
   z = Math.PI * p * p;
   return z;
 }

 function areaRect(p, q) {
   z = p * q;
   return z;
 }

 function areaTri(p, q) {
   z = 0.5 * p * q;
   return z;
 }


 function form2(fName, lName, city, state) {
   x = `Hello Dear, ${fName} ${lName}`;
   return x;
 }

 function amountTotal(a, b, c, d) {
   let c1, dollar;
   c1 = a * 1 + b * 5 + c * 10 + d * 25;
   dollar = c / 100;
   return dollar;
 }

 x = prompt("Enter a number");
 result = x * x;

 document.getElementById("p1").innerHTML = result;

 x = prompt("Enter a number");
 result = squareCalc(x);
 document.getElementById("p2").innerHTML = result;

 x = prompt("Enter another number");
 result = squareCalc(x);
 document.getElementById("p3").innerHTML = result;


 x = prompt("Enter the radius value");
 result = areaCircle(x);

 document.getElementById("p4").innerHTML = result;


 x = prompt("Enter the value of length");
 y = prompt("Enter the value of width");

 result = areaRect(x, y);

 document.getElementById("p5").innerHTML = result;

 // x=prompt("Enter the value of base");
 // y=prompt("Enter the value of height");

 result = areaTri(4, 5);

 document.getElementById("p6").innerHTML = result;


 p = prompt("How many pennies you have got?");
 n = prompt("How many nikels you have got?");
 d = prompt("How many dimes you have got?");
 q = prompt("How many quarters you have got?");
 c = p * 1 + n * 5 + d * 10 + q * 25;
 dollar = c / 100;
 document.getElementById("demo1").innerHTML = "The total amount you have got is $" + dollar;




 p = prompt("How many pennies you have got?");
 n = prompt("How many nikels you have got?");
 d = prompt("How many dimes you have got?");
 q = prompt("How many quarters you have got?");
 z = amountTotal(p, n, d, q);
 document.getElementById("demo1").innerHTML = "The total amount you have got is $" + z;


 fName = prompt("Enter your first name");
 lName = prompt("Enter your last name");
 c = `Hello dear, ${fName} ${lName}`;
 document.getElementById("demo1").innerHTML = c;



 fName = prompt("Enter your first name");
 lName = prompt("Enter your last name");
 z = form2(fName, lName);
 document.getElementById("demo1").innerHTML = z;
