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
      value.push(`${searchPerson}%`, `${searchPerson}%`);
    }
    query += "limit 5";
    return this.connection.query(query, value);
  }

  findOne(user) {
    return this.connection.query(
      `select * from  ${this.table} where mail = ?`,
      [user.mail]
    );
  }
}

module.exports = UserManager;
