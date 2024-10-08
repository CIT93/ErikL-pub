const TBL = document.getElementById("tab-data");
let headerUsed = false;
const OUTPUT = document.getElementById("output");


function renderTbl(data){
    const table = renderTblheading();
    const tbody = document.createElement("tbody");
    
    
    data.forEach(function(obj){
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = obj.firstName;
       
        const tdhouseMembers = document.createElement("td");
        tdhouseMembers.textContent = obj.houseMembers;
        
        const tdhouseSize = document.createElement("td");
        tdhouseSize.textContent = obj.houseSize;
        
        const tdTotal = document.createElement("td");
        tdTotal.textContent = obj.carbonTotal;

        tr.appendChild(tdName);
        tr.appendChild(tdhouseMembers);
        tr.appendChild(tdhouseSize);
        tr.appendChild(tdTotal); 
        tbody.appendChild(tr)

        const td = document.createElement("td");
        const buttonEdit = document.createElement("button");
        const buttonDel = document.createElement("button");
        buttonDel.textContent = "Delete";
        buttonEdit.textContent = "Edit";
        td.appendChild(buttonEdit);
        td.appendChild(buttonDel);
        tr.appendChild(td);
    });

    table.appendChild(tbody);
    TBL.appendChild(table);
}

function  renderTblheading () {

    TBL.innerHTML = "";
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return  table;
}


export {renderTbl, renderTblheading};