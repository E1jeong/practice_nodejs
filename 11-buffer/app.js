//fixed-size chuck of memory
//array of integers, byte of data

const fs = require("fs");
const buf = Buffer.from("Hi");
console.log(buf); // uni=code
console.log(buf.length);
console.log(buf[0]); //ascii-code
console.log(buf[1]); //ascii-code
console.log(buf.toString()); //default = utf-8

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //초기화하지 않음(메모리가 많이 사용중이라면 메모리에 값이 있을수있음), 그래서 빠름
console.log(buf2);
console.log(buf3);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

//concat - 합치기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
