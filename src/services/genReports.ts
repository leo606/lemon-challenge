import { EligibleReport, IneligibleReport } from '../interfaces/Reports';

function eligibleReport(): EligibleReport {
  return {
    elegível: true,
    economiaAnualDeCO2: 999,
  };
}

function ineligibleReport(): IneligibleReport {
  return {
    elegível: false,
    razoesInelegibilidade: [
      'Classe de consumo não atendida',
      'Modalidade tarifária não aceita',
    ],
  };
}

export default {
  eligibleReport,
  ineligibleReport,
};
