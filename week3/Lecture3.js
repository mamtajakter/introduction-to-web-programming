let x, y, z, result, sum, i, n;

n = prompt("Enter the max range:");
result = "";

// for (i=0;i<n;i++){
//   result=result+" Hello" + "<br>";
// }

i = 0;
while (i < n) {
  result = result + "<br>" + " Hello";
  i++;
}
document.getElementById("p1").innerHTML = "Print a string 5 times: " + result;

result = "";

// for (i=1;i<n;i++){
//   result=result+i+"<br>";
// }
i = 0;
do {
  result = result + "<br>" + i;
  i++;
}
while (i < n)
document.getElementById("p2").innerHTML = "Print all number: " + result;

result = "";
// for (i=1;i<n;i++){
//   if(i%2==0){
//     result=result+i+"<br>";
//   }
// }
i = 1;
while (i < n) {
  if (i % 2 == 0) {
    result = result + i + "<br>";
  }
  i++;
}
document.getElementById("p3").innerHTML = "Print all even numbers: " + result;

sum = 0;
// for (i=1;i<n;i++){
//   sum=sum+i;
// }
i = 1;
do {
  sum = sum + i;
  i++;
}
while (i < n)

document.getElementById("p4").innerHTML = "Sum of all numbers: " + sum;


sum = 0;
// for (i = 1; i < n; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
i = 1;
while (i < n) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
  i++;
}
document.getElementById("p5").innerHTML = "Sum of all even numbers: " + sum;


result = "";
// for (i = n; i >= 0; i--) {
//
//   result = result + i + "<br>";
//   i--;
//
// }

i = n;
do {
  result = result + "<br>" + i ;
  i--;
  i--;
}
while (i >= 0)
document.getElementById("p6").innerHTML = "Reverse loop to print all odd number : " + result;
