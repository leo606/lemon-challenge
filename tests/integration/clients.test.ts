import app from "../../src/api/app";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

import clients from "./mocks/clients";
import reports from "./mocks/reports";

function getReport(path = "/", body = {}) {
  return chai.request(app).get(path).send(body);
}

describe("get eligibilidade status codes", () => {
  it("retorna status 400 - bad request ao não enviar dados do cliente", async () => {
    return getReport().then((res) => {
      expect(res).to.have.status(400);
    });
  });

  it("dados incorretos retorna status 400 - bad request", async () => {
    return getReport("/", clients.clientWrong).then((res) => {
      expect(res).to.have.status(400);
    });
  });

  it("dados corretos retorna status 200 - ok", async () => {
    return getReport("/", clients.clientCorrect).then((res) => {
      expect(res).to.have.status(200);
    });
  });
});

describe("get eligibilidade informações do relatório com cliente elegível", () => {
  it("cliente elegível retorna informações corretas", async () => {
    return getReport("/", clients.clientCorrect).then((res) => {
      expect(res.body).to.have.all.keys(
        Object.keys(reports.ClientCorrectReport)
      );
      expect(res.body).to.includes(reports.ClientCorrectReport);
    });
  });
});

describe("get eligibilidade informações do relatório com cliente não elegível", () => {
  it("cliente não elegível por classe de consumo e modalidade tarifária", async () => {
    return getReport("/", clients.clientNotEligibleByClassAndTariff).then(
      (res) => {
        expect(res.body).to.have.all.keys(
          Object.keys(reports.NEByClassAndTariffReport)
        );
        expect(res.body.razoesInelegibilidade).to.eql(
          reports.NEByClassAndTariffReport.razoesInelegibilidade
        );
      }
    );
  });

  it("cliente não elegível por classe de consumo", async () => {
    return getReport("/", clients.clientNotEligibleByConsClass).then((res) => {
      expect(res.body).to.have.all.keys(Object.keys(reports.NEByConsClass));

      expect(res.body.razoesInelegibilidade).to.eql(
        reports.NEByConsClass.razoesInelegibilidade
      );
    });
  });

  it("cliente não elegível por modalidade tarifária", async () => {
    return getReport("/", clients.clientNotEligibleByTariff).then((res) => {
      expect(res.body).to.have.all.keys(Object.keys(reports.NEByTariff));

      expect(res.body.razoesInelegibilidade).to.eql(
        reports.NEByTariff.razoesInelegibilidade
      );
    });
  });

  it("cliente não elegível por consumo mínimo", async () => {
    return getReport("/", clients.clientNotEligibleByMinCons).then((res) => {
      expect(res.body).to.have.all.keys(Object.keys(reports.NEByMinCons));

      expect(res.body.razoesInelegibilidade).to.eql(
        reports.NEByMinCons.razoesInelegibilidade
      );
    });
  });

  it("cliente não elegível por classe, tarifa e consumo", async () => {
    return getReport("/", clients.clientNotEligibleByAll).then((res) => {
      expect(res.body).to.have.all.keys(Object.keys(reports.NEByAll));

      expect(res.body.razoesInelegibilidade).to.eql(
        reports.NEByAll.razoesInelegibilidade
      );
    });
  });
});
