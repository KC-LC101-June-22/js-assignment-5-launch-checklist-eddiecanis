// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div. follow templet below

    `<h2>Mission Destination</h2>
        <ol>
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
        </ol>
        <img src=imageUrl>
`
}

function validateInput(testInput) {
    if (testInput === "") return "Empty"
    if (isNaN(testInput)) return "Not a Number"
    if (!isNaN(testInput)) return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //use validate input to complete this fuction build test in form summistion, function in a function, checking and alerts
    //function(function ())
    //add all numbfield
    if validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" {
        alert("Please make sure all fields are filled out");
    }
    if validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" {
        alert("Please make sure field is a name");
    }
    if validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"{
        alert("Please make sure data is a number")
    }
    //1 button.addEventListener("click", function() 
    //2 preventDefault()
    //3 fuel and cargo mass should be a number and it enter as a text
    //
    return
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response");
        }
        else {
            return response.json();
        }
    });


    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
