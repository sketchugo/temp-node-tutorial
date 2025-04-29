const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("res", (name, id) => {
    console.log(`Data received user ${name}, with ID #${id}`);    
});

customEmitter.on("res", () => {
    console.log(`Some other logic here`);    
});

customEmitter.emit("res", "Hugo", 31)