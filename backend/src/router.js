const express = require("express");

const router = express.Router();

const checkUser = require("./services/user");
const { checkAuth, checkEmail } = require("./middleware/auth");

const DecisionMakingController = require("./controllers/decisionMakingController");
const DesignatedUserController = require("./controllers/designatedUserController");
const AdviceController = require("./controllers/adviceController");
const ConflictController = require("./controllers/conflictController");
const UserController = require("./controllers/userController");

router.get("/decisionsMaking", checkAuth, DecisionMakingController.browse);
router.get(
  "/decisionsMaking/user/:userId",
  checkAuth,
  DecisionMakingController.browseByUser
);
router.get("/decisionsMaking/:id", checkAuth, DecisionMakingController.read);
router.get("/roles", checkAuth, DesignatedUserController.browse);
router.get("/advices", checkAuth, AdviceController.browse);
router.get("/conflicts", checkAuth, ConflictController.browse);
router.get("/users", checkAuth, UserController.browse);
router.get("/users/list", checkAuth, UserController.read);
router.get(
  "/user/:userId/decisions/:id",
  checkAuth,
  DecisionMakingController.readByUser
);
router.post("/login", checkUser, UserController.validateUser);
router.post("/users", checkAuth, UserController.add);
router.put("/users/:id", checkAuth, UserController.edit);
router.put("/decision/:id/update", checkAuth, DecisionMakingController.update);
router.put("/password", checkEmail, UserController.editPassword);
router.delete("/users/:id", checkAuth, UserController.destroy);
router.delete(
  "/decisionsMaking/:id",
  checkAuth,
  DecisionMakingController.destroy
);

router.post("/decisions/:id/advice", checkAuth, AdviceController.postAdvice);
router.post(
  "/decisions/:id/conflict",
  checkAuth,
  ConflictController.postConflict
);
router.post("/decisionsMaking", checkAuth, DecisionMakingController.add);

router.get("/conflicts", checkAuth, ConflictController.browse);

module.exports = router;
