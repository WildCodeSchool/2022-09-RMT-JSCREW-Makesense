const AbstractManager = require("./AbstractManager");

class DecisionMakingManager extends AbstractManager {
  constructor() {
    super({ table: "decisionMaking" });
  }

  findAll() {
    return this.connection
      .query(`select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname, dm.decisionStatus_id, ds.status from ${this.table} as dm 
    inner join user as u on u.id = dm.user_id 
    inner join decisionStatus as ds on ds.id = dm.decisionStatus_id`);
  }
}

module.exports = DecisionMakingManager;
