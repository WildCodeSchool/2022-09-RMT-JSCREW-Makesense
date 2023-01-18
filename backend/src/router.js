const express = require("express");

const router = express.Router();

const checkUser = require("./services/user");
const checkAuth = require("./middleware/auth");

const DecisionMakingController = require("./controllers/decisionMakingController");
const DecisionController = require("./controllers/decisionController");
const DesignatedUserController = require("./controllers/designatedUserController");
const AdviceController = require("./controllers/adviceController");
const ConflictController = require("./controllers/conflictController");
const UserController = require("./controllers/userController");

router.get("/decisionsMaking", checkAuth, DecisionMakingController.browse);
router.get("/decisionsMaking/:id", checkAuth, DecisionMakingController.read);
router.get("/decisions", checkAuth, DecisionController.browse);
router.get("/roles", checkAuth, DesignatedUserController.browse);
router.get("/advices", checkAuth, AdviceController.browse);
router.get("/conflicts", checkAuth, ConflictController.browse);
router.get("/users", checkAuth, UserController.browse);
router.get("/users/list", checkAuth, UserController.read);
router.post("/login", checkUser, UserController.validateUser);
router.post("/users", checkAuth, UserController.add);
router.delete("/users/:id", checkAuth, UserController.destroy);

router.post("/decisions/:id/advice", AdviceController.postAdvice);

module.exports = router;
