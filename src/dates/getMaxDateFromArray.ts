import cleanDate from '../sanitizeInput/cleanDate';
import isInvalidDate from './isInvalidDate';

export default function getMaxDateFromArray(dates:Date[]):Date|undefined {
    let output:Date|undefined = undefined
    try {
        let goodDates:Date[]=[]
        for(let i=0; i<dates.length; i++) {
            if(!isInvalidDate(dates[i])) { goodDates.push(dates[i])}
        }
        output = cleanDate(new Date(Math.max(...goodDates.map(d=>d.getTime()))));
    } catch(err) {
        throw new Error(`getMaxDateFromArray:${err}`)
    }
    return output
}

