    export default function dogFactsHTMLFunction(props) {




    //this will output the html for the page
            let html = `
<div class="container">
    <h1>Dog Facts</h1>
    `;
            for(let i = 0; i < props.dogFacts.length; i++) {
                html += `
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props.dogFacts[i]}</p>
        </div>
    </div>
        `
            }
            html += `
    <button class="form-control" id="show-fact-btn">Show Facts</button>
</div>
`;
        return html;

    //above here is the refactored code with a loop
//     return `
//  <div class="container">
//      <h1>Dog Facts</h1>
//      <div class="card">
//          <div class="card-body">
// <!--             <p class="dog-fact" style="visibility: hidden">Humans generally see better than dogs, but dogs see much better when there is low-light.</p>-->
//                  <p class="dog-fact" style="visibility: hidden">${props.dogFacts[0]}</p>
//          </div>
//      </div>
//      <div class="card">
//          <div class="card-body">
// <!--             <p class="dog-fact" style="visibility: hidden">All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.</p>-->
//                  <p class="dog-fact" style="visibility: hidden">${props.dogFacts[1]}</p>
//          </div>
//      </div>
//      <div class="card">
//          <div class="card-body">
// <!--             <p class="dog-fact" style="visibility: hidden">Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.</p>-->
//                  <p class="dog-fact" style="visibility: hidden">${props.dogFacts[2]}</p>
//
//          </div>
//          <button class="form-control" id="show-fact-btn">Show Facts</button>
//      </div>
//  </div>
// `;
}


//this will enable the text to show upon clicking the btn.
    export function DogFactsEvents() {
        const btn = document.querySelector("#show-fact-btn");
        btn.addEventListener("click", function(event) {
            const facts = document.querySelectorAll(".dog-fact");
            for (let i = 0; i < facts.length; i++) {
                 // "" = set to visible
                 // facts[i].style.visibility="";
                 facts[i].style.visibility = "visible";
            }
        });
}


