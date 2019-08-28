//full name and address are given, do work for first name, last name, street name, apt/unit, city, state, zipcode
let a, b, c, x, y, z;

function showInputs(){
 let a,b, result;
 a=document.getElementById('t1');
 b=document.getElementById('t2');
 result=a.value +"<br>"+b.value;
 document.getElementById("p4").innerHTML=result;
}

a=document.getElementById("p1");
b=document.createElement("h4");
c=document.createElement("input");
c.setAttribute("id","t1");
b.textContent="Name: ";
a.appendChild(b);
b.appendChild(c);

a=document.getElementById("p2");// a= p2 object
b=document.createElement("h4");// b= h4 object
c=document.createElement("input");// c= input object
c.setAttribute("id","t2");// <input id="t1">
b.textContent="Address: ";// <h4>Address: </h4>
b.appendChild(c); //<h4>Address: <input id="t1"></h4>
a.appendChild(b);//<p id="p2"><h4>Address: <input id="t1"></h4></p>

a=document.getElementById("p3");
b=document.createElement("button");
b.textContent="Preview";
a.appendChild(b);

b.addEventListener("click", showInputs);
