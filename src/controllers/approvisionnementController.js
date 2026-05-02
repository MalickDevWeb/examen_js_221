const Approvisionnement = require('../models/Approvisionnement');
const Produit = require('../models/Produit');
const Fournisseur = require('../models/Fournisseur');

// @desc    Get all supply records
// @route   GET /api/approvisionnements
exports.getApprovisionnements = async (req, res) => {
  try {
    const records = await Approvisionnement.find()
      .populate('fournisseur')
      .populate('produits.produit');
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a supply record
// @route   POST /api/approvisionnements
exports.createApprovisionnement = async (req, res) => {
  try {
    const { fournisseur, produits } = req.body;

    // 1. Verify Fournisseur exists
    const supplier = await Fournisseur.findById(fournisseur);
    if (!supplier) return res.status(404).json({ message: 'Fournisseur non trouvé' });

    let montantTotal = 0;

    // 2. Process products and update stock
    for (let item of produits) {
      const product = await Produit.findById(item.produit);
      if (!product) {
        return res.status(404).json({ message: `Produit ${item.produit} non trouvé` });
      }

      // Increment stock
      product.quantiteStock += item.quantite;
      await product.save();

      // Add to total amount
      montantTotal += product.prix * item.quantite;
    }

    // 3. Create record
    const newRecord = new Approvisionnement({
      fournisseur,
      produits,
      montantTotal
    });

    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get supply by ID
// @route   GET /api/approvisionnements/:id
exports.getApprovisionnementById = async (req, res) => {
  try {
    const record = await Approvisionnement.findById(req.params.id)
      .populate('fournisseur')
      .populate('produits.produit');
    if (!record) return res.status(404).json({ message: 'Enregistrement non trouvé' });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
