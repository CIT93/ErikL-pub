import { TBL, SUBMIT,FORM } from './global.js';
import { cfpData, saveLS } from "./storage.js";
cfpData
const renderTbl = data => {
    
    if (data.length === 0){
        TBL.innerHTML = "";
    }
    
    else {
    const table = renderTblheading();
    const tbody = createRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    }

}

const renderTblheading = () => {

    TBL.innerHTML = "";
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["Team", "DefenseRank", "OffenseRank", "Healthy", "Points", "Winner", "Action"];

    headingTextArr.forEach((text) =>{
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return  table;
}

const onUpdate = (index, data) => {
    data.splice(0, data.length);
        saveLS(data)
        TBL.innerHTML = ""
        renderTbl(data)
}


const renderTblBtn = (index, data ) =>{
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    
    btnDel.addEventListener('click', e =>{
        onUpdate(index,data)

        
    })

    btnEdit.addEventListener('click', e =>{
         FORM.team1name.value = data[0].teamName
         FORM.team1Health.value = data[0].health
         FORM.team1defenserank.value = data[0].defenseRank
         FORM.team1offenserank.value = data[0].offenseRank

         FORM.team2name.value = data[1].teamName
         FORM.team2Health.value = data[1].health
         FORM.team2defenserank.value = data[1].defenseRank
         FORM.team2offenserank.value = data[1].offenseRank
        
         onUpdate(index,data)
        
        
    })

    

    return td;
}




const createRow = data => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const key = ["teamName", "defenseRank", "offenseRank","health", "teamPoints", "isWinner"]

        key.forEach(key =>{
            const td = document.createElement("td");
            td.textContent = obj[key];
            tr.appendChild(td);
        })
        
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);   
       
})
return tbody;
}


export{renderTbl, onUpdate}