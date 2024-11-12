async function start(){
 try{
     const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
     const result = await data.json()
     onSuccess(result.properties.periods[1].shortForecast)
 } catch(e){
    onFailure(e)
 }  
}

start()

function onSuccess(result){
    console.log(result)
}

function onFailure(result){
    console.log('Error')
}



// function getData(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve(46)
//         }, 1);
//     })
// }

// // const result = await getData()
// // console.log(result)

// async function start(){
//     const result = await getData()
//     console.log(result)
// }

// async function start2(){
//     getData()
//      .then(result => {
//         console.log(result)
//      })
// }

// start()
// start2()


// async function start(){
//  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//  const result = await data.json()
//  console.log(result.properties.periods[1].shortForecast)   
// }

// async function start2(){
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     .then(data => data.json())
//     .then (result =>{
//       console.log(result.properties.periods[1].shortForecast)  
//     })
     
//    }



// start()
// start2()



// function getData(){
//     return new Promise (function(resolve, reject){
//         setTimeout(() =>{
//             resolve("here is your data")
//             reject("something went wrong")
            
//         }, 1)
//     })
// }

// function onSuccess(){
//     console.log('s')
// }

// function onFailure(){
//     console.log('f')
// }



// async function start(){
//     try{
//       const result = await getData()  
//       onSuccess()
      
//     }catch(error){
//       onFailure()
      
//     }
    
// }


// async function start2(){
//     const result = await getData() 
//     .catch(error => {
//         console.log("error")
//     })
//     console.log(result)
// }

// start2()
