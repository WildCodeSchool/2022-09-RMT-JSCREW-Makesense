const express = require("express");

const decisionMakingController = require("./controllers/decisionMakingController");
const decisionController = require("./controllers/decisionController");

const router = express.Router();

router.get("/decisions", decisionMakingController.browse);
router.get("/decisions", decisionController.browse);

module.exports = router;
