const toTitleCase = require("./node_modules/to-title-case");
console.log(toTitleCase);

const lower =  "the lord of the ring: the return of the king"
const title = toTitleCase(lower)

console.log(title)