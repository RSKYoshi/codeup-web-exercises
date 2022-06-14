"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//1 // Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.



function filterByLanguageAmount(user) {
    if(user.languages.length >= 3){
        return true
    } else return false;
}

const threeLangMin = users.filter(filterByLanguageAmount)
console.log(threeLangMin)

//2     Use .map to create an array of strings where each element is a user's email address

//3     Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//4     Use .reduce to get the longest email from the list of users.
//5     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


//Bonus
//Use .reduce to get the unique list of languages from the list of users.








///example

// let boomerBooks = [];
// for (let i = 0; i< books.length; i++) {
//     const book = books[i];
//     if(book.author.age >= 30) {
//         boomerBooks.push(book);
//     }
// }
// console.log(boomerBooks);
//
//
//
// const sumAge = books.reduce(function(totalAgeSoFar, book) {
//     return totalAgeSoFar + book.author.age;
// }, 0);
// console.log(sumAge);
// console.log(sumAge / books.length);
//
//
//
// const minAge = books.reduce(function(minAgeSoFar, book) {
//     return Math.min(minAgeSoFar, book.author.age);
//     // if(book.author.age < minAgeSoFar){
//     //     return book.author.age
//     // } else return minAgeSoFar;
// }, Infinity);
// console.log(minAge); //should return 20
