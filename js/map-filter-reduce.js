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

//2 // Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.



// function filterByLanguageAmount(user) {
//     if(user.languages.length >= 3){
//         return true
//     } else return false;
// }
//
// const threeLangMin = users.filter(filterByLanguageAmount)
// console.log(threeLangMin)
//
// // alt
// users.filter(function (user) {
//     return user.languages.length >=3;
// })

// console.log(users.filter(function (user) {
//     return user.languages.length >=3;
// }))

//3     Use .map to create an array of strings where each element is a user's email address
//need to call a function on each user that extracts emails

// function userEmail(user) {
//     return user.email
// }
//
// const userEmails = users.map(userEmail);
// console.log(userEmails)

// alt
// users.map(function (user){
//     return user.email;
// })

//4     Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

//works!!! just had to delete .yearsOfExperience from in between 'users' and 'reduce' in 'users.reduce'
let initialValue = 0;

const totalYearsExp = users.reduce(function (previousValue,currentValue){
    return previousValue + currentValue.yearsOfExperience} , initialValue
);
console.log(totalYearsExp)

//alt

// var totalYears = users.reduce(function (total, user) {
//     console.log(total)
//     return total + user.yearsOfExperience;
// }, 0)
//
// var averageYears = totalYears/users.length;
// console.log(averageYears)

//5     Use .reduce to get the longest email from the list of users.

// this works!!
// how does 'longestEmailSoFar' know that it is targeting users.email?

const longestEmail = users.reduce(function (longestEmailSoFar,user){

   if(user.email.length >= longestEmailSoFar.length) {
       return user.email;
   } return longestEmailSoFar
},"")

console.log(longestEmail)

//6     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNames = users.reduce(function(userNamesSoFar,user){
//     return userNamesSoFar + " " + user.name + ","
// }, "")
// console.log(userNames)


//alt
// let allUserNames = users.reduce(function (allUserNamesSoFar,user) {
//     return allUserNamesSoFar + user.name + ", ";
// }, "");
// allUserNames.substr(0, allUserNames.length -2);
// console.log(allUserNames)



//Bonus
//Use .reduce to get the unique list of languages from the list of users.

//figure this out
// let userLanguages = users.reduce(function(uniqueSoFar, user){
//     return uniqueSoFar.concat(user.languages)
//     }, [])
//
// var uL = userLanguages
// // console.log(uL)
//
// let uniqueLanguages = new Set(userLanguages);
// console.log(uniqueLanguages)


// this is good!!

// let userLanguages = users.reduce(function(uniqueSoFar, user){
//     return uniqueSoFar + user.languages + ","
// }, "")
// var uL = userLanguages
// // console.log(uL)
// //good so far
// //need to .splt the  long string here
//
// var suL=uL.split(',')
//
//
// let uniqueLanguages = [...new Set(suL)];
// console.log(uniqueLanguages)


//if there are more than  one instance  of the  same value, do not  add//






//???
// let uniqueLanguages = users.reduce(function(uniqueSoFar, user) {
//     for (let language of user.languages) {
//         uniqueSoFar.add(language)
//     }
//     return uniqueSoFar;
// }, new Set());
// console.log(uniqueLanguages);
// })()








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
