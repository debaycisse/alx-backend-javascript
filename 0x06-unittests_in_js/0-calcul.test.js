const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('Testing the calculateNumber Function', () => {
  it('Should sum up two given numbers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it('Should round up a float type number', () => {
    assert.strictEqual(calculateNumber(3.5, 1.3), 5);
  });

  it('Should return NaN', () => {
    assert.ok(isNaN(calculateNumber(23.5, 'One')));
  });

  it('Should convert a string number', () => {
    assert.strictEqual(calculateNumber('1', '2'), 3);
  });
});
