import cleanString from "../sanitizeInput/cleanString"
import ListInsertion from "./ListInsertion"

export default function listInsert(originalList:string[], listInsertions:ListInsertion[]) {

    let updatedList:string[]=[]

    try {
        for(let i=0; i<originalList.length; i++) {
            updatedList.push(originalList[i])
            for(let j=0; j<listInsertions.length; j++) {
                if((i===0 && listInsertions[j].itemPosition===0) || (i+1)===listInsertions[j].itemPosition) {
                    for(let k=0; k<listInsertions[j].itemsToInsert.length; k++) {
                        let newItem = cleanString(listInsertions[j].itemsToInsert[k])
                        if(newItem) {updatedList.push(newItem)}
                    }
                }

            }

        }

    } catch(err) {
        throw(err)
    }

    return updatedList

}

