
let x, y, z, suggestion, weather, day, result, d, hour, time, greeting, weatherForcast, decision;

weatherForcast = prompt("Enter the weather: Rainy/Sunny/Cloudy");

if (weatherForcast == "Rainy") {
  decision = "Its a " + weatherForcast + " day, carry your rain jacket";
} else if (weatherForcast == "Sunny") {
  decision = "Its a " + weatherForcast + " day, wear sunscreen";
} else if (weatherForcast == "Cloudy") {
  decision = "Its a " + weatherForcast + " day, so wear a jacket";
} else {
  decision = "do whatever";
}

console.log(decision);
document.getElementById("p1").innerHTML = decision;


x = Number(prompt("enter a number"));
y = Math.floor(x);
z = Math.ceil(x);

if (y==z) {
  d = `${x} is an integer number`;
} else {
  d = `${x} is a decimal number`;
}
document.getElementById("p2").innerHTML = d;

z = x % 2;

if (z == 0) {
  y = `${x} is an even number`;
} else {
  y = `${x} is an odd number`;
}
document.getElementById("p3").innerHTML = y;


z = x % 5;

if (z == 0) {
  y = `${x} is divisible by 5`;
}
else {
    y = `${x} is not divisible by 5`;
}
document.getElementById("p4").innerHTML = y;

if (x > 100) {
  z = `${x} is more than 100`;
} else if (x < 100) {

  z = `${x} is less than 100`;
} else {

  z = `Its exactly 100!`;
}
//alert(z4);
document.getElementById("p5").innerHTML = z;

if (x > 0) {
  decision = x+ " is a positive number";
  y = Math.floor(x);
  z = Math.ceil(x);
  if (y == z) {
    decision = decision + " and also Its an integer";
    if (x%2==0) {
      decision = decision + " and its even";
    } else {
      decision = decision + " and its odd";
    }
  } else {
    decision = decision + " and also Its a decimal ";
  }

} else if (x < 0) {
  decision = x+ "  a negative number";
} else {
  decision = "Its zero";
}
console.log(decision);


document.getElementById("p6").innerHTML = decision;


hour = Number(prompt("enter the hour"));
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("p7").innerHTML = greeting;






day = Number(prompt("Enter day (0..6)"));

if (day == 1)
  d = "Monday";
else if (day == 2)
  d = "Tuesday";
else if (day == 3)
  d = "Wednesday";
else if (day == 4)
  d = "Thursday";
else if (day == 5)
  d = "Friday";
else if (day == 6)
  d = "Saturday";
else if (day == 0)
  d = "Sunday";

if ((day >= 1) && (day <= 5))
  result = "Its " + d + " and its a weekday";
else
  result = "Its " + d + " and its a weekend";

document.getElementById("p8").innerHTML = result;

d = Number(prompt("Enter a number (1..6)"));
if ((d >= 1) && (d <= 6))
  result = d + " is a valid number of die";
else
  result = d + " is not a valid number of die";;

document.getElementById("p9").innerHTML = result;
