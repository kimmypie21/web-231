/*
============================================
; Title: Assignment 5.4
; Author: Kimberly Pierce
; Date:   7 January 2020
; Modified By: Kimberly Pierce
; Description:Filtering/Reducing Complex Data Structures
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.4") + " \n ");

//create array with values
var famousComposers = [
  {firstName:'Wolfgang Amadeus', lastName: 'Mozart', genre: 'Classical', rating: 8},
  {firstName:'Antonio', lastName: 'Vivaldi', genre: 'Classical', rating: 5},
  {firstName:'Johann Sebastian', lastName: 'Bach', genre: 'Classical', rating: 6},
  {firstName:'Frederic', lastName: 'Chopin', genre: 'Classical', rating: 4},
  {firstName:'Johannes', lastName: 'Brahms', genre: 'Classical', rating: 10},
]

//filter array by rating
var byRating = famousComposers.map(function(rating) {
  return "Rating:" + rating.rating  + " " + "Composer:" + rating.lastName
  });
//output
console.log("--Composers by Rating--")
byRating.forEach(function(rating){
  console.log(rating);
})

console.log(" \n ");
//filter array by genre
console.log("--Composers by Genre--")
var byGenre = famousComposers.map (function(genre){
   return "Genre:" + genre.genre + " " + "Composer:" + genre.lastName
  });
//output
  byGenre.forEach(function(genre){
    console.log(genre)
  });

  console.log(" \n ");

console.log("--All Composers--")
//iterate over array with all values
famousComposers.forEach (function(composers){
  console.log (composers.firstName + " "+ composers.lastName + " | "  + composers.genre + " | " + composers.rating);
});

