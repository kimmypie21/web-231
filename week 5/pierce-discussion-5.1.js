/*
============================================
; Title: Discussion 5.1 Advanced Arrays
; Author: Kimberly Pierce
; Date:   7 January 2020
; Modified By: Kimberly Pierce
; Description: Keyed Collection Arrays with Errors
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 5.1") + " \n ");

var myMap = new Map ();//create new map

//set key value pairs
myMap.set ('bigDog', 'Swidgen');
myMap.set ('littleDog', 'Molly');
myMap.set ('blackCat', 'Wee');
myMap.set ('otherCat', 'Miss Kitty');

//call value of one pair
console.log(myMap.get('bigDog'));



//with errors

var myMap =  Map ();//create new map

//set key value pairs
myMap.set ('bigDog', 'Swidgen');
myMap.set ('littleDog' 'Molly');
myMap.set ('blackCat', 'Wee');
myMap.set ('otherCat', 'Miss Kitty');

//call value of one pair
console.log(myMap.get('bigDog'));
