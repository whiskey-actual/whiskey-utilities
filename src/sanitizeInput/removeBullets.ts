export default function removeBullet(s:string, prefixWordsToRemove:string[]=[]) {
    let output:string=s
    output = output.replace(/^\s?\d*[\.\:]?\s+/,'').trim()
    output = output.replace(/^\s?-\s+/, '').trim()

    let regexWords:string[]=[]
    prefixWordsToRemove.map((prefix)=>{
        regexWords.push(`[${prefix.charAt(0).toUpperCase()}${prefix.charAt(0).toLowerCase()}]${prefix.slice(1)}`)
    })

    const regexWordReplacement:RegExp = new RegExp(`^(${regexWords.join("|")})?\s?\d*\s?\:?\s?`)
    output = output.replace(regexWordReplacement, '')
    
    return output.trim()
}