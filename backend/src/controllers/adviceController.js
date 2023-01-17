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
        .location(`/decision/advice/${result.insertId}`)
        .status(201)
        .send("Votre avis a bien été enregistré");
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("malheureusement, votre avis n'a pas pu être envoyé");
    });
};

module.exports = {
  browse,
  postAdvice,
};
