const { log } = require("console")
const os = require("os")

//User info :
user = os.userInfo()
console.log(user)

//System uptime:
console.log("The system uptime is ", os.uptime() ,"seconds");

//system info:
const info = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    homeDir : os.homedir(),
    freeMemory: os.freemem(),
}
console.log(info)