
var d = new Date();
document.getElementById("demo").innerHTML = d;


var d = new Date(2018, 11, 24);
document.getElementById("demo").innerHTML = d;

const epochTime =new Date(0);
console.log(epochTime);

var s="10/12/1984";
var d = new Date(s);
document.getElementById("demo").innerHTML = d;

var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo").innerHTML = d;

var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d;

var d = new Date();
d.setDate(15);
document.getElementById("demo").innerHTML = d;

var d = new Date();
document.getElementById("demo").innerHTML = d.getSeconds();


var d = new Date();
d.setSeconds(30);
document.getElementById("demo").innerHTML = d;

// compare this lecture with week 4 Lecture 4
//countAlpha
//var ch="e";
// var s="Hello World, Hi there";
// var count=0;
// var alpha1=/[a-z]/i;
// //var alpha2=[a-z];
//   for(var i =0; i < s.length; ++i){
//     if (alpha1.test(s[i]))
//        ++count;
//
//     }
//
// alert(count);
//
//   //takes a string and return  the count of vowels in that string
//   var ch="e";
//   var s="Hello World, Hi there";
//   var count=0;
//   var vowels=/[aeiou]/i;
//     for(let i =0; i < s.length; ++i){
//       if (vowels.test(s[i]))
//       count++;
//     }
// alert(count);
//
// //countDigit
// //var ch="e";
// var s="Hello4 World6, Hi8 there!0";
// var count=0;
// var digits=/[0-9]/;
// //var alpha2=[a-z];
//   for(var i =0; i < s.length; ++i){
//     if (digits.test(s[i]))
//        ++count;
//
//     }
//
// alert(count);
//
// //countNonAlphaonly
// //var ch="e";
// var s="Hello World, Hi there!";
// var count=0;
// var alpha1=/[a-z]/i;
// //var alpha2=[a-z];
//   for(var i =0; i < s.length; ++i){
//     if (!(alpha1.test(s[i])))
//        ++count;
//
//     }
//
// alert(count);
//
//
// //alphaOnlySentence
//
// var s="Hello World, Hi there";
// var result="";
// var alpha=/[a-z]/i;
//   for(var i =0; i < s.length; ++i){
//     var ch=s[i];
//     if (alpha.test(ch))
//        result=result+ch;
//
//     }
//
// alert(result);
