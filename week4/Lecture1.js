let temps, groceries, mixedArray,cats, x, y, z, brekkies, sum, average;

temps=[31.9, 31.3, 28.6, 42.2, 50.8, 12.2];
groceries= ["Milk", "eggs", "corn flakes", "Dot Dog", "Grape Juice"];
mixedArray= [35, "Kelly", true, "y"];
cats=[2,3,4,3,1,6];

x=temps[2];
document.getElementById("p1").innerHTML="The third element of temps array is "+ x;

x=groceries[4];
document.getElementById("p2").innerHTML="The fifth element of groceries array is "+ x;

x=mixedArray[3];

// if (x=="y"){
//    z="yes";
// }
// else{
//   z="No";
// }

document.getElementById("p3").innerHTML="Does Kelly like cat (y/n) ? "+ x;


groceries[2]="Spam";
x=groceries[2];
document.getElementById("p4").innerHTML="Instead of Corn flakes, please bring "+ x;

brekkies= groceries[0] + " and " + groceries[3];
brekkies = `${groceries[0]} and ${groceries[3]}`;
document.getElementById("p5").innerHTML="Please dont bring "+ brekkies;


x= groceries.length;
document.getElementById("p6").innerHTML="There are "+ x + " items in the groceries list";

//here is a riddle
x= groceries[1];//x="eggs";
y= x.length;//y=4;
document.getElementById("p7").innerHTML="There are "+ y + " characters in "+ x;

x= temps[3];
y= x.length;// y=undefined;
document.getElementById("p8").innerHTML="The length of "+ x + " is  "+ y;

z=x.toString();// converts 42.2 to "42.2"
y=z.length;// y=4;
document.getElementById("p9").innerHTML="Now the length of "+ x + " is  "+ y;

//here is a riddle
x= cats[cats[1]];//x="eggs";
document.getElementById("p10").innerHTML="How many cats you have?  "+ x;


document.getElementById("p11").innerHTML=groceries;
