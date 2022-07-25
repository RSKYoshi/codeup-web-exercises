import createView from "../createView.js"

export default function InsertDogView(props) {
    return `
<form class="container">
    <h1>New Dog Fact</h1>
    <form>
        <label for="dogFactText" class="form-label">Dog fact</label>
        <input class="form-control" list="datalistOptions" id="dogFactText" placeholder="Enter a new dog fact">
        <button class="form-control" id="insert-btn">Insert Fact</button>
    </form>
</div>
`;
}

export function InsertDogFactEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", addDogQuote);

    function addDogQuote() {
        // make sure user entered something non-blank for the dog fact
        const factInput = document.querySelector("#dogFactText");
        const fact = factInput.value.trim();
        if (fact.length < 1) {
            alert("Fact cannot be blank!");
            return;
        }
        console.log("Fact is ready to be inserted");
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': DOG_QUOTE_API_KEY
            },
            body: JSON.stringify([fact])
        }
        fetch("https://dogfacts.fulgentcorp.com:12250/v1/facts?random=false&limit=10", requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    console.log("add dog fact error: " + response.status);
                } else {
                    console.log("add dog fact ok");
                    createView("/dogs");
                }
            });
    }}