let str, i, st, patt, result, n, count, x , patt1, patt2, patt3, acount, vcount,dcount,pcount;


str="re, green, red, green, gren, gr, blue, yellow";
patt=/(red|green|blue)/g;
result= str.match(patt);

document.getElementById("p1").innerHTML= result;

// count the alphabetic letters

str="2 Albatross!!";
n=str.length;
patt=/[a-z]/i;
count=0;
for (i=0; i<n; i++){
    ch=str[i];
    if(patt.test(ch))
       count++;
}
document.getElementById("p2").innerHTML= "The string \""+ str + "\" has "+ count + " alphabetic letters";

x= 32121324;
str=x.toString();
n=str.length;
patt=/[0-9]/;
count=0;
for (i=0; i<n; i++){
    ch=str[i];


    if(patt.test(ch))
       count++;
      //alert(count);


}
document.getElementById("p3").innerHTML= "The number "+ str + " has "+ count + " digits";

str="2 Albatross!!";
n=str.length;
patt=/[aeiouy]/i;
count=0;
for (i=0; i<n; i++){
    ch=str[i];
    if(patt.test(ch))
       count++;
}
document.getElementById("p4").innerHTML= "The string \""+ str + "\" has "+ count + " vowels";


str="2 Albatross!!!";
n=str.length;
patt1=/[a-z]/i;
patt2=/[0-9]/;
count=0;
for (i=0; i<n; i++){
    ch=str[i];
    if(patt1.test(ch))
       count=count;
    else if(patt2.test(ch))
       count=count;
    else {
        count++;
    }
}
document.getElementById("p5").innerHTML= "The string \""+ str + "\" has "+ count + " punctuations";

str="2 Albatross!!!";
n=str.length;
patt1=/[a-z]/i;
patt2=/[0-9]/;
patt3=/[aeiou]/i;
acount=0;
vcount=0;
dcount=0;
pcount=0;
for (i=0; i<n; i++){
    ch=str[i];
    if(patt1.test(ch)){
      acount++;
      if(patt3.test(ch))
         vcount++;
    }
    else if(patt2.test(ch))
       dcount++;
    else {
        pcount++;
    }
}
document.getElementById("p6").innerHTML= "The string \""+ str + "\" has "+ pcount + " punctuations, " + vcount +" vowels, "+ acount + " alpha letters, "+ dcount + " digits.";
