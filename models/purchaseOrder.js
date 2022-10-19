const db = require("../util/database");

module.exports = class purchaseOrder {
  constructor(poNo, clientCompId, dateOfPO, status) {
    this.poNo = poNo;
    this.clientCompId = clientCompId;
    this.dateOfPO = dateOfPO;
    this.status = status;
  }

  //This command inserts new purchase orders into the database
  save() {
    return db.execute(
      `INSERT INTO POs116 (poNo116, clientCompID116, dateOfPo116, status116) VALUES (?, ?, ?, ?)`,
      [this.poNo, this.clientCompId, this.dateOfPO, this.status]
    );
  }
 
  //Get information by poNo
  static findById(poNo) {
    return db.execute(`SELECT * FROM POs116 WHERE poNo116 = ?`, [poNo]);
  }

  //Get information by client Id
  static findByClientId(clientId){
    return db.execute(`SELECT * FROM POs116 WHERE clientCompID116 = ?`, [clientId])
  }

  //get partno, lineno and purchase order information by poNo
  static getAll(poNo){
    return db.execute(`SELECT partNo116, lineNo116, poNo116 FROM Lines116 WHERE poNo116 = ?`, [poNo])
  }
};
