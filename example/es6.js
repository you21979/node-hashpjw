const hash = require('hashpjw');
let w = [
    "qwerty",
    "123456",
    "12345678",
    "00000001",
    "NPC0001",
    "@@@@@@@@"
].map(v => ({ key: hash(v), value: v}))

console.log(w);
