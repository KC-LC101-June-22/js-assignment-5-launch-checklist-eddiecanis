// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div. follow templet below
    let missionTarget =document.getElementByID('missionTarget')
    
    <h2>Mission Destination</h2>
        <ol>
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
        </ol>
        <img src='${imageUrl}'>
}

function validateInput(testInput) {
    if (testInput === "") return "Empty";
    if (testInput === null) return "Empty";
   if (testInput === 0) return "Empty";
    if (isNaN(testInput)) return "Not a Number";
    if (!isNaN(Number(testInput)) return "Is a Number";
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
    else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
        list.style.visibility= `hidden`
    }

  // fuel level ok
    if(Number(fuelLevel)<10000){
        fuelStatus.innerHTML =`Not enough fuel for journey`;
        list.style.visibility = 'visible'
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = `red`;
    } else if(Number(cargoLevel) > 10000) { //check cargo
        cargoStatus.innerHTML `Cargo too heavy for takeoff`;
        list.style.visibility =`visible`;
        lauchStatus.innerHTML = `Shuttle no ready for launch`;
        launchStatus.style.color =`red`;
    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000){
        list.style.visibility =`visible`;
        fuelStatus.innerHTML = `Fuel level GO for journy`;
        cargoStatus.innerHTML = `Cargo level GO for journy`;
        launchStatus.innerHTML = `Shuttle is GO for launch, start the clock`;
        launchStatus.style.color="green";

    }

}

  


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
                return response.json();
        }
    });


    return planetsReturned;
}

function pickPlanet(planets) {
  let idx=Math.floor(Math.random()*plant.length);
  return planets[idx];  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
