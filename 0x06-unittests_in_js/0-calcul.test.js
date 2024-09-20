const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('testing the calculateNumber Function', () => {
  it('should sum up two given numbers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it('should round up a float type number', () => {
    assert.strictEqual(calculateNumber(3.5, 1.3), 5);
  });

  it('should return NaN', () => {
    assert.ok(Number.isNaN(calculateNumber(23.5, 'One')));
  });

  it('should convert a string number', () => {
    assert.strictEqual(calculateNumber('1', '2'), 3);
  });
});
