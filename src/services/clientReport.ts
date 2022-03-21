import Client from '../interfaces/Client';

function getLastTwelveMonths(consumptionHistory:number[]) {
  if (consumptionHistory.length <= 12) {
    return consumptionHistory;
  }
  return consumptionHistory.splice(0, 12);
}

function getConsumptionAverage(consumptionHistory:number[]) {
  const amount = consumptionHistory.length;
  const sum = consumptionHistory.reduce((acc, curr) => acc + curr);
  return sum / amount;
}

function consumptionClassValidation(client:Client) {
  const accepted = ['comercial', 'residencial', 'industrial'];
  return accepted.includes(client.classeDeConsumo);
}

function tariffValidation(client:Client) {
  const accepted = ['convencional', 'branca'];
  return accepted.includes(client.modalidadeTarifaria);
}

function minConsumptionValidation(client:Client) {
  const consumptionHistory = getLastTwelveMonths(client.historicoDeConsumo);
  const consumptionAverage = getConsumptionAverage(consumptionHistory);

  const minConsumptionByConnType = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  const minConsumption = minConsumptionByConnType[client.tipoDeConexao];
  return consumptionAverage > minConsumption;
}

function clientReport(client:Client): boolean {
  console.log(consumptionClassValidation(client));
  console.log(tariffValidation(client));
  console.log(minConsumptionValidation(client));

  return true;
}

export default clientReport;
