import ListInsertionWithRemoval from "./ListInsertionWithRemoval"

export default function listInsertAndRemove(originalList:string[], listInsertionsWithRemovals:ListInsertionWithRemoval[]) {

    let newList:string[]=[]

    try {

        console.debug(listInsertionsWithRemovals)

        // first, what are we removing?
        let itemsToRemove:number[]=[]
        for(let i=0; i<listInsertionsWithRemovals.length; i++) {
            itemsToRemove.push(...listInsertionsWithRemovals[i].itemsToRemove)
        }

        // now, loop through the original list ..
        for(let i=0; i<originalList.length; i++) {

            // loop through the insertions ..
            let itemsToInsert:string[]=[]
            for(let j=0; j<listInsertionsWithRemovals.length; j++) {
                // should we insert here?
                if(listInsertionsWithRemovals[j].itemPosition===((i+1))) {
                    itemsToInsert.push(...listInsertionsWithRemovals[j].itemsToInsert)
                }
            }
            
            for(let j=0; j<itemsToInsert.length; j++) {
                newList.push(itemsToInsert[j])
            }

            console.log(`itemsToRemove.indexOf((${i+1})===${itemsToRemove.indexOf((i+1))}`)

            if(itemsToRemove.indexOf((i+1))>-1) {
                console.debug('error', originalList[i])
            } else {
                // add it
                newList.push(originalList[i])
                console.log('success', originalList[i])
            }

        }

        const changeAmount = Math.round(100 - ((newList.length/originalList.length)*100))*-1
        console.log('change', ".. items: " + originalList.length + " -> " + newList.length + " (" + (changeAmount>0 ? "+" : "") + changeAmount + "%)")
       
    } catch(err) {
        throw(err)
    }

    return newList

}

