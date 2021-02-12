const router = require("express").Router();

router.use("/developer", require('./developer'))
router.use("/config", require('./config'))
router.use("/auth", require("./auth"))

module.exports = router;