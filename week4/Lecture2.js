let x, y , z, i , numberArray, total, n, sum, avg, maxSoFar, minSoFar, temp;

numberArray=[10,23,45,13,56,25,89,67, 30];

n=numberArray.length;

total="";

for (i=0;i<n;i++){
   total= total + "<br>"+ numberArray[i];
}
document.getElementById("p1").innerHTML="Print all numbers of the array: " +total;

sum=0;
for (i=0;i<n;i++){
   sum= sum + numberArray[i];
}

document.getElementById("p2").innerHTML="Sum of all numbers in the array: " +sum;

avg=sum/n;
document.getElementById("p3").innerHTML="Average of all numbers: " +avg;

maxSoFar=numberArray[0];
for (i=0;i<n;i++){
    if (numberArray[i]>maxSoFar)
        maxSoFar= numberArray[i];
}
document.getElementById("p4").innerHTML="Maximum of all numbers: " +maxSoFar;

minSoFar=numberArray[0];
for (i=0;i<n;i++){
    if (numberArray[i]>maxSoFar)
        minSoFar= numberArray[i];
}
document.getElementById("p5").innerHTML="Minimum of all numbers: " +minSoFar;

sum=0;
total="";
for (i=0;i<n;i++){
    temp=numberArray[i]%2;
    if (temp==0){
      total= total + ", "+ numberArray[i];
      sum= sum + numberArray[i];
    }

}

document.getElementById("p6").innerHTML="Sum of all even numbers"+total+" in the array: " +sum;

sum=0;
total="";
for (i=0;i<n;i++){
    temp=numberArray[i]%2;
    if (temp!=0){
      total= total  + ", "+ numberArray[i];
      sum= sum + numberArray[i];
    }
}

document.getElementById("p7").innerHTML="Sum of all odd numbers"+total+" in the array: " +sum;
