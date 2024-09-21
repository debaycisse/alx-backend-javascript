const { expect } = require('chai');
const request = require('request');

describe('testing basic express server', () => {
  const url = 'http://localhost:7865/';

  it('is the status code correct?', (done) => {
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

  it('is the result correct?', (done) => {
      request.get(url, (error, res, body) => {
        if (error) {
          res.statusCode = 500;
          res.send('Server error');
          done(error);
        }
        expect(body === 'Welcome to the payment system').to.be.true;
        done();
      });
  });

  it('is the content type correct?', (done) => {
    request.get(url, (error, res, body) => {
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
