/*
============================================
; Title: Assignment 5.2
; Author: Kimberly Pierce
; Date:   7 January 2020
; Modified By: Kimberly Pierce
; Description: ES5 Built In Functions
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.2") + " \n ");

var faveFoods = ['Pasta', 'Donuts', 'Ice Cream', 'Pop Tarts', 'Peanut Butter'];

faveFoods.forEach (function(item){
  console.log(item)
}
);
