const mongoose = require('mongoose');

const approvisionnementSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  quantite: {
    type: Number,
    required: [true, 'La quantité est obligatoire'],
    min: [1, 'La quantité doit être au moins 1']
  },
  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fournisseur',
    required: [true, 'Le fournisseur est obligatoire']
  },
  produit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit',
    required: [true, 'Le produit est obligatoire']
  }
}, { timestamps: true });

module.exports = mongoose.model('Approvisionnement', approvisionnementSchema);
