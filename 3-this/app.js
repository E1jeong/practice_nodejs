//class에서 쓰이는 this는 클래스 그자체
//그 밖에서 쓰는 this 는 global
function hello() {
  console.log(this);
  console.log(this === global); //global의 개념 ?
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log("--------------class----------------");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log("---------global scope--------------");
console.log(this);
console.log(this === module.exports);
