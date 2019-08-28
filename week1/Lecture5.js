 let firstname, lastname, name, space, staddress, city, state, zipcode, country, phone, result;
 let email, commas, nameaddress, address, r, area, l, w;

 firstname = prompt("Enter your first name");
 lastname = prompt("Enter your last name");
 name = firstname + " " + lastname;
 space = " ";
 staddress = prompt("Enter your street name with hous/apt no");
 city = prompt("Enter your city");
 state = prompt("Enter your state");
 zipcode = prompt("Enter your zipcode");
 country = prompt("Enter your country");
 phone = prompt("Enter your phone number");
 email = prompt("Enter your email address");
 commas = ", ";

 nameaddress = name + " from " + city + commas + state;
 address = staddress + commas + city + commas + state + commas + zipcode + commas + country;

 result = name + "<br>" + "Address: " + address + "<br>" + "Phone: " + phone + "<br>" + "Email: " + email;

 console.log(result);
 document.getElementById('p1').innerHTML = result;
 alert(result);


 r = prompt("Enter the radius value");
 area = Math.PI * r * r;
 result = "The area of a circle that has a radius " + r + " is " + area;
 console.log(result);
 document.getElementById('p2').innerHTML = result;
 alert(result);

 l = prompt("Enter the length of the Rectangle");
 w = prompt("Enter the width of the Rectangle");
 area = l * w;
 result = "The area of a rectangle that has a length " + l + " and width " + w + " is " + area;
 console.log(result);
 document.getElementById('p3').innerHTML = result;
 alert(result);
