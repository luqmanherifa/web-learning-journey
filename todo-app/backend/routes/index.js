const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  return res.send("Hello world.");
});

module.exports = router;
