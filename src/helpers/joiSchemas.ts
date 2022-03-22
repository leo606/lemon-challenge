import Joi from 'joi';

const CpfRegex = /^\d{11}$/;
const CnpjRegex = /^\d{14}$/;

const clientSchema = Joi.object().keys({
  numeroDoDocumento: Joi.alternatives().try(
    Joi.string().regex(CpfRegex),
    Joi.string().regex(CnpjRegex),
  ).required(),
  tipoDeConexao: Joi.string().valid('monofasico', 'bifasico', 'trifasico').required(),
  classeDeConsumo: Joi.string().valid('residencial', 'industrial', 'comercial', 'rural', 'poderPublico').required(),
  modalidadeTarifaria: Joi.string().valid('azul', 'branca', 'verde', 'convencional').required(),
  historicoDeConsumo: Joi.array().items(
    Joi.number().integer().min(0).max(9999),
  ).min(3),
});

export default clientSchema;
