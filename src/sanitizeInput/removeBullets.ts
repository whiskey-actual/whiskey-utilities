export default function removeBulletsFromList(bulletedList:string[], prefixWordsToRemove:string[]=[]):string[] {
    
    let output:string[] = bulletedList

    // first generate the regex for any prefixes
    let regexWords:string[]=[]
    prefixWordsToRemove.map((prefix)=>{
        regexWords.push(`[${prefix.charAt(0).toUpperCase()}${prefix.charAt(0).toLowerCase()}]${prefix.slice(1)}`)
    })
    const regexWordReplacement:RegExp = new RegExp(`^(${regexWords.join("|")})?\s?\d*\s?\:?\s?`)
    
    for(let i=0; i<output.length; i++) {
        output[i] = output[i].replace(/^\s?\d*[\.\:-]?\s+/,'').trim()
        output = output
        if(prefixWordsToRemove.length>0) {
            output[i] = output[i].replace(regexWordReplacement, '').trim()
        }
    }
    
    return output
    
}