import { renderTbl } from "./render.js";
import { houseCalculation, pointsCalculation  } from "./carbonfootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

//rest parameter
const start = (...ARGS) => {
    const housePoints = pointsCalculation(ARGS[0]);
    const houseSizePoints = houseCalculation(ARGS[1]);
    const total = housePoints + houseSizePoints;
    
    cfpData.push({
        
        firstName: ARGS[2],
        lastName: ARGS[3],
        houseMembers: ARGS[0],
        houseSize: ARGS[1],
        housepts: housePoints,
        houseSizepts: houseSizePoints,
        carbonTotal: total,
       
       
        
    });
    
   
}

renderTbl(cfpData);

const validateField = event => {
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


FORM.addEventListener('submit', e => {
    
    
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

//rest argument 
// const add2 = function(...a){
//     return 2 + a[3];
// }

// const result = add2(1,2,3,4);




//arrow function argument 
const add2 = a => 2 + a;
 

const result = add2(100);





//IIFE
const a = 3;

(function(a){
    console.log("inside IIFE")
    console.log(a)
})(a);
