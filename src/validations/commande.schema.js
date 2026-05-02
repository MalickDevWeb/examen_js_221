const Joi = require('joi');

const commandeSchema = Joi.object({
  client: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  livres: Joi.array().items(Joi.object({
    livre: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    quantite: Joi.number().integer().positive().required(),
  })).min(1).required(),
});

module.exports = commandeSchema;
