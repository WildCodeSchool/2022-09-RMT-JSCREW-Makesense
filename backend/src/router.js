const express = require("express");

const decisionController = require("./controllers/decisionController");

const router = express.Router();

router.get("/decisions", decisionController.browse);

module.exports = router;
