const router = require("express").Router();
const ConfigController = require("../../controller/config");

// axios.get("/api/config")
router.route("/").get(ConfigController.success);

module.exports = router;
