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
        res.status(200).send({ ...decisionMaking[0], advice: rows });
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const decisionMaking = req.body;
  const { experts, impacted } = decisionMaking;

  delete decisionMaking.experts;
  delete decisionMaking.impacted;

  models.decisionMaking
    .insert(decisionMaking, req.auth.id)
    .then(async ([result]) => {
      try {
        const persons = [
          ...experts.map((exp) => {
            return {
              user_id: exp.id,
              status: "Personne expertes",
              decisionMaking_id: result.insertId,
            };
          }),
          ...impacted.map((imp) => {
            return {
              user_id: imp.id,
              status: "Personne impactée",
              decisionMaking_id: result.insertId,
            };
          }),
        ];
        await Promise.all(
          persons.map((pers) => models.designatedUser.insert(pers))
        );
        res.status(201).send({ id: result.insertId });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
};
