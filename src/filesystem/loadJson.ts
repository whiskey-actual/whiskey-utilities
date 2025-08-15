import fs from 'fs';

export function loadJson(filename:string):string|null {
    console.debug('checking for file ' + filename)
    if(fs.existsSync(filename)) {
        const output = fs.readFileSync(filename, 'utf8')
        return JSON.parse(output)
    } else {
        console.debug('file not found')
        return null
    }
}