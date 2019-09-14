// Load modules
const express = require('express');

const port = 3456;

// Server
const app = express();
app.listen(port, () => {
    console.log(`App listens to ${port}`);
});


// MiddleWare
app.use(require('./modules/myLogger'));

// Get request
app.use('/', require('./routes/index'));