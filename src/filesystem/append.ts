import fs from 'fs';

export function append(data:string, filename:string) {
    fs.appendFile(`./out/${filename}.txt`, data, (err) => {
      if(err) {
        console.debug(err)
      }
    })
  }
  