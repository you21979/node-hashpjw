import * as assert from 'assert'
import * as hashpjw from '..'

describe('hashpjw', () => {
    it('simple number string', () => {
        const n = hashpjw("0");
        assert(n === 48);
    });
    it('simple number', () => {
        const n = hashpjw(0);
        assert(n === 48);
    });
    it('simple string', () => {
        const n = hashpjw("ABCDEFGHIJKLMN");
        assert(n === 178683902);
    });
    it('simple buffer', () => {
        const n = hashpjw(new Buffer("ABCDEFGHIJKLMN"));
        assert(n === 178683902);
    });
    it('long string', () => {
        const n = hashpjw("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz");
        assert(n === 53942586);
    });
});
