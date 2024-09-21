const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const id = parseInt(req.params.id, 10);
  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
