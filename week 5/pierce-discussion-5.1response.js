/*
============================================
; Title: Discussion 5.1 Responses
; Author: Kimberly Pierce
; Date:   6 December 2019
; Modified By: Kimberly Pierce
; Description: Discussion 5.1 Responses
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 5.1 Responses") + " \n ");

/*
; Title: keyed collection array.js
; Author: Diandra McKenzie
; Date: 7 January 2020
; Modified by: Kimberly Pierce
; Description: Keyed collection array with at least two (2) errors
*/

/*
Expected output:
Diandra McKenzie
Discussion 5.1
Today's Date

Kirk is 43 years old
Diandra is 40 years old
Antonio is 3 years old
Amya is almost 2 years old
*/

//Start Program

//Variables

var family = new Map();

family.set('Kirk', 43),

family.set('Diandra', 40),

family.set('Antonio', 3),

family.set('Amya', 'almost 2') //added comma between key and value and changed square brackets to parentheses KMP

//Output

//loop to return an array
for (var [name, age] of family)  { // changed of person to of family as the var name is family KMP
    console.log(name +' is ' + age + ' years old');

  }


 console.log( " \n ");

/*

====================================================
; Title:  Discussion 5.1
; Author: Nicole Forke
; Date:   08 January 2020
; Modified By: Kimberly Pierce
; Description: Advanced Arrays: program using a
; keyed collection of arrays with two errors.
;===================================================

*/

/*
  Expected Output:
  The sky is blue!
  The grass is green!
  The flower is blooming!
  The day is warm!
  The summer is here!
*/


//create new map

var nature = new Map();

  nature.set('sky', 'blue');

  nature.set('grass', 'green');

  nature.set('flower', 'blooming');//added missing quotations around key/value pair KMP

  nature.set('day', 'warm');

  nature.set('summer', 'here');



//call the key and value of the new map

for (var[key, value] of nature) { //changed parentheses around key,value to brackets KMP

  console.log('The ' + key + ' is ' + value + '!');

}

//end program
