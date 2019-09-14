// Load modules
const express = require('express');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');

const port = 3456;

// Create app
const app = express();
app.listen(port, () => {
  console.info(`app listens to ${port}`);
});

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/login', (req, res, next) => {
  if (req.body.email === 'kissbela@gmail.com' && req.body.password === 'bela') {
    res.cookie(
      'loggedIn',
      '1', {
        expires: new Date(Date.now() + 3600),
      },
    );
  }
  res.send(JSON.stringify(req.body));
});
