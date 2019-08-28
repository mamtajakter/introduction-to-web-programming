let x, y, z, a, b, c, i, bs;

function handleBS() {
  if (this.id == "b1") {
    x = document.getElementById("d1");
    y = document.createElement("ol");
    x.appendChild(y);


  } else if (this.id == "b2") {
  } else if (this.id == "b2") {
  } else {
  }
}

bs = document.querySelectorAll("button");

for (i = 0; i < bs.length; i++)
     bs[i].addEventListener("click", handleBS) ;
