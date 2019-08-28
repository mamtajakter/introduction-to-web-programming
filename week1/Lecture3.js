let x, y, z;

 x=5;
 y=15;

 z=0;

z= x+y;

document.getElementById('p1').innerHTML=  x + " + "+ y+  " = " + z;

z= y-x;

document.getElementById('p2').innerHTML=  y + " - "+ x+  " = " + z;

z= y*x;

document.getElementById('p3').innerHTML=  y + " * "+ x+  " = " + z;

z= y/x;

document.getElementById('p4').innerHTML=  y + " / "+ x+  " = " + z;

z= y%x;

document.getElementById('p5').innerHTML=  y + " % "+ x+  " = " + z;

x+=y;//z=z+2

document.getElementById('p6').innerHTML= "x=x+y: " + x;

y*=x;//z=z+2

document.getElementById('p7').innerHTML= "y=y*x: " + y;

y/=x;//z=z+2

document.getElementById('p8').innerHTML= "y=y/x: " + y;

y++;//y=y+1

document.getElementById('p9').innerHTML= "y++: " + y;

y--;//y=y-1;

document.getElementById('p10').innerHTML= "y--: " + y;
