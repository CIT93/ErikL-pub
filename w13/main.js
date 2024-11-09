form.addEventListener('submit', function(e) {
    e.preventDefault();
    const time = document.getElementById("time").value;
    startRunning();

    endTime(time)
        .then((message) => {
            const h1 = document.createElement("h1");
            h1.textContent = "Time met, stop jogging!";
            output.appendChild(h1);
        })
        .catch((error) => {
            const h1 = document.createElement("h1");
            h1.textContent = "Incorrect time input";
            output.appendChild(h1);
        })



    form.reset();
})

function endTime(time){
return new Promise((resolve, reject) => {
    if (!time){
        reject("Invalid time input")
    }

    else {
        setTimeout(() => {
            resolve("Workout done!");
        }, 4000);
    }
});
}

function startRunning(){
    const h1 = document.createElement("h1");
    h1.textContent = "Start Jogging!";
    output.appendChild(h1);
}