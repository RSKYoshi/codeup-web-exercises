import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav>
            <a class="jalopy-nav badge-success" href="/" data-link>Home</a>`;

    // everyone can see about
    html = html + `<a class="jalopy-nav badge-success" href="/about" data-link>About</a>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html = html + `<a class="jalopy-nav badge-success" href="/users" data-link>User Info</a>
            <a href="/logout" data-link>Logout</a>`;
    } else {
        // if not logged in, can see login and register
        html = html + `<a class="jalopy-nav badge-success" href="/login" data-link>Login</a>
        <a class="jalopy-nav badge-success" href="/register" data-link>Register</a>`;
    }
    html += `<a class="jalopy-nav badge-success" href="/dogs" data-link>Dog Facts</a>`;
    html += `<a class="jalopy-nav badge-success" href="/quotes" data-link>Quotes</a>`;

    html = html + `</nav>`;
    return html;
}