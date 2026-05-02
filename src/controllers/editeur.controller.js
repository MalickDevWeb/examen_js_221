const editeurService = require('../services/editeur.service');
const { sendResponse } = require('../utils/response');

const getAllEditeurs = async (req, res, next) => {
  try {
    const editeurs = await editeurService.getAllEditeurs();
    sendResponse(res, 200, editeurs, 'Editeurs retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getEditeurById = async (req, res, next) => {
  try {
    const editeur = await editeurService.getEditeurById(req.params.id);
    if (!editeur) return sendResponse(res, 404, null, 'Editeur not found');
    sendResponse(res, 200, editeur, 'Editeur retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const createEditeur = async (req, res, next) => {
  try {
    const editeur = await editeurService.createEditeur(req.body);
    sendResponse(res, 201, editeur, 'Editeur created successfully');
  } catch (error) {
    next(error);
  }
};

const updateEditeur = async (req, res, next) => {
  try {
    const editeur = await editeurService.updateEditeur(req.params.id, req.body);
    if (!editeur) return sendResponse(res, 404, null, 'Editeur not found');
    sendResponse(res, 200, editeur, 'Editeur updated successfully');
  } catch (error) {
    next(error);
  }
};

const deleteEditeur = async (req, res, next) => {
  try {
    const editeur = await editeurService.deleteEditeur(req.params.id);
    if (!editeur) return sendResponse(res, 404, null, 'Editeur not found');
    sendResponse(res, 200, null, 'Editeur deleted successfully');
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
