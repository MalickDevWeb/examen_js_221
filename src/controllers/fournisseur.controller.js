const fournisseurService = require('../services/fournisseur.service');
const { sendResponse } = require('../utils/response');

const getAllFournisseurs = async (req, res, next) => {
  try {
    const fournisseurs = await fournisseurService.getAllFournisseurs();
    sendResponse(res, 200, fournisseurs, 'Fournisseurs récupérés');
  } catch (error) {
    next(error);
  }
};

const getFournisseurById = async (req, res, next) => {
  try {
    const fournisseur = await fournisseurService.getFournisseurById(req.params.id);
    if (!fournisseur) return sendResponse(res, 404, null, 'Fournisseur non trouvé');
    sendResponse(res, 200, fournisseur, 'Fournisseur récupéré');
  } catch (error) {
    next(error);
  }
};

const createFournisseur = async (req, res, next) => {
  try {
    const fournisseur = await fournisseurService.createFournisseur(req.body);
    sendResponse(res, 201, fournisseur, 'Fournisseur créé');
  } catch (error) {
    next(error);
  }
};

const updateFournisseur = async (req, res, next) => {
  try {
    const fournisseur = await fournisseurService.updateFournisseur(req.params.id, req.body);
    sendResponse(res, 200, fournisseur, 'Fournisseur mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteFournisseur = async (req, res, next) => {
  try {
    await fournisseurService.deleteFournisseur(req.params.id);
    sendResponse(res, 200, null, 'Fournisseur supprimé');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFournisseurs,
  getFournisseurById,
  createFournisseur,
  updateFournisseur,
  deleteFournisseur,
};
