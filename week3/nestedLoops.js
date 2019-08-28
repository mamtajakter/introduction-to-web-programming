//take row and column from user and then print numbers or stars
var str="";
for(var i=0;i<2;i++){
  for(var j=0;j<3;j++){
    str=str+"* ";
  }
  str=str+"\n";
}
alert(str);

var str="";
for(var i=0;i<2;i++){
  for(var j=0;j<3;j++){
    str=str+(j+1) + " ";
  }
  str=str+"\n";
}
alert(str);

var str="";
for(var i=0;i<3;i++){
  for(var j=0;j<=i;j++){
    str=str+"* ";
  }
  str=str+"\n";
}
alert(str);

var str="";
for(var i=0;i<3;i++){
  for(var j=0;j<=i;j++){
    str=str+Number(j+1)+" ";
  }
  str=str+"\n";
}
alert(str);
