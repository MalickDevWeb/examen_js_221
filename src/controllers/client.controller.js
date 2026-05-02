const clientService = require('../services/client.service');
const { sendResponse } = require('../utils/response');

const getAllClients = async (req, res, next) => {
  try {
    const clients = await clientService.getAllClients();
    sendResponse(res, 200, clients, 'Clients retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getClientById = async (req, res, next) => {
  try {
    const client = await clientService.getClientById(req.params.id);
    if (!client) return sendResponse(res, 404, null, 'Client not found');
    sendResponse(res, 200, client, 'Client retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const client = await clientService.createClient(req.body);
    sendResponse(res, 201, client, 'Client created successfully');
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const client = await clientService.updateClient(req.params.id, req.body);
    if (!client) return sendResponse(res, 404, null, 'Client not found');
    sendResponse(res, 200, client, 'Client updated successfully');
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    const client = await clientService.deleteClient(req.params.id);
    if (!client) return sendResponse(res, 404, null, 'Client not found');
    sendResponse(res, 200, null, 'Client deleted successfully');
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
