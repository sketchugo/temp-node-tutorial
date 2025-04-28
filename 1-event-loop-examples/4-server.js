const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("Request event");
    res.end("Hello World");    
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
});