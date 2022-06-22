const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("fisrt callback - ", args);
};

emitter.on("e1jeong", callback1);

emitter.on("e1jeong", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("e1jeong", { message: 1 });
emitter.emit("e1jeong", { message: 2 });
emitter.removeAllListeners();
emitter.emit("e1jeong", { message: 3 });
