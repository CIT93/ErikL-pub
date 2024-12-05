import { TBL, SUBMIT,FORM } from './global.js';
import { renderTbl, onUpdate } from './render.js';
import {saveLS, cfpData} from "./storage.js"
import { Team, calculateWinner} from './DM.js';



function start() {
    const team1 = new Team(FORM.team1name.value, FORM.team1Health.value, FORM.team1defenserank.value, FORM.team1offenserank.value)
    const team2 = new Team(FORM.team2name.value, FORM.team2Health.value, FORM.team2defenserank.value, FORM.team2offenserank.value)
    cfpData.push(team1)
    cfpData.push(team2)
}

FORM.addEventListener('submit', e => {
    
    
    e.preventDefault();

    if (FORM.team1defenserank.value === FORM.team2defenserank.value || FORM.team1offenserank.value === FORM.team2offenserank.value){
        SUBMIT.textContent = "Make sure teams dont have same rank";
    }

    else {
        SUBMIT.textContent = "";
        onUpdate(0,cfpData)
        start();
        calculateWinner(cfpData[0],cfpData[1]);
        saveLS(cfpData);
        renderTbl(cfpData)
        FORM.reset();
        cfpData = [];
    }


    

})

renderTbl(cfpData)




