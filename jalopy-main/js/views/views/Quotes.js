
//HTML function
export function QuotesView(){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quotes</title>
</head>
<body>
    <table id="my-quotes">
    
    </table>



</body>
</html>








`;
}

// JS function
export default function QuotesEvents(){

    function addQuote(){
        let quotes =
            `Quote: "War is organized murder and torture against our brothers." Author: "Alfred Adler"

            Quote: "Follow sound business trends, not fashion trends." Author: "Janice Dickinson"
    
            Quote: "I'm sure we, the American people, are the butt of jokes by those in power." Author: "Alice Walker"
    
            Quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country." Author: "Adnan Pachachi"
    
            Quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination." Author: "John F. Kennedy"
    
            Quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding." Author: "Harvey Fierstein"
    
            Quote: "I think God's justice is making wrongs right." Author: "Joel Osteen"
    
            Quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end." Author: "H. L. Mencken"
    
            Quote: "If science fiction is the mythology of modern technology, then its myth is tragic." Author: "Ursula K. Le Guin"
    
            Quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him." Quthor: "Lucy Liu"
        `
        let placeQuoptesHere = document.querySelector("#my-quotes");
        placeQuoptesHere.innerHTML = quotes;

    }
    addQuote();



}
