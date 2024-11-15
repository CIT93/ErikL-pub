const url = 'https://jsonplaceholder.typicode.com/users'

async function getData(){
    
    
    try{
        const response = await fetch(url)
        
        if(response.ok){
            const data = await response.json()
            
            onSuccess(data)
        } 
       }


        catch (error)
        {
            onError()
        }
        
        
    }

function onSuccess(data){
    console.log("Success")
    data.forEach(user => {
            
        const usernameElement = document.createElement('p');
        usernameElement.textContent = user.username;

        
        usernames.appendChild(usernameElement);
    })
}

function onError(){
    console.log("Error")
}
    
    
    

getData()