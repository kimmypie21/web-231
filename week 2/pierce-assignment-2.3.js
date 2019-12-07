/*
============================================
; Title:  Assignment 2.3 Function Properties
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Function Properties Assignment
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Week 2:Assignment 2.3"));

//function properties
myName.Kim = "Kimberly Pierce";

//function declaration
function myName (){
  return myName.Kim;
};

//function output
console.log ('My name is \n' + myName());
