const Joi = require('joi');

const produitSchema = Joi.object({
  libelle: Joi.string().required(),
  prix: Joi.number().min(0).required(),
  quantiteStock: Joi.number().integer().min(0).optional(),
});

module.exports = produitSchema;
