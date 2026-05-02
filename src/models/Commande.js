const mongoose = require('mongoose');

const commandeLivreSchema = new mongoose.Schema({
  livre: { type: mongoose.Schema.Types.ObjectId, ref: 'Livre', required: true },
  quantite: { type: Number, required: true },
});

const commandeSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  livres: [commandeLivreSchema],
  montantTotal: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Commande', commandeSchema);
