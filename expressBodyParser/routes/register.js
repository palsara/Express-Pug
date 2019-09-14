const express = require('express');

const router = express.Router();
const path = require('path');


router.post('/', (req, res, next) => {
  let content = `
  <pre>${JSON.stringify(req.body, null, 4)}</pre>
  `;
  res.send(content);
});

module.exports = router;
