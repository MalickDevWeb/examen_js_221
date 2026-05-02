const authService = require('../services/auth.service');
const { sendResponse } = require('../utils/response');

const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    sendResponse(res, 201, user, 'Utilisateur enregistré');
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    sendResponse(res, 200, { user, token }, 'Connexion réussie');
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
