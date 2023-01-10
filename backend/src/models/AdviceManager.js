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
}

module.exports = AdviceManager;
