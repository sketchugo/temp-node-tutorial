const { readFile } = require("fs");

const getText = (path) => {
    return new Promise((res, rej) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data) 
            };
        });
    });
};

// getText("./content/first.txt")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

const start = async () => {
    try {
        const first = await getText("./content/first.txt")
        console.log(first);
        
    } catch (error) {
        console.log(error);
    };
};

start();