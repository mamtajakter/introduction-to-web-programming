// Date object examples// Set iable to current date and time

let d1, d2, d3, x, day, month, year, result;

d1= new Date();//Wed Jul 24 2019 10:07:06 GMT-0700 (Pacific Daylight Time)

d1=new Date (2017, 9, 23);//Mon Oct 23 2017 00:00:00 GMT-0700 (Pacific Daylight Time)

d1 = new Date (2017, 9, 23, 6, 26, 55 );//Mon Oct 23 2017 06:26:55 GMT-0700 (Pacific Daylight Time)

d1= new Date (0);//Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)
d1= new Date (10000000000);//Sun Apr 26 1970 10:46:40 GMT-0700 (Pacific Daylight Time)

d1= new Date (-10000000000);//Sat Sep 06 1969 23:13:20 GMT-0700 (Pacific Daylight Time)

d1= new Date (6473286548);//Mon Mar 16 1970 14:08:06 GMT-0800 (Pacific Standard Time)

// ISO dates
d1= new Date ("2019-05-23");//Tue May 21 2019 00:00:00 GMT-0700 (Pacific Daylight Time)

d1= new Date ("2019-05");

d1= new Date ("2019");

// Short dates
d1= new Date ("03/23/2019");

//long dates

d1= new Date ("Mar 23 2018");//Fri Mar 23 2018 00:00:00 GMT-0700 (Pacific Daylight Time)
d1= new Date ("January 23 2018");


// Date Get Methods
d1= new Date ("03/23/1985");
console.log(d1.getTime());// returns the number of milliseconds since January 1, 1970

console.log(d1.getFullYear());
console.log(d1.getMonth());// month count starts from 0, for January, it returns 0, for March it returns 2
console.log(d1.getDate());
console.log(d1.getDay());

d1= new Date();
month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
m1= d1.getMonth();
console.log(month[m1]);

day=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
d2=d1.getDay();
console.log(day[d2]);

d1= new Date();

d1.setFullYear(1989);
d1.setMonth(11);

d1.setDate(19);


d1= new Date();
x= d1.getDate()+50;
d1.setDate(x);


d1= new Date();
d1.setHours(22);
d1.setMinutes(30);
d1.setSeconds(12);

d1= new Date();
d1.setSeconds(180);


d1= new Date("09/12/1978");
d1.setSeconds(1843245350);

d1= new Date();
day= d1.getDate();
if (day<10)
   day="0"+day;
month=d1.getMonth()+1;
if (month<10)
   month="0"+month;
year= d1.getFullYear();
year=year.toString();
year=year[2]+year[3];
result= day + "/" + month + "/" + year;
