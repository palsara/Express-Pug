// Load modules
const express = require('express');
const bodyParser = require('body-parser');

const port = 3456;

// Server
const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.listen(port);

// Get request
app.get('/', (req, res, next) => {
  const form = `
  <h1>New User</h1>
  <form action="/postuser" method="post">
  <label>Name</label>
<input name="fullName">
<br>
<label>Email</label>
<input name="userEmail" type="email">
<br>
<button type="submit">Send</button>
  </form>
  `;
  res.send(form);
});

app.get('/users', (req, res, next) => {
  res.send('Hello Users page');
});

app.post('/postuser', (req, res, next) => {
  console.log(req.body);
  res.send('This is post page');
});
