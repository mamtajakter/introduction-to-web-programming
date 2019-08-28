let str, st1, st2, st3, arr1, arr2, fruits1, fruits2, fruits, sortedFruits, reverseFruits, numArray, sortedArray, reversedArray,outputstr, i, resultstr,n,ch;

let maxWord, maxLength, currentLength, currentWord;
str= "The Albatross just ate my CIS 111 homework!!";
arr1= str.split("");// ["T", "h", "e", " ", "a", "l", "b", "a", "t", "r", "o", "s", "s", " ", "j", "u", "s", "t", " ", "a", "t", "e", " ", "m", "y", " ", "l", "u", "n", "c", "h", "."]

arr2= str.split(" ");//["The", "albatross", "just", "ate", "my", "lunch."]

st1= arr1.join("");//"The albatross just ate my lunch."

st2= arr2.join(" ");//"The albatross just ate my lunch."

st3= arr2.join("*");//"The*albatross*just*ate*my*lunch."


fruits1=["Apple", "Nectarine", " Peach", "Mango"];
fruits2=["Banana", "Grapefruit", " Cherry", "Pineapple"];

fruits=fruits1.concat(fruits2);//["Apple", "Nectarine", " Peach", "Mango", "Banana", "Grapefruit", " Cherry", "Pineapple"]

document.getElementById("p1").innerHTML=fruits.toString();

sortedFruits=fruits.sort();
document.getElementById("p2").innerHTML=sortedFruits;

numArray=[10,3,1,9,7,8,4,0,90,-200];
// sortedArray=numArray.sort();
// document.getElementById("p3").innerHTML=sortedArray;

reversedArray=numArray.reverse();
document.getElementById("p4").innerHTML=reversedArray;

str= "The Albatross just ate my CIS 111 homework!!";

n=str.length;
resultstr="";

for(i=0;i<n;i++){
  ch=str.charAt(i);
  if (ch>="A" && ch<="Z"){
     resultstr=resultstr+ ch.toLowerCase();
  }
  else if (ch>="a" && ch<="z"){
     resultstr=resultstr+ ch.toUpperCase();
  }
  else {
    resultstr=resultstr+ ch;
  }
}

document.getElementById("p5").innerHTML=resultstr;
//outputstr= "tHE ALBATROSS JUST ATE MY LUNCH!!";

str= "The Albatross just ate my CIS 111 homework!!";

maxWord="";
maxLength=0;

arr1=str.split(" ");
n=arr1.length;

for (i=0;i<n;i++){
  currentWord=arr1[i];
  currentLength=currentWord.length;
  if(currentLength>maxLength){
    maxLength=currentLength;
    maxWord=currentWord;
  }
}

document.getElementById("p6").innerHTML="The longest word in \"" + str + "\" is " + maxWord;
