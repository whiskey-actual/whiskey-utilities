export default function wordWrap(message:string|string[], indentTabCount:number=0, wrapWidth:number=150) {

    const TAB="  "

    let messageParts:string[]=[]
    if(Array.isArray(message)) {
        messageParts = message
    } else {
        try {
            messageParts = message.split("\n")
        } catch {
            console.error("oops, couldn't parse the message:")
            console.debug(message)
            messageParts=[]
        } 
    }

    let lines:string[]=[]
    messageParts.map((m)=> {
        let line:string[]=indentTabCount>0?[TAB.repeat(indentTabCount)]:[]
        let words = m.split(/[\s\n]/)
        for(let i=0; i<words.length; i++) {
            line.push(`${words[i]}`)
            let currentLineLength=0
            line.map((w)=>{
                currentLineLength+=w.length+1 // +1 to accomodate spaces
            })
            currentLineLength-=1 // remove trailing space
            if(i===words.length-1 || (i<words.length-1 && (currentLineLength + words[i+1].length>(wrapWidth-(TAB.length*indentTabCount))))) {
                lines.push(line.join(" "))
                line = indentTabCount>0?[TAB.repeat(indentTabCount)]:[]
            }
        }
    })

    return lines
    
}