
/*
============================================
; Title: Discussion 4.1 Responses
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Finding errors in arrays
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 4.1 Responses") + " \n ");


/*
============================================
; Title: array.js
; Author: Diandra McKenzie
; Date: 19 December 2019
; Modified by: Kimberly Pierce
; Description: Array with at least two (2) errors
;===========================================
*/

/*
Expected output:
Diandra McKenzie
Discussion 4.1
Today's Date
Kirk McKenzie would really love a BMW i8 for Christmas.
*/

//Start Program

//Variables

var person = ["Kirk", "McKenzie", 42];
var cars = ["Lamborghini Murcielago", "Cadillac Escalade", "BMW i8"];

//Output
console.log(person[0]+ " " +person[1] + " would really love a " + cars[2]+" for Christmas.");


//End Program

console.log(" \n ");

/*
============================================
; Title:  Discussion 4.1
; Author: Emily Richter
; Date:   20 December 2019
; Modified by: Kimberly Pierce
; Description: Create a program using an
; array with at least 2 errors.
;===========================================
*/


// Declare array Serenity
var serenity = ['Mal', 'Wash', 'Jayne', 'Zoe', 'Inara', 'Bester'];//added comma between last two array parameters

// Delete the sixth element, add four elements
serenity.splice(5, 1, 'Kaylee', 'Book', 'Simon', 'River')

// Define crew function
function crew (array) { //changed function parameter to generic array instead of serenity KMP
  for (i = 0; i < array.length; i++);{ //changed serenity.length to array.length KMP
    console.log(array);
  }
}

// Call up crew function
console.log('--SERENITY CREW LIST--')
crew(serenity); //added semi colon after calling crew function KMP

//End program
