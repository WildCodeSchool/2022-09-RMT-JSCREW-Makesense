const AbstractManager = require("./AbstractManager");

class DesignatedUserManager extends AbstractManager {
  constructor() {
    super({ table: "designatedUser" });
  }

  insert(pers) {
    return this.connection.query(
      `insert into ${this.table} (
          user_id,
          decisionMaking_id,
          status_id
        ) values (?, ?, ?)`,
      [pers.user_id, pers.decisionMaking_id, pers.status_id]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where decisionMaking_id = ?`,
      [id]
    );
  }
}

module.exports = DesignatedUserManager;
