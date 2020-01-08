/*
============================================
; Title: Assignment 5.3
; Author: Kimberly Pierce
; Date:   7 January 2020
; Modified By: Kimberly Pierce
; Description: Object Collections
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.3") + " \n ");

var famousComposers = [
  {firstName:'Wolfgang Amadeus', lastName: 'Mozart,', genre: 'Classical,', rating: 1},
  {firstName:'Antonio', lastName: 'Vivaldi,', genre: 'Classical,', rating: 2},
  {firstName:'Johann Sebastian', lastName: 'Bach,', genre: 'Classical,', rating: 3},
  {firstName:'Frederic', lastName: 'Chopin,', genre: 'Classical,', rating: 4},
  {firstName:'Johannes', lastName: 'Brahms,', genre: 'Classical,', rating: 5},
]

famousComposers.forEach (function(composers){
  console.log(composers.lastName + ' ' + composers.genre + ' '+ composers.rating);
})
