let x, y, z, a, b, c, i, bs;

function handleBs() {

  if (this.id == "b1") {

    x= document.getElementById("d1");

        y= document.createElement("ol");// give an id to ol
        y.setAttribute("id", "li1");
        x.appendChild(y);

  }
  else if (this.id == "b2") {
     x= document.querySelector("ol");
     y= document.createElement("li");
     z= document.getElementById("t1");

     a= z.value;
     y.textContent=a;

     x.appendChild(y);

  }
  else if (this.id == "b3") {
    x= document.getElementById("li1");

    z= document.getElementById("t2");

    a= z.value;

    x.setAttribute("type", a);

  } else {

    x= document.getElementById("li1");
    if (x.hasChildNodes()){
      y=x.lastChild;
      x.removeChild(y);
    }

  }

}


bs = document.querySelectorAll("button");

for (i = 0; i < bs.length; i++)
  bs[i].addEventListener("click", handleBs);
