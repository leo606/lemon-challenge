import app from '../../src/api/app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp)
const expect = chai.expect

describe("get eligibilidade de cliente", () => {
  describe("sem dados de cliente", () => {

    it("retorna status 400 - bad request", () => {
      return chai.request(app).get('/').send({})
        .then(res=>{
          expect(res).to.have.status(400)
        })
    });
  });
});
