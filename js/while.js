"use strict"


// //while loops
//
// alert("Welcome to while loops")
// let num = 1
// while(num < 65536){
//     num*= 2//num=num*2
//     console.log(num)
// }
//Do while loop
//--------------

//random number generates what quantity to work with. Decrement until it reaches 0, but the random number minus the remaining cones needs to return a value of 0 to log 'no cones left. Else log 'I can't sell you 5 cones, there are only 3 cones left.'

let allConesToSell = Math.floor(Math.random() * (50) + 50) //num between 50 and 100
    console.log("There are " + allConesToSell + " cones to sell today")
    console.log("           ")
do{
    let conesSold = Math.floor(Math.random() * 5) + 1; //if this is placed outside the do {}, an infinite loops occurs
    //if 70 cones is greater than or equal to 5, execute the subtraction of cones sold(1-5) and keep going until the result is less than 5, at which point the else activates//
   if(allConesToSell >= conesSold){
   allConesToSell=allConesToSell-conesSold //this decrements from total cones
       console.log(conesSold + " cones sold" + " there are " +allConesToSell + " cones left")
   } else {
       console.log("I can not sell you any cones bro, there are only " + allConesToSell + " cones left," + " sorry, I can not sell you " + conesSold + " cones")
   }
} while(allConesToSell !== 0)
console.log(allConesToSell);//this is always 0
{//this takes care of the last cone(s)? I don't get this part. //when taking away the !, it only returns amount to sell, 1 decrement, and the log below

    console.log("All cones sold!")
}





//this decrements
// for(var i=100; i>1; i-=5){
//  console.log(i)
//  }



