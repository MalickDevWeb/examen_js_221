const Joi = require('joi');

const fournisseurSchema = Joi.object({
  nom: Joi.string().required(),
  adresse: Joi.string().required(),
  telephone: Joi.string().required(),
  email: Joi.string().email().allow('', null).optional(),
});

module.exports = fournisseurSchema;
