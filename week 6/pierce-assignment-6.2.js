/*
============================================
; Title: Assignment 6.2
; Author: Kimberly Pierce
; Date:   13 January 2020
; Modified By: Kimberly Pierce
; Description: Exception Handling
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 6.2") + " \n ");

//try, catch, finally
try{

console.log("---Let's try to execute some code!---");

console.log(unicornsAreMagical);//call undefined variable

} catch (err){

  console.log("Holy Runtime Error, Batman! " + " \n "+ (err));//message when exception encountered
} finally{

  console.log("This message will now self destruct."); //message executed regardless of exception
};
