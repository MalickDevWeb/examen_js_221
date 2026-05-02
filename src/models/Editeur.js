const mongoose = require('mongoose');

const editeurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String },
  email: { type: String, required: true, unique: true },
  telephone: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Editeur', editeurSchema);
