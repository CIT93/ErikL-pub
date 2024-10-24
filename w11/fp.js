class FP {
constructor(first, last, houseMembers, houseSize, foodChoice){
    this.first = first
    this.last = last
    this.houseMembers = houseMembers
    this.houseSize = houseSize
    this.foodChoice = foodChoice
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodPoints();
    this.total();
}

houseSizePoints(){
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


houseHoldPoints() { 
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

foodPoints(){
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



total(){
    this.total = this.houseSizePoints + this.houseHoldPoints + this.foodPoints
}




}

export {FP}