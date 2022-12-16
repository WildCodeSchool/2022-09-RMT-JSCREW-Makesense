const models = require("../models");

const browse = (req, res) => {
  const { status } = req.query;
  models.decisionMaking
    .findAll(status)
    .then(([decisionMaking]) => {
      res.send(decisionMaking);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
