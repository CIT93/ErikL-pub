import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"

class FP {
    constructor(first,
        last,
        houseMembers,
        houseSize, foodChoice,
        foodSource,
        waterConsumption,
        HousePurchases,
        wasteProduce,
        flight,
        publics,
        vehicle
    
    ) {


    this.first = first
    this.last = last
    this.houseMembers = houseMembers
    this.houseSize = houseSize
    this.foodChoice = foodChoice
    this.foodSource = foodSource
    this.water = waterConsumption
    this.HousePurchases = HousePurchases
    this.waste = wasteProduce
    this.haswashingMachine = document.getElementById("washingmachine").checked;
    this.hasdishWasher = document.getElementById("dishwasher").checked;
    this.recycleGlass = document.getElementById("glass").checked;
    this.recyclePlastic = document.getElementById("plastic").checked;
    this.recyclePaper = document.getElementById("paper").checked;
    this.recycleAluminum = document.getElementById("aluminum").checked;
    this.recycleSteel = document.getElementById("steel").checked;
    this.recycleFoodWaste = document.getElementById("foodwaste").checked;
    this.recyclePoints = 24
    this.flights = flight
    this.vehicle = vehicle
    this.public = publics
    this.calTransportation()
    this.calwaste()
    this.calrecycle()
    this.calHouseholdPurchases()
    this.calWaterPoints();
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calfoodPoints();
    this.calFoodSourcePoints()
    this.caltotal();
}

calTransportation(){
this.transportationPoints = 0

if (this.flights === "2"){
    this.transportationPoints += 2
}else if (this.flights === "6"){
    this.transportationPoints += 6
}else if (this.flights === "20"){
    this.transportationPoints += 20
}else if (this.flights === "0"){
    this.transportationPoints += 0
}

if (this.vehicle === "12"){
    this.transportationPoints += 12
}else if (this.vehicle === "10"){
    this.transportationPoints += 10
}else if (this.vehicle === "6"){
    this.transportationPoints += 6
}else if (this.vehicle === "4"){
    this.transportationPoints += 4
}else if (this.vehicle === "0"){
    this.transportationPoints += 0
}

if (this.public === "12"){
    this.transportationPoints += 12
}else if (this.public === "10"){
    this.transportationPoints += 10
}else if (this.public === "6"){
    this.transportationPoints += 6
}else if (this.public === "4"){
    this.transportationPoints += 4
}else if (this.public === "2"){
    this.transportationPoints += 2
}else if (this.public === "0"){
    this.transportationPoints += 0
}

}

calrecycle(){
    if (this.recycleAluminum){
        this.recyclePoints -= 4
    }if (this.recycleFoodWaste){
        this.recyclePoints -= 4
    }if (this.recycleGlass){
        this.recyclePoints -= 4
    }if (this.recycleSteel){
        this.recyclePoints -= 4
    }if (this.recyclePlastic){
        this.recyclePoints -= 4
    }if (this.recyclePaper){
        this.recyclePoints -= 4
    }
}

calwaste(){
    if (this.waste === "4"){
        this.wastePoints = 50
    }else if (this.waste === "3"){
        this.wastePoints = 40
    }else if (this.waste === "2"){
        this.wastePoints = 30
    }else if (this.waste === "1"){
        this.wastePoints = 20
    }else if (this.waste === "0"){
        this.wastePoints = 5
    }

}





calHouseholdPurchases(){
    if (this.HousePurchases === "0"){
        this.housePurchasesPoints = 2
    } else if (this.HousePurchases === "8+"){
        this.housePurchasesPoints = 10
    }else if (this.HousePurchases === "5-7"){
        this.housePurchasesPoints = 8
    }else if (this.HousePurchases === "3-5"){
        this.housePurchasesPoints = 6
    }else if (this.HousePurchases === "1-3"){
        this.housePurchasesPoints = 4
    }

    
}

calWaterPoints(){
    
    const Dwasher = document.getElementById("dishwasher").checked
    const Wmachine = document.getElementById("washingmachine").checked

     if (Dwasher === false){
        this.waterPoints = 0
     }    
     
     else{
        if (this.water === "0"){
            this.waterPoints = 0;
        } else if (this.water === "10+"){
            this.waterPoints = 3
        } else if (this.water === "4-9"){
            this.waterPoints = 2
        } else if (this.water === "1-3"){
            this.waterPoints = 1
        }
        
        if (Dwasher && Wmachine){
            this.waterPoints *= 2
         }

     }

     
     


    

    
}

calhouseSizePoints(){
    if (this.houseSize === "apartment") {
        this.houseSizePoints = 2;
    } else if (this.houseSize === "small") {
        this.houseSizePoints = 4;
    } else if (this.houseSize === "medium") {
        this.houseSizePoints = 7;
    } else if (this.houseSize === "large") {
        this.houseSizePoints = 10;
    }
}


calhouseHoldPoints() { 
    if (this.houseMembers === 1) {
        this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
        this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
        this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
        this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
        this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
        this.houseHoldPoints = 4;
    } else if (this.houseMembers >= 7) {
        this.houseHoldPoints = 2;
    }


}

calfoodPoints(){
    if (this.foodChoice === "DomesticMeatsFew"){
        this.foodPoints = 8;
    }else if (this.foodChoice === "DomesticMeats"){
        this.foodPoints = 10
    }else if (this.foodChoice === "Vegetarian"){
        this.foodPoints = 4;
    }else if (this.foodChoice === "VeganorWildmeats"){
        this.foodPoints = 2;
    }
}

calFoodSourcePoints(){
    if (this.foodSource === "packed"){
        this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance"){
        this.foodSourcePoints = 6;
    }else if (this.foodSource === "local"){
        this.foodSourcePoints = 2;
    }
}

caltotal(){
        this.total =
        this.houseSizePoints +
        this.houseHoldPoints +
        this.foodPoints +
        this.foodSourcePoints +
        this.waterPoints +
        this.housePurchasesPoints +
        this.wastePoints +
        this.recyclePoints +
        this.transportationPoints
}




}

export {FP}