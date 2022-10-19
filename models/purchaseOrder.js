const db = require("../util/database");

module.exports = class purchaseOrder {
  constructor(poNo, clientCompId, dateOfPO, status) {
    this.poNo = poNo;
    this.clientCompId = clientCompId;
    this.dateOfPO = dateOfPO;
    this.status = status;
  }

  save() {
    //console.log("save", this.poNo, this.lineNO, this.partNo, this.qty, this.priceOrdered);

    return db.execute(
      `INSERT INTO POs116 (poNo116, clientCompID116, dateOfPo116, status116) VALUES (?, ?, ?, ?)`,
      [this.poNo, this.clientCompId, this.dateOfPO, this.status]
    );
  }

  static findById(poNo) {
    return db.execute(`SELECT * FROM POs116 WHERE poNo116 = ?`, [poNo]);
  }

  static findByClientId(clientId){
    return db.execute(`SELECT * FROM POs116 WHERE clientCompID116 = ?`, [clientId])
  }

  static getAll(poNo){
    return db.execute(`SELECT partNo116, lineNo116, poNo116 FROM Lines116 WHERE poNo116 = ?`, [poNo])
  }
};
