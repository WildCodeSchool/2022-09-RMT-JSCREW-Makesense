const models = require("../models");

const browse = (req, res) => {
  const { status, search } = req.query;
  models.decisionMaking
    .findAll(status, search)
    .then(([decisionMaking]) => {
      res.send(decisionMaking);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.decisionMaking
    .findOne(id)
    .then(([decisionMaking]) => {
      models.advice.findOne(id).then(([rows]) => {
        res.send({ ...decisionMaking[0], advice: rows });
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
};