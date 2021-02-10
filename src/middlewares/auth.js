const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

/**
 * Custom callback function implementation to verify callback from passport
 * - If any of the below conditions are true, reject the promise and send back an ApiError object with
 * --- Response status code - "401 Unauthorized"
 * --- Message - "Please authenticate"
 * Condition 1: Exception occurs
 * Condition 2: Authentication failed
 *
 * - If authentication succeeds,
 * --- set the `user` property of the `request` object to the user object passed to the callback as parameter
 * --- resolve the promise
 */

/**
 * Auth middleware to authenticate from header
 * and attatch authenticated user object to the request
 *
 */
const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    // TODO: CRIO_TASK_MODULE_AUTH - Authenticate request
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
