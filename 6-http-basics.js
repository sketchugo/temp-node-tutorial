const http = require("http");

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === "/") {
        return res.end("Welcome to the home page.");
    }

    if (req.url === "/about") {
        return res.end("About this page.");
    }

    //default response
    res.end(`<h4>Page not found. Go back <a href="/">home</a><h4>`)
});

server.listen(3000);