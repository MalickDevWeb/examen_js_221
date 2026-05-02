const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
    trim: true
  },
  adresse: {
    type: String,
    required: [true, "L'adresse est obligatoire"]
  },
  telephone: {
    type: String,
    required: [true, 'Le téléphone est obligatoire'],
    unique: true
  },
  email: {
    type: String,
    required: [true, "L'email est obligatoire"],
    unique: true,
    match: [/.+\@.+\..+/, 'Veuillez entrer un email valide']
  }
}, { timestamps: true });

module.exports = mongoose.model('Fournisseur', fournisseurSchema);
