let greet1, greet2, greet3, alert1;// variable name cant start with number, variable name cannot be a keyword
greet1 = prompt("Enter the first greet message");
greet2 = prompt("Enter the second greet message");
greet3 = prompt("Enter the second greet message");
alert1 = greet1 + "\n" + greet2 + "\n" + greet3;
console.log(alert1);

let a, b, c, d, num;
a = 3;
b = 7;
c = 12;
d = 9;
b = a + b;
c = c + d + a - b;
a = b * a;
d = b - a;
num = b;
console.log(num);
alert("cdsgfds");
if (num >= 0) {
  if (num == 0)
    console.log("zero");
  else {
    if (num % 2 == 0)
      console.log("Even");
    else if ((num % 3) == 0)
      console.log("divisible by 3");
    else
      console.log("not divisible by 2 and 3");
  }
  console.log(" Positive Number");
} else {
  if (num < 0)
    console.log("nonzero");
  else {
    if (num % 2 == 1)
      console.log("Odd");
    else
      console.log("even");
  }

  console.log("Negative number");
}
