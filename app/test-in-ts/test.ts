import join from 'lodash/join';
function throwIfNot(b: boolean) {
  if (!b) throw new Error('fail ');
}
export function test(b: boolean) {
  describe('test', () => {
    it('1/4 passes ', () => {
      throwIfNot(true);
    });
    it('2/4 passes', () => {
      const s = join(['1', '2'], '');
      console.log(s);
      throwIfNot(s === '12');
    });
    it('3/4 ???', () => {
      throwIfNot(b);
    });
    it('4/4 passes', () => {
      throwIfNot(true);
    });
  });
}
