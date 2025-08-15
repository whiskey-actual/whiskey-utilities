import isInvalidDate from "../dates/isInvalidDate"

export default function cleanDate(objectToClean:any):Date|undefined {
    let output:Date|undefined=undefined
    try {
      if(objectToClean && objectToClean!==null) {
        let dateObject:Date = new Date(objectToClean)
        if(!isNaN(dateObject.getTime()) && !isNaN(dateObject.valueOf()) && !isInvalidDate(dateObject)) { output = dateObject }
      }
    } catch(err) {
      throw(`${arguments.callee.toString()} : [${objectToClean}] : ${err}`)
    }
    return output
  }