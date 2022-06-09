(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

var names = ["Destiney", "Ryan", "Kalei", "Melia"]


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// console.log([names])
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    //how does it access the index....[" + index + "]
// names.forEach(function (name,index){
//     console.log("[" +index + "] =" + name);
//     })


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

// for(var i=0; i < 1; i++) {
//     console.log(names[0])
//     console.log(names[1])
//     console.log(names[2])
//     console.log(names[3])
// }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // for(var i=0; i < 1; i++){
    //     names.forEach(function (name,index){
    //         console.log(name);
    //     })
    // }

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


function first([x]){
    x[0]
    }

function second([x]){
    x[1]
}

//arrays[arrays.length - 1] = this will access the last array element
function last(x){
    return x[x.length -1]
}

let favshows = ['5','7', '8', '9']
let removedlastshow = favshows.shift();
console.log("removed show was " + removedlastshow)


})();

//why does this show my array value itself vs if I take [i] out it shows the entire array 3x?
// for(let i = 0; i < shapes.length; i++){console.log(favFood[i])}

//below is forEach practice
// let favFoods = ['apples', 'bananas', 'oranges']
// favFoods.forEach(function (food, index){
//     console.log("favFoods[" + index + "] =" + food);
// })
//
// function