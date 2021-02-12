const router = require("express").Router();
const authController = require("../../controller/authController");

router.route("/").post(authController.create);

router.route("/login").post(authController.checkUser);

module.exports = router;
