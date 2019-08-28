

function backToTheFuture(n){
  var d = new Date();
    d.setDate(d.getDate() + n);
    return d;
}

// getDate() Returns the day of the month (from 1-31)
// if its February 7 today, it will return 7

//setDate()	Sets the day of the month of a date object
// setDate(35) sets the date as : today+35 days:


let getHalfBirthday= function (s){
     let d = new Date (s);
      let offset= 24*60*60*1000 * (365.2425/2);
      d= new Date (d.getTime()+ offset);
    //  d.setDate(d.getDate() +182.5);

     mm=d.getMonth()+1;
     dd=d.getDate();

     // if(dd<10)
     //    dd='0'+dd;
     //  if(mm<10)
     //     mm='0'+mm;
     return mm+"/"+dd;
};

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


let sumEvens=function (n){
   sum=0;
   for (var i=1; i<=n;i++)
   {
     if (i%2==0){
         debugger;
           sum+=i;
     }

   }
   return sum;
};

function sumOdds (n){
   sum=0;
   for (var i=1; i<=n;i++)
   {
     if (i%2==1)
        sum+=i;
   }
   return sum;
};

let sumOfProperDivisors= function (n){
    sum=0
    if (n>1){
          for (var i=1; i<n;i++){
              if (n%i==0)
                  sum+=i;
                 }
            }
return sum;
}
