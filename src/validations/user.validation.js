const Joi = require("joi");
const { objectId } = require("./custom.validation");

/**
 * Example url: `/v1/users/:userId`
 * Validate the "userId" url *params* field. "userId" value should be a
 * - string
 * - valid Mongo id -> Use the helper function in src/validations/custom.validation.js
 */
const getUser = {
  params: Joi.object().keys({
  }),
};


module.exports = {
  getUser,
};
