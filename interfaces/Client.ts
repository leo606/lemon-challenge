type Cpf = `${number}`;

type Cnpj = `${number}`;

type ConnectionTypes = 'monofasico' | 'bifasico' | 'trifasico';

type ConsumptionTypes = 'residencial' | 'industrial' | 'comercial' | 'rural' | 'poderPublico'

type TariffType = 'azul' | 'branca' | 'verde' | 'convencional'

interface Client {
  numeroDoDocumento: Cpf | Cnpj;
  tipoDeConexao: ConnectionTypes;
  classeDeConsumo: ConsumptionTypes;
  modalidadeTarifaria: TariffType;
  historicoDeConsumo: number[]
}

export default Client;
