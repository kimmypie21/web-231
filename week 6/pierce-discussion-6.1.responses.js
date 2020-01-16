/*
============================================
; Title: Discussion 6.1 Responses
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Finding Errors in Objects
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 6.1 Responses") + " \n ");


/*
============================================
; Title:  shepherd-assignment6.2
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by: Kimberly Pierce
; Description: a program using object
; properties with at least 2 errors.
; This is the working code.
;===========================================
*/

/*
 * expected output:
 * John Williams
 * Date of Birth: 2/8/1932
*/

let person = {
  name: "John Williams",
  dob: new Date(1932, 1, 8),

  get person() { //changed get name to get person KMP
      return this.name;
  },

  get person() { //changed get dob to get person KMP
      return this.dob;
  }
};

console.log(person.name);
console.log("Date of Birth: " + person.dob);


console.log(" \n ");


/*

============================================

; Title: Assignment 6.1

; Author: Mike Goldberg

; Date: 01/13/2020

; Modified By: Kimberly Pierce

; Description: Discussion Board: Find the errors in the code below

;===========================================

*/


// start program


/*

    expected output:

    Moe - Black Hair

    Larry - Red Hair

    Curly - No Hair

*/


// variable declaration

var stooges = [

  { name: "Moe", hair: "Black" },

  { name: "Larry", hair: "Red" },

  { name: "Curly", hair: "No" },

]



// output


stooges.forEach(stooge => {

  console.log(stooge.name +  " - " + stooge.hair + " Hair"); //added missing + between stooge.name and "-" also added stooge.hair instead of just hair as it was undefined

});

//  end program
