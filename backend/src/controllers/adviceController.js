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
      res
        .location(`/decisions/${req.params.id}/advice/${result.insertId}`)
        .status(201)
        .json(result.insertId);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  postAdvice,
};
