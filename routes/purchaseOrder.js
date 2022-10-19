const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const lines = require("../models/lines");
const PO = require("../models/purchaseOrder");
const parts = require("../models/parts");


router.get("/add-product", (req, res, next) => {
  res.render('addPurchaseOrder')
});

router.get("/get-all", (req, res, next) => {
      res.render('parts', {
       parts: []
    })
})

//parts, PO and the lines 

router.post("/admin/get-all", (req, res,next) => {
  const body = req.body;
  const poId = body.poId;
  let response;
  PO.getAll(poId).then((res) => {
    response = res[0];

    
  }).then(() => {
    res.render('parts', {
       parts: response
    })
  })
})

router.get('/', (req, res, next) => {
    res.render('retrievePurchaseOrder', {
        purchaseOrders: [],
    length: 0
  })
});

router.get('/')

router.post("/admin/retreive-po", (req, res,next) => {
  const body = req.body;
  const poId = body.poId;
  var response;
  var length;

  PO.findById(poId).then((res) => {
    response = res[0];
    
    length = response.length
  }).then(() => {



  res.render('retrievePurchaseOrder', {
    purchaseOrders: response,
    length: length
  })
  })


  /*
poNo116: 2,
  clientCompID116: 2,
  dateOfPo116: '10 January 2021',
  status116: 'Delivered'

  */

  

  
 
})


// /admin/add-product => POST
router.post("/admin/add-po", (req, res, next) => {
  const body = req.body;
  const bodyLength = Object.keys(body).length;
  const bodyArray = Object.values(body);
  console.log(bodyArray);

  let poId = bodyArray[0];
  let parts = [];
  let linenumber = Math.floor(Math.random() * 100000);
  let clientId = Math.floor(Math.random() * 100000); // add new field for clientid

  const todaysdate = getDate();

  for (let i = 1; i < bodyLength; i += 3) {
    let partnumber = bodyArray[i];
    let qty = bodyArray[i + 1];
    let price = bodyArray[i + 2];
    let priceOrdered = qty * price;
    console.log("priceordered", priceOrdered);

    let newPO = new PO(poId, clientId, todaysdate, "Order Placed");
    newPO.save();

    let newLine = new lines(poId, linenumber, partnumber, qty, priceOrdered);
    newLine.save();
  }
  console.log(parts);

  res.redirect("/");
});

// /admin/add-product => GET
router.get("/get-vendors", (req, res, next) => {
  res.render('vendors', {
    vendors: []
  })
});

router.post("/admin/submit-clientid", (req, res,next) => {
    var response;
    const clientId = req.body.clientId;
    PO.findByClientId(clientId).then((res) => {
      response = res[0];
    }).then(() => {
      console.log(response)
        res.render('vendors', {
    vendors: response,

  })
    })


})

function getDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return currentDate;
}

module.exports = router;
