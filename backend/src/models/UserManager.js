const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByName(searchPerson) {
    let query = `select firstname, lastname from ${this.table}`;
    const value = [];
    if (searchPerson) {
      query += " where firstname like ? or lastname like ?";
      value.push(`%${searchPerson}%`, `%${searchPerson}%`);
    }
    return this.connection.query(query, value);
  }
}

module.exports = UserManager;
