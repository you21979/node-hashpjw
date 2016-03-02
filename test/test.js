var assert = require('assert');
var hashpjw = require('..');
describe('hashpjw', function() {
    it('simple1', function() {
        var n = hashpjw("0");
        assert(n === 48);
    });
    it('simple2', function() {
        var n = hashpjw("ABCDEFGHIJKLMN");
        assert(n === 178683902);
    });
    it('long', function() {
        var n = hashpjw("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz");
        assert(n === 53942586);
    });
});
