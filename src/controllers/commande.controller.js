const commandeService = require('../services/commande.service');
const { sendResponse } = require('../utils/response');

const getAllCommandes = async (req, res, next) => {
  try {
    const commandes = await commandeService.getAllCommandes();
    sendResponse(res, 200, commandes, 'Commandes retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getCommandeById = async (req, res, next) => {
  try {
    const commande = await commandeService.getCommandeById(req.params.id);
    if (!commande) return sendResponse(res, 404, null, 'Commande not found');
    sendResponse(res, 200, commande, 'Commande retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const createCommande = async (req, res, next) => {
  try {
    const commande = await commandeService.createCommande(req.body);
    sendResponse(res, 201, commande, 'Commande created successfully');
  } catch (error) {
    next(error);
  }
};

const deleteCommande = async (req, res, next) => {
  try {
    const commande = await commandeService.deleteCommande(req.params.id);
    if (!commande) return sendResponse(res, 404, null, 'Commande not found');
    sendResponse(res, 200, null, 'Commande deleted successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCommandes,
  getCommandeById,
  createCommande,
  deleteCommande,
};
