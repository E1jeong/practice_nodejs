const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//모든 소스가 실행된 후 0초 후 실행됨
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//call stack에 있는 함수 모두 실행 후 실행됨
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
