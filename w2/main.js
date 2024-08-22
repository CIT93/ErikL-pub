/*Below are all the varibles to store all my carbon footprint points*/
const householdMembers = 6; 
const homeSize = 7;        
const foodChoice = 10;      
const waterConsumption = 3;
const householdPurchases = 6;
const wasteProduce = 20;
const wasteRecycled = 12;
const annualTransportation = 4;


const totalPoints = document.querySelector("h2"); // variable to hold total points to output to html 
totalPoints.textContent = householdMembers + homeSize + foodChoice + waterConsumption + householdPurchases + wasteProduce + wasteRecycled + annualTransportation; // all variables added up and outputed to html