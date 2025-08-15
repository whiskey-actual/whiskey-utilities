export default function listReorder(list:string[], newPositions:number[], moveReasons:string[]=[]):string[] {
    let output:string[]=[]

    try {

        let newList:string[] = Array(list.length)

        let moveCount:number = 0

        // loop through the existing list
        for(let i=0; i<list.length; i++) {

            // if the newPosition is not where the pointer is currently,
            if(newPositions[i]!==(i+1)) {
                moveCount++
            }
            newList[newPositions[i]-1] = list[i] 
        }

        console.log('change', ".. " + moveCount + " items reordered.")
        
        for(let i=0; i<newList.length; i++) {
            if(newList[i]!==list[i]) {
                console.log('change', newList[i] + " [" + moveReasons[i] + "]")
            } else {
                console.log('success', newList[i])
            }
        }
        
        output=newList
        
    } catch(err) {
        throw(err)
    }

    return output
}