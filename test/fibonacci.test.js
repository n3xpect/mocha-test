const expect = require('chai').expect;
const fibonacci = require('../fibonacci');

const OVER_MAX_VALUE = 21;
const FINISH = 10;

describe('fibonacci methodunu test et', function () {
  context('Argumansiz ya da gecersiz arguman', () => {
    it('bos dizi donmeli',
      () => expect(fibonacci()).to.be.an('array').that.is.empty);
  });

  context('Arguman gonder', () => {
    it('numaric degilse uygun hata mesaji donmeli',
      () => expect(() => fibonacci('aaa')).to.throw(TypeError, 'Lutfen rakam giriniz'));
    it('0 ise hata firlatir',
      () => expect(() => fibonacci(-1)).to.throw());
    it('max. value, 20\'dan buyukse hata firlatir',
      () => expect(() => fibonacci(OVER_MAX_VALUE)).to.throw());
    it('dizi uzunlugu, girilen max. value kadar olmalidir',
      () => expect(fibonacci(FINISH)).to.have.length(FINISH));
  });

});
