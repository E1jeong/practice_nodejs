const os = require("os");

//EOL - end of the line, 운영체제 별로 다름
console.log(os.EOL === "\n"); //mac
console.log(os.EOL === "\r\n"); //windows

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
