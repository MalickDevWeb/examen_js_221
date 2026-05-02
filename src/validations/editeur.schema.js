const Joi = require('joi');

const editeurSchema = Joi.object({
  nom: Joi.string().required(),
  email: Joi.string().email().required(),
  adresse: Joi.string().allow('', null),
  telephone: Joi.string().allow('', null),
});

module.exports = editeurSchema;
