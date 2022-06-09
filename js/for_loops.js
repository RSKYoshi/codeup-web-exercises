"use strict";
// //2-------WORKS-------
// function showMultiplicationTable(x) {
//     for (var i = 1; i<11; i++){
//         const result = (i*x)
//         console.log(x  + "*" + i + "=" + result)
//     }
// }


//3-------WORKS-------

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even


// function evenOrOdd(x) {
//     var userNumber = x
//     if (userNumber % 2 === 0) {
//         console.log(" is even")
//     } else if (userNumber % 2 === 1) {
//         console.log(" is odd")
//     }
// }



// for (var i = 1, ; i<11; i++) {
//     if (i % 2 == 0) {
//         //if number is not even, skip the console.log below and move on down
//         console.log(i + " is an even number")
//     } else if (i % 2 !== 0) {
//         console.log(i + " is an odd number")
//     }
// }


//-------this is the good code for problem 3-------//
//this for-loop can also be refactored without the stopNum and break; once I put the var random in it's entirety, the loop was able to pull different random numbers
// var stopNum = 10
// for(var i = 1; i<=10; i++){
//     var random = Math.floor((Math.random() * 200) + 20);
//     if (random % 2 == 0) {
//         console.log(random + " is an even number")
//     } else if (random % 2 !== 0) {
//         console.log(random + " is an odd number")
//     } else if(i=== stopNum) {
//         break;
//     }
// }
//-------end-------//

//This sort of worked....but returned the same random num 10x
// for (var i = 1; i<=10; i++) {
//     console.log(parseInt(random) + String(evenOrOdd(random)))
// }
//

//4-------WORKS-------

//to figure out pattern problems: figure out how many rows and columns
//number of lines= number of rows = number of times outer loop will run
//1) Outer loop: starting at 1, I want this loop to run until 'i' is less than 10
//2) Inner loop: For every row number, identify how many columns there are. Types of elements in the column.
//3 What do I need to console.log?


//this works! Need more understanding on why it works though.....//
//use switch statements!!! Alot easier to read
//below gets me 9 rows
// for(var i = 1; i<10; i++){
//     //the amount of space in "" indents the whole pyramid from the left
//     var output = ""
//         //this states that I will return: output = output + i + " " , as long as j(or 1) is less than or equal to what ever number i is.
//         //Meaning, however long i iterates, the code in the var j loop will execute
//         for(var j=1; j<=i ; j++  ){
//            //below: " " spaces numbers out on console.log
//             //also below: this is the part I need to understand more. How does an empty string produce 2-2's, 3-3's, etc.?
//            output = output + i + " ";
//        }
//        console.log(output);
//     }



//example from kenneth??
// for (let i = 1; i <= 9; i++){
//     let iAsString = i.toString();
//     console.log(iAsString.repeat(i));
// }
//??


// for(var i = 1; i<=10; i++){
//     var random = Math.floor((Math.random() * 200) + 20);
//     if (random % 2 == 0) {
//         console.log(random + " is an even number")
//     } else if (random % 2 !== 0) {
//         console.log(random + " is an odd number")
//     }
//
// }

//this is for ref only
// for (var i = 1; i=10; i++) {
//     for(var j; j <= i ; j++){
//         console.log(i)
//     }
// }
//
// //starting at one, execute 10 rows, one more after each row
// for (var rows = 1; rows <= 10; rows++) {
//     console.log(rows);
//     for(var cols = 1; cols = <=10; cols++){
//         console.log(cols);
//     }
// }




//This is from Zach. It works, but only vertically//
// for(var i=1; i < 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         console.log(i);
//     }
//     console.log();
// }




// //5-------SUCCESS AT LAST---KEEP GOING!!!-------
// for(var i=100; i>1; i-=5){
// console.log(i)
// }






