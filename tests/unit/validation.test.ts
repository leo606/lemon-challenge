import Validation from "../../src/services/client/validations/Validation";

import "mocha";

import clients from "./mocks/clients";
import { expect } from "chai";

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
  });
});
