const os = require('os')

totalMem = os.totalmem();
// console.log(`the total memory is ${totalMem}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    upTime: os.uptime()
}
console.log(currentOS)