const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
const user = "Abel Tesfaye";

console.log(newItems);
console.log(`Hello there ${user}`);