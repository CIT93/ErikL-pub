const TBL = document.getElementById("tab-data");
let headerUsed = false;
const OUTPUT = document.getElementById("output");


function renderTbl(data){
    const table = renderTblheading();
    const tbody = document.createElement("tbody");
    
    
    data.forEach(function(obj){
        //console.log(Object.entries(obj));
        for (const [key,value] of Object.entries(obj)){
            console.log(`key ${key} value ${value}`)

            if (key === "lastName" || key === "housepts" || key === "houseSizepts"){
                console.log("skip")
            }
            else{
                console.log("make");
            }
        }
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = obj.firstName;
       
        const tdTotal = document.createElement("td");
        tdTotal.textContent = obj.carbonTotal;

        tr.appendChild(tdName);
        tr.appendChild(tdTotal); 
        tbody.appendChild(tr)

        
    });

    table.appendChild(tbody);
    TBL.appendChild(table);
}

function  renderTblheading () {

    TBL.innerHTML = "";
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    //const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const headingTextArr = ["Name", "Footprint"];

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