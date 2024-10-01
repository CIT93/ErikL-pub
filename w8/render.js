const TBL = document.getElementById("tab-data");
let headerUsed = false;
const OUTPUT = document.getElementById("output");


function renderTbl(data){
    const table = renderTblheading();
    const tbody = document.createElement("tbody");
    
    
    data.forEach(function(obj){
        const tr = document.createElement("tr");
        for (const [key,value] of Object.entries(obj)){
            console.log(`key ${key} value ${value}`)

            //no update
            if (key === "lastName" || key === "housepts" || key === "houseSizepts"){
                console.log("skip")
            }
            else{
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
            
        }
       tbody.appendChild(tr)   
       table.appendChild(tbody);
       TBL.appendChild(table);
    });

  
}

function  renderTblheading () {

    TBL.innerHTML = "";
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    //const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint"];

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