import { renderTbl } from "./render.js";
import { houseCalculation, pointsCalculation  } from "./carbonfootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"


const start = function(houseHoldMembers, houseSize, fName, lName) {
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

renderTbl(cfpData);

const validateField = function(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
}


FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', function(e) {
    
    
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        start(parseInt(FORM.householdmembers.value), FORM.houses.value, FNAME.value, LNAME.value);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
    else{
        SUBMIT.textContent = "Form requires first and last name";
    }
    
    
})


const add2 = function(...a){
    return 2 + a[3];
}

const result = add2(1,2,3,4);

//spread argument 

//IIFE
const a = 3;

(function(a){
    console.log("inside IIFE")
    console.log(a)
})(a);
