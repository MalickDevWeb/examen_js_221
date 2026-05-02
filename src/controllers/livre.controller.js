const livreService = require('../services/livre.service');
const { sendResponse } = require('../utils/response');

const getAllLivres = async (req, res, next) => {
  try {
    const livres = await livreService.getAllLivres();
    sendResponse(res, 200, livres, 'Livres récupérés');
  } catch (error) {
    next(error);
  }
};

const getLivreById = async (req, res, next) => {
  try {
    const livre = await livreService.getLivreById(req.params.id);
    if (!livre) return sendResponse(res, 404, null, 'Livre non trouvé');
    sendResponse(res, 200, livre, 'Livre récupéré');
  } catch (error) {
    next(error);
  }
};

const createLivre = async (req, res, next) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = req.file.path;
    }
    
    // Ensure numeric types
    if (data.prix) data.prix = parseFloat(data.prix);
    if (data.stock) data.stock = parseInt(data.stock);
    if (data.editeurId) data.editeurId = parseInt(data.editeurId);

    const livre = await livreService.createLivre(data);
    sendResponse(res, 201, livre, 'Livre créé');
  } catch (error) {
    next(error);
  }
};

const updateLivre = async (req, res, next) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = req.file.path;
    }

    if (data.prix) data.prix = parseFloat(data.prix);
    if (data.stock) data.stock = parseInt(data.stock);
    if (data.editeurId) data.editeurId = parseInt(data.editeurId);

    const livre = await livreService.updateLivre(req.params.id, data);
    sendResponse(res, 200, livre, 'Livre mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteLivre = async (req, res, next) => {
  try {
    await livreService.deleteLivre(req.params.id);
    sendResponse(res, 200, null, 'Livre supprimé');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre,
};
