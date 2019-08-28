// Practice Assignment 2 but with function declaration

let x, y, z, d, result, sum, i, yeardecision, triangype, monthdecision, month, n, m, n2, gpa, side1, side2, side3, year, temp;

//Q1
function sumEvens(w) {
  let sum, i, temp, n;
  sum = 0;
  for (i = 1; i <= w; i++) {
    temp = i % 2;
    if (temp == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

//Q2

function sumOdds(q) {
  let sum, i, temp, n;
  sum = 0;
  for (i = 1; i <= q; i++) {
    temp = i % 2;
    if (temp != 0) {
      sum = sum + i;
    }
  }
  return sum;
}

//Q3
function sumProperDiv(s) {
  let sum, i, temp, n;
  sum = 0;
  for (i = 1; i < s; i++) {
    temp = n2 % i;
    if (temp == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

//Q4
function gpaChecker(j) {
  let d;
  if (j >= 3.75) {
    d = true;
  } else if (j < 3.75) {
    d = false;
  }
  return d;
}

//Q5

function triangleType(a, b, c) {
  let t;
  if (a == b) {
    if (a == c)
      t = "equilateral";
    else
      t = "isosceles";

  } else {
    if (a == c)
      t = "isosceles";
    else
      t = "scalene";
  }
  return t;
}

//Q6

function leapYear(y) {
  let d;
  if (y % 4 == 0) {
    if (y % 100 != 0)
      d = true;
    else
      d = false;

  } else if (y % 100 == 0) {
    if (y % 400 == 0)
      d = true;
    else
      d = false;

  } else
    d = false;

  return d;
}

//Q7

function monthDays(m) {
  let d;
  if (
    m == 1 ||
    m == 3 ||
    m == 5 ||
    m == 7 ||
    m == 8 ||
    m == 10 ||
    m == 12
  ) {
    d = "31";
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    d = "30";
  } else {
    d = "28";
  }
  return d;
}
//Q1
n = prompt("Please Enter Your Nonnegative Interger:");
result = sumEvens(n);
document.getElementById("p1").innerHTML =
  `Sum of all even numbers for your nonnegative interger: ${result} `;

//Q2
n = prompt("Please Enter Your Nonnegative Interger:");
result = sumOdds(n);
document.getElementById("p2").innerHTML =
  `Sum of all odd numbers for your nonnegative interger: ${result}`;


//Q3
n2 = prompt("Please Enter Your Nonnegative and Nonzero Interger:");
result = sumProperDiv(n2);
document.getElementById("p3").innerHTML =
  `Sum of all proper divisors of your nonnegative interger: ${result}`;

//Q4
gpa = prompt("Please Enter Your Grade Point Average:");
result = gpaChecker(gpa);
document.getElementById("p4").innerHTML =
  "Grade point average  is greater than or equal to 3.75: " + result;

// Q5
side1 = prompt("Please Enter First Triangle Side Legnth:");
side2 = prompt("Please Enter Second Triangle Side Legnth:");
side3 = prompt("Please Enter Third Triangle Side Legnth:");

result = triangleType(side1, side2, side3);

document.getElementById("p5").innerHTML = "Your triangle is " + result;


//Q6
n = prompt("Please Enter Your Year:");
result = leapYear(n);
document.getElementById("p6").innerHTML = year + " is a leap year: " + result;

//Q7
n = prompt("Please Enter The Number of your Month:");
reult = monthDays(n);
document.getElementById("p7").innerHTML = "Month " + m +
  " has " + result + " days in it.";
