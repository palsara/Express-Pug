const express = require('express');

const router = express.Router();
const DB = require('../modules/db');

const db = new DB();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    message: 'Server works',
  });
});

router.get('/users', async (req, res, next) => {
  const users = await db.read();
  res.json(users);
});

router.delete('/users/:id', async (req, res, next) => {
  const result = await db.delete(req.params.id);
  res.json(result);
});

module.exports = router;
