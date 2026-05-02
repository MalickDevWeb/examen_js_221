const mongoose = require('mongoose');

const livreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  prix: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  image: { type: String },
  editeur: { type: mongoose.Schema.Types.ObjectId, ref: 'Editeur', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Livre', livreSchema);
