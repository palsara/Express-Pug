const fs = require('fs');
// define the template engine
const engine = ((filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // tis is an extremely simple template engine
    let rendered = content.toString()
      .replace(/\#title\#/g, options.title)
      .replace(/\#message\#/g, options.message)
    return callback(null, rendered)
  });
});

//Export
module.exports = engine;