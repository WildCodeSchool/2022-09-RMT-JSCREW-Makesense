const AbstractManager = require("./AbstractManager");

class ConflictManager extends AbstractManager {
  constructor() {
    super({ table: "conflict" });
  }

  insert(conflict) {
    return this.connection.query(
      `insert into ${this.table} (textConflict, user_id, decisionMaking_id) values (?, ?, ?)`,
      [conflict.textConflict, conflict.userId, conflict.decisionMakingId]
    );
  }

  findOne(id) {
    const query = `select textConflict, u.firstname, u.lastname from ${this.table} 
    inner join user as u on u.id = ${this.table}.user_id 
    where decisionMaking_id = ?`;
    return this.connection.query(query, [id]);
  }
}

module.exports = ConflictManager;
