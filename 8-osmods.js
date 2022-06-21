const os = require('os')

//info about users
//const user = os.userInfo()
console.log(os.userInfo())


//method returns the system uptime in seconds

console.log(`the uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    freeMem: os.freemem()
}
console.log(currentOs)