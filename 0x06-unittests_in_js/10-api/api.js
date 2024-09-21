const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.post('/login', (req, res) => {
  if (!req.body || !req.body.userName) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 400;
    return res.send(JSON.stringify(
      { message: 'Missing username in request body' },
    ));
  }
  res.setHeader('Content-Type', 'text/plain');
  const username = req.body.userName;
  return res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
