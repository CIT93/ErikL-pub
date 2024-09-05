const cfpData = [];

function houseCalculation(houseSize){
    
    let houseSizePoints = 0;
    if (houseSize === "apartment"){
        houseSizePoints += 2;
    }else if (houseSize === "small"){
        houseSizePoints += 4;
    }else if (houseSize === "medium"){
        houseSizePoints += 7;
    }else if (houseSize === "large"){
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



function start(houseHoldMembers, houseSize){
    const housePoints = pointsCalculation(houseHoldMembers);
    const houseSizePoints = houseCalculation(houseSize);
    const total = housePoints + houseSizePoints;
    cfpData.push([houseHoldMembers, houseSize, housePoints, houseSizePoints, total]);
}

function displayOutput() {
    for (array of cfpData){
        console.log(array);
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `You live in a ${array[1]} sized house which is worth ${array[3]} carbon footprint points and it occupies ${array[0]} people which is ${array[2]} carbon fooprint points which is a total of ${array[4]} total carbon footprint points `;
        output.appendChild(newP);
    }
}

start(2, "apartment");
start(6, "medium");
start(3, "large");
start(7, "medium");
start(5, "small");


displayOutput()



