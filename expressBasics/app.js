// Load modules
const express = require('express');
const port = 3456;

// Create new server
const app = express();


// Request handler
app.get('/', function (req, res) {
    res.send('Hello ExpressJs!')
});

// Listen to port
app.listen(port, () => {
    console.log(`Server runs at ${port}`);
})