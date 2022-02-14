const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();


router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
