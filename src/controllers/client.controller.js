const clientService = require('../services/client.service');
const { sendResponse } = require('../utils/response');

const getAllClients = async (req, res, next) => {
  try {
    const clients = await clientService.getAllClients();
    sendResponse(res, 200, clients, 'Clients récupérés');
  } catch (error) {
    next(error);
  }
};

const getClientById = async (req, res, next) => {
  try {
    const client = await clientService.getClientById(req.params.id);
    if (!client) return sendResponse(res, 404, null, 'Client non trouvé');
    sendResponse(res, 200, client, 'Client récupéré');
  } catch (error) {
    next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const client = await clientService.createClient(req.body);
    sendResponse(res, 201, client, 'Client créé');
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const client = await clientService.updateClient(req.params.id, req.body);
    sendResponse(res, 200, client, 'Client mis à jour');
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    await clientService.deleteClient(req.params.id);
    sendResponse(res, 200, null, 'Client supprimé');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
