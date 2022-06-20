const fs = require("fs");

// 3가지 방법
// rename(...., callback(error, data))
// try {renameSync(....) } catch(e) { }  -> 동기적으로 실행되기 때문에 try catch를 사용해야함, 사용하지 않음
// promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log("error");
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("Done"))
  .catch(console.error);
