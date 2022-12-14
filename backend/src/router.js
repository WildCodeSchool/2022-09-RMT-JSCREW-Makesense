const express = require("express");

const router = express.Router();

const DecisionMakingController = require("./controllers/DecisionMakingController");
const DecisionController = require("./controllers/DecisionController");
const DesignatedUserController = require("./controllers/DesignatedUserController");
const AdviceController = require("./controllers/AdviceController");
const ConflictController = require("./controllers/ConflictController");
const UserController = require("./controllers/UserController");

router.get("/decisionsMaking", DecisionMakingController.browse);
router.get("/decisions", DecisionController.browse);
router.get("/roles", DesignatedUserController.browse);
router.get("/advices", AdviceController.browse);
router.get("/conflicts", ConflictController.browse);
router.get("/users", UserController.browse);

module.exports = router;
