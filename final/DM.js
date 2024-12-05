class Team {
    constructor(teamName, health, defenseRank, offenseRank) {
        this.teamName = teamName;
        this.offenseRank = offenseRank;
        this.defenseRank = defenseRank;
        this.health = health;
        this.teamPoints = this.calculatePoints()
        this.isWinner = '';
        
    }

    defensePoints() {
        return 32 - this.defenseRank;
    }

    offensePoints() {
        return 32 - this.offenseRank;
    }

    healthy() {
        if (this.health){
            return 10;
        } 
        else{
            return 0;
        }
    }

    calculatePoints() {
        const dPoints = this.defensePoints();
        const oPoints = this.offensePoints();
        const healthPoints = this.healthy();
        this.teamPoints = dPoints + oPoints + healthPoints;
        return this.teamPoints;
    }
}



const calculateWinner = (team1, team2) => {
    bonusPoints(team1, team2)

    if (team1.teamPoints === team2.teamPoints) {
        team1.isWinner = "Tie";
        team2.isWinner = "Tie";
        return "Tie";
    } else if (team1.teamPoints > team2.teamPoints) {
        team1.isWinner = "True";
        team2.isWinner = "False";
        return team1.teamName;
    } else {
        team1.isWinner = "False";
        team2.isWinner = "True";
        return team2.teamName;
    }
}


const bonusPoints = (team1, team2) =>{
    const team1BPoints = false;
    const team2BPoints = false;

    if (team1.health && team1.teamPoints > team2.teamPoints && team1.teamPoints - team2.teamPoints > 10){
        team1.teamPoints += 5;
      
    }
    
    if (team2.health && team2.teamPoints > team1.teamPoints && team2.teamPoints - team1.teamPoints > 10){
        team2.teamPoints += 5;
    }
    else{
        return 0;
    }
}

export {Team, calculateWinner}