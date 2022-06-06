"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


let usercolor = prompt("What is your favorite color?")
console.log(usercolor)
function analyzeColor(color)
{
    if(color == "blue") {
    alert("Blue is my favorite color too!")
    } else if(color === "red") {alert("red is cool")}
    else if(color === "white") {alert("white is bright")}
    else alert("cool color bro")
        }

analyzeColor(usercolor)





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//  function analyzeColor(randomcolor) {
//      if(randomcolor === "blue") {
//          return "Blue is my favorite color too!"
//      } else if (randomcolor === "red") {
//          return "red is cool"}
//      else if(randomcolor === "white") {
//         return"white is bright"
//      } else {
//          return"cool color bro"
//      }
//
//  }
//  console.log(randomColor)
//  console.log(analyzeColor(randomColor))
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */



function analyzeColor(randomColor) {
    switch(randomColor)  {
    case "blue":
        return "Blue is my favorite color too!"
        break;
    case "red":
        return ("red is cool")
        break;
    case "white":
        return ("white is bright")
    default:
        return ("cool color bro")
}
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?")
console.log(userColor)
analyzeColor(userColor)
alert(analyzeColor(userColor))


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//1-Write function calculateTotal to accept a lucky number LN(1-5) and total bill
//2-LN0=no discount, LN1=10%, lN2=25%, LN3=35%, LN4=50%, LN5=100%
//3-Total amount =100
//4-Return discounted price

function calculateTotal(luckyNumber,Bill) {
    var LN = luckyNumber
    var B = Bill
    var LN0 = 0.00
    var LN1 = 0.10
    var LN2 = 0.25
    var LN3 = 0.35
    var LN4 = 0.50
    var LN5 = 1.00

    if (LN === 0) {
        return B - (LN0 * B)
    } else if (LN === 1) {
        return B - (LN1 * B)
    } else if (LN === 2) {
        return B - (LN2 * B)
    } else if (LN === 3) {
        return B - (LN3 * B)
    } else if (LN === 4) {
        return B - (LN4 * B)
    } else if (LN === 5) {
        return B - (LN5 * B)
    }
}
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

        var totalBill = prompt("What is your total bill?")
        var TB = totalBill
            console.log(TB)

alert("Your lucky number was " + luckyNumber)
alert("Your total bill before discount is " + TB + " dollars")
alert("Your total price after the discount is " + calculateTotal(luckyNumber,TB))


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


// This is the solution with no functions for the above problems
// this is as far as I can go without making it more modular with functions

var userPrompt = confirm("Would you like to enter a number?")
if(userPrompt == false) {
    alert("No number today :/")
} else if(userPrompt == true) {
    var userNumber = prompt("Please enter a number below")
    if(userNumber == null) {
        alert("Please close tab, go to another address, or enter a number to proceed")   //used a while statement here, because I could not figure out how to break out of the if-statements)
        while(userNumber == null){  //used a while statement here because I did not want null as an executable input; how do I break out of if-statement here also? Maybe functions..."
            var userNumber = prompt("Please enter a number below")
        }
    }
    while(userNumber==""){       //why in the world does ""=0.....that is why a 0 is returned when user leaves confirm response blank and clicks ok; solution was to use a while loop to not let user enter ""//
        var userNumber = prompt("Please enter a number below")
    }
    if (userNumber % 2 === 0) {
        alert("Your number is even")
        var userNumberAnd100 = (parseFloat(userNumber) + 100)
        console.log(userNumberAnd100)

        alert("Your number plus 100 is " + userNumberAnd100)

        // var positiveOrNegative = userNumber
        if (Math.sign(userNumber) === 1) {
            alert("Your number is positive")
            console.log(Math.sign(userNumber) === 1)
        } else if (Math.sign(userNumber) === -1) {
            alert("Your number is negative")
        } else if (Math.sign(userNumber) === 0) {
            alert("Your number is 0, which is neither positive nor negative. In fact, it is a portal between positive and negative numbers")
        }
    } else if (userNumber % 2 === 1) {
        alert("Your number is odd")
        var userNumberAnd100 = (parseFloat(userNumber) + 100)
        console.log(userNumberAnd100)

        alert("Your number plus 100 is " + userNumberAnd100)

        // var positiveOrNegative = userNumber
        if (Math.sign(userNumber) === 1) {
            alert("Your number is positive")
            console.log(Math.sign(userNumber) === 1)
        } else if (Math.sign(userNumber) === -1) {
            alert("Your number is negative")
        } else if (Math.sign(userNumber) === 0) {
            alert("Your number is 0, which is neither positive nor negative. In fact, it is a portal between positive and negative numbers")
        }
    } else {
        alert("You have not entered a number")
     }
}



//
// let userNumber = confirm("Would you like to enter a number?")
// function (){
//     if(userPrompt == false) {
//         alert("No number today :/")
//     } else if(userPrompt == true) {
//         var userNumber = prompt("Please enter a number below")
// }
//
//
// {
//
//     var userPrompt = confirm("Would you like to enter a number?")
//     if(userPrompt == false) {
//         alert("No number today :/")
//     } else if(userPrompt == true) {
//         var userNumber = prompt("Please enter a number below")
//         if(userNumber == null) {
//             alert("Please close tab, go to another address, or enter a number to proceed")   //used a while statement here, because I could not figure out how to break out of the if-statements)
//             while(userNumber == null){  //used a while statement here because I did not want null as an executable input; how do I break out of if-statement here also? Maybe functions..."
//                 var userNumber = prompt("Please enter a number below")
//             }
//         }
//         while(userNumber==""){       //why in the world does ""=0.....that is why a 0 is returned when user leaves confirm response blank and clicks ok; solution was to use a while loop to not let user enter ""//
//             var userNumber = prompt("Please enter a number below")
//         }
//         if (userNumber % 2 === 0) {
//             alert("Your number is even")
//             var userNumberAnd100 = (parseFloat(userNumber) + 100)
//             console.log(userNumberAnd100)
//
//             alert("Your number plus 100 is " + userNumberAnd100)
//
//             // var positiveOrNegative = userNumber
//             if (Math.sign(userNumber) === 1) {
//                 alert("Your number is positive")
//                 console.log(Math.sign(userNumber) === 1)
//             } else if (Math.sign(userNumber) === -1) {
//                 alert("Your number is negative")
//             } else if (Math.sign(userNumber) === 0) {
//                 alert("Your number is 0, which is neither positive nor negative. In fact, it is a portal between positive and negative numbers")
//             }
//         } else if (userNumber % 2 === 1) {
//             alert("Your number is odd")
//             var userNumberAnd100 = (parseFloat(userNumber) + 100)
//             console.log(userNumberAnd100)
//
//             alert("Your number plus 100 is " + userNumberAnd100)
//
//             // var positiveOrNegative = userNumber
//             if (Math.sign(userNumber) === 1) {
//                 alert("Your number is positive")
//                 console.log(Math.sign(userNumber) === 1)
//             } else if (Math.sign(userNumber) === -1) {
//                 alert("Your number is negative")
//             } else if (Math.sign(userNumber) === 0) {
//                 alert("Your number is 0, which is neither positive nor negative. In fact, it is a portal between positive and negative numbers")
//             }
//         } else {
//             alert("You have not entered a number")
//         }
//     }
//
// }















//
//
//
// function evenOrOdd(x) {
//     var N = (x)
//     console.log(N)
//     if (N % 2 == 0) {
//         "Your number is even"
//     } else {
//         "Your number is odd"
//     }
//
// }

// var UsernumberOddOrEven = prompt("")
//
// alert()
//
// alert("Your number is " )



// //Ternary Operator example
// let magicNumber = confirm("press 'OK' if you'd like to enter a number") ? prompt("Enter your number below") :"";
// let positiveOrNegative = magicNumber >= 0 ? alert("The number " + magicNumber + "is positive"): alert ("The number is negative)");
// let isEvenOrOdd = magicNumber % 2 === 0 ? alert("The number " + magicNumber + " is even") : alert("The number is odd)");












//Let's say I was doing this with a slightly different set of criteria
// var userContinue = confirm("Do you want a banana?")
//
//
// if(userContinue === true){
//
//     let numBananas = prompt("Can you tell me how many bananas you want?");
//     numBananas = parseInt(numBananas);
//
//     console.log(numBananas);
//
//     if(isNaN(numBananas)){ //if numBananas wasnt a number...
//         alert("YO!! THAT IS NOT A NUMBER")
//     } else {
//         alert("Oh cool, you wanted " + numBananas + ". I got you!")
//     }
//
//
// } else {
//     alert("Oh okay, i mean potassium is importante")









