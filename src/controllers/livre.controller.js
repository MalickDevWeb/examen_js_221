const livreService = require('../services/livre.service');
const { sendResponse } = require('../utils/response');

const getAllLivres = async (req, res, next) => {
  try {
    const livres = await livreService.getAllLivres();
    sendResponse(res, 200, livres, 'Livres retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getLivreById = async (req, res, next) => {
  try {
    const livre = await livreService.getLivreById(req.params.id);
    if (!livre) return sendResponse(res, 404, null, 'Livre not found');
    sendResponse(res, 200, livre, 'Livre retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const createLivre = async (req, res, next) => {
  try {
    const livre = await livreService.createLivre(req.body);
    sendResponse(res, 201, livre, 'Livre created successfully');
  } catch (error) {
    next(error);
  }
};

const updateLivre = async (req, res, next) => {
  try {
    const livre = await livreService.updateLivre(req.params.id, req.body);
    if (!livre) return sendResponse(res, 404, null, 'Livre not found');
    sendResponse(res, 200, livre, 'Livre updated successfully');
  } catch (error) {
    next(error);
  }
};

const deleteLivre = async (req, res, next) => {
  try {
    const livre = await livreService.deleteLivre(req.params.id);
    if (!livre) return sendResponse(res, 404, null, 'Livre not found');
    sendResponse(res, 200, null, 'Livre deleted successfully');
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
