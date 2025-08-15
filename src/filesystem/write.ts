import fs from 'fs';

export async function write(data:string, filename:string) {
    fs.writeFile(`./out/${filename}.txt`, data, (err) => {
        if(err) {
            console.debug(err)
        }
    })
}
