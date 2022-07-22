import {showNotification} from "../messaging.js";

export default function aboutHTMLFunctions(props) {
    // language=HTML
    return `
<header>
    <h1>Hello Jalopy!</h1>
</header>
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi illo possimus quis sit. Amet, aspernatur autem cum dicta doloremque eveniet fugit hic id mollitia neque nesciunt, obcaecati similique, voluptate.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=1" alt="Fake dev 1">
                <p>Fake Dev 1</p>
            </div>
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=2" alt="Fake dev 2">
                <p>Fake Dev 2</p>
            </div>
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=3" alt="Fake dev 3">
                <p>Fake Dev 3</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button id="change-about-text">Change About Text</button>
            </div>
            <div class="col-12">
                <a href="/" data-link>Go Home</a>
            </div>
        </div>
        <div
    </div>
</main>
    `;
}

export function aboutJSFunctions() {
    showNotification("Hey, a message!", "danger");
    let changeTextBtn = document.querySelector("#change-about-text")
    changeTextBtn.addEventListener("click", function(){
        let targetP = document.querySelector("#about-text");
        targetP.innerText = "Hello world!"
    })
}