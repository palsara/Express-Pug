const express = require('express');
const app = express();
const pug = require('pug');
const port = 3456;
app.listen(port, () => {
    console.log(`App listens to ${port}`);
})

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        message: 'This is the home page!'
    })
})
app.get('/users', (req, res) => {
    res.render('users', {
        title: 'Users page',
        message: 'Welcome to users page!'
    })
})