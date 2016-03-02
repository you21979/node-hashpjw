'use strict'
// p.j.weinberger hash function (a.k.a. elf hash function)
var hashpjw = module.exports = function(key){
    var H = 0;
    var G = 1;
    var w = new Uint32Array(3);
    w[H] = 0;
    (new Buffer(key.toString(), 'utf-8')).forEach(function(p){
        w[H] = (w[H] << 4) + p;
        if( (w[G] = w[H] & 0xf0000000) ){
            w[H] = w[H] ^ (w[G] >>> 24)
            w[H] = w[H] ^ w[G];
        }
    })
    return w[H];
}
