const produitService = require('../services/produit.service');
const { sendResponse } = require('../utils/response');

const getAllProduits = async (req, res, next) => {
  try {
    const produits = await produitService.getAllProduits();
    sendResponse(res, 200, produits, 'Produits récupérés');
  } catch (error) {
    next(error);
  }
};

const getProduitById = async (req, res, next) => {
  try {
    const produit = await produitService.getProduitById(req.params.id);
    if (!produit) return sendResponse(res, 404, null, 'Produit non trouvé');
    sendResponse(res, 200, produit, 'Produit récupéré');
  } catch (error) {
    next(error);
  }
};

const createProduit = async (req, res, next) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = req.file.path; // Cloudinary URL
    }
    
    // Convert numerical values
    if (data.prix) data.prix = parseFloat(data.prix);
    if (data.quantiteStock) data.quantiteStock = parseInt(data.quantiteStock);

    const produit = await produitService.createProduit(data);
    sendResponse(res, 201, produit, 'Produit créé');
  } catch (error) {
    next(error);
  }
};

const updateProduit = async (req, res, next) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = req.file.path;
    }
    
    if (data.prix) data.prix = parseFloat(data.prix);
    if (data.quantiteStock) data.quantiteStock = parseInt(data.quantiteStock);

    const produit = await produitService.updateProduit(req.params.id, data);
    sendResponse(res, 200, produit, 'Produit mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteProduit = async (req, res, next) => {
  try {
    await produitService.deleteProduit(req.params.id);
    sendResponse(res, 200, null, 'Produit supprimé');
  } catch (error) {
    next(error);
  }
};

const incrementStock = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const produit = await produitService.incrementStock(req.params.id, parseInt(quantity));
    sendResponse(res, 200, produit, 'Stock incrémenté');
  } catch (error) {
    next(error);
  }
};

const decrementStock = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const produit = await produitService.decrementStock(req.params.id, parseInt(quantity));
    sendResponse(res, 200, produit, 'Stock décrémenté');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProduits,
  getProduitById,
  createProduit,
  updateProduit,
  deleteProduit,
  incrementStock,
  decrementStock,
};
