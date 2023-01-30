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

const read = async (req, res) => {
  const { id } = req.params;
  try {
    const decisionMaking = await models.decisionMaking.findOne(id);
    if (!decisionMaking)
      res.status(404).send("erreur dans le chargement de la page");
    const advice = await models.advice.findOne(id);
    if (!advice) res.status(404).send("erreur dans le chargement de la page");
    const conflict = await models.conflict.findOne(id);
    if (!conflict) res.status(404).send("erreur dans le chargement de la page");
    res.status(200).send({
      ...decisionMaking[0][0],
      conflict: conflict[0],
      advice: advice[0],
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const readByUser = (req, res) => {
  const { id, userId } = req.params;
  if (
    parseInt(userId, 10) === req.auth.id ||
    req.auth.role === "administrator"
  ) {
    models.decisionMaking
      .findOne(id)
      .then(([decisionMaking]) => {
        if (
          parseInt(userId, 10) === decisionMaking[0].user_id ||
          req.auth.role === "administrator"
        ) {
          models.advice
            .findOne(id)
            .then(([rows]) => {
              res.status(200).send({ ...decisionMaking[0], advice: rows });
            })
            .catch((error) => {
              console.error(error);
              res.sendStatus(500);
            });
        } else {
          res.sendStatus(401);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
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

const destroy = (req, res) => {
  models.decisionMaking
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
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
  readByUser,
  update,
  add,
  destroy,
};
