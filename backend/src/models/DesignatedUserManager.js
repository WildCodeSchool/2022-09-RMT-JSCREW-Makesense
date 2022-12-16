const AbstractManager = require("./AbstractManager");

class DesignatedUserManager extends AbstractManager {
  constructor() {
    super({ table: "designatedUser" });
  }
}

module.exports = DesignatedUserManager;
