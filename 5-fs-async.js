const { readFile, writeFile } = require("fs");

console.log("start");


readFile("./content/first.txt", "utf8", (err, res) => {
    if (err) {
        return err;
    };
    const first = res;
    readFile("./content/first.txt", "utf8", (err, res) => {
        if (err) {
            return err;
        };
        const second = res;
        writeFile(
            "./content/result-async.txt",
            `Here's the async result: ${first}, ${second}`,
            (err, res) => {
                if (err) {
                    return err;
                }
                console.log("done with this task");                
            }
        );
    });
});

console.log("starting this task");
