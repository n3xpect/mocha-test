describe('sum methodunu test et', function () {
  context('Argumansiz', () => {
    it('0 (sifir) degeri doner', () => expect(sum()).to.equal(0));
  });

  context('Toplama methoduna arguman gonder', () => {
    it('Cok arguman', () => {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15);
    });
    it('Tek arguman', () => {
      expect(sum(5)).to.equal(5);
    });
  });

  context('Numara olmayan bir argumansa', () => {
    it('Hata firlat', function () {
      expect(() => {
        sum(1, 2, '3', [4], 5);
      }).to.throw(TypeError, 'sum() expects only numbers.');
    });
  });
});
