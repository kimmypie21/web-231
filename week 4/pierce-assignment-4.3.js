/*
============================================
; Title: Assignment 4.3
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Filtering Arrays
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.3") + " \n ");

//create array values
var cars = ["Mustang", "Corolla", "Accord", "Impreza", "Prelude"];

//create function to test array
function getValue (arr, strng){
  for (var i=0; i< arr.length; i++){
    if (arr[i] === strng){
      console.log(arr[i]);
    }
  }
}

console.log("--Displaying Array Items");
  for (var i=0; i<cars.length; i++){
    console.log(cars[i]);
  }
console.log(" ");
console.log("--Selected Values--");

//pass array through function and test parameter
getValue(cars, "Mustang");
getValue(cars, "Prelude");



