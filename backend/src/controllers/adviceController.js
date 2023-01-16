const models = require("../models");

const browse = (req, res) => {
  models.advice
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postAdvice = (req, res) => {
  models.advice
    .insert(req.body)
    .then(([result]) => {
      res.location(`/decision/advice/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.advice
    .findOne(id)
    .then(([advices]) => {
      res.send(advices[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  postAdvice,
  read,
};
