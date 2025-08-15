export default function joinWithAnd(items:any[]):string {
    
    let output = ""

    if(items.length===1) {
        output = items[0]
    } else {
        for(let i=0; i<items.length-1; i++) {
            output += items[i]
            if(items.length>2) {
                output += ","
            }
            output += " "
        }
        output += "and " + items[items.length-1]
    }
    

    return output
}
