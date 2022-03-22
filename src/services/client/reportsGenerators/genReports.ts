import Client from '../../../interfaces/Client';
import ClientEligibility from '../../../interfaces/EligibilityValidation';
import { EligibleReport, IneligibleReport } from '../../../interfaces/Reports';
import { getConsumptionAverage } from '../validations/eligibilityValidation';

const CO2_PER_YEAR_KG = 84;

const INELIGIBILITY_MESSAGES = [
  'Classe de consumo não atendida',
  'Modalidade tarifária não aceita',
  'Consumo médio não aceito',
];

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

function ineligibleReport(clientEligibility: ClientEligibility): IneligibleReport {
  const reasons:string[] = [];

  clientEligibility.forEach((valid:boolean, index) => {
    if (!valid) reasons.push(INELIGIBILITY_MESSAGES[index]);
  });

  return {
    elegível: false,
    razoesInelegibilidade: reasons,
  };
}

export {
  eligibleReport,
  ineligibleReport,
};
