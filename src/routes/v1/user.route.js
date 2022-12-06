const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const userValidator = validate(userValidation.getUser);

const router = express.Router();

const auth = require("../../middlewares/auth");
router.get('/:userId', auth, userValidator, userController.getUser);


router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
