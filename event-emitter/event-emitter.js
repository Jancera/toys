const { EventEmitter } = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("CustomEvent", (param) => {
  console.log(`CustomEvent received with parameter: ${param}`);
});

eventEmitter.on("AnotherCustomEvent", () => {
  console.log("Another CustomEvent received");
});

function emitEvents() {
  eventEmitter.emit("CustomEvent", "parameter1");
  eventEmitter.emit("AnotherCustomEvent");
}

emitEvents();
