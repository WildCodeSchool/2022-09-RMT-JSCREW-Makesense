const express = require("express");

const router = express.Router();

const DecisionMakingController = require("./controllers/decisionMakingController");
const DecisionController = require("./controllers/decisionController");
const DesignatedUserController = require("./controllers/designatedUserController");
const AdviceController = require("./controllers/adviceController");
const ConflictController = require("./controllers/conflictController");
const UserController = require("./controllers/userController");

router.get("/decisionsMaking", DecisionMakingController.browse);
router.get("/decisionsMaking/:id", DecisionMakingController.read);
router.get("/decisions", DecisionController.browse);
router.get("/roles", DesignatedUserController.browse);
router.get("/advices", AdviceController.browse);
router.get("/conflicts", ConflictController.browse);
router.get("/users", UserController.browse);
router.get("/users/list", UserController.read);

router.delete("/users/:id", UserController.destroy);

module.exports = router;
