const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash } = require("../services/auth");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const validateUser = (req, res) => {
  models.user
    .findOne(req.body)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].password, req.body.password)) {
          const myUser = { ...user[0] };
          delete myUser.password;
          const token = jwt.sign(myUser, process.env.JWT_AUTH_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myUser);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { searchUser } = req.query;
  models.user
    .findByName(searchUser)
    .then(([newDecision]) => {
      res.send(newDecision);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  destroy,
  read,
  validateUser,
  add,
};
