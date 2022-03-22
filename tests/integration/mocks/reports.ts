const ClientCorrectReport = {
  elegível: true,
  economiaAnualDeCO2: 462.77,
};

const NEByClassAndTariffReport = {
  elegível: false,
  razoesInelegibilidade: [
    "Classe de consumo não atendida",
    "Modalidade tarifária não aceita",
  ],
};

const NEByConsClass = {
  elegível: false,
  razoesInelegibilidade: ["Classe de consumo não atendida"],
};

const NEByTariff = {
  elegível: false,
  razoesInelegibilidade: ["Modalidade tarifária não aceita"],
};

const NEByMinCons = {
  elegível: false,
  razoesInelegibilidade: ["Consumo médio não aceito"],
};

const NEByAll = {
  elegível: false,
  razoesInelegibilidade: [
    "Classe de consumo não atendida",
    "Modalidade tarifária não aceita",
    "Consumo médio não aceito",
  ],
};

export default {
  ClientCorrectReport,
  NEByClassAndTariffReport,
  NEByConsClass,
  NEByTariff,
  NEByMinCons,
  NEByAll,
};
