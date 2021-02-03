const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');


/**
 * These config options are required
 * Option 1: jwt secret
 * Option 2: mechanism to fetch jwt token from request
 */
const jwtOptions = {
  secretOrKey: config.jwt.secret,
};

/**
 * Logic to find the user matching the token passed
 * - If payload type isn't `tokenTypes.ACCESS` return an Error() with message, "Invalid token type" in the callback function
 * - Find user object matching the decoded jwt token
 * - If there's a valid user, return the user in the callback function
 * - If user not found, return `false` in the user field in the callback function
 * - If the function errs, return the error in the callback function
 */
const jwtVerify = async (payload, done) => {
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
