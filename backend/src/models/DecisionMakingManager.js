const AbstractManager = require("./AbstractManager");

class DecisionMakingManager extends AbstractManager {
  constructor() {
    super({ table: "decisionMaking" });
  }

  findAll(id, search) {
    let query = `select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname, dm.decisionStatus_id, ds.status from ${this.table} as dm 
  inner join user as u on u.id = dm.user_id 
  inner join decisionStatus as ds on ds.id = dm.decisionStatus_id`;
    const value = [];
    if (id && search) {
      query += " where ds.id = ? and dm.title like ? ";
      value.push(id);
      value.push(`%${search}%`);
    } else if (id) {
      query += " where ds.id = ?";
      value.push(id);
    }
    return this.connection.query(query, value);
  }

  findOne(id) {
    const query = `select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname, ds.status, fd.textDecision as firstDecision, ed.textDecision as finalDecision from ${this.table} as dm 
  inner join user as u on u.id = dm.user_id 
  inner join decisionStatus as ds on ds.id = dm.decisionStatus_id
  left join firstDecision as fd on fd.decisionMaking_id = dm.id
  left join finalDecision as ed on ed.decisionMaking_id = dm.id
  where dm.id = ?`;
    return this.connection.query(query, [id]);
  }
}

module.exports = DecisionMakingManager;
