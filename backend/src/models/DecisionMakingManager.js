const AbstractManager = require("./AbstractManager");

class DecisionMakingManager extends AbstractManager {
  constructor() {
    super({ table: "decisionMaking" });
  }


  findAll(statusId, search) {
    let query = `select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, dm.user_id, u.firstname, u.lastname, dm.decisionStatus_id, ds.status from ${this.table} as dm 
  inner join user as u on u.id = dm.user_id
  inner join decisionStatus as ds on ds.id = dm.decisionStatus_id`;
    const value = [];
    if (statusId && search) {
      query += " where ds.id = ? and dm.title like ?";
      value.push(statusId);
      value.push(`%${search}%`);
    } else if (statusId) {
      query += " where ds.id = ?";
      value.push(statusId);
    }

    if (parseInt(statusId, 10) === 3) {
      query += " and dateFinalDecision > ?";
      value.push(new Date(Date.now() - 1000 * 60 * 60 * 24 * 7));
    }

    if (parseInt(statusId, 10) === 4) {
      query += " and dateFinalDecision <= ?";
      value.push(new Date(Date.now() + 1000 * 60 * 60 * 24 * 7));
      value.splice(0, 1, 3);
    }
    return this.connection.query(query, value);
  }

  findOne(id) {
    const query = `select dm.id, dm.user_id, dm.title, dm.description, dm.decisionStatus_id, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname, ds.status, dm.firstDecision, dm.finalDecision from ${this.table} as dm 
  inner join user as u on u.id = dm.user_id 
  inner join decisionStatus as ds on ds.id = dm.decisionStatus_id
  where dm.id = ?`;
    return this.connection.query(query, [id]);
  }

  update(firstDecision, id) {
    return this.connection.query(`UPDATE ${this.table} SET ? WHERE id = ?`, [
      firstDecision,
      id,
    ]);
  }

  insert(decisionMaking, id) {
    return this.connection.query(
      `insert into ${this.table} (
        user_id,
        title,
        description,
        impact,
        profit,
        risk,
        decisionStatus_id,
        dateCreate,
        dateFinalDecision
        ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        decisionMaking.title,
        decisionMaking.description,
        decisionMaking.impact,
        decisionMaking.profit,
        decisionMaking.risk,
        1,
        decisionMaking.dateCreate,
        decisionMaking.dateFinalDecision,
      ]
    );
  }
}

module.exports = DecisionMakingManager;
