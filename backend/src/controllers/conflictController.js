const models = require("../models");

const browse = (req, res) => {
  models.conflict
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postConflict = (req, res) => {
  models.conflict
    .insert(req.body)
    .then(([result]) => {
      res
        .location(`/decisions/${req.params.id}/conflict/${result.insertId}`)
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
  postConflict,
};
