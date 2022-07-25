
import InsertQuotes, {InsertQuoteEvents} from "./views/AddQuotes.js"
import InsertDogView, {InsertDogFactEvents} from "./views/AddDogFact.js";
import Home, {HomeEvents} from "./views/Home.js";
import aboutHTMLFunctions , {aboutJSFunctions} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import DogFactsView, {DogFactsEvents} from "./views/DogFacts.js";
import QuotesView, {QuotesEvents} from "./views/Quotes.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/about': {
            returnView: aboutHTMLFunctions,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: aboutJSFunctions
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/dogs': {
            returnView: DogFactsView,
            state: {
                dogFacts: {
                    url: "https://dogfacts.fulgentcorp.com:12250/v1/facts?random=false&limit=10",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': DOG_QUOTE_API_KEY
                    }
                }
            },
            uri: '/dogs',
            title: 'Dog Facts',
            viewEvent: DogFactsEvents
        },
        '/quotes': {
            returnView: QuotesView,
            state: {
                quotes: {
                    url: "https://quotes.fulgentcorp.com:12250/v1/quotes?random=false&limit=30",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': QUOTE_API_KEY
                    }
                }
            },
            uri: '/quotes',
            title: 'Quotes',
            viewEvent: QuotesEvents
        },
        '/insert-dog-fact': {
            returnView: InsertDogView,
            state: {},
            uri: '/insert-dog-fact',
            title: 'Insert Dog Fact',
            viewEvent: InsertDogFactEvents
        },
        '/insert-new-quote': {
            returnView: InsertQuotes,
            state: {},
            uri: '/insert-new-quote',
            title: 'Insert New Quote',
            viewEvent: InsertQuoteEvents
        }
    }
        // if we see a URI with index.html then interpret that as a route for /
        if(URI.indexOf("index.html") > -1){
        URI = "/";
    }
        return routes[URI];
}
