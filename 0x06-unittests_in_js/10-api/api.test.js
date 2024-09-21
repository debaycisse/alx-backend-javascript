const { expect } = require('chai');
const request = require('request');

describe('testing basic express server', () => {
  const url = 'http://localhost:7865/cart/';

  it('correct status code when :id is a number?', (done) => {
    const urlParameter = '12';
    request.get(url + urlParameter, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.statusCode === 200).to.be.true;
      done();
    });
  });

  it('correct status code when :id is NOT a number?', (done) => {
    const urlParameter = 'hello';
    request.get(url + urlParameter, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.statusCode >= 404).to.be.true;
      done();
    });
  });

  it('is the result correct when :id is a number?', (done) => {
    const urlParameter = '11';
    request.get(url + urlParameter, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(body === `Payment methods for cart ${urlParameter}`).to.be.true;
      done();
    });
  });

  it('is the content type correct when :id is a number?', (done) => {
    const urlParameter = '10';
    request.get(url + urlParameter, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.headers['content-type']).to.contain('text/plain');
      done();
    });
  });
});

describe('test suite for the /login endpoint', () => {
  const url = 'http://localhost:7865/login';

  it('is the status code correct when the username is NOT missing', (done) => {
    const options = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      json: {
        userName: 'Azeez',
      },
    };

    request.post(options, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.statusCode === 200).to.be.true;
      done();
    });
  });

  it('is the status code correct when the username is missing', (done) => {
    const options = {
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    request.post(options, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.statusCode >= 400).to.be.true;
      done();
    });
  });

  it('is the respone correct when the username is NOT missing', (done) => {
    const options = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      json: {
        userName: 'Azeez',
      },
    };

    const username = { userName: 'Azeez' };
    request.post(options, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(body === `Welcome ${username.userName}`).to.be.true;
      done();
    });
  });
});

describe('test suite for the /available_payments endpoint', () => {
  const url = 'http://localhost:7865/available_payments';

  it('is the status code correct', (done) => {
    request.get(url, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.statusCode === 200).to.be.true;
      done();
    });
  });

  it('is the content type correct', (done) => {
    request.get(url, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      expect(res.headers['content-type']).contain('application/json');
      done();
    });
  });

  it('is the respone data correct', (done) => {
    request.get(url, (error, res, body) => {
      if (error) {
        res.statusCode = 500;
        res.send('Server error');
        done(error);
      }
      const expectedData = JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      expect(body === expectedData).to.be.true;
      done();
    });
  });
});
