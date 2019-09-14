const expressSession = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');

const port = 3456;

const app = express();
app.listen(port);

app.use(expressSession({
  secret: 'keyboard cat', // biztonsági kulcs a titkosításhoz
  cookie: { // cookie formájában tárolja az adatokat
    maxAge: 70000, // cookie élettartama
  },
}));

app.get('/', (req, res, next) => {
  const sess = req.session;
  if (sess.views) {
    sess.views += 1;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<p>Views: ${sess.views} </p>`);
    res.write(`<p>Expires in: ${sess.cookie.maxAge / 1000}s</p>`);
    res.end();
  } else {
    sess.views = 1;
    res.end('Welcome to the session demo. Refresh');
  }
});
