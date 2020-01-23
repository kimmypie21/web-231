/*
============================================
; Title: Assignment 7.2
; Author: Kimberly Pierce/Professor Krasso
; Date:   20 January 2020
; Modified By: Kimberly Pierce
; Description: Constructor Functions
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 7.2") + " \n ");

//create constructor object
 function Employee(firstName, lastName, id, title){
  this.firstName = firstName
  this.lastName = lastName
  this.id = id
  this.title = title
}

//create array with values
var employeesList = [
  new Employee (" Kim ", "Pierce ", 245 , " Enrollment Services Specialist "),
  new Employee (" Alyssa ", "LaGrande ", 456, " Enrollment Services Specialist "),
  new Employee (" Melanie ", "Price ", 897, " Lead Enrollment Services Specialist "),
  new Employee (" Jordan ", "Thomas ", 654, " Enrollment Services Specialist "),
  new Employee (" Christy ", "Schneider ", 432, " Enrollment Services Specialist ")
];

//loop over array and output results
let index= 1
for (let x = 0; x < employeesList.length; x++) {
  console.log (index + employeesList[x].firstName + employeesList[x].lastName + employeesList[x].title);
  index++
}


