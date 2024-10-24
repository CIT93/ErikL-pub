import {FORM, TBL} from "./global.js"
import { cfpData, saveLS } from "./storage.js";

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
    const headingTextArr = ["Name", "Household", "HouseSize", "Food Choice", "Footprint", "Action"];

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

        onUpdate(index,data)
        


    })

    return td;
}


const createRow = data => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {

            if (key !== "last" && key !== "houseHoldPoints" && key !== "houseSizePoints" && key !== "foodPoints") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }

        }
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);   
       
})
return tbody;
}

// passing the DOM node as a reference is the best choice and best use for pratice

export {renderTbl, renderTblheading};