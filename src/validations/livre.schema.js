const Joi = require('joi');

const livreSchema = Joi.object({
  titre: Joi.string().required(),
  isbn: Joi.string().required(),
  prix: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).default(0),
  image: Joi.string().allow('', null),
  editeurId: Joi.number().integer().required(),
});


module.exports = livreSchema;
