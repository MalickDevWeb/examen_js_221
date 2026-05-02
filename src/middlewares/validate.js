const { sendResponse } = require('../utils/response');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return sendResponse(res, 400, null, errorMessage);
  }
  next();
};

module.exports = validate;
