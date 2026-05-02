const Fournisseur = require('../models/Fournisseur');

// @desc    Get all suppliers
// @route   GET /api/fournisseurs
exports.getFournisseurs = async (req, res) => {
  try {
    const fournisseurs = await Fournisseur.find();
    res.status(200).json(fournisseurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single supplier
// @route   GET /api/fournisseurs/:id
exports.getFournisseurById = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findById(req.params.id);
    if (!fournisseur) return res.status(404).json({ message: 'Fournisseur non trouvé' });
    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a supplier
// @route   POST /api/fournisseurs
exports.createFournisseur = async (req, res) => {
  try {
    const { nom, adresse, telephone, email } = req.body;
    const newFournisseur = new Fournisseur({ nom, adresse, telephone, email });
    const savedFournisseur = await newFournisseur.save();
    res.status(201).json(savedFournisseur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a supplier
// @route   PUT /api/fournisseurs/:id
exports.updateFournisseur = async (req, res) => {
  try {
    const updatedFournisseur = await Fournisseur.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFournisseur) return res.status(404).json({ message: 'Fournisseur non trouvé' });
    res.status(200).json(updatedFournisseur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a supplier
// @route   DELETE /api/fournisseurs/:id
exports.deleteFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id);
    if (!fournisseur) return res.status(404).json({ message: 'Fournisseur non trouvé' });
    res.status(200).json({ message: 'Fournisseur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
