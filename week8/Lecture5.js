// take a string and find if there is any repetitive char

function duplicateCharTest(s){
var result="";
for (var i=0; i<s.length;i++)
    for (var j=i+1; j<s.length;j++){
        if (s[i]==s[j]){
           return "There was a duplicate char";
           break;
         }
         }

    return "There was no duplicate char";
}

n=4621375858457;
let maxDigit=(s)=>{
s=s.toString();
let i,max=s[0],ch;
for(i=0;i<s.length;i++){
  ch=s[i];
   if(ch>max)
     max=ch;
}
return max;

}
console.log(maxDigit(n));


str=`The white albatross flies over the clever fox`;

let maxWords=(s)=>{
let ar,word;
ar=s.split(" ");
  let i,maxWord=ar[0],maxLength=maxWord.length;word;
for(i=0;i<ar.length;i++){
  word=ar[i];
   if(word.length>maxLength){
      maxLength=word.length;
      maxWord=word;
   }

}
return maxWord;

}
console.log(maxWords(str));
