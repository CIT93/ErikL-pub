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

export{pointsCalculation, houseCalculation};