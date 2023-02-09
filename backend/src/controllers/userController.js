const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash, hashPassword } = require("../services/auth");

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

const add = async (req, res) => {
  const user = req.body;
  try {
    const hashedPassword = await hashPassword(user.user_password);

    user.user_password = hashedPassword;

    const userData = await models.user.insert(user);

    res.location(`/users/${userData[0].insertId}`).sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = (req, res) => {
  const { role } = req.body;

  // TODO validations (length, format...)

  const id = parseInt(req.params.id, 10);

  models.user
    .update(role, id)
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
const editPassword = async (req, res) => {
  const { oldPassword, password, email } = req.body;
  try {
    const user = await models.user.findOne({ email });

    if (await verifyHash(user[0][0].password, oldPassword)) {
      const hashedPassword = await hashPassword(password);

      const result = await models.user.editPassword(hashedPassword, email);

      if (result[0].affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  destroy,
  read,
  validateUser,
  add,
  edit,
  editPassword,
};
