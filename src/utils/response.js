const { RESPONSE_STATUS } = require('./constants');

const sendResponse = (res, statusCode, data, message = '') => {
  res.status(statusCode).json({
    status: statusCode < 400 ? RESPONSE_STATUS.SUCCESS : RESPONSE_STATUS.ERROR,
    message,
    data,
  });
};

module.exports = { sendResponse };
