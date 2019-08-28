let x, y, z, result, sum,i , n;

n= prompt("Enter a nonnegative number");

result="";

for (i=0;i<n;i++){
  result=result+" Hello" + "<br>";
}
document.getElementById("p1").innerHTML ="Print a string 5 times: "+result;

result="";
for (i=1;i<n;i++){
  result=result+i+"<br>";
}
document.getElementById("p2").innerHTML ="Print all number: "+result;

result="";
for (i=1;i<n;i++){
  if(i%2==0){
    result=result+i+"<br>";
  }
}
document.getElementById("p3").innerHTML ="Print all even numbers: "+result;

sum=0;
for (i=1;i<n;i++){
  sum=sum+i;
}
document.getElementById("p4").innerHTML ="Sum of all numbers: "+sum;


sum=0;
for (i=1;i<n;i++){
  if(i%2==0){
    sum=sum+i;
  }
}
document.getElementById("p5").innerHTML ="Sum of all even numbers: "+sum;


result="";
for (i=n;i>=0;i--){

      result=result+i+"<br>";
    i--;

}
document.getElementById("p6").innerHTML ="Reverse loop to print all odd number : "+result;
