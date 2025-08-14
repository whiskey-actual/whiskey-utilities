export default function textToBoolean(stringToAssess:string, yesString:string='yes') {
  return (stringToAssess.toLowerCase().trim()===yesString.toLowerCase().trim())
}