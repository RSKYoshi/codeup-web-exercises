(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|")
    console.log(planetsArray)


    //example from Kenneth
    // var planetsArray = planetsString.split("|")
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? //now I can target each planet individually
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

//this is the to do Q
// var planetString = planetsArray.join("<br>")
//     console.log(planetString);



//this is the Bonus Q

    var planetString = "<ul> <li>Mercury</li> <li>Venus</li> <li>Earth</li> <li>Mars</li> <li>Jupiter</li> <li>Saturn</li> <li>Uranus</li> <li>Neptune</li> </ul>"
    console.log(planetString);

var bonusQ =  planetString
    document.write(bonusQ)




// planetsArray += "<li>" + planetsArray.name + "</li>"




















    //example from Kenneth
    // let breaktagPlanets = planetsArray.join("<br>")
    // console.log(breaktagPlanets);
})();