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
