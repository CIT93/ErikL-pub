const TBL = document.getElementById("tab-data");
let headerUsed = false;
const OUTPUT = document.getElementById("output");
const FORM = document.getElementById("form");


function renderTbl(data) {
    
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

function  renderTblheading () {

    TBL.innerHTML = "";
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    //const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Action"];

    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return  table;
}

function renderTblBtn(index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    
    btnDel.addEventListener('click', function(e){
        console.log(e);
        data.splice(index, 1);
        renderTbl(data);
        console.log(index)
    })

    btnEdit.addEventListener('click', function(e){
        FORM.firstname.value = data[index].firstName;
        FORM.houses.value = data[index].houseSize;
        FORM.lastname.value = data[index].lastName;
        FORM.householdmembers.value = data[index].houseMembers;

        data.splice(index, 1);
        renderTbl(data);
        


    })

    return td;
}


function createRow(data){
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {

            if (key !== "lastName" && key !== "housepts" && key !== "houseSizepts") {
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



export {renderTbl, renderTblheading};