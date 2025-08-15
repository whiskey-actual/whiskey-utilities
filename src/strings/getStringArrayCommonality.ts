export default function getStringArrayCommonality(array1:string[], array2:string[], minWordLength:number=4, maxLength:number|undefined=10, commonalityPercentageToMatch:number=33, showDebug:boolean=false) {

    let output=0

    try {

        let len = Math.min(array1.length, array2.length, maxLength)
        const testArray1 = array1.slice(0,len)
        const testArray2 = array2.slice(0,len)

        let commonWords:string[]=[]
        for(let i=0; i<len; i++) {
            if(testArray1[i].length>=minWordLength && testArray2.indexOf(testArray1[i])>-1) {
                commonWords.push(array1[i])
            }
        }

        // how many words were in common vs. those we tested?
        const ratio = (commonWords.length/len)*100
        if(ratio>commonalityPercentageToMatch && showDebug) {
            console.log(`.. found commonality @ ${ratio}% :`)
            console.log(`.. [ARRAY1]: ${testArray1.join(",")}`)
            console.log(`.. [ARRAY2]: ${testArray2.join(",")}`)
            console.log(`.. [COMMON]: ${commonWords}`)
        }

        output=ratio

    } catch(err:any) {
        throw err
    }

    return output
    
}

