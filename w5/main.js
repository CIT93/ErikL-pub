const cfpData = [];

function houseCalculation(houseSize) {

    let houseSizePoints = 0;
    if (houseSize === "apartment") {
        houseSizePoints += 2;
    } else if (houseSize === "small") {
        houseSizePoints += 4;
    } else if (houseSize === "medium") {
        houseSizePoints += 7;
    } else if (houseSize === "large") {
        houseSizePoints += 10;
    }

    return houseSizePoints;
}


function pointsCalculation(numberInHousehold) {

    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold >= 7) {
        houseHoldPoints = 2;
    } else {
        console.log("no upated to points");
    }


    return houseHoldPoints;
}

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

function start(houseHoldMembers, houseSize) {
    const housePoints = pointsCalculation(houseHoldMembers);
    const houseSizePoints = houseCalculation(houseSize);
    const total = housePoints + houseSizePoints;
    

    cfpData.push({
        houseMembers: houseHoldMembers,
        houseSize: houseSize,
        housepts: housePoints,
        houseSizepts: houseSizePoints,
        carbonTotal: total
    });

   
}
//function
function displayOutput() {
    for (obj of cfpData) {
        console.log(obj)
        
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.carbonTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Based on number in and size of home`;
        const newP = document.createElement("p");
        newP.textContent = `this number is based on the number of people in the house of ${obj.houseMembers} (score: ${obj.housepts}),`;
        newP.textContent += `and a ${obj.houseSize} size of home (score:${obj.houseSizepts}),`;
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
        
    }
}

start(2, "apartment");
start(6, "medium");
start(3, "large");
start(7, "medium");
start(5, "small");

displayOutput();