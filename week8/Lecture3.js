//take a month number and returns the total number of days in that month (no leap year insideration)
var daysInMonth=m=>{
  marray=[31,28,31,30,31,30,31,31,30,31,30,31];
   if (m>=1 && m<=12)
      return marray[m-1];
   else {
      return "Not a valid month number";
      m=prompt("Enter a valid month number");
      daysInMonth(m);
   }
}

//take a four-digit year number and returns true if the year is leapyear

function isLeaper(y){
  if (y%4==0){
     if(y%100==0){

       if (y%400 ==0)
           return true;//
       else
          return false;
     }
     else
      return true;//
    }
  else
    return false;
}

//take a month number and a four-digit year and then returns the total number of days in that month (with leap year insideration)
var daysInMonth_v2=(m,y)=>{
  marray=[31,28,31,30,31,30,31,31,30,31,30,31];
   if (m>=1 && m<=12){
      if (m==2){
         if (isLeaper(y))
            return marray[m-1]+1;
         else
            return marray[m-1];
      }
      else
         return marray[m-1];
   }
   else {
      return "Error";
   }
}

// take a sentence, return the same sentence but with the words reversed
var reverseWords=s=>{
  l=s.split(" ");
  result="";
  for (i=0;i<l.length;i++){
       temp=l[i].split("");
       temp=temp.reverse();
       temp=temp.join("");
       l[i]= temp;
  }
    s=l.join(" ");
      return s;
}

let dayMonth = function(dateStr) {var date1 = new Date(dateStr);return date1.getMonth() + "/"+ date1.getDate();}
