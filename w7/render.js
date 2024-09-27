const TBL = document.getElementById("tab-data");
let headerUsed = false;

function renderTbl(data){
    const table = renderTblheading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const contentArray = ["Erik", 3, "large", 20]
    contentArray.forEach(function(text){
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);

    })
    const td = document.createElement("td");
    const buttonEdit = document.createElement("button");
    const buttonDel = document.createElement("button");
    buttonDel.textContent = "Delete";
    buttonEdit.textContent = "Edit";

    td.appendChild(buttonEdit);
    td.appendChild(buttonDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    //we got the error because we didnt createElement("td")
    table.appendChild(tbody);


    TBL.appendChild(table);
}

function  renderTblheading () {

    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const temp = ["--------", "--------------", "-------------", "-------------", "-----------"];
    
    if (headerUsed === true){
        
        temp.forEach(function(text){
            const th = document.createElement("th");
            th.textContent = text;
            tr.appendChild(th);
    });
    }
    else
    {
        headerUsed = true;
        headingTextArr.forEach(function(text){
            const th = document.createElement("th");
            th.textContent = text;
            tr.appendChild(th);
    });
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    
    return  table;
}


export {renderTbl, renderTblheading};