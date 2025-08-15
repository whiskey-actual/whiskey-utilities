export default function doesRegexMatch(stringToAssess:string, regexStrings:string[]):boolean {

    let isMatch:boolean=true;

    try {
      for(let regex in regexStrings) {
        const re = new RegExp(regex)
        if(!re.test(stringToAssess)) { isMatch=false }
      }
    } catch(err:any) {
      throw new Error(`doesRegexMatch:${err.message||'unknown error'}`)
    }

    return isMatch

  }