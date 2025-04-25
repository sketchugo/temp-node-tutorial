const os = require("os");

//info about current user
const user = os.userInfo();

console.log(user);

//returns the sys uptime is seconds
console.log(`The sys uptime is ${os.uptime()} seconds`);

const currOS = {
    name: os.type(),
    release: os.release(),
    totamMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currOS);