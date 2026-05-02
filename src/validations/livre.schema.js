const Joi = require('joi');

const livreSchema = Joi.object({
  titre: Joi.string().required(),
  isbn: Joi.string().required(),
  prix: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).default(0),
  image: Joi.string().allow('', null),
  editeur: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
});

module.exports = livreSchema;
