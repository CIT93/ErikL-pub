const TBL = document.getElementById("tab-data");

function renderTbl(data){
    const table = renderTblheading();
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const contentArray = ["Erik", "3", "large", "20"];
    contentArray.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    const th = document.createElement("th");
    const buttonEdit = document.createElement("button");
    const buttonDel = document.createElement("button");
    buttonDel.textContent = "Delete";
    buttonEdit.textContent = "Edit";

    th.appendChild(buttonEdit);
    th.appendChild(buttonDel);
    tr.appendChild(th);
    //we got the error because we didnt createElement("td")
    thead.appendChild(tr);
    table.appendChild(thead);
   

    TBL.appendChild(table);
}

function  renderTblheading () {
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