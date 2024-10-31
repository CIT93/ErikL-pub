form.addEventListener('submit', function(e) {
    e.preventDefault();
    const time = document.getElementById("time").value;
    startRunning();
    endTime();
    form.reset();
  
    
    
    
})

function endTime(){
    setTimeout(() => {
        const h1 = document.createElement("h1");
        h1.textContent = "End time, stop jogging!";
        output.appendChild(h1);
    }, 4000);



}

function startRunning(){
    const h1 = document.createElement("h1");
    h1.textContent = "Start Jogging!";
    output.appendChild(h1);

    
}