export default function getUniqueWordsFromString(input:string, minWordLength:number=3) {
    let words = input.split(" ")
    let uniqueWords = Array.from(new Set(words))
    
    let output:string[]=[]
    uniqueWords.map((w)=> {
        if(w.length>=minWordLength) { output.push(w)}
    })
    return output
}