const express = require('express');

const router = express.Router();
const DB = require('../modules/db');

const db = new DB();
/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('orders', {
    title: 'Orders',
    orders: await db.readOrders(),
  });
});

module.exports = router;
