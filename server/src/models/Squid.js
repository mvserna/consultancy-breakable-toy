const Model = require("./Model");

class Squid extends Model {
  static get tableName() {
    return "squids";
  }
}

module.exports = Squid;
