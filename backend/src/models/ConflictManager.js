const AbstractManager = require("./AbstractManager");

class ConflictManager extends AbstractManager {
  constructor() {
    super({ table: "conflict" });
  }
}

module.exports = ConflictManager;
