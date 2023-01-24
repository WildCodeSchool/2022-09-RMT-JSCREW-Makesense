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
const update = (req, res) => {
  const decision = req.body;
  const { id } = req.params;

  const targetedEdit = () => {
    if (decision.decisionStatus_id === 1)
      return { firstDecision: decision.firstDecision, decisionStatus_id: 2 };
    return { finalDecision: decision.finalDecision, decisionStatus_id: 3 };
  };

  models.decisionMaking
    .update(targetedEdit(), parseInt(id, 10))
    .then(([decisionMaking]) => {
      if (decisionMaking.affectedRows === 0) {
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

module.exports = {
  browse,
  read,
  update,
};
