const models = require("../models");

const browse = (req, res) => {
  const { status } = req.query;
  models.decisionMaking
    .findAll(status)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
