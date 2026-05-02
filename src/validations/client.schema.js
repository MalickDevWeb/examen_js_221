const Joi = require('joi');

const clientSchema = Joi.object({
  nom: Joi.string().required(),
  email: Joi.string().email().required(),
  telephone: Joi.string().allow('', null),
  adresse: Joi.string().allow('', null),
});

module.exports = clientSchema;
