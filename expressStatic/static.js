// Load modules
const express = require('express');
const path = require('path');

const port = 3456;

// Server
const app = express();

// Serve static files
app.use(
  express.static(
    path.join(__dirname, 'public'),
  ),
);


// Get
app.get('/', (req, res, next) => {
  const content = `<html>
  <head>
   <meta charset="utf8">
   <title>Static files</title>
   <link rel="stylesheet" href="main.css">
   </head>
   <body>
   <h1>Static files</h1>
   <script src="main.js"></script>
   </body>
   </html>
  `;
  res.end(content);
});
app.listen(port);
