const commandeService = require('../services/commande.service');
const { sendResponse } = require('../utils/response');

const getAllCommandes = async (req, res, next) => {
  try {
    const commandes = await commandeService.getAllCommandes();
    sendResponse(res, 200, commandes, 'Commandes récupérées');
  } catch (error) {
    next(error);
  }
};

const getCommandeById = async (req, res, next) => {
  try {
    const commande = await commandeService.getCommandeById(req.params.id);
    if (!commande) return sendResponse(res, 404, null, 'Commande non trouvée');
    sendResponse(res, 200, commande, 'Commande récupérée');
  } catch (error) {
    next(error);
  }
};

const createCommande = async (req, res, next) => {
  try {
    const commande = await commandeService.createCommande(req.body);
    sendResponse(res, 201, commande, 'Commande créée et stock mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteCommande = async (req, res, next) => {
  try {
    await commandeService.deleteCommande(req.params.id);
    sendResponse(res, 200, null, 'Commande supprimée et stock restauré');
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
