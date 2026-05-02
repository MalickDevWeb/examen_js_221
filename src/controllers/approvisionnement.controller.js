const approvisionnementService = require('../services/approvisionnement.service');
const { sendResponse } = require('../utils/response');

const getAllApprovisionnements = async (req, res, next) => {
  try {
    const approvisionnements = await approvisionnementService.getAllApprovisionnements();
    sendResponse(res, 200, approvisionnements, 'Approvisionnements récupérés');
  } catch (error) {
    next(error);
  }
};

const getApprovisionnementById = async (req, res, next) => {
  try {
    const approvisionnement = await approvisionnementService.getApprovisionnementById(req.params.id);
    if (!approvisionnement) return sendResponse(res, 404, null, 'Approvisionnement non trouvé');
    sendResponse(res, 200, approvisionnement, 'Approvisionnement récupéré');
  } catch (error) {
    next(error);
  }
};

const createApprovisionnement = async (req, res, next) => {
  try {
    const approvisionnement = await approvisionnementService.createApprovisionnement(req.body);
    sendResponse(res, 201, approvisionnement, 'Approvisionnement créé et stock mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteApprovisionnement = async (req, res, next) => {
  try {
    await approvisionnementService.deleteApprovisionnement(req.params.id);
    sendResponse(res, 200, null, 'Approvisionnement supprimé');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllApprovisionnements,
  getApprovisionnementById,
  createApprovisionnement,
  deleteApprovisionnement,
};
