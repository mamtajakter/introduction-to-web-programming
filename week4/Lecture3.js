

let str,st, numberArray, ss, pal, ch, result,i, count;

numberArray=[2,1,9,34,0,3];

numberArray[2]=78;
console.log(numberArray);// prints [2,1,78,34,0,3]


str="Hello!!";// in reality its a character array; ['H','e','l','l','o','!','!']

str[3]='w';
console.log(str);// still prints "Hello!!" because, strings are immutable


console.log(str[4]);// prints 'o'
console.log(str.charAt(4));// prints 'o'
console.log(str.indexOf('o'));

st="Widget with id";
console.log(st.indexOf("Widget"));// prints 0
console.log(st.indexOf("widget"));// prints -1
console.log(st.indexOf("k"));// prints -1
console.log(st.indexOf("d"));// prints 2

console.log(st.includes("with"));// prints true
console.log(st.includes("without"));// prints false
console.log(st.includes("k"));// prints false
console.log(st.includes("d"));// prints true

console.log(str.toUpperCase()); // prints "HELLO!!"
console.log(str.toLowerCase());// prints "hello!!"


ss= "stringify";
console.log(ss.substr(5,3));// prints "gif"
console.log(ss.substring(5,3));//prints "in"


pal="Emit no evil, \"live on time";
pal="Emit no evil, \n live on time";
pal="Emit no evil, \t live on time";
pal="Emit no evil, \' live on time";
// pal="123321";
// pal="madam";

ch=prompt ("Enter a character");

if (ch>='0' && ch<='9'){
    result=ch+ " is a digit.";
}
else if (ch>='A' && ch<='Z'){
    result= ch+ " is an alphabetic letter.";
}
else if (ch>='a' && ch<='z'){
    result= ch+ " is an alphabetic letter.";
}
else{
  result= ch+ " is neither a digit nor an alphabetic letter.";
}

console.log(result);
