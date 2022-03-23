import Validation from "../../src/services/client/validations/Validation";

import "mocha";

import clients from "./mocks/clients";
import { expect } from "chai";
import { equal } from "assert";

describe("testa métodos da classe Validation", () => {
  describe("método tariffValidation", () => {
    it('retorna false em tarifa "verde"', () => {
      const instance = new Validation(clients.NEclient1);
      expect(instance.tariffValidation).to.be.false;
    });

    it('retorna false em tarifa "azul"', () => {
      const instance = new Validation(clients.NEclient2);
      expect(instance.tariffValidation).to.be.false;
    });

    it('retorna true em tarifa "branca"', () => {
      const instance = new Validation({
        ...clients.NEclient2,
        modalidadeTarifaria: "branca",
      });
      expect(instance.tariffValidation).to.be.true;
    });

    it('retorna true em tarifa "convencional"', () => {
      const instance = new Validation({
        ...clients.NEclient2,
        modalidadeTarifaria: "convencional",
      });
      expect(instance.tariffValidation).to.be.true;
    });
  });

  describe("método consumptionClassValidation", () => {
    it('retorna true em classe de consumo "Comercial"', () => {
      const instance = new Validation({
        ...clients.NEclient1,
        classeDeConsumo: "comercial",
      });
      expect(instance.consumptionClassValidation).to.be.true;
    });

    it('retorna true em classe de consumo "Residencial"', () => {
      const instance = new Validation({
        ...clients.NEclient1,
        classeDeConsumo: "residencial",
      });
      expect(instance.consumptionClassValidation).to.be.true;
    });

    it('retorna true em classe de consumo "Industrial"', () => {
      const instance = new Validation({
        ...clients.NEclient1,
        classeDeConsumo: "industrial",
      });
      expect(instance.consumptionClassValidation).to.be.true;
    });

    it('retorna false em classe de consumo "Poder Público"', () => {
      const instance = new Validation({
        ...clients.NEclient1,
        classeDeConsumo: "poderPublico",
      });
      expect(instance.consumptionClassValidation).to.be.false;
    });

    it('retorna false em classe de consumo "Rural"', () => {
      const instance = new Validation({
        ...clients.NEclient1,
        classeDeConsumo: "rural",
      });
      expect(instance.consumptionClassValidation).to.be.false;
    });
  });

  describe("método minConsumptionValidation", () => {
    it("retorna false em conexao monofasico e média de 350kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "monofasico",
        historicoDeConsumo: [350, 350, 350, 350, 350, 350, 350, 350, 350, 350],
      });
      expect(instance.minConsumptionValidation).to.be.false;
    });

    it("retorna false em conexao Bifásica e média de 400kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "bifasico",
        historicoDeConsumo: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400],
      });
      expect(instance.minConsumptionValidation).to.be.false;
    });

    it("retorna false em conexao trifasico e média de 600kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "trifasico",
        historicoDeConsumo: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
      });
      expect(instance.minConsumptionValidation).to.be.false;
    });

    it("retorna false em conexao trifasico e média de exatos 750kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "trifasico",
        historicoDeConsumo: [750, 750, 750, 750, 750, 750, 750, 750, 750, 750],
      });
      expect(instance.minConsumptionValidation).to.be.false;
    });

    it("retorna true em conexao monofasico e média de 401kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "monofasico",
        historicoDeConsumo: [401, 401, 401, 401, 401, 401, 401, 401, 401, 401],
      });
      expect(instance.minConsumptionValidation).to.be.true;
    });

    it("retorna true em conexao bifasico e média de 501kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "bifasico",
        historicoDeConsumo: [501, 501, 501, 501, 501, 501, 501, 501, 501, 501],
      });
      expect(instance.minConsumptionValidation).to.be.true;
    });

    it("retorna true em conexao trifasico e média de 751kWh", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        tipoDeConexao: "trifasico",
        historicoDeConsumo: [751, 751, 751, 751, 751, 751, 751, 751, 751, 751],
      });
      expect(instance.minConsumptionValidation).to.be.true;
    });
  });

  describe("método minConsumptionValidation", () => {
    it("retorna a média correta com menos de 12 meses", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        historicoDeConsumo: [1000, 2000, 3000],
      });
      expect(instance.getConsumptionAverage).to.be.eq(2000);
    });

    it("retorna a média correta com mais de 12 meses", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        historicoDeConsumo: [
          1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
          12000, 13000, 14000, 15000,
        ],
      });
      expect(instance.getConsumptionAverage).to.be.eq(6500);
    });
  });

  describe("método eligibilityValidation", () => {
    it("retorna um objeto de validacoes com as chaves corretas", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        historicoDeConsumo: [1000, 2000, 3000],
      });

      expect(instance.eligibilityValidation).to.be.an("object").that.includes({
        consumption: true,
        tariff: false,
        minConsumptio: true,
      });
    });
  });

  describe("método CO2Economy", () => {
    it("retorna um número com a economia correta", () => {
      const instance = new Validation({
        ...clients.NEclient1,
        historicoDeConsumo: [
          3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941,
          4597,
        ],
      });

      expect(instance.CO2Economy).to.be.eq(462.77);
    });
  });

  describe("método rejectReasons", () => {
    it("retorna um array com as razoes corretas - media de consumo", () => {
      const instance = new Validation({
        ...clients.ELclient1,
        historicoDeConsumo: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      });

      expect(instance.rejectReasons)
        .to.be.an("array")
        .eql(["Consumo médio não aceito"]);
    });

    it("retorna um array com as razoes corretas - classe de consumo", () => {
      const instance = new Validation({
        ...clients.ELclient1,
        classeDeConsumo: "rural",
      });

      expect(instance.rejectReasons)
        .to.be.an("array")
        .eql(["Classe de consumo não atendida"]);
    });

    it("retorna um array com as razoes corretas - modalidade tarifária", () => {
      const instance = new Validation({
        ...clients.ELclient1,
        modalidadeTarifaria: "verde",
      });

      expect(instance.rejectReasons)
        .to.be.an("array")
        .eql(["Modalidade tarifária não aceita"]);
    });
  });

  describe("método report", () => {
    it("retorna um relatorio negativo com cliente nao elegível", () => {
      const instance = new Validation({
        ...clients.NEclient1,
      });

      expect(instance.report())
        .to.be.an("object")
        .that.have.property("elegível").that.is.false;

      expect(instance.report())
        .to.be.an("object")
        .that.have.property("razoesInelegibilidade")
        .that.is.eql(["Modalidade tarifária não aceita"]);
    });

    it("retorna um relatorio positivo com cliente nao elegível", () => {
      const instance = new Validation({
        ...clients.ELclient1,
      });

      expect(instance.report())
        .to.be.an("object")
        .that.have.property("elegível").that.is.true;

      expect(instance.report())
        .to.be.an("object")
        .that.have.property("economiaAnualDeCO2")
        .that.is.eql(462.77);
    });
  });
});
