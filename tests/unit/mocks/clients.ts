import Client from "../../../src/interfaces/Client";

const NEclient1:Client = {
  numeroDoDocumento:'9182739',
  tipoDeConexao: "monofasico",
  classeDeConsumo: "industrial",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const NEclient2:Client = {
  numeroDoDocumento:'9182739',
  tipoDeConexao: "monofasico",
  classeDeConsumo: "industrial",
  modalidadeTarifaria: "azul",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const ELclient1:Client = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "convencional",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

export default{
  NEclient1,
  NEclient2,
  ELclient1
}