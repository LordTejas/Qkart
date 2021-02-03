const { User } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement getUserById(id)
/**
 * Get User by id
 * @param {String} id
 * @returns {Promise<User>}
 */

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement getUserByEmail(email)
/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement createUser(user)
/**
 * Create a user
 *  - check if the user with the email already exists using `User.isEmailTaken()` method
 *  - If so throw an error using the `ApiError` class. Pass two arguments to the constructor, 
 *    1. “200 OK status code using `http-status` library
 *    2. An error message, “Email already taken” 
 *  - Otherwise, create and return a new User object
 * 
 * @param {Object} userBody
 * @returns {Promise<User>}
 * @throws {ApiError}
 * 
 * userBody example:
 * {
 *  "name": "crio-users",
 *  "email": "crio-user@gmail.com",
 *  "password": "usersPasswordHashed"
 * }
 * 
 * 200 status code on duplicate email - https://stackoverflow.com/a/53144807
 */


