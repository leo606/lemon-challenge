import Client from '../interfaces/Client';

function getLastTwelveMonths(consumptionHistory:number[]):number[] {
  if (consumptionHistory.length <= 12) {
    return consumptionHistory;
  }
  return consumptionHistory.splice(0, 12);
}

function getConsumptionAverage(consumptionHistory:number[]):number {
  const consumptionLastTwelveMonths = getLastTwelveMonths(consumptionHistory);
  const amount = consumptionLastTwelveMonths.length;
  const sum = consumptionLastTwelveMonths.reduce((acc, curr) => acc + curr);
  return sum / amount;
}

function consumptionClassValidation(classeDeConsumo:string): boolean {
  const accepted = ['comercial', 'residencial', 'industrial'];
  return accepted.includes(classeDeConsumo);
}

function tariffValidation(modalidadeTarifaria:string): boolean {
  const accepted = ['convencional', 'branca'];
  return accepted.includes(modalidadeTarifaria);
}

function minConsumptionValidation(client:Client): boolean {
  const consumptionAverage = getConsumptionAverage(client.historicoDeConsumo);

  const minConsumptionByConnType = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  const minConsumption = minConsumptionByConnType[client.tipoDeConexao];
  return consumptionAverage > minConsumption;
}

function clientEligibility(client:Client):boolean[] {
  const consumptionValid = consumptionClassValidation(client.classeDeConsumo);
  const tariffValid = tariffValidation(client.modalidadeTarifaria);
  const minConsumptionValid = minConsumptionValidation(client);

  return [consumptionValid, tariffValid, minConsumptionValid];
}

export {
  clientEligibility,
  getConsumptionAverage,
};
