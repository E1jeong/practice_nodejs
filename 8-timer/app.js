const { clear } = require("console");

let num = 1;

//�ش� �Լ��� ������ ����
// setInterval(() => {
//   console.log(num++);
// }, 1000); // 1000ms = 1sec

//���߷��� ���������� �ؾ���
const interval = setInterval(() => {
  console.log(num++);
}, 1000); // 1000ms = 1sec

setTimeout(() => {
  console.log("Timeout");
  clearInterval(interval);
}, 6000);
