'use strict'
// p.j.weinberger hash function (a.k.a. elf hash function)
var hashpjw = module.exports = (function(){
    var SPEC = {
        BITSINUNSIGNEDINT : 0,
        THREEQUARTERS : 1,
        ONEEIGHTH : 2,
        HIGHBITS : 3,
        SIZEOF : 4,
    }
    var init = function(){
        var w = new Uint32Array(SPEC.SIZEOF);
        w[SPEC.BITSINUNSIGNEDINT] = 32;
        w[SPEC.THREEQUARTERS] = (w[SPEC.BITSINUNSIGNEDINT] * 3) / 4;
        w[SPEC.ONEEIGHTH] = w[SPEC.BITSINUNSIGNEDINT] / 8;
        w[SPEC.HIGHBITS] = 0xFFFFFFFF << (w[SPEC.BITSINUNSIGNEDINT] - w[SPEC.ONEEIGHTH]); ;
        return w;
    }
    var V = init();
    return function(input){
        var VAL = 0;
        var TMP = 1;
        var buff = new Buffer(input.toString(), 'utf-8');
        var w = new Uint32Array(2);
        w[VAL] = 0;
        w[TMP] = 0;
        var len = buff.length;
        for( var i = 0; i < len; ++i ){
           w[VAL] = (w[VAL] << V[SPEC.ONEEIGHTH]) + buff[i];
           if( w[TMP] = w[VAL] & V[SPEC.HIGHBITS] ){
              w[VAL] = (( w[VAL] ^ (w[TMP] >> V[SPEC.THREEQUARTERS])) & (~V[SPEC.HIGHBITS]));
           }
        }
        return w[VAL];
    }
})()