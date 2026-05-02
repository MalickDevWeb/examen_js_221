const Joi = require('joi');

const commandeSchema = Joi.object({
  clientId: Joi.number().integer().required(),
  livres: Joi.array().items(Joi.object({
    livreId: Joi.number().integer().required(),
    quantite: Joi.number().integer().positive().required(),
  })).min(1).required(),
});


module.exports = commandeSchema;
