const db = require("../util/database");

module.exports = class parts {
  constructor(partNo, partName, qoh) {
    this.partNo = partNo;
    this.partName = partName;
    this.qoh = qoh;
  }

  static fetchAll() {
    dbconfig.execute("SELECT partNo, partName FROM Parts166");
  }
};
