const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Testing the calculateNumber Function', () => {
  describe('Testing the SUBTRACT operation', () => {
    it('Should return a positive value', () => {
      assert.ok(calculateNumber('SUBTRACT', 2, 1) > 0);
    });
    it('Should return a negative value', () => {
      assert.ok(calculateNumber('SUBTRACT', 1, 2) < 0);
    });
    it('Should convert a string number', () => {
      assert.ok(typeof calculateNumber('SUBTRACT', '23', '20') === 'number');
    });
    it('Should return NaN', () => {
      assert.ok(isNaN(calculateNumber('SUBTRACT', 'One', 20)));
    });
  });

  describe('Testing the SUM operation', () => {
    it('Should sum two given values', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 1), 3);
    });
    it('Should round up a floating point value', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.7), 4);
    });
    it('Should convert a string number', () => {
      assert.ok(typeof calculateNumber('SUM', '23', '20') === 'number');
    });
    it('Should return NaN', () => {
      assert.ok(isNaN(calculateNumber('SUM', 'One', 20)));
    });
  });

  describe('Testing the DIVIDE operation', () => {
    it('Should return a value less than one', () => {
      assert.ok(calculateNumber('DIVIDE', 1, 2) < 1);
    });
    it('Should return a value, greater than one', () => {
      assert.ok(calculateNumber('DIVIDE', 3.5, 1.7) > 1);
    });
    it('Should convert a string number', () => {
      assert.ok(typeof calculateNumber('DIVIDE', '23', '20') === 'number');
    });
    it('Should return NaN', () => {
      assert.ok(isNaN(calculateNumber('DIVIDE', 'One', 20)));
    });
  });
});
