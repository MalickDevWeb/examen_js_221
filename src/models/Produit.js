const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  libelle: {
    type: String,
    required: [true, 'Le libellé est obligatoire'],
    trim: true,
    unique: true
  },
  prix: {
    type: Number,
    required: [true, 'Le prix est obligatoire'],
    min: [0, 'Le prix ne peut pas être négatif']
  },
  quantiteStock: {
    type: Number,
    default: 0,
    min: [0, 'La quantité ne peut pas être négative']
  },
  image: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Produit', produitSchema);
