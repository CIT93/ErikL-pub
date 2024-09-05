function houseCalculation(houseSize){
    if (houseSize === "apartment"){
        carbonPoints += 2;
    }else if (houseSize === "small"){
        carbonPoints += 4;
    }else if (houseSize === "medium"){
        carbonPoints += 7;
    }else if (houseSize === "large"){
        carbonPoints += 10;
    }
    console.log(`you have a ${houseSize} sized house now you have ${carbonPoints} carbon points`)
}


function pointsCalculation(numberInHousehold) {
    console.log("inside function");

    if (numberInHousehold === 1) {
        carbonPoints = carbonPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonPoints = carbonPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonPoints = carbonPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonPoints = carbonPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonPoints = carbonPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonPoints = carbonPoints + 4;
    } else if (numberInHousehold >= 7) {
        carbonPoints = carbonPoints + 2;
    } else {
        console.log("no upated to points");
    }

    console.log(`based on the number of ${numberInHousehold} members the points would be ${carbonPoints}`)
} 


let carbonPoints = 0;



pointsCalculation(3);
houseCalculation("large")


