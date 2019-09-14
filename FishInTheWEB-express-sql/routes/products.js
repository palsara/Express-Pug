const express = require('express');

const router = express.Router();
const DB = require('../modules/db');

const db = new DB();
/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('products', {
    title: 'Products',
    products: await db.readProducts(),
  });
});

module.exports = router;
