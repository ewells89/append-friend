const express = require("express");
const router = require("express").Router();
const path = require('path')

router.use("/api", require("./api"));

if (process.env.NODE_ENV === "production") {
  router.use(express.static("client/build"));
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

module.exports = router;
