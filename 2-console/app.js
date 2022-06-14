console.log("asdfasdfasd");
console.clear();

//log level
console.log("log"); //개발
console.info("info"); // 중요한 정보
console.warn("warn"); // 발생하면 안되긴 하지만, 치명적이진 않은 에러
console.error("error"); // 사용자 에러, 시스템 에러

//assert - 해당 조건이 거짓일때만 나타내줌
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

//print object
const student = { name: "e1jeong", age: 32, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

//measuring time - 성능확인할때 사용가능
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

//trace - 디버깅에 유용함
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
