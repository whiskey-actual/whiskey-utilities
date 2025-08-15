import cleanString from "./cleanString"

export default function cleanStringArray(s:string[]):string[] {
    let output:string[]=[]

    try {
        for(let i=0; i<s.length; i++) {
            if(s[i]) {
                const item = cleanString(s[i])
                if(item && item.length>0) {
                    output.push(item)
                }
            }
        }
    }
    catch(err) {

    }
    
    return output

}