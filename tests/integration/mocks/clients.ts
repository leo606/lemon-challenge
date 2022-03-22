const clientWrong = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "quadrifasico",
  classeDeConsumo: "espacial",
  modalidadeTarifaria: "convencional",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const clientCorrect = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "convencional",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const clientNotEligibleByClassAndTariff = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "rural",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160,
  ],
};

const clientNotEligibleByConsClass = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "poderPublico",
  modalidadeTarifaria: "convencional",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const clientNotEligibleByTariff = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
  ],
};

const clientNotEligibleByMinCons = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "branca",
  historicoDeConsumo: [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9999, 9999, 9999, 9999, 9999, 9999,
    9999, 9999, 9999, 9999, 9999, 9999, 9999,
  ],
};

const clientNotEligibleByAll = {
  numeroDoDocumento: "14041737706",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "rural",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [3, 3, 3, 3, 3, 3, 3, 3, 3],
};

export default {
  clientWrong,
  clientCorrect,
  clientNotEligibleByClassAndTariff,
  clientNotEligibleByConsClass,
  clientNotEligibleByTariff,
  clientNotEligibleByMinCons,
  clientNotEligibleByAll,
};
