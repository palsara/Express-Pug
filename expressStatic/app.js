// Native nodeJs
// Load modules
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3456;

// Server
const server = http.createServer((req, res) => {
  let content = '';
  if (req.url == '/') {
    content = `
      <html>
      <head>
       <meta charset="utf8">
       <title>Static files</title>
       </head>
       <body>
       <h1>Static files</h1>
       <script src="main.js"></script>
       </body>
       </html>
      `;
  } else {
    const filePath = path.join(__dirname, req.url);
    res.setHeader('content-type','text/javascript');
    content = fs.readFileSync(filePath, 'utf8');
  }
  res.end(content);
}).listen(port);
