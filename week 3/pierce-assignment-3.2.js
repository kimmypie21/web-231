/*
============================================
; Title: Assignment 3.2
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Pattern matching functions
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.2") + " \n ");

//define test variables for if/else loops
var testVar1 = "Yes";
var testVar2 = "No";
var testVar3 = "Bob";
var testVar4 = "John";
var testVar5 = 10;
var testVar6 = 10;

//define match function for if/else loops
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

//output from match function
console.log(match(1,2));
console.log(match(2,2));


//if else loops to test equality of test variable values
if (match(testVar1, testVar2)){
  logMatch(testVar1, testVar2);
}else{
  logMismatch (testVar1, testVar2);
}

if (match(testVar3, testVar4)){
  logMatch(testVar3, testVar4);
}else{
  logMismatch (testVar3, testVar4);
}

if (match(testVar5, testVar6)){
  logMatch(testVar5, testVar6);
}else{
  logMismatch (testVar5, testVar6);
}

