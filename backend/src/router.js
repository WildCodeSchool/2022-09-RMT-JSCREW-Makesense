const express = require("express");

const decisionMakingController = require("./controllers/decisionMakingController");
const decisionController = require("./controllers/decisionController");
const designatedUserController = require("./controllers/designatedUserController");

const router = express.Router();

router.get("/decisions", decisionMakingController.browse);
router.get("/decisions", decisionController.browse);
router.get("/designatedUser", designatedUserController.browse);

module.exports = router;
