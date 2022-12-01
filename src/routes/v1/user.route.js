const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const userValidator = validate(userValidation.getUser);

const router = express.Router();

const auth = require("../../middlewares/auth");
router.get('/:userId', auth, validate(userValidation.getUser), userController.getUser);



module.exports = router;
