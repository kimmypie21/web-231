/*
============================================
; Title: Assignment 4.4
; Author: Kimberly Pierce
; Date:   21 December 2019
; Modified By: Kimberly Pierce
; Description: Filtering Arrays with Predicate
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.4") + " \n ");

//declare variable array
var states = ["Tennessee", "Georgia", "Texas", "Kentucky", "Florida"];

//predicate function
function getState (string1, string2){
  if (string1 === string2)
    return true;
}

//call function to return selected value from array
console.log("--Selected Value--");
console.log(
  states.filter(
    function (string1){
      return getState (string1, "Tennessee")
    }
  )[0]
  );
//display values from original and sorted array
console.log(" ");
console.log("--Original Array--");
console.log(states);
console.log(" ");
console.log("--Sorted Array--");
console.log(states.sort());





