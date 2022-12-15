const AbstractManager = require("./AbstractManager");

class DecisionMakingManager extends AbstractManager {
  constructor() {
    super({ table: "decisionMaking" });
  }

  findAll() {
    return this.connection.query(`select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.decisionStatus, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname  from  ${this.table} as dm
    inner join user as u on u.id=dm.user_id`);
  }
}

module.exports = DecisionMakingManager;
