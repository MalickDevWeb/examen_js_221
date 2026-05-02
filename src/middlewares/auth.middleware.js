const jwt = require('jsonwebtoken');
const { sendResponse } = require('../utils/response');

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      req.user = decoded;
      next();
    } catch (error) {
      return sendResponse(res, 401, null, 'Non autorisé, token invalide');
    }
  }

  if (!token) {
    return sendResponse(res, 401, null, 'Non autorisé, pas de token');
  }
};

module.exports = { protect };
