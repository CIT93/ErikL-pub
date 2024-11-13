const url = 'https://banana.pudding'


const request = new Request(url, {
        headers: {
            'Authorization' :  'Bearer 123'
        }
    })


async function getData(){
    try{
      const response= await fetch(request)
      const data = await response.json()  
      if (response === 200){
        console.log(`success`, data)
      }else{
        console.log(`Server Error`, data.error.message)
      }
      
    } catch(error){
        console.log(`Error`, error)
    }
}
   

getData()

