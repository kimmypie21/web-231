/*
============================================
; Title:  Assignment 2.4 Functions
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Creating Functions
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Week 2:Assignment 2.4"));


fullName = function (firstName, lastName){//function with two parameters first and last name
  firstName = "Kimberly"
  lastName = "Pierce"
  return firstName + ' '+ lastName; // return two parameters as one string
};
console.log (fullName()); //output

dateWriter = function (year, month, day){ //function w/three parameters
  year = 2019;
  month = "December";
  day = 6;
  return year + ' '+ month + ' ' + day; //return three parameters
};
console.log (dateWriter()); //output


formatNumber = function (number, numOfFixedPositions){//function w/2 parameters
  return number.toFixed (numOfFixedPositions); //return number parameter with fixed position
};
n = 145.5678;
place = 2;
console.log('Formatted Number:' + formatNumber(n, place)); //honestly don't understand this one, just got it right based on starter code!


convertToInt = function (){ //function no parameters
  var a = parseInt (45.897); //parseInt function parses a string and returns an integer
  return a;
};
console.log(convertToInt());//output


convertToFloat = function(){//function no parameters
  var a = parseFloat (13478);//parse the string to return a floating number
  return a;
};
console.log(convertToFloat());//output

