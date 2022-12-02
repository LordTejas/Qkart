const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");

const router = express.Router();

router.use('/users', userRoute);
router.use("/auth", authRoute);

const cartRoute = require("./cart.route");

router.use("/products", productRoute);
router.use("/cart", cartRoute);

module.exports = router;
