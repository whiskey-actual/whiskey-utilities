import cleanDate from './cleanDate';
import isInvalidDate from './isInvalidDate';

export default function getMaxDateFromArray(dates:Date[]):Date|undefined {
    let output:Date|undefined = undefined
    
    try {

        // first, get only the valid dates
        let goodDates:Date[]=[]
        for(let i=0; i<dates.length; i++) {
            if(!isInvalidDate(dates[i])) { goodDates.push(dates[i])}
        }
    
        output = cleanDate(new Date(Math.max(...goodDates.map(d=>d.getTime()))));
    
    } catch(err) {
        throw `getMaxDateFromArray: ${err}`
    }
    
    return output

}

