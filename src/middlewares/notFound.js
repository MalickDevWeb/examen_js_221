const { sendResponse } = require('../utils/response');

const notFound = (req, res, next) => {
  sendResponse(res, 404, null, `Not Found - ${req.originalUrl}`);
};

module.exports = notFound;
