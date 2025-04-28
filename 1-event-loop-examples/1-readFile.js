const { readFile } = require("fs");

console.log("S #1");

readFile("./content/first.txt", "utf8", (err, res) => {
    if (err) {
        return err;
    }
    console.log(res);
    console.log("E #1");    
});

console.log("S #2");