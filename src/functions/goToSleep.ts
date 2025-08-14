function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function goToSleep(seconds:number, showMsg:boolean=false) {
    if(showMsg) { console.log(`.. sleeping ${seconds} seconds ..`) }
    for (let i = 0; i < seconds; i++) {
      await sleep(1000);
    }
}  