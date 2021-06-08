//import join from 'lodash/join';
import * as _ from 'lodash-es';
function throwIfNot(b: boolean) {
  if (!b) throw new Error('fail ');
}
function innertest(b: boolean) {
  describe('test', () => {
    it('1/4 passes ', () => {
      throwIfNot(true);
    });
    it('2/4 passes', () => {
      const s = _.join(['1', '2'], '');
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
async function before(ms:number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('before')
      resolve();
    }, ms);
  });
}
export async function test(){
  return before(1000).then(()=>{
    innertest(false)
  })
}