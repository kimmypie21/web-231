/*

============================================
; Title: Assignment 3.1
; Author: Zach Dahir
; Date: 12-11-19
; Modified by: Kimberly Pierce
; Description: Code has two errors, when fixed it should display the birthstone for October
;===========================================

*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 3.1") + " \n ");

// Expected output “Your birth stone is Opal”

//Start program


//Variable Declaration

var birthMonth = "October";



//Switch to display birthstone for appropriate month

switch(birthMonth){

    case "January":

        console.log("Your birth stone is Garnet");

            break;



    case "February":

        console.log("Your birth stone is Amethyst");

            break;



    case "March":

        console.log("Your birth stone is Aquamarine");

            break;



    case "April":

        console.log("Your birth stone is Diamond");

            break;



    case "May":

        console.log("Your birth stone is Emerald");

            break;



    case "June":

        console.log("Your birth stone is Pearl");



    case "July":

        console.log("Your birth stone is Ruby");

            break;



    case "August":

        console.log("Your birth stone is Peridot");

            break;



    case "September":

        console.log("Your birth stone is Sapphire");

            break;



    case "October": //changed semi colon to colon to correct code

        console.log("Your birth stone is Opal");

            break;



    case "November":

        console.log("Your birth stone is Topaz");

            break;



    case "December":

        console.log("Your birth stone is Turquoise");

}



//End program


/*
 	============================================
 	; Title: control-statements.js
 	; Author: Diandra McKenzie
  ; Date: 12 December 2019
  ; Modified by: Kimberly Pierce
 	; Description: Control statement with two errors
 	;===========================================
 	*/

 	/*
 	 Expected output:

 	 Diandra McKenzie
 	 Exercise 2.3
 	 Today's Date

 	 Your child can register for Pre-k!
 	 Your child must be born in 2016 to register for Pre-k!
 	 Your child can register for Kindergarten!
 	 Please call the school.
 	*/


 	//Start Program


 	//variable
 	var x=2016


 	//if..else Statements

 	if(x === 2016) { //extra equal sign in this statement removed
 	console.log("Your child can register for Pre-k!")
 	} else if(x > 2016) {
 	console.log("Your child must be born in 2016 to register for Pre-k!")
 	} else if(x == 2015){
 	console.log("Your child can register for Kindergarten!")
 	} else{
 	console.log("Please call the school.")
 	} //removed the extra else/if statement that came after the final default else statement


 	//End Program
