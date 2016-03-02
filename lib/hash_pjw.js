'use strict'
// p.j.weinberger hash function (a.k.a. elf hash function)
var hashpjw = module.exports = function(key){
    return (new Buffer(key.toString(), 'utf-8')).reduce(function(h, p){
        var g;
        h = (h << 4) + p;
        if( (g = h & 0xf0000000) ) {
            h = h ^ (g >>> 24)
            h = h ^ g;
        }
        return h;
    }, 0)
}
