const Model = require("./Model");

class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Squid;
