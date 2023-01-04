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
  const { textAdvice, userId, decisionMakingId } = req.body;

  models.advice
    .query(
      "INSERT INTO advice(textAdvice, user_id, decisionMaking_id) VALUES (?, ?, ?)",
      [textAdvice, userId, decisionMakingId]
    )
    .then(([result]) => {
      res
        .location(`/decisionsMaking/:id/advice/${result.insertId}`)
        .sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("L'avis n'as pu être enregistré");
    });
};

module.exports = {
  browse,
  postAdvice,
};
