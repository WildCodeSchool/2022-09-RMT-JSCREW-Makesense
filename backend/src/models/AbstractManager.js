class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findOne(id) {
    let query = `select dm.id, dm.title, dm.description, dm.impact, dm.profit, dm.risk, dm.dateCreate, dm.dateAdvice, dm.dateFirstDecision, dm.dateConflict, dm.dateFinalDecision, u.firstname, u.lastname, ds.status from ${this.table} as dm 
  inner join user as u on u.id = dm.user_id 
  inner join decisionStatus as ds on ds.id = dm.decisionStatus_id`;
    const value = [];
    if (id) {
      query += " where dm.id = ?";
      value.push(id);
    }
    return this.connection.query(query, value);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
