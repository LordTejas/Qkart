const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

/**
 * Generate jwt token
 * - Payload must contain fields
 * --- "sub": `userId` parameter
 * --- "type": `type` parameter
 * 
 * - Token expiration must be set to the value of `expires` parameter
 * 
 * @param {ObjectId} userId - Mongo user id
 * @param {Moment} expires - token expiration time in seconds since unix epoch
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
};

/**
 * Generate auth token
 * - Generate jwt token
 * - Return token and expiry date in required format
 * 
 * @param {User} user
 * @returns {Promise<Object>}
 * 
 * Example response:
 * "access": {
 *          "token": "eyJhbGciOiJIUzI1NiIs...",
 *          "expires": "2021-01-30T13:51:19.036Z"
 * }
 */
const generateAuthTokens = async (user) => {
};



module.exports = {
  generateToken,
  generateAuthTokens,
};
