let x, y, sum, fname, lname, name;

x= 3.14;
y=3;

sum=x+y;

document.getElementById("demo1").innerHTML = "The sum of " + x + " and " + y + " is " + sum;

document.getElementById("demo2").innerHTML = 'The sum of ' + x + ' and ' + y + ' is ' + sum;

document.getElementById("demo3").innerHTML = `The sum of ${x} and ${y} is ${sum}`;

fname= prompt("Enter your first name");
lname= prompt("Enter your last name");
name= fname+" "+lname;
document.getElementById("demo4").innerHTML = "Hello " + name +", what\'s up!" ;

name= fname+' '+lname;
document.getElementById("demo6").innerHTML = 'Hello ' + name +', what\'s up!' ;

name= `${fname} ${lname}`;
document.getElementById("demo5").innerHTML = `Hello ${name}, what\'s up!` ;
