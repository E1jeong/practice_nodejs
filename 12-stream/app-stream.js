const fs = require("fs");
const data = [];

fs.createReadStream("./file.txt", {
  //highWaterMark: 8, // default = 64kb
  //encoding: "utf-8",
})
  .on("data", (chunk) => {
    //console.log(chunk);
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join("")); //들어온 문자열 합치기
  })
  .on("error", (error) => {
    console.log(error);
  });
