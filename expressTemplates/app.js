const express = require('express');
const app = express();
const port = 3456;

app.listen(port, () => {
    console.log(`App listens to ${port}`);
});

app.engine('ntl', require('./modules/ntl'));
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        message: 'This is the home page!'
    });
});
