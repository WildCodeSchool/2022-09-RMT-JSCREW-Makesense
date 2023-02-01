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

  find(decisionMakingId, statusId) {
    return this.connection.query(
      `select user.firstname, user.lastname from ${this.table} 
      inner join user on user.id = user_id
      where decisionMaking_id = ?
      and status_id = ?
      `,
      [decisionMakingId, statusId]
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
