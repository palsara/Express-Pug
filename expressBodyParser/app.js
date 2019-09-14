// Load modules
const express = require('express');
const bodyParser = require('body-parser');

const port = 3456;

// Server
const app = express();
app.listen(port, () => {
  console.log(`App listens to ${port}`);
});
// Set bodyParser
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// MiddleWare
app.use(require('./modules/myLogger'));

app.use(express.static('public'));
// Get request
app.use('/', require('./routes/index'));

app.use('/register', require('./routes/register'));
