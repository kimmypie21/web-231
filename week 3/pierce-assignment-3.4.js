/*
============================================
; Title: Assignment 3.4
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Loops
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.4") + " \n ");

//test variable for comparison
var testVar1 = 8;


match = function (param1, param2) {
  if (param1 === param2) {
    return true;
  }else {
    return false;
  }
}
//create function to display non matching string alert
logMismatch = function (param1, param2){
  console.log(param1 + " and " + param2 + " do not match! ");
}
//create function to display matching string alert
logMatch = function (param1, param2){
console.log(param1 + " and " + param2 + " do match! ");
}

//for loop with 10 iterations
for (let index=0; index<10; index++){

  randomNumber = Math.floor((Math.random() * 10) + 1); //declare randomNumber variable to test against

  /* Professor Krasso: I could not make the code work
  using the function provided in the starter code:
  function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)}*/

  if (match(testVar1, randomNumber)){
     logMatch(testVar1, randomNumber);
  }else{
     logMismatch (testVar1, randomNumber);
  }

}
