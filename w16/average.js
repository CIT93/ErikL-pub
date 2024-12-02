import {saveLS, cfpData} from "./storage.js"

const getAverage = () => {

    const total = cfpData.reduce((sum, item) => sum + item.total, 0)

    console.log(total / cfpData.length)
 

    return total / cfpData.length
}

export {getAverage}