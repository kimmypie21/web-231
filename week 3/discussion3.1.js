/*
============================================
; Title: Discussion 3.1
; Author: Kimberly Pierce
; Date:  11 December 2019
; Modified By: Kimberly Pierce
; Description: Control statement with two errors
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 3.1") + " \n ");


//correct version
var i = 1; //declare variable value to be used in loop
while (i<11 ){ //condition for loop to continue
   console.log(i + " "+ "This loop will count to 10"); //the thing to do
   i++; //increase var value by 1 each time
}


//incorrect version
var i = 1; //declare variable value to be used in loop
while (i<11 ){ //condition for loop to continue
   console.log(i  " "+ "This loop will count to 10); //the thing to do
   i++; //increase var value by 1 each time
}
