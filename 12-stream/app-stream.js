const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  //highWaterMark: 8, // default = 64kb
  //encoding: "utf-8",
});

const data = [];

readStream.on("data", (chunk) => {
  //console.log(chunk);
  data.push(chunk);
  console.count("data");
});

readStream.on("end", () => {
  console.log(data.join("")); //들어온 문자열 합치기
});

readStream.on("error", (error) => {
  console.log(error);
});
