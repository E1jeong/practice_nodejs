console.log("asdfasdfasd");
console.clear();

//log level
console.log("log"); //����
console.info("info"); // �߿��� ����
console.warn("warn"); // �߻��ϸ� �ȵǱ� ������, ġ�������� ���� ����
console.error("error"); // ����� ����, �ý��� ����

//assert - �ش� ������ �����϶��� ��Ÿ����
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

//print object
const student = { name: "e1jeong", age: 32, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

//measuring time - ����Ȯ���Ҷ� ��밡��
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

//counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();

//trace - ����뿡 ������
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
