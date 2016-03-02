'use strict'
// p.j.weinberger hash function (a.k.a. elf hash function)
var hashpjw = module.exports = function(key){
    var buff = (key instanceof Buffer) ? key :
        (typeof key === "string") ? new Buffer(key, 'utf-8') :
        new Buffer(key.toString(), 'utf-8');
    var len = buff.length;
    var h = 0;
    var g = 0;
    for(var i = 0; i < len; ++i) {
        var p = buff[i];
        h = (h << 4) + p;
        if( (g = h & 0xf0000000) ) {
            h = h ^ (g >>> 24)
            h = h ^ g;
        }
    }
    return h;
}
