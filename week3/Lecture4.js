let x, y, z, result, sum, i, n;

n = prompt("Enter a nonnegative number"); // enter 10

result = "";
for (i = 0; i < n; i++) {
  result = result + " Hello" + "<br>";
  if (i == 5) {
    break;
  }
}
document.getElementById("p1").innerHTML = "Print a string 5 times: " + result;

result = "";
for (i = 1; i < n; i++) {
  if (i == 5) {
    continue;
  }
  result = result + i + "<br>";
}
document.getElementById("p2").innerHTML = "Print all number except 5: " + result;

result = "";
for (i = 1; i < n; i++) {
  if (i % 2 != 0) {
    continue;
  }
  result = result + i + "<br>";
}
document.getElementById("p3").innerHTML = "Print all even numbers: " + result;

sum = 0;
for (i = 1; i < n; i++) {
  sum = sum + i;
  if (i == 5) {
    break;
  }
}
document.getElementById("p4").innerHTML = "Sum of all first 5 numbers: " + sum;

sum = 0;
for (i = 1; i < n; i++) {
  if (i % 2 != 0) {
    continue;
  }

  sum = sum + i;

}
document.getElementById("p5").innerHTML = "Sum of all even numbers: " + sum;
result = "";
for (i = n; i >= 0; i--) {
  if (i % 2 == 0) {
    continue;
  }
  result = result + i + "<br>";
  i--;

}
document.getElementById("p6").innerHTML = "print all odd number in descending order: " + result;
