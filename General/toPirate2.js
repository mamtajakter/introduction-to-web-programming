// jshint esversion: 6
let englishWords,pirateWords,i;
let newTD, newButton, tableRows, buttons ;

let addButtons = function() {

  //array of English words/phrases for buttons
   englishWords = ["pardon me", "excuse me", "Hello", "Hi there", "sir", "madam", "officer", "best friend"];
   pirateWords = ["avast", "arrr", "haila", "Heiya", "matey", "proud beauty", "foul blaggart", "dirty matey"];

  tableRows = document.querySelectorAll("tr");

  //add a td containing 4 buttons to row 1
  newTD = document.createElement("td");

  //create buttons
  for ( i = 0; i < 4; ++i) {

    //create  button
    newButton = document.createElement("button");
    //get button content from array
    newButton.textContent = englishWords[i];
    //set id attribute
    newButton.setAttribute("id", "btn" + i);
    //set style class attribute
    newButton.setAttribute("class", "btn" + i);
    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to initial row of table
  tableRows[0].appendChild(newTD);

  //add a button group to row 2 of table
  newTD = document.createElement("td");
  for ( i = 4; i < 8; ++i) {
    newButton = document.createElement("button");
    newButton.textContent = englishWords[i];
    newButton.setAttribute("id", "btn" + i);
    newButton.setAttribute("class", "btn" + i);
    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to second row of table
  tableRows[1].appendChild(newTD);

  //add a button group to row 3 of table
  newTD = document.createElement("td");
  //.....


  //append new td element to second row of table
  tableRows[2].appendChild(newTD);

  //add a button group to row 4 of table

  //....

  //add a button group to row 5 of table

  //....
};

// define a dispatcher to handle all button clicks
let dispatcher = function() {
  //this keyword is set to the button that fired the event
  //console.log(this.id);
  //dispatch on button id

  for (i=0;i<buttons.length; i++){
    if (this.id== ("btn"+i))
        document.getElementById("outBox").value+=pirateWords[i]+ "! ";
  }
};

//define the onload handler
let onloadHandler = function() {

  //add all buttons to the table
  addButtons();

  //Register the onclick handler for all the buttons
   buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", dispatcher);
  }

};

//register the onload handler
window.addEventListener("load", onloadHandler);
