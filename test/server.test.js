const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
chai.should();

chai.use(chaiHttp);
describe('http server', () => {
  describe('/GET', () => {
    it('tum kullanicilar don', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(5);
          done();
        });
    });
    it('1 numarali id', (done) => {
      chai.request(server)
        .get('/api/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.firstname.should.be.eql('Mehmet');
          done();
        });
    });
  });

});