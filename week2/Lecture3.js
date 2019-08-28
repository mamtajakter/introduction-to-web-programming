let x, y, z, output, result,a,b,c,d,e;

x=3.14;
y=3;

output= x>y;

document.getElementById("demo1").innerHTML = x+ ">"+ y+ "="+ output;

output=x<y;

document.getElementById("demo2").innerHTML = x+ "<"+ y+ "="+ output;

output=x!=y;

document.getElementById("demo3").innerHTML = x+ "!="+ y+ "="+ output;

output=x==y;

document.getElementById("demo4").innerHTML = x+ "=="+ y+ "="+ output;

output=x>=y;

document.getElementById("demo5").innerHTML = x+ ">="+ y+ "="+ output;

result=!output;

document.getElementById("demo6").innerHTML = "!"+ output+ "="+ result;

x=3.14;
y=3;

a=x<y;
b= x!=y;

c=a && b;

document.getElementById("demo7").innerHTML =  c;

d= a || b;
document.getElementById("demo8").innerHTML =  d;

e= c && d;
document.getElementById("demo9").innerHTML =  e;
