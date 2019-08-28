let x, y, z, a, b, c, pirateWords;

pirateWords=["Ahoy!", "Ya Lubber!", "Avast!"];

function handleb1(){
  let j, k, l;
  j=document.getElementById("ta");
  k= j.value;
  k=k+pirateWords[0];
  j.value=k;
}

function handleb2(){
  let j, k, l;
  j=document.getElementById("ta");
  k= j.value;
  k=k+pirateWords[1];
  j.value=k;
}

function handleb3(){
  let j, k, l;
  j=document.getElementById("ta");
  k= j.value;
  k=k+pirateWords[2];
  j.value=k;
}

x= document.getElementById("b1");
x.addEventListener("click", handleb1);

y= document.getElementById("b2");
y.addEventListener("click", handleb2);

z= document.getElementById("b3");
z.addEventListener("click", handleb3);
