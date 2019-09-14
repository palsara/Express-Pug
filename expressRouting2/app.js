// Load modules
const express = require('express');

const port = 3456;

// Server
const app = express();
app.listen(port, () => {
  console.log('App listens to port 3456');
});

// Users
const Users = [{
  name: 'Janko',
  age: 33,
  address: 'Budapest',
},
{
  name: 'Dani',
  age: 20,
  address: 'Budapest',
},
{
  name: 'Erika',
  age: 50,
  address: 'Pécs',
},
{
  name: 'Tünde',
  age: 16,
  address: 'Eger',
},
];

// Index
app.get('/', (req, res) => {
  const content = `
<form action="/auth" method="post">
<input type="email" name"userEmail">
<br>
<input type="password" name"userpassword">
<br>
<button type="submit">Login</button>
</form>
`;
  res.send(content);
});

app.get('/users?page', (req, res) => { // kérdőjel előtti karakter nem kötelező
  res.json(Users);
});
app.get('/users?page/:id', (req, res, next) => { // kérdőjel előtti karakter nem kötelező
  if (Users[req.params.id]) {
    res.json(Users[req.params.id]);
  } else {
    next();
  }
});
// Auth
app.all('/auth', (req, res, next) => {
  if (req.method == 'POST') {
    console.log('access granted');
    res.send('Right url and method');
  } else {
    next();
  }
});

app.all('*', (req, res) => {
  res.status(404);
  res.send('This page does not exist');
});
