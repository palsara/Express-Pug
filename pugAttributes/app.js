const express = require('express');
const pug = require('pug');
const path = require('path');
const port = 3456;

const app = express();
app.listen(port, () => {
    console.log(`App listens to ${port}`);
});

//Static files
app.use(express.static('public'));

//Template engine
app.set('views', './views');
app.set('view engine', 'pug');

//index route
app.get('/', (req, res) => {
    res.render('index')
})