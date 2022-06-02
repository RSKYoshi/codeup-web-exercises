'use strict';

console.log('Hello from external JavaScript')


alert('Welcome to my Website!')
    let response = prompt('What is your favorite color?');

    while (response === '') {
        response = prompt('What is your favorite color?')
    }
    console.log(response);

    alert(response + ' is a great color!')


alert('Welcome to the Movie rental section!')
{
    let CPD = 3;

    var LM = prompt('How many days are you renting the Little Mermaid?')
    console.log(LM);

    var BB = prompt('How many days are you renting Brother Bear?')
    console.log(BB);

    var H = prompt('How many days are you renting Hercules?')
    console.log(H);


    var total = [parseInt(LM) + parseInt(BB) + parseInt(H)] * CPD; //Why does this need brackets to work? Without them, the result is 11 instead of 27 for 3,5,1//
    console.log(total)
    alert('Your total will be' + ' ' + total + ' ' + 'dollars')

}
alert('Big Tech Section') {

    var GH = prompt('How many hours did you work this week for Google?')
    console.log(GH)

    var GP = prompt('Google hourly rate?')
    console.log(GP)

    var AH = prompt('How many hours did you work this week for Amazon?')
    console.log(AH)

    var AP = prompt('Amazon hourly rate?')
    console.log(AP)

    var FH = prompt('How many hours did you work this week for Facebook?')
    console.log(FH)

    var FP = prompt('Facebook hourly rate?')
    console.log(FP)

    var paymentforweek = (GH * GP) + (AH * AP) + (FH * FP)
    console.log(paymentforweek)

    alert('The total earned this week is' + ' ' + paymentforweek + ' ' + 'dollars')
}

alert('Class Enrollment') {

    var

}

















