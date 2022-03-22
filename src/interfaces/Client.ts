type Cpf = `${number}`;

type Cnpj = `${number}`;

export type ConnectionTypes = 'monofasico' | 'bifasico' | 'trifasico';

export type ConsumptionTypes = 'residencial' | 'industrial' | 'comercial' | 'rural' | 'poderPublico'

export type TariffType = 'azul' | 'branca' | 'verde' | 'convencional'

interface Client {
  numeroDoDocumento: Cpf | Cnpj;
  tipoDeConexao: ConnectionTypes;
  classeDeConsumo: ConsumptionTypes;
  modalidadeTarifaria: TariffType;
  historicoDeConsumo: number[]
}

export default Client;
