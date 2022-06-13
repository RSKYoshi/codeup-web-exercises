(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var name = {}
    name.firstName = "Ryan"
    name.lastName = "Yoshimura"


var person = name
    console.log(person.firstName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName)
    }


// this works, but implementation isn't what was asked
// console.log("Hello from " + person.firstName + " " + person.lastName)

//I need to make a sayHello function, since the empty parenthesis means to call that function


    console.log(person.sayHello())



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//each object is a shopper
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //my notes to start
    //If a shopper spends x>200, they get 12% discount.
    //each line: name, amount before each discount, the discount price(if applicable), and Total due



    //this one is with the $ signs to take away 'dollars', not sure if it's the $ sign that isn't letting me pull the number
    //it sure was the $ sign. After refactoring without the $ in the discount function, it worked.
    //
    // function discount(x){
    //     var discountPercentage = .12
    //     var amount=x
    //     if(amount >200){
    //         return " with a discount of" + " " + "$" + (amount*discountPercentage).toFixed(2)
    //     } else return " with no discount"
    // }

    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name + " bought" + " " + shopper.amount + " dollars worth of groceries" + discount(shopper.amount) + " "        )
    // })

    function discount(x){
        var discountPercentage = .12
        var amount=x
        if(amount >200){
            return (amount*discountPercentage).toFixed(2)
        } else return 0
    }
    //this is good
    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name + " bought" + " " + shopper.amount + " dollars worth of groceries" + " with a discount of " + discount(shopper.amount) + " dollars" + " and a final total of " + (shopper.amount - discount(shopper.amount)).toFixed(2) + " dollars")
    // })

//-------------

//this forEach loop didn't work: it returned 3x the same shopper
    // shoppers.forEach(function(name) {
    //the[0] accesses that particular shopper and amount....good for targeting discountprice?
    //     console.log(shoppers[0].name + " bought" + " " + shoppers[0].amount + " dollars worth of groceries")
    // })



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R ",
                lastName: "Tolkien"
            }
        },
        {
            title: "The Book of Five Rings",
            author: {
                firstName: "Miyamoto ",
                lastName: "Musashi"
            }
        },
        {
            title: "The Iliad of Homer",
            author: {
                firstName: "Homer ",
                lastName: " "
            }
        },
        {
            title: "How to Win Friends and Influence People",
            author: {
                firstName: "Dale ",
                lastName: "Carnegie"
            }
        },
        {
            title: "Animal farm",
            author: {
                firstName: "George ",
                lastName: "Orwell"
            }
        }
    ]

// console.log(books[4].title)




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

books.forEach(function(book, index) {
    console.log("Book # " + (index+1))
    console.log("Title: " + book.title)
    console.log("Author: " + book.author.firstName + book.author.lastName)
    console.log(" ")
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorName){
        return x
    }

})();