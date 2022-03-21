import app from "../../src/api/app";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

import clients from "./mocks/clients";
import reports from './mocks/reports'

describe("get eligibilidade status codes", () => {
  it("retorna status 400 - bad request ao não enviar dados do cliente", async () => {
    return chai
      .request(app)
      .get("/")
      .send({})
      .then((res) => {
        expect(res).to.have.status(400);
      });
  });

  it("dados incorretos retorna status 400 - bad request", async () => {
    return chai
      .request(app)
      .get("/")
      .send(clients.clientWrong)
      .then((res) => {
        console.log(res.body);
        
        expect(res).to.have.status(400);
      });
  });

  it("dados corretos retorna status 200 - ok", async () => {
    return chai
      .request(app)
      .get("/")
      .send(clients.clientCorrect)
      .then((res) => {
        expect(res).to.have.status(200);
      });
  });
});

describe("get eligibilidade informações do relatório", () => {
  it("dados corretos retorna status 200 - ok", async () => {
    return chai
      .request(app)
      .get("/")
      .send(clients.clientCorrect)
      .then((res) => {
        expect(res.body).to.equal(reports.ClientCorrectReport)
      });
  });
});
