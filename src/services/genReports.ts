import Client from '../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../interfaces/Reports';
import { getConsumptionAverage } from './clientEligibility';

const CO2_PER_YEAR_KG = 84;

function getCo2YearEconomy(consumptionAverage:number): number {
  const yearEconomy = (consumptionAverage / 1000) * CO2_PER_YEAR_KG;
  return +yearEconomy.toFixed(2);
}

function eligibleReport(client:Client): EligibleReport {
  const consumptionAverage = getConsumptionAverage(client.historicoDeConsumo);
  const Co2YearEconomy = getCo2YearEconomy(consumptionAverage);

  return {
    elegível: true,
    economiaAnualDeCO2: Co2YearEconomy,
  };
}

function ineligibleReport(clientEligible: boolean[]): IneligibleReport {
  return {
    elegível: false,
    razoesInelegibilidade: [
      'Classe de consumo não atendida',
      'Modalidade tarifária não aceita',
    ],
  };
}

export {
  eligibleReport,
  ineligibleReport,
};
