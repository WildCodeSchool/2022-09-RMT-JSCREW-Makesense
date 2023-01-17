const AbstractManager = require("./AbstractManager");

class AdviceManager extends AbstractManager {
  constructor() {
    super({ table: "advice" });
  }

  insert(advice) {
    return this.connection.query(
      `insert into ${this.table} (textAdvice, user_id, decisionMaking_id) values (?, ?, ?)`,
      [advice.textAdvice, advice.userId, advice.decisionMakingId]
    );
  }

  findOne(id) {
    const query = `select * from ${this.table} where decisionMaking_id = ?`;
    return this.connection.query(query, [id]);
  }
}

module.exports = AdviceManager;
