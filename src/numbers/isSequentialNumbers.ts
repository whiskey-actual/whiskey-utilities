import log from "../config/log"

export default function isSequentialNumbers(numbers:number[]):boolean {

    let isSequential = true

    if(numbers && numbers.length>1) {
        for(let i=1; i<numbers.length; i++) {
            const previousNumber=numbers[(i-1)]
            if(numbers[i]!==(previousNumber+1)) {
                log.AddLogEntry("warn", `${numbers[i]}!==${(previousNumber+1)}`)
                isSequential=false
            }
            
        }
    }

    return isSequential

}