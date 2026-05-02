const editeurService = require('../services/editeur.service');
const { sendResponse } = require('../utils/response');

const getAllEditeurs = async (req, res, next) => {
  try {
    const editeurs = await editeurService.getAllEditeurs();
    sendResponse(res, 200, editeurs, 'Éditeurs récupérés');
  } catch (error) {
    next(error);
  }
};

const getEditeurById = async (req, res, next) => {
  try {
    const editeur = await editeurService.getEditeurById(req.params.id);
    if (!editeur) return sendResponse(res, 404, null, 'Éditeur non trouvé');
    sendResponse(res, 200, editeur, 'Éditeur récupéré');
  } catch (error) {
    next(error);
  }
};

const createEditeur = async (req, res, next) => {
  try {
    const editeur = await editeurService.createEditeur(req.body);
    sendResponse(res, 201, editeur, 'Éditeur créé');
  } catch (error) {
    next(error);
  }
};

const updateEditeur = async (req, res, next) => {
  try {
    const editeur = await editeurService.updateEditeur(req.params.id, req.body);
    sendResponse(res, 200, editeur, 'Éditeur mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteEditeur = async (req, res, next) => {
  try {
    await editeurService.deleteEditeur(req.params.id);
    sendResponse(res, 200, null, 'Éditeur supprimé');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEditeurs,
  getEditeurById,
  createEditeur,
  updateEditeur,
  deleteEditeur,
};
