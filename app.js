const http = require("http");
const PORT = 3000;

//Standard way
// const server = http.createServer((req, res) => {
//     res.end("Welcome");
// });

//Use event emitter API
const server = http.createServer();

//emits request event
//subscribe to the event, listen for it and respond
server.on("request", (req, res) => {
    res.end("Welcome (emitter)");
});

server.listen(PORT, console.log(`Listening on por ${PORT}`))