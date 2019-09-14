// Load modules
const express = require('express');
const formidable = require('formidable');
const util = require('util');
const fsExtra = require('fs-extra');
const path = require('path');

const app = express();
const port = 3456;
app.listen(port, () => {
  console.log(`App listens to ${port}`);
});

// Form src
// enctype: ha file-t is akarunk feltölteni: multipart/form-data kell legyen, ez a fileokat kis szeletekben küldi el a szerver felé
// ha nem ez az enctype, nem is kerülnek elküldésre a szerver felé a fileok
const formSrc = `
<form action="/upload" enctype="multipart/form-data" method="post"> 
<input type="text" name="title"><br>
<input type="file" name="upload" multiple="multiple"><br>
<input type="submit" value="Upload">
</form>`;

app.get('/', (req, res, next) => {
  res.send(formSrc);
});

app.post('/upload', (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    // Temporary location of our uploaded file
    let temp_path = files.upload.path;
    // The file name of theuploaded file
    let file_name = files.upload.name;
    // Location, where we want to copy the uploaded file
    let new_location = path.join(
      __dirname,
      'files',
      file_name,
    );
    fsExtra.copy(temp_path, new_location, (err) => {
      if (err) {
        console.error(err);
      } else {
        res.writeHead(200, {
          'Content-type': 'text/plain',
        });
        res.write('received upload: \n\n');
        res.end(`File uploaded to: ${new_location}`);
      }
    });
  });
});
