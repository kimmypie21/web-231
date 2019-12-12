/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Convert if/else loops to switch/case
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.3"));

//Expected output: The enter key was pressed

let eventKeyCode = 13

//original if/else loop code provided
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}

//modified switch/case code
switch (eventKeyCode){ //define the parameter to be tested
  case 13:             //condition to test against
    console.log('The enter key was pressed.') //output if condition true
  break; //skip over rest of code if condition true

  case 16:
      console.log('The shift key was pressed.')
  break;

  case 32:
    console.log('The spacebar key was pressed.')
  break;

  case 8:
    console.log('The backspace / delete key was pressed.')
  break;

  default:
    console.log('Unrecognized key.')
  break;

}
