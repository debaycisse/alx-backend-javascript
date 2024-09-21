const http = require('http');
const readFile = require('./3-read_file_async');

const port = 1245;
const filePath = process.argv[2];
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (filePath !== undefined) {
      readFile(filePath)
        .then((data) => {
          res.statusCode = 200;
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.statusCode = 500;
          res.end(`This is the list of our students\n${error.message}`);
        });
    } else {
      res.statusCode = 400;
      res.end('Bad Request');
    }
  } else {
    res.statusCode = 400;
    res.end('Bad Request');
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
