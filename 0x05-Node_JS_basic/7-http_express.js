const express = require('express');
const readFile = require('./3-read_file_async');

const port = 1245;
const filePath = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School! ');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (filePath !== undefined) {
    readFile(filePath)
      .then((data) => {
        const msg = `This is the list of our students\n${data}`;
        res.send(msg);
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        res.send(error);
      });
  } else {
    res.statusCode = 400;
    res.send('Bad Request');
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
