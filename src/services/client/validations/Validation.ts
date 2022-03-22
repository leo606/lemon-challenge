import Client, { ConsumptionTypes, TariffType, ConnectionTypes } from '../../../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../../../interfaces/Reports';

class Validation {
  private tariff: TariffType;

  private consumption:ConsumptionTypes;

  private consumptionHistory: number[];

  private consumptionAverage: number;

  private connType: ConnectionTypes;

  private CO2PerYearKg = 84;

  private tariffTypeAccept = ['convencional', 'branca'];

  private consumptionAccept = ['comercial', 'residencial', 'industrial'];

  private ineligibleMessages:{[key:string]: string} = {
    consumption: 'Classe de consumo não atendida',
    tariff: 'Modalidade tarifária não aceita',
    minConsumptio: 'Consumo médio não aceito',
  };

  private minConsumptionByConnType = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  constructor(client:Client) {
    this.tariff = client.modalidadeTarifaria;
    this.consumption = client.classeDeConsumo;
    this.consumptionHistory = client.historicoDeConsumo;
    this.connType = client.tipoDeConexao;
    this.consumptionAverage = this.getConsumptionAverage;
  }

  get tariffValidation() {
    return this.tariffTypeAccept.includes(this.tariff);
  }

  get consumptionClassValidation() {
    return this.consumptionAccept.includes(this.consumption);
  }

  get minConsumptionValidation() {
    return this.consumptionAverage > this.minConsumptionByConnType[this.connType];
  }

  get getConsumptionAverage(): number {
    const consumptionLastTwelveMonths = this.consumptionHistory.slice(0, 12);
    const amount = consumptionLastTwelveMonths.length;
    const sum = consumptionLastTwelveMonths.reduce((acc, curr) => acc + curr);
    return sum / amount;
  }

  get eligibilityValidation() {
    return {
      consumption: this.consumptionClassValidation,
      tariff: this.tariffValidation,
      minConsumptio: this.minConsumptionValidation,
    };
  }

  get CO2Economy(): number {
    const yearEconomy = (this.consumptionAverage / 1000) * this.CO2PerYearKg;
    return +yearEconomy.toFixed(2);
  }

  get reportEligible(): EligibleReport {
    return {
      elegível: true,
      economiaAnualDeCO2: this.CO2Economy,
    };
  }

  get rejectReasons(): string[] {
    const eligibility = this.eligibilityValidation as {[key:string]: boolean};

    return Object.keys(eligibility)
      .filter((key:string):boolean => !eligibility[key])
      .map((key:string):string => this.ineligibleMessages[key]);
  }

  get reportNotEligible(): IneligibleReport {
    return {
      elegível: false,
      razoesInelegibilidade: this.rejectReasons,
    };
  }

  report() {
    const eligible = this.tariffValidation
      && this.consumptionClassValidation
      && this.minConsumptionValidation;

    return eligible ? this.reportEligible : this.reportNotEligible;
  }
}

export default Validation;
