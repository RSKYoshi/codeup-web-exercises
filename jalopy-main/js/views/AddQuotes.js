import createView from "../createView.js"

export default function InsertQuotes(props) {
    return `
<form class="container">
    <h1>New Quotes</h1>
    <form>
        <input class="form-control" list="datalistOptions" id="newQInput" placeholder="Enter quote">
        <input class="form-control" list="datalistOptions" id="newQAuthor" placeholder="Enter author">
        <button class="form-control" id="insert-btn">Insert Quote</button>
    </form>
</div>
`;
}

export function InsertQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", addNewQuote);

    function addNewQuote() {
        // make sure user entered something non-blank for the dog fact
        const quoteEnter = document.querySelector("#newQInput");
        const quote = quoteEnter.value.trim();
        if (quote.length < 1) {
            alert("Please enter quote!");
            return;
        }
        const quoteAuthor = document.querySelector("#newQAuthor");
        const author = quoteAuthor.value.trim();
        if (author.length < 1) {
            alert("Please enter author!");
            return;
        }



        const newQ = {
            quote: quote,
            author: author
        };

        console.log("Fact is ready to be inserted");
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': QUOTE_API_KEY
            },
            body: JSON.stringify([newQ])
        }
        fetch("https://quotes.fulgentcorp.com:12250/v1/quotes?random=false&limit=10", requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    console.log("add quote error: " + response.status);
                } else {
                    console.log("add quote ok");
                    createView("/quotes");
                }
            });
    }}