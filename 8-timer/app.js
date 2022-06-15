const { clear } = require("console");

let num = 1;

//해당 함수는 멈추지 않음
// setInterval(() => {
//   console.log(num++);
// }, 1000); // 1000ms = 1sec

//멈추려면 다음과같이 해야함
const interval = setInterval(() => {
  console.log(num++);
}, 1000); // 1000ms = 1sec

setTimeout(() => {
  console.log("Timeout");
  clearInterval(interval);
}, 6000);
