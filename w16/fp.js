class FP {
constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterConsumption){
    this.first = first
    this.last = last
    this.houseMembers = houseMembers
    this.houseSize = houseSize
    this.foodChoice = foodChoice
    this.foodSource = foodSource
    this.water = waterConsumption
    this.calWaterPoints();
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calfoodPoints();
    this.calFoodSourcePoints()
    this.caltotal();
}


calWaterPoints(){
    if (this.water === "-1"){
        this.waterPoints = 0;
    }

    else{
        if (this.water === "10+"){
            this.waterPoints = 3
        } else if (this.water === "4-9"){
            this.waterPoints = 2
        } else if (this.water === "1-3"){
            this.waterPoints = 1
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
    this.total = this.houseSizePoints + this.houseHoldPoints + this.foodPoints + this.foodSourcePoints + this.waterPoints
}




}

export {FP}