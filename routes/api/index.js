const router = require("express").Router();

router.use("/developer", require('./developer'))
router.use("/config", require('./config'))

module.exports = router;