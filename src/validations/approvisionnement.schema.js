const Joi = require('joi');

const approvisionnementSchema = Joi.object({
  fournisseurId: Joi.number().integer().required(),
  produitId: Joi.number().integer().required(),
  quantite: Joi.number().integer().min(1).required(),
  date: Joi.date().optional(),
});

module.exports = approvisionnementSchema;
