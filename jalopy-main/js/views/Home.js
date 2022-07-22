// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";

// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

//HTML here?
let jalopyImages = [
    {
        image: "assets/jalopy1.jpeg"
    }, {
        image: "assets/jalopy2.jpeg"
    }, {
        image: "assets/jalopy3.jpeg"
    }
]
let jalopyArray1 = 1

export default function Home(props) {
    //this is the main body
    const imgSrc= "assets/jalopy1.jpeg";
    return `
        <header>
            <h1>Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img src="${imgSrc}" id="jalopy1-main" alt="img">
                <p>
                    Welcome to my Jalopy application!
                </p>    
                <button id="img-btn">click here</button>
            </div>
        </main>
    `;
}
// Home();
//js action here??
export function HomeEvents() {
    let jalopyBtn = document.querySelector("#img-btn");
    jalopyBtn.addEventListener("click", function(){
        let imgPlace = document.querySelector("img");
        imgPlace.setAttribute("src", jalopyImages[jalopyArray1].image);
        jalopyArray1 ++;
        if(jalopyArray1===3){
            jalopyArray1=0
        }
    });
}