const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});
app.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}`);
});
module.exports = app;
