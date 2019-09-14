const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('users', {
    title: 'Users',
    lead: 'This page shows a list of users.',
  });
});

module.exports = router;
