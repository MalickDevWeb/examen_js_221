const { sendResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error(err.stack);
  
  sendResponse(res, statusCode, null, message);
};

module.exports = errorHandler;
