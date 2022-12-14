const express = require("express");

const decisionMakingController = require("./controllers/decisionMakingController");
const decisionController = require("./controllers/decisionController");
const designatedUserController = require("./controllers/designatedUserController");
const adviceController = require("./controllers/adviceController");
const conflictController = require("./controllers/conflictController");
const userController = require("./controllers/userController");

const router = express.Router();

router.get("/decisions", decisionMakingController.browse);
router.get("/decisions", decisionController.browse);
router.get("/designatedUser", designatedUserController.browse);
router.get("/advices", adviceController.browse);
router.get("/conflicts", conflictController.browse);
router.get("/users", userController.browse);

module.exports = router;
