/*
============================================
; Title: Assignment 6.4
; Author: Kimberly Pierce
; Date:   13 January 2020
; Modified By: Kimberly Pierce
; Description: Nested Object Literals
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 6.4") + " \n ");

//create object literal with nested object literal

var ticket = {
  "i.d": 10456,
  "Name": "Kimberly Pierce",
  "dateCreated": "January 15, 2020",
  "Priority": "High",
  //nested object
  "Person":{
    "i.d": 112234,
    "firstName": "Kimberly",
    "lastName": "Pierce",
    "Job Title": "Enrollment Services Specialist"
  }
}

console.log("Ticket " + ticket.Person["i.d"]  + " was created on "  + ticket.dateCreated + " and assigned to employee " + ticket.Person.firstName + " " + ticket.Person.lastName);
