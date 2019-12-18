/*
============================================
; Title: Assignment 4.2
; Author: Kimberly Pierce
; Date:   17 December 2019
; Modified By: Kimberly Pierce
; Description: Arrays
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.2") + " \n ");

//create array
var fruit = ["apple", "peach", "pear", "orange", "tomato"];

//create function
function getFruit (arr){
  for (var i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
  }
}

//output array through function
getFruit(fruit);
