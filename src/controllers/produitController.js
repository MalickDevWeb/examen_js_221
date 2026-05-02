const Produit = require('../models/Produit');

// @desc    Get all products
// @route   GET /api/produits
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/produits/:id
exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product
// @route   POST /api/produits
exports.createProduit = async (req, res) => {
  try {
    const { libelle, prix, quantiteStock } = req.body;
    let image = '';
    
    if (req.file) {
      image = req.file.path; // Cloudinary URL
    }

    const newProduit = new Produit({
      libelle,
      prix,
      quantiteStock,
      image
    });

    const savedProduit = await newProduit.save();
    res.status(201).json(savedProduit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/produits/:id
exports.updateProduit = async (req, res) => {
  try {
    const { libelle, prix, quantiteStock } = req.body;
    let updateData = { libelle, prix, quantiteStock };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedProduit = await Produit.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json(updatedProduit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/produits/:id
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
