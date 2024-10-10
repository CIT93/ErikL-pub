import { renderTbl } from "./render.js";
import { houseCalculation, pointsCalculation  } from "./carbonfootprint.js";
import {FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

const errorElement = document.getElementById('error')

renderTbl(cfpData);



function displayRefactorObj(obj) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.carbonTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseMembers} (score: ${obj.housepts}),`;
    newP.textContent += `and a ${obj.houseSize} size of home (score:${obj.houseSizepts}),`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}

function start(houseHoldMembers, houseSize, fName, lName) {
    const housePoints = pointsCalculation(houseHoldMembers);
    const houseSizePoints = houseCalculation(houseSize);
    const total = housePoints + houseSizePoints;
    

    cfpData.push({
        
        firstName: fName,
        lastName: lName,
        houseMembers: houseHoldMembers,
        houseSize: houseSize,
        housepts: housePoints,
        houseSizepts: houseSizePoints,
        carbonTotal: total,
       
       

        
    });
    

   
}


FORM.addEventListener('submit', (e) => {
    
    let messages = [];
    if (FORM.firstname.value === '' || FORM.firstname.value === null){
        messages.push('Enter first name');
    }

    if (FORM.lastname.value === '' || FORM.lastname.value === null){
        messages.push('Enter last name');
    }
    

    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')

    }

    else{
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseSize= FORM.houses.value;
    const householdMembers = parseInt(FORM.householdmembers.value);
    start(householdMembers, houseSize, firstName, lastName);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    }
})

