const url = 'https://jsonplaceholder.typicode.com/users'

async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    
    const usernames = document.getElementById("usernames")
    
        data.forEach(user => {
            
            const usernameElement = document.createElement('p');
            usernameElement.textContent = user.username;
    
            
            usernames.appendChild(usernameElement);
        })
}

getData()