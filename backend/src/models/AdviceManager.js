const AbstractManager = require("./AbstractManager");

class AdviceManager extends AbstractManager {
  constructor() {
    super({ table: "advice" });
  }
}

module.exports = AdviceManager;
