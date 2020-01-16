/*
============================================
; Title: Assignment 6.3
; Author: Kimberly Pierce
; Date:   13 January 2020
; Modified By: Kimberly Pierce
; Description: Object Literals
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 6.3") + " \n ");

//create object literal
var tickets = {
  "I.D": "The Big Dog",
  "Name": "Swidgen",
  "Requestor": "Swidgen Pierce"
}

//output in one string
console.log(tickets);
console.log("I.D:" + " " + tickets["I.D"] + " , "+ "Name:"+ " " + tickets["Name"]+ " , "+ "Requestor:"+ " " + tickets["Requestor"]);
