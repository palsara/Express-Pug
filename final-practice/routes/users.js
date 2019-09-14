const express = require('express');

const router = express.Router();
const DB = require('../modules/db');

const db = new DB();
/* GET users listing. */
router.get('/', async (req, res, next) => {
  res.render('users', {
    users: await db.read(),
  });
});

module.exports = router;
