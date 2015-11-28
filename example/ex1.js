var hashpjw = require('..');

var PRIME_TBLSIZ = 100;
var w = [
    "qwerty",
    "12345678",
    "00000001",
    "@@@@@@@@"
];
var x = w.map(function(v){
    return hashpjw(v) % PRIME_TBLSIZ
})
console.log(x);

