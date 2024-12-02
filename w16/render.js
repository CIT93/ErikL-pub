import {FORM, TBL} from "./global.js"
import { cfpData, saveLS } from "./storage.js";
import { getAverage } from "./average.js";

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
    const headingTextArr = ["First", "last", "Footprint total", "Action" ];

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
    data.splice(index, 1);
    saveLS(data)
    renderTbl(data);
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
        FORM.firstname.value = data[index].first;
        FORM.houses.value = data[index].houseSize;
        FORM.lastname.value = data[index].last;
        FORM.householdmembers.value = data[index].houseMembers;
        FORM.foods.value = data[index].foodChoice;
        FORM.foodSource.value = data[index].foodSource
        FORM.water.value = data[index].water
        //work
        onUpdate(index,data)
        


    })

    return td;
}


const createRow = data => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const key = ["first", "last", "total"]

        key.forEach(key =>{
            const td = document.createElement("td");
            td.textContent = obj[key];
            tr.appendChild(td);
        })
        
        const td = renderTblBtn(index, data);

        

        
        tr.appendChild(td);
        tbody.appendChild(tr);
        
})


const avgRow = document.createElement("tr");


const blankCells = 2; 
for (let i = 0; i < blankCells; i++) {
    const td = document.createElement("td");
    avgRow.appendChild(td);
}




const labelCell = document.createElement("td");
labelCell.textContent = "Average";
avgRow.appendChild(labelCell);


const avgCell = document.createElement("td");
avgCell.textContent = getAverage().toFixed(2);
avgRow.appendChild(avgCell);





tbody.appendChild(avgRow);


return tbody;
}

export {renderTbl, renderTblheading};