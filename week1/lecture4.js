 let x, y, z, firstname, lastname, space, name, city, state, commas, nameaddress, p, q, m;

 x = "10";
 y = 20;
 z = x + y;
 document.getElementById('p1').innerHTML = "The sum of a string and number: " + z;

 x = "100";
 y = "3100";
 z = x + y;
 document.getElementById('p2').innerHTML = "The sum of a string and string: " + z;

 firstname = "Mamtaj";
 lastname = "Akter";
 space = " ";
 name = firstname + space + lastname;
 document.getElementById('p3').innerHTML = "The sum of a string and string: " + firstname + " " + lastname;

 city = "Eugene";
 state = "Oregon";
 commas = ", ";
 nameaddress = name + " from " + city + commas + state;
 document.getElementById('p4').innerHTML = "The sum of a string and string: " + nameaddress;

 p = true;
 q = "false";
 document.getElementById('p5').innerHTML = "The sum of a boolean and string: " + p + q;

 p = true;
 q = 2345;
 m = p + q;
 document.getElementById('p6').innerHTML = "The sum of a boolean and a number: " + m;

 //Variables defined with const behave like  variables, except they cannot be reassigned:
 const xss = 3.1415;
 //xss = 3.14;      // This will give an error
 //xss = xss + 10;   // This will also give an error
 m = xss + q;
 document.getElementById('p7').innerHTML = "The sum of two numbers: " + m;
