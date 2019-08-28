//#1
let r, h, area, result;
let fname, lname, city, state, dollars;
let m, n, p, q;
let upper, lower, ranN;
let a, b, out_and, out_or, out_and12, out_or12;

//#1
function areaCylinder(r,h) {
    let area;
    area = 2*Math.PI*r*r + 2*Math.PI*r*h;
    return area;
}
//#2
function greetings(a,b,c,d,e){
  let name,dollars,result;
  name = a +" " + b;
  dollars=Number(e);
  result="Dear " + name + ", imagine how surprised your neighbors will be when the Publisher Clearing House van drives up to your house in " + c + ", " + d + ", " + "and unloads $"+ dollars.toLocaleString() +"!";
  return result;
}

//#3
function amountCalc(a,b,c,d){
  let total;
  total = (a*25 + b*10 + c*5 + d*1)/100;
  return total;
}

//#4
function randomCalc(a,b){
  let ran
  ran=Math.floor(Math.random()*(a-b)) + b;
  return ran;
}
//#1
r=prompt("Enter radius");
h=prompt("Enter height");
result = areaCylinder(r, h);
document.getElementById("p1").innerHTML = "The surface area of the cylinder is " + result;

//#2

fname=prompt("Enter firstname");
lname=prompt("Enter lastname");
city=prompt("Enter city");
state=prompt("Enter state");
dollars=prompt("Enter amount of dollars");

result=greetings(fname,lname,city,state,dollars);
alert(result);
//#3

m=prompt("Enter number of pennies");
n=prompt("Enter number of nickels");
p=prompt("Enter number of dimes");
q=prompt("Enter number of quarters");

total = amountCalc(m,n,p,q);
document.getElementById("p2").innerHTML = `The total dollars amount of ${m} pennies,
${n} nickels, ${p} dimes, and ${q} quarters is ${total} dollars.`;

//#4

upper=prompt("Enter upperbound");
lower=prompt("Enter lowerbound");
upper=Number(upper);
lower=Number(lower);

ranN=randomCalc(upper,lower);
document.getElementById("p3").innerHTML = `A random integer between ${lower} and ${upper} is ${ranN}`;


//Emma's work
let s,output;

function reverseStr(str){
  let i, result;
  result="";
  for(i=str.length-1;i>=0;i--){
    result=result+str[i];
  }
  return result;
}

s= prompt("Enter a sentence");
output= reverseStr(s);
document.getElementById("p3").innerHTML = `The reverse of  ${s} is ${output}`;
